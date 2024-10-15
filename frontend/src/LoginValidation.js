function Validation(values){
    let error={}
    const e_pat=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const p_pat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.email===""){
        error.email="Name should not be empty"
    }
    else if(!e_pat.test(values.email)){
        error.email="Email didn't match"
    }
    else{
        error.email=""
    }
    if(values.password===""){
        error.password="Password should not be empty"
    }
    else if(!p_pat.test(values.password)){
        error.password="Password didn't match"
    }
    else{
        error.password=""
    }
    return error;
}
export default Validation;