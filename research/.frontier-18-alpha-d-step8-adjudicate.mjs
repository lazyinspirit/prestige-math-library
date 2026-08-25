import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { itemHashGuard } from '../tools/item-hash.mjs';

const RUN = 'frontier-18';
const GROUP = 'd';
const SCOPE = 'research/frontier-18-step8-scope.json';
const ADJ = 'research/frontier-18-judge-adjudications.jsonl';
const TOUCHES = 'research/frontier-18-touches.json';
const HISTORY = '.autopilot/sessions/frontier-18/d/thread_history_1.sqlite';
const LEDGER_ROWS = 'research/frontier-18-alpha-d-step8-ledger-rows.json';
const DECISIONS = 'research/frontier-18-alpha-d-step8-decisions.json';

const scope = JSON.parse(readFileSync(SCOPE, 'utf8'));
const group = scope.groups.find((g) => g.label === GROUP);
if (!group) throw new Error(`group ${GROUP} absent from ${SCOPE}`);
const baseline = JSON.parse(readFileSync(TOUCHES, 'utf8')).snapshots
  .find((x) => x.label === 'pre-step8')?.hashes;
if (!baseline) throw new Error('pre-step8 baseline absent');

const K = (r) => `${r.id}|${r.model}|${r.context_sha256}`;
const IM = (id, model) => `${id}|${model}`;

// The default for a rejected row is confirmed_nonfatal: the objection is a
// local citation/tag omission or a proof-step gap a competent reader closes in
// thirty seconds.  The maps below name every Statement, Definition, Remark,
// ill-typed expression, invalid inference, or materially inflated citation.
const fatalAll = new Map(Object.entries({
  'thm-a-central-product-of-extraspecial-p-groups-is-extraspecial': 'dependency_citation',
  'def-plus-and-minus-type-of-an-extraspecial-p-group': 'other',
  'prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner': 'other',
  'fs-the-commutator-pairing-needs-no-choice-of-a-central-generator': 'other',
  'thm-classification-of-extraspecial-p-groups-for-odd-p': 'logic',
  'def-special-and-extraspecial-p-groups': 'dependency_citation',
  'lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup': 'other',
  'prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing': 'dependency_citation',
  'thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed': 'logic',
  'cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups': 'other',
  'prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups': 'dependency_citation',
  'def-modular-group-of-order-p-cubed': 'other',
  'thm-classification-of-extraspecial-two-groups': 'logic',
  'ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight': 'dependency_citation',
  'ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two': 'dependency_citation',
  'ex-the-two-extraspecial-groups-of-order-thirty-two': 'dependency_citation',
  'thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path': 'other',
  'lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism': 'dependency_citation',
  'prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite': 'other',
  'lem-the-graph-notions-agree-with-the-published-finite-graph-theory': 'other',
  'lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph': 'other',
  'def-word-length-with-respect-to-a-generating-set': 'dependency_citation',
  'def-coarsely-dense-subset-and-quasi-isometry': 'other',
  'def-separated-net-in-a-metric-space': 'other',
  'def-quasi-isometry-type-of-a-finitely-generated-group': 'dependency_citation',
  'def-quasi-isometry-group-of-a-metric-space': 'dependency_citation',
  'thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse': 'logic',
  'def-quasi-geodesic-and-quasi-geodesic-metric-space': 'other',
  'cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics': 'logic',
  'ex-two-generating-sets-of-a-dihedral-group': 'dependency_citation',
  'fs-all-infinite-finitely-generated-groups-are-quasi-isometric': 'dependency_citation',
  'def-end-and-coend': 'other',
  'thm-the-set-of-natural-transformations-is-an-end': 'other',
  'def-set-weighted-limit-and-weighted-colimit': 'other',
  'cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target': 'other',
  'def-power-and-copower-by-a-set': 'other',
  'thm-representable-functors-carry-weighted-limits-to-weighted-limits': 'other',
  'rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits': 'other',
  'ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram': 'logic',
  'ex-the-evaluation-family-is-dinatural': 'other',
  'thm-a-weighted-limit-is-an-end': 'other',
  'cor-ends-commute-with-ends': 'dependency_citation',
  'thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor': 'logic',
}));

