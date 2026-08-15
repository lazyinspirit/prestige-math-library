#!/usr/bin/env node
// frontier-14 step-4 splice (lead Alpha).
//
// Rules, from LEVELS.md §"Step 4 — Apply and propagate":
//   - keep plan-spec's page metadata
//   - take the UNION of `requires` (never drop an edge the spec already declares)
//   - log every disagreement
//   - hard-fail on an id clash
//
// HOLD list: pairs a group Alpha left unresolved at its step-3 re-check. LEVELS.md
// §Step 4: "Do not splice a pair Alpha marked `insufficient` at step 3 until its
// findings are resolved and it has re-checked."
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const SPEC = 'research/plan-spec.json';
const HOLD = new Set(['stone-weierstrass-general', 'stone-weierstrass-general-examples']);
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const batches = only.length ? only.map(Number) : [1, 2, 3, 4, 5, 6];
const write = process.argv.includes('--write');

const spec = JSON.parse(readFileSync(SPEC, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));

// every id already spoken for, anywhere
const taken = new Map();
for (const p of spec.pages) for (const it of p.items ?? []) taken.set(it.id, `plan-spec:${p.id}`);
for (const f of readdirSync('items')) {
  if (!f.endsWith('.md')) continue;
  const id = f.slice(0, -3);
  if (!taken.has(id)) taken.set(id, 'items/');
}

const report = { spliced: [], held: [], requiresDelta: [], clashes: [] };
const splicedIds = new Set();
const heldIds = new Set();

for (const i of batches) {
  const manifest = JSON.parse(readFileSync(`research/frontier-14-batch-${i}.pages.json`, 'utf8'));
  for (const mp of manifest) {
    const page = byId.get(mp.id);
    if (!page) throw new Error(`batch ${i}: page ${mp.id} is not declared in plan-spec`);

    if (HOLD.has(mp.id)) {
      for (const it of mp.items ?? []) heldIds.add(it.id);
      report.held.push({ batch: i, page: mp.id, items: (mp.items ?? []).length });
      continue;
    }

    if ((page.items ?? []).length) throw new Error(`${mp.id} already carries items; refusing to re-splice`);

    for (const it of mp.items ?? []) {
      const owner = taken.get(it.id);
      if (owner) report.clashes.push({ id: it.id, page: mp.id, owner });
      taken.set(it.id, `batch-${i}:${mp.id}`);
      splicedIds.add(it.id);
    }

    // union of requires, spec order first, then manifest-only additions
    const specReq = page.requires ?? [];
    const manReq = mp.requires ?? [];
    const union = [...specReq, ...manReq.filter((r) => !specReq.includes(r))];
    const added = manReq.filter((r) => !specReq.includes(r));
    const droppedByBeta = specReq.filter((r) => !manReq.includes(r));
    if (added.length || droppedByBeta.length) {
      report.requiresDelta.push({
        batch: i, page: mp.id, added,
        beta_wanted_dropped_kept_by_union: droppedByBeta,
      });
    }

    page.requires = union;
    page.items = (mp.items ?? []).map((it) => ({ ...it })); // declared order preserved
    report.spliced.push({ batch: i, page: mp.id, kind: page.kind, items: page.items.length });
  }
}

if (report.clashes.length) {
  console.error('ID CLASH — refusing to write');
  for (const c of report.clashes) console.error(' ', c.id, 'wanted by', c.page, 'owned by', c.owner);
  process.exit(1);
}

// nothing spliced may depend on an item we held back
const danglingOnHeld = [];
for (const p of spec.pages) {
  for (const it of p.items ?? []) {
    for (const d of it.deps ?? []) if (heldIds.has(d)) danglingOnHeld.push(`${p.id}/${it.id} -> ${d}`);
  }
}
report.dependsOnHeldItems = danglingOnHeld;

if (write) {
  writeFileSync(SPEC, JSON.stringify(spec, null, 2) + '\n');
  console.error(`WROTE ${SPEC}`);
}
console.log(JSON.stringify(report, null, 1));
