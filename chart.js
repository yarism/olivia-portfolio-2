Highcharts.chart('chart', {
    chart: {
        type: 'column',
        backgroundColor: null
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['Kassör i styrelse', 'Aktier', 'Sushi lover', 'Jobb efter studier', 'Jobb före studier']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'År'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
    },
    series: [{
        data: [2, 3, 4, 3, 7]        
    }],
    credits: {
        enabled: false
    },
});