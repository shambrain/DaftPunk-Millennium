# 🎵 **Daft Punk Millennium Collection** 🎵

**Seven distinct Daft Punk-inspired Steam themes with unique gradient colors, font customization, and modern UI enhancements.**

[![Version](https://img.shields.io/badge/Version-2.1.0-blue.svg)](https://github.com/DaftPunk-Millennium/DaftPunk-Millennium)
[![Millennium](https://img.shields.io/badge/Millennium-Compatible-green.svg)](https://steambrew.app)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 **What's New in v2.1.0**

- ✅ **Removed Copied Features**: Cleaned up all borrowed elements from other themes to comply with Millennium guidelines
- 🔤 **Font Customization**: Choose from 6 different font families including Roboto, Inter, JetBrains Mono, and more
- 🎨 **UI Enhancement Options**: Multiple enhancement levels from standard to full makeover
- 🔄 **Rounded Corners**: Modern UI with customizable corner radius
- 🎯 **Enhanced Highlights**: Theme-specific highlight colors that adapt to each Daft Punk theme
- 💬 **Steam Chat Integration**: Complete chat system theming with theme-specific colors
- ⚡ **Performance Optimizations**: Improved animations and reduced motion support

---

## ✨ **Features**

- **🎯 Clean Design**: Original theme design without any copied features
- **🎨 Theme Variations**: 7 unique Daft Punk-inspired color schemes
- **⚙️ Millennium Integration**: Full theme selection through Millennium interface  
- **🔤 Font Options**: 6 different font families to choose from
- **🎨 UI Enhancements**: 4 different enhancement levels
- **👥 Friends Panel Toggle**: Collapsible friends list with persistent state
- **📱 Responsive Layout**: Adapts to different screen sizes
- **🌈 Gradient Backgrounds**: Beautiful color transitions throughout the interface
- **⚡ Smooth Animations**: Elegant transitions and hover effects
- **🎯 Focus Enhancement**: Improved visual feedback for interactive elements
- **✨ Theme-Specific Effects**: Unique animations and visual effects for each theme

---

## 🚀 **Installation**

1. **Download** or clone this repository
2. **Copy** the theme folder to your Steam skins directory:
   ```
   Steam/steamui/skins/DaftPunk-Millennium/
   ```
3. **Enable** the skin in Steam through Millennium:
   - Go to Steam → Settings → Interface → Millennium → Themes
   - Select "Daft Punk Millennium Collection"
   - **Choose your preferred theme** from the Theme Selection dropdown
   - **Select your font** from the Font Family dropdown
   - **Choose enhancements** from the UI Enhancements dropdown
   - **Apply** and restart Steam

---

## ⚙️ **Customization Options**

### **🎨 Theme Selection**
Choose from 7 different Daft Punk themes:
- **Discovery Era** (Default): Gold and orange gradients
- **Get Lucky Disco**: Hot pink and purple gradients  
- **Cyan Visor**: Cyan and teal gradients
- **Tron Legacy**: Electric blue gradients
- **Neon Glow**: Bright green gradients
- **Cosmic Voyager**: Purple and violet gradients
- **Classic Discovery**: Orange-red and crimson gradients

### **🔤 Font Family Options**
- **System Default**: Uses Steam's default font stack
- **Roboto**: Modern, clean, and highly readable Google Font
- **Inter**: Designed specifically for computer screens and UI interfaces
- **JetBrains Mono**: Modern monospace font designed for developers
- **Fira Code**: Monospace font with programming ligatures
- **Poppins**: Modern, geometric sans-serif with rounded characters

### **🎨 UI Enhancement Levels**
- **Standard**: Basic improvements with theme-specific highlights
- **Rounded Corners**: Modern rounded UI elements for a softer look
- **Enhanced Highlights**: Advanced highlight colors and visual feedback
- **Full Enhancement**: Complete UI overhaul with all features combined

---

## 🛠️ **File Structure**

```
DaftPunk-Millennium/
├── skin.json                          # Main configuration with all options
├── libraryroot.custom.css             # Base styles shared by all themes
├── libraryroot.custom.js              # Friends panel toggle functionality
├── webkit.css                         # WebKit compatibility enhancements
├── themes/                            # Individual theme files
│   ├── discovery-era.css              # Gold and orange theme
│   ├── get-lucky-disco.css            # Pink and purple disco theme
│   ├── cyan-visor.css                 # Cyan visor theme with scanlines
│   ├── tron-legacy.css                # Electric blue Tron theme
│   ├── neon-glow.css                  # Bright green neon theme
│   ├── cosmic-voyager.css             # Purple cosmic theme
│   └── classic-discovery.css          # Orange-red classic theme
├── fonts/                             # Font configuration files
│   ├── system-default.css             # Default Steam fonts
│   ├── roboto.css                     # Roboto font integration
│   ├── inter.css                      # Inter font integration
│   ├── jetbrains-mono.css             # JetBrains Mono integration
│   ├── fira-code.css                  # Fira Code integration
│   └── poppins.css                    # Poppins font integration
├── enhancements/                      # UI enhancement files
│   ├── standard.css                   # Basic improvements
│   ├── rounded-corners.css            # Modern rounded corners
│   ├── enhanced-highlights.css        # Advanced highlight system
│   └── full-enhancement.css           # Complete UI overhaul
└── README.md                          # This file
```

---

## 🎯 **How It Works**

### **Theme System**
- **Base Styles**: `libraryroot.custom.css` provides the foundation styling
- **Theme Files**: Each theme in `/themes/` defines unique color variables
- **Font Files**: Font configurations in `/fonts/` apply typography choices
- **Enhancement Files**: UI improvements in `/enhancements/` add visual polish
- **Millennium Integration**: `skin.json` properly configures all options for Millennium
- **Dynamic Loading**: All options are loaded based on your selections in Millennium settings

### **Friends Panel Toggle**
- Click the arrow button on the friends panel to hide/show it
- State is saved and restored between sessions
- Provides more space for your game library

### **Enhanced Interactions**
- Theme-specific hover effects and highlights
- Smooth transitions for better user experience
- Improved focus states for keyboard navigation
- Font-specific optimizations for readability
- Modern UI elements with rounded corners (optional)

---

## 🔧 **Advanced Customization**

Each theme uses CSS variables, making it easy to customize colors:

```css
:root {
  --primary-gradient: linear-gradient(270deg, #FFD700 0%, #FF8C00 50%, #000000 100%);
  --secondary-gradient: linear-gradient(225deg, #FFD700 0%, #FF8C00 30%, #000000 100%);
  --dropdown-hover: linear-gradient(270deg, #FFD700AA 0%, #FF8C00AA 100%);
  /* ... more variables */
}
```

You can create your own custom theme by copying an existing theme file and modifying the color values.

---

## 🎨 **Theme Previews**

Each theme provides a unique visual experience:

- **Discovery Era**: Classic gold and black with warm tones
- **Get Lucky Disco**: Vibrant pink and purple with sparkle effects
- **Cyan Visor**: Cool cyan with futuristic scanline animations
- **Tron Legacy**: Electric blue with grid pattern overlays
- **Neon Glow**: Bright green with pulsing neon effects
- **Cosmic Voyager**: Deep purple with starfield animations
- **Classic Discovery**: Warm orange-red with classic styling

---

## 🤝 **Contributing**

Contributions are welcome! Please feel free to:
- Report bugs or issues
- Suggest new features or improvements
- Submit pull requests with enhancements
- Create additional themes or fonts

---

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **Millennium Team** for the amazing theming framework
- **Steam Community** for inspiration and feedback
- **Daft Punk** for the musical inspiration behind the themes
- **Google Fonts** for providing excellent typography options

---

## 📞 **Support**

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/DaftPunk-Millennium/DaftPunk-Millennium/issues) page
2. Create a new issue with detailed information
3. Join the [Millennium Discord](https://discord.gg/steambrew) for community support

---

**Enjoy your enhanced Steam experience with the Daft Punk Millennium Collection! 🎵✨** 