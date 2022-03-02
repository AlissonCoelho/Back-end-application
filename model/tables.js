class Tables {
    init(connection) {
        this.connection = connection;
        this.creatUser();
        this.creatFollowing();
        this.creatPost();
    }
    creatUser() {
        const sql = `CREATE TABLE IF NOT EXISTS User (KeyUser int NOT NULL AUTO_INCREMENT, userName varchar(14) NOT NULL UNIQUE, Joined DATETIME NOT NULL, password varchar(6) NOT NULL, PRIMARY KEY (KeyUser) )`;
        this.connection.query(sql, err => err ? console.log('mysql error', err) : console.log('table User created') );
    }

    creatFollowing() {
        const sql = `CREATE TABLE IF NOT EXISTS Following (KeyUser int NOT NULL, KeyFollowing int NOT NULL, PRIMARY KEY (KeyUser, KeyFollowing), FOREIGN KEY (KeyUser) REFERENCES User(KeyUser),FOREIGN KEY (KeyFollowing) REFERENCES User(KeyUser) )`;
        this.connection.query(sql, err => err ? console.log('mysql error', err) : console.log('table Following created') );
    }

    creatPost() {
        const sql = `CREATE TABLE IF NOT EXISTS Post (KeyPost int NOT NULL AUTO_INCREMENT, KeyUser int NOT NULL,Post varchar(777) NOT NULL, DatePost DATETIME NOT NULL, Repost BOOLEAN NOT NULL, KeyUserRespost int,KeyPostRespost int, QuotePost varchar(777), PRIMARY KEY (KeyPost), FOREIGN KEY (KeyUser) REFERENCES User(KeyUser),FOREIGN KEY (KeyUserRespost) REFERENCES User(KeyUser))`;
        this.connection.query(sql, err => err ? console.log('mysql error', err) : console.log('table Post created') );
    }
}
module.exports = new Tables