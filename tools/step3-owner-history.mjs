// Preserve the actual current owner receipt before replacement. This API reads
// only the canonical current file; it cannot register invented past evidence.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { join, sep } from 'node:path';

const safe = value => {
  if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid run or item ID');
  return value;
};
const digest = row => createHash('sha256').update(JSON.stringify(row)).digest('hex');
const currentPath = (root, run, id) => join(root, 'research', `${safe(run)}-step3b-owner-${safe(id)}.json`);
export const step3OwnerHistoryPath = (root, run, id, hash) => {
  if (!/^[a-f0-9]{64}$/.test(hash ?? '')) throw Error('Invalid owner history digest');
  return join(root, 'research', `${safe(run)}-step3b-owner-history-${safe(id)}`, `${hash}.json`);
};
function validate(row, run, id) {
  if (row.version !== 1 || row.run !== run || row.phase !== 'item' || row.target !== id || row.owner !== true
    || !['repaired', 'hold', 'reopen'].includes(row.decision) || !Array.isArray(row.dependencies)
    || row.dependencies.some(value => typeof value !== 'string') || !/^[a-f0-9]{64}$/.test(row.sha256 ?? '')
    || !String(row.reason ?? '').trim() || !Number.isFinite(Date.parse(row.at)))
    throw Error(`${id}: invalid owner receipt for history`);
  return row;
}
export function preserveStep3OwnerReceipt(root, run, id) {
  const current = currentPath(root, run, id);
  if (!existsSync(current)) return null;
  const bytes = readFileSync(current), row = validate(JSON.parse(bytes.toString()), run, id);
  const path = step3OwnerHistoryPath(root, run, id, digest(row));
  mkdirSync(join(path, '..'), { recursive: true });
  const research = realpathSync(join(root, 'research')) + sep;
  if (!realpathSync(join(path, '..')).startsWith(research)) throw Error('Owner receipt history must stay inside research');
  if (existsSync(path)) {
    if (!readFileSync(path).equals(bytes)) throw Error(`${id}: refusing to replace immutable owner receipt history`);
  } else writeFileSync(path, bytes, { flag: 'wx' });
  return path;
}
export function historicalStep3OwnerReceipt(root, run, id, marker) {
  if (!/^[a-f0-9]{64}$/.test(marker?.sha256 ?? '')) return null;
  const current = currentPath(root, run, id);
  // Prefer the current receipt only when it is exactly the certificate's old
  // marker; a newer repaired decision never impersonates historical evidence.
  if (existsSync(current)) {
    const row = validate(JSON.parse(readFileSync(current, 'utf8')), run, id);
    if (digest(row) === marker.sha256 && row.at === marker.at) return row;
  }
  const path = step3OwnerHistoryPath(root, run, id, marker.sha256);
  if (!existsSync(path)) return null;
  if (!realpathSync(path).startsWith(realpathSync(join(root, 'research')) + sep))
    throw Error('Owner receipt history must stay inside research');
  const row = validate(JSON.parse(readFileSync(path, 'utf8')), run, id);
  if (digest(row) !== marker.sha256 || row.at !== marker.at) throw Error(`${id}: invalid historical owner receipt digest`);
  return row;
}
