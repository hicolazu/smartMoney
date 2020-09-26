/**
 * RealmDB - Offline Database
 * Tables -> Schemas
 * Schemas: name, primaryKey, foreignKey, properties
 */

import Realm from 'realm';

import EntrySchema from '../schemas/EntrySchema';
import CategorySchema from '../schemas/CategorySchemas';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [EntrySchema, CategorySchema],
    schemaVersion: 1,
  });

  return realm;
};
