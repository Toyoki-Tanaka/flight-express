const React = require('react')
class Show extends React.Component {
    render() {
        const flight = this.props.flight
        return (
            <div>
                <h1>Flight Information</h1>
                <h2>Airline: {flight.airline}</h2>
                <h2>Airport: {flight.airport}</h2>
                <h2>Flight #: {flight.flightNo}</h2>
                <h2>Departure: {flight.departs.toString()}</h2>
                <a href={`/flight/${flight._id}/edit`}>Create edit</a>
                <a href="/flight">Go back to main</a>

            </div >
        )
    }
}


module.exports = Show;