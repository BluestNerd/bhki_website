// Workshop participation chart
document.addEventListener('DOMContentLoaded', function() {
    // Workshop motivations chart
    const workshopCtx = document.getElementById('workshopChart').getContext('2d');
    const workshopChart = new Chart(workshopCtx, {
        type: 'bar',
        data: {
            labels: [
                'Learn new skills', 
                'Refresh skills', 
                'Apply to current work', 
                'Apply to future work', 
                'Get job/promotion', 
                'Program requirement'
            ],
            datasets: [{
                label: 'Workshop Participation Motivations (%)',
                data: [73.3, 46.7, 60, 53.3, 26.7, 13.3],
                backgroundColor: [
                    '#2c5e1a',
                    '#4a8c2a',
                    '#6bbd46',
                    '#8fd475',
                    '#b0e6a2',
                    '#d0f0c0'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage of Participants'
                    }
                }
            }
        }
    });

    // Add more charts as needed for other data visualizations
});
