export const addJournalEntry = async(form) => {
  const res = await fetch('https://localhost:7890/entries/post', {
    method: 'POST',
    body: JSON.object(form),
    headers: { 
      'Content-Type': 'application/json; charset=UTF-8' 
    }
  });

  const ok = res.ok;

  if(!ok) throw ('FAILED to reach API');
  const newJournal = await res.json();
  console.log(res);
  return newJournal;
};
