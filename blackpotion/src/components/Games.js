import React from 'react';
import { useEffect, useState } from 'react';
import Tabletop from 'tabletop';

function useGoogleSheet(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: url,
      callback: (data, tabletop) => setData(data),
      simpleSheet: true,
    });
  }, [url]);

  return data;
}


function Games() {
  const data = useGoogleSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHeRCJoX1Jr612r-uMtZdZ4DedOOwWh61mRG6D7rjGOppg0jUbqX36XAGFKYnHIxt9clqx9WBxjNR/pubhtml?gid=0&single=true');
  console.log(data);
  return (

    // <table>
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Players</th>
    //       <th>Play Time</th>
    //       <th>About</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((item) => (
    //       <tr key={item.id}>
    //         <td>{item.name}</td>
    //         <td>{item.players}</td>
    //         <td>{item.PlayTime}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    <div className='container-xl'>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHeRCJoX1Jr612r-uMtZdZ4DedOOwWh61mRG6D7rjGOppg0jUbqX36XAGFKYnHIxt9clqx9WBxjNR/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false&amp;rm=minimal"></iframe>

    </div>
  );
}

export default Games;
