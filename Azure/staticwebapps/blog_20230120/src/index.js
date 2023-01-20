import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Main() {
  //const [ setData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    async function getData() {
      const { text } = await (await fetch(`/api/divination`)).json();
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          alert(`今日の運勢は、 ${text}`)
          resolve();
        } , 500);
      });
    }
    getData();
  }

  return (
    <React.StrictMode>
      <h1>占いアプリ</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="今日の運勢を占う" />
      </form>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
