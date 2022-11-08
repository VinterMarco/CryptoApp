import {useState} from "react";

export default function LoginForm({Login, error}) {

    const [details, setDetails] = useState({email: '', name:'', password:''})

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }



    return (
        <form onSubmit={submitHandler}>
            <div className='loginForm'>
                <div className='forms'>
                    <input  type="email" onChange={(e)=>{
                        setDetails({...details, email: e.target.value})
                    }} value={details.email} placeholder='email'/>
                </div>
                <div className='forms'>
                    <input type="password" onChange={(e)=>{
                        setDetails({...details, password: e.target.value})
                    }} value={details.password} placeholder='password'/>
                </div>
            </div>
            <input type="submit" value='log in' className='btn'/>
        </form>
    )
}