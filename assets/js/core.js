/* Everyday Tools — Core JS */
(function(){
    'use strict';
    const TOOLS = [
        { id:'pdf-merger', name:'PDF Merger', desc:'Merge multiple PDFs into one — files never leave your browser', icon:'📄', color:'#ef4444', href:'tools/pdf-merger.html', tag:'Popular', category:'Files' },
        { id:'image-compressor', name:'Image Compressor', desc:'Compress images up to 90% smaller — processed entirely in your browser', icon:'🖼️', color:'#22c55e', href:'tools/image-compressor.html', tag:'Popular', category:'Files' },
        { id:'qr-generator', name:'QR Code Generator', desc:'Generate QR codes with custom colours and download as PNG or SVG', icon:'📱', color:'#3b82f6', href:'tools/qr-code-generator.html', tag:'', category:'Generators' },
        { id:'word-counter', name:'Word & Character Counter', desc:'Count words, characters, sentences, paragraphs and reading time', icon:'📝', color:'#a855f7', href:'tools/word-counter.html', tag:'', category:'Text' },
        { id:'invoice-gen', name:'Invoice Generator', desc:'Create professional invoices and download as PDF — no sign-up needed', icon:'🧾', color:'#f59e0b', href:'tools/invoice-generator.html', tag:'', category:'Business' },
        { id:'timezone', name:'Time Zone Converter', desc:'Convert times between any world time zones instantly', icon:'🌍', color:'#3b82f6', href:'tools/timezone-converter.html', tag:'', category:'Converters' },
        { id:'lorem', name:'Lorem Ipsum Generator', desc:'Generate placeholder text by paragraphs, sentences or words', icon:'📰', color:'#636d83', href:'tools/lorem-ipsum-generator.html', tag:'', category:'Generators' },
        { id:'password', name:'Password Generator', desc:'Generate strong, secure passwords with customisable options', icon:'🔐', color:'#22c55e', href:'tools/password-generator.html', tag:'', category:'Security' },
        { id:'currency', name:'Currency Converter', desc:'Convert between 150+ world currencies with live exchange rates', icon:'💱', color:'#f59e0b', href:'tools/currency-converter.html', tag:'', category:'Converters' },
    ];

    function initNav() {
        const h = document.querySelector('.nav-hamburger'), l = document.querySelector('.nav-links');
        if (h && l) { h.addEventListener('click', () => l.classList.toggle('open')); document.addEventListener('click', e => { if (!e.target.closest('.site-nav')) l.classList.remove('open'); }); }
    }

    function renderToolGrid() {
        const g = document.getElementById('toolGrid');
        if (!g) return;
        g.innerHTML = TOOLS.map(t => {
            const badge = t.tag === 'Popular'
                ? '<span class="tool-badge-popular">Popular</span>'
                : (t.tag ? `<span class="tool-badge-new">${t.tag}</span>` : '');
            return `
            <a href="${t.href}" class="tool-card" style="--tool-color: ${t.color}">
                <div class="tool-card-icon">${t.icon}</div>
                <div class="tool-card-body">
                    <div class="tool-card-header">
                        <h3>${t.name}</h3>
                        ${badge}
                    </div>
                    <p>${t.desc}</p>
                    <div class="tool-card-meta">
                        <span class="tool-category">${t.category}</span>
                        <span class="tool-arrow">→</span>
                    </div>
                </div>
            </a>
        `}).join('');
    }

    window.ET = {
        TOOLS,
        copy(text, btn) { navigator.clipboard.writeText(text).then(() => { if (btn) { const o = btn.textContent; btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = o, 1500); } }); },
        download(text, filename, mime='text/plain') { const b = new Blob([text],{type:mime}); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = filename; a.click(); URL.revokeObjectURL(a.href); },
        fmtBytes(b) { if (b < 1024) return b + ' B'; if (b < 1048576) return (b/1024).toFixed(1) + ' KB'; return (b/1048576).toFixed(1) + ' MB'; },
    };

    document.addEventListener('DOMContentLoaded', () => { initNav(); renderToolGrid(); });
})();
