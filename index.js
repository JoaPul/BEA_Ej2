import mongoose from "mongoose";
import { calif, readOnlyfive, readRest, readRestOnly, cocina } from "./uno.js";

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

mongoose.connect('mongodb+srv://<usuario>:LLamarada@cluster0.stgxm5y.mongodb.net/ejercicio2?retryWrites=true&w=majority', async () => {
  console.log('Al ejercicio');

  // Entregue todos los documentos read
  // !await readRest();
  // Entregue los campos restaurant_id, name,borough y cousine de todos los documentos
  // !await readRestOnly();
  // Función que imprima los primeros 5 restaurantes de "Bronx" que se encuentren en la base
  // !await readOnlyfive();
  // Funcion que imprima los nombres de los restaurantes que tengan al menos una calificacion de 9 o sea mayor o igual a 9
  // !await calif();
  // Función que imprima los primeros 10 restaurantes que lleven cocina americana(cousine) ordenados por su nombre alfabéticamente
  await cocina();
})