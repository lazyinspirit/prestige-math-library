import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ITEM_ID = /^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Parse the opt-in `--items-file PATH` selector used by repo validators.
 * The file is a nonempty JSON array of canonical item IDs. With no selector,
 * callers retain their existing whole-corpus behavior.
 */
export function parseItemScope(argv) {
  const args = [...argv];
  const positions = args.flatMap((arg, index) => arg === '--items-file' ? [index] : []);
  if (positions.length > 1) throw new Error('--items-file may be specified once');
  if (!positions.length) return { selected: null, args };

  const index = positions[0];
  const path = args[index + 1];
  if (!path || path.startsWith('--')) throw new Error('--items-file requires a JSON file path');
  const selectionPath = resolve(process.cwd(), path);
  let ids;
  try { ids = JSON.parse(readFileSync(selectionPath, 'utf8')); }
  catch (error) { throw new Error(`cannot read item selection ${path}: ${error.message}`); }
  if (!Array.isArray(ids) || ids.length === 0 || ids.some(id => typeof id !== 'string' || !ITEM_ID.test(id)))
    throw new Error('item selection must be a nonempty JSON array of canonical item IDs');
  if (new Set(ids).size !== ids.length) throw new Error('item selection contains duplicate IDs');
  args.splice(index, 2);
  return { selected: new Set(ids), args, selectionPath };
}

export function includesItem(scope, id) {
  return scope.selected === null || scope.selected.has(id);
}

export function unknownItems(scope, knownIds) {
  if (scope.selected === null) return [];
  const known = knownIds instanceof Set ? knownIds : new Set(knownIds);
  return [...scope.selected].filter(id => !known.has(id)).sort();
}
