// Data Hafalan Keseluruhan Per Kelas
var dataHafalan = {
    kelas1: [
        { sub_kelas: 'A', pra_juz_amma: 25, juz_amma: 15, juz_1_30: 5 },
        { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'C', pra_juz_amma: 10, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
        { sub_kelas: 'E', pra_juz_amma: 40, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
        { sub_kelas: 'G', pra_juz_amma: 25, juz_amma: 25, juz_1_30: 10 },
        { sub_kelas: 'H', pra_juz_amma: 5, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 30 }
    ],
    kelas2: [
        { sub_kelas: 'A', pra_juz_amma: 25, juz_amma: 15, juz_1_30: 5 },
        { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'C', pra_juz_amma: 10, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
        { sub_kelas: 'E', pra_juz_amma: 40, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
        { sub_kelas: 'G', pra_juz_amma: 25, juz_amma: 25, juz_1_30: 10 },
        { sub_kelas: 'H', pra_juz_amma: 5, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 30 }
    ],
    kelas3: [
        { sub_kelas: 'A', pra_juz_amma: 25, juz_amma: 15, juz_1_30: 5 },
        { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'C', pra_juz_amma: 10, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
        { sub_kelas: 'E', pra_juz_amma: 40, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
        { sub_kelas: 'G', pra_juz_amma: 25, juz_amma: 25, juz_1_30: 10 },
        { sub_kelas: 'H', pra_juz_amma: 5, juz_amma: 10, juz_1_30: 10 },
        { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 30 }
    ]
};

// Warna dasar untuk setiap subkelas
const baseColors = [
    { r: 75, g: 192, b: 192 }, // A
    { r: 255, g: 99, b: 132 }, // B
    { r: 54, g: 162, b: 235 }, // C
    { r: 255, g: 206, b: 86 }, // D
    { r: 153, g: 102, b: 255 }, // E
    { r: 255, g: 159, b: 64 },  // F
    { r: 201, g: 203, b: 207 }, // G
    { r: 102, g: 255, b: 102 }, // H
    { r: 255, g: 102, b: 178 }  // I
];

// Fungsi untuk menghasilkan warna dengan transparansi
function generateColorsForClass(transparency) {
    return baseColors.map(color => {
        return {
            backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${transparency})`,
            borderColor: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`
        };
    });
}

// Fungsi untuk membuat data pie chart
function generatePieChartData(data, transparency) {
    var labels = [];
    var totalHafalan = [];
    var colors = generateColorsForClass(transparency);

    data.forEach(function(item, index) {
        labels.push(item.sub_kelas);
        // Total hafalan untuk setiap subkelas
        var total = item.pra_juz_amma + item.juz_amma + item.juz_1_30;
        totalHafalan.push(total);
    });

    return {
        labels: labels,
        datasets: [
            {
                label: 'Total Hafalan',
                data: totalHafalan,
                backgroundColor: colors.map(c => c.backgroundColor),
                borderColor: colors.map(c => c.borderColor),
                borderWidth: 3
            }
        ]
    };
}

// Render pie chart untuk kelas 1 (transparansi 0.3)
var ctx1 = document.getElementById('chartKelas1').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut',
    data: generatePieChartData(dataHafalan.kelas1, 0.5),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});

// Render pie chart untuk kelas 2 (transparansi 0.5)
var ctx2 = document.getElementById('chartKelas2').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: generatePieChartData(dataHafalan.kelas2, 0.7),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});

// Render pie chart untuk kelas 3 (transparansi 0.7)
var ctx3 = document.getElementById('chartKelas3').getContext('2d');
new Chart(ctx3, {
    type: 'doughnut',
    data: generatePieChartData(dataHafalan.kelas3, 1),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});


// Render pie chart untuk kelas 1 (transparansi 0.3)
var ctx1 = document.getElementById('Kelas1').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: generatePieChartData(dataHafalan.kelas1, 0.5),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});

// Render pie chart untuk kelas 2 (transparansi 0.5)
var ctx2 = document.getElementById('Kelas2').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: generatePieChartData(dataHafalan.kelas2, 0.7),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});

// Render pie chart untuk kelas 3 (transparansi 0.7)
var ctx3 = document.getElementById('Kelas3').getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: generatePieChartData(dataHafalan.kelas3, 1),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});



// Render pie chart untuk kelas 1 (transparansi 0.3)
var ctx1 = document.getElementById('bulanKelas1').getContext('2d');
new Chart(ctx1, {
    type: 'polarArea',
    data: generatePieChartData(dataHafalan.kelas1, 0.2),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});

// Render pie chart untuk kelas 2 (transparansi 0.5)
var ctx2 = document.getElementById('bulanKelas2').getContext('2d');
new Chart(ctx2, {
    type: 'polarArea',
    data: generatePieChartData(dataHafalan.kelas2, 0.2),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});

// Render pie chart untuk kelas 3 (transparansi 0.7)
var ctx3 = document.getElementById('bulanKelas3').getContext('2d');
new Chart(ctx3, {
    type: 'polarArea',
    data: generatePieChartData(dataHafalan.kelas3, 0.2),
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: false
                }
            }
        }
    }
});
