import React, { useState } from 'react';
import { PostList } from './componets/PostList/PostList';
import { PostProps } from './componets/PostItem/PostItem';
import './App.css'


function App() {
  const [posts, setPosts] = useState<Array<PostProps>>([
    { id: '1', tittle: 'Javascript', body: 'Discription' },
    { id: '2', tittle: 'Javascript', body: 'Discription' },
    { id: '3', tittle: 'Javascript', body: 'Discription' },
  ])

  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Название поста' />
        <input type='text' placeholder='Описание поста' />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} tittle='Посты про JS' />
    </div>
  );
}

export default App;
