import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA__sRlR5Ihl4Xc_fDTRFDVR-Bcr9scoyw",
    authDomain: "todo-ae63a.firebaseapp.com",
    projectId: "todo-ae63a",
    storageBucket: "todo-ae63a.appspot.com",
    messagingSenderId: "187580950448",
    appId: "1:187580950448:web:266c369f3b64221f115875"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const obtenerPedidos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'pedidos'));
    return querySnapshot;  // Devolver el querySnapshot
  } catch (error) {
    console.error('Error al obtener pedidos:', error);
    throw error;  // Relanzar el error para que sea capturado en el llamador
  }
};

// Función para actualizar el estado del pedido en la base de datos
export const actualizarEstadoPedido = async (pedidoId, nuevoEstado) => {
  console.log('Pedido ID:', pedidoId);
  try {
    const pedidoDocRef = doc(db, 'pedidos', pedidoId);
    // Actualizar el campo 'usuario.estado' en el mapa
    await updateDoc(pedidoDocRef, { 'usuario.estado': nuevoEstado });
    console.log('Estado del pedido actualizado correctamente.');
  } catch (error) {
    console.error('Error al actualizar el estado del pedido:', error);
    throw error;
  }
};

export const deletePedido = async (pedidoId) => {
  try {
    const pedidoRef = doc(db, 'pedidos', pedidoId);
    await deleteDoc(pedidoRef);
    console.log("Pedido eliminado correctamente desde Firestore");
  } catch (error) {
    console.error("Error al eliminar el pedido:", error);
  }
};
export { db }

