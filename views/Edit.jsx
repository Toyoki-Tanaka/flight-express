const React = require('react');

class Edit extends React.Component {
    render() {
        console.log()
        return (
            <form action={`/flight/${this.props.flight._id}?_method=PUT`} method="POST">
                Arrival: <select name="flight">
                    <option value="AUS">AUS</option>
                    <option value="DAL">DAL</option>
                    <option value="LAX">LAX</option>
                    <option value="SAN">SAN</option>
                    <option value="SEA">SEA</option>
                </select>
                <input type='submit' value='Submit Changes' />
            </form>

        )
    }
}

module.exports = Edit;