const fatalByLane = new Map(Object.entries({
  [IM('thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed', 'gpt-5.6-terra')]: 'dependency_citation',
  [IM('cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups', 'gpt-5.6-terra')]: 'dependency_citation',
  [IM('lem-the-graph-notions-agree-with-the-published-finite-graph-theory', 'gpt-5.6-terra')]: 'dependency_citation',
  [IM('ex-the-coend-of-a-hom-functor', 'deepseek-v4-pro')]: 'other',
}));

const nonfatalOverride = new Set([
  IM('ex-the-coend-of-a-hom-functor', 'gpt-5.6-terra'),
]);
const falsePositive = new Set([
  IM('ex-the-heisenberg-group-of-order-twenty-seven', 'claude-sonnet-4-6'),
]);

const meta = {
  'thm-a-central-product-of-extraspecial-p-groups-is-extraspecial': ['citation-inflated', 'facts-block', 'The order formula was restated without its finite-group hypothesis.'],
  'def-plus-and-minus-type-of-an-extraspecial-p-group': ['false-or-overstrong-statement', 'remark', 'The odd-prime signs do not multiply under central products.'],
  'prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner': ['false-or-overstrong-statement', 'remark', 'The kernel need not be strictly larger than the inner automorphisms for every general p-group.'],
  'fs-the-commutator-pairing-needs-no-choice-of-a-central-generator': ['false-or-overstrong-statement', 'statement', 'At p=2 the central generator is unique, so the stated falsehood was true.'],
  'thm-classification-of-extraspecial-p-groups-for-odd-p': ['invalid-inference', 'proof-step', 'The inductive central-product isomorphism lacked compatible restrictions on the identified centres.'],
  'def-special-and-extraspecial-p-groups': ['citation-inflated', 'remark', 'An extraspecial characterization was cited as an equivalence for all nonabelian special groups.'],
  'lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup': ['false-or-overstrong-statement', 'remark', 'Without centrality the antidiagonal need not even be a subgroup.'],
  'prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing': ['citation-truncated', 'facts-block', 'The kernel theorem was restated without its order hypothesis.'],
  'thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed': ['invalid-inference', 'proof-step', 'Peeling used the target order formula before induction supplied it.'],
  'thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed#citation': ['citation-inflated', 'facts-block', 'The recognition theorem was restated as if its Statement included a kernel formula.'],
  'cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups': ['false-or-overstrong-statement', 'remark', 'Distinct symplectic decompositions need not produce distinct subgroup pairs.'],
  'cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups#citation': ['citation-inflated', 'facts-block', 'The maximal-abelian correspondence omitted containment of the centre.'],
  'prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups': ['citation-misattributed', 'facts-block', 'Plus and minus type were attributed to a factor construction rather than the cited square-root count.'],
  'def-modular-group-of-order-p-cubed': ['false-or-overstrong-statement', 'remark', 'The power 1+p is not the smallest nontrivial power automorphism in general.'],
  'thm-classification-of-extraspecial-two-groups': ['invalid-inference', 'proof-step', 'The induction hypothesis did not supply existence of both types.'],
  'ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight': ['citation-missing', 'proof-step', 'The identification with the dihedral group required the order-eight classification.'],
  'ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two': ['citation-missing', 'statement', 'The title and proof omitted both extraspecialness and the order computation.'],
  'ex-the-two-extraspecial-groups-of-order-thirty-two': ['citation-missing', 'proof-step', 'The displayed central products were not proved extraspecial of order 32.'],
  'thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path': ['missing-hypothesis', 'statement', 'The empty graph made the unique-path condition vacuous.'],
  'lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism': ['citation-truncated', 'facts-block', 'The cited isometry and graph-isomorphism definitions omitted their defining preservation clauses.'],
  'prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite': ['undefined-notation', 'statement', 'The page defined degree only for finite neighbourhoods but asserted an infinite degree.'],
  'lem-the-graph-notions-agree-with-the-published-finite-graph-theory': ['false-or-overstrong-statement', 'statement', 'The global path metric is undefined on a disconnected finite graph.'],
  'lem-the-graph-notions-agree-with-the-published-finite-graph-theory#citation': ['citation-truncated', 'facts-block', 'The cited finite graph-distance fact ended before its defining formula.'],
  'lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph': ['missing-hypothesis', 'statement', 'The Statement omitted that the subset generates, so the path metric need not exist.'],
  'def-word-length-with-respect-to-a-generating-set': ['citation-missing', 'definition', 'Nonemptiness of the word-length minimum was not derived from the library generation definition.'],
  'def-coarsely-dense-subset-and-quasi-isometry': ['ill-typed-construction', 'definition', 'Distance to a subset was used for the empty subset although that term is locally defined only for nonempty subsets.'],
  'def-separated-net-in-a-metric-space': ['ill-typed-construction', 'definition', 'The net condition invoked distance to the empty subset.'],
  'def-quasi-isometry-type-of-a-finitely-generated-group': ['citation-missing', 'definition', 'Bilipschitz equivalence was not connected to quasi-isometry.'],
  'def-quasi-isometry-group-of-a-metric-space': ['citation-missing', 'definition', 'The quotient was formed without establishing bounded distance is an equivalence relation.'],
  'thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse': ['invalid-inference', 'proof-step', 'An infimum bound was treated as an attained distance.'],
  'def-quasi-geodesic-and-quasi-geodesic-metric-space': ['undefined-notation', 'definition', 'Quasi-geodesic segment and its endpoints were not defined.'],
  'cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics': ['false-or-overstrong-statement', 'proof-step', 'The standard word metric was falsely said to have infinite balls.'],
  'ex-two-generating-sets-of-a-dihedral-group': ['citation-missing', 'proof-step', 'Three-regularity on eight vertices does not identify the first Cayley graph as a cube.'],
  'ex-two-generating-sets-of-a-dihedral-group#cycle': ['citation-missing', 'proof-step', 'The second Cayley graph was called an 8-cycle without deriving the needed relations and traversal.'],
  'fs-all-infinite-finitely-generated-groups-are-quasi-isometric': ['citation-missing', 'proof-step', 'The growth contradiction used reduced-word counting and coarse fibre bounds not supplied by the cited facts.'],
  'def-end-and-coend': ['false-or-overstrong-statement', 'remark', 'For a discrete index category an end is only the product of diagonal values.'],
  'thm-the-set-of-natural-transformations-is-an-end': ['false-or-overstrong-statement', 'remark', 'A large source need not make the natural-transformation collection a proper class.'],
  'def-set-weighted-limit-and-weighted-colimit': ['ill-typed-construction', 'definition', 'The colimit hom-presheaf was composed with D instead of D-op.'],
  'cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target': ['false-or-overstrong-statement', 'remark', 'The Remark discussed large-index weighted limits outside the local definition.'],
  'def-power-and-copower-by-a-set': ['false-or-overstrong-statement', 'definition', 'A natural transformation in an arbitrary target was called a function rather than a morphism.'],
  'thm-representable-functors-carry-weighted-limits-to-weighted-limits': ['false-or-overstrong-statement', 'statement', 'A canonical natural bijection was asserted as literal equality of sets.'],
  'rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits': ['false-or-overstrong-statement', 'remark', 'Non-Set enrichment does not universally lose an element interpretation; Ab is a counterexample.'],
  'ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram': ['arithmetic-error', 'proof-step', 'Set(F(1),G(0)) has two functions, not one.'],
  'ex-the-evaluation-family-is-dinatural': ['false-or-overstrong-statement', 'remark', 'Functions of the displayed off-diagonal type can exist; what fails is a canonical natural extension.'],
  'thm-a-weighted-limit-is-an-end': ['false-or-overstrong-statement', 'statement', 'The final hypothesis sentence contradicted the equivalence just stated.'],
  'cor-ends-commute-with-ends': ['citation-truncated', 'facts-block', 'Fubini was restated without functor structures on the chosen inner ends.'],
  'ex-the-coend-of-a-hom-functor': ['false-or-overstrong-statement', 'remark', 'Every equivalence relation is abstractly an orbit partition, contrary to the Remark.'],
  'thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor': ['ill-typed-construction', 'proof-step', 'The naturality morphisms were written in directions that do not reach the required component.'],
};

