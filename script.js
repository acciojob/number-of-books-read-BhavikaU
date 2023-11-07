const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	// int count =0;
	// if(readingStatus == true)
	// {
	// 	count++;
	// }
	// return count;
	let numberOfBooksRead = 0;
	library.forEach((book) => {
		if(book.readingStatus)
			numberOfBooksRead++;
	})
	console.log(numberOfBooksRead);
};

// Do not change the code below

alert(numberOfBooksRead());
