import React, {useEffect} from 'react';
import {db} from './firebase';

function App() {
  // useEffect =>runs a piece of code base on specific condition
  // useEffect(() => {
  //   db.collection('ss').onSnapshot(snapshot => {
  //     console.log(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()})));
  //   });
  // }, []);

  return (
    <div>
      <h1>sac</h1>
    </div>
  );
}

export default App;
