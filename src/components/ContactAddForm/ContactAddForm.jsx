import React from 'react';
import css from './ContactAddForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);

      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.submitForm}>
      <label htmlFor="">
        <input
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          className={css.nameInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        <input
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.submitForm__btn}>
        add contact
      </button>
    </form>
  );
};

export default Form;

// class OldForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };
//   handleFormSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     // return (
//     //   <form onSubmit={this.handleFormSubmit} className={css.submitForm}>
//     //     <label htmlFor="">
//     //       <input
//     //         value={name}
//     //         onChange={this.handleInputChange}
//     //         type="text"
//     //         name="name"
//     //         className={css.nameInput}
//     //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     //         required
//     //       />
//     //     </label>
//     //     <label htmlFor="">
//     //       <input
//     //         value={number}
//     //         onChange={this.handleInputChange}
//     //         type="tel"
//     //         name="number"
//     //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//     //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//     //         required
//     //       />
//     //     </label>

//     //     <button type="submit" className={css.submitForm__btn}>
//     //       add contact
//     //     </button>
//     //   </form>
//     // );
//   }
// }
// export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
