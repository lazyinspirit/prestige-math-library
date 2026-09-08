// An unresolved 6b decision is an owner hold, never an automatic repair retry.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export function step6Escalations(root, run) {
  const dir = join(root, 'research');
  if (!existsSync(dir)) return [];
  const holds = [];
  for (const name of readdirSync(dir)) {
    if (!name.startsWith(`${run}-alpha-`) || !name.endsWith('-6b-decisions.json')) continue;
    let doc;
    try { doc = JSON.parse(readFileSync(join(dir, name), 'utf8')); }
    catch { continue; } // The routing validator owns malformed JSON.
    for (const row of Array.isArray(doc.decisions) ? doc.decisions : []) {
      if (row?.verdict === 'escalated'
        || (row?.repair_confidence !== undefined && row.repair_confidence !== 1)) {
        holds.push(`${name}: ${row.obligation ?? row.id ?? 'unnamed item'} — ${row.evidence || 'repair confidence is below 100%'}`);
      }
    }
  }
  return holds;
}
