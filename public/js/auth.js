import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export async function login(email, password) {
  try {
    // Login con Firebase Auth
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    // Definir rol
    let role = "taquilla"; // por defecto taquilla
    if (email === "golden@gmail.com" || uid === "kAahcX02loVSWBg8KO2Gz21Bn1U2") {
      role = "master"; // Master
    }

    // Obtener datos adicionales de Firestore (si existe)
    const userDoc = await getDoc(doc(db, "taquillas", uid));
    const userData = userDoc.exists() ? userDoc.data() : null;

    console.log("Usuario logueado:", { uid, email, role, data: userData });
    return { uid, email, role, data: userData };

  } catch (err) {
    console.error("Error login:", err);
    alert("Error login: " + err.message);
    return null;
  }
}

