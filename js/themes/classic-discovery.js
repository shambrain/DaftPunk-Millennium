// Classic Discovery Theme JavaScript
(function() {
    'use strict';
    
    async function initClassicDiscoveryTheme() {
        try {
            await waitForSteamUI();
            
            // Add theme class to body
            document.body.classList.add('classic-discovery-theme');
            
            // Initialize classic effects
            initClassicEffects();
            initRetroAnimations();
            initClassicElements();
            addClassicWatermark();
            addClassicBackground();
            addClassicBorders();
            addClassicTextEffects();
            initCustomScrollbars();
            addEntranceAnimations();
            addClassicGrid();
            
            console.log('🎵 Classic Discovery theme initialized');
        } catch (error) {
            console.error('Error initializing Classic Discovery theme:', error);
        }
    }
    
    function initClassicEffects() {
        // Add classic glow to buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_lightblue_blue_hoverfade, .btnv6_grey_blue_hoverfade');
        buttons.forEach(button => {
            button.style.boxShadow = '0 0 15px rgba(0, 102, 204, 0.6)';
            button.addEventListener('mouseenter', () => {
                button.style.boxShadow = '0 0 25px rgba(0, 102, 204, 0.8), 0 0 35px rgba(255, 105, 180, 0.6)';
                button.style.transform = 'scale(1.05)';
                button.style.background = 'linear-gradient(135deg, var(--classic-blue-primary) 0%, var(--classic-blue-secondary) 100%)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.boxShadow = '0 0 15px rgba(0, 102, 204, 0.6)';
                button.style.transform = 'scale(1)';
                button.style.background = 'var(--classic-blue-primary)';
            });
        });
        
        // Add classic shimmer to panels
        const panels = document.querySelectorAll('.steamui_Panel, .steamui_Modal');
        panels.forEach(panel => {
            panel.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)';
            panel.style.border = '1px solid rgba(0, 102, 204, 0.6)';
            panel.style.boxShadow = '0 0 20px rgba(0, 102, 204, 0.4)';
        });
    }
    
    function initRetroAnimations() {
        // Add retro animation to game grid items
        const gameItems = document.querySelectorAll('.appgrid_AppTileContainer_2wxOc');
        gameItems.forEach(item => {
            item.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(25, 25, 35, 0.8) 100%)';
            item.style.border = '1px solid rgba(0, 102, 204, 0.4)';
            item.style.boxShadow = '0 0 15px rgba(0, 102, 204, 0.3)';
            
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px) scale(1.02)';
                item.style.boxShadow = '0 10px 25px rgba(0, 102, 204, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)';
                item.style.background = 'linear-gradient(135deg, rgba(25, 25, 35, 0.9) 0%, rgba(35, 25, 45, 0.9) 100%)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.boxShadow = '0 0 15px rgba(0, 102, 204, 0.3)';
                item.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(25, 25, 35, 0.8) 100%)';
            });
        });
        
        // Add classic progress bars
        const progressBars = document.querySelectorAll('.progressbar_ProgressBar_1iksB');
        progressBars.forEach(bar => {
            bar.style.background = 'linear-gradient(90deg, var(--classic-blue-primary) 0%, var(--classic-blue-secondary) 50%, var(--classic-pink) 100%)';
            bar.style.boxShadow = '0 0 10px rgba(0, 102, 204, 0.6)';
        });
    }
    
    function initClassicElements() {
        // Add classic navigation
        const navItems = document.querySelectorAll('.steamui_HeaderNavItem_2Kj7A');
        navItems.forEach(item => {
            item.style.color = 'var(--classic-text-primary)';
            item.addEventListener('mouseenter', () => {
                item.style.color = 'var(--classic-blue-primary)';
                item.style.textShadow = '0 0 10px rgba(0, 102, 204, 0.8)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.color = 'var(--classic-text-primary)';
                item.style.textShadow = 'none';
            });
        });
        
        // Add classic status indicators
        const statusIndicators = document.querySelectorAll('.steamui_StatusIndicator_1Y6sa');
        statusIndicators.forEach(indicator => {
            indicator.style.background = 'var(--classic-blue-primary)';
            indicator.style.boxShadow = '0 0 10px rgba(0, 102, 204, 0.6)';
        });
    }
    
    function addClassicWatermark() {
        const watermark = document.createElement('div');
        watermark.innerHTML = '🎵 Classic Discovery';
        watermark.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            color: var(--classic-blue-primary);
            font-size: 12px;
            font-weight: 600;
            opacity: 0.7;
            z-index: 9999;
            text-shadow: 0 0 10px rgba(0, 102, 204, 0.8);
            pointer-events: none;
        `;
        document.body.appendChild(watermark);
    }
    
    function addClassicBackground() {
        const classicBg = document.createElement('div');
        classicBg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, transparent 50%),
                linear-gradient(45deg, rgba(255, 105, 180, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(0, 102, 204, 0.02) 0%, transparent 70%);
            pointer-events: none;
            z-index: -1;
            animation: classicPulse 15s ease-in-out infinite;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes classicPulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.6; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(classicBg);
    }
    
    function addClassicBorders() {
        // Add classic borders to main containers
        const containers = document.querySelectorAll('.steamui_Container');
        containers.forEach(container => {
            container.style.border = '1px solid rgba(0, 102, 204, 0.3)';
            container.style.boxShadow = '0 0 20px rgba(0, 102, 204, 0.2)';
        });
    }
    
    function addClassicTextEffects() {
        // Add classic text effects
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.style.color = 'var(--classic-text-primary)';
            heading.style.textShadow = '0 0 10px rgba(0, 102, 204, 0.5)';
        });
        
        // Add classic link effects
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = 'var(--classic-blue-primary)';
            link.addEventListener('mouseenter', () => {
                link.style.color = 'var(--classic-pink)';
                link.style.textShadow = '0 0 10px rgba(255, 105, 180, 0.8)';
            });
            link.addEventListener('mouseleave', () => {
                link.style.color = 'var(--classic-blue-primary)';
                link.style.textShadow = 'none';
            });
        });
    }
    
    function initCustomScrollbars() {
        const style = document.createElement('style');
        style.textContent = `
            ::-webkit-scrollbar {
                width: 12px;
                background: var(--classic-bg-secondary);
            }
            ::-webkit-scrollbar-track {
                background: var(--classic-bg-secondary);
                border-radius: 6px;
            }
            ::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, var(--classic-blue-primary) 0%, var(--classic-blue-secondary) 100%);
                border-radius: 6px;
                box-shadow: 0 0 10px rgba(0, 102, 204, 0.6);
            }
            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, var(--classic-blue-secondary) 0%, var(--classic-pink) 100%);
                box-shadow: 0 0 15px rgba(255, 105, 180, 0.8);
            }
        `;
        document.head.appendChild(style);
    }
    
    function addEntranceAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            .classic-discovery-theme .steamui_Panel {
                animation: classicEntrance 0.8s ease-out;
            }
            @keyframes classicEntrance {
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
    
    function addClassicGrid() {
        // Create classic Discovery grid pattern
        const grid = document.createElement('div');
        grid.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
            animation: classicGridMove 20s linear infinite;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes classicGridMove {
                0% { transform: translate(0, 0); }
                100% { transform: translate(50px, 50px); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(grid);
        
        // Add classic Discovery logo watermark
        const logo = document.createElement('div');
        logo.innerHTML = '🎵';
        logo.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 200px;
            opacity: 0.02;
            pointer-events: none;
            z-index: -1;
            color: var(--classic-blue-primary);
        `;
        document.body.appendChild(logo);
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
    initClassicDiscoveryTheme();
})(); 