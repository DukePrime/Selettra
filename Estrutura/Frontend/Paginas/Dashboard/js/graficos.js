
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("chartjs-dashboard-line").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, "rgba(166, 3, 33, 0.30)");
    gradient.addColorStop(1, "rgba(166, 3, 33, 0)");
    // Grafico Colaboradores por Setor
    new Chart(document.getElementById("chartjs-dashboard-line"), {
        type: "line",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                label: "Colaboradores",
                fill: true,
                backgroundColor: gradient,
                borderColor: "rgba(166, 3, 33, 1)",
                data: [
                    2115,
                    1562,
                    1584,
                    1892,
                    1587,
                    1923,
                    2566,
                    2448,
                    2805,
                    3438,
                    2917,
                    3327
                ]
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                intersect: false
            },
            hover: {
                intersect: true
            },
            plugins: {
                filler: {
                    propagate: false
                }
            },
            scales: {
                xAxes: [{
                    reverse: true,
                    gridLines: {
                        color: "rgba(0,0,0,0.0)"
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 1000
                    },
                    display: true,
                    borderDash: [3, 3],
                    gridLines: {
                        color: "rgba(0,0,0,0.0)"
                    }
                }]
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Colaboradores por Setores
    new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: "pie",
        data: {
            labels: ["RH", "Financeiro", "SGI", "Suprimentos", "Almoxarifado", "Comercial", "Engenharia", "Operações", "PCP", "Fabrica"],
            datasets: [{
                data: [23, 43, 12, 54, 21, 34, 54, 12, 32, 72],
                backgroundColor: [
                    'rgb(128,0,128)',
                    'rgb(0,128,0)',
                    'rgba(0, 0, 0)',
                    'rgba(255,69,0)',
                    'rgba(135,206,250)',
                    'rgb(166, 3, 33)',
                    'rgb(0, 0, 225)',
                    'rgba(218,165,32)',
                    'rgba(139,69,19)',
                    'rgba(128, 128, 128)'
                ],
                borderWidth: 5
            }],
        },

        options: {
            responsive: !window.MSInputMethodContext,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    var defaultDate = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
    document.getElementById("datetimepicker-dashboard").flatpickr({
        inline: true,
        prevArrow: "<span title=\"Previous month\">&laquo;</span>",
        nextArrow: "<span title=\"Next month\">&raquo;</span>",
        defaultDate: defaultDate
    });
});
