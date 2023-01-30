import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

