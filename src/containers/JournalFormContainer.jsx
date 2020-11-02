import React, { useState } from 'react';
import JournalEntryForm from '../components/Journal/JournalEntryForm';
import { addJournalEntry } from '../services/ReflectionJournal-API';


const JournalFormContainer = () => {
  const [form, setForm] = useState({
    journalDate: '',
    gratefulEntry: '',
    favoriteEntry: '',
    stressRating: '',
    stressDescription: '',
    stressManagement: ''
  });
    

  const handleSubmit = e => {
    e.preventDefault();
    addJournalEntry(form);      
  };

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
    
  return (
    <JournalEntryForm 
      form={form}
      onSubmit={handleSubmit}
      onChange={onChange}  
    />
  );
};
export default JournalFormContainer;
