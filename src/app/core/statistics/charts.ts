declare let d3, nv: any;


export const options = {
  pieChart: {
    chart: {
      type: 'pieChart',
      x: function (d) {
        return d.key;
      },
      y: function (d) {
        return d.value;
      },
      showLabels: true,
      labelType: 'percent',
      labelThreshold: 0.01,
      labelSunbeamLayout: false,
      duration: 100,
      // legend: {
      //   margin: {
      //     top: 10,
      //     right: 15,
      //     bottom: 5,
      //     left: 0
      //   }
      // }
    }
  }
  ,
  multiBarChart: {
    chart: {
      type: 'multiBarChart',
      stacked: false,
      margin: {
        top: 75,
        bottom: 75,
        left: 75
      },
      x: (d) => d[0],
      y: (d) => d[1],
      xAxis: {
        axisLabel: 'Innhøsting',
        tickFormat: function (d) {
          return d3.time.format('%e.%m.%Y')(
            new Date(d)
          );
        }
      },
      yAxis: {
        axisLabel: 'Antall tekster' +
        '',
        tickFormat: function (d) {
          return d3.format(',f')(d);
        },
        axisLabelDistance: 12
      },
    }
  },
};
