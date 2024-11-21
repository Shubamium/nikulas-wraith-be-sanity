import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Product List',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      description: 'Price in paypal format: 20.00 ',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'stock',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
