import React from 'react';
import './Page.css';

function App() {
  return (
    <div class="container">
      <div class="subcontainer">
        <div class="stuffdiv">
          <p class="stufftext">Hello, stranger!</p>
          <p class="stufftextsmall">I am Joan, and this is my sort of website. I am a human being who works in cloud stuff and enjoys many things. If you're curious, why not check any of the following...</p> 
        </div>
        <div class="stuffdiv">
          <a class="stufflink" href="https://twitter.com/noopdles">Twitter</a>
          <a class="stufflink" href="https://instagram.com/noopdles">Instagram</a>
          <a class="stufflink" href="https://linkedin.com/">LinkedIn</a>
          <a class="stufflink" href="https://github.com/joan-serra">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;