module.exports = (req, res, next) => {

    userId = true;
    if (!req.query.userId) {
        resp.send("Ingresa con una cuenta")
    } else {
        this.next();
    }
}