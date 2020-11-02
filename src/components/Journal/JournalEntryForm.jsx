import React from 'react';
import PropTypes from 'prop-types';


const JournalEntryForm = ({ 
  handleSubmit,
  onChange, 
  form
}) => {

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="date">
        Date:
      </label>
      <input
        id="date"
        type="text"
        name="journalDate"
        value={form.journalDate}
        onChange={onChange}
      />

      <label htmlFor="grateful">
        What are you grateful for today?
      </label>
      <input
        id="grateful"
        type="text"
        name="gratefulEntry"
        value={form.gratefulEntry}
        onChange={onChange}
      />

      <label htmlFor="favorite">
        What was your favorite part of today?
      </label>
      <input
        id="favorite"
        type="text"
        name="favoriteEntry"
        value={form.favoriteEntry}
        onChange={onChange}
      />

      <label htmlFor="stress-rating">
        Rate your stress level 1-5?
      </label>
      <select
        id="stress-rating"
        name="stressRating"
        value={Number(form.stressRating)}
        onChange={onChange}
      >
        <option 
          value="1" >1</option>
        <option 
          value="2" >2</option>
        <option 
          value="3" >3</option>
        <option 
          value="4" >4</option>
        <option 
          value="5" >5</option>
      </select>

      <label htmlFor="stress-description">
        What caused you stress?
      </label>
      <input
        id="stress-description"
        type="text"
        name="stressDescription"
        value={form.stressDescription}
        onChange={onChange}
      />

      <label htmlFor="stress-management">
        How will you deal with this type of stress moving forward?
      </label>
      <input
        id="stress-management"
        type="text"
        name="stressManagement"
        value={form.stressManagement}
        onChange={onChange}
      />

      <button>Create Journal Entry</button>  
    </form>
  )
  ;  
};

JournalEntryForm.propTypes = {
  form: PropTypes.shape({
    journalDate: PropTypes.string.isRequired,
    gratefulEntry: PropTypes.string.isRequired,
    favoriteEntry: PropTypes.string.isRequired,
    stressRating: PropTypes.string.isRequired,
    stressDescription: PropTypes.string.isRequired,
    stressManagement: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func
};

export default JournalEntryForm;
