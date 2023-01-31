function receivesAFunction(callback) {
    callback();
  }

  function myCallback() {
    return 'Hi';
  }
  
  receivesAFunction(myCallback);
  
  
  
  function returnsANamedFunction() {
    return function namedFunction() {
        return "Hi";
      }; 
  }



  function returnsAnAnonymousFunction() {
    return function() {
      return 'Hi';
    };
  }