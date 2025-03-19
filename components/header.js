document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    if (header) {
        header.innerHTML = `
            <div class="container header-container">
                <a href="/" class="logo">Cloud<span>Bicep</span> Technologies</a>
                <nav>
                    <ul>
                        <li><a href="${isHomePage() ? '#services-preview' : '/pages/services.html'}">Services</a></li>
                        <li><a href="${isHomePage() ? '#about-preview' : '/pages/about.html'}">About</a></li>
                        <li><a href="${isHomePage() ? '#process-preview' : '/pages/process.html'}">Process</a></li>
                        <li><a href="${isHomePage() ? '#case-studies-preview' : '/pages/case-studies.html'}">Case Studies</a></li>
                        <li><a href="/pages/contact.html">Contact</a></li>
                    </ul>
                    <button class="mobile-menu-btn">☰</button>
                </nav>
            </div>
        `;
    }
});

// Helper function to check if we're on the homepage
function isHomePage() {
    const path = window.location.pathname;
    return path === '/' || path === '/index.html';
}
