import { useId } from 'react';
import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import { IoIosContact } from "react-icons/io";
import toast from 'react-hot-toast';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'To short...').max(50,'To long!').required('Required field!'),
    number: Yup.string().min(3, 'To short...').max(50, 'To long!').required('Required field!')
});

export default function ContactForm() {

    const nameId = useId();
    const numberId = useId();

    const dispatch = useDispatch();
    
    const handleSubmit = newContact => {
        dispatch(addContact(newContact))
            .unwrap()
            .then(() => {
                toast.success('Contact added')
            })
            .catch(() => {
                toast.error('Something is wrong, please try again')
            });   
    };
    
    return (
        <Formik
            initialValues={{ id: '', name: '', number: '' }}
            onSubmit={(values, actions) => {
                const newContact = {
                    id: '',
                    name: values.name,
                    number: values.number,
                };
                handleSubmit(newContact);
                actions.resetForm();
            }}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.field}>
                    <label className={css.label} htmlFor={nameId}>
                        Name: 
                    </label>
                    <Field type="text" name="name" id={nameId} placeholder="John Wick"/>
                    <ErrorMessage className={css.error} name="name" component="p" />
                </div>

                <div className={css.field}>
                    <label className={css.label} htmlFor={numberId}>
                        Number: 
                    </label>
                    <Field type="text" name="number" id={numberId} placeholder="443-89-12" />
                    <ErrorMessage className={css.error} name="number" component="p" />
                </div>

                <button className={css.button} type="submit">
                    Add contact <IoIosContact />
                </button>
            </Form>
        </Formik>
    );
}