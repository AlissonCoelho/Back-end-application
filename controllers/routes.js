const User = require('./users');
const Post = require('./post');
module.exports = app => {
    app.post('/creatUser', (req,res) => {User.creatUser(req,res)});

    app.post('/login', (req,res) => {User.login(req,res)});

    app.get('/logout', (req,res) => {User.logout(req,res)});

    app.post('/creatPost', (req,res) => {Post.creatPost(req,res)});

    app.get('/addFollow', (req,res) => {User.addFollow(req,res)});

    app.delete('/deleteFollow', (req,res) => {User.deleteFollow(req,res)});

    app.get('/NumFollowers', (req,res) => {User.NumFollowers(req,res)});

    app.get('/NumFollowing', (req,res) => {User.NumFollowing(req,res)});

    app.get('/allPost', (req,res) => {Post.allPost(req,res)});

    app.get('/postFollow', (req,res) => {Post.postFollow(req,res)});

    app.get('/countPostUser', (req,res) => {Post.countPostUser(req,res)});

    app.get('/postUser', (req,res) => {Post.postUser(req,res)});

    app.get('/verifyFollow', (req,res) => {User.verifyFollow(req,res)});

    app.post('/repostOrQuote', (req,res) => {Post.repostOrQuote(req,res)});


}