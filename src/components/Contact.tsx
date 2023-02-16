import React, { FC } from 'react';

const Contact: FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto" id="contact">
      <div className="w-full p-4  bg-white border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Contact
        </h5>
        <p className="text-gray-700 dark:text-gray-400">
          <a href="mailto:utoker@gmail.com" target="_blank" rel="noreferrer">
            <span className="text-gray-900 dark:text-white">Email:</span>{' '}
            <span className="text-blue-500 dark:text-blue-400">
              utoker@gmail.com
            </span>
          </a>
        </p>
        <p className=" text-gray-700 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/utoker"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-gray-900 dark:text-white">Linkedin:</span>{' '}
            <span className="text-blue-500 dark:text-blue-400">
              linkedin.com/in/utoker
            </span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
