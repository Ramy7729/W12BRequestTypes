// Collaborated with Liz.
// This function creates a post (POST-CREATE).
function createPost(eventDetails) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            document.getElementById("postForm").innerHTML += `<p>Success!</p>`;
        }
    }
    // Configuring the POST request.
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    // Setting the content-type header that tells the server what type of data to expect. 
    ajax.setRequestHeader("Content-Type", "application/json");

    // Values are defined by the user's input and gets sent to the server with ajax.
    let postTitle = document.getElementById("postTitle").value;
    let postBody = document.getElementById("postBody").value;

    // Created a JS object that will be converted to JSON when the request is sent.
    let postObject = {
        title: postTitle,
        body: postBody,
        userId: 1
    };
    
    let postJSON = JSON.stringify(postObject);
    // Sending the JSON stringified version of the JS object.
    ajax.send(postJSON);
}

// This function updates the post (PATCH-UPDATE).
function patchPost(eventDetails) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    let patchId = document.getElementById("patchId").value;
    let patchTitle = document.getElementById("patchTitle").value;
    let patchBody = document.getElementById("patchBody").value;

    ajax.open("PATCH", `https://jsonplaceholder.typicode.com/posts/${patchId}`, true);
    ajax.setRequestHeader("Content-Type", "application/json");

    let patchObject = {
        title: patchTitle,
        body: patchBody,
        userId: 1
    };
    
    let patchJSON = JSON.stringify(patchObject);
    ajax.send(patchJSON);
}

// This function deletes a post (DELETE).
function deletePost(eventDetails) {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }
    
    let idToDelete = document.getElementById('deleteId').value;
    ajax.open("DELETE", `https://jsonplaceholder.typicode.com/posts/${idToDelete}`, true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

// This function reads the posts and displays it to the screen (GET-READ).
function getsAllPosts() {
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let posts = JSON.parse(this.responseText);
            for (let i = 0; i < posts.length; i++) {
                document.getElementById("posts").innerHTML += `<h1>${posts[i].id} - ${posts[i].title}</h1><p>${posts[i].body}</p>`;
            }
        }
    }

    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

// Uses the click event so that the specified functions trigger when the button and is clicked on.
// Creates post.
let postButton = document.getElementById("postButton");
postButton.addEventListener("click", createPost);
// Updates post.
let patchButton = document.getElementById('patchButton');
patchButton.addEventListener('click', patchPost);
// Deletes post.
let deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', deletePost);
// This function is called upon to display all the quotes on the site.
getsAllPosts();
