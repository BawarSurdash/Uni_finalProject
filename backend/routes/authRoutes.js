import express from 'express';
 import { connectToDatabase } from '../lib/db.js';
 import bcrypt from 'bcrypt';
 import jwt from 'jsonwebtoken';
 const router = express.Router();
 
 router.post('/signup', async (req, res) => {
     const { username, email, password } = req.body;
     console.log(username, email, password);
     try {
        const db=await connectToDatabase();
        const[rows]=await db.query('SELECT * FROM users WHERE email=?',[email]);
        if(rows.length>0){
         return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword=await bcrypt.hash(password,10);
        await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',[username, email, hashedPassword]);
        res.status(201).json({ message: 'User created successfully' });
 
     } catch (error) {
         res.status(500).json({ message: 'Internal server error' });
     }
 });
 router.post('/login', async (req, res) => {
     const {  email, password } = req.body;
     console.log( email, password);
     try {
        const db=await connectToDatabase();
        const[rows]=await db.query('SELECT * FROM users WHERE email=?',[email]);
        if(rows.length===0){
         return res.status(404).json({ message: 'User not exists' });
        }
        const isMatch=await bcrypt.compare(password,rows[0].password);
        if(!isMatch){
         return res.status(404).json({ message: 'Wrong password' });
        }
        const token=jwt.sign({userId:rows[0].id},process.env.JWT_KEY,{expiresIn:'3h'});
 
        res.status(201).json({ token:token});
 
     } catch (error) {
         res.status(500).json({ message: 'Internal server error' });
     }
 });
 
 const verifyToken=(req,res,next)=>{
  try{   
     const token=req.headers.authorization.split(' ')[1];
     const decoded=jwt.verify(token,process.env.JWT_KEY);
     req.userId=decoded.userId;
     next();
  }catch(error){
     res.status(500).json({ message: 'Unauthorized' });
  }}
  router.get('/home',verifyToken,async(req,res)=>{
 try{
     const db=await connectToDatabase();
     const[rows]=await db.query('SELECT * FROM users WHERE id=?',[req.userId]);
     if(rows.length===0){
         return res.status(404).json({ message: 'User not found' });
     }
     return res.status(201).json({user:rows[0]});
 }catch(error){
     res.status(500).json({ message: 'Internal server error' });
 }   
  })
 export default router;