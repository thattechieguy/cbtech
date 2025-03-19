document.addEventListener('DOMContentLoaded', function() {
    const processTimeline = document.getElementById('process-timeline-preview');
    const fullProcessTimeline = document.getElementById('process-timeline-full');
    
    const processSteps = [
        {
            title: 'Assessment',
            description: 'We begin with a thorough evaluation of your current development practices, security posture, and business objectives.'
        },
        {
            title: 'Planning',
            description: 'Together, we develop a customized roadmap for implementing DevSecOps practices that align with your organization\'s goals.'
        },
        {
            title: 'Implementation',
            description: 'Our experts work alongside your team to implement security tools, processes, and automation in your development pipeline.'
        },
        {
            title: 'Training',
            description: 'We provide comprehensive training to ensure your team has the knowledge and skills to maintain secure development practices.'
        },
        {
            title: 'Continuous Improvement',
            description: 'Security is never "done." We help you establish metrics and feedback loops to continuously enhance your security posture.'
        }
    ];

    if (processTimeline) {
        // For the preview section on the homepage, show only the first 3 steps
        const previewSteps = processSteps.slice(0, 3);
        
        processTimeline.innerHTML = `
            <div class="timeline">
                ${previewSteps.map((step, index) => `
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <h3>${step.title}</h3>
                            <p>${step.description}</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (fullProcessTimeline) {
        // For the full process page, show all steps
        fullProcessTimeline.innerHTML = `
            <div class="timeline">
                ${processSteps.map((step, index) => `
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <h3>${step.title}</h3>
                            <p>${step.description}</p>
                            <div class="process-details">
                                <h4>Key Activities:</h4>
                                <ul>
                                    <li>Activity 1 for ${step.title}</li>
                                    <li>Activity 2 for ${step.title}</li>
                                    <li>Activity 3 for ${step.title}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>
                `).join('')}
            </div>
        `;
    }
});
