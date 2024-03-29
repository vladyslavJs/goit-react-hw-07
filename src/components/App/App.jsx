import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import css from './App.module.css'

export default function App() {
  return (
    <>
      <h1 className={css.title}>Contact App</h1>
      <SearchBox />
      <ContactForm />
    </>
  )
}