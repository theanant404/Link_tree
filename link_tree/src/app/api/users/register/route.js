import connect from "@/dbconfig/dbConfig";
import User from "@/models/userModel.js"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect;

export const POST = async (NextRequest) => {
    // console.log('start register router')
    try{
        const reqBody=await NextRequest.json()
        const {username,email,password}=reqBody
        // console.log(reqBody)

        // condition check if youser exist or not 
        const userEmail=await User.findOne({email})
        const userName=await User.findOne({username})
        if(userEmail || userName){
            return NextResponse.json({error:"User already exist"},{status:400});
        }

        // Password hash
        const salt =await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)
        // console.log("password Hash")

        const newUser=new User({
            username,
            email,
            password:hashedPassword
        })
        const saveUser=await newUser.save()
        // console.log(saveUser)

        return NextResponse.json({
            message:'User created Successfully',
            succes:true,
            saveUser,
        })
    }

    catch(error){
        console.log("error in register router",error)
        return NextResponse.json({error:error.message},{status:500})
    }

}



/////////

// export const POST=async(NextRequest)=>{
//     try{
//         const body =await NextRequest.json();
//         const {email,username,password}=body;
//         if(!email||!username||!password){
//             return new Response("name, username and password is required",{status:401})
//         }
//         const userEmail=await User.findOne({email})
//         const userName=await User.findOne({username})
//         if(userEmail||userName){
//             return new Response("User name already exist",{status:400})
//         }
//         const salt=await bcryptjs.genSalt(12);
//         const hashepassword=await bcryptjs.hash(password,salt);

//         const newUser=new User({
//             email,
//             username,
//             password:hashepassword
//         });
//         await newUser.save();
//         return new Response("User saved successfully",{status:200})
//     }catch(error){
//         console.log(error)
//     }
// }