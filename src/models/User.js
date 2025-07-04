import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from a `.env` file
dotenv.config();

let User;

try {
    // Check if model already defined
    User = mongoose.model('user');
} catch (error) {
    // Define schema if not already defined
    const userSchema = new mongoose.Schema({
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    });

    User = mongoose.model('user', userSchema);
}

// Automatically create a default/mock user if not exists
(async () => {
    try {
        const email = process.env.DEFAULT_USER_EMAIL;
        const password = process.env.DEFAULT_USER_PASSWORD;

        if (!email || !password) {
            console.warn('DEFAULT_USER_EMAIL or DEFAULT_USER_PASSWORD not set in environment.');
            return;
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            await User.create({
                email,
                password, // In real cases, hash the password before saving
            });
            console.log(`Mock user created with email: ${email}`);
        } else {
            console.log(`Mock user already exists with email: ${email}`);
        }
    } catch (err) {
        console.error('Error checking/creating mock user:', err);
    }
})();

export default User;
