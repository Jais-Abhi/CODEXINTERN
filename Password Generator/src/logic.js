const generatePassword = (length)=>{
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
    let password = "";
    for(let i=0; i<length; i++){
        const randomIdx = Math.floor(Math.random() * chars.length);
        password += chars[randomIdx];
    }
    return password;
}

export default generatePassword;