<template>
  <v-data-table
    :headers="headers"
    :items="names"
    sort-by="quantity"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Products</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Add Product
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.quantity"
                      label="Quantity"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.sold"
                      label="Sold "
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.available"
                      label="Available "
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      label="Price "
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6">Are you sure you want to delete this product?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

  // <v-row justify="center" align="center">
  //   <v-col cols="12">
  //     <fieldset>
  //       <legend>add</legend>
  //       <v-text-field
  //           label="Filled"
  //           placeholder="Dense & Rounded"
  //           filled
  //           dense
  //         ></v-text-field>
  //         <v-text-field
  //           label="Filled"
  //           placeholder="Dense & Rounded"
  //           filled
  //           dense
  //         ></v-text-field>
  //     </fieldset>
  //   </v-col>
  // </v-row>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Sold ', value: 'sold' },
        { text: 'Available ', value: 'available' },
        { text: 'Price ', value: 'price' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      names: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        quantity: 0,
        sold: 0,
        available: 0,
        price: 0,
      },
      defaultItem: {
        name: '',
        quantity: 0,
        sold: 0,
        available: 0,
        price: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add New Product' : 'Update Product'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.names = [
          {
            name: 'Yogurt',
            quantity: 159,
            sold: 39,
            available: 120,
            price: 4.0,
          },
          {
            name: 'Ice cream',
            quantity: 237,
            sold: 137,
            available: 100,
            price: 4.3,
          },
          {
            name: 'Cupcake',
            quantity: 305,
            sold: 299,
            available: 6,
            price: 4.3,
          },
          {
            name: 'Gingerbread',
            quantity: 356,
            sold: 300,
            available: 56,
            price: 3.9,
          },
          {
            name: 'Jelly bean',
            quantity: 375,
            sold: 150,
            available: 225,
            price: 12.0,
          },
          {
            name: 'Lollipop',
            quantity: 392,
            sold: 91,
            available: 301,
            price: 9.0,
          },
          {
            name: 'Honeycomb',
            quantity: 408,
            sold: 200,
            available: 208,
            price: 6.5,
          },
          {
            name: 'Donut',
            quantity: 452,
            sold: 402,
            available: 50,
            price: 4.9,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.names.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.names.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.names.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.names[this.editedIndex], this.editedItem)
        } else {
          this.names.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>