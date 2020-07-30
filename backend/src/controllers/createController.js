const faker = require("faker");
const Article = require("../models/Article");

exports.createMethod = async(req,res) => {  

    for(let i=0;i<100;i++){
        await Article.create({
            title: faker.name.title(),
            imageURL: faker.image.imageUrl(),
            description: faker.lorem.paragraph()
        });
    }

    res.json({
        message: "Registros creados"
    });
}

exports.getArticles = async(req,res) => {  
    try{
        const articles = await Article.find();

        res.json(articles);
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error"
        });
    }    
}