const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Place = require("../models/place");
const User = require("../models/user");

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    return next(new HttpError("Could not find place.", 500));
  }

  if (!place) {
    return next(new HttpError("Could not find place for this id.", 404));
  }

  res.json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithPlaces;

  try {
    userWithPlaces = await User.findById(userId).populate("places");
  } catch (err) {
    return next(new HttpError("Fetching places failed.", 500));
  }

  if (!userWithPlaces) {
    return next(new HttpError("Could not find user.", 404));
  }

  res.json({
    places: userWithPlaces.places.map((place) =>
      place.toObject({ getters: true })
    )
  });
};



const createPlace = async (req, res, next) => {

  const { title, description, creator } = req.body;

  if (!req.file) {
    return next(new HttpError("Image upload failed.", 422));
  }

  const createdPlace = new Place({
    title,
    description,
    image: req.file.path,

    location: {
      lat: 20.2961,
      lng: 85.8245
    },

    creator
  });

  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    return next(new HttpError("Creating place failed.", 500));
  }

  if (!user) {
    return next(new HttpError("Could not find user.", 404));
  }

  try {

    await createdPlace.save();

    user.places.push(createdPlace);
    await user.save();

  } catch (err) {
    return next(new HttpError("Creating place failed.", 500));
  }

  res.status(201).json({ place: createdPlace });

};


const updatePlace = async (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs.", 422));
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  let place;

  try {
    place = await Place.findById(placeId);
  } catch (err) {
    return next(new HttpError("Update failed.", 500));
  }

  place.title = title;
  place.description = description;

  try {
    await place.save();
  } catch (err) {
    return next(new HttpError("Could not update place.", 500));
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });

};


const deletePlace = async (req, res, next) => {

  const placeId = req.params.pid;

  let place;

  try {
    place = await Place.findById(placeId).populate("creator");
  } catch (err) {
    console.log(err);
    return next(new HttpError("Something went wrong, could not delete place.", 500));
  }

  if (!place) {
    return next(new HttpError("Could not find place for this id.", 404));
  }

  const imagePath = path.join(__dirname, "..", place.image);

  try {

    await place.deleteOne();

    place.creator.places.pull(place);
    await place.creator.save();

  } catch (err) {
    console.log(err);
    return next(new HttpError("Delete failed.", 500));
  }

  fs.unlink(imagePath, err => {
    if (err) {
      console.log(err);
    }
  });

  res.status(200).json({ message: "Deleted place." });

};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;