<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Product',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Customer ID', value: 'cutomer' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Cost ( Naira )', value: 'cost' },
          { text: 'Date', value: 'date' },
        ],
        desserts: [
          {
            name: 'Yogurt',
            cutomer: 159,
            quantity: 60,
            cost: 3000,
            date: '01-01-2022',
          },
          {
            name: 'Ice cream',
            cutomer: 237,
            quantity: 90,
            cost: 9200,
            date: '01-01-2022',
          },
          {
            name: 'Cupcake',
            cutomer: 305,
            quantity: 33,
            cost: 1500,
            date: '01-01-2022',
          },
          {
            name: 'Gingerbread',
            cutomer: 356,
            quantity: 116,
            cost: 6500,
            date: '01-01-2022',
          },
          {
            name: 'Jelly bean',
            cutomer: 375,
            quantity: 28,
            cost: 400,
            date: '01-01-2022',
          },
          {
            name: 'Lollipop',
            cutomer: 392,
            quantity: 20,
            cost: 2000,
            date: '01-01-2022',
          },
          {
            name: 'Honeycomb',
            cutomer: 408,
            quantity: 32,
            cost: 3200,
            date: '01-01-2022',
          },
          {
            name: 'Donut',
            cutomer: 452,
            quantity: 25,
            cost: 625,
            date: '01-01-2022',
          },
          {
            name: 'KitKat',
            cutomer: 518,
            quantity: 26,
            cost: 2600,
            date: '01-01-2022',
          },
        ],
      }
    },
  }
</script>