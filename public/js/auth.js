import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export async function login(email, password){
  try{
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    let role = email==="golden@gmail.com"?"master":"taquilla";
    const userDoc = await getDoc(doc(db,"taquillas",userCred.user.uid));
    return { uid:userCred.user.uid, email, role, data:userDoc.exists()?userDoc.data():null };
  }catch(err){
    alert("Error login: "+err.message);
    return null;
  }
}
