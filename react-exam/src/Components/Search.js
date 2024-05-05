import React, { useState } from 'react';
import './Search.css';

const GitHubUserSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchGitHubUsers = async (query) => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub users');
      }
      const data = await response.json();
      setUsers(data.items);
      setError('');
    } catch (error) {
      console.error('Error fetching GitHub users:', error);
      setError('Failed to fetch GitHub users');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '') {
      setUsers([]);
      setError('');
    }
  };

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      fetchGitHubUsers(inputValue);
    } else {
      setUsers([]);
      setError('');
    }
  };

  return (
    <div className='output'>
    <div className='GitHub_User_Search'>
      <h1>GitHub User Search</h1>
      <input
        type='text'
        placeholder='Enter username or email'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <h1>Results</h1>
      {error && <p className='error'>{error}</p>}
      <div className='user-list'>
        {users.map((user) => (
          <div key={user.id} className='user'>
            <img src={user.avatar_url} alt='Avatar' />
            <p>{user.login}</p>
            <a href={user.html_url} target='_blank' rel='noopener noreferrer'>
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GitHubUserSearch;
