import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        fName: 'Johnny',
        lName: 'Impact',
        age: 20,
        id: '48432a00-14b8-404c-bb4d-c4315d443fb9'
    }
]

export const getAllUsers = (req, res) => {
    console.log(users);
    res.send(users)
}

export const createUser = (req, res) => {
    let user = req.body;

    const userId = uuidv4();

    const userWithid = { ...user, id: userId}

    users.push(userWithid)
    // console.log(users);
    res.send("Success! User added")
}

export const findUser = (req, res) => {
    // res.send("Route cha")
    let id = req.params.id

    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    // res.send("Route cha")
    let id = req.params.id

    //users = user.filter((user) => user.id != id);
    const foundUser = users.find((user) => user.id === id);
    users.pop(foundUser)
    res.send('Successfully Deleted User!')
}

export const updateUser = (req, res) => {
    const id = req.params.id

    const { fName, lName, age } = req.body

    const userToBeUpdated = users.find((user) => user.id === id);

    if (fName){
        userToBeUpdated.fName = fName
    }

    if (lName){
        userToBeUpdated.lName = lName
    }

    if (age){
        userToBeUpdated.age = age
    }

    console.log(users);

    res.send("Successfully Updated Profile!")
}