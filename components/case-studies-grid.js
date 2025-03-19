document.addEventListener('DOMContentLoaded', function() {
    const caseStudiesGrid = document.getElementById('case-studies-grid');
    
    const caseStudies = [
        {
            id: 'financial-services',
            title: 'Financial Services Leader',
            image: '/assets/images/case-study1.jpg',
            summary: 'Helped a major financial institution reduce security vulnerabilities by 78% while accelerating release cycles by 40%.',
            fullDescription: 'Our team implemented a comprehensive DevSecOps transformation for this leading financial services provider. By integrating automated security testing into their CI/CD pipeline, we were able to identify and remediate vulnerabilities much earlier in the development cycle. This resulted in a 78% reduction in security vulnerabilities reaching production and a 40% increase in release velocity.'
        },
        {
            id: 'healthcare-startup',
            title: 'Healthcare Technology Startup',
            image: '/assets/images/case-study2.jpg',
            summary: 'Implemented HIPAA-compliant CI/CD pipelines, enabling secure releases every two weeks instead of quarterly.',
            fullDescription: 'This healthcare technology startup needed to maintain HIPAA compliance while accelerating their development process. We implemented secure CI/CD pipelines with automated compliance checks, allowing them to move from quarterly releases to bi-weekly deployments without compromising security or compliance requirements.'
        },
        {
            id: 'ecommerce-platform',
            title: 'E-commerce Platform',
            image: '/assets/images/case-study3.jpg',
            summary: 'Reduced mean time to remediate critical vulnerabilities from 45 days to just 3 days through automation.',
            fullDescription: 'A rapidly growing e-commerce platform was struggling with vulnerability management at scale. We implemented automated vulnerability scanning and prioritization, integrated with their ticketing system, and established clear remediation workflows. This reduced their mean time to remediate critical vulnerabilities from 45 days to just 3 days.'
        }
    ];

    if (caseStudiesGrid) {
        // Check if we're on the case studies page or the homepage
        const isCaseStudiesPage = window.location.pathname.includes('/case-studies.html');
        const studiesToDisplay = isCaseStudiesPage ? caseStudies : caseStudies.slice(0, 3);
        
        caseStudiesGrid.innerHTML = studiesToDisplay.map(study => `
            <div class="case-study-card" id="${study.id}">
                <div class="case-study-img" style="background-image: url('${study.image}')"></div>
                <div class="case-study-content">
                    <h3>${study.title}</h3>
                    <p>${study.summary}</p>
                    <a href="${isCaseStudiesPage ? `#${study.id}-details` : '/pages/case-studies.html#' + study.id}" class="btn">
                        ${isCaseStudiesPage ? 'Read Details' : 'Read More'}
                    </a>
                </div>
                ${isCaseStudiesPage ? `
                <div id="${study.id}-details" class="case-study-details">
                    <h3>${study.title}: Full Case Study</h3>
                    <p>${study.fullDescription}</p>
                    <div class="results">
                        <h4>Key Results:</h4>
                        <ul>
                            <li>Result 1</li>
                            <li>Result 2</li>
                            <li>Result 3</li>
                        </ul>
                    </div>
                </div>` : ''}
            </div>
        `).join('');
    }
});
