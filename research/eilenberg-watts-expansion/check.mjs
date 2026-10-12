// Scoped future-plan validation. Does not write canonical items or runtime state.
import { readFileSync, existsSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { frontmatterList } from '../../tools/frontmatter-list.mjs';

const root = resolve(import.meta.dirname, '../..');
const read = path => JSON.parse(readFileSync(join(root, path), 'utf8'));
const pages = read('research/eilenberg-watts-expansion/pages.json');
const proposed = read('research/eilenberg-watts-expansion/proposed-items.json');
const spec = read('research/plan-spec.json');
const byPage = new Map(spec.pages.map(p => [p.id, p]));
const byItem = new Map(proposed.map(i => [i.id, i]));
const errors = [];
const check = (test, message) => { if (!test) errors.push(message); };
const idOf = i => typeof i === 'string' ? i : i.id;
const existingOwners = new Map();
for (const p of spec.pages) for (const i of p.items ?? []) existingOwners.set(idOf(i), p.id);
const reached = page => {
  const found = new Set();
  const visit = id => {
    if (found.has(id)) return;
    found.add(id);
    for (const next of byPage.get(id)?.requires ?? []) visit(next);
  };
  visit(page);
  return found;
};

check(byItem.size === proposed.length, 'Duplicate proposed item IDs');
check(new Set(pages.map(p => p.id)).size === pages.length, 'Duplicate future page IDs');
const prose = readFileSync(join(root, 'research/plan-homological-algebra-track.md'), 'utf8');
for (const page of pages) {
  const registered = byPage.get(page.id);
  check(Boolean(registered), `${page.id}: missing canonical row`);
  check(JSON.stringify(registered) === JSON.stringify(page), `${page.id}: canonical row differs`);
  check(page.items.length === 0, `${page.id}: future items array must remain empty`);
  const companion = byPage.get(page.companion);
  check(companion?.companion === page.id, `${page.id}: nonmutual companion`);
  const inventory = proposed.filter(i => i.page === page.id);
  check(page.kind !== 'A' || inventory.length <= 60, `${page.id}: exceeds chosen 60-item limit`);
  if (page.kind === 'B') check(page.requires.length === 1 && page.requires[0] === page.companion,
    `${page.id}: B requires must name only its A companion`);
  const closure = reached(page.id);
  for (const item of inventory) {
    check(!existsSync(join(root, 'items', `${item.id}.md`)), `${item.id}: collides with authored item`);
    check(!existingOwners.has(item.id), `${item.id}: collides with canonical planned item`);
    check(prose.includes(`| \`${item.id}\` | ${item.kind} | ${item.proof_location} |`),
      `${item.id}: prose and machine inventory differ`);
    check(new RegExp(`^### ${item.proof_location.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.`, 'm').test(prose),
      `${item.id}: missing full proof section`);
    for (const dep of item.deps ?? []) {
      const planned = byItem.get(dep);
      const file = join(root, 'items', `${dep}.md`);
      check(Boolean(planned) || existsSync(file), `${item.id}: unresolved local supplier ${dep}`);
      if (!planned && existsSync(file)) {
        const text = readFileSync(file, 'utf8');
        check(!/^proved_here:\s*false\s*$/m.test(text), `${item.id}: unproved external supplier ${dep}`);
        check(/^status:\s*published\s*$/m.test(text), `${item.id}: existing supplier is not published: ${dep}`);
      }
      const owner = planned?.page ?? existingOwners.get(dep);
      check(Boolean(owner) && closure.has(owner), `${item.id}: supplier page unreachable: ${dep} (${owner})`);
      check(byPage.get(owner)?.kind !== 'B', `${item.id}: B supplier ${dep}`);
      if (owner === page.id && planned) check(inventory.indexOf(planned) < inventory.indexOf(item),
        `${item.id}: same-page supplier not earlier: ${dep}`);
    }
    for (const justification of item.justified_by ?? []) {
      const witness = byItem.get(justification);
      check(item.kind === 'definition', `${item.id}: justified_by belongs on definitions`);
      check(witness?.deps.includes(item.id), `${item.id}: justification does not depend on definition`);
      check(!item.deps.includes(justification), `${item.id}: circular definition prerequisite`);
      check(witness?.page === item.page, `${item.id}: justification must be local to its A page`);
    }
  }
}
for (const run of ['frontier-39-analysis-30', 'frontier-40-geometry-braids-rep-27']) {
  const scope = JSON.stringify(read(`research/${run}-scope-ledger.json`));
  for (const page of pages) check(!scope.includes(`"${page.id}"`), `${page.id}: overlaps active run ${run}`);
}
// Inspect transitive authored prerequisites too. A recorded theorem cannot be
// smuggled in through an otherwise published direct supplier.
const visited = new Set();
const inspect = id => {
  if (visited.has(id)) return;
  visited.add(id);
  const item = byItem.get(id);
  if (item) { for (const dep of item.deps ?? []) inspect(dep); return; }
  const file = join(root, 'items', `${id}.md`);
  check(existsSync(file), `Transitive supplier missing: ${id}`);
  if (!existsSync(file)) return;
  const text = readFileSync(file, 'utf8');
  check(!/^proved_here:\s*false\s*$/m.test(text), `Transitive unproved supplier: ${id}`);
  check(/^status:\s*published\s*$/m.test(text), `Transitive supplier is not published: ${id}`);
  for (const dep of frontmatterList(text, 'deps')) inspect(dep);
};
for (const item of proposed) inspect(item.id);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

const hydrated = structuredClone(spec);
for (const page of hydrated.pages) if (pages.some(p => p.id === page.id)) {
  page.items = proposed.filter(i => i.page === page.id).map(({page: _page, proof_location: _proof, sources: _sources, ...item}) => item);
}
const temporary = mkdtempSync(join(tmpdir(), 'ew-plan-'));
try {
  const path = join(temporary, 'plan.json');
  writeFileSync(path, JSON.stringify(hydrated));
  const result = spawnSync(process.execPath, ['tools/validate-plan.mjs', path, '--repo', root],
    { cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
  const output = `${result.stdout ?? ''}${result.stderr ?? ''}`;
  if (result.status !== 0) { console.error(output); process.exitCode = result.status ?? 1; }
  else {
    console.log(output.split('\n').filter(line => /^(OK|NOTE:)/.test(line)).join('\n'));
    console.log(`Scoped expansion: ${pages.length / 2} pairs; ${proposed.filter(i => byPage.get(i.page).kind === 'A').length} A items; ${proposed.filter(i => byPage.get(i.page).kind === 'B').length} B items; ${visited.size - proposed.length} transitive authored suppliers; definition justifications checked.`);
  }
} finally { rmSync(temporary, { recursive: true, force: true }); }
