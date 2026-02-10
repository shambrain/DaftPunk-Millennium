// Recall Harmony theme script
(() => {
    const FLAG = 'data-daftpunk-recall-harmony';

    if (document.documentElement.getAttribute(FLAG) === '1') {
        return;
    }

    document.documentElement.setAttribute(FLAG, '1');
    console.log('[Daft Punk Millennium] Recall Harmony theme activated.');
})();
