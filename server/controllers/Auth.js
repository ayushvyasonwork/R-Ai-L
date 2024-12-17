const User=require('../models/User');
const Department=require('../models/Department');
const generateToken=require('../config/jwt')
const auth=async (req,res)=>{
    try{
        const {name,gender,email,password,role,orgId}=req.body;
        if(!name|| !gender || !email || !password || !role || !orgId){
            res.status(400).json({
                success:false,
                message:'all fields required for user authentication'
            })
        }
        const existingUser=await User.findOne({email});
        console.log(existingUser);
        if(existingUser){
        return res.status(405).json({
            success:false,
            message:'existing user'
        })
        }
        let hashedPassword;
        hashedPassword=await bcrypt.hash(password,10);
        console.log(`hashed password is ${hashedPassword}`);
        const newUser=await User.create({
            name,gender,email,password,role,organisation:orgId
        })
        return res.status(200).json({
            success:true,
            data:{  
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                role:newUser.role,
                // profilePic:newUser.profilePic,
                token:generateToken(newUser._id)
            },
            message:'new entry created successfully'
        })
        

    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'internal server error'
        })
    }
}