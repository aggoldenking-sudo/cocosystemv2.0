import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

// Crear taquilla
export async function createTaquilla(email, permisos){
  await addDoc(collection(db,"taquillas"), { email, rol:"taquilla", active:true, permisos });
}

// Agregar lotería
export async function addLottery(name){
  await addDoc(collection(db,"lotteries"), { name, active:true });
}

// Agregar sorteo
export async function addDraw(lotteryId, hour, label){
  await addDoc(collection(db,"draws"), { lotteryId, hour, label });
}

// Agregar animal
export async function addAnimal(number,name){
  await addDoc(collection(db,"animals"), { number, name, active:true });
}

// Agregar caballo
export async function addHorse(number,name){
  await addDoc(collection(db,"horses"), { number, name, active:true });
}
