import { useState } from "react";
import PropTypes from 'prop-types';
import { FormContainer, Text, Input, Button } from './Form.styled'

export default function ContactForm({onSubmit}) { 
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
        
    const handleChange = (evt) => {
        const formField = evt.currentTarget.name;
        if (formField === 'name') {
            setName(evt.currentTarget.value);
        }
        if (formField === 'number') {
            setNumber(evt.currentTarget.value);
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName("");
        setNumber("");
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <label>
                <Text>Name</Text>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />  
            </label>
            <label>
                <Text>Number</Text>
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <Button type="submit">Add contact</Button>
        </FormContainer>
    );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}