<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// tickPlacement: 'between',

/*
const options = {
  chart: {
    zoom: {
      enabled: false,
    }
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#00056d', '#f75c70', '#477dc1'],
  stroke: {
    width: [3, 3, 3],
    curve: 'straight',
    dashArray: [0, 5, 0],
  },
  grid: {
    column: {
      colors: ['#D9EDF8', 'transparent'],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  }
}
const series = [
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
]
*/

const series = [
  {
    name: 'Valor máximo',
    type: 'column',
    data: [240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240]
  },
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
]

const options = {
  chart: {
    zoom: {
      enabled: false,
    }
  },
  legend: {
    show: false,
  },
  stroke: {
    width: [0, 4, 3, 3]
  },
  colors: ['#D9EDF8', '#00056d', '#f75c70', '#477dc1'],
  labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022'],
  xaxis: {
    type: 'datetime',
    labels: {
      format: "MMM",
      // formatter: function (value, timestamp) {
      //   return new Date(timestamp).toLocaleString('es-ES')
      // }
    },

  },
}


</script>

<template>
  <div>
    <div class="apexchart-graphic">
      <apexchart height="550" type="line" :options="options" :series="series"></apexchart>
    </div>
    <div class="apexchart-pie"></div>
  </div>
</template>

<style scoped>
.apexchart-graphic {
  min-width: 1200px;
}
</style>
