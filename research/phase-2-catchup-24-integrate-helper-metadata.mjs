// One-run mechanical reconciliation of completed helper handoffs.
// Does not edit proofs, source receipts, verdicts, scope or engine state.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { yamlCandidates } from '../tools/paths.mjs';
const require = createRequire(import.meta.url);
let yaml;
for (const candidate of yamlCandidates()) {
  try { yaml = require(candidate); break; } catch {}
}
if (!yaml) throw new Error('Renderer YAML parser unavailable');
const prefix = 'research/phase-2-catchup-24';
const paths = [`${prefix}-batch-15.pages.json`, 'research/plan-spec.json',
  `${prefix}-batch-15.proof-contracts.json`];
const [manifest, plan, contracts] = paths.map(p => JSON.parse(readFileSync(p, 'utf8')));
const allowed = new Set([
  'def-small-dowker-luzin-stick-and-ad-principles',
  'def-small-dowker-tight-strongly-unbounded-coloring',
  'lem-small-dowker-ch-gives-luzin-set',
  'lem-small-dowker-luzin-gives-tight-coloring',
  'lem-small-dowker-coloring-gives-ad-guessing',
  'lem-small-dowker-stick-gives-ad-guessing',
  'def-small-dowker-ladder-topology',
  'lem-small-dowker-ladder-normality',
  'lem-small-dowker-ladder-shrinking-obstruction',
  'thm-small-dowker-conditional-aleph-one-constructions',
  'rem-aleph-one-dowker-status-dated-audit',
]);
const ids = process.argv.slice(2);
if (!ids.length || new Set(ids).size !== ids.length) throw new Error('Supply distinct completed item IDs');
for (const id of ids) {
  if (!allowed.has(id)) throw new Error(`Not a helper item: ${id}`);
  const candidates = ['combinatorics', 'topology'].flatMap(group =>
    ['contract', 'proof-contract'].map(suffix =>
      `${prefix}-helper-${group}/${id}.${suffix}.json`)).filter(existsSync);
  if (candidates.length !== 1) throw new Error(`Expected one handoff contract for ${id}`);
  const raw = readFileSync(`items/${id}.md`, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`Missing frontmatter: ${id}`);
  const fm = yaml.parse(match[1]);
  if (fm.id !== id || fm.status !== 'draft' || !Array.isArray(fm.deps))
    throw new Error(`Invalid canonical draft: ${id}`);
  const m = manifest.flatMap(p => p.items).find(i => i.id === id);
  const p = plan.pages.flatMap(p => p.items || []).find(i => i.id === id);
  if (!m || !p || !contracts.scope.includes(id)) throw new Error(`Outside existing scope: ${id}`);
  for (const target of [m, p]) {
    for (const key of ['deps', 'justified_by', 'provenance']) {
      if (fm[key] === undefined) delete target[key];
      else target[key] = fm[key];
    }
  }
  const handoff = JSON.parse(readFileSync(candidates[0], 'utf8'));
  const entry = handoff.contracts ? handoff.contracts[id] : handoff;
  if (!entry || !Array.isArray(entry.citations) || !Array.isArray(entry.boundaries))
    throw new Error(`Invalid handoff contract: ${id}`);
  contracts.contracts[id] = entry;
}
// All input/ownership checks above finish before these mechanical JSON writes.
for (const [index, value] of [manifest, plan, contracts].entries())
  writeFileSync(paths[index], JSON.stringify(value, null, 2) + '\n');
console.log(`Reconciled ${ids.length} completed helper records; proofs and scope unchanged.`);
