const escpos = require('escpos');
escpos.USB = require('escpos-usb');

export default async function handler(req,res){
  const ticket=req.body;
  const device=new escpos.USB();
  const printer=new escpos.Printer(device);

  device.open(()=>{
    printer.align('CT').text('Cocosystem')
           .text('Taquilla: '+ticket.taquilla)
           .text('Ticket #: '+ticket.ticketId)
           .drawLine();
    ticket.items.forEach(i=>printer.text(`${i.number} ${i.name} ${i.amount} Bs`));
    printer.drawLine().text('Total: '+ticket.total+' Bs').cut().close();
  });

  res.status(200).json({message:"Ticket enviado a impresora"});
}
