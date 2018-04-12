'use strict';
//============================================ Find a Book ======================================>
/*
Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?
*/

// take book dewey decimal number as a parameter
// run binary search to find number
// 

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

const searchLibraryLinear = (library, book) => {
  library = library.sort((a,b) => {
    return Number(a.dewey) - Number(b.dewey);
  });

  for(let i=0;i<library.length;i++) {
    if (Number(library[i].dewey) === Number(book.dewey)) {
      return true;
    }
  }
  return false;
}; 

const searchLibraryBinary = (library, book, start=0, end=library.length) => {
  library = library.sort((a,b) => {
    return Number(a.dewey) - Number(b.dewey);
  });

  let index = Math.floor((start + end) /2);
  let item = Number(library[index].dewey);

  if (Number(book.dewey) === item) {
    return true;
  }

  if ((Number(book.dewey) > item)) {
    return searchLibraryBinary(library, book, index+1, end);
  }

  if ((Number(book.dewey) < item)) {
    return searchLibraryBinary(library, book, start ,index-1);
  }

  return false;
};


//============================================ Binary Tree Traversal ======================================>

const BinarySearchTree = require('./binarySearchTree');



const preOrderTraverse = tree => {
  console.log(tree.key);
  if (tree.left) {
    preOrderTraverse(tree.left);
  }

  if (tree.right) {
    preOrderTraverse(tree.right);
  }
};

const inOrderTraverse = tree => {
  if (tree.left) {
    inOrderTraverse(tree.left);
  }

  console.log(tree.key);

  if (tree.right) {
    inOrderTraverse(tree.right);
  }
};

const postOrderTraverse = tree => {
  if (tree.left) {
    postOrderTraverse(tree.left);
  }

  
  if (tree.right) {
    postOrderTraverse(tree.right);
  }
  console.log(tree.key);
};


//============================================  Max Profit ======================================>

/*
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to low shares in the company on one day, and sell the shares on one of the following days, write an algorithm to work out what the maximum profit you could make would be.
*/

// find the highest value and the lowest value
// if the highest value is after the lowest value, return the highest minus the lowest.


// const highestProfit = arrOfPrices => {
  
  
//   const info = {
//     highestProfit:0,
//     lowestlow:arrOfPrices[0],
//     highestSell:arrOfPrices[0]
//   };
//   for(let i=0;i<arrOfPrices.length;i++) {
//     if (arr[i]<info.lowestlow) info.lowestlow = arr[i];
//     if (arr[i]>info.highestSell) info.highestSell = arr[i];
//     let HP = info.lowestlow - info.highestSell;
//     if (info.highestProfit<HP) info.highestProfit = HP;
//   }
//   return info.highestProfit;
// };

//[128, 97, 121, 123, 98, 97, 105]

function highestProfit(prices) {
  if (!prices.length) {
    return 0;
  }

  let low = prices[0];
  let sell = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; ++i) {
    sell = prices[i];
    if (sell < low) {
      low = sell;
    }
    if (sell - low > profit) {
      profit = sell - low;
    }
  }
  return profit;
}


//============================================ Find max ======================================>

const arr = [4,7,1,10,440, 2];

const findMax = arr => {
  let max=arr[0];
  for (let i=1; i< arr.length; i++) {
    if (arr[i] > max) max=arr[i];
  } 
  return max;
};


// findMax(arr);
//============================================ Main Function ======================================>

function main() {
  // searchLibrary(library, library[4]);
  // console.log(searchLibraryBinary(library, 'buh'));
  // let treeHouse = new BinarySearchTree();
  // treeHouse.insert(25);
  // treeHouse.insert(15);
  // treeHouse.insert(50);
  // treeHouse.insert(10);
  // treeHouse.insert(24);
  // treeHouse.insert(35);
  // treeHouse.insert(70);
  // treeHouse.insert(4);
  // treeHouse.insert(12);
  // treeHouse.insert(18);
  // treeHouse.insert(31);
  // treeHouse.insert(44);
  // treeHouse.insert(66);
  // treeHouse.insert(90);
  // treeHouse.insert(22);
  // // preOrderTraverse(treeHouse);
  // postOrderTraverse(treeHouse);
  console.log(highestProfit([128, 97, 121, 123, 98, 97, 105]));
}

main();
