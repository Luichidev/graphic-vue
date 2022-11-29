<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// tickPlacement: 'between',

const options = {
  chart: {
    zoom: {
      enabled: false,
    },
    locales: [
      {
        name: 'es',
        options: {
          months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
          shortDays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'],
        }
      }
    ],
    defaultLocale: 'es',
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
  labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022'],
  xaxis: {
    type: 'datetime',
    labels: {
      format: "MMM",
    },
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
