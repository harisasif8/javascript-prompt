const USERS = 'user';
const getUsersFromLocalStorage = () => {
    const usersFromLS = localStorage.getItem(USERS);
    return JSON.parse(usersFromLS);
}

const usersFromLS = getUsersFromLocalStorage();
const users = usersFromLS ? usersFromLS : [];


function signup(e) {
    e.preventDefault();
    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const signupUsername = document.getElementById('username').value
    const signupPassWord = document.getElementById('pw').value;
    const isUserExist = users.find((user) => user.username === signupUsername);

    if (isUserExist) {
        // show error user aleady exist
    } else {
        const newUser = {
            username: signupUsername,
            password: signupPassWord,
            firstName: fname,
            lastName: lname
        };

        users.push(newUser)

        const json = JSON.stringify(users);
        localStorage.setItem(USERS, json)
    }
}

function login(e) {
    e.preventDefault();

    const loginUserName = document.getElementById('loginUsername').value
    const loginPassword = document.getElementById('loginpw').value


    // const signupData = localStorage.getItem(users);
    const users = getUsersFromLocalStorage();

    // if(loginUserName==signupData.username && loginPassword==signupData.password)
    //      {
    //          alert("logged in successfully")
    //      }

    // else {
    //     alert('wrong credentials')
    // }         

}

