// Import necessary packages and set up the MongoDB connection
const mongoose = require('mongoose');
const uri = 'mongodb+srv://kajallohia28:kajallohia@cluster0.gkcpenb.mongodb.net/?retryWrites=true&w=majority/kajallohia';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => {
        console.log('Connected to MongoDB');
        fetchStudentData();
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    uid: String,
    // ...other fields
});

const StudentModel = mongoose.model('Student', studentSchema);

async function fetchStudentData() {
    try {
        const students = await StudentModel.find({}, 'name uid class'); // Selecting only specific fields
        console.log('Fetched students data:', students);
    } catch (error) {
        console.error('Error fetching students data:', error);
    } finally {
        // Close the MongoDB connection when done
        mongoose.connection.close();
    }
}

// Start the data fetching process
fetchStudentData();