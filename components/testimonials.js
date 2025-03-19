document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlider = document.getElementById('testimonials-slider');
    
    const testimonials = [
        {
            quote: "Implementing DevSecOps with CloudBicep completely transformed how we approach security. Instead of being a bottleneck, security is now a competitive advantage for us. Our developers are more empowered and our applications are more secure.",
            author: "Sarah Johnson",
            company: "CTO, FinTech Solutions Inc."
        },
        {
            quote: "CloudBicep Technologies helped us achieve our compliance goals while actually speeding up our development process. Their expertise in both development and security practices was invaluable to our team.",
            author: "Michael Zhang",
            company: "Head of Engineering, HealthTech Innovations"
        },
        {
            quote: "We've worked with several security consultants before, but CloudBicep's approach to integrating security into our existing workflows was truly transformative. They understand both the technical and cultural aspects of DevSecOps.",
            author: "Priya Patel",
            company: "VP of Technology, E-Commerce Leaders"
        }
    ];

    if (testimonialSlider) {
        testimonialSlider.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>${testimonials[0].quote}</p>
                    <div class="testimonial-author">${testimonials[0].author}</div>
                    <div class="testimonial-company">${testimonials[0].company}</div>
                </div>
                <div class="testimonial-navigation">
                    ${testimonials.map((_, index) => `
                        <button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
                    `).join('')}
                </div>
            </div>
        `;

        // Add event listeners for testimonial navigation
        const dots = testimonialSlider.querySelectorAll('.testimonial-dot');
        const content = testimonialSlider.querySelector('.testimonial-content');
        
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                
                // Update content
                content.innerHTML = `
                    <p>${testimonials[index].quote}</p>
                    <div class="testimonial-author">${testimonials[index].author}</div>
                    <div class="testimonial-company">${testimonials[index].company}</div>
                `;
                
                // Update active dot
                dots.forEach(d => d.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});
