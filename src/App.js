import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

function App() {
  let [posts, postChange] = useState(['apple', 'banana', 'carrot']);
  let [like, likeChange] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <div style={{ color: 'white' }}>개발 blog</div>
      </div>
      <div className='body'>
        <button
          className='changePostBtn'
          onClick={() => {
            let temp = [...posts];
            temp[0] = temp[1];
            postChange(temp);
          }}
        >
          변경
        </button>
        <div className='list'>
          <h3>
            {posts[0]}
            <span
              onClick={() => {
                likeChange(like + 1);
              }}
            >
              👍
            </span>
            {like}
          </h3>
          <p>Date : 2. 17</p>
          <hr />
        </div>
        <div className='list'>
          <h3>{posts[1]}</h3>
          <p>Date : 2. 17</p>
          <hr />
        </div>
        <div className='list'>
          <h3>{posts[2]}</h3>
          <p>Date : 2. 17</p>
          <hr />
        </div>

        <Modal />
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날씨</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
