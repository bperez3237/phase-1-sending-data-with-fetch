// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// // method: "POST" is missing from the object below
// const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//     };
  
//     fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

function foo(data) {
    const node = document.createElement('li');
    node.textContent = data.id;
    console.log(node)
    document.querySelector('#users').appendChild(node);
}

function appendError(error) {
    console.log(error)
    console.log(error.message)
    const node = document.createElement('p');
    node.textContent = error.message;
    // console.log(node)
    document.querySelector('#users').appendChild(node);
}

function submitData(string1,string2) {

    const data = {name: string1, email: string2}


    return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => foo(data))
    .catch(error => appendError(error))
};