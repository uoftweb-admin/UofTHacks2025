import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  useEffect(() => {
    // Fetch data from MongoDB Data API
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://web-dev-uof-t-hacks2025.vercel.app/users"
        );
        console.log(response.data)
        setPeople(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Tracks the search input

  // Filter the list based on the search query
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>People Directory</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px"
        }}
      />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredPeople.length > 0 ? (
          filteredPeople.map(person => (
            <li
              key={person._id}
              style={{
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px"
              }}
            >
              <strong>{person.name}</strong>
              <br />
              <span>{person.email}</span>
            </li>
          ))
        ) : (
          <p>No matches found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
