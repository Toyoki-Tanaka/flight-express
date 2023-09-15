// const React = require('react');

// class Edit extends React.Component {
//     render() {
//         const date = new Date();
//         const futureDate = date.getDate() + 365;
//         date.setDate(futureDate);
//         const defaultValue = date.toLocaleDateString('en-CA');
//         return (
//             <form action={`/flight/${this.props.flight._id}?_method=PUT`} method="POST">
//                 Airport: <select name="flight">
//                     <option value="AUS">AUS</option>
//                     <option value="DAL">DAL</option>
//                     <option value="LAX">LAX</option>
//                     <option value="SAN">SAN</option>
//                     <option value="SEA">SEA</option>
//                 </select>
//                 <br />
//                 Arrival: <input type="datetime-locale" name="arrival" defaultValue={defaultValue} />
//                 <input type="submit" value="Update flight info" />
//             </form>

//         )
//     }
// }

// module.exports = Edit;