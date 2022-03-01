class Tables {
    init(connection) {
        this.connection = connection;
        this.creatUser();
        this.creatFollowing();
        this.creatPost();
    }
    creatUser() {
        const sql = `CREATE TABLE IF NOT EXISTS Usuario (KeyUser int NOT NULL AUTO_INCREMENT, userName varchar(14) NOT NULL UNIQUE, Joined DATETIME NOT NULL, PRIMARY KEY (KeyUser) )`;
        this.connection.query(sql, err => err ? console.log('mysql error', err) : console.log('table User created') );
    }

    creatFollowing() {
        const sql = `CREATE TABLE IF NOT EXISTS Following (KeyUser int NOT NULL, KeyFollowing int NOT NULL, PRIMARY KEY (KeyUser, KeyFollowing), FOREIGN KEY (KeyUser) REFERENCES Usuario(KeyUser),FOREIGN KEY (KeyFollowing) REFERENCES Usuario(KeyUser) )`;
        this.connection.query(sql, err => err ? console.log('mysql error', err) : console.log('table Following created') );
    }

    creatPost() {
        const sql = `CREATE TABLE IF NOT EXISTS Post (KeyPost int NOT NULL AUTO_INCREMENT, KeyUser int NOT NULL,Post varchar(777) NOT NULL, DatePost DATETIME NOT NULL, Repost BOOLEAN NOT NULL, KeyUserRespost int NOT NULL, QuotePost varchar(777), PRIMARY KEY (KeyPost), FOREIGN KEY (KeyUser) REFERENCES Usuario(KeyUser),FOREIGN KEY (KeyUserRespost) REFERENCES Usuario(KeyUser))`;
        this.connection.query(sql, err => err ? console.log('mysql error', err) : console.log('table Post created') );
    }
}
module.exports = new Tables