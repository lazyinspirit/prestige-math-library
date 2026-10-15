// Read-only quantum supplier policy diagnostic; never proof acceptance.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { yaml, split } from '../../tools/pathway-lib.mjs';
import { frontierGateScope } from '../../tools/frontier-gate-scope.mjs';

const run = 'quantum-prerequisites-4-2026-10-15';
const root = process.cwd();
const scope = frontierGateScope({ repo: root, run });
const nodes = new Map(), aliases = new Map(), errors = [], active = new Set(), seen = new Set();
let unparsedContext = 0;
for (const file of readdirSync(resolve(root, 'items')).filter(f => f.endsWith('.md'))) {
  let row;
  try { row = yaml().parse(split(readFileSync(resolve(root, 'items', file), 'utf8')).fm); }
  catch (error) {
    if (scope.items.has(file.slice(0, -3))) throw error;
    unparsedContext++;
    continue;
  }
  if (!row?.id) continue;
  nodes.set(row.id, row);
  for (const alias of row.aliases ?? []) {
    const ids = aliases.get(alias) ?? new Set();
    ids.add(row.id); aliases.set(alias, ids);
  }
}
const forbidden = new Set(['remark', 'open-problem', 'physics-theorem', 'postulate', 'experiment', 'observation']);
function visit(raw, supplier = false) {
  const candidates = nodes.has(raw) ? new Set([raw]) : aliases.get(raw);
  if (!candidates?.size) { errors.push({ code: 'unresolved', id: raw }); return; }
  if (candidates.size !== 1) { errors.push({ code: 'ambiguous-alias', id: raw }); return; }
  const id = [...candidates][0], row = nodes.get(id);
  if (supplier && (forbidden.has(row.kind) || /^(pthm-|post-|texp-|obs-)/.test(id))) {
    errors.push({ code: 'forbidden-logical-supplier', id, kind: row.kind });
  }
  if (active.has(id)) { errors.push({ code: 'logical-cycle', id }); return; }
  if (seen.has(id)) return;
  seen.add(id); active.add(id);
  if (row.deps === undefined && !scope.items.has(id)) {
    // Legacy context may omit an empty array; it gains no new formatting duty.
  } else if (!Array.isArray(row.deps)) errors.push({ code: 'invalid-dependency-array', id });
  else for (const dep of row.deps) visit(dep, true);
  active.delete(id);
}
for (const id of scope.items) visit(id);
console.log(JSON.stringify({
  run, scope: 'Actual nonempty current native manifests and transitive logical suppliers; source policy only, not proof validity or native gate coverage.',
  roots: scope.items.size, reachable: seen.size, unparsed_unrelated_context_files: unparsedContext,
  status: errors.length ? 'fail' : 'pass', errors,
}, null, 2));
process.exitCode = errors.length ? 1 : 0;
