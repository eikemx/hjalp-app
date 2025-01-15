# Hjálp - A Yelp Clone for Hospitals

## Project Overview
Hjálp is a Yelp-inspired hospital search application built during a 8-hour hackathon. The challenge was to recreate Yelp's core functionality, specifically focused on helping users find and review hospitals and medical facilities. While the backend is no longer available, the project demonstrates the successful implementation of Yelp-like features in a healthcare context.

## Features
- Hospital search functionality (similar to Yelp's business search)
- Detailed hospital information cards (inspired by Yelp's business cards)
- Responsive design for various screen sizes
- Error handling for API failures
- Loading state management
- Navigation with React Router
- Hospital tags and categories

## Technologies Used
- React.js
- React Router
- Bootstrap
- CSS for custom styling
- JavaScript ES6+
- Create React App
- Spinners React for loading animations

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/hjalp-app.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm start
   ```
   Note: The application will open at [http://localhost:3000](http://localhost:3000), but will display an error page as the backend service is no longer available.

## Project Structure
```bash
hjalp-app/
├── src/
│ ├── components/
│ │ ├── Cards.js
│ │ ├── Error.js
│ │ ├── HospitalPage.js
│ │ ├── HospitalsWrapper.js
│ │ ├── LoadingSpinner.js
│ │ ├── NavBar.js
│ │ └── Searchbar.js
│ ├── images/
│ ├── App.js
│ └── index.js
├── public/
└── README.md
```

## Current Status
This project was created during a hackathon where teams were challenged to recreate Yelp's functionality. Our team focused on adapting Yelp's interface for hospital search and reviews. Unfortunately, the backend service (previously hosted at yelpbackend.herokuapp.com) is no longer available, which means the application cannot fetch hospital data. The frontend code remains as a demonstration of our implementation of Yelp-like features.

## Learning Outcomes
- Adapting existing business models (Yelp) to new use cases
- Building React applications with multiple components
- Implementing error handling and loading states
- Working with external APIs
- Using React Router for navigation
- Responsive design implementation
- Collaborative development in a hackathon setting

## Contact
- GitHub: [@eikemx](https://github.com/eikemx)
- LinkedIn: [Eike Merx](https://www.linkedin.com/in/eike-merx-50b111216/)
- XING: [Eike Merx](https://www.xing.com/profile/Eike_Merx/web_profiles)

## Acknowledgments
- WBS Coding School
- Backend team members
- Yelp for inspiration
- All contributors to the project

---
*This project was created as part of a 8-hour hackathon challenge to recreate Yelp's functionality for hospital search.*