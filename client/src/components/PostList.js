import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddPost from './AddPost';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/posts');
    setPosts(response.data);
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`); //akan mendapatkan id dari posts.map yang sudah  di looping sebelumnya pada setiap post.
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        {posts.map((post) => (
          <div key={post._id} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8 mx-8">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
            <p className="font-normal text-gray-700">{post.message}</p>
            <Link to={`edit/${post._id}`} className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 my-2 mx-2">
              Edit
            </Link>
            <button onClick={() => deletePost(post._id)} className="text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 my-2 mx-2">
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="basis-1/2">
        <AddPost />
      </div>
    </div>
  );
};

export default PostList;
