document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    
    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <h4>CloudBicep Technologies</h4>
                        <p>Integrating security into every phase of your cloud development lifecycle to build robust, resilient applications.</p>
                    </div>
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/pages/services.html">Services</a></li>
                            <li><a href="/pages/about.html">About Us</a></li>
                            <li><a href="/pages/case-studies.html">Case Studies</a></li>
                            <li><a href="/pages/contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/pages/services.html#security-assessment">Security Assessment</a></li>
                            <li><a href="/pages/services.html#cicd-integration">CI/CD Integration</a></li>
                            <li><a href="/pages/services.html#compliance">Compliance Automation</a></li>
                            <li><a href="/pages/services.html#training">Team Training</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter for the latest in DevSecOps</p>
                        <form id="newsletter-form">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Your Email">
                            </div>
                            <button type="submit" class="btn">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; ${new Date().getFullYear()} CloudBicep Technologies Private Limited. All rights reserved.</p>
                </div>
            </div>
        `;

        // Add newsletter form submission handler
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                if (email) {
                    alert('Thank you for subscribing to our newsletter!');
                    this.reset();
                }
            });
        }
    }
});
