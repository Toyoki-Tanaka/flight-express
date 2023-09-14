const { Schema, model } = require('mongoose');
// const destinationSchema = require('./destination').schema
const flightSchema = new Schema(
    {
        airline: { type: String, enum: ['American', 'Southwest', 'United'] },
        flightNo: { type: Number, required: true, min: 10, max: 9999 },
        departs: { type: Date, default: () => new Date(+new Date() + 365 * 24 * 60 * 60 * 1000) },
        airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN' },
        destinations: {
            type: [Schema.Types.ObjectId], ref: 'Destination',
        }
    },
    {
        timestamps: true,
    }
)

const Flight = model('Flight', flightSchema)

module.exports = Flight;