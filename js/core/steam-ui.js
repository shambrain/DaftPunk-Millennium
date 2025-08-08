// Daft Punk Millennium Collection - Steam UI Core JavaScript
(function() {
    'use strict';
    
    async function initSteamUI() {
        try {
            await waitForSteamUI();
            
            // Initialize Steam UI enhancements
            initSteamUIEnhancements();
            initSteamUINavigation();
            initSteamUIButtons();
            initSteamUIInputs();
            initSteamUIScrollbars();
            initSteamUIGameGrid();
            initSteamUIProgressBars();
            initSteamUITooltips();
            initSteamUIDropdowns();
            initSteamUINotifications();
            
            console.log('🎵 Steam UI core initialized');
        } catch (error) {
            console.error('Error initializing Steam UI core:', error);
        }
    }
    
    function initSteamUIEnhancements() {
        // Add theme class to body
        document.body.classList.add('daftpunk-steam-ui');
        
        // Enhance Steam UI containers
        const containers = document.querySelectorAll('.steamui_Container');
        containers.forEach(container => {
            container.style.transition = 'all var(--dp-transition-fast)';
        });
    }
    
    function initSteamUINavigation() {
        // Enhance navigation items
        const navItems = document.querySelectorAll('.steamui_HeaderNavItem_2Kj7A');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-1px)';
                item.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = 'none';
            });
        });
    }
    
    function initSteamUIButtons() {
        // Enhance Steam UI buttons
        const buttons = document.querySelectorAll('.btnv6_blue_hoverfade, .btnv6_lightblue_blue_hoverfade, .btnv6_grey_blue_hoverfade');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = 'var(--dp-shadow-button)';
            });
            
            button.addEventListener('click', () => {
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = 'translateY(-2px)';
                }, 150);
            });
        });
    }
    
    function initSteamUIInputs() {
        // Enhance input fields
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.transform = 'scale(1.02)';
                input.style.boxShadow = 'var(--dp-shadow-focus)';
            });
            
            input.addEventListener('blur', () => {
                input.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
        });
    }
    
    function initSteamUIScrollbars() {
        // Custom scrollbar behavior
        const scrollableElements = document.querySelectorAll('.steamui_Panel, .steamui_Modal');
        scrollableElements.forEach(element => {
            element.addEventListener('scroll', () => {
                element.style.scrollbarWidth = 'thin';
                element.style.scrollbarColor = 'var(--dp-accent-primary) var(--dp-bg-scrollbar)';
            });
        });
    }
    
    function initSteamUIGameGrid() {
        // Enhance game grid items
        const gameItems = document.querySelectorAll('.appgrid_AppTileContainer_2wxOc');
        gameItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-4px) scale(1.02)';
                item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.boxShadow = 'var(--dp-shadow-card)';
            });
        });
    }
    
    function initSteamUIProgressBars() {
        // Enhance progress bars
        const progressBars = document.querySelectorAll('.progressbar_ProgressBar_1iksB');
        progressBars.forEach(bar => {
            const progress = bar.querySelector('div');
            if (progress) {
                progress.style.transition = 'width var(--dp-transition-smooth)';
                progress.style.boxShadow = 'var(--dp-shadow-progress)';
            }
        });
    }
    
    function initSteamUITooltips() {
        // Enhance tooltips
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => {
            tooltip.style.transition = 'all var(--dp-transition-fast)';
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
            
            tooltip.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            });
            
            tooltip.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
            });
        });
    }
    
    function initSteamUIDropdowns() {
        // Enhance dropdowns
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => {
            dropdown.style.transition = 'all var(--dp-transition-fast)';
            dropdown.style.opacity = '0';
            dropdown.style.transform = 'translateY(-10px)';
            
            dropdown.addEventListener('mouseenter', () => {
                dropdown.style.opacity = '1';
                dropdown.style.transform = 'translateY(0)';
            });
            
            dropdown.addEventListener('mouseleave', () => {
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'translateY(-10px)';
            });
        });
    }
    
    function initSteamUINotifications() {
        // Enhance notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.style.transition = 'all var(--dp-transition-fast)';
            notification.style.animation = 'slideIn 0.3s ease-out';
            
            // Auto-hide notifications after 5 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 300);
            }, 5000);
        });
        
        // Add notification animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);
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
    
    // Initialize Steam UI
    initSteamUI();
})(); 