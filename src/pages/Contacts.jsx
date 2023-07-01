import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { fetchContacts } from '../redux/contacts/operations';
import { ContactList } from 'components/contacts/ContactList';
import { Filter } from 'components/filter/Filter';
import ContactForm from 'components/form/ContactForm';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <InfinitySpin width="200" color="#4fa94d" />}
      <ContactList />
    </div>
  );
};

export default Contacts;
