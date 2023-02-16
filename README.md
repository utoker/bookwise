## Overview

The web app I created is a user-friendly interface that allows users to input their answers to two questions. Based on these answers, the app will display a visual representation of the book that matches their preferences the most. To achieve this, I created a basic database that stores the scores for each book and student on 4 different criteria. The backend uses euclidean distance equation to calculate the difference between the user's and the book's vectors, and returns the book with the smallest difference.

## Technologies Used

**Next.js**: I chose to use Next.js as the framework for this app because it provides a full-stack solution, making it easy to build both the frontend and backend components of the app.

**Tailwind CSS**: I used Tailwind CSS for the styling of the app because it's a highly customizable to suit any design needs.

**Headless UI**: I used Headless UI for the components because it's a set of completely unstyled, fully accessible UI components, designed to integrate with Tailwind CSS made by the same team that created Tailwind CSS.

**MongoDB**: I used MongoDB as the database for this app because it's a document-oriented, NoSQL database that makes it easy to store and retrieve data in JSON-like documents. This made it easy to store and retrieve the scores for each book and student in a structured way.
