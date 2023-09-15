require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require('./models/flight')
// const Destination = require('./models/destination')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

app.use((req, res, next) => {
    console.log(("Middleware: I run for all routes"));
    next();
});
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))


// Index
app.get('/flight', async (req, res) => {
    try {
        const foundFlight = await Flight.find({})
        res.status(200).render('Index', {
            flight: foundFlight
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

// New 
app.get('/flight/new', (req, res) => {
    res.render('New')
})

// Update

app.put('/flight/:id/flights', async (req, res) => {
    try {
        const destination = req.body
        const foundFlight = await Flight.findById(req.params.id)
        foundFlight.destinations.push(destination)
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, foundFlight, { new: true })
        res.status(201).redirect('/flight');
    } catch (err) {
        res.status(400).send(err)
    }
})

// app.put('/flight/:id', async (req, res) => {
//     try {
//     
//         const updated = await Flight.findByIdAndUpdate(
//             req.params.id, req.body, { new: true })
//         res.redirect(`/flight`)
//     } catch (err) {
//         res.status(400).send(err)
//     }
// })






// Create Route

app.post('/flight', async (req, res) => {

    try {
        const createdFlight = await Flight.create(req.body)
        res.status(201).redirect('flight')
    } catch (err) {
        res.status(400).send(err)
    }
})

// // Edit Route

// app.get('/flight/:id/edit', async (req, res) => {
//     try {
//         const foundFlight = await Flight.findById(req.params.id)
//         res.render('Edit', {
//             flight: foundFlight
//         })
//     } catch (err) {
//         res.status(400).send(err)
//     }
// })


// Show Route
app.get('/flight/:id', async (req, res) => {
    try {
        const foundFlight = await Flight.findById(req.params.id)
        res.render('Show', {
            flight: foundFlight,
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});