import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contains atleast 3 characters"],
        maxLength: [25, "First name cannot exceed 25 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contains atleast 3 characters"],
        maxLength: [25, "Last name cannot exceed 25 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 numbers"],
        maxLength: [10, "Phone number must contain 10 numbers"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);