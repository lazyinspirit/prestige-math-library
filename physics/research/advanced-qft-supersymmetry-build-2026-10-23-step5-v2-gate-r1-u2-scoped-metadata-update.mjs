import {readFileSync, writeFileSync, readdirSync, mkdtempSync, rmSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';

const run = 'advanced-qft-supersymmetry-build-2026-10-23';
const reviewer = 'step5-v2-gate-r1-u2';
const changes = [
  [30, 'def-qftx-physical-superspace-normalization', 'Reviewed the complete current Definition and both direct supplier Definitions. The finite coefficient algebra, smooth fields, reversing conjugation and left derivatives are explicitly supplied. Checked raw auxiliary conjugation and extraction: I_D=-F_raw*F_raw and F_raw=2F give +F*F after -1/4. For T^mu=theta sigma^mu barred-theta, its quadratic top coefficient is 2 eta^{mu nu}; the scalar Taylor product has raw integral 4 eta^{mu nu} partial_mu barred-phi partial_nu phi after compact-support integration by parts. The physical scalar sign follows. At fixed y, the two barred derivatives extract the barred top coefficient; raising indices with epsilon^{12}=-1 gives the stated opposite contracted orders. Finite inverse coordinate translation changes top extraction only by finitely many spacetime derivatives, hence a divergence. Compact support, or absolute integrability of both densities and the specified vanishing cube-boundary flux, justifies only the integrated transfer. Zero fields, pure auxiliary fields and nilpotent coefficients are included; no quantum measure identity, arbitrary-family choice or empirical claim occurs. Read Martin v7 section 4.4 equations (4.4.6)-(4.4.12), section 4.6 equations (4.6.6)-(4.6.8), section 4.7 equations (4.7.1)-(4.7.9), and section 4.9 through (4.9.16). These supply comparison conventions; the raw-to-physical conversion was checked locally rather than inferred from matching measure notation. No links interrupt the Definition and no diagram is present or required. No item repair is needed.'],
  [8, 'ex-qftx-borel-localization-rotation-on-projective-line', 'Reviewed the complete Example, A1/F1-F3 and Verification steps 1.1 and 2.1 against all four supplier interfaces. AC is explicitly adopted and covers the suppliers countable-choice needs. Equality of projective points with both coordinates nonzero would force every circle phase to equal one; the coordinate-axis points are indeed fixed. The two chart actions have weights +1 and -1, giving u and -u with the same right Milnor associated-line convention. CP^1 is compact, real two-dimensional, Hausdorff, second-countable and without boundary; the displayed action is jointly smooth, so the supplied Borel theorem applies for Q and R. The Borel construction of the two fixed points is the finite disjoint union of two copies of BT; singular cochains and localization preserve this finite direct sum. The zero homogeneous pair is excluded, and both normal weights are nonzero. Read Atiyah-Bott section 3, Proposition (3.4), Theorem (3.5) and the normal-character discussion ending at (3.7), printed pages 7-9; that source uses complex coefficients, while the exact local theorem supplies the stated rational and real cases. No statement links or diagrams occur. All current claims and proof steps are sound; no item repair is needed.'],
];
if ((process.argv[2] ?? 'risk') === 'risk') for (const [batch, id, notes] of changes) {
  const path = `research/${run}-batch-${batch}.proof-contracts.json`;
  // Read the owning contract only after the wrapper has acquired the lock.
  const document = JSON.parse(readFileSync(path, 'utf8'));
  if (!document.scope.includes(id) || !document.contracts[id]) throw Error(`missing owned contract ${id}`);
  const existing = document.contracts[id].risk_review;
  const review = {status:'complete', reviewer, notes};
  if (existing && JSON.stringify(existing) !== JSON.stringify(review)) throw Error(`unexpected existing review ${id}`);
  document.contracts[id].risk_review = review;
  writeFileSync(path, JSON.stringify(document, null, 2) + '\n');
}
if ((process.argv[2] ?? 'risk') === 'risk') console.log('Recorded two scoped current risk reviews in owning batch contracts; item bytes unchanged.');

if (process.argv[2] === 'ledger') {
  const hash = value => createHash('sha256').update(value).digest('hex');
  const parse = path => JSON.parse(readFileSync(path, 'utf8'));
  const base = `research/${run}-step5-v2`;
  const ledger = 'research/defect-ledger.jsonl';
  const rows = readFileSync(ledger, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
  const existing = new Map(rows.map(row => [row.defect_id, row]));
  const incoming = [];
  const labels = [
    [`${run}-batch-12-alleged-dictionary-cycle`, 'proof-step', 'The original proof locus is retained in the original row; this enum correction denotes its proof-step argument.'],
    [`${run}-3a-batch-34-atlas-gaussian-statistics`, 'statement', 'The original uncertainty locus is a public experimental claim, represented by the closed statement location enum.'],
    [`${run}-3a-batch-34-vacuum-definition-locator`, 'frontmatter', 'The original sources locus denotes the Martin source locator in frontmatter, not a change of the Definition.'],
    [`${run}-3a-batch-34-vacuum-energy-locator`, 'frontmatter', 'The original sources locus denotes the Martin source locator in frontmatter, not a change of the Statement.'],
  ];
  for (const [id, location, note] of labels) {
    const prior = existing.get(id);
    if (!prior || prior.run !== run) throw Error(`missing taxonomy predecessor ${id}`);
    const successor = `${id}-gate-r1-u2-location-v1`;
    if (existing.has(successor)) continue;
    const row = structuredClone(prior);
    row.defect_id = successor;
    row.location = location;
    row.location_note = `${note} Historical location: ${prior.location}.`;
    row.supersedes = [id];
    row.metadata_correction = {kind:'taxonomy-only', original_defect_id:id, original_row_sha256:hash(JSON.stringify(prior)), corrected_fields:['location','location_note']};
    incoming.push(row);
  }
  const classifications = [
    ['invalid-inference','proof-step'], ['ill-typed-construction','definition'],
    ['undefined-notation','definition'], ['missing-choice-scope','facts-block'],
    ['missing-hypothesis','statement'], ['ill-typed-construction','definition'],
    ['missing-hypothesis','statement'], ['missing-hypothesis','definition'],
    ['arithmetic-error','definition'], ['missing-hypothesis','statement'],
    ['ill-typed-construction','definition'], ['false-or-overstrong-statement','definition'],
    ['missing-hypothesis','proof-step'], ['ill-typed-construction','definition'],
    ['missing-map','definition'], ['missing-hypothesis','statement'],
    ['citation-inaccurate','statement'], ['undefined-notation','definition'],
    ['ill-typed-construction','statement'], ['undefined-notation','definition'],
    ['missing-hypothesis','definition'], ['undefined-notation','definition'],
    ['invalid-inference','proof-step'], ['citation-inflated','facts-block'],
    ['invalid-inference','proof-step'], ['invalid-inference','proof-step'],
    ['missing-hypothesis','statement'], ['false-or-overstrong-statement','statement'],
    ['invalid-inference','proof-step'], ['citation-inflated','facts-block'],
    ['ill-typed-construction','definition'], ['invalid-inference','proof-step'],
    ['citation-inflated','facts-block'], ['citation-inflated','facts-block'],
    ['missing-choice-scope','statement'], ['missing-hypothesis','definition'],
    ['missing-hypothesis','definition'], ['undefined-notation','statement'],
    ['arithmetic-error','statement'], ['missing-hypothesis','definition'],
  ];
  // Authenticate each original tuple and its genuine completed native review;
  // this reconciles historical metadata, never supplies a new adjudication.
  const adjudicationPath = `research/${run}-judge-adjudications.jsonl`;
  const fatals = readFileSync(adjudicationPath,'utf8').split('\n').filter(Boolean).map(JSON.parse).filter(row => row.outcome === 'confirmed_fatal');
  if (fatals.length !== classifications.length) throw Error('changed fatal tuple inventory');
  const collections = new Map();
  const files = readdirSync(base).filter(name => /^step5-v2-(initial|repeat)-r\d+-u\d+\.json$/.test(name));
  const reports = files.map(name => ({path:`${base}/${name}`, report:parse(`${base}/${name}`)}));
  const key = row => JSON.stringify([row.id,row.model,row.context_sha256,row.outcome]);
  const superseded = new Set(rows.flatMap(row => row.supersedes ?? []));
  const active = rows.filter(row => !superseded.has(row.defect_id));
  for (let index=0; index<fatals.length; index++) {
    const decision = fatals[index];
    const matches = reports.filter(({report}) => report.phase === decision.step5_phase && report.round === decision.step5_round && report.decisions.some(row => key(row) === key(decision)));
    if (matches.length !== 1) throw Error(`ambiguous original report ${decision.id}`);
    const {path:reportPath, report} = matches[0];
    const ownDecision = report.decisions.find(row => key(row) === key(decision));
    if (ownDecision.reason !== decision.reason || ownDecision.uncertain !== false) throw Error(`changed original decision ${decision.id}`);
    const collectionPath = `${base}/${decision.step5_phase}-${decision.step5_round}-collected.json`;
    if (!collections.has(collectionPath)) collections.set(collectionPath, parse(collectionPath));
    const collection = collections.get(collectionPath);
    if (collection.errors.length || collection.evidence[resolve(reportPath)] !== hash(readFileSync(reportPath))) throw Error(`unauthenticated report ${reportPath}`);
    if (!collection.decisions.some(row => key(row) === key(decision) && row.reason === decision.reason)) throw Error(`uncollected decision ${decision.id}`);
    const review = report.reviews.find(row => row.id === decision.id);
    if (!review || review.disposition !== 'repaired' || review.uncertain !== false || !collection.reviews.some(row => row.id === review.id && row.post_sha256 === review.post_sha256 && row.review_context_sha256 === review.review_context_sha256)) throw Error(`missing genuine repaired review ${decision.id}`);
    const owners = active.filter(row => row.run === run && row.subject === decision.id && (row.adjudication_ref ?? []).some(ref => ref.id === decision.id && ref.model === decision.model && ref.context_sha256 === decision.context_sha256 && ref.item_sha256 === decision.item_sha256));
    if (owners.length > 1) throw Error(`duplicate existing tuple ownership ${decision.id}`);
    if (owners.length === 1) continue;
    const defectId = `${run}-step5-${decision.step5_phase}-r${decision.step5_round}-${decision.id}`;
    if (existing.has(defectId)) throw Error(`unmatched existing reconciliation ${defectId}`);
    const [subclass, location] = classifications[index];
    incoming.push({
      defect_id:defectId, run, at:decision.at, batch:report.unit,
      class:'accuracy', subclass, severity:'fatal', location, subject:decision.id,
      caught_at_stage:'5-adjudicate', caught_by_role:'final-adjudicator', disposition:'fixed',
      adjudication_ref:[{file:adjudicationPath, report:reportPath, id:decision.id, model:decision.model, context_sha256:decision.context_sha256, item_sha256:decision.item_sha256}],
      evidence:[
        {path:reportPath, sha256:hash(readFileSync(reportPath)), note:`Original native ${report.phase} round ${report.round} unit ${report.unit} decision and repaired review: ${ownDecision.reason}`},
        {path:collectionPath, sha256:hash(readFileSync(collectionPath)), note:'Immutable successful collection authenticates the exact original decision and its historical repaired review. No new scientific review or current-context certification is asserted by this bookkeeping row.'},
      ],
      correction:ownDecision.reason,
      historical_repair:{post_sha256:review.post_sha256, review_context_sha256:review.review_context_sha256},
      recorded_by:reviewer, independent_review:false,
    });
  }
  const temp = mkdtempSync(join(tmpdir(), 'aqft-gate-u2-ledger-'));
  try {
    const path = join(temp, 'rows.json');
    writeFileSync(path, JSON.stringify(incoming,null,2)+'\n');
    const result = spawnSync(process.execPath,['tools/physics-support/defect-ledger.mjs','append','--file',path],{encoding:'utf8'});
    process.stdout.write(result.stdout ?? '');
    process.stderr.write(result.stderr ?? '');
    if (result.status !== 0) throw Error(`ledger append failed ${result.status}`);
  } finally { rmSync(temp,{recursive:true,force:true}); }
  console.log(`Scoped reconciliation: ${incoming.length} append-only rows; historical reports, decisions and item carriers unchanged.`);
}
