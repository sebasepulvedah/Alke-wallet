# Alke Wallet Evaluación del módulo 2

Proyecto: Alke Wallet
**Módulo 2: Fundamentos del desarrollo Front-end** 

Alke Wallet es una aplicación web que simula una **wallet- billetera digital**, permitiendo a los usuarios iniciar sesión, administrar su saldo y realizar transferencias entre cuentas, utilizando tecnologías del lado del cliente.

---

##  Objetivo del proyecto

Desarrollar una interfaz Front-End funcional, segura y fácil de usar que permita:

- Login y Registrar
- Administrar fondos (saldo, depósitos, recibidos).
- Simular envío y recepción de dinero entre usuarios. (seba, flor)
- Visualizar el historial de transacciones.
- Aplicar interactividad y animaciones con jQuery.
- Implementar un diseño responsivo con Bootstrap.

---

## Tecnologías utilizadas

- **HTML5** – Estructura semántica
- **CSS3** – Estilos personalizados
- **Bootstrap 5** – Diseño responsivo
- **JavaScript (ES6)** – Lógica de la aplicación
- **jQuery** – Manipulación del DOM, eventos y animaciones
- **LocalStorage** – Persistencia de datos en el navegador


**Estructura** 
Proyecto WalletAlke/
│
├── css/
│ └── style.css
│
├── js/
│ ├── login.js
│ ├── user.js
│ ├── deposit.js
│ ├── sendmoney.js
│ └── transactions.js
│
├── index.html
├── login.html
├── menu.html
├── deposit.html
├── sendmoney.html
├── transactions.html
└── README.md


---

## inicio de sesión

- Los usuarios pueden **crear una cuenta** y luego iniciar sesión. Formulario basico
- Las credenciales se validan mediante JavaScript.
- El estado de sesión se guarda en `localStorage`. 
- Las pantallas están protegidas: si no hay sesión activa, se redirige al login.

---

##  Administración de fondos

- Visualización del **saldo disponible**.
- Realización de **depósitos**, los cuales:
  - Actualizan el saldo.
  - Se registran como transacciones.
  - El saldo se actualiza dinámicamente sin recargar la página.

---

##  Envío y recepción de fondos

- Envío de dinero entre usuarios registrados.
- Validaciones:
  - Monto válido.
  - Saldo suficiente.
  - No se permite enviarse dinero a uno mismo.
- La transferencia:
  - Resta saldo al emisor.
  - Suma saldo al receptor.
  - Registra la transacción para ambos usuarios.

---

## Historial de transacciones

- Cada usuario posee su **historial individual**.
- Se registran:
  - Depósitos.
  - Transferencias enviadas.
  - Transferencias recibidas.
- Filtro por tipo de transacción.


---

## ✨ Uso de jQuery 

- Manejo de eventos (`click`, `change`).
- Validaciones de formularios.
- Animaciones y efectos visuales (`fadeIn`).
- Actualización dinámica del DOM.
- Autocompletado de contactos en envío de dinero.
- Mensajes dinámicos y feedback visual al usuario.


---

## 📱 Diseño responsivo

- Diseño mobile-first.
- Uso de contenedores y componentes de Bootstrap.
- Adaptable a dispositivos móviles, tablets y escritorio.

---

##  Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo `login.html` en el navegador.
3. Crear un usuario o ingresar con uno existente.
4. Navegar por las distintas funcionalidades de la wallet.

> No requiere servidor ni instalación adicional.

---

##  Estado del proyecto

✔ Cumple con todos los requerimientos del Módulo 2  
✔ Funcional y estable  
✔ Código claro y legible  
✔ Interfaz responsiva  
✔ Uso correcto de jQuery y Bootstrap  

---

## Autor

Proyecto desarrollado por **Sebastián Sepúlveda**  
Evaluación Integradora – Módulo 2  

# Modulo2 Entrega
# Modulo2
