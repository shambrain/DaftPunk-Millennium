// Neon Glow Theme JavaScript
// Vibrant neon effects with particle animations

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
    
    // Initialize Neon Glow theme
    async function initNeonGlowTheme() {
        try {
            await waitForSteamUI();
            
            // Add theme class to body
            document.body.classList.add('neon-glow-theme');
            
            // Initialize theme features
            initNeonEffects();
            initParticleAnimations();
            initNeonElements();
            initCustomScrollbars();
            
            console.log(' Neon Glow Theme initialized successfully');
        } catch (error) {
            console.error(' Neon Glow theme initialization failed:', error);
        }
    }
    
    // Initialize neon effects
    function initNeonEffects() {
        // Add neon glow to buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_blue_steamui, .btnv6_blue_steamui__blue, .btnv6_secondary_hoverfade');
        
        buttons.forEach(button => {
            button.classList.add('neon-button');
            
            // Add neon sparkle effect
            const sparkle = document.createElement('div');
            sparkle.className = 'neon-sparkle';
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
        
        // Add neon effect to panels
        const panels = document.querySelectorAll('.steamui_Container, .steamui_Panel, .steamui_Modal');
        panels.forEach(panel => {
            panel.classList.add('neon-panel');
        });
    }
    
    // Initialize particle animations
    function initParticleAnimations() {
        // Add neon effect to game grid items
        const gameItems = document.querySelectorAll('.library_GameGridItem');
        gameItems.forEach((item, index) => {
            item.classList.add('neon-glow');
            item.style.animationDelay = `${index * 0.1}s`;
            
            // Add neon indicator
            const indicator = document.createElement('div');
            indicator.className = 'neon-indicator';
            indicator.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                width: 8px;
                height: 8px;
                background: var(--neon-pink);
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
        
        // Add neon effect to progress bars
        const progressBars = document.querySelectorAll('.steamui_ProgressBar__fill');
        progressBars.forEach(bar => {
            bar.classList.add('neon-progress');
        });
        
        // Add neon pulse to status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator--online');
        statusIndicators.forEach(indicator => {
            indicator.classList.add('neon-pulse');
        });
    }
    
    // Initialize neon-specific elements
    function initNeonElements() {
        // Add neon watermark
        addNeonWatermark();
        
        // Add neon grid pattern
        addNeonGrid();
        
        // Add neon borders
        addNeonBorders();
        
        // Add neon text effects
        addNeonTextEffects();
    }
    
    // Add neon watermark
    function addNeonWatermark() {
        const watermark = document.createElement('div');
        watermark.className = 'neon-watermark';
        watermark.innerHTML = '🎵 NEON GLOW';
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            color: var(--neon-pink);
            font-size: 12px;
            font-weight: 600;
            opacity: 0.4;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 8px var(--neon-pink);
            animation: neon-pulse 2s ease-in-out infinite;
        `;
        document.body.appendChild(watermark);
    }
    
    // Add neon grid pattern
    function addNeonGrid() {
        const style = document.createElement('style');
        style.textContent = `
            .neon-panel::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: 
                    linear-gradient(90deg, rgba(255, 105, 180, 0.03) 1px, transparent 1px),
                    linear-gradient(0deg, rgba(138, 43, 226, 0.03) 1px, transparent 1px);
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
            .neon-border {
                border: 2px solid var(--neon-pink);
                box-shadow: 0 0 10px rgba(255, 105, 180, 0.3);
                animation: neon-glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes neon-glow {
                from { box-shadow: 0 0 10px rgba(255, 105, 180, 0.3); }
                to { box-shadow: 0 0 20px rgba(255, 105, 180, 0.6); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to important containers
        const containers = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        containers.forEach(container => {
            container.classList.add('neon-border');
        });
    }
    
    // Add neon text effects
    function addNeonTextEffects() {
        const style = document.createElement('style');
        style.textContent = `
            .neon-text-effect {
                background: linear-gradient(135deg, var(--neon-pink) 0%, var(--neon-purple) 50%, var(--neon-blue) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 700;
                animation: neon-text-shift 3s ease-in-out infinite;
            }
            
            @keyframes neon-text-shift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
        `;
        document.head.appendChild(style);
        
        // Apply to headings
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach(heading => {
            heading.classList.add('neon-text-effect');
        });
    }
    
    // Initialize custom scrollbars
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            .neon-scrollbar::-webkit-scrollbar {
                width: 12px;
                background: var(--neon-bg-secondary);
            }
            
            .neon-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, var(--neon-pink) 0%, var(--neon-purple) 50%, var(--neon-blue) 100%);
                border-radius: 6px;
                border: 2px solid var(--neon-bg-secondary);
                box-shadow: 0 0 10px rgba(255, 105, 180, 0.3);
            }
            
            .neon-scrollbar::-webkit-scrollbar-thumb:hover {
                box-shadow: 0 0 20px rgba(255, 105, 180, 0.6);
            }
        `;
        document.head.appendChild(style);
        
        // Apply to scrollable elements
        const scrollableElements = document.querySelectorAll('.steamui_Container, .steamui_Panel');
        scrollableElements.forEach(element => {
            element.classList.add('neon-scrollbar');
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
    
    // Add neon particle background effect
    function addNeonParticleBackground() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'neon-particle-container';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.appendChild(particleContainer);
        
        // Create neon particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
                border-radius: 50%;
                animation: neon-float 8s linear infinite;
                animation-delay: ${Math.random() * 8}s;
            `;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particleContainer.appendChild(particle);
        }
        
        // Add neon float animation
        const neonStyle = document.createElement('style');
        neonStyle.textContent = `
            @keyframes neon-float {
                0% { transform: translateY(100vh) scale(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(neonStyle);
    }
    
    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNeonGlowTheme);
    } else {
        initNeonGlowTheme();
    }
    
    // Add entrance animations after a short delay
    setTimeout(addEntranceAnimations, 100);
    setTimeout(addNeonParticleBackground, 200);
    
    // Export for Millennium compatibility
    if (typeof window !== 'undefined') {
        window.NeonGlowTheme = {
            init: initNeonGlowTheme,
            version: '2.0.0'
        };
    }
    
})(); 