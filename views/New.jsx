const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Create new flight</h1>
                <form action="/flight" method="POST">
                    Airline: <input type="text" name="airline" /><br />
                    Flight Number: <input type="number" name="flightNo" min="10" max="9999" /> <br />
                    Depart Date: <input type="date" name="departs" /> <br />
                    <input type="submit" value="Create Flight" />
                </form>
            </div>);
    }
}

module.exports = New