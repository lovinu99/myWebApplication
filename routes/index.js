const express = require('express')
const {getHomePage, getPostPage, postPostPage} = require("../controllers/postController")

const indexRouter = express.Router()

indexRouter.get("/",getHomePage)
indexRouter.get("/post",getPostPage)
indexRouter.post("/post", postPostPage)
module.exports = indexRouter