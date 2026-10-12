# Step 3b — pair `constructible-incidence-and-cochain-models` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-constructible-incidence-and-cochain-models-2772d341877c48a2`
- Batch: 36. A page `constructible-incidence-and-cochain-models` (order 1805),
  B page `constructible-incidence-and-cochain-models-examples` (order 1810).
- Date: 2026-10-10

## Owned IDs and open obligations (entry checkpoint)

A page (2 new items, to author):

1. `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
   (entry dependency level 9; recomputed to 11 at handoff)
2. `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`
   (entry dependency level 9; unchanged)

B page (1 new item, to author):

3. `ex-incidence-model-of-a-closed-interval` (entry dependency level 10;
   recomputed to 12 at handoff)

Open obligations at entry:

- Author all three items and both page files; keep the sealed manifest
  statements/IDs; recompute dependency levels after any dependency change.
- Audit the seven in-run suppliers on `analytic-constructible-sheaf-foundations`
  (batch 30) and `compact-support-sheaf-calculus` (batch 32); their files are not
  yet on disk at entry. If a supplier is unfinished at decision time, flag the
  exact supplier ID, consumer ID and consuming step here and leave that consumer
  decision escalated.
- Write/refresh `batch-36.proof-contracts.json` for all three items; run
  precheck, rendercheck, content policy, proof-contract `--strict`,
  `item-dependency-levels check`, and `validate-plan`.
- Record one `record-item` decision per item with `tools/step3-decisions.mjs`.

(Checkpoints appended as each item is audited, authored and checked.)

## Checkpoint 1 — `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`

- Authored `items/lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model.md`
  from the sealed batch-36 statement and the carrier route: ordinary
  incidence equivalence, star/global acyclicity, ordinary and compact-support
  finite cochain models with field-extension compatibility, full faithfulness
  and essential image, internal derived Hom, local product comparison.
- Dependency repair: 13 load-bearing suppliers added to the item and (to do)
  the batch manifest — the acyclic-resolution theorem, AC⇒DC, the
  K-projective/K-injective toolkit, the bounded-localization embedding, the
  module-on-a-ringed-space items, and the in-run batch-32
  `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`.
  This checkpoint declared 47 deps; the final item declares 48 deps with a
  48/48 wikilink match (`manifest-deps` 0 errors).
- Checks: precheck PASS (direct); `proof-layout` 1 item, 23 steps, 0 defects;
  rendercheck OK.
- Open obligation: all in-run suppliers (batches 30/32) still need rechecking
  against their authored files before the decision; at this checkpoint
  `lem-field-module-sheaves-have-injective-derived-models` and the three
  batch-32 suppliers are not yet on disk.
- **Final state (later update).** All eight in-run suppliers are now authored
  on disk and were re-read: the claims used in Facts [F6], [F7], [F10], [F11]
  and [F15] match the suppliers' statements (declaration-level reconciliation;
  independent audit follows in Steps 5–7). `dependency_level` was recomputed to
  **11** after the batch-30/32 supplier levels propagated, and the decision was
  re-recorded `repaired` (`defects: ["dependency"]`) at 12:11Z against the
  current inputs.
- **Receipt refresh (12:20Z).** The batch-30/32 relabelling changed this
  item's transitive inputs, so the receipt was re-verified and re-recorded
  `accept` (`defects: []`) after the compact-support clauses used in steps 2.3
  and 4.2 were checked against the revised supplier statements; the final
  `step3-decisions check` shows no open row for this item.

## Checkpoint 2 — `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`

- Authored `items/lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent.md`
  from the sealed statement and the carrier route: simplicial sheaf category,
  coinduction and explicit injective resolutions, acyclicity of coinduced
  injectives via the vertex-insertion contraction, the derived-augmentation
  double complex with finite diagonals (bisimplicial and composition clauses),
  the locally split Čech descent with Cartesian essential image, and the
  algebraic-constructibility restriction clause.
- Dependency repair: 6 suppliers added to the item and manifest
  (`thm-acyclic-resolution`-adjacent K-injectivity theorem, AC⇒DC, bounded
  localization embedding, module-on-ringed-space items, no-roof property);
  29 declared deps, all linked in Facts. `thm-extension-by-zero-adjunction-exactness`
  is retained as a declared ambient input and is recorded as not visibly loaded
  (scaffold note, conflict 3).
- Checks: precheck PASS (direct); `proof-layout` 1 item, 8 steps, 0 defects;
  rendercheck OK; prosecheck OK; content policy OK; depsource 3/3 selected
  consumers, 0 unresolved; source-fetch-check 4/4 fetch-verified.
- Open obligation: the batch-32 suppliers of L1
  (`lem-c-soft-field-sheaves-are-compact-support-acyclic`,
  `def-compactly-supported-global-sections`,
  `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`) are
  still unauthored; the proof-contract strict run reports the three
  corresponding `citation-fact-uncontracted` errors and item decisions for the
  consumers stay open until the supplier files and their uses are reconciled.
- **Final state (later update).** The three batch-32 suppliers landed, their
  statements were re-read against L1's compact-support Fact [F15], and the
  `citation-fact-uncontracted` errors cleared: `proof-contract --strict` now
  reports 0 errors, 0 warnings, 3/3 items. L2's level stayed **9** and its
  decision was recorded `repaired` (`defects: ["dependency"]`) at 12:09Z.

## Checkpoint 3 — `ex-incidence-model-of-a-closed-interval`

- Authored `items/ex-incidence-model-of-a-closed-interval.md`; both language
  pages created (`library/algebraic-geometry/constructible-incidence-and-cochain-models.md`
  and `…-examples.md`), rendercheck OK.
- Checks: precheck PASS; `proof-layout` 1 item, 3 steps, 0 defects; prosecheck
  5/5 files 0/0; content-policy 3/3 items 0/0.
- Open obligation: the decision depends on `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
  being accepted; recorded after the supplier reconciliation.
