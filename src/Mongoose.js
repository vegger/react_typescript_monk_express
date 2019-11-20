const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log("we're connected");
})

const todoSchema = new mongoose.Schema(
  {
      id: { type: Number, required: true, unique: true},
      title: String,
      finished: Boolean
  }
)

const todo = mongoose.model("Todo", todoSchema);
const husi = new todo({
  id: 5,
  title: "Hausaufgaben machen",
  finished: false
})

console.log(husi.title);