import React from 'react';
import '../Css/Login.css';
import {Button} from "@material-ui/core";
import {auth,provider} from '../firebase.js';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';
export default function Login ()  {
    const [state,dispatch]= useStateValue();
    console.log( useStateValue())

    const signIn = ()=>{
         auth.signInWithPopup(provider)
         .then((response)=>{
             console.log(response);
             dispatch({
                 type:actionTypes.SET_USER,
                 user: response.user
             })
         })
         .catch(error=>{
             console.log(error.message);
         })
    }
    return (
        <div className="login">
            <div className="login__logo">
            
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" alt="fb_log"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png" alt="fblogo_text"/>
            </div>
            <Button type="submit" onClick={signIn} variant="primary">Sign In</Button>
        </div>
    );
};

// export default Login;