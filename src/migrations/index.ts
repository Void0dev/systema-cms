import * as migration_20240831_094937_initial from './20240831_094937_initial';
import * as migration_20241014_085848_update_v3_0_0_beta_113 from './20241014_085848_update_v3_0_0_beta_113';
import * as migration_20241120_133552_payload_v3_production from './20241120_133552_payload_v3_production';
import * as migration_20241122_141949_update_v3_0_2_production from './20241122_141949_update_v3_0_2_production';

export const migrations = [
  {
    up: migration_20240831_094937_initial.up,
    down: migration_20240831_094937_initial.down,
    name: '20240831_094937_initial',
  },
  {
    up: migration_20241014_085848_update_v3_0_0_beta_113.up,
    down: migration_20241014_085848_update_v3_0_0_beta_113.down,
    name: '20241014_085848_update_v3_0_0_beta_113',
  },
  {
    up: migration_20241120_133552_payload_v3_production.up,
    down: migration_20241120_133552_payload_v3_production.down,
    name: '20241120_133552_payload_v3_production',
  },
  {
    up: migration_20241122_141949_update_v3_0_2_production.up,
    down: migration_20241122_141949_update_v3_0_2_production.down,
    name: '20241122_141949_update_v3_0_2_production'
  },
];
