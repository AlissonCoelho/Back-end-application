const connection = require('../model/connection')
const jwt = require("jsonwebtoken");
const segredo = "segredo"

function creatTokenJWT(usuario) {
    const payload = { KeyUser: usuario.KeyUser, userName: usuario.userName };
    const token = jwt.sign(payload, segredo);
    return token;
}

class User {
    creatUser(req, res) {
        try {
            const sql = 'INSERT INTO User SET ?'
            req.body.Joined = new Date();
            connection.query(sql, req.body, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result))
            console.log("body creatUser", req.body);
        } catch (error) {
            console.log("error on creat user");
            res.status(500).send("error on creat user");
            return;
        }

    }
    login(req, res) {
        try {
            const userName = req.body.userName
            const sql = `SELECT password,KeyUser FROM user WHERE user.userName = "${userName}"`
            connection.query(sql, (err, result, fields) => {
                if (err) {
                    res.status(400).send(err)
                }
                try {
                    if (result[0].password = req.body.password) {

                        req.body.KeyUser = result[0].KeyUser;
                        const token = creatTokenJWT(req.body);
                        res.set('Autorization', token);
                        console.log('login successful');
                        res.status(204).send();
                    } else {
                        console.log("wrong passwor");
                        res.status(400).send({ error: 'error on login' })
                    }
                } catch (error) {
                    console.log("error on login");
                    res.status(500).send("error on login");
                    return;
                }
            })
        } catch (error) {
            console.log("error on login");
            res.status(500).send("error on login");
            return;
        }
    }
    logout(req, res) {
        res.set('Autorization', "");
        res.status(204).send({ msg: 'logout successful' });
        console.log('logout successful');
    }
    addFollow(req, res) {
        try {

            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);
            const Follow = {
                KeyUser: userJwt.KeyUser,
                KeyFollowing: parseInt(req.query.KeyFollowing)
            }

            if (Follow.KeyFollowing === Follow.KeyUser) {
                res.status(400).send({ msg: "user can't Follow yourself" });
                return;
            }

            let sql = `SELECT * FROM following WHERE following.KeyUser = ${Follow.KeyUser} AND following.KeyFollowing = ${Follow.KeyFollowing}`
            connection.query(sql, Follow, (err, result) => {
                try {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (result.length) {
                        console.log("already follow");
                        res.status(400).send({ msg: "already follow" })
                        return;
                    } else {
                        sql = 'INSERT INTO following SET ?'
                        connection.query(sql, Follow, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result))
                        console.log("body Follow", Follow);
                    }
                } catch (error) {
                    console.log("error on Follow");
                    res.status(500).send("error on Follow");
                    return;
                }
            })

        } catch (error) {
            console.log("error on Follow");
            res.status(500).send("error on Follow");
            return;
        }

    }
    deleteFollow(req, res) {
        try {
            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);
            const Follow = {
                KeyUser: userJwt.KeyUser,
                KeyFollowing: parseInt(req.query.KeyFollowing)
            }

            const sql = `DELETE FROM following WHERE following.KeyUser = ${Follow.KeyUser} AND following.KeyFollowing = ${Follow.KeyFollowing}`
            if (Follow.KeyFollowing === Follow.KeyUser) {
                res.status(400).send({ msg: "user can't Follow yourself" });
                return;
            }

            connection.query(sql, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result))
            console.log("delete", Follow);

        } catch (error) {
            console.log("error on delete Follow");
            res.status(500).send("error on delete Follow");
            return;
        }

    }
    NumFollowers(req, res) {
        try {
            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);

            const sql = `SELECT COUNT (KeyFollowing) as Followers FROM following WHERE following.KeyFollowing = ${userJwt.KeyUser}`
            
            connection.query(sql, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result[0]))
            console.log("COUNT", userJwt.userName);

        } catch (error) {
            console.log("error on count NumFollowers");
            res.status(500).send("error on count NumFollowers");
            return;
        }

    }
    NumFollowing(req, res) {
        try {
            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);

            const sql = `SELECT COUNT (KeyUser) as Following FROM following WHERE following.KeyUser = ${userJwt.KeyUser}`
            
            connection.query(sql, (err, result) => err ? res.status(400).send(err) : res.status(200).send(result[0]))
            console.log("COUNT", userJwt.userName);

        } catch (error) {
            console.log("error on count NumFollowers");
            res.status(500).send("error on count NumFollowers");
            return;
        }

    }
    verifyFollow(req, res){
        try {

            const token = req.rawHeaders[1].replace("Bearer ", "");
            const userJwt = jwt.verify(token, segredo);
            const Follow = {
                KeyUser: userJwt.KeyUser,
                KeyFollowing: parseInt(req.query.KeyUser)
            }

            let sql = `SELECT * FROM following WHERE following.KeyUser = ${Follow.KeyUser} AND following.KeyFollowing = ${Follow.KeyFollowing}`
            connection.query(sql, Follow, (err, result) => {
                try {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (result.length) {
                        console.log("already follow");
                        res.status(400).send({ msg: "already follow" })
                        return;
                    } else {
                        console.log("not follow");
                        res.status(400).send({ msg: "not follow" })
                        return
                    }
                } catch (error) {
                    console.log("error on Follow");
                    res.status(500).send("error on Follow");
                    return;
                }
            })

        } catch (error) {
            console.log("error on Follow");
            res.status(500).send("error on Follow");
            return;
        }
    }

}

module.exports = new User