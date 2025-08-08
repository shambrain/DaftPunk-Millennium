// Cosmic Voyager Theme JavaScript
(function() {
    'use strict';
    
    async function initCosmicVoyagerTheme() {
        try {
            await waitForSteamUI();
            
            // Add theme class to body
            document.body.classList.add('cosmic-voyager-theme');
            
            // Initialize cosmic effects
            initCosmicEffects();
            initNebulaAnimations();
            initCosmicElements();
            addCosmicWatermark();
            addNebulaBackground();
            addCosmicBorders();
            addCosmicTextEffects();
            initCustomScrollbars();
            addEntranceAnimations();
            addCosmicParticles();
            
            console.log('🎵 Cosmic Voyager theme initialized');
        } catch (error) {
            console.error('Error initializing Cosmic Voyager theme:', error);
        }
    }
    
    function initCosmicEffects() {
        // Add cosmic glow to buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_lightblue_blue_hoverfade, .btnv6_grey_blue_hoverfade');
        buttons.forEach(button => {
            button.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.6)';
            button.addEventListener('mouseenter', () => {
                button.style.boxShadow = '0 0 25px rgba(138, 43, 226, 0.8), 0 0 35px rgba(255, 105, 180, 0.6)';
                button.style.transform = 'scale(1.05)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.6)';
                button.style.transform = 'scale(1)';
            });
        });
        
        // Add cosmic shimmer to panels
        const panels = document.querySelectorAll('.steamui_Panel, .steamui_Modal');
        panels.forEach(panel => {
            panel.style.background = 'linear-gradient(135deg, rgba(25, 25, 35, 0.9) 0%, rgba(45, 25, 55, 0.9) 100%)';
            panel.style.border = '1px solid rgba(138, 43, 226, 0.6)';
            panel.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.4)';
        });
    }
    
    function initNebulaAnimations() {
        // Add nebula animation to game grid items
        const gameItems = document.querySelectorAll('.appgrid_AppTileContainer_2wxOc');
        gameItems.forEach(item => {
            item.style.background = 'linear-gradient(135deg, rgba(25, 25, 35, 0.8) 0%, rgba(45, 25, 55, 0.8) 100%)';
            item.style.border = '1px solid rgba(138, 43, 226, 0.4)';
            item.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.3)';
            
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px) scale(1.02)';
                item.style.boxShadow = '0 10px 25px rgba(138, 43, 226, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)';
                item.style.background = 'linear-gradient(135deg, rgba(35, 25, 45, 0.9) 0%, rgba(55, 25, 65, 0.9) 100%)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.3)';
                item.style.background = 'linear-gradient(135deg, rgba(25, 25, 35, 0.8) 0%, rgba(45, 25, 55, 0.8) 100%)';
            });
        });
        
        // Add cosmic progress bars
        const progressBars = document.querySelectorAll('.progressbar_ProgressBar_1iksB');
        progressBars.forEach(bar => {
            bar.style.background = 'linear-gradient(90deg, var(--cosmic-purple) 0%, var(--cosmic-pink) 50%, var(--cosmic-blue) 100%)';
            bar.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.6)';
        });
    }
    
    function initCosmicElements() {
        // Add cosmic navigation
        const navItems = document.querySelectorAll('.steamui_HeaderNavItem_2Kj7A');
        navItems.forEach(item => {
            item.style.color = 'var(--cosmic-text-primary)';
            item.addEventListener('mouseenter', () => {
                item.style.color = 'var(--cosmic-purple)';
                item.style.textShadow = '0 0 10px rgba(138, 43, 226, 0.8)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.color = 'var(--cosmic-text-primary)';
                item.style.textShadow = 'none';
            });
        });
        
        // Add cosmic status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator_1Y6sa');
        statusIndicators.forEach(indicator => {
            indicator.style.background = 'var(--cosmic-purple)';
            indicator.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.6)';
        });
    }
    
    function addCosmicWatermark() {
        const watermark = document.createElement('div');
        watermark.innerHTML = '🎵 Cosmic Voyager';
        watermark.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            color: var(--cosmic-purple);
            font-size: 12px;
            font-weight: 600;
            opacity: 0.7;
            z-index: 9999;
            text-shadow: 0 0 10px rgba(138, 43, 226, 0.8);
            pointer-events: none;
        `;
        document.body.appendChild(watermark);
    }
    
    function addNebulaBackground() {
        const nebula = document.createElement('div');
        nebula.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 105, 180, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(0, 191, 255, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
            animation: nebulaFloat 20s ease-in-out infinite;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes nebulaFloat {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(-10px, -10px) scale(1.1); }
                50% { transform: translate(10px, -5px) scale(0.9); }
                75% { transform: translate(-5px, 10px) scale(1.05); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(nebula);
    }
    
    function addCosmicBorders() {
        // Add cosmic borders to main containers
        const containers = document.querySelectorAll('.steamui_Container');
        containers.forEach(container => {
            container.style.border = '1px solid rgba(138, 43, 226, 0.3)';
            container.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.2)';
        });
    }
    
    function addCosmicTextEffects() {
        // Add cosmic text effects
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.style.color = 'var(--cosmic-text-primary)';
            heading.style.textShadow = '0 0 10px rgba(138, 43, 226, 0.5)';
        });
        
        // Add cosmic link effects
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = 'var(--cosmic-purple)';
            link.addEventListener('mouseenter', () => {
                link.style.color = 'var(--cosmic-pink)';
                link.style.textShadow = '0 0 10px rgba(255, 105, 180, 0.8)';
            });
            link.addEventListener('mouseleave', () => {
                link.style.color = 'var(--cosmic-purple)';
                link.style.textShadow = 'none';
            });
        });
    }
    
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            ::-webkit-scrollbar {
                width: 12px;
                background: var(--cosmic-bg-secondary);
            }
            ::-webkit-scrollbar-track {
                background: var(--cosmic-bg-secondary);
                border-radius: 6px;
            }
            ::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, var(--cosmic-purple) 0%, var(--cosmic-pink) 100%);
                border-radius: 6px;
                box-shadow: 0 0 10px rgba(138, 43, 226, 0.6);
            }
            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, var(--cosmic-pink) 0%, var(--cosmic-blue) 100%);
                box-shadow: 0 0 15px rgba(255, 105, 180, 0.8);
            }
        `;
        document.head.appendChild(style);
    }
    
    function addEntranceAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            .cosmic-voyager-theme .steamui_Panel {
                animation: cosmicEntrance 0.8s ease-out;
            }
            @keyframes cosmicEntrance {
                from {
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function addCosmicParticles() {
        // Create floating cosmic particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: var(--cosmic-purple);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                animation: cosmicParticle ${5 + Math.random() * 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes cosmicParticle {
                    0% {
                        transform: translateY(100vh) scale(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100px) scale(1);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            document.body.appendChild(particle);
        }
    }
    
    function waitForSteamUI() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }
    
    // Initialize theme
    initCosmicVoyagerTheme();
})(); 