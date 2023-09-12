const React = require('react')
class Index extends React.Component {
    render() {
        const { flight } = this.props
        return (
            <div>
                <h1>See All The Flights</h1>
                <nav>
                    <a href="/flight/new">Create a New Flight</a>
                </nav>
                <ul>
                    {
                        flight.map((flgt, i) => {
                            return (
                                <li key={i}>
                                    <p>Airline:{flgt.airline}</p>
                                    <p>Flight #:{flgt.flightNo}</p>
                                    <p>Departure: {flgt.departs.toString()}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }
}


module.exports = Index;