"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function deleteUser(id) {
  const fetch = require('node-fetch');

async function deleteUser(id) {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id; // Формування URL
    const options = {
      method: 'DELETE',
    };

    const response = await fetch(url, options); // Виконання запиту
    return response.status; // Повернення статусу відповіді
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

deleteUser(1)
  .then((status) => console.log('Status:', status));

module.exports = deleteUser;

}

console.log(deleteUser(1));

module.exports = deleteUser;
