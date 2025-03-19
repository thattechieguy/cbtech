document.addEventListener('DOMContentLoaded', function() {
    const servicesGrid = document.getElementById('services-grid');
    
    if (servicesGrid) {
        const services = [
            {
                icon: '🔒',
                title: 'Security Assessment',
                description: 'Comprehensive evaluation of your cloud infrastructure, development practices, and application security posture.',
                id: 'security-assessment'
            },
            {
                icon: '🔄',
                title: 'CI/CD Pipeline Integration',
                description: 'Seamlessly integrate security testing into your continuous integration and deployment workflows.',
                id: 'cicd-integration'
            },
            {
                icon: '📊',
                title: 'Compliance Automation',
                description: 'Automate compliance checks and reporting for industry standards like ISO 27001, SOC 2, GDPR, and more.',
                id: 'compliance'
            },
            {
                icon: '👥',
                title: 'Team Training',
                description: 'Equip your development and operations teams with security awareness and best practices.',
                id: 'training'
            },
            {
                icon: '🛡️',
                title: 'Vulnerability Management',
                description: 'Implement robust processes for identifying, prioritizing, and remediating security vulnerabilities.',
                id: 'vulnerability'
            },
            {
                icon: '☁️',
                title: 'Cloud Security',
                description: 'Secure your cloud infrastructure and deployments across AWS, Azure, and Google Cloud.',
                id: 'cloud-security'
            }
        ];

        // Check if we're on the services page or the homepage
        const isServicesPage = window.location.pathname.includes('/services.html');
        const servicesToDisplay = isServicesPage ? services : services.slice(0, 3);
        
        servicesGrid.innerHTML = servicesToDisplay.map(service => `
            <div class="service-card" id="${service.id}">
                <div class="service-icon">${service.icon}</div>
                <div class="service-content">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    ${isServicesPage ? '<a href="#contact" class="btn btn-sm">Learn More</a>' : ''}
                </div>
            </div>
        `).join('');
    }
});
