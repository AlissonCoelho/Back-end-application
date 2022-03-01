const configExpress = require('./configExpress');
const connection = require('./model/connection')
const Tables = require('./model/tables')

connection.connect(err => err ? console.log('mysql erro', err) : main())

function main() {
    console.log('MySQL conectado');
    Tables.init(connection);
    const app = configExpress;
    app.listen(8000, () => console.log('Server running on port 8000'))
}