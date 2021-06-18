
const {getAllPost, addPost} = require("../model/postModel") 
const {catchAsync} = require("../lib/catchAsync")

const getHomePage =  async (req, res) => {
    try{
        const posts = await getAllPost()
        res.render("view/index", { title: "Demo NodeJs App", postList: posts });
    } catch (err){
        res.send(err.message)
    }
};

const getPostPage =  async (req, res) => {
       try{
        res.render("view/post", { title: "Post - Demo NodeJs App" });
    } catch (err){
        res.send(err.message)
    }
};

const postPostPage =  async (req, res) => {
    try{
        await addPost(req.body.poster, req.body.image, req.body.header,req.body.content)
        res.redirect("/");
    } catch (err){
        res.send(err.message)
    }
};

exports.getHomePage = getHomePage
exports.getPostPage = getPostPage
exports.postPostPage = postPostPage
