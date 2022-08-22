import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=> {
    setTimeout(()=> {
      const url = "https://docs.google.com/forms/d/e/1FAIpQLSd9z8k76mYqc2clgl7K8eI-QpCLlPTLgoK-sZK8hVazCYRp0w/viewform?usp=sf_link";
      window.location.replace(url);
    }, 200)
  }, [])

  return (
    <div className="App">
       <p>
          Đợi xíu nhé......
        </p>
    </div>
  );
}

export default App;
