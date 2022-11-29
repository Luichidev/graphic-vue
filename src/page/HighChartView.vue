<script setup>
import { Chart } from 'highcharts-vue'
const options = {
  chart: {
    type: 'spline',
  },
  legend: {
    enabled: false
  },
  series: [
    {
      name: 'Te escribieron',
      data: [45, 50, 48, 60, 100, 120, 110, 122, 150, 175, 200, null]
    },
    {
      name: 'Te llamaron',
      data: [45, 48, 55, 56, 85, 80, 83, 81, 145, 143, 140, null]
    },
    {
      name: 'Te han solicitado una cita',
      data: [50, 100, 90, 140, 88, 60, 100, 150, 145, 170, 180, null]
    }
  ],
  colors: ['#00056d', '#f75c70', '#477dc1'],
  lang: {
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b'
    },
    labels: {
      overflow: 'justify',
    },
    gridLineWidth: 2,
    alternateGridColor: '#D9EDF8',
  },
  yAxis: {
    gridLineWidth: 0,
  },
  plotOptions: {
    spline: {
      lineWidth: 3,
      states: {
        hover: {
          lineWidth: 4
        }
      },
    },
    marker: {
      enabled: false,
    },
    pointInterval: 3600000 * 24 * 7, // one hour
    pointStart: Date.UTC(2022, 0, 1, 0, 0, 0)
  }
}
</script>

<template>
  <div class='vuechart'>
    <Chart :options='options' ref='chart'></Chart>
  </div>
</template>

<style scoped>
.vuechart {
  min-width: 800px;
}
</style>
