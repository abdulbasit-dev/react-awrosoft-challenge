import React, {useEffect} from 'react';
import {db} from './firebase';
import Dashboard from './components/Dashboard';

function App() {
  // useEffect =>runs a piece of code base on specific condition
  // useEffect(() => {
  //   db.collection('ss').onSnapshot(snapshot => {
  //     console.log(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()})));
  //   });
  // }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
