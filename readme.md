# 🎠 Testimonials Slider

A beautiful, interactive testimonials slider built with vanilla JavaScript, featuring smooth animations, multiple navigation methods, and an elegant design.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📸 Project Preview

![Testimonials Slider Preview](project-pov.png)

## ✨ Features

### 🎯 Core Functionality

- **11 Testimonial Slides** - Showcasing reviews from various professionals
- **Smooth Animations** - Elegant slide transitions with cubic-bezier easing
- **Auto-Play Mode** - Automatic slide rotation every 5 seconds
- **Responsive Design** - Adapts to different screen sizes

### 🎮 Navigation Options

- **Arrow Buttons** - Click left/right arrows to navigate
- **Dot Navigation** - Click any dot to jump to specific slide
- **Keyboard Controls** - Use arrow keys (← →) for navigation
- **Touch/Swipe Support** - Swipe on mobile devices
- **Mouse Drag** - Drag slides with mouse on desktop

### 🎨 Visual Enhancements

- Modern gradient background
- Smooth hover effects on all interactive elements
- Active slide indicator (animated dot)
- Dynamic button visibility (left button hides on first slide)
- 5-star rating display
- Profile photos with hover effects
- Decorative quote marks with rotation animation

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process needed.

```bash
# If using a local server
npx serve .
# or
python -m http.server 8000
```

## 📁 Project Structure

```
Slider by js/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Slider functionality
└── readme.md           # Project documentation
```

## 🎨 Design Details

### Color Scheme

- **Primary**: `#6366f1` (Indigo)
- **Primary Light**: `#818cf8`
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Text Dark**: `#1e293b`
- **Background**: Gradient from `#f8fafc` to `#e2e8f0`

### Typography

- **Font Family**: Poppins (via Google Fonts)
- **Base Size**: 62.5% (10px)
- **Responsive**: Clamp values for fluid sizing

## 💻 Key Functionality

### Auto-Slide Feature

- Automatically advances every 5 seconds
- Stops permanently after user interaction
- Prevents interruption during manual navigation

### Smart Navigation

- **Circular Navigation**: Loops back to first slide after last
- **Hidden Left Button**: Only shows when not on first slide
- **Active Dot Indicator**: Expands to show current position

### Touch/Drag Support

- Minimum 50px swipe distance to trigger slide change
- Prevents accidental navigation
- Works on both touch and mouse events

## 🔧 Customization

### Change Auto-Slide Speed

```javascript
// In script.js, line ~130
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000); // Change 5000 to desired milliseconds
}
```

### Modify Transition Speed

```css
/* In style.css, slide transition */
.slide {
  transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* Change 0.8s to desired speed */
}
```

### Add New Testimonials

1. Copy a slide `<div class="slide">` block in `index.html`
2. Update the `transform: translateX()` value incrementally
3. Update content (name, photo, text, location)
4. Add a new dot button in the dots container
5. Update `maxSlide` count in `script.js` (automatic via `slides.length`)

## 🌟 Testimonials Included

The slider features 11 testimonials from professionals across:

- 🇺🇸 USA (San Francisco, New York, Toronto)
- 🇬🇧 UK (London)
- 🇪🇸 Spain (Madrid, Barcelona)
- 🇵🇹 Portugal (Lisbon)
- 🇮🇪 Ireland (Dublin)
- 🇸🇬 Singapore
- 🇦🇺 Australia (Sydney)
- 🇩🇪 Germany (Berlin)

## 🎯 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

The slider adapts automatically using:

- `clamp()` for fluid sizing
- `min()` for maximum width constraints
- Flexible height based on viewport

## 🐛 Known Issues

None at the moment! If you find any, feel free to report them.

## 🚀 Future Enhancements

Potential improvements:

- [ ] Pause auto-slide on hover
- [ ] Add slide counter (e.g., "3 / 11")
- [ ] Implement lazy loading for images
- [ ] Add accessibility improvements (ARIA labels)
- [ ] Create mobile-optimized layout
- [ ] Add transition effects options

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ using  JavaScript By RK

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts
- Inspiration: Modern UI/UX design principles

---

**Enjoy the slider! Feel free to customize it for your own projects.** ⭐
