class HttpError extends Error {
    constructor(message,errorCode){
        super(message); // Add a "message" Property
        this.code = errorCode; //Adds a "code" Property
    }
}

module.exports = HttpError;