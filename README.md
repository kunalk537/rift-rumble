# Rift Rumble - Educational Robotics Platform

A modern, responsive website for the Rift Rumble educational robotics platform. This website serves as a landing page and marketing tool for the Rift Rumble product, showcasing its features, curriculum, and team.

## 🚀 Features

### Design & Theme
- **Dark Theme**: Modern dark color scheme matching the original Rift Rumble interface
- **Gradient Backgrounds**: Orange-to-purple gradients for visual appeal
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations

### Core Sections
1. **Hero Section**: 
   - Prominent "RIFT" branding
   - Product description and value proposition
   - Call-to-action buttons (Start Learning, Download App)
   - 3D model placeholder for product visualization

2. **Features Section**: 
   - Wi-Fi connectivity
   - Modular LEGO-compatible design
   - Dual programming (Block coding & Python)
   - Advanced sensor integration

3. **Learning Paths**: 
   - Interactive Code.org lessons
   - Blockly interface integration
   - Four learning modules: Intro to Coding, Roomba, Sensors, BattleBot

4. **Hardware Projects**: 
   - Four numbered projects: Roomba, Sensors, Movement, Line Follow
   - Hands-on robotics building and programming

5. **Competitive Challenges**: 
   - BattleBot events
   - Maze solving challenges
   - Racing competitions

6. **Team Section**: 
   - Three team member profiles
   - Roles and bios for each member

7. **Documentation**: 
   - Getting Started guide
   - Programming guide
   - Hardware manual
   - Video tutorials

8. **Contact Form**: 
   - Contact information
   - Interactive contact form with validation

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Key Features
- **Mobile-First Design**: Responsive across all screen sizes
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Form Validation**: Client-side form validation
- **Interactive Elements**: Hover effects and animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance Optimized**: Debounced scroll events and efficient animations

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 File Structure

```
rift-rumble-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Customization

#### Adding Team Members
Edit the team section in `index.html`:
```html
<div class="team-member">
    <div class="member-photo">
        <i class="fas fa-user"></i>
    </div>
    <h3>Team Member Name</h3>
    <p class="member-role">Role Title</p>
    <p class="member-bio">Member bio and description.</p>
</div>
```

#### Updating Contact Information
Modify the contact details in `index.html`:
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your-email@domain.com</span>
</div>
```

#### Changing Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --accent-color: #8b5cf6;
    --dark-bg: #1a1a1a;
    --card-bg: #2a2a2a;
}
```

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#ff6b35`
- **Secondary Orange**: `#f7931e`
- **Purple Accent**: `#8b5cf6`
- **Dark Background**: `#1a1a1a`
- **Card Background**: `#2a2a2a`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#cccccc`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling from 0.9rem to 4rem

### Spacing
- **Container Max Width**: 1200px
- **Section Padding**: 5rem (top/bottom)
- **Card Padding**: 2rem-2.5rem
- **Grid Gaps**: 1rem-4rem

## 🔧 Customization Guide

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add JavaScript functionality in `script.js` if needed

### Integrating 3D Model
Replace the placeholder in the hero section:
```html
<div class="hero-3d">
    <!-- Replace with actual 3D model viewer -->
    <div class="3d-model-viewer">
        <!-- Three.js or similar 3D library integration -->
    </div>
</div>
```

### Adding Real Download Functionality
Update the download button in `script.js`:
```javascript
const downloadBtn = document.querySelector('.btn-secondary');
downloadBtn.addEventListener('click', function() {
    // Replace with actual download URL
    window.open('https://your-download-url.com/app', '_blank');
});
```

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive navigation menu
- Touch-friendly buttons and interactions
- Optimized typography scaling
- Mobile-first CSS approach
- Touch gesture support

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Proper heading hierarchy
- Fast loading times

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Upload files to S3 bucket

### Custom Domain
1. Purchase domain name
2. Configure DNS settings
3. Update hosting provider settings
4. Add SSL certificate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: info@riftrumble.com
- Phone: +1 (555) 123-4567
- Website: https://riftrumble.com

## 🔄 Updates

### Version 1.0.0
- Initial website launch
- Complete responsive design
- Interactive features
- Contact form functionality
- Team section
- Documentation links

---

**Built with ❤️ for the Rift Rumble educational robotics platform**


