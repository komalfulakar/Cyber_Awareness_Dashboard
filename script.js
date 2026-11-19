// Total survey statistics
document.getElementById("totalRespondents").textContent = "16";
document.getElementById("totalInstitutions").textContent = "3";
document.getElementById("trainingRequired").textContent = "25%";
document.getElementById("digitalUsers").textContent = "100%";


// Chart 1: Digital Technology Usage
new Chart(document.getElementById("technologyChart"), {
    type: "bar",

    data: {
        labels: [
            "Daily",
            "3 Times a Week",
            "Occasionally",
            "Rarely"
        ],

        datasets: [{
            label: "Number of Academicians",
            data: [11, 1, 2, 2],
            backgroundColor: "#38bdf8",
            borderRadius: 6
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Responses: 16"
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});


// Chart 2: Cybersecurity Confidence
new Chart(document.getElementById("confidenceChart"), {
    type: "doughnut",

    data: {
        labels: [
            "Very Confident",
            "Somewhat Confident",
            "Not Confident",
            "Need Training",
            "Multiple Selections"
        ],

        datasets: [{
            data: [2, 12, 0, 1, 1],

            backgroundColor: [
                "#2563eb",
                "#38bdf8",
                "#94a3b8",
                "#ef4444",
                "#a78bfa"
            ]
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Responses: 16"
            }
        }
    }
});


// Chart 3: Cybersecurity Training Experience
new Chart(document.getElementById("trainingChart"), {
    type: "pie",

    data: {
        labels: [
            "Recently Trained",
            "Trained Long Ago",
            "Awareness Sessions Only",
            "Never Trained"
        ],

        datasets: [{
            data: [1, 8, 3, 4],

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
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Responses: 16"
            }
        }
    }
});


// Chart 4: Preferred Cybersecurity Training Topics
new Chart(document.getElementById("topicsChart"), {
    type: "bar",

    data: {
        labels: [
            "Basic Cyber Security",
            "Safe Internet and Email",
            "Phishing Prevention",
            "Mobile and Computer Security",
            "Data Privacy",
            "Cybercrime Reporting",
            "AI Safety",
            "Digital Forensics"
        ],

        datasets: [{
            label: "Number of Selections",
            data: [13, 14, 7, 8, 4, 5, 6, 2],
            backgroundColor: "#0ea5e9",
            borderRadius: 6
        }]
    },

    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            title: {
                display: true,
                text: "Total Respondents: 16"
            }
        },

        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});