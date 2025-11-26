# CreditSmart - Aplicación Web de Créditos

## Descripción del Proyecto

CreditSmart es una aplicación web interactiva desarrollada con React que permite a los usuarios explorar, simular y solicitar diferentes tipos de créditos. La aplicación incluye un simulador de créditos con búsqueda en tiempo real, filtros dinámicos y un formulario funcional para solicitar créditos con cálculo automático de cuotas.

## Tecnologías Utilizadas

- **React 18** - Librería para construir interfaces de usuario
- **React Router** - Navegación entre páginas
- **Vite** - Herramienta de construcción rápida
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos y diseño responsivo

## Características Principales

1. **Página de Inicio** - Listado dinámico de créditos disponibles
2. **Simulador** - Búsqueda en tiempo real y filtros por tasa de interés
3. **Solicitud de Crédito** - Formulario controlado con validaciones y cálculo automático de cuota mensual
4. **Navegación** - Menú intuitivo para cambiar entre páginas
5. **Almacenamiento en Memoria** - Las solicitudes se guardan durante la sesión

## Instrucciones de Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- npm (viene con Node.js)
- Git

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone <tu-url-del-repositorio>
cd creditSmart
```

2. Instalar dependencias:
```bash
npm install
```

3. Instalar React Router:
```bash
npm install react-router-dom
```

4. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173/`

## Estructura del Proyecto
```
creditSmart/
├── src/
│   ├── components/
│   │   ├── CreditCard.jsx      # Componente reutilizable de tarjeta
│   │   └── Navbar.jsx          # Barra de navegación
│   ├── pages/
│   │   ├── Home.jsx            # Página principal
│   │   ├── Simulator.jsx       # Simulador con filtros
│   │   └── RequestCredit.jsx   # Formulario de solicitud
│   ├── data/
│   │   └── creditsData.js      # Datos de créditos
│   ├── App.jsx                 # Componente principal con rutas
│   ├── App.css                 # Estilos globales
│   └── main.jsx                # Punto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## Funcionalidades Implementadas

### 1. Componentes Reutilizables
- `CreditCard`: Muestra información de un crédito con props
- `Navbar`: Navegación entre páginas

### 2. Manejo de Estado (useState)
- Búsqueda en tiempo real
- Filtros dinámicos
- Formulario controlado
- Validaciones

### 3. Manipulación de Arrays
- `.map()` para renderizar listas
- `.filter()` para búsquedas y filtros
- Almacenamiento de solicitudes

### 4. Cálculo de Cuota Mensual
- Fórmula matemática: Cuota = (Monto × Tasa × (1 + Tasa)^Plazo) / ((1 + Tasa)^Plazo - 1)
- Se actualiza en tiempo real según monto y plazo

## Cómo Usar la Aplicación

### Página de Inicio
- Ver todos los créditos disponibles con sus características

### Simulador
- Escribe el nombre del crédito en el buscador
- Ajusta los sliders para filtrar por tasa de interés
- Los resultados se actualizan en tiempo real

### Solicitar Crédito
- Selecciona un tipo de crédito
- Ingresa el monto deseado
- Establece el plazo en meses
- La cuota mensual se calcula automáticamente
- Completa tus datos personales
- Envía la solicitud
- Verifica tu solicitud en el historial

## Commits Realizados

1. Configuración inicial de React con Vite
2. Componentes y estructura del proyecto
3. Páginas y navegación implementadas
4. Búsqueda y filtros funcionales
5. Formulario con validaciones
6. Cálculo de cuota mensual
7. Estilos y mejoras en la interfaz

## Notas Importantes

- Las solicitudes se guardan solo en memoria durante la sesión
- Los datos no persisten si recargás la página
- Se puede expandir en el futuro para guardar datos en una base de datos

## Autor

[Tu Nombre]

## Licencia

Este proyecto es de uso educativo.