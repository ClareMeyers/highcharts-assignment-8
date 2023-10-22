/* --- CHART 1 --- */
Highcharts.chart('wages_chart', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Median Annual Wages From The Past Three Years'
    },
    xAxis: {
        categories: ['2020', '2021', '2022']
    },
    yAxis: {
        title: {
            text: 'Wage'
        }
    },
    series: [{
        name: 'News Analysts, Reporters, and Journalists',
        data: [49300, 43370, 55960]
    }, {
        name: 'Public Relations Specialists',
        data: [62810, 62800, 67440]
    }]
});

/* --- CHART 2 --- */
Highcharts.chart('employment', {

    title: {
      text: 'Employment Over Time',
      align: 'left'
    },
  
    subtitle: {
      text: 'By Job Category. Source: <a href="https://www.bls.gov/oes/tables.htm" target="_blank">US Bureau of Labor Statistics</a>.',
      align: 'left'
    },
  
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2016, 2018, 2020, 2022' 
      },
      categories: ['2016', '2018', '2020', '2022'] 
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
      }
    },
  
    series: [{
      name: 'News Analysts, Reporters, and Journalists',
      data: [45160, 43030, 41580, 44530]
    }, {
      name: 'Public Relations Specialists',
      data: [226940, 239030, 244550, 264750]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  });
  