export function showTicket(taquilla, ticketId, date, lottery, draw, items, total){
  const rows = document.getElementById("ticket-rows");
  rows.innerHTML = "";
  items.forEach(i=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${i.number}</td><td>${i.name}</td><td>${i.amount}</td>`;
    rows.appendChild(tr);
  });
  document.getElementById("ticket-total").textContent = total+" Bs";
  document.getElementById("ticket-modal").style.display="flex";
}

export function copyTicket(){
  navigator.clipboard.writeText(document.getElementById("ticket-content").innerText)
    .then(()=>alert("✅ Ticket copiado"));
}

export function printTicket(){
  const printContent=document.getElementById("ticket-content").innerHTML;
  const w=window.open("","_blank");
  w.document.write("<html><body>"+printContent+"</body></html>");
  w.document.close();
  w.print();
}

export function closeTicketModal(){
  document.getElementById("ticket-modal").style.display="none";
}
