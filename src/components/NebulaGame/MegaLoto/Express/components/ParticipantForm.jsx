import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://database-loto.onrender.com/api/participantes')
      .then(response => {
        setParticipants(response.data.body);
      })
      .catch(error => {
        setError('Se produjo un error al buscar a los participantes.');
        console.error('Error fetching participants:', error);
      });
  }, []);

  const deleteParticipant = (id) => {
    axios.put('http://localhost:4000/api/participantes', { id })
      .then(response => {
        setParticipants(participants.filter(participant => participant.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the participant!', error);
      });
  };

  return (
    <div>
      <h1>Participants</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Link to="/add">Add Participant</Link>
      <ul>
        {participants.map(participant => (
          <li key={participant.id}>
            {participant.Nombres_Completos}
            <button onClick={() => deleteParticipant(participant.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
