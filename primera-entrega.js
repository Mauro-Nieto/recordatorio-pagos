// algoritmo Sistema de Recordatorios de pagos y Motivación:


let usuariosGym = [
    {   nombre: 'Juan',
        fechaVencimientoPago: '2024-02-01',
        email: 'pepito@gmai.com',
        telefono: '1234567890'
    },  
    {   nombre: 'Maria',
        fechaVencimientoPago: '2024-02-15',
        email: 'mariapepita@gmail.com',
        telefono: '0987654321'
    }
]




// Función para enviar recordatorios de pago
function enviarRecordatorioPago(usuario) {
    // Obtener la fecha actual
    const fechaActual = new Date();
  
    // Obtener la fecha de vencimiento del pago del usuario
    const fechaVencimientoPago = obtenerFechaVencimientoPago(usuario);
  
    // Calcular la diferencia en días entre la fecha de vencimiento y la fecha actual
    const diasHastaVencimiento = Math.ceil((fechaVencimientoPago - fechaActual) / (1000 * 60 * 60 * 24));
  
    // Verificar si la fecha actual está a una semana o menos del vencimiento
    if (diasHastaVencimiento <= 7 && diasHastaVencimiento > 0) {
      // Enviar recordatorio al usuario
      enviarNotificacion(usuario, "Recordatorio de Pago", "Tu pago mensual vencerá pronto. Por favor, asegúrate de realizar el pago a tiempo.");
    }
  }
  
  // Función para obtener la fecha de vencimiento del pago del usuario
  function obtenerFechaVencimientoPago(usuario) {
    // Implementación para obtener la fecha de vencimiento del pago del usuario
    // Puedes utilizar datos almacenados en la base de datos del usuario, por ejemplo
    return new Date(usuario.fechaVencimientoPago);
  }
  
  // Función para enviar notificaciones
  function enviarNotificacion(usuario, asunto, mensaje) {
    // Implementación para enviar notificaciones al usuario
    // Esto podría incluir enviar mensajes por correo electrónico, mensajes de texto o notificaciones push en una aplicación
    console.log(`Notificación enviada a ${usuario.nombre}: ${asunto} - ${mensaje}`);
  }
  
  // Ejemplo de uso
usuariosGym = obtenerListaDeUsuarios();  // Obtener la lista de usuarios
  for (const usuario of usuariosGym) {
    enviarRecordatorioPago(usuario);
  }
  
  // Función de ejemplo para obtener una lista de usuarios
  function obtenerListaDeUsuarios() {
    return [
      { nombre: 'Juan', fechaVencimientoPago: '2024-02-01' },
      { nombre: 'María', fechaVencimientoPago: '2024-02-15' },
      // Agrega más usuarios según sea necesario
    ];
  }
  
  