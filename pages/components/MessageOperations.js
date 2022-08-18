import React from 'react';
import { app, database } from '../../firebaseConfig';

import { collection, addDoc, getDocs } from 'firebase/firestore';

const MessageOperations = () => {
  const dbInstance = collection(database, 'notes');

  const saveNote = () => {
    console.log('hi therre');
  };
  return (
    <div className="w-full mx-auto my-10 max-w-lg">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Message Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message_title"
            type="text"
            name="message_title"
            placeholder="Message Title"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            cols="3"
            rows="10"
            placeholder="Really enjoyed our stay herer at coastal stay, pizza was amazing...."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={saveNote}
          >
            Post Message!
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageOperations;
