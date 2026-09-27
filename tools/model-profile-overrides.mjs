// A run-local provider outage may require a different registered profile.
// Keep the stage's requested profile and the dispatch's effective profile
// distinct so result receipts show the substitution.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { modelProfile } from './models.mjs';

export function resolveDispatchProfile(root, run, requested) {
  if (!requested) return { requested, effective: requested };
  if (!/^[A-Za-z0-9._-]+$/.test(run)) throw Error('Invalid run name');
  modelProfile(requested);
  const path = join(root, '.autopilot', `${run}.profile-overrides.json`);
  if (!existsSync(path)) return { requested, effective: requested };
  const data = JSON.parse(readFileSync(path, 'utf8'));
  if (data?.version !== 1 || !data.profiles || typeof data.profiles !== 'object'
      || Array.isArray(data.profiles)) throw Error(`Invalid profile override file: ${path}`);
  const effective = data.profiles[requested] ?? requested;
  if (typeof effective !== 'string') throw Error(`Invalid profile override for ${requested}`);
  modelProfile(effective);
  return { requested, effective };
}
