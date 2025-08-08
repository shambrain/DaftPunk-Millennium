// Tron Legacy Theme JavaScript
// Geometric patterns with electric blue effects

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
    
    // Initialize Tron Legacy theme
    async function initTronLegacyTheme() {
        try {
            await waitForSteamUI();
            
            // Add theme class to body
            document.body.classList.add('tron-legacy-theme');
            
            // Initialize theme features
            initTronEffects();
            initGeometricAnimations();
            initTronElements();
            initCustomScrollbars();
            
            console.log('🎵 Tron Legacy Theme initialized successfully');
        } catch (error) {
            console.error('❌ Tron Legacy theme initialization failed:', error);
        }
    }
    
    // Initialize Tron effects
    function initTronEffects() {
        // Add Tron glow to buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_blue_steamui, .btnv6_blue_steamui__blue, .btnv6_secondary_hoverfade');
        
        buttons.forEach(button => {
            button.classList.add('tron-button');
            
            // Add Tron scan effect
            const scan = document.createElement('div');
            scan.className = 'tron-scan';
            scan.style.cssText = `
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
            button.appendChild(scan);
            
            // Trigger scan on hover
            button.addEventListener('mouseenter', function() {
                scan.style.left = '100%';
            });
            
            button.addEventListener('mouseleave', function() {
                scan.style.left = '-100%';
            });
        });
        
        // Add Tron effect to panels
        const panels = document.querySelectorAll('.steamui_Container, .steamui_Panel, .steamui_Modal');
        panels.forEach(panel => {
            panel.classList.add('tron-panel');
        });
    }
    
    // Initialize geometric animations
    function initGeometricAnimations() {
        // Add geometric effect to game grid items
        const gameItems = document.querySelectorAll('.library_GameGridItem');
        gameItems.forEach((item, index) => {
            item.classList.add('tron-geometric');
            item.style.animationDelay = `${index * 0.1}s`;
            
            // Add Tron indicator
            const indicator = document.createElement('div');
            indicator.className = 'tron-indicator';
            indicator.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                width: 8px;
                height: 8px;
                background: var(--tron-electric-blue);
                border-radius: 0;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
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
        
        // Add Tron effect to progress bars
        const progressBars = document.querySelectorAll('.steamui_ProgressBar__fill');
        progressBars.forEach(bar => {
            bar.classList.add('tron-progress');
        });
        
        // Add Tron pulse to status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator--online');
        statusIndicators.forEach(indicator => {
            indicator.classList.add('tron-pulse');
        });
    }
    
    // Initialize Tron-specific elements
    function initTronElements() {
        // Add Tron watermark
        addTronWatermark();
        
        // Add geometric grid pattern
        addGeometricGrid();
        
        // Add Tron borders
        addTronBorders();
        
        // Add Tron text effects
        addTronTextEffects();
    }
    
    // Add Tron watermark
    function addTronWatermark() {
        const watermark = document.createElement('div');
        watermark.className = 'tron-watermark';
        watermark.innerHTML = '🎵 TRON LEGACY';
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            color: var(--tron-electric-blue);
            font-size: 12px;
            font-weight: 600;
            opacity: 0.4;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 8px var(--tron-electric-blue);
            animation: tron-pulse 2s ease-in-out infinite;
        `;
        document.body.appendChild(watermark);
    }
    
    // Add geometric grid pattern
    function addGeometricGrid() {
        const style = document.createElement('style');
        style.textContent = `
            .tron-panel::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: 
                    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(0deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
                background-size: 50px 50px;
                pointer-events: none;
                z-index: 0;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add Tron borders
    function addTronBorders() {
        const style = document.createElement('style');
        style.textContent = `
            .tron-border {
                border: 1px solid var(--tron-electric-blue);
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
                animation: tron-glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes tron-glow {
                from { box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); }
                to { box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to important containers
        const containers = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        containers.forEach(container => {
            container.classList.add('tron-border');
        });
    }
    
    // Add Tron text effects
    function addTronTextEffects() {
        const style = document.createElement('style');
        style.textContent = `
            .tron-text-effect {
                background: linear-gradient(135deg, var(--tron-electric-blue) 0%, var(--tron-cyan) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 700;
                animation: tron-text-glow 3s ease-in-out infinite;
            }
            
            @keyframes tron-text-glow {
                0%, 100% { filter: brightness(1); }
                50% { filter: brightness(1.3); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to headings
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach(heading => {
            heading.classList.add('tron-text-effect');
        });
    }
    
    // Initialize custom scrollbars
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            .tron-scrollbar::-webkit-scrollbar {
                width: 12px;
                background: var(--tron-bg-secondary);
            }
            
            .tron-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, var(--tron-electric-blue) 0%, var(--tron-cyan) 100%);
                border-radius: 0;
                border: 2px solid var(--tron-bg-secondary);
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
            }
            
            .tron-scrollbar::-webkit-scrollbar-thumb:hover {
                box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
            }
        `;
        document.head.appendChild(style);
        
        // Apply to scrollable elements
        const scrollableElements = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        scrollableElements.forEach(element => {
            element.classList.add('tron-scrollbar');
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
    
    // Add geometric background effect
    function addGeometricBackground() {
        const geometricContainer = document.createElement('div');
        geometricContainer.className = 'geometric-container';
        geometricContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.appendChild(geometricContainer);
        
        // Create geometric lines
        for (let i = 0; i < 20; i++) {
            const line = document.createElement('div');
            line.style.cssText = `
                position: absolute;
                width: 1px;
                height: 100px;
                background: rgba(0, 255, 255, 0.1);
                animation: geometric-move 8s linear infinite;
                animation-delay: ${Math.random() * 8}s;
            `;
            line.style.left = `${Math.random() * 100}%`;
            line.style.top = `${Math.random() * 100}%`;
            geometricContainer.appendChild(line);
        }
        
        // Add geometric move animation
        const geometricStyle = document.createElement('style');
        geometricStyle.textContent = `
            @keyframes geometric-move {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(geometricStyle);
    }
    
    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTronLegacyTheme);
    } else {
        initTronLegacyTheme();
    }
    
    // Add entrance animations after a short delay
    setTimeout(addEntranceAnimations, 100);
    setTimeout(addGeometricBackground, 200);
    
    // Export for Millennium compatibility
    if (typeof window !== 'undefined') {
        window.TronLegacyTheme = {
            init: initTronLegacyTheme,
            version: '2.0.0'
        };
    }
    
})(); 