const React = require('react')
class Show extends React.Component {
    render() {
        const flight = this.props.flight

        const date = new Date();
        const futureDate = date.getDate() + 365;
        date.setDate(futureDate);
        const defaultValue = date.toLocaleDateString('en-CA');
        return (
            <div>
                <h1>Flight Information</h1>
                <h2>Airline: {flight.airline}</h2>
                <h2>Airport: {flight.airport}</h2>
                <h2>Flight #: {flight.flightNo}</h2>
                <h2>Departure: {flight.departs.toString()}</h2>

                {/* <ul> */}
                {flight.destinations.map((flgt, i) => {
                    return (
                        <p key={i}>{`${flgt.arrival}`} {`${flgt.airport}`}</p>
                    )
                })}
                {/* </ul> */}


                <form action={`/flight/${this.props.flight._id}/flights?_method=PUT`} method="POST">
                    Airport: <select name="airport">
                        <option value="AUS">AUS</option>
                        <option value="DAL">DAL</option>
                        <option value="LAX">LAX</option>
                        <option value="SAN">SAN</option>
                        <option value="SEA">SEA</option>
                    </select>
                    <br />
                    Arrival: <input type="datetime-locale" name="arrival" defaultValue={defaultValue} />
                    <input type="submit" value="Update flight info" />
                </form>

                <a href="/flight">Go back to main</a>

            </div >
        )
    }
}


module.exports = Show;