const mongoose = require('mongoose')

const { MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env;
const MONGODB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@privatecluster-hzzum.mongodb.net/${MONGO_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));