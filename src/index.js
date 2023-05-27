import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library
import './index.css'; // Import a CSS file
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import a function to report web vitals
import { BrowserRouter } from 'react-router-dom'; // Import the BrowserRouter component
import UserProvider from './Context/UserProvider'; // Import the UserProvider component

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM node and create a React root
root.render( // Render the App component inside the root React root
  <React.StrictMode> 
    {/* // Enable strict mode to catch potential issues */}
    <UserProvider>
       {/* // Provide the UserProvider to the App component and its children */}
      <BrowserRouter>
       {/* // Use the BrowserRouter to enable client-side routing */}
        <App />
         {/* // Render the main App component */}
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals(); // Call the reportWebVitals function to start measuring performance
