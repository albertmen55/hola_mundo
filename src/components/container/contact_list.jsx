import React from 'react';
import {Contact} from "../../models/contact.class"
import ContactComponente from "../pure/contact";

const ContactListComponent = () => {

    const defaultContact = new Contact('Alberto', 'Gonzalez Fernandez', 'albertogf2002@gmail.com', true);

    const changeState = (id) => {
        console.log('Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>
                    Your Contacts:
                </h1>
            </div>
            {/*Aplicar un for/map para renderizar cada tarea*/}
            <ContactComponente contact={defaultContact}>

            </ContactComponente>
        </div>
    );
};

ContactListComponent.propTypes = {

};

export default ContactListComponent;