# Text Analyzer Application

## Overview

The Text Analyzer Application allows users to analyze text files (.txt) of up to 5 MB in size. The application communicates with a backend API to process the text files and retrieve useful information such as the top 5 most occurring words, the top 5 most co-occurring word pairs, and the frequency of each word in the file. Additionally, the client application provides a keyword search feature for filtering the displayed cards.

## Features

- Upload and analyze text files.
- Display the top 5 most occurring words.
- Display the top 5 most co-occurring word pairs.
- View the frequency of each word in the file.
- Client-side keyword search to filter displayed cards.
- Support for text files up to 5 MB in size.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js and Express.js
- **File Upload**: FormData and fetch API
- **API**: Node.js, Express.js, and text processing libraries

## Getting Started

### Prerequisites

- Node.js and npm installed.
- A code editor such as Visual Studio Code.

### Installation

1. Clone the repository to your local machine:
   git clone <repository-url> 
2.Change to the project directory:
cd text-analyzer-app
3.Install the frontend and backend dependencies:
cd text-check
npm install
cd ../server
npm install
4.Running the Application
-Start the backend server (from the server directory):
npm start
The server will run on http://localhost:5000.

-Start the frontend development server (from the client directory):
npm start
The React development server will run on http://localhost:3000.

5.Open your web browser and navigate to http://localhost:3000 to access the Text Analyzer Application.

## Usage
1.Upload a .txt file by clicking the "Upload File" button on the homepage.
2.Once the file is uploaded, the application will display the following:
-The top 5 most occurring words.
-The top 5 most co-occurring word pairs.
-A keyword search input to filter the displayed cards.
3.Enter a keyword in the search input and click the "Search" button to filter the displayed cards based on the keyword.
4.Click the "Show Frequency Table" button to view the frequency of each word in the uploaded file in a different tab or section.

## File Structure
The project directory is structured as follows:
-public and src: Frontend React application.
-server/: Backend Node.js and Express.js application.
-uploads/: Directory for storing uploaded text files.
-README.md: Project documentation.

## Development Guidelines
1.Frontend code is located in the /src and /public directory.
2.Backend code is located in the server directory.
3.Follow coding conventions and best practices for React and Node.js.



