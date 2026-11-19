// Check whether the Chart.js library is loaded
if (typeof Chart !== "undefined") {

    // 1. Digital Technology Usage
    const technologyCanvas = document.getElementById("technologyChart");

    if (technologyCanvas) {
        new Chart(technologyCanvas, {
            type: "bar",

            data: {
                labels: ["Daily", "3 Times/Week", "Occasionally", "Rarely"],

                datasets: [{
                    label: "Illustrative responses",
                    data: [60, 20, 15, 5],
                    backgroundColor: "#38bdf8",
                    borderRadius: 6
                }]
            },

            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Preview only – sample figures, not survey results"
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }


    // 2. Cybersecurity Confidence
    const confidenceCanvas = document.getElementById("confidenceChart");

    if (confidenceCanvas) {
        new Chart(confidenceCanvas, {
            type: "doughnut",

            data: {
                labels: [
                    "Very Confident",
                    "Somewhat Confident",
                    "Not Confident",
                    "Need Training"
                ],

                datasets: [{
                    data: [20, 35, 25, 20],
                    backgroundColor: [
                        "#2563eb",
                        "#38bdf8",
                        "#f59e0b",
                        "#ef4444"
                    ]
                }]
            },

            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Preview only – sample figures, not survey results"
                    }
                }
            }
        });
    }


    // 3. Cybersecurity Training Experience
    const trainingCanvas = document.getElementById("trainingChart");

    if (trainingCanvas) {
        new Chart(trainingCanvas, {
            type: "pie",

            data: {
                labels: [
                    "Recently Trained",
                    "Trained Long Ago",
                    "Awareness Sessions Only",
                    "Never Trained"
                ],

                datasets: [{
                    data: [15, 20, 25, 40],
                    backgroundColor: [
                        "#16a34a",
                        "#2563eb",
                        "#f59e0b",
                        "#ef4444"
                    ]
                }]
            },

            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Preview only – sample figures, not survey results"
                    }
                }
            }
        });
    }


    // 4. Preferred Cybersecurity Training Topics
    const topicsCanvas = document.getElementById("topicsChart");

    if (topicsCanvas) {
        new Chart(topicsCanvas, {
            type: "bar",

            data: {
                labels: [
                    "Basic Cyber Security",
                    "Safe Internet & Email",
                    "Phishing Prevention",
                    "Device Security",
                    "Data Privacy",
                    "Cybercrime Reporting",
                    "AI Safety",
                    "Digital Forensics"
                ],

                datasets: [{
                    label: "Illustrative selections",
                    data: [70, 65, 80, 55, 60, 45, 50, 30],
                    backgroundColor: "#0ea5e9",
                    borderRadius: 6
                }]
            },

            options: {
                indexAxis: "y",
                responsive: true,

                plugins: {
                    title: {
                        display: true,
                        text: "Preview only – sample figures, not survey results"
                    }
                },

                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

} else {
    console.error("Chart.js could not be loaded.");
}