import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'orders',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'order_id',
      title: 'Order ID',
      type: 'string',
    }),

    defineField({
      name: 'buyer',
      title: 'Buyer',
      description:
        'Information about the buyer, you can use this to contact them in case of anything',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
        }),
        defineField({
          name: 'email',
          type: 'string',
        }),
        defineField({
          name: 'address',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Buyer will get an email notification, if you change the status here',
      options: {
        list: [
          {
            title: 'Waiting for confirmation',
            value: 'confirmation',
          },
          {
            title: 'Processing',
            value: 'processed',
          },
          {
            title: 'Shipping',
            value: 'shipping',
          },
          {
            title: 'Shipped',
            value: 'shipped',
          },
          {
            title: 'Confirmation',
            value: 'confirmed',
          },
        ],
      },
    }),

    defineField({
      name: 'total',
      description: 'The amount paid before the paypal fee',
      title: 'Total',
      type: 'number',
    }),
    defineField({
      name: 'products_ordered',
      title: 'Products Ordered',
      type: 'array',
      of: [
        defineField({
          name: 'items',
          title: 'Items',
          type: 'object',
          fields: [
            {type: 'reference', name: 'item', to: [{type: 'products'}]},
            {type: 'number', name: 'quantity'},
          ],
        }),
      ],
    }),
  ],
})