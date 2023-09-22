import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb+srv://tusarsrivastava636:<Tushar@9192>@cluster0.vdku3hb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;