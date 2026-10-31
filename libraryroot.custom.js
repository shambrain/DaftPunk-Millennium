/**
 * Steam Library Customization Script
 * 
 * This script provides enhanced functionality for the Steam library interface:
 * - Toggle to hide/show the friends list panel
 * - Enhanced color customization
 * 
 * @version 2.0
 * @author Custom Steam UI Modifications
 */

// ============================================================================
// FRIENDS LIST TOGGLE FUNCTIONALITY
// ============================================================================

/**
 * Storage key for friends list visibility state
 */
const FRIENDS_LIST_VISIBILITY_KEY = "steam_friends_list_visibility";

/**
 * Adds a toggle button to the friends list panel
 * @param {HTMLElement} panel - The friends list panel element
 */
function addFriendsListToggleButton(panel) {
  // Prevent adding multiple buttons
  if (panel.querySelector(".toggle-panel-button")) return;

  const toggleButton = document.createElement("button");
  toggleButton.innerText = "⮜"; // Arrow indicating panel can be collapsed
  toggleButton.classList.add("toggle-panel-button");
  
  // Position the button outside the panel
  toggleButton.style.cssText = `
    position: absolute;
    right: -35px;
    top: 1%;
    padding: 5px 10px;
    background: rgb(51 51 51 / 57%);
    color: white;
    border: none;
    cursor: pointer;
    z-index: 1000;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
  `;

  // Load saved state
  const isVisible = loadFriendsListVisibility();
  let isOpen = isVisible;

  // Set initial state
  if (!isOpen) {
    panel.style.width = "0px";
    toggleButton.innerText = "⮞";
    toggleButton.style.right = "-33px";
  }

  toggleButton.addEventListener("click", () => {
    if (isOpen) {
      // Hide panel
      panel.style.width = "0px";
      toggleButton.innerText = "⮞";
      toggleButton.style.right = "-33px";
    } else {
      // Show panel
      panel.style.width = "272px";
      toggleButton.innerText = "⮜";
      toggleButton.style.right = "-33px";
    }
    
    isOpen = !isOpen;
    saveFriendsListVisibility(isOpen);
  });

  panel.appendChild(toggleButton);
}

/**
 * Loads the saved friends list visibility state
 * @returns {boolean} True if the friends list should be visible
 */
function loadFriendsListVisibility() {
  const saved = localStorage.getItem(FRIENDS_LIST_VISIBILITY_KEY);
  return saved !== "false"; // Default to visible if no saved state
}

/**
 * Saves the friends list visibility state
 * @param {boolean} isVisible - Whether the friends list should be visible
 */
function saveFriendsListVisibility(isVisible) {
  localStorage.setItem(FRIENDS_LIST_VISIBILITY_KEY, isVisible.toString());
}

/**
 * Observes the DOM for the friends list panel and adds toggle functionality
 */
function observeFriendsPanel() {
  const observer = new MutationObserver(() => {
    const friendsPanel = document.querySelector('._9sPoVBFyE_vE87mnZJ5aB');
    if (friendsPanel && !friendsPanel.querySelector('.toggle-panel-button')) {
      addFriendsListToggleButton(friendsPanel);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// ============================================================================
// ENHANCED COLOR CUSTOMIZATION SYSTEM
// ============================================================================

const COLOR_CONFIG_KEY = "steam_color_config_v1"
let colorModalOpen = false

// DEFAULT COLOR CONFIGURATIONS
// Default color configurations with RGBA support
const DEFAULT_COLORS = {
  "Discovery Era": {
    name: "Discovery Era",
    colors: [
      "rgba(255, 215, 0, 1)",   // Gold
      "rgba(255, 140, 0, 1)",   // Orange
      "rgba(0, 0, 0, 1)"        // Black
    ]
  },
  "Get Lucky Disco": {
    name: "Get Lucky Disco", 
    colors: [
      "rgba(255, 20, 147, 1)",  // Deep Pink
      "rgba(218, 112, 214, 1)", // Orchid
      "rgba(138, 43, 226, 1)"   // Blue Violet
    ]
  },
  "Cyan Visor": {
    name: "Cyan Visor",
    colors: [
      "rgba(0, 255, 255, 1)",   // Cyan
      "rgba(0, 206, 209, 1)",   // Dark Turquoise
      "rgba(139, 139, 139, 1)"  // Dark Gray
    ]
  },
  "Tron Legacy": {
    name: "Tron Legacy",
    colors: [
      "rgba(0, 191, 255, 1)",   // Deep Sky Blue
      "rgba(0, 128, 255, 1)",   // Blue
      "rgba(0, 64, 255, 1)"     // Dark Blue
    ]
  },
  "Neon Glow": {
    name: "Neon Glow",
    colors: [
      "rgba(57, 255, 20, 1)",   // Neon Green
      "rgba(50, 205, 50, 1)",   // Lime Green
      "rgba(34, 139, 34, 1)"    // Forest Green
    ]
  },
  "Cosmic Voyager": {
    name: "Cosmic Voyager",
    colors: [
      "rgba(153, 50, 204, 1)",  // Dark Orchid
      "rgba(138, 43, 226, 1)",  // Blue Violet
      "rgba(75, 0, 130, 1)"     // Indigo
    ]
  }
}

/**
 * Add enhanced color customization styles to document
 */
function addColorCustomizationStyles() {
  const colorStyle = document.createElement("style")
  colorStyle.id = "color-customization-styles"
  colorStyle.textContent = `
    /* Enhanced Color Modal Styles */
    #color-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #color-modal {
      background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
      border-radius: 12px;
      padding: 0;
      width: 90%;
      max-width: 900px;
      max-height: 85vh;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    #color-modal-header {
      padding: 20px 25px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
      position: sticky;
      top: 0;
      z-index: 1;
    }

    #color-modal-title {
      color: white;
      font-size: 20px;
      font-weight: bold;
      margin: 0;
    }

    #close-color-modal {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 5px;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
    }

    #close-color-modal:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .color-sections-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      padding: 25px;
      max-height: calc(85vh - 120px);
      overflow-y: auto;
    }

    .color-section {
      background: linear-gradient(135deg, #333, #222);
      border-radius: 8px;
      padding: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .color-section-title {
      color: white;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .color-preview {
      height: 60px;
      border-radius: 6px;
      margin-bottom: 15px;
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .color-controls {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .colors-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .color-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    .color-index {
      color: #aaa;
      font-size: 12px;
      min-width: 20px;
      text-align: center;
    }

    .color-input {
      flex: 1;
      padding: 8px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      font-family: monospace;
      font-size: 12px;
    }

    .color-input:focus {
      outline: none;
      border-color: #4CAF50;
      background: linear-gradient(to right, transparent, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .color-swatch {
      width: 30px;
      height: 30px;
      border-radius: 4px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }

    .remove-color {
      background: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 6px 8px;
      cursor: pointer;
      font-size: 12px;
      transition: background-color 0.3s ease;
    }

    .remove-color:hover {
      background: #d32f2f;
    }

    .remove-color:disabled {
      background: #555;
      cursor: not-allowed;
    }

    .color-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    .add-color {
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 12px;
      transition: background-color 0.3s ease;
    }

    .add-color:hover {
      background: #45a049;
    }

    .add-color:disabled {
      background: #555;
      cursor: not-allowed;
    }

    .preset-buttons {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }

    .preset-button {
      background: #666;
      color: #ccc;
      border: none;
      border-radius: 4px;
      padding: 4px 8px;
      cursor: pointer;
      font-size: 10px;
      transition: all 0.3s ease;
    }

    .preset-button:hover {
      background: #777;
      color: white;
    }

    .gradient-preview {
      height: 40px;
      border-radius: 6px;
      margin: 10px 0;
      border: 2px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }

    #color-modal-footer {
      padding: 20px 25px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .color-modal-button {
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    #apply-colors {
      background: linear-gradient(135deg, #4CAF50, #45a049);
      color: white;
    }

    #apply-colors:hover {
      background: linear-gradient(135deg, #45a049, #3d8b40);
    }

    #reset-colors {
      background: linear-gradient(135deg, #2196F3, #1976D2);
      color: white;
    }

    #reset-colors:hover {
      background: linear-gradient(135deg, #1976D2, #1565C0);
    }

    #cancel-colors {
      background: linear-gradient(135deg, #FF9800, #F57C00);
      color: white;
    }

    #cancel-colors:hover {
      background: linear-gradient(135deg, #F57C00, #E65100);
    }

    #export-colors {
      background: linear-gradient(135deg, #666, #555);
      color: white;
    }

    #export-colors:hover {
      background: linear-gradient(135deg, #777, #666);
    }
  `
  document.head.appendChild(colorStyle)
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  observeFriendsPanel();
  addColorCustomizationStyles();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    observeFriendsPanel();
    addColorCustomizationStyles();
  });
} else {
  observeFriendsPanel();
  addColorCustomizationStyles();
}