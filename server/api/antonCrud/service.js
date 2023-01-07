const ObjectId = require('mongodb').ObjectId
const { collections } = require('../../mongoDB')

const create = (data, callback) => {
    data._id = new ObjectId()
    collections.stringCollection.insertOne(data, callback)
}

const readAll = (callback) => {
    collections.stringCollection.find().toArray(callback)
}

const update = (id, data, callback) => {
    if (data._id)
        delete data._id
    collections.stringCollection.updateOne({ "_id": ObjectId(id) }, { $set: data }, callback)
}

const _delete = (id, callback) => {
    collections.stringCollection.deleteOne({ "_id": ObjectId(id) }, callback)
}

module.exports = { create, readAll, update, _delete }