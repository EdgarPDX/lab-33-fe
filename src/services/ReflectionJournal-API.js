export const addJournalEntry = async(newEntry) => {
  const res = await fetch('http://localhost:7890/api/v1/entries', {
    method: 'POST',
    body: JSON.stringify(newEntry),
    headers: { 'content-type': 'application/json; charset=UTF-8' }
  });

  const ok = res.ok;


  if(!ok) throw ('FAILED to reach API');
  return await res.json();
};
