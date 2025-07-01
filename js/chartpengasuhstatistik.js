        // Data Hafalan Keseluruhan Per Kelas
        var dataHafalan = {
            kelas1: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ],
            kelas2: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ],
            kelas3: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ]
        };

        function generateChartData(data) {
            var labels = [];
            var praJuzAmma = [];
            var juzAmma = [];
            var juz1_30 = [];

            data.forEach(function(item) {
                labels.push("Kelas " + item.sub_kelas);
                praJuzAmma.push(item.pra_juz_amma);
                juzAmma.push(item.juz_amma);
                juz1_30.push(item.juz_1_30);
            });

            return {
                labels: labels,
                datasets: [
                    {
                        label: 'Pra Juz Amma',
                        data: praJuzAmma,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Juz Amma',
                        data: juzAmma,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Juz 1-30',
                        data: juz1_30,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            };
        }

        // Kelas 1
        var ctx1 = document.getElementById('chartKelas1').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas1),
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Kelas 2
        var ctx2 = document.getElementById('chartKelas2').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas2),
            options: {
              responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Kelas 3
        var ctx3 = document.getElementById('chartKelas3').getContext('2d');
        new Chart(ctx3, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas3),
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Data Hafalan Laki-laki Per Kelas
        var dataHafalan = {
            kelas1: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ],
            kelas2: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ],
            kelas3: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ]
        };

        function generateChartData(data) {
            var labels = [];
            var praJuzAmma = [];
            var juzAmma = [];
            var juz1_30 = [];

            data.forEach(function(item) {
                labels.push("Kelas " + item.sub_kelas);
                praJuzAmma.push(item.pra_juz_amma);
                juzAmma.push(item.juz_amma);
                juz1_30.push(item.juz_1_30);
            });

            return {
                labels: labels,
                datasets: [
                    {
                        label: 'Pra Juz Amma',
                        data: praJuzAmma,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Juz Amma',
                        data: juzAmma,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Juz 1-30',
                        data: juz1_30,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            };
        }

        // Kelas 1
        var ctx1 = document.getElementById('chartKelas1lk').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas1),
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Kelas 2
        var ctx2 = document.getElementById('chartKelas2lk').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas2),
            options: {
              responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Kelas 3
        var ctx3 = document.getElementById('chartKelas3lk').getContext('2d');
        new Chart(ctx3, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas3),
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

                // Data Hafalan Perempuan Per Kelas
        var dataHafalan = {
            kelas1: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ],
            kelas2: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ],
            kelas3: [
                { sub_kelas: 'A', pra_juz_amma: 20, juz_amma: 15, juz_1_30: 5 },
                { sub_kelas: 'B', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'C', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'D', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'E', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'F', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'G', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'H', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                { sub_kelas: 'I', pra_juz_amma: 20, juz_amma: 20, juz_1_30: 10 },
                // ...sub_kelas C-I
            ]
        };

        function generateChartData(data) {
            var labels = [];
            var praJuzAmma = [];
            var juzAmma = [];
            var juz1_30 = [];

            data.forEach(function(item) {
                labels.push("Kelas " + item.sub_kelas);
                praJuzAmma.push(item.pra_juz_amma);
                juzAmma.push(item.juz_amma);
                juz1_30.push(item.juz_1_30);
            });

            return {
                labels: labels,
                datasets: [
                    {
                        label: 'Pra Juz Amma',
                        data: praJuzAmma,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Juz Amma',
                        data: juzAmma,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Juz 1-30',
                        data: juz1_30,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            };
        }

        // Kelas 1
        var ctx1 = document.getElementById('chartKelas1pr').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas1),
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Kelas 2
        var ctx2 = document.getElementById('chartKelas2pr').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas2),
            options: {
              responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Kelas 3
        var ctx3 = document.getElementById('chartKelas3pr').getContext('2d');
        new Chart(ctx3, {
            type: 'bar',
            data: generateChartData(dataHafalan.kelas3),
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


    

    // Konfigurasi chart
    const config = {
        type: 'bar', // jenis chart (garis)
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true // mulai dari 0
                }
            }
        }
    };

    // Render chart ke elemen canvas
    const hafalanChart = new Chart(
        document.getElementById('hafalanChart'),
        config
    );

    const labelskelas = ['Kelas A', 'Kelas B', 'Kelas C'];
    const sublabelskelas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
