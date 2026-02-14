/* Everyday Tools — Core JS */
(function(){
    'use strict';
    const TOOLS = [
        { id:'pdf-merger', name:'PDF Merger', desc:'Merge multiple PDFs into one — files never leave your browser', icon:'📄', color:'#e25950', href:'tools/pdf-merger.html', tag:'Popular' },
        { id:'image-compressor', name:'Image Compressor', desc:'Compress images up to 90% smaller — processed entirely in your browser', icon:'🖼️', color:'#24b47e', href:'tools/image-compressor.html', tag:'Popular' },
        { id:'qr-generator', name:'QR Code Generator', desc:'Generate QR codes with custom colours and download as PNG or SVG', icon:'📱', color:'#4f6ef7', href:'tools/qr-code-generator.html', tag:'' },
        { id:'word-counter', name:'Word & Character Counter', desc:'Count words, characters, sentences, paragraphs and reading time', icon:'📝', color:'#9b59b6', href:'tools/word-counter.html', tag:'' },
        { id:'invoice-gen', name:'Invoice Generator', desc:'Create professional invoices and download as PDF — no sign-up needed', icon:'🧾', color:'#f5a623', href:'tools/invoice-generator.html', tag:'' },
        { id:'timezone', name:'Time Zone Converter', desc:'Convert times between any world time zones instantly', icon:'🌍', color:'#4f6ef7', href:'tools/timezone-converter.html', tag:'' },
        { id:'lorem', name:'Lorem Ipsum Generator', desc:'Generate placeholder text by paragraphs, sentences or words', icon:'📰', color:'#8898aa', href:'tools/lorem-ipsum-generator.html', tag:'' },
        { id:'password', name:'Password Generator', desc:'Generate strong, secure passwords with customisable options', icon:'🔐', color:'#24b47e', href:'tools/password-generator.html', tag:'' },
        { id:'currency', name:'Currency Converter', desc:'Convert between 150+ world currencies with live exchange rates', icon:'💱', color:'#e4a800', href:'tools/currency-converter.html', tag:'' },
    ];

    function initNav() {
        const h = document.querySelector('.nav-hamburger'), l = document.querySelector('.nav-links');
        if (h && l) { h.addEventListener('click', () => l.classList.toggle('open')); document.addEventListener('click', e => { if (!e.target.closest('.site-nav')) l.classList.remove('open'); }); }
    }

    function renderToolGrid() {
        const g = document.getElementById('toolGrid');
        if (!g) return;
        g.innerHTML = TOOLS.map(t => `
            <a href="${t.href}" class="tool-card">
                <div class="tool-card-icon" style="background:${t.color}12">${t.icon}</div>
                <h3>${t.name}</h3>
                <p>${t.desc}</p>
                ${t.tag ? `<span class="tag" style="background:${t.color}12;color:${t.color}">${t.tag}</span>` : ''}
            </a>
        `).join('');
    }

    window.ET = {
        TOOLS,
        copy(text, btn) { navigator.clipboard.writeText(text).then(() => { if (btn) { const o = btn.textContent; btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = o, 1500); } }); },
        download(text, filename, mime='text/plain') { const b = new Blob([text],{type:mime}); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = filename; a.click(); URL.revokeObjectURL(a.href); },
        fmtBytes(b) { if (b < 1024) return b + ' B'; if (b < 1048576) return (b/1024).toFixed(1) + ' KB'; return (b/1048576).toFixed(1) + ' MB'; },
    };

    document.addEventListener('DOMContentLoaded', () => { initNav(); renderToolGrid(); });
})();
