import React, { FC } from 'react';

const About: FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto" id="about">
      <div className="w-full p-4  bg-white border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
          About
        </h5>
        <p className="text-lg">
          The web app I created is a user-friendly interface that allows users
          to input their answers to two questions. Based on these answers, the
          app will display a visual representation of the book that matches
          their preferences the most. To achieve this, I created a basic
          database that stores the scores for each book and student on 4
          different criteria. The backend uses euclidean distance equation to
          calculate the difference between the user&apos;s and the book&apos;s
          vectors, and returns the book with the smallest difference.
        </p>
        <br />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Technologies Used
        </h2>
        <ul className="text-lg">
          <li>
            <b>Next.js:</b> I chose to use Next.js as the framework for this app
            because it provides a full-stack solution, making it easy to build
            both the frontend and backend components of the app.
          </li>
          <li>
            <b>Tailwind CSS:</b> I used Tailwind CSS for the styling of the app
            because it&apos;s highly customizable to suit any design needs.
          </li>
          <li>
            <b>Headless UI:</b> I used Headless UI for the components because
            it&apos;s a set of completely unstyled, fully accessible UI
            components, designed to integrate with Tailwind CSS made by the same
            team that created Tailwind CSS.
          </li>
          <li>
            <b>MongoDB:</b> I used MongoDB as the database for this app because
            it&apos;s a document-oriented, NoSQL database that makes it easy to
            store and retrieve data in JSON-like documents. This made it easy to
            store and retrieve the scores for each book and student in a
            structured way.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
