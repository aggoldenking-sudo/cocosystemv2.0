import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { showTicket } from "./app.js";

export async function registerSale(ticket){
  await addDoc(collection(db,"sales"), ticket);
  showTicket(ticket.taquilla, ticket.ticketId, ticket.date, ticket.lottery, ticket.draw, ticket.items, ticket.total);
}
