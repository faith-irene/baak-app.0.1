import User from "../models/users";
// import { Request , Response  } from "express";
import { genSaltSync, hashSync } from "bcrypt-ts";

import { defineEventHandler, getQuery, readBody  } from "h3";

export const getUser = defineEventHandler(async () => {
    return await User.findAll();
});




//  export const getUser = async (req : Request,res : Response) => {
//     try {
//         const user = await User.findAll();
//         res.json(user);
//     } catch(error) {
//         res.json( { "pesan " : error });
//     }
// }

// export const getUserById = async (req: Request,  res : Response) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (user) {
//             res.json(user);
//         } else {
//             res.status(404).json( { "pesan" : "user tidak ditemukan" });
//         }
//     } catch (error) {
//         res.sendStatus(403);
//     }
// }

// export const createUser =async (req : Request, res : Response) => {
//     try {
//         const { username, password, confPassword ,fullname, role_id } = req.body;
//         if ( password !== confPassword) return res.status(403).json({"pesan": "password tidak cocok"});
//         const salting = genSaltSync(10);
//         let hashPassword : string = hashSync(password,salting);
//         const user = await User.create({
//             username : username,
//             password : hashPassword,
//             role_id : role_id,
//             fullname : fullname,
//             status : 1
//         });
//         res.status(200).json(user);
//     } catch(error) {
//         res.sendStatus(404).json({ "pesan" : error});
//     }
// }

// export const updateUser =async ( req :Request, res : Response) => {
//     try {
//         const { username, password ,fullname } = req.body;
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.sendStatus(404);
//         } else {   
//             let newPassword ;
//             let newUsername ;
//             let newFullname;

//             if ( password === "" || password == null ) {
//             newPassword = user.password;
//             } else {
//             newPassword = hashSync(password,10);
//             }

//             if ( username === "" || username == null ) {
//             newUsername = user.username;
//             } else {
//             newUsername = username;
//             }

//             if ( fullname === "" || fullname == null ) {
//                 newFullname = user.fullname;
//             } else {
//                 newFullname = fullname;
//             }

//             user.username = newUsername;
//             user.password = newPassword;
//             user.fullname = newFullname;
//             await user.save();
//             res.json({
//                 "pesan" : "Data Berhasil diubah"
//             });
//         }
//     } catch(error) {
//         res.json({
//             "pesan" : `Terjadi kesalahan : ${error}`
//         });
//     }
// }

// export const deleteUser =async (req: Request, res : Response) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (user) {
//             await user.destroy();
//             res.json( {
//                 "pesan" : "User berhasil dihapus"
//             });
//         } else {
//             res.json({
//                 "pesan" : "User tidak ditemukan"
//             });
//         }
//     } catch(error) {
//         res.status(500).json({ "pesan" : error});
//     }
// }