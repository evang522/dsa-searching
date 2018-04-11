import React, { Component } from 'react';
import './App.css';

class App extends Component {

  DSASort(str,valueToFind) {
    valueToFind = Number(valueToFind);

    let arr = str.split(' ').filter(member => {
      return member !== '';
    }).map(member => Number(member));

    let counter = 0;
    for (let i=0; i<arr.length; i++ ){
      counter++;
      if (arr[i] === valueToFind) {
        return this.displayDSAResults({counter, found: true}); 
      }
    }
    return this.displayDSAResults({
      counter,
      found:false
    });
  }

  handleClick() {
    if (this.DSAInput.value) {
    this.DSASort(this.DSAInput.value, this.DSAValueSearchNum.value);
    }
  }
    
    
    
  displayDSAResults(obj) {
    let elm = document.querySelector('.DSA-results');
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
            <section className='DSA-search'>
              <p className='DSA-heading'>DSA Search</p>
              <p className='DSA-description'>
                Provide a set of numbers separated by spaces. The output will be the amount of iterations that were required to find the number, as well as whether or not the number was found. 
                </p>
              <input ref={input => this.DSAValueSearchNum = input} className='DSA-searchInput' placeholder='Number to Search for...'/>
              <input ref={input => this.DSAInput = input} className='DSA-input'/>
              <button onClick={() => this.handleClick()}className='DSA-button'>Submit</button>
              <div className='DSA-results'>
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
