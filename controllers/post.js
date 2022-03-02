const connection = require('../model/connection')
const jwt = require("jsonwebtoken");
const segredo = "segredo"

class Post {
    creatPost(req, res) {
        try {
            const sql = 'INSERT INTO Post SET ?'
            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);

            req.body.KeyUser = userJwt.KeyUser;
            req.body.KeyUserRespost = userJwt.KeyUser;
            req.body.Repost = false;
            req.body.DatePost = new Date();

            connection.query(sql, req.body, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result))
            console.log("body creatPost", req.body);

        } catch (error) {
            console.log("error on creat Post");
            res.status(500).send("error on creat Post");
            return;
        }

    }

    allPost(req, res) {
        try {
            const sql = `SELECT * FROM post `
            connection.query(sql, (err, result) => {
                try {
                    if (err) {
                        res.status(400).send(err);
                    }
                    console.log("request post user");
                    res.status(400).send(result)

                } catch (error) {
                    console.log("error on request post user");
                    res.status(500).send("error on request post user");
                    return;
                }
            })

        } catch (error) {
            console.log("error on request post user");
            res.status(500).send("error on request post user");
            return;
        }
    }

    postFollow(req, res) {
        try {
            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);

            const sql = `SELECT post.KeyPost,post.KeyUser,post.Post, post.DatePost, post.Repost, post.KeyUserRespost, post.KeyPostRespost, post.QuotePost FROM post 
            JOIN following on following.KeyFollowing = post.KeyUser
            WHERE following.KeyUser = ${userJwt.KeyUser}`

            connection.query(sql, (err, result) => {
                try {
                    if (err) {
                        res.status(400).send(err);
                    }
                    console.log("request post who Following");
                    res.status(400).send(result)

                } catch (error) {
                    console.log("error on request post who Following");
                    res.status(500).send("error on request post who Following");
                    return;
                }
            })

        } catch (error) {
            console.log("error on request post who Following");
            res.status(500).send("error on request post who Following");
            return;
        }
    }

    countPostUser(req, res) {
        try {

            const sql = `SELECT COUNT (KeyUser) as contPosts FROM post WHERE post.KeyUser = ${parseInt(req.query.KeyUser)}`
            
            connection.query(sql, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result[0]))
            console.log("count posts by user:", req.query.KeyUser);

        } catch (error) {
            console.log("error on count posts");
            res.status(500).send("error on count posts");
            return;
        }
    }

    postUser(req, res) {
        try {
            const sql = `SELECT * FROM post WHERE post.KeyUser = ${parseInt(req.query.KeyUser)} `
            connection.query(sql, (err, result) => {
                try {
                    if (err) {
                        res.status(400).send(err);
                    }
                    console.log("request post user");
                    res.status(400).send(result)

                } catch (error) {
                    console.log("error on request post user");
                    res.status(500).send("error on request post user");
                    return;
                }
            })

        } catch (error) {
            console.log("error on request post user");
            res.status(500).send("error on request post user");
            return;
        }
    }

    repostOrQuote(req, res) {
        try {
            const sql = 'INSERT INTO Post SET ?'
            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);

            req.body.KeyUser = userJwt.KeyUser;
            req.body.KeyUserRespost = req.query.KeyUser;
            req.body.Repost = true;
            req.body.DatePost = new Date();
            req.body.KeyPostRespost = req.query.KeyPost;
            

            connection.query(sql, req.body, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result))
            console.log("body repostOrQuote", req.body);

        } catch (error) {
            console.log("error on creat repostOrQuote");
            res.status(500).send("error on creat repostOrQuote");
            return;
        }

    }

}
module.exports = new Post