- **Final state (later update).** Recorded `repaired` (`defects:
  ["dependency"]`) at 12:11Z after L1's statement use and recomputed level
  (**12** = L1's 11 + 1) were current.
- **Receipt refresh (12:20Z).** The same batch-30/32 relabelling refreshed
  this example's transitive inputs; it was re-verified unchanged and
  re-recorded `accept` (`defects: []`), and the final `step3-decisions check`
  shows no open row.

## Checks actually run (final re-run at handoff, current disk)

Every command below was re-run on the current disk at handoff; the three item
files were not edited after the batched layout run.

- `precheck.mts` (three owned items, explicit paths): **PASS**, 0 failing.
- `proof-layout.mjs` (three owned items, one batched command): **3 items,
  34 steps, 0 defects** (23 L1 + 8 L2 + 3 example).
- `rendercheck.mjs` (3 items + 2 pages, explicit paths): **OK** — no wikilink
  inside math, no unbalanced delimiters, every math span parses under KaTeX.
- `prosecheck.mjs` (same 5 files): 0 errors, 0 warnings.
- `content-policy.mjs` batch-36 manifest: 3 scoped items, 0 errors, 0 warnings.
- `manifest-deps.mjs` batch-36 manifest: 3 items, 0 errors.
- `proof-contract.mjs batch-36.proof-contracts.json --strict`: **0 errors,
  0 warnings, 3/3 items** (the earlier three `citation-fact-uncontracted`
  errors cleared when the batch-32 suppliers landed).
- `item-dependency-levels.mjs check --run …`: **no finding for any batch-36
  item or page**; the declared levels **11/9/12 equal the computed levels**.
  An earlier run flagged 20 run-wide rows including the batch-30/32 pages; the
  batch-30/32 relabelling at 12:16Z cleared those, and the final run leaves 8
  sibling rows: three on batch 11
  (`cyclotomic-klr-algebras-and-highest-weight-categorification`) and five on
  batch 48 (`projective-perverse-hard-lefschetz-and-decomposition` and its
  examples page). None is a batch-36 obligation.
- `depsource.mjs --run … --items-file` (three IDs): **3/3 selected consumer
  coverage, 0 unresolved**; 73 deps link to published pages and the 10
  `draft-page` links are exactly the in-run batch-30/32 suppliers, now
  authored on disk.
- `depcheck.mjs --items-file` (three IDs): focused item checks plus page and
  prerequisite cycle checks passed. `extcheck.mjs --items-file`: 0
  recorded-not-proved. `fwdcheck.mjs --items-file`: the three items carry
  `inherited` forward markers and the checks passed.
- `coverage-checklist.mjs … --require-destination`: 2 pages, 26 harvested
  results, 0 errors, 1 known advisory (`coverage-low-yield` on the A page,
  explained at Step 3a and confirmed appropriate by the Step 3a scope review).
- `source-fetch-check.mjs --coverage …`: 4/4 fetch-verified, 4/4 resolved
  (0 documented drops).
- `validate-plan.mjs research/plan-spec.json --run …`: **no error names either
  batch-36 page**; the four current run errors are sibling pages
  (`logarithmic-hodge-complexes-and-smooth-open-weights` twice,
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`,
  `ariki-categorification-and-graded-decomposition-numbers`). The
  `redundant-prereq` advisories on the A page are plan-level and preserved for
  the Step-4 reconciler.
- `step3-decisions.mjs check --run … --phase final`: **zero open rows for the
  three owned items or the pair**; the only open rows naming a batch-36 ID are
  the two downstream consumer escalations listed below.
  Between the first final check and handoff, the batch-30/32 relabelling at
  12:15–12:16Z changed the transitive inputs of L1 and the example, so their
  receipts (recorded at 12:11Z) went stale; both were re-verified against the
  revised supplier statements and re-recorded `accept` at 12:20Z, and the
  re-run check again reports zero open rows.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated;
  the batch-36 input carries **13 rows** (2 page edges, 8 L1 edges, 3 L2
  edges), all `verified` at declaration level.

## Final dependency levels (recomputed after dependency changes)

The entry (scaffold) levels were 9 / 9 / 10. After the in-run suppliers were
authored, the levels were recomputed from the actual authored dependency graph
and the declared values were updated in both the item metadata and the batch
manifest:

- `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
  — **11** (48 deps; its deepest suppliers sit at computed level 10).
- `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent` — **9**
  (29 deps; unchanged).
- `ex-incidence-model-of-a-closed-interval` — **12** (6 deps; L1 at 11 plus
  one).

`item-dependency-levels.mjs check --run …` reports no level, shape or cycle
finding for any of the three, so the recorded levels equal the computed ones at
handoff. L1 and the example were re-recorded `accept` at 12:20Z when the
batch-30/32 relabelling refreshed their transitive inputs (see the checks
section), and L2's `repaired` record at 12:09Z remains current; the final
`step3-decisions check` shows zero open rows for all three items.

## Downstream consumer escalations (report only — other batches)

Two authored consumers outside this batch cite the batch-36 suppliers, and
their recorded step-3b decisions remain `escalate` with owner-pending receipts
("changed inputs require a current owner decision"). They are on page
`complex-algebraic-stratified-topology` (batch 37) and are **not** edited here:

1. `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
   — consuming steps 2.1–5.1 use
   `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`.
   The supplier's Step-3 decision is now recorded and current, so the reason
   given at escalation time (supplier decision not yet recorded) no longer
   holds; the remaining action is the owner's/that batch's current decision
   plus the Step 5–7 verification of the actual use.
2. `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
   — consuming steps 1.1–2.1 use both
   `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
   and `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`;
   same resolution path.

Neither row can be resolved from this dispatch: only the owner (or the owning
batch acting under owner authority) may replace those receipts, and the
consumer-side proof uses must be verified with the completed suppliers in
Steps 5–7.

## Handoff summary

- **Completed IDs.** All three owned items authored on disk with statements,
  hypotheses and provenance preserved from the sealed batch-36 scaffold:
  `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`,
  `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`,
  `ex-incidence-model-of-a-closed-interval`. Both language pages exist:
  `library/algebraic-geometry/constructible-incidence-and-cochain-models.md`,
  `library/algebraic-geometry/constructible-incidence-and-cochain-models-examples.md`.
- **Added suppliers.** No new item IDs were created; the repair added existing
  published items and the in-run batch-30/32 items as suppliers, registered in
  the manifest, the item frontmatter, the proof contracts and the 13-row
  cross-batch input (8 L1 edges, 3 L2 edges, 2 page edges).
- **Checks run.** precheck, batched proof-layout, rendercheck, prosecheck,
  content-policy, manifest-deps, `proof-contract --strict`,
  item-dependency-levels, depsource, depcheck, extcheck, fwdcheck,
  coverage-checklist, source-fetch-check, `step3-decisions check --phase
  final`, ledger refresh, and `validate-plan` — all clean for batch-36 scope
  as detailed above.
- **Published concerns.** None; every published supplier used was read on disk
  and matches its use.
- **Open obligations.** The two batch-37 consumer escalations above (owner
  decision + Steps 5–7 use verification); the retained declared-but-not-
  visibly-loaded `thm-extension-by-zero-adjunction-exactness` input on L2,
  recorded in step 6.1 and per scaffold conflict 3; the preserved
  `coverage-low-yield` advisory; and sibling-batch run-wide findings (8
  dependency-level rows, 4 `validate-plan` errors) that are not batch-36
  obligations. One procedural note for the serial reconciler: the batch-30/32
  relabelling did edit inputs in this batch's transitive receipt closure, and
  the L1 and example receipts were re-recorded `accept` at 12:20Z as a result;
  any further sibling edit to those manifest entries or supplier files will
  invalidate the affected receipt again, so the standard current-receipt gate
  applies at the next handoff.
