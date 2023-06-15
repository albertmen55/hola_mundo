import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from "../../models/contact.class";

const ContactComponent = ({ contact })  => {

    return (
        <div>
            <h2>
                Nombre: {contact.name}<br/>
                Apellido: {contact.subname}
            </h2>
            <h3>
                Email: {contact.email}
            </h3>
            <h4>
                {contact.name} is {contact.conected ? 'CONECTED' : 'OFFLINE'}
            </h4>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent