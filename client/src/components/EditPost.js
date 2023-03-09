import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPostById();
  }, []);

  const getPostById = async () => {
    const response = await axios.get(`http://localhost:5000/posts/${id}`); //object id berisi parameter yang dikirm dari url dan bisa kita gunakan setelah pemanggila useParams
    setTitle(response.data.title);
    setMessage(response.data.message);
  }; //sata mengklik edit kita akan langsung mendapatkan data yang akan kita edit dikarenakan kita sudah sudah memparsing datanya ke masing-masing useState

  const updatePost = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/posts/${id}`, {
        title,
        message,
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8 mx-8" onSubmit={updatePost}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">Message</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        Update
      </button>
    </form>
  );
};

export default EditPost;
