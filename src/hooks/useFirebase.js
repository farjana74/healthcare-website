import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged ,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendEmailVerification ,sendPasswordResetEmail   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firbase/firebase.init";
initializeAuthentication();
const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[isLoading,setIsLoading]=useState(true);

    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[error,setError]=useState('')
    const auth = getAuth();

    const signInGoogle=()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
       return  signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
            console.log(user)
        })
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
      const unsubscribed =  onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        
        });
        return () => unsubscribed;

    },[])
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
           


        })
        .finally(()=>setIsLoading(false))
    }

   




    const handleRegistration=(e)=>{
        e.preventDefault()
        console.log(email,password)
if(password.length<6){
    setError('password should be 6 character a long')
    return;
 }
  if(!/(?=.*[A-Z])/.test(password)){
      setError('Password must contain uppercase')
      return;
 }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            setError('')
            verificationUser();
        })
        .catch(error=>{
            setError(error.message)
        })
        
      }
      const handleEmail=(e)=>{
        setEmail(e.target.value)
      
      }
      const handlePassword=(e)=>{
        setPassword(e.target.value)
      
      }


const procesLogin=(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user=result.user;
        setError('')
    })
    .catch(error=>{
        setError(error.message)
    })

}
const verificationUser=()=>{
    sendEmailVerification(auth.currentUser)
    .then(result=>{
console.log(result)
    })
}


const resetPassword=()=>{
    sendPasswordResetEmail(auth, email)
    .then(result=>{

    })
}

    return{
        user,
        signInGoogle,
        logOut,
        isLoading,
        handleRegistration,
        handleEmail,
        handlePassword,error,resetPassword,
        procesLogin,
        
        
    }
}
export default useFirebase;