export const addJournalEntry = async({ form }) => {
  const res = await fetch('http://localhost:7890/api/v1/entries/', {
    method: 'POST',
    body: JSON.stringify({ ...form }),
    headers: { 'content-type': 'application/json; charset=UTF-8' }
  });

  const ok = res.ok;

  if(!ok) throw ('FAILED to reach API');
  const apiRes = await res.json();
  return apiRes;
};
