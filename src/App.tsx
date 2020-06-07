import React from 'react';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <All>
      <h1>Todoアプリ</h1>

      <div className="input">
        <label>タスク</label>
        <input type="text"></input>
        <button>登録</button>
      </div>
    </All>
  )
}

const All = styled.div`
  text-align: center;
`

export default App;
