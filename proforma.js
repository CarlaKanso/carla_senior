// Get the "Buy Now" buttons
const buyButtons = document.querySelectorAll('.contentBx a');

// Add a click event listener to each button
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the title and image of the clicked item
    const title = button.previousElementSibling.textContent;
    const image = button.parentElement.previousElementSibling.firstElementChild.src;

    // Create a new row in the table
    const newRow = document.createElement('tr');

    // Create the cells for the title and image
    const titleCell = document.createElement('td');
    const imageCell = document.createElement('td');

    // Set the content of the cells
    titleCell.textContent = title;
    imageCell.innerHTML = `<img src="${image}" alt="${title}" />`;

    // Add the cells to the new row
    newRow.appendChild(titleCell);
    newRow.appendChild(imageCell);

    // Add the new row to the table
    const tableBody = document.querySelector('#order-table tbody');
    tableBody.appendChild(newRow);
  });
});

// Select the Send Email button
const sendEmailBtn = document.querySelector('#send-email-btn');

// Attach a click event listener to the button
sendEmailBtn.addEventListener('click', () => {
  // Get the table element
  const table = document.querySelector('#order-table');

  // Get the table contents as HTML
  const tableHtml = table.outerHTML;

  // Create a new mailto URL with the table contents in the body
  const mailtoUrl = 'mailto:carla_kanso23@outlook.com';

  // Set the email subject
  const subject = 'Order Table';

  // Set the email body to the table contents
  const body = encodeURIComponent(tableHtml);

  // Create the final mailto URL with the subject and body
  const finalUrl = `${mailtoUrl}?subject=${subject}&body=${body}`;

  // Open the user's email client with the pre-filled email
  window.location.href = finalUrl;
});

//   // Load the navbar HTML file
//   fetch('navbar.html')
//   .then(response => response.text())
//   .then(html => {
//     // Replace the #navbar element with the navbar HTML
//     const navbarElement = document.querySelector('#navbar');
//     navbarElement.innerHTML = html;
//   });