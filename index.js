import mongoose from "mongoose";

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Se ha coectado a la base de datos 🟢');
});

db.on('connecting', () => {
  console.log('Se esta conectando a la base');
});

db.on('error', () => {
  console.log('No se puede conectar a la base de datos');
});

mongoose.connect('mongodb+srv://usuario:LLamarada@cluster0.stgxm5y.mongodb.net/ejercicio2?retryWrites=true&w=majority', () => {
  console.log('Al ejercicio')
})