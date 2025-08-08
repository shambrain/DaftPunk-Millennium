// Get Lucky Disco Theme JavaScript
// Vibrant disco animations with sparkling effects

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
    
    // Initialize Get Lucky Disco theme
    async function initGetLuckyDiscoTheme() {
        try {
            await waitForSteamUI();
            
            // Add theme class to body
            document.body.classList.add('get-lucky-disco-theme');
            
            // Initialize theme features
            initDiscoEffects();
            initSparklingAnimations();
            initDiscoElements();
            initCustomScrollbars();
            
            console.log(' Get Lucky Disco Theme initialized successfully');
        } catch (error) {
            console.error(' Get Lucky Disco theme initialization failed:', error);
        }
    }
    
    // Initialize disco effects
    function initDiscoEffects() {
        // Add disco shine to buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_blue_steamui, .btnv6_blue_steamui__blue, .btnv6_secondary_hoverfade');
        
        buttons.forEach(button => {
            button.classList.add('disco-button');
            
            // Add disco sparkle effect
            const sparkle = document.createElement('div');
            sparkle.className = 'disco-sparkle';
            sparkle.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s ease-in-out;
                opacity: 0;
                pointer-events: none;
                z-index: 1;
            `;
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(sparkle);
            
            // Trigger sparkle on hover
            button.addEventListener('mouseenter', function() {
                sparkle.style.width = '100px';
                sparkle.style.height = '100px';
                sparkle.style.opacity = '0.3';
            });
            
            button.addEventListener('mouseleave', function() {
                sparkle.style.width = '0';
                sparkle.style.height = '0';
                sparkle.style.opacity = '0';
            });
        });
        
        // Add disco effect to panels
        const panels = document.querySelectorAll('.steamui_Container, .steamui_Panel, .steamui_Modal');
        panels.forEach(panel => {
            panel.classList.add('disco-panel');
        });
    }
    
    // Initialize sparkling animations
    function initSparklingAnimations() {
        // Add sparkling effect to game grid items
        const gameItems = document.querySelectorAll('.library_GameGridItem');
        gameItems.forEach((item, index) => {
            item.classList.add('disco-sparkling');
            item.style.animationDelay = `${index * 0.1}s`;
            
            // Add sparkle corner
            const sparkle = document.createElement('div');
            sparkle.className = 'corner-sparkle';
            sparkle.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                width: 8px;
                height: 8px;
                background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
                border-radius: 50%;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
                z-index: 2;
            `;
            item.appendChild(sparkle);
            
            item.addEventListener('mouseenter', function() {
                sparkle.style.opacity = '1';
            });
            
            item.addEventListener('mouseleave', function() {
                sparkle.style.opacity = '0';
            });
        });
        
        // Add sparkling effect to progress bars
        const progressBars = document.querySelectorAll('.steamui_ProgressBar__fill');
        progressBars.forEach(bar => {
            bar.classList.add('disco-sparkling');
        });
        
        // Add disco pulse to status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator--online');
        statusIndicators.forEach(indicator => {
            indicator.classList.add('disco-pulse');
        });
    }
    
    // Initialize disco-specific elements
    function initDiscoElements() {
        // Add disco watermark
        addDiscoWatermark();
        
        // Add disco grid pattern
        addDiscoGrid();
        
        // Add neon borders
        addNeonBorders();
        
        // Add disco text effects
        addDiscoTextEffects();
    }
    
    // Add disco watermark
    function addDiscoWatermark() {
        const watermark = document.createElement('div');
        watermark.className = 'disco-watermark';
        watermark.innerHTML = ' GET LUCKY DISCO';
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            color: var(--disco-neon-teal);
            font-size: 12px;
            font-weight: 600;
            opacity: 0.4;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 8px var(--disco-neon-teal);
            animation: disco-pulse 2s ease-in-out infinite;
        `;
        document.body.appendChild(watermark);
    }
    
    // Add disco grid pattern
    function addDiscoGrid() {
        const style = document.createElement('style');
        style.textContent = `
            .disco-panel::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: 
                    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(0deg, rgba(255, 105, 180, 0.03) 1px, transparent 1px);
                background-size: 20px 20px;
                pointer-events: none;
                z-index: 0;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add neon borders
    function addNeonBorders() {
        const style = document.createElement('style');
        style.textContent = `
            .disco-neon-border {
                border: 2px solid var(--disco-neon-teal);
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
                animation: neon-glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes neon-glow {
                from { box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); }
                to { box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to important containers
        const containers = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        containers.forEach(container => {
            container.classList.add('disco-neon-border');
        });
    }
    
    // Add disco text effects
    function addDiscoTextEffects() {
        const style = document.createElement('style');
        style.textContent = `
            .disco-text-effect {
                background: linear-gradient(135deg, var(--disco-neon-teal) 0%, var(--disco-neon-pink) 50%, var(--disco-neon-orange) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 700;
                animation: disco-text-shift 3s ease-in-out infinite;
            }
            
            @keyframes disco-text-shift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to headings
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach(heading => {
            heading.classList.add('disco-text-effect');
        });
    }
    
    // Initialize custom scrollbars
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            .disco-scrollbar::-webkit-scrollbar {
                width: 12px;
                background: var(--disco-bg-secondary);
            }
            
            .disco-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, var(--disco-neon-teal) 0%, var(--disco-neon-pink) 50%, var(--disco-neon-orange) 100%);
                border-radius: 6px;
                border: 2px solid var(--disco-bg-secondary);
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
            }
            
            .disco-scrollbar::-webkit-scrollbar-thumb:hover {
                box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
            }
        `;
        document.head.appendChild(style);
        
        // Apply to scrollable elements
        const scrollableElements = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        scrollableElements.forEach(element => {
            element.classList.add('disco-scrollbar');
        });
    }
    
    // Add entrance animations
    function addEntranceAnimations() {
        const animatedElements = document.querySelectorAll('.steamui_Container, .steamui_Panel, .library_GameGridItem');
        
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px) scale(0.95)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
        });
    }
    
    // Add disco background sparkles
    function addDiscoSparkles() {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.className = 'disco-sparkle-container';
        sparkleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.appendChild(sparkleContainer);
        
        // Create random sparkles
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
                border-radius: 50%;
                animation: sparkle-float 8s linear infinite;
                animation-delay: ${Math.random() * 8}s;
            `;
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkleContainer.appendChild(sparkle);
        }
        
        // Add sparkle float animation
        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
            @keyframes sparkle-float {
                0% { transform: translateY(100vh) scale(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(sparkleStyle);
    }
    
    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGetLuckyDiscoTheme);
    } else {
        initGetLuckyDiscoTheme();
    }
    
    // Add entrance animations after a short delay
    setTimeout(addEntranceAnimations, 100);
    setTimeout(addDiscoSparkles, 200);
    
    // Export for Millennium compatibility
    if (typeof window !== 'undefined') {
        window.GetLuckyDiscoTheme = {
            init: initGetLuckyDiscoTheme,
            version: '2.0.0'
        };
    }
    
})(); 