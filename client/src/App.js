import PostList from './components/PostList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditPost from './components/EditPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
