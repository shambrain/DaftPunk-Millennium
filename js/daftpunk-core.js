// Daft Punk Millennium Theme - Core JavaScript
// Following SteamBrew theme development guidelines

(function() {
    'use strict';
    
    // Wait for Steam UI to be ready
    function waitForSteamUI() {
        return new Promise((resolve) => {
            if (window.opener && window.opener.Millennium) {
                resolve();
            } else {
                const checkInterval = setInterval(() => {
                    if (window.opener && window.opener.Millennium) {
                        clearInterval(checkInterval);
                        resolve();
                    }
                }, 100);
            }
        });
    }
    
    // Initialize Daft Punk theme
    async function initDaftPunkTheme() {
        try {
            await waitForSteamUI();
            
            // Add Daft Punk theme class to body
            document.body.classList.add('daftpunk-theme');
            
            // Initialize theme features
            initThemeFeatures();
            initAnimations();
            initCustomElements();
            
            console.log('🎵 Daft Punk Millennium Theme initialized successfully');
        } catch (error) {
            console.error('❌ Daft Punk theme initialization failed:', error);
        }
    }
    
    // Initialize theme features
    function initThemeFeatures() {
        // Add retro-futuristic patterns
        addRetroPatterns();
        
        // Enhance buttons with Daft Punk styling
        enhanceButtons();
        
        // Add glow effects
        addGlowEffects();
        
        // Initialize custom scrollbars
        initCustomScrollbars();
    }
    
    // Add retro-futuristic patterns
    function addRetroPatterns() {
        const containers = document.querySelectorAll('.steamui_Container, .steamui_Panel, .steamui_Modal');
        
        containers.forEach(container => {
            // Add grid pattern
            container.classList.add('steamui-grid-pattern');
            
            // Add scanlines effect
            if (Math.random() > 0.5) {
                container.classList.add('steamui-scanlines');
            }
            
            // Add vinyl texture
            if (Math.random() > 0.7) {
                container.classList.add('steamui-vinyl');
            }
        });
    }
    
    // Enhance buttons with Daft Punk styling
    function enhanceButtons() {
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_blue_steamui, .btnv6_blue_steamui__blue, .btnv6_secondary_hoverfade');
        
        buttons.forEach(button => {
            // Add Daft Punk classes
            button.classList.add('daftpunk-button');
            
            // Add hover effects
            button.addEventListener('mouseenter', function() {
                this.classList.add('daftpunk-hover');
            });
            
            button.addEventListener('mouseleave', function() {
                this.classList.remove('daftpunk-hover');
            });
            
            // Add click effects
            button.addEventListener('click', function() {
                this.classList.add('daftpunk-click');
                setTimeout(() => {
                    this.classList.remove('daftpunk-click');
                }, 200);
            });
        });
    }
    
    // Add glow effects
    function addGlowEffects() {
        const glowElements = document.querySelectorAll('.daftpunk-gold, .daftpunk-cyan, .daftpunk-purple, .daftpunk-orange');
        
        glowElements.forEach(element => {
            element.classList.add('daftpunk-glow');
            
            // Add pulse animation
            if (element.classList.contains('daftpunk-gold')) {
                element.classList.add('daftpunk-pulse');
            }
        });
    }
    
    // Initialize custom scrollbars
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            .daftpunk-scrollbar::-webkit-scrollbar {
                width: 12px;
                background: var(--dp-bg-secondary);
            }
            
            .daftpunk-scrollbar::-webkit-scrollbar-thumb {
                background: var(--dp-gradient-gold);
                border-radius: 6px;
                border: 1px solid var(--dp-gold-secondary);
                box-shadow: var(--dp-shadow-gold);
            }
            
            .daftpunk-scrollbar::-webkit-scrollbar-thumb:hover {
                background: var(--dp-gradient-cyber);
                box-shadow: var(--dp-glow-cyan);
            }
        `;
        document.head.appendChild(style);
        
        // Apply to scrollable elements
        const scrollableElements = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        scrollableElements.forEach(element => {
            element.classList.add('daftpunk-scrollbar');
        });
    }
    
    // Initialize animations
    function initAnimations() {
        // Add entrance animations
        const animatedElements = document.querySelectorAll('.steamui_Container, .steamui_Panel, .library_GameGridItem');
        
        animatedElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.classList.add('daftpunk-animated');
        });
        
        // Add pulse animations to status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator');
        statusIndicators.forEach(indicator => {
            indicator.classList.add('daftpunk-pulse');
        });
    }
    
    // Initialize custom elements
    function initCustomElements() {
        // Add Daft Punk logo watermark
        addWatermark();
        
        // Add theme info
        addThemeInfo();
    }
    
    // Add watermark
    function addWatermark() {
        const watermark = document.createElement('div');
        watermark.className = 'daftpunk-watermark';
        watermark.innerHTML = '🎵 Daft Punk Millennium';
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            color: var(--dp-gold-primary);
            font-size: 12px;
            opacity: 0.3;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(watermark);
    }
    
    // Add theme info
    function addThemeInfo() {
        const themeInfo = document.createElement('div');
        themeInfo.className = 'daftpunk-theme-info';
        themeInfo.innerHTML = `
            <div style="
                position: fixed;
                top: 10px;
                left: 10px;
                background: var(--dp-bg-secondary);
                border: 1px solid var(--dp-gold-primary);
                padding: 8px;
                border-radius: 4px;
                font-size: 10px;
                color: var(--dp-text-primary);
                opacity: 0.8;
                z-index: 9999;
                display: none;
            ">
                <strong>Daft Punk Millennium Theme</strong><br>
                Version 1.0.0<br>
                Authentic retro-futuristic styling
            </div>
        `;
        document.body.appendChild(themeInfo);
        
        // Show info on Ctrl+Shift+I
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                const info = document.querySelector('.daftpunk-theme-info div');
                info.style.display = info.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDaftPunkTheme);
    } else {
        initDaftPunkTheme();
    }
    
    // Export for Millennium compatibility
    if (typeof window !== 'undefined') {
        window.DaftPunkTheme = {
            init: initDaftPunkTheme,
            version: '1.0.0'
        };
    }
    
})(); 