import React, { Component } from 'react';
import './App.css';

class App extends Component {

  linearSort(str,valueToFind) {
    valueToFind = Number(valueToFind);

    let arr = str.split(' ').filter(member => {
      return member !== '';
    }).map(member => Number(member));

    let counter = 0;
    for (let i=0; i<arr.length; i++ ){
      counter++;
      if (arr[i] === valueToFind) {
        return this.displayLinearResults({counter, found: true}); 
      }
    }
    return this.displayLinearResults({
      counter,
      found:false
    });
  }

  handleClick() {
    if (this.linearInput.value) {
    this.linearSort(this.linearInput.value, this.linearValueSearchNum.value);
    }
  }
    
    
    
  displayLinearResults(obj) {
    let elm = document.querySelector('.linear-results');
    elm.innerHTML = `
      <p>Iterations: ${obj.counter}</p>
      <p>Number was Found: ${obj.found}</p>
    `;
    }


  
  render() {
    return (
      <div className="App">
        <header className='app-header'>
          
        </header>
        <main>
          <h1 className='main-title'>DSA Searching Algorithms</h1>
          <section className='main-content'>
            <section className='linear-search'>
              <p className='linear-heading'>Linear Search</p>
              <p className='linear-description'>
                Provide a set of numbers separated by spaces. The output will be the amount of iterations that were required to find the number, as well as whether or not the number was found. 
                </p>
              <input ref={input => this.linearValueSearchNum = input} className='linear-searchInput' placeholder='Number to Search for...'/>
              <input ref={input => this.linearInput = input} className='linear-input'/>
              <button onClick={() => this.handleClick()}className='linear-button'>Submit</button>
              <div className='linear-results'>
                <p>Results:</p>
              </div>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
