const EntrySchema = {
  name: 'Entry',
  primaryKey: 'id',
  properties: {
    id: 'string',
    category: 'Category',
    description: 'string?',
    entryAt: 'date',
    latitude: 'float?',
    longitude: 'float?',
    address: 'string?',
    photo: 'string?',
    isInit: 'bool',
  },
};

export default EntrySchema;
