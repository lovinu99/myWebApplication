const {Posts} = require("../database/models")
const {catchAsync} = require("../lib/catchAsync")

const addPost = async(poster, posterImage, header, body)=>{
    await Posts.create({
        poster: poster,
        poster_image: posterImage,
        header: header,
        content: body
    });
}

const getAllPost = async () => {
    const _product = await Posts.findAll({
        where: {
        },
        order: [['updatedAt', 'DESC']]
    });
    return _product;
}

module.exports.addPost = addPost
module.exports.getAllPost = getAllPost