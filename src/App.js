import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://localhost/mywebservicelista/index.php';

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(URL) // haetaan jotakin
      .then((response) => { // jos haku onnistuu
        // console.log(response.data); // tarkistus
        setPersons(response.data);
      }).catch(error => { // näyttää errorin jos ei toimi
        alert(error);
      })
  }, [])

  return (
    <div style={{padding: '30px'}}>
      <h3>Names</h3>
      <ol>
      {persons.map(person => (
        <li>{person.lastname}, {person.firstname}, {person.email}</li>

      ))}
      </ol>
      
    </div>
  );
}

export default App;