function reverseDiff(text, diff, path, ordinal) {
  let lines = text.split('\n');
  const chunks = diff.split(/(?=^@@ )/m).filter((x) => x.startsWith('@@ '));
  for (const chunk of chunks.reverse()) {
    const all = chunk.split('\n');
    const m = all[0].match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
    if (!m) throw new Error(`bad hunk in ${path} at rollout ${ordinal}`);
    const newStart = Number(m[3]);
    const body = all.slice(1);
    if (body.at(-1) === '') body.pop();
    const oldSeq = [], newSeq = [];
    for (const line of body) {
      if (line.startsWith('\\ No newline')) continue;
      const tag = line[0], value = line.slice(1);
      if (tag === ' ') { oldSeq.push(value); newSeq.push(value); }
      else if (tag === '-') oldSeq.push(value);
      else if (tag === '+') newSeq.push(value);
      else throw new Error(`bad diff line ${JSON.stringify(line)} in ${path}`);
    }
    let at = newStart - 1;
    if (lines.slice(at, at + newSeq.length).join('\n') !== newSeq.join('\n')) {
      const pos = lines.join('\n').indexOf(newSeq.join('\n'));
      if (pos < 0) throw new Error(`cannot reverse ${path} at rollout ${ordinal}`);
      at = lines.join('\n').slice(0, pos).split('\n').length - 1;
    }
    lines.splice(at, newSeq.length, ...oldSeq);
  }
  return lines.join('\n');
}

