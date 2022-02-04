import mongoose from "mongoose";
const TuitSchema = new mongoose.Schema({
    tuit: {type: string, default='', required: true},
    postedOn: {type: Date, default: Date.now()},
    postedBy: {type: User, required: true}
}, {collection: 'tuits'});
export default TuitSchema;
