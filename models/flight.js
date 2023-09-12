const { Schema, model } = require('mongoose');

const flightSchema = new Schema(
    {
        airline: { type: String, enum: ['American', 'Southwest', 'United'] },
        flightNo: { type: Number, required: true, min: 10, max: 9999 },
        departs: { type: Date, default: () => new Date(+new Date() + 365 * 24 * 60 * 60 * 1000) }
    },
    // Add Default date an year from now
    {
        timestamps: true,
    }
)

const Flight = model('Flight', flightSchema)

module.exports = Flight;