//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//TODO

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

// Requests targeting all articles

app.route("/articles")

    .get(function (req, res) {
        Article.find({})
            .then(found => {
                res.send(found);
            })
            .catch(err => {
                console.error(err);
            });
    })

    .post(function (req, res) {


        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save()
            .then(() => {
                res.send("Successfully added a new article.");
            })
            .catch((err) => {
                res.send(err);
            });
    })

    .delete(function (req, res) {
        Article.deleteMany({})
            .then(() => {
                res.send("Successfully deleted the articles.");
            })
            .catch((err) => {
                res.send(err);
            });
    });

// Requests targeting a specific articles

app.route("/articles/:articleTitle")

    .get(function (req, res) {
        Article.findOne({ title: req.params.articleTitle })
            .then(found => {
                if (found) {
                    res.send(found);
                } else {
                    res.send("No articles were found");
                }
            })
            .catch(err => {
                console.error(err);
            });
    })

    // .put(async function(req, res) {
    //     const article = await Article.findOneAndDelete({ title: req.params.articleTitle });

    //     if (!article) {
    //       return res.status(404).send("Article not found");
    //     }

    //     const newArticle = new Article({
    //       title: req.body.title,
    //       content: req.body.content,
    //     });

    //     newArticle.save()
    //       .then(() => {
    //         res.send("Successfully updated article");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   });


    .put(async (req, res) => {
        try {
            await Article.replaceOne(
                { title: req.params.articleTitle },
                { title: req.body.title, content: req.body.content },
            );
            res.send("Successfully updated");
        } catch (err) { console.log(err); }
    })
    
    .patch(function (req, res) {
        try {
          Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body }
          ).then(function () {
            res.send("Successfully updated article");
          });
        } catch (err) {
          res.send(err);
        }
      })

      .delete(function (req, res) {
        try {
          Article.deleteMany(
            { title: req.params.articleTitle }
          ).then(function () {
            res.send("Successfully Deleted the specified article");
          });
        } 
        catch (err) 
        {
          res.send(err);
        }
      });





app.listen(3000, function () {
    console.log("Server started on port 3000");
});