// Reconstruct every pre-edit item from the durable fileChange records, working
// backward through the patches.  The 16-hex touch baseline independently
// verifies every resulting full digest before it can enter either ledger.
const db = new DatabaseSync(HISTORY, { readOnly: true });
const fileChanges = db.prepare(
  "select rollout_ordinal,item_json from thread_items where item_type='fileChange' order by rollout_ordinal desc",
).all();
const preTexts = new Map();
for (const row of fileChanges) {
  const event = JSON.parse(row.item_json);
  for (const change of [...event.changes].reverse()) {
    if (change.kind?.type !== 'update' || !change.path.includes('/items/')) continue;
    const current = preTexts.has(change.path)
      ? preTexts.get(change.path)
      : readFileSync(change.path, 'utf8');
    preTexts.set(change.path, reverseDiff(current, change.diff, change.path, row.rollout_ordinal));
  }
}
const preHash = new Map();
for (const [path, text] of preTexts) {
  const id = path.replace(/^.*\/items\//, '').replace(/\.md$/, '');
  const hash = itemHashGuard(text);
  if (!hash.startsWith(baseline[id])) {
    throw new Error(`${id}: reconstructed ${hash} does not match baseline ${baseline[id]}`);
  }
  preHash.set(id, hash);
}

const uniqueRejections = [...new Map(group.rejections.map((r) => [K(r), r])).values()];
if (uniqueRejections.length !== 201) throw new Error(`expected 201 unique rejections, got ${uniqueRejections.length}`);
const existing = existsSync(ADJ)
  ? readFileSync(ADJ, 'utf8').split('\n').filter(Boolean).map(JSON.parse)
  : [];
const existingKeys = new Set(existing.map(K));
const adjudications = [];
for (const rejection of uniqueRejections) {
  if (existingKeys.has(K(rejection))) continue;
  const laneKey = IM(rejection.id, rejection.model);
  const fatalType = nonfatalOverride.has(laneKey)
    ? undefined
    : fatalByLane.get(laneKey) ?? fatalAll.get(rejection.id);
  const outcome = fatalType ? 'confirmed_fatal'
    : falsePositive.has(laneKey) ? 'false_positive'
    : 'confirmed_nonfatal';
  const hash = preHash.get(rejection.id)
    ?? itemHashGuard(readFileSync(`items/${rejection.id}.md`, 'utf8'));
  if (!hash.startsWith(baseline[rejection.id])) {
    throw new Error(`${rejection.id}: adjudication hash ${hash} does not match baseline ${baseline[rejection.id]}`);
  }
  const row = {
    id: rejection.id,
    model: rejection.model,
    context_sha256: rejection.context_sha256,
    item_sha256: hash,
    outcome,
  };
  if (fatalType) row.defect_type = fatalType;
  adjudications.push(row);
}

function defectKey(r) {
  return r.id;
}

const fatalRows = adjudications.filter((r) => r.outcome === 'confirmed_fatal');
const grouped = new Map();
for (const r of fatalRows) {
  const key = defectKey(r);
  if (!meta[key]) throw new Error(`missing defect metadata for ${key}`);
  const rows = grouped.get(key) ?? [];
  rows.push(r);
  grouped.set(key, rows);
}

let serial = 0;
const ledgerRows = [];
for (const [key, refs] of grouped) {
  const [subclass, location, note] = meta[key];
  const subject = key.split('#')[0];
  const batch = group.pages.some((p) => p.batch === 9 && p.items?.includes?.(subject))
    ? '9'
    : group.items?.[subject]?.batch === 9 ? '9'
    : ['def-end-and-coend', 'thm-the-set-of-natural-transformations-is-an-end',
       'def-set-weighted-limit-and-weighted-colimit',
       'cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target',
       'def-power-and-copower-by-a-set',
       'thm-representable-functors-carry-weighted-limits-to-weighted-limits',
       'rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits',
       'ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram',
       'ex-the-evaluation-family-is-dinatural', 'thm-a-weighted-limit-is-an-end',
       'cor-ends-commute-with-ends', 'ex-the-coend-of-a-hom-functor',
       'thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor'].includes(subject) ? '9' : '2';
  const caught = refs.some((r) => r.model === 'deepseek-v4-pro') ? 'judge-deepseek'
    : refs.some((r) => r.model === 'claude-sonnet-4-6') ? 'judge-sonnet'
    : 'judge-terra';
  ledgerRows.push({
    defect_id: `frontier-18-d-step8-${String(++serial).padStart(3, '0')}`,
    run: RUN,
    at: '2026-08-25',
    class: 'accuracy',
    subclass,
    severity: 'fatal',
    location,
    subject,
    batch,
    caught_at_stage: '8-adjudicate',
    caught_by_role: caught,
    introduced_at_stage: '5-author',
    introduced_by_role: 'beta',
    should_have_caught: '6b-adjudicate',
    disposition: subject === 'fs-the-commutator-pairing-needs-no-choice-of-a-central-generator' ? 'narrowed' : 'fixed',
    repair_cost: 'repair+rejudge',
    item_sha256: refs[0].item_sha256,
    adjudication_ref: refs.map(({ id, model, context_sha256, item_sha256 }) => ({ id, model, context_sha256, item_sha256 })),
    subclass_note: note,
    evidence: [{ path: `items/${subject}.md`, anchor: location }],
    prevention: { kind: 'none', ref: '' },
  });
}

const covered = new Set(ledgerRows.flatMap((r) => r.adjudication_ref.map(K)));
if (covered.size !== fatalRows.length || fatalRows.some((r) => !covered.has(K(r)))) {
  throw new Error(`fatal ledger coverage mismatch: ${covered.size}/${fatalRows.length}`);
}
writeFileSync(DECISIONS, JSON.stringify({
  run: RUN,
  group: GROUP,
  baseline: 'pre-step8',
  duplicate_rejection_rows_collapsed: group.rejections.length - uniqueRejections.length,
  reconstructed_pre_edit_hashes: Object.fromEntries([...preHash].sort()),
  adjudications,
}, null, 2) + '\n');
writeFileSync(LEDGER_ROWS, JSON.stringify(ledgerRows, null, 2) + '\n');
if (adjudications.length) {
  appendFileSync(ADJ, adjudications.map((r) => JSON.stringify(r)).join('\n') + '\n');
}
const counts = adjudications.reduce((a, r) => ((a[r.outcome] = (a[r.outcome] ?? 0) + 1), a), {});
console.log(JSON.stringify({
  unique_rejections: uniqueRejections.length,
  appended_adjudications: adjudications.length,
  counts,
  repaired_items: preHash.size,
  defect_rows: ledgerRows.length,
  ledger_rows_file: LEDGER_ROWS,
}, null, 2));
