// DRAFT. Explicit root-adopted contract operations only; never source editing,
// boundary-review rebinding, readiness, acceptance, numeric metadata or gates.
import { readFileSync, writeFileSync, mkdirSync, renameSync, lstatSync, realpathSync } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import { isDeepStrictEqual as same } from 'node:util';
const here = dirname(fileURLToPath(import.meta.url)), root = resolve(here, '../..');
const argv = process.argv.slice(2), apply = argv.includes('--apply');
const assert = (condition, message) => { if (!condition) throw Error(message); };
assert(argv.includes('--stage') !== apply, 'Use --stage OR --apply --root-reviewed --writers-drained');
if (apply) for (const flag of ['--root-reviewed', '--writers-drained']) assert(argv.includes(flag), `Root must explicitly attest ${flag}`);
const plan = JSON.parse(readFileSync(join(here, 'root-contract-integration-plan.json')));
assert(plan.version === 1 && plan.run === 'fluid-dynamics-all-47-2026-10-23', 'Wrong draft run');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
function guarded(path) {
  const full = resolve(root, path);
  assert(!relative(root, full).startsWith('..') && lstatSync(full).isFile() && realpathSync(full) === full, `Not regular/local: ${path}`);
  const bytes = readFileSync(full); assert(hash(bytes) === plan.preimage_guards[path], `Stale draft input: ${path}; no automatic rebinding`); return bytes;
}
for (const path of Object.keys(plan.preimage_guards)) guarded(path);
const before = new Map(plan.contract_files.map(path => [path, JSON.parse(guarded(path))]));
const staged = new Map([...before].map(([path, doc]) => [path, structuredClone(doc)]));
const selected = new Set(plan.approved_operation_ids ?? []);
assert(selected.size === (plan.approved_operation_ids ?? []).length, 'Duplicate approved operation');
for (const id of selected) assert(plan.operations.some(op => op.id === id), `Unknown adopted operation ${id}`);
if (apply) assert(selected.size > 0, 'Root must explicitly populate approved_operation_ids after actual scientific/mechanical review');
for (const op of plan.operations) {
  if (!selected.has(op.id)) continue;
  assert(before.has(op.file), `Outside contract file ${op.file}`);
  const doc = staged.get(op.file);
  if (op.kind === 'replace-existing-field') {
    assert(['citations', 'derivations', 'routine_steps', 'supplier_excerpts'].includes(op.field), 'Historical review fields cannot be replaced');
    assert(doc.contracts[op.item] && same(doc.contracts[op.item][op.field], op.before), `Field preimage changed: ${op.id}`);
    doc.contracts[op.item][op.field] = structuredClone(op.after);
  } else if (op.kind === 'add-new-corollary-contract') {
    assert(op.item === 'cor-fd-uq-observable-budget-guarantees' && op.file.endsWith('-batch-33.proof-contracts.json'), 'Only approved new corollary may be added');
    assert(!doc.contracts[op.item] && !doc.scope.includes(op.item), 'New contract already present');
    assert(op.after && !op.after.physics_review && op.after.boundaries?.length === 8, 'New worksheet shape');
    assert(!JSON.stringify(op.after).includes('template_review'), 'No invented template review on the new worksheet');
    doc.contracts[op.item] = structuredClone(op.after);
    const index = doc.scope.indexOf('alg-fd-uq-observable-budget'); assert(index >= 0, 'Algorithm absent from current scope');
    doc.scope.splice(index + 1, 0, op.item);
  } else throw Error(`Unsupported operation ${op.kind}`);
}
let historicalReviews = 0;
for (const [path, original] of before) {
  const doc = staged.get(path);
  for (const [id, entry] of Object.entries(original.contracts)) {
    assert(doc.contracts[id], `Existing contract removed: ${id}`);
    assert(same(entry.boundaries, doc.contracts[id].boundaries), `Existing boundary/history changed: ${id}`);
    historicalReviews += (entry.boundaries ?? []).filter(row => row.template_review).length;
    for (const key of Object.keys(entry)) if (!['citations', 'derivations', 'routine_steps', 'supplier_excerpts'].includes(key))
      assert(same(entry[key], doc.contracts[id][key]), `Unlicensed historical contract field ${id}.${key}`);
  }
  assert(original.scope.every(id => doc.scope.includes(id)), 'Existing scope removed');
}
assert(historicalReviews === 626, 'Expected exact genuine 626 template-review records; no blanket binding refresh allowed');
const changed = [...staged].filter(([path, doc]) => !same(doc, before.get(path)));
console.log(JSON.stringify({ draft: true, root_execution_only: true, apply, proposed_operations: plan.operations.length,
  explicitly_adopted_operations: selected.size, changed_contract_files: changed.map(([path]) => path),
  preserved_historical_template_reviews: historicalReviews, unadopted_operations: plan.operations.filter(op => !selected.has(op.id)).map(op => op.id),
  unresolved_semantic_routing: plan.unresolved_semantic_routing }, null, 2));
if (apply) {
  const archive = join(here, 'root-contract-preimages-' + randomUUID()); mkdirSync(archive);
  for (const [path] of changed) { const target = join(archive, path); mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, guarded(path), { flag: 'wx' }); }
  for (const path of Object.keys(plan.preimage_guards)) guarded(path);
  for (const [path, doc] of changed) {
    guarded(path); const target = resolve(root, path), temp = target + '.root-contract-' + randomUUID();
    writeFileSync(temp, JSON.stringify(doc, null, 2) + '\n', { flag: 'wx' }); renameSync(temp, target);
  }
  console.log(`Root-adopted contract operations applied; historical review guards untouched. Raw preimages: ${archive}`);
}
