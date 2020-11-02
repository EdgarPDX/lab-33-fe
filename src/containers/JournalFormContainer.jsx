import React, { useState } from 'react';
import JournalEntryForm from '../components/Journal/JournalEntryForm';
import { addJournalEntry } from '../services/ReflectionJournal-API';


const JournalFormContainer = () => {
  const [form, setForm] = useState({
    journalDate: '',
    gratefulEntry: '',
    favoriteEntry: '',
    stressRating: 1,
    stressDescription: '',
    stressManagement: ''
  });
    

  const onSubmit = async(form) => {
    await addJournalEntry({ ...form })
      .then(res => res.ok);
  };

  const onChange = e => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
    
  return (
    <JournalEntryForm 
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}  
    />
  );
};
export default JournalFormContainer;
