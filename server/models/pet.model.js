const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name:{
		type: String,
		required: [true, "Name is required."],
		minlength: [3, "Name must be at least three characters long."],
		unique: [true, "Name must be unique"],
	},
	type: {
		type: String, 
		required: [true, "Type must be required."],
		minlength: [3, "Type must be at least three characters long."]
	},
	description: {
		type: String, 
		required: [true, "Description is required"],
		minlength: [3, "Description must be at least three characters long."]
	},
	skill_1: {
		type: String
	},
	skill_2: {
		type: String
	},
	skill_3: {
		type: String
	},
	likes: {
		type: Number
	}


});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;