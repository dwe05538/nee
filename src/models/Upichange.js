import mongoose from 'mongoose';

let Upichange;

try {
    // Check if the model is already defined
    Upichange = mongoose.model('Upichange');
} catch (error) {
    // If the model is not defined, define it
    const UpichangeSchema = new mongoose.Schema({
        upi: { type: String, required: true },
        Gpay: { type: Boolean },
        Paytm: { type: Boolean },
        Bhim: { type: Boolean },
        Phonepe: { type: Boolean },
        WPay: { type: Boolean },
    });

    Upichange = mongoose.model('Upichange', UpichangeSchema);
}

// Automatically insert a mock record if no records exist
(async () => {
    try {
        const count = await Upichange.countDocuments();
        if (count === 0) {
            await Upichange.create({
                upi: 'test@upi',
                Gpay: true,
                Paytm: false,
                Bhim: true,
                Phonepe: false,
                WPay: true,
            });
            console.log('Dummy UPI record inserted.');
        }
    } catch (err) {
        console.error('Error inserting dummy UPI record:', err);
    }
})();

export default Upichange;
