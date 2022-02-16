const http = new EasyHTTP;

// get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// user data
const data = {
    name: 'Amirali',
    username: 'AmirAli6578',
    email: 'amir@gmail.com'
}

http.delete("https://jsonplaceholder.typicode.com/users/2")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));