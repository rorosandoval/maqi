# MAQI - Advanced Optical Crystals

Sitio web oficial de **MAQI**, empresa especializada en el desarrollo de cristales ópticos no lineales personalizados usando tecnología de estructuras metal-orgánicas (MOF).

## 📋 Descripción del Proyecto

MAQI es un spin-off universitario fundado en 2023 que diseña y desarrolla cristales ópticos avanzados basados en MOF (Metal-Organic Frameworks) para revolucionar el campo de la óptica no lineal. El sitio web presenta:

- **Tecnología MOF**: Detalles sobre los cristales MIRO-101
- **Productos**: Propiedades y aplicaciones de los cristales MIRO
- **Equipo**: Información sobre los fundadores y especialistas
- **Noticias**: Últimos logros y reconocimientos
- **Contacto**: Información de comunicación

## 🚀 Características Actuales

### Estructura del Proyecto

```
maqi_site/
├── index.html              # Página principal
├── public/
│   ├── css/
│   │   └── style.css       # Estilos principales
│   ├── js/
│   │   └── app.js          # Lógica JavaScript
│   └── img/                # Recursos gráficos
├── README.md               # Este archivo
```

### Componentes Principales

- **Header/Banner**: Navegación y encabezado heroico con propuesta de valor
- **Secciones de Contenido**:
  - Tecnología MOF
  - Evidencia científica (6 publicaciones de investigación)
  - Cristales MIRO
  - Propiedades del MIRO-101
  - About Us con equipo de 6 especialistas
  - Noticias y logros recientes
- **Modal de Perfiles**: Información expandida de miembros del equipo
- **Footer**: Información de contacto y navegación

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo con media queries
- **JavaScript**: Interactividad con Bootstrap
- **Bootstrap 5.3.8**: Framework CSS para responsividad
- **Google Fonts**: Tipografía Montserrat

## 📱 Responsividad

El sitio es completamente responsivo con breakpoints:
- **Desktop**: ≥ 992px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

## ⚙️ Instalación y Uso

### Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere dependencias backend

### Cómo ejecutar

1. Clonar o descargar el repositorio
2. Abrir `index.html` en un navegador web
3. Para desarrollo local con servidor:

```bash
# Opción 1: Usando Python
python -m http.server 8000

# Opción 2: Usando Node.js
npx http-server

# Opción 3: Usando VS Code Live Server
# Instalar extensión Live Server y hacer clic en "Go Live"
```

4. Acceder a `http://localhost:8000` (o el puerto indicado)

## 📝 Mejoras Pendientes de Implementación

### 1. **Google Analytics e Integración de Analytics**

**Estado**: ❌ No implementado

Para agregar seguimiento de usuarios y comportamiento:

```html
<!-- Agregar en <head> del index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID'); // Reemplazar GA_ID con tu ID de Google Analytics
</script>
```

**Pasos a seguir**:
1. Crear cuenta en [Google Analytics](https://analytics.google.com)
2. Obtener el ID de propiedad (GA_ID)
3. Agregar el código anterior en el `<head>` de `index.html`
4. Configurar eventos personalizados en `app.js` para:
   - Click en botones de contacto
   - Descargas de documentos
   - Navegación entre secciones

### 2. **Metadatos y SEO**

**Estado**: ⚠️ Parcialmente implementado

Metadatos recomendados a agregar:

```html
<!-- Open Graph para redes sociales -->
<meta property="og:title" content="MAQI - Cristales Ópticos Avanzados con Tecnología MOF">
<meta property="og:description" content="Descubre los cristales MIRO-101: soluciones ópticas no lineales personalizadas basadas en estructuras metal-orgánicas.">
<meta property="og:image" content="https://maqi.cl/public/img/og-image.png">
<meta property="og:url" content="https://maqi.cl">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="MAQI - Cristales Ópticos Avanzados">
<meta name="twitter:description" content="Soluciones de óptica no lineal con tecnología MOF">
<meta name="twitter:image" content="https://maqi.cl/public/img/og-image.png">

<!-- SEO Básico -->
<meta name="description" content="MAQI desarrolla cristales ópticos no lineales personalizados usando tecnología MOF. Descubre MIRO-101 para aplicaciones en fotónica.">
<meta name="keywords" content="MOF, crystals, optics, photonics, MIRO-101, non-linear optics, metal-organic frameworks">
<meta name="author" content="MAQI">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://maqi.cl">

<!-- Favicon -->
<link rel="icon" type="image/png" href="/public/img/favicon.png">
```

### 3. **Atributos ALT para Imágenes**

**Estado**: ⚠️ Parcialmente implementado

Imágenes que necesitan ALT mejorados:

| Imagen Actual | ALT Mejorado | Ubicación |
|---|---|---|
| `<img src="/public/img/banner-mobile.png" class="banner-mobile-img" alt="">` | `alt="Banner MAQI - Cristales MOF para óptica no lineal"` | header |
| `<img src="/public/img/graphic.svg" alt="Graphic">` | `alt="Diagrama de estructura de cristal MOF"` | sección Technology |
| `<img src="/public/img/tecnology.svg" alt="">` | `alt="Visualización de tecnología MOF"` | section mobile |
| `<img src="/public/img/img-2.png" class="img-fluid h-100" alt="Imagen secundaria">` | `alt="Cristal MIRO-101 en laboratorio"` | MIRO Crystals |
| `<img src="/public/img/orbita.svg" alt="Graphic">` | `alt="Estructura molecular MOF"` | About us |
| `<img src="" alt="">` (News vacíos) | `alt="Noticia: [Título de la noticia]"` | News section |
| `<img src="/public/img/User/User.svg" alt="">` (Footer) | `alt="Icono de usuario"` | Footer |

### 4. **Implementación de Formulario de Contacto**

**Estado**: ❌ No implementado

Se recomienda agregar:

```html
<!-- Reemplazar enlace del botón "Ask for more information" -->
<button class="boton boton-primary" data-bs-toggle="modal" data-bs-target="#contactModal">
  Ask for more information
</button>

<!-- Modal de Contacto -->
<div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="contactModalLabel">Request Information</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form id="contactForm">
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required>
          </div>
          <div class="mb-3">
            <label for="company" class="form-label">Company</label>
            <input type="text" class="form-control" id="company">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </div>
</div>
```

### 5. **URLs Dinámicas en Navegación**

**Estado**: ⚠️ Incompleto

Los enlaces de navegación (#) necesitan apuntar a las secciones correspondientes:

```html
<!-- Actualizar href en navbar -->
<a class="nav-link active" href="#technology">Technology</a>
<a class="nav-link active" href="#miro-crystals">MIRO Crystals</a>
<a class="nav-link active" href="#about">About us</a>
<a class="nav-link active" href="#news">News</a>
<a class="nav-link active" href="#contact">Contact</a>

<!-- Agregar id a secciones -->
<section id="technology" class="main container-fluid">
<section id="miro-crystals" class="main container-fluid">
<section id="about" class="main container-fluid bg-gris">
<section id="news" class="main container-fluid">
<footer id="contact" class="main container-fluid">
```

### 6. **Seguridad - Validación de URLs**

**Estado**: ⚠️ Necesita validación

URLs de redes sociales en header y footer están vacías:

```javascript
// Agregar en app.js para validar URLs antes de redirigir
const socialLinks = {
  linkedin: "https://linkedin.com/company/maqi-crystals",
  twitter: "https://x.com/maqi_crystals"
};

document.querySelectorAll('.linkedin-btn').forEach(link => {
  link.href = socialLinks.linkedin;
  link.rel = "noopener noreferrer";
  link.target = "_blank";
});

document.querySelectorAll('.x-btn').forEach(link => {
  link.href = socialLinks.twitter;
  link.rel = "noopener noreferrer";
  link.target = "_blank";
});
```

## 📊 Checklist de Implementación

- [ ] Google Analytics integrado
- [ ] Metadatos completos (Open Graph, Twitter Card, SEO)
- [ ] ALT text en todas las imágenes
- [ ] Formulario de contacto funcional
- [ ] Enlaces de navegación dinámicos (#id)
- [ ] Validación de URLs de redes sociales
- [ ] Favicon agregado
- [ ] Canonical URL configurada
- [ ] Mobile testing completado
- [ ] Validación W3C HTML/CSS

## 📞 Contacto

- **Email**: info@maqi.cl
- **CEO**: Juan Manuel García
- **Teléfono**: +56 9 8585 8860
- **Dirección**: Cerro El Plomo 5931, 1213. Las Condes, Santiago. Chile

## 📄 Licencia

© 2025 Rodrigo Sandoval.

---

## 🔗 Recursos Útiles

- [Google Analytics Setup](https://support.google.com/analytics/answer/1008015)
- [Open Graph Protocol](https://ogp.me/)
- [SEO Checklist](https://moz.com/beginners-guide-to-seo)
- [Web Accessibility - WCAG](https://www.w3.org/WAI/WCAG21/quickref/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)

