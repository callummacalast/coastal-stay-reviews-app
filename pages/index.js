import { app, database } from '../firebaseConfig';

import { getDocs, collection, query, where, limit } from 'firebase/firestore';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const dbInstance = collection(database, 'messages');

  const [messageArray, setMessageArray] = useState([]);

  const getMessages = () => {
    getDocs(dbInstance).then((data) => {
      setMessageArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid lg:grid-cols-4 lg:m-0 md:m-0 md:grid-cols-3 sm:grid-cols-2 sm:m-0 my-5 grid-cols-1 mx-2 gap-5">
        {messageArray.map((message) => {
          console.log(message.created_at);
          return (
            <div
              key={message.id}
              className="shadow bg-blue-100 p-3 rounded w-full cursor-pointer h-auto relative"
            >
              <span className="text-xs absolute right-2 top-2 text-red-400">
                {message.created_at}
              </span>

              {message.message_title.length <= 10 ? (
                <p>{message.message_title}</p>
              ) : (
                <h2 className="w-full break-all font-extrabold text-xl">
                  {message.message_title}
                </h2>
              )}
              <p className="">{message.message_content}</p>
            </div>
          );
        })}
      </div>

      <Link href="/create-message">
        <button className="bg-blue-400 hover:bg-blue-300 shadow p-2 rounded fixed bottom-10 text-white right-10">
          Leave a message
        </button>
      </Link>
    </>
  );
}
