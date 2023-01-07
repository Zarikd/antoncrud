const MongoClient = require('mongodb').MongoClient

const URL = 'mongodb://localhost:27017'
const DATA_BASE = 'antonCrud'
const COLLECTION_EXAMPLE = 'stringCollection'

const collections = {
    stringCollection: null
}

const dataBaseConnect = function () {
    MongoClient.connect(URL, { useUnifiedTopology: true },
        function (err, client) {
            if (err) {
                console.log("Some Error While Connecting to MongoDB Server" + err);
            } else {
                console.log("Connected Sucessfully to MongoDB Server using Node.js Driver for MongoDB");

                const db = client.db(DATA_BASE);
                collections.stringCollection = db.collection(COLLECTION_EXAMPLE);

                console.log("Connected to MongoDB DB: " + DATA_BASE)
            }
        }
    )
}


module.exports = {
    dataBaseConnect, collections
}