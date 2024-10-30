"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function updateUser(id, updatedData) {
  const fetch = require('node-fetch');

  async function updateUser(id, updatedData) {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users/' + id; // Формування URL
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData), // Конвертація об'єкта в JSON-рядок
      };
  
      const response = await fetch(url, options); // Виконання запиту
      const data = await response.json(); // Отримання даних з відповіді
      return data;
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  
  updateUser(1, { name: 'New Name' })
    .then((data) => console.log(data));
  
  module.exports = updateUser;
  
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
