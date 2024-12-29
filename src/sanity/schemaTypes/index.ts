import { type SchemaTypeDefinition } from 'sanity'
import { author } from '../author'
import { product } from '../post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,author],
}
