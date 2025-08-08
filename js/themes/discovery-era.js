// Discovery Era Theme JavaScript
// Metallic, sleek animations with iridescent effects

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
    
    // Initialize Discovery Era theme
    async function initDiscoveryEraTheme() {
        try {
            await waitForSteamUI();
            
            // Add theme class to body
            document.body.classList.add('discovery-era-theme');
            
            // Initialize theme features
            initMetallicEffects();
            initIridescentAnimations();
            initDiscoveryElements();
            initCustomScrollbars();
            
            console.log(' Discovery Era Theme initialized successfully');
        } catch (error) {
            console.error(' Discovery Era theme initialization failed:', error);
        }
    }
    
    // Initialize metallic effects
    function initMetallicEffects() {
        // Add metallic shine to buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_blue_steamui, .btnv6_blue_steamui__blue, .btnv6_secondary_hoverfade');
        
        buttons.forEach(button => {
            button.classList.add('discovery-metallic');
            
            // Add metallic shine effect
            const shine = document.createElement('div');
            shine.className = 'metallic-shine';
            shine.style.cssText = `
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                transition: left 0.6s ease-in-out;
                pointer-events: none;
                z-index: 1;
            `;
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(shine);
            
            // Trigger shine on hover
            button.addEventListener('mouseenter', function() {
                shine.style.left = '100%';
            });
            
            button.addEventListener('mouseleave', function() {
                shine.style.left = '-100%';
            });
        });
        
        // Add metallic effect to panels
        const panels = document.querySelectorAll('.steamui_Container, .steamui_Panel, .steamui_Modal');
        panels.forEach(panel => {
            panel.classList.add('discovery-metallic-panel');
        });
    }
    
    // Initialize iridescent animations
    function initIridescentAnimations() {
        // Add iridescent effect to game grid items
        const gameItems = document.querySelectorAll('.library_GameGridItem');
        gameItems.forEach((item, index) => {
            item.classList.add('discovery-iridescent');
            item.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Add iridescent effect to progress bars
        const progressBars = document.querySelectorAll('.steamui_ProgressBar__fill');
        progressBars.forEach(bar => {
            bar.classList.add('discovery-iridescent');
        });
        
        // Add iridescent effect to status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator--online');
        statusIndicators.forEach(indicator => {
            indicator.classList.add('discovery-iridescent');
        });
    }
    
    // Initialize Discovery-specific elements
    function initDiscoveryElements() {
        // Add Discovery watermark
        addDiscoveryWatermark();
        
        // Add metallic grid pattern
        addMetallicGrid();
        
        // Add iridescent borders
        addIridescentBorders();
    }
    
    // Add Discovery watermark
    function addDiscoveryWatermark() {
        const watermark = document.createElement('div');
        watermark.className = 'discovery-watermark';
        watermark.innerHTML = ' DISCOVERY ERA';
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            color: var(--discovery-gold-primary);
            font-size: 12px;
            font-weight: 600;
            opacity: 0.4;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 8px var(--discovery-gold-primary);
        `;
        document.body.appendChild(watermark);
    }
    
    // Add metallic grid pattern
    function addMetallicGrid() {
        const style = document.createElement('style');
        style.textContent = `
            .discovery-metallic-panel::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: 
                    linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px),
                    linear-gradient(0deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px);
                background-size: 20px 20px;
                pointer-events: none;
                z-index: 0;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add iridescent borders
    function addIridescentBorders() {
        const style = document.createElement('style');
        style.textContent = `
            .discovery-iridescent-border {
                border: 2px solid transparent;
                background: linear-gradient(var(--theme-bg-secondary), var(--theme-bg-secondary)) padding-box,
                            var(--theme-iridescent) border-box;
                background-size: 200% 200%;
                animation: iridescent-shift 4s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
        
        // Apply to important containers
        const containers = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        containers.forEach(container => {
            container.classList.add('discovery-iridescent-border');
        });
    }
    
    // Initialize custom scrollbars
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            .discovery-scrollbar::-webkit-scrollbar {
                width: 12px;
                background: var(--discovery-bg-secondary);
            }
            
            .discovery-scrollbar::-webkit-scrollbar-thumb {
                background: var(--theme-metallic);
                border-radius: 6px;
                border: 2px solid var(--discovery-bg-secondary);
                box-shadow: var(--theme-shadow);
            }
            
            .discovery-scrollbar::-webkit-scrollbar-thumb:hover {
                background: var(--theme-iridescent);
                box-shadow: var(--theme-glow);
            }
        `;
        document.head.appendChild(style);
        
        // Apply to scrollable elements
        const scrollableElements = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        scrollableElements.forEach(element => {
            element.classList.add('discovery-scrollbar');
        });
    }
    
    // Add entrance animations
    function addEntranceAnimations() {
        const animatedElements = document.querySelectorAll('.steamui_Container, .steamui_Panel, .library_GameGridItem');
        
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Add metallic shine effect to text
    function addMetallicTextEffect() {
        const style = document.createElement('style');
        style.textContent = `
            .discovery-metallic-text {
                background: var(--theme-metallic);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 600;
            }
        `;
        document.head.appendChild(style);
        
        // Apply to headings
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach(heading => {
            heading.classList.add('discovery-metallic-text');
        });
    }
    
    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDiscoveryEraTheme);
    } else {
        initDiscoveryEraTheme();
    }
    
    // Add entrance animations after a short delay
    setTimeout(addEntranceAnimations, 100);
    setTimeout(addMetallicTextEffect, 200);
    
    // Export for Millennium compatibility
    if (typeof window !== 'undefined') {
        window.DiscoveryEraTheme = {
            init: initDiscoveryEraTheme,
            version: '2.0.0'
        };
    }
    
})(); 