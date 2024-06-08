// import express from "express";
// import bodyParser from "body-parser";
// import database from "./db/database";
// // import { getUser, getUserById, createUser, updateUser, deleteUser } from "./controllers/user";


// const app = express();
// app.use(bodyParser.json());

// // route server
// // app.get('/api/user', getUser);
// // app.get('/app/user/:id', getUserById);
// // app.post('/app/user', createUser);
// // app.put('/api/user/:id',updateUser);
// // app.delete('/api/user/:id', deleteUser);

// const onServer = async () => {
//     try {
//         await database.authenticate();
//         app.listen(3000,()=> {
//             console.log("server ON port : 3000");
//         })
//     } catch(error){
//         console.log(error);
//     }
// }

// onServer();