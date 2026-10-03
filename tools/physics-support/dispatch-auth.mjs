import { readFileSync, writeFileSync, renameSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { withReceiptLock } from '../physics-autopilot/src/receipt-lock.mjs';

// An isolated Codex session may refresh its copy of the OAuth token. A late
// session must never overwrite a newer login or another session's rotation.
export function persistRotatedCodexAuth({ source, temporary, initial, succeeded }) {
  if (!succeeded || !initial) return false;
  let after;
  try { after = readFileSync(temporary); } catch { return false; }
  if (after.equals(initial)) return false;
  return withReceiptLock(source, () => {
    let current;
    try { current = readFileSync(source); } catch { return false; }
    if (!current.equals(initial)) return false;
    const replacement = join(dirname(source), `.auth-${randomUUID()}.tmp`);
    try {
      writeFileSync(replacement, after, { mode: 0o600, flag: 'wx' });
      renameSync(replacement, source);
      return true;
    } finally {
      rmSync(replacement, { force: true });
    }
  });
}
