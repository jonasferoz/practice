import React from '.React';

const PersonCard = props => {
return(
    <div>
        <h1>{ props.firstName},{props.lastName}</h1>
        <p>Age: {props.age}</p>
        <p>Haircolor : {props.haircolor}</p>
    </div>
)
}
export default PersonCard;