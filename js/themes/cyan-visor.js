// Cyan Visor Theme JavaScript
// Visor glow effects with scanline animations

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
    
    // Initialize Cyan Visor theme
    async function initCyanVisorTheme() {
        try {
            await waitForSteamUI();
            
            // Add theme class to body
            document.body.classList.add('cyan-visor-theme');
            
            // Initialize theme features
            initVisorEffects();
            initScanlineAnimations();
            initCyanElements();
            initCustomScrollbars();
            
            console.log(' Cyan Visor Theme initialized successfully');
        } catch (error) {
            console.error(' Cyan Visor theme initialization failed:', error);
        }
    }
    
    // Initialize visor effects
    function initVisorEffects() {
        // Add visor glow to buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_blue_steamui, .btnv6_blue_steamui__blue, .btnv6_secondary_hoverfade');
        
        buttons.forEach(button => {
            button.classList.add('visor-button');
            
            // Add visor glow effect
            const glow = document.createElement('div');
            glow.className = 'visor-glow';
            glow.style.cssText = `
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.4), transparent);
                transition: left 0.5s ease-in-out;
                pointer-events: none;
                z-index: 1;
            `;
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(glow);
            
            // Trigger glow on hover
            button.addEventListener('mouseenter', function() {
                glow.style.left = '100%';
            });
            
            button.addEventListener('mouseleave', function() {
                glow.style.left = '-100%';
            });
        });
        
        // Add visor effect to panels
        const panels = document.querySelectorAll('.steamui_Container, .steamui_Panel, .steamui_Modal');
        panels.forEach(panel => {
            panel.classList.add('visor-panel');
        });
    }
    
    // Initialize scanline animations
    function initScanlineAnimations() {
        // Add scanline effect to game grid items
        const gameItems = document.querySelectorAll('.library_GameGridItem');
        gameItems.forEach((item, index) => {
            item.classList.add('visor-scanline');
            item.style.animationDelay = `${index * 0.1}s`;
            
            // Add visor indicator
            const indicator = document.createElement('div');
            indicator.className = 'visor-indicator';
            indicator.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                width: 6px;
                height: 6px;
                background: var(--cyan-pink);
                border-radius: 50%;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
                box-shadow: 0 0 10px rgba(255, 105, 180, 0.8);
                z-index: 2;
            `;
            item.appendChild(indicator);
            
            item.addEventListener('mouseenter', function() {
                indicator.style.opacity = '1';
            });
            
            item.addEventListener('mouseleave', function() {
                indicator.style.opacity = '0';
            });
        });
        
        // Add visor effect to progress bars
        const progressBars = document.querySelectorAll('.steamui_ProgressBar__fill');
        progressBars.forEach(bar => {
            bar.classList.add('visor-progress');
        });
        
        // Add visor pulse to status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator--online');
        statusIndicators.forEach(indicator => {
            indicator.classList.add('visor-pulse');
        });
    }
    
    // Initialize cyan-specific elements
    function initCyanElements() {
        // Add cyan visor watermark
        addVisorWatermark();
        
        // Add scanline pattern
        addScanlinePattern();
        
        // Add visor borders
        addVisorBorders();
        
        // Add visor text effects
        addVisorTextEffects();
    }
    
    // Add visor watermark
    function addVisorWatermark() {
        const watermark = document.createElement('div');
        watermark.className = 'visor-watermark';
        watermark.innerHTML = ' CYAN VISOR';
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            color: var(--cyan-primary);
            font-size: 12px;
            font-weight: 600;
            opacity: 0.4;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 8px var(--cyan-primary);
            animation: visor-pulse 2s ease-in-out infinite;
        `;
        document.body.appendChild(watermark);
    }
    
    // Add scanline pattern
    function addScanlinePattern() {
        const style = document.createElement('style');
        style.textContent = `
            .visor-panel::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 255, 255, 0.03) 2px,
                    rgba(0, 255, 255, 0.03) 4px
                );
                pointer-events: none;
                z-index: 0;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add visor borders
    function addVisorBorders() {
        const style = document.createElement('style');
        style.textContent = `
            .visor-border {
                border: 2px solid var(--cyan-primary);
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
                animation: visor-glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes visor-glow {
                from { box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); }
                to { box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to important containers
        const containers = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        containers.forEach(container => {
            container.classList.add('visor-border');
        });
    }
    
    // Add visor text effects
    function addVisorTextEffects() {
        const style = document.createElement('style');
        style.textContent = `
            .visor-text-effect {
                background: linear-gradient(135deg, var(--cyan-primary) 0%, var(--cyan-secondary) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 700;
                animation: visor-text-glow 3s ease-in-out infinite;
            }
            
            @keyframes visor-text-glow {
                0%, 100% { filter: brightness(1); }
                50% { filter: brightness(1.2); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to headings
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach(heading => {
            heading.classList.add('visor-text-effect');
        });
    }
    
    // Initialize custom scrollbars
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            .visor-scrollbar::-webkit-scrollbar {
                width: 12px;
                background: var(--cyan-bg-secondary);
            }
            
            .visor-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, var(--cyan-primary) 0%, var(--cyan-secondary) 100%);
                border-radius: 6px;
                border: 2px solid var(--cyan-bg-secondary);
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
            }
            
            .visor-scrollbar::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, var(--cyan-pink) 0%, #FF1493 100%);
                box-shadow: 0 0 20px rgba(255, 105, 180, 0.6);
            }
        `;
        document.head.appendChild(style);
        
        // Apply to scrollable elements
        const scrollableElements = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        scrollableElements.forEach(element => {
            element.classList.add('visor-scrollbar');
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
    
    // Add scanline background effect
    function addScanlineBackground() {
        const scanlineContainer = document.createElement('div');
        scanlineContainer.className = 'scanline-container';
        scanlineContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.appendChild(scanlineContainer);
        
        // Create scanlines
        for (let i = 0; i < 50; i++) {
            const scanline = document.createElement('div');
            scanline.style.cssText = `
                position: absolute;
                top: ${i * 20}px;
                left: 0;
                width: 100%;
                height: 1px;
                background: rgba(0, 255, 255, 0.02);
                animation: scanline-move 8s linear infinite;
                animation-delay: ${Math.random() * 8}s;
            `;
            scanlineContainer.appendChild(scanline);
        }
        
        // Add scanline move animation
        const scanlineStyle = document.createElement('style');
        scanlineStyle.textContent = `
            @keyframes scanline-move {
                0% { transform: translateY(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(100vh); opacity: 0; }
            }
        `;
        document.head.appendChild(scanlineStyle);
    }
    
    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCyanVisorTheme);
    } else {
        initCyanVisorTheme();
    }
    
    // Add entrance animations after a short delay
    setTimeout(addEntranceAnimations, 100);
    setTimeout(addScanlineBackground, 200);
    
    // Export for Millennium compatibility
    if (typeof window !== 'undefined') {
        window.CyanVisorTheme = {
            init: initCyanVisorTheme,
            version: '2.0.0'
        };
    }
    
})(); 