// Owner integration of completed source repairs; no gate or review authority.
import { readFileSync, writeFileSync, renameSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { yaml, split } from '../../tools/physics-support/pathway-lib.mjs';
import { loadStep1Record } from '../../tools/physics-support/frontier-snapshot.mjs';

const run = 'physics-td-qft-rpm-62-2026-10-14';
const groups = {
  2: ['post-td-common-bulk-constitutive-law'],
  3: ['def-tdmath-tagged-scalable-compound', 'lem-tdmath-compound-mass-well-defined', 'thm-tdmath-additive-entropy-representation', 'thm-tdmath-common-meter-calibration', 'ex-tdmath-common-meter-two-types'],
  4: ['lem-tdmath-concave-affine-maximizer-and-hessian', 'cor-tdmath-ordered-finite-mixture-envelope'],
  5: ['lem-tdmath-integrable-horizontal-orbits-have-empty-interior', 'thm-tdmath-local-caratheodory-inaccessibility'],
  8: ['pthm-td-concave-stability'],
  9: ['lem-tdmath-euler-identity-for-degree-one-homogeneous-function', 'pthm-td-euler-and-gibbs-duhem'],
  12: ['thm-tdmath-compact-continuous-mixture-attainment'],
  13: ['pthm-td-clapeyron-local', 'rem-td-nonsmooth-phase-scope'],
  24: ['ex-rpm-pure-gauge-free-charge'],
  27: ['pthm-rpm-bmt-constraints', 'pthm-rpm-rest-spin-and-size-bound', 'ex-rpm-bmt-fw-and-g-two', 'ex-rpm-rest-spin-and-size-bound'],
  28: ['post-rpm-ideal-rindler-phase-reception', 'pthm-rpm-rindler-clock-gradient', 'ex-rpm-rindler-clock-gradient'],
  38: ['lem-qft-fock-unitary-lift', 'lem-qft-mass-shell-test-range-dense', 'lem-qft-smeared-free-scalar'],
  39: ['thm-qft-conformal-external-scalar'],
  40: ['def-qft-framework-units', 'post-qft-constructed-model-and-measurement', 'texp-qft-two-level-measurement'],
  56: ['pthm-qft-scalar-free-properties'],
};
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const archive = `research/${run}-owner-metadata-integration/${stamp}`;
const snapshot = loadStep1Record(process.cwd(), run);
// Execute only after the original QFT repair owner releases these sources.
for (const id of ['lem-qft-qed-coherent-ir-obstruction', 'thm-qft-example-soft-current-angular-coherent', 'cex-qft-qed-energy-fock-limit', 'ex-qft-qed-coherent-angular', 'ex-qftmath-x06', 'pthm-qft-example-soft-coherent-counts', 'texp-qft-qed-infrared-sequence', 'ex-qft-x06']) {
  const batch = snapshot.items.get(id)?.page.batch;
  if (!batch) throw Error(`Missing existing QFT repair ownership: ${id}`);
  (groups[batch] ??= []).push(id);
}
const tdFinal = JSON.parse(readFileSync(`research/${run}-owner-escalations/td4-unit-compound-interface/round2-final-exact-contract-and-metadata-proposals.json`, 'utf8'));
for (const id of Object.keys(tdFinal.metadata)) {
  const batch = snapshot.items.get(id)?.page.batch ?? (id === tdFinal.new_item.id ? '6' : null);
  if (!batch) continue; // Historical-only removed carrier is evidence, not run scope.
  const ids = (groups[batch] ??= []);
  if (!ids.includes(id)) ids.push(id);
}
const rpmReceipt = JSON.parse(readFileSync(`research/${run}-owner-escalations/rpm26-supplier-readiness/round2/final-receipt.json`, 'utf8'));
for (const path of Object.keys(rpmReceipt.changed_source_rows)) {
  const id = path.split('/').at(-1).replace(/\.md$/, '');
  const batch = snapshot.items.get(id)?.page.batch;
  if (!batch) throw Error(`Missing existing RPM repair ownership: ${id}`);
  (groups[batch] ??= []).push(id);
}
const runIds = new Set([...snapshot.items.keys(), ...Object.values(groups).flat()]);
const metadata = new Map(), levels = new Map();
function meta(id) {
  if (!metadata.has(id)) metadata.set(id, yaml().parse(split(readFileSync(`items/${id}.md`, 'utf8')).fm));
  return metadata.get(id);
}
function level(id, path = []) {
  if (!runIds.has(id)) return 0;
  if (snapshot.invalidItems.has(id)) throw Error(snapshot.invalidItems.get(id));
  if (levels.has(id)) return levels.get(id);
  if (path.includes(id)) throw Error(`Logical dependency cycle: ${[...path, id].join(' -> ')}`);
  const deps = meta(id).deps ?? [];
  if (!Array.isArray(deps)) throw Error(`Invalid deps: ${id}`);
  const value = deps.reduce((n, dep) => runIds.has(dep) ? Math.max(n, level(dep, [...path, id]) + 1) : n, 0);
  levels.set(id, value);
  return value;
}
const planPath = 'research/plan-spec.json', plan = JSON.parse(readFileSync(planPath, 'utf8'));
const writes = [], sourceChanges = [], pageMetadataChanges = [];
for (const [batch, ids] of Object.entries(groups)) {
  const path = `research/${run}-batch-${batch}.pages.json`, pages = JSON.parse(readFileSync(path, 'utf8'));
  if (batch === '28') {
    const b = pages.find(page => page.kind === 'B');
    b.items = [...(b.items ?? []), ...(b.examples ?? [])];
    delete b.examples;
  }
  if (batch === '45' || batch === '47') {
    const page = pages.find(page => page.kind === 'A');
    const additions = batch === '47' ? ['qft-mf01'] : ['euclidean-surface-measure-divergence-and-green-identities', 'the-complex-exponential-and-eulers-formula'];
    page.requires = [...new Set([...(page.requires ?? []), ...additions])];
    const path = `library/${page.category}/${page.id}.md`, raw = readFileSync(path, 'utf8'), parts = split(raw), fm = yaml().parse(parts.fm);
    if (fm.status !== 'draft') throw Error(`Non-draft page ${page.id}`);
    if (JSON.stringify(fm.requires) !== JSON.stringify(page.requires)) {
      fm.requires = page.requires;
      writes.push([path, raw.replace(parts.fm, yaml().stringify(fm).trimEnd())]);
      pageMetadataChanges.push(path);
    }
  }
  for (const id of ids) {
    const source = `items/${id}.md`, raw = readFileSync(source, 'utf8'), parts = split(raw), fm = meta(id);
    if (fm.status !== 'draft') throw Error(`Only draft source: ${id}`);
    let page = pages.find(page => page.items.some(item => item.id === id));
    if (!page) page = pages.find(page => page.kind === (['example', 'counterexample'].includes(fm.kind) ? 'B' : 'A'));
    let row = page.items.find(item => item.id === id);
    if (!row) {
      row = { id, reference: source, design_state: 'Owner escalation prerequisite authored; draft with independent pipeline review pending.', inventory_expansion_required: false };
      const before = batch === '4' ? 'lem-tdmath-constrained-curvature' : batch === '5' ? 'thm-tdmath-local-caratheodory-inaccessibility' : batch === '6' ? page.items.find(item => (meta(item.id).deps ?? []).includes(id))?.id : null;
      if (before) page.items.splice(page.items.findIndex(item => item.id === before), 0, row);
      else if (batch === '28') page.items.unshift(row);
      else page.items.push(row);
    }
    for (const key of ['kind', 'domain', 'library', 'title', 'deps', 'dependency_roles', 'physical_scope', 'empirical_premises', 'provenance', 'generation', 'justified_by', 'forward_refs']) {
      if (fm[key] !== undefined) row[key] = fm[key];
      else if (['justified_by', 'forward_refs'].includes(key)) delete row[key];
    }
    const preferred = fm.kind === 'definition' ? 'Definition' : fm.kind === 'postulate' ? 'Postulate' : fm.kind === 'example' ? 'Example' : fm.kind === 'counterexample' ? 'Statement refuted' : fm.kind === 'remark' ? 'Remarks' : 'Statement';
    const headings = fm.kind === 'remark' ? ['Remark', 'Remarks', 'Scope', 'Statement'] : [preferred, 'Statement'];
    const section = headings.map(heading => parts.body.match(new RegExp(`^## ${heading}\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm'))).find(Boolean);
    if (!section) throw Error(`Missing public section: ${id}`);
    row.statement = section[1].trim();
    row.dependency_level = level(id);
    const newFm = /^dependency_level:/m.test(parts.fm) ? parts.fm.replace(/^dependency_level:.*$/m, `dependency_level: ${row.dependency_level}`) : `${parts.fm.trimEnd()}\ndependency_level: ${row.dependency_level}`;
    const newRaw = raw.replace(parts.fm, newFm);
    if (newRaw !== raw) { writes.push([source, newRaw]); sourceChanges.push(source); }
  }
  writes.push([path, JSON.stringify(pages, null, 2) + '\n']);
  for (const page of pages) {
    const planned = plan.pages.find(planned => planned.id === page.id);
    if (!planned) throw Error(`Missing approved page: ${page.id}`);
    planned.items = page.items.map(item => ({ ...item }));
    planned.requires = page.requires;
  }
}
writes.push([planPath, JSON.stringify(plan, null, 2) + '\n']);
mkdirSync(archive, { recursive: true });
for (const [path, data] of writes) {
  writeFileSync(`${archive}/${path.replaceAll('/', '__')}.before`, readFileSync(path));
  writeFileSync(`${path}.tmp`, data);
  renameSync(`${path}.tmp`, path);
}
writeFileSync(`${archive}/receipt.json`, JSON.stringify({ version: 1, run, owner: '/root', groups, source_numeric_fields_changed: sourceChanges, source_page_metadata_changed: pageMetadataChanges, files: writes.map(([path]) => ({ path, sha256: createHash('sha256').update(readFileSync(path)).digest('hex') })), gate_acceptance: false, independent_proof_acceptance: false, at: new Date().toISOString() }, null, 2) + '\n');
console.log(JSON.stringify({ batches: Object.keys(groups), source_levels_updated: sourceChanges.length, receipt: `${archive}/receipt.json` }, null, 2));
