import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';

import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import css from './App.module.css'
import { Toaster } from 'react-hot-toast';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Contact App</h1>
      <SearchBox />
      <ContactForm />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
      <Toaster />
    </div>
  )
}