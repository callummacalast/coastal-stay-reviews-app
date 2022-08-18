import React, { useState } from 'react';
import { app, database } from '../../firebaseConfig';

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import Link from 'next/link';

const MessageOperations = () => {
  const router = useRouter();
  const dbInstance = collection(database, 'messages');
  const [messageTitle, setMessageTitle] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const saveNote = () => {
    if (messageContent == '' || messageTitle == '') {
      let error = document.getElementById('error');
      error.classList.remove('hidden');
    } else {
      error.classList.add('hidden');
      let today = new Date().toLocaleString();
      addDoc(dbInstance, {
        message_title: messageTitle,
        message_content: messageContent,
        created_at: today,
      }).then(() => {
        setMessageContent(''), setMessageTitle(''), router.push('/');
      });
    }
  };

  return (
    <div>
      <Link href="/">
        <button className="bg-blue-400 hover:bg-blue-300 text-white p-2 rounded shadow m-3">
          {' '}
          Back to posts
        </button>
      </Link>
      <div className="w-full mx-auto my-10 max-w-lg">
        <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 m-5">
          <div id="error" className="hidden text-xs text-orange-400">
            Oops! You have to provide some content
          </div>
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
              value={messageTitle}
              maxLength="30"
              minLength="3"
              placeholder="Message Title"
              onChange={(e) => setMessageTitle(e.target.value)}
              required
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
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              cols="3"
              rows="10"
              minLength="10"
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
    </div>
  );
};

export default MessageOperations;
