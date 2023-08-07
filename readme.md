# Wealthy Users Dashboard

## Table of Contents

- [Links](#links)
- [Description](#description)
- [Screenshot](#screenshot)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Used](#api-used)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [Note](#note)
- [Contributing](#contributing)

## Links

- Solution URL: [GitHub Repository](https://github.com/aruntutter/user-wealth-tracker)
- Live Demo: [Live Demo URL](https://teal-gelato-5c6488.netlify.app)

## Description

The Wealthy Users Dashboard is a web application that allows you to manage a list of random users and their wealth. You can perform various operations such as adding users, doubling their money, showing only millionaires, sorting by the richest, and calculating the entire wealth of all users.

## Screenshot

![Wealthy Users Dashboard Screenshot](<./assets/images/screen-shot.png>)

## Demo

You can access the live demo of the Wealthy Users Dashboard at [Live Demo URL](https://teal-gelato-5c6488.netlify.app).

## Features

- Add User: Fetches a random user from an API and adds them to the user list with a random amount of money.
- Double Money: Doubles the money of all users in the list.
- Show Only Millionaires: Filters and displays only the users with money greater than 1,000,000.
- Sort By Richest: Sorts the users in the list based on their wealth from the poorest to the richest.
- Calculate Entire Wealth: Calculates and displays the total wealth of all users.

## Technologies Used

- HTML
- CSS
- JavaScript
- API
- **DOM Methods**: Utilized various DOM (Document Object Model) methods to manipulate and update user interface elements dynamically.
- **Higher-Order Function (HOF)**: Implemented Higher-Order Functions to enhance code readability and reusability for user data manipulation.

## API Used

The application uses the following API to generate random users: `https://randomuser.me/api/`

## How It Works

- When the page loads, it fetches a random user from the API and displays the user list along with their wealth.
- You can click the "Add User" button to fetch and add another random user to the list.
- The "Double Money" button doubles the money of all users in the list and updates the displayed wealth.
- Clicking the "Show Only Millionaires" button filters and displays only the users with wealth greater than 1,000,000.
- The "Sort By Richest" button sorts the users in the list based on their wealth.
- The "Calculate Entire Wealth" button calculates and displays the total wealth of all users.
- You can reset the user list to its initial state by refreshing the page.

## Usage

1. Open the live demo of the Wealthy Users Dashboard using the provided link.
2. Click the "Add User" button to add a random user with a random amount of money.
3. Use the "Double Money" button to double the wealth of all users.
4. Click the "Show Only Millionaires" button to display only the millionaires among the users.
5. The "Sort By Richest" button will sort the users based on their wealth.
6. Use the "Calculate Entire Wealth" button to calculate and display the total wealth of all users.

## Project Structure

- `index.html`: Contains the HTML structure of the Wealthy Users Dashboard.
- `styles/style.css`: Contains custom CSS styles for the dashboard.
- `scripts/script.js`: Contains the JavaScript code for fetching data from the API and managing user interactions.

Certainly! Here's an extended "Credits" section for your "Wealthy Users Dashboard" project:

## Credits

- Google Fonts: Used for font families 'Rajdhani', 'Poppins', and 'Kanit' for enhanced typography.
- Normalize.css: Used to provide a consistent starting point for styling across different browsers.
- API: The API used to fetch random user data for the Wealthy Users Dashboard.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com): Used as a reference and inspiration for data manipulation techniques.
- [MDN Web Docs](https://developer.mozilla.org): An invaluable resource for JavaScript and DOM methods documentation.
- [Stack Overflow](https://stackoverflow.com): Community support for troubleshooting and problem-solving.
- [GitHub](https://github.com): Version control and collaboration platform that hosted the project repository.

## Note

Please ensure you have an active internet connection to fetch random users from the API.

Feel free to use and modify this Wealthy Users Dashboard for your needs. Enjoy managing your virtual wealthy users!

## Contributing

Contributions are welcome! If you find any issues, have suggestions for improvements, or want to add new features, please open an issue or submit a pull request in the GitHub repository. Let's make this project even better together!
