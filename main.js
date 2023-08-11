"use strict";


// Create a function called checkSize() with the parameter fileSize.


function checkSize(fileSize) {
}

// Create a constant called maxSize that holds the maximum allowed gigabytes and set it to 5.

function checkSize(fileSize) {

    const maxSize = 5;


}

// Create a constant called minSize that holds the minimum allowed gigabytes and set it to 1.


function checkSize(fileSize) {

    const maxSize = 5;
    const minSize = 1;


}

//We'll display whether the upload will be permitted based on the file size.

function checkSize(fileSize) {
    const maxSize = 5;
    const minSize = 1;
    console.log("Upload Permitted?");
}

// Let's tell the user if they have exceeded the maximum file size. We can do so by checking if fileSize is greater than the maxSize.

// Create a constant overMaxSize, check if fileSize is greater than maxSize, and store the result in the constant

// Add another display statement that displays "The file is too large: " + overMaxSize.


function checkSize(fileSize) {
    const maxSize = 5;
    const minSize = 1;
    console.log("Upload Permitted?");

    const overMaxsize = fileSize > maxSize;

    console.log("The file is too large: " + overMaxsize);

}

// Let's also tell the users if their file upload is too small. We can check if fileSize is less than the minSize.
function checkSize(fileSize) {
    const maxSize = 5;
    const minSize = 1;
    console.log("Upload Permitted?");

    const overMaxsize = fileSize > maxSize;

    console.log("The file is too large: " + overMaxsize);

    const underMinSize = fileSize < minSize;

    console.log("The file is too small: " + underMinSize);

}



// Now that we've created a function, let's put it to use. To use a function, we need to call it.


checkSize(10);