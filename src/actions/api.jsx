import axios from 'axios';

export async function fetchApi(setTickets, setUsers) {
  try {
    const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment ');
    setTickets(response.data.tickets);
    setUsers(response.data.users);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
