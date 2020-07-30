const {Router} = require("express");
const router = Router();

const createController = require("../controllers/createController");

module.exports = () => {


    router.get("/create",createController.createMethod);

    router.get("/articles",createController.getArticles);

    return router;
}