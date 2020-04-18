import React from 'react'
import ReactDom from 'react-dom'

function ContactCard(props){
    return(
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>Destroyer</h3>
            <p>Phone: phone={props.phone}</p>
    <p>Email: email={props.email}</p>
        </div>
    )
}
export default ContactCard;