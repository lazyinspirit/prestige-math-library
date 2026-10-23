// DRAFT ONLY. Root reviews the accompanying explicit plan before execution.
// No native numeric levels, contracts, readiness, acceptance or gate bindings.
import { readFileSync, readdirSync, lstatSync, realpathSync, existsSync, mkdirSync, writeFileSync, renameSync, unlinkSync } from 'node:fs';
import { dirname, resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import { isDeepStrictEqual as same } from 'node:util';
import { yaml } from '../../../tools/physics-support/pathway-lib.mjs';
const here = dirname(fileURLToPath(import.meta.url)), root = resolve(here, '../..');
const argv = process.argv.slice(2), apply = argv.includes('--apply');
const get = flag => argv[argv.indexOf(flag) + 1];
const assert = (ok, message) => { if (!ok) throw Error(message); };
assert(argv.includes('--stage') !== apply, 'Use --stage OR --apply --root-reviewed --freshness-closed --writers-drained');
if (apply) for (const flag of ['--root-reviewed', '--freshness-closed', '--writers-drained']) assert(argv.includes(flag), `Root must explicitly attest ${flag}`);
const plan = JSON.parse(readFileSync(argv.includes('--plan') ? resolve(get('--plan')) : join(here, 'root-metadata-integration-plan.json')));
assert(plan.version === 1 && plan.run === 'fluid-dynamics-all-47-2026-10-23' && plan.expected_owned_items === 305 && plan.expected_pages === 94, 'Wrong plan');
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
function regular(path) {
  const full = resolve(root, path);
  assert(!relative(root, full).startsWith('..') && lstatSync(full).isFile() && realpathSync(full) === full, `Not a regular local file: ${path}`);
  return full;
}
function guarded(path) {
  const bytes = readFileSync(regular(path));
  assert(plan.preimage_guards[path] === sha(bytes), `Stale draft preimage: ${path}; root must review the new bytes, never automatically rebind`);
  return bytes;
}
for (const path of Object.keys(plan.preimage_guards)) guarded(path);
const imports = JSON.parse(guarded('research/math-imports.json'));
const imported = new Set(imports.files.map(row => row.path));
const stage = new Map(), sources = new Map(), originals = new Map();
function parse(bytes) {
  const raw = bytes.toString('utf8'), match = raw.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);
  assert(match, 'Missing frontmatter');
  const doc = yaml().parseDocument(match[2], { uniqueKeys: true });
  assert(!doc.errors.length, 'Malformed YAML');
  return { doc, data: doc.toJS(), body: match[4], match, raw };
}
function render(parsed) { return parsed.match[1] + parsed.doc.toString().trimEnd() + parsed.match[3] + parsed.body; }
const files = readdirSync(join(root, 'research')).filter(name => name.startsWith(`${plan.run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${plan.run}-batch-`.length))).sort();
assert(same(files.map(name => `research/${name}`), plan.manifests), 'Manifest selection changed');
const manifests = files.map(name => ({ path: `research/${name}`, pages: JSON.parse(guarded(`research/${name}`)) }));
const owners = new Map(), pages = new Map();
for (const file of manifests) for (const page of file.pages) {
  assert(!pages.has(page.id) && ['A', 'B'].includes(page.kind), 'Ambiguous page'); pages.set(page.id, page);
  for (const row of page.items) { assert(!owners.has(row.id), 'Duplicate owned item'); owners.set(row.id, page.id); }
}
assert(pages.size === 94 && owners.size === 304, 'Expected exact original 304-item/94-page frontier');
assert(same([...owners.keys()].sort(), plan.original_owned_ids), 'Original owned inventory changed');
const old = plan.corollary.from, cor = plan.corollary.to;
assert(old === 'thm-fd-uq-observable-budget-guarantees' && cor === 'cor-fd-uq-observable-budget-guarantees'
  && plan.corollary.page === 'fd-st02' && plan.corollary.after === 'alg-fd-uq-observable-budget', 'Only the exact approved same-page classification is allowed');
assert(!owners.has(old) && !owners.has(cor), 'Provisional theorem unexpectedly entered inventory');
for (const id of [...owners.keys(), old]) {
  const path = `items/${id}.md`; assert(!imported.has(path), `Imported write forbidden: ${id}`);
  const parsed = parse(guarded(path));
  assert(parsed.data.id === id && parsed.data.status === 'draft', `Not the owned draft identity: ${id}`);
  sources.set(id, parsed); originals.set(id, structuredClone(parsed.data));
}
for (const patch of plan.metadata_patches) {
  assert(sources.has(patch.id), `Outside patch ${patch.id}`);
  const parsed = sources.get(patch.id);
  for (const [key, value] of Object.entries(patch.set)) {
    assert(['deps', 'dependency_roles', 'justified_by', 'id', 'kind', 'provenance', 'generation', 'axiom_use'].includes(key), `Unauthorized metadata key ${key}`);
    parsed.doc.set(key, value); parsed.data[key] = structuredClone(value);
  }
}
assert(plan.body_replacements.length === 2, 'Only two approved terminology/reference replacements');
for (const change of plan.body_replacements) {
  assert(change.id === old && change.before === 'the theorem supplies no conditional-on-completion certificate'
    && change.after === 'this corollary supplies no conditional-on-completion certificate'
    || change.id === 'alg-fd-uq-observable-budget'
    && change.before === '[[thm-fd-uq-observable-budget-guarantees]] proves the execution, completion-law and conditional error properties of this procedure.'
    && change.after === '[[cor-fd-uq-observable-budget-guarantees]] proves the execution, completion-law and conditional error properties of this procedure.', 'Unauthorized body edit');
  const parsed = sources.get(change.id); assert(parsed, 'Outside body replacement');
  assert(parsed.body.split(change.before).length === 2, `Body excerpt not unique: ${change.id}`);
  parsed.body = parsed.body.replace(change.before, change.after);
}
const provisional = sources.get(old);
assert(provisional.data.id === cor && provisional.data.kind === 'corollary'
  && same(provisional.data.provenance, { statement: 'ai-generated', proof: 'ai-generated' })
  && same(provisional.data.generation, { role: 'direct-corollary' })
  && same(provisional.data.deps, plan.corollary.deps) && provisional.data.justified_by.length === 0
  && !(provisional.data.aliases ?? []).length, 'Corollary classification/deps changed');
assert(same(sources.get('alg-fd-uq-observable-budget').data.justified_by ?? [], []), 'Algorithm must retain justified_by: []');
assert(!existsSync(join(root, `items/${cor}.md`)) && !imported.has(`items/${cor}.md`), 'Corollary destination exists/imported');
sources.delete(old); sources.set(cor, provisional); owners.set(cor, plan.corollary.page);
const a33 = pages.get(plan.corollary.page);
const algorithmIndex = a33.items.findIndex(row => row.id === plan.corollary.after);
assert(algorithmIndex >= 0, 'Algorithm inventory absent');
a33.items.splice(algorithmIndex + 1, 0, { id: cor, reference: `items/${cor}.md`, proof_status: plan.corollary.proof_status });
const headingFor = kind => ({ definition: 'Definition', algorithm: 'Definition', postulate: 'Postulate', remark: 'Remark', example: 'Example', counterexample: 'Statement refuted', 'false-statement': 'Statement refuted' }[kind] ?? 'Statement');
function publicSection(parsed) {
  const heading = headingFor(parsed.data.kind);
  const matches = [...parsed.body.matchAll(new RegExp('^## ' + heading + '[ \t]*$', 'gm'))];
  assert(matches.length === 1, `Expected one public ${heading}: ${parsed.data.id}`);
  const start = matches[0].index + matches[0][0].length, tail = parsed.body.slice(start), end = tail.search(/^## /m);
  return tail.slice(0, end < 0 ? undefined : end).trim();
}
for (const page of pages.values()) {
  for (const row of page.items) {
    const parsed = sources.get(row.id); assert(parsed && parsed.data.id === row.id, 'Missing exact item identity');
    for (const field of plan.sync_fields) if (parsed.data[field] !== undefined) row[field] = structuredClone(parsed.data[field]);
    row.reference = `items/${row.id}.md`; row.statement = publicSection(parsed);
    // Existing metadata absent from the source is retained and reported for
    // root review; no classification or approved field is silently erased.
  }
  // Stable deps-only order changes inventory positions, never inventory IDs.
  // justified_by discharges can validly point back through a definition.
  const before = [...page.items], ordered = [], done = new Set(), pending = [...before], own = new Set(before.map(row => row.id));
  while (pending.length) {
    const i = pending.findIndex(row => [...(sources.get(row.id).data.deps ?? [])]
      .filter(id => own.has(id)).every(id => done.has(id)));
    assert(i >= 0, `Same-page dependency cycle: ${page.id}; root must resolve, never drop an edge`);
    const row = pending.splice(i, 1)[0]; ordered.push(row); done.add(row.id);
  }
  page.items = ordered;
}
assert(sources.size === 305 && owners.size === 305, 'Final exact 305-item frontier required');
const approvedIds = new Set([...plan.original_owned_ids, cor]);
for (const page of pages.values()) for (const row of page.items) assert(approvedIds.has(row.id) && owners.get(row.id) === page.id, 'Inventory ownership changed');
assert(a33.items[a33.items.findIndex(row => row.id === plan.corollary.after) + 1]?.id === cor, 'Corollary must immediately follow algorithm');
for (const [id, parsed] of sources) {
  assert(!(parsed.data.deps ?? []).includes(old) && !(parsed.data.justified_by ?? []).includes(old)
    && !(parsed.data.deps ?? []).includes(cor) && !(parsed.data.justified_by ?? []).includes(cor), `Generated guarantee has incoming logical edge from ${id}`);
  const sourceChanged = id === cor || plan.metadata_patches.some(patch => patch.id === id) || plan.body_replacements.some(change => change.id === id);
  stage.set(`items/${id}.md`, sourceChanged ? render(parsed) : parsed.raw);
}
// Only carriers mentioning a provisional/canonical ID need outside-frontier
// logical inspection. Imports remain read-only and are never replacement targets.
for (const name of readdirSync(join(root, 'items')).filter(name => name.endsWith('.md'))) {
  const id = name.slice(0, -3); if (sources.has(id) || id === old) continue;
  const raw = readFileSync(join(root, 'items', name), 'utf8');
  if (raw.includes(old) || raw.includes(cor)) {
    const data = parse(raw).data;
    assert(![...(data.deps ?? []), ...(data.justified_by ?? [])].some(id => [old, cor].includes(id)), `Outside logical guarantee consumer ${name}`);
  }
}
const canonical = JSON.parse(guarded('research/plan-spec.json'));
for (const page of pages.values()) {
  const rows = canonical.pages.filter(row => row.id === page.id); assert(rows.length === 1, 'Canonical page ambiguity');
  const navigation = structuredClone(rows[0]); delete navigation.items;
  assert((rows[0].requires ?? []).every(id => (page.requires ?? []).includes(id)), 'Canonical approved edge would be lost');
  rows[0].items = structuredClone(page.items); rows[0].requires = structuredClone(page.requires ?? []);
  navigation.requires = structuredClone(page.requires ?? []);
  const afterNavigation = structuredClone(rows[0]); delete afterNavigation.items;
  assert(same(navigation, afterNavigation), 'Canonical navigation changed');
  const path = `library/${page.category}/${page.id}.md`; assert(!imported.has(path), 'Imported page write');
  const parsed = parse(guarded(path)); assert(parsed.data.page === page.id && parsed.data.status === 'draft' && !parsed.body.trim(), 'Wrong draft/compact page');
  const beforeIds = [...(parsed.data.items ?? []), ...(parsed.data.examples ?? [])];
  const expectedBefore = page.items.map(row => row.id).filter(id => id !== cor);
  assert(same([...beforeIds].sort(), expectedBefore.sort()), `Page inventory mismatch needs explicit root decision: ${page.id}`);
  const examples = new Set(parsed.data.examples ?? []);
  const nextItems = page.items.filter(row => !examples.has(row.id)).map(row => row.id);
  const nextExamples = page.items.filter(row => examples.has(row.id)).map(row => row.id);
  assert((parsed.data.requires ?? []).every(id => (page.requires ?? []).includes(id)), 'Page approved prerequisite would be lost');
  const targetRequires = structuredClone(page.requires ?? []);
  if (!same(parsed.data.items, nextItems) || !same(parsed.data.examples, nextExamples) || !same(parsed.data.requires ?? [], targetRequires)) {
    parsed.doc.set('items', nextItems); parsed.doc.set('examples', nextExamples); parsed.doc.set('requires', targetRequires);
    const prior = structuredClone(parsed.data), result = parse(render(parsed)).data;
    prior.requires = targetRequires;
    delete prior.items; delete prior.examples; delete result.items; delete result.examples;
    assert(same(prior, result), 'Page navigation/metadata changed'); stage.set(path, render(parsed));
  }
}
for (const file of manifests) stage.set(file.path, JSON.stringify(file.pages, null, 2) + '\n');
stage.set('research/plan-spec.json', JSON.stringify(canonical, null, 2) + '\n');
stage.set(`items/${old}.md`, null);
const allowed = new Set([...plan.original_owned_ids.map(id => `items/${id}.md`), `items/${old}.md`, `items/${cor}.md`, ...manifests.map(file => file.path), 'research/plan-spec.json', ...[...pages.values()].map(page => `library/${page.category}/${page.id}.md`)]);
const operations = [...stage].filter(([path, text]) => {
  assert(allowed.has(path) && !imported.has(path), `Outside write ${path}`);
  return text === null || !existsSync(join(root, path)) || readFileSync(join(root, path), 'utf8') !== text;
});
console.log(JSON.stringify({ draft: true, root_execution_only: true, apply, owned_items: sources.size, pages: pages.size,
  operations: operations.map(([path, text]) => ({ path, action: text === null ? 'delete-archived-provisional' : existsSync(join(root, path)) ? 'replace' : 'create' })),
  root_remaining: plan.root_only_followup }, null, 2));
if (apply) {
  const archive = resolve(here, `root-metadata-preimages-${randomUUID()}`);
  mkdirSync(archive, { recursive: false });
  for (const [path] of operations) if (existsSync(join(root, path))) {
    const bytes = guarded(path), target = join(archive, path); mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, bytes, { flag: 'wx' });
  }
  // Every preimage is archived before the first live mutation; reread all guards.
  for (const path of Object.keys(plan.preimage_guards)) guarded(path);
  assert(!existsSync(join(root, `items/${cor}.md`)), 'New destination changed during staging');
  for (const [path, text] of operations) {
    const target = join(root, path);
    if (text === null) { guarded(path); unlinkSync(target); }
    else {
      if (existsSync(target)) guarded(path);
      const temp = target + '.root-metadata-' + randomUUID();
      writeFileSync(temp, text, { flag: 'wx' }); renameSync(temp, target);
    }
  }
  console.log(`Root metadata integration applied; exact prior bytes archived at ${archive}. Native bindings/contracts/numeric metadata remain unrecorded.`);
}
