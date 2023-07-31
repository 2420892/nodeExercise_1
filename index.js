const { writeFile, readFile, appendFile } = require('fs');

// Function to read and display content from data.txt file
function readAndDisplayContent(fileName) {
  readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File content:');
      console.log(data);
    }
  });
}

// Call the function to write content to data.txt
writeFile('./data.txt', 'writing content to data.txt', (err) => {
  if (err) return console.error('Error writing to file:', err);
  console.log('Successfully wrote content to data.txt');
  // After writing the first content, call the function to append the second content
  appendFile('./data.txt', 'Second content\n', (err) => {
    if (err) return console.error('Error appending to file:', err);
    console.log('Successfully appended content to data.txt');
    // After appending the second content, read and display the file content
    readAndDisplayContent('./data.txt');
  });
});

// it placed the new text on a new line
