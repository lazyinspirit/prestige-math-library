# Step 3b — A/B pair `em-empirical-tests-and-scope` / `em-empirical-tests-and-scope-examples`

Run `physics-em-sr-40-2026-10-08`, role alpha-high, batch 38, 2026-10-09.
Owned A page order 355 (`em-empirical-tests-and-scope`), B page order 356
(`em-empirical-tests-and-scope-examples`), category `classical-electromagnetism`,
library `physics`.

## Owned item IDs (audit/authoring order, ascending dependency level)

13. `def-em-experiment-record-contract` (A page).
14. `exp-em-induction-report` (A page).
14. `exp-em-inverse-square-report` (A page).
14. `exp-em-wave-propagation-report` (A page).
14. `ex-em-apparatus-model-ambiguity` (B page).
20. `pthm-em-specified-model-comparison` (A page).
21. `ex-em-ideal-and-measured-fringes` (B page).
24. `rem-em-classical-validity-limits` (A page).

## Open obligations at entry

- O1: audit every scaffold statement against its design carrier and suppliers;
  repair local gaps; author all eight items plus the two library pages;
  preserve IDs, titles, kinds, scopes and promises.
- O2: run per-item `precheck.mts`, `rendercheck.mjs`, `depcheck.mjs`,
  `content-policy.mjs` and, before handoff, one `proof-layout.mjs` run over
  all changed item paths batched in a single command; run
  `item-dependency-levels.mjs check --run`,
  `validate-plan.mjs research/plan-spec.json` and the scoped physics content
  gate for the containing batch.
- O3: write `research/physics-em-sr-40-2026-10-08-batch-38.proof-contracts.json`
  for the proof-bearing items (`pthm-em-specified-model-comparison`, the two
  example verifications), and reconcile contracts for nonproof items.
- O4: reconcile the actual in-run suppliers: `def-em-lab-geometry`,
  `def-em-si-conventions`, `def-em-fields`, `def-em-sources`,
  `def-em-fixed-test-geometry`, `def-em-vacuum-energy-flux`,
  `pthm-em-integral-maxwell`, `pthm-em-wave-energy-average`,
  `thm-em-uncertainty-analysis`, `post-em-material-closure`,
  `post-em-lorentz-coupling`, `pthm-em-classical-interference`,
  `rem-em-radiation-reaction-limits`, `def-em-plane-wave-definition`
  (authored state varies; check at decision time). Escalate any unwritten
  supplier with the exact consumer step.
- O5: record per-item Step-3b decisions with `step3-decisions.mjs record-item`
  (`accept` only after complete authoring and checks; otherwise `escalate`,
  with exact evidence), and refresh the batch-38 coverage / cross-batch rows
  that concern this pair without disturbing siblings.

(checkpoint log appended below as items are completed)

## Checkpoint 0 — entry audit (2026-10-09)

- Read in full: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
  `WORKFLOW.md`, owner authoring direction, batch-38 manifest (all eight
  scaffold statements), coverage, notes, cross-batch input (22 rows),
  Step 3a scope review + receipt, the design carriers E1–E3, U1/U2, K10, X8,
  the record-contract clause of `definition-contracts.md`, and the current
  authored suppliers named in `deps` (def-em-lab-geometry, def-em-si-conventions,
  def-em-fields, def-em-sources, def-em-fixed-test-geometry,
  def-em-vacuum-energy-flux, def-em-plane-wave-definition,
  pthm-em-integral-maxwell, thm-em-uncertainty-analysis, post-em-material-closure,
  post-em-lorentz-coupling).
- Supplier authored state at entry: `pthm-em-wave-energy-average` (pair
  em-vacuum-waves-and-polarization), `pthm-em-classical-interference` (same
  page) and `rem-em-radiation-reaction-limits` (pair
  em-retarded-fields-and-radiation) have no `items/` carrier yet; their
  consuming steps are pthm-em-specified-model-comparison (a)(ii) and (b)
  context, ex-em-ideal-and-measured-fringes clauses (i)–(iii), and
  rem-em-classical-validity-limits clause (c). Consumers are authored against
  the current scaffolded interfaces and their decisions stay escalated if the
  carriers are still absent at decision time.
- Entry open obligations O1–O5 stand. Authoring order per dispatch: record
  contract, induction report, inverse-square report, wave-propagation report,
  ambiguity example, comparison theorem, fringes example, limits remark.

## Checkpoint 1 — def-em-experiment-record-contract (level 13)


- Authored so far: `items/def-em-experiment-record-contract.md` (deps 7;
  precheck n/a clean, rendercheck OK, depcheck scoped OK, content-policy 0
  errors), `items/exp-em-induction-report.md`,
  `items/exp-em-inverse-square-report.md`,
  `items/exp-em-wave-propagation-report.md` (five sections + empirical_result,
  nonproof structure precheck PASS, rendercheck OK, content-policy 0 errors),
  `items/ex-em-apparatus-model-ambiguity.md` (Verification adopted in the
  precheck's canonical layered form; precheck PASS; layout 0 defects; six
  steps 1.1/2.1-2.3/3.1/4.1), `items/pthm-em-specified-model-comparison.md`
  (Statement/Facts/Proof; steps 1.1-1.3/2.1/3.1; precheck PASS; layout 0
  defects; `relations.tested_by` names the three reports as testing the
  physical applicability of its predictions; clause (c) keeps the design's
  "no numerical application" content without creating a logical dependency).
- Manifest decision (recorded): `ex-em-ideal-and-measured-fringes` gains six
  imported mathematical-premise dependencies genuinely used by its
  verification — `thm-quarter-turn-values-and-shift-formulas` (π-shift values
  and 2π-shift induction), `thm-complex-exponential-is-entire-with-derivative-itself`
  and `cor-complex-differentiability-implies-continuity` (entire ⇒ continuous),
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition` (C^k algebra
  and composition), `thm-lebesgue-measure-is-a-complete-measure` (the ambient
  measure space), `thm-reals-ordered-field` (instantiating `lem-of-sign-rules`
  at R). All are pinned published imports whose first homes
  (sine-cosine-and-the-definition-of-pi, complex-differentiability-and-cauchy-riemann,
  the-inverse-function-theorem-completed, lebesgue-measure-on-euclidean-space,
  foundations-of-the-real-numbers) lie in the declared requires-closure of the
  page, all contribute level 0, and the item level stays 21. The batch-38
  manifest was updated for deps and roles only (targeted text edit; no other
  row changed).
- Local interface decision (recorded): in `ex-em-ideal-and-measured-fringes`
  clause (ii) the measurability of the zero extension of the detector density
  is stated as a declared hypothesis of the detector model (the scaffold
  derived it from the trace sigma-algebra). The density class is unchanged
  (trace-measurable densities on a measurable bin are exactly those whose zero
  extension is Lebesgue measurable); deriving the trace-sigma-algebra
  equivalence would require three further imported definitions/theorems not
  presently in the dependency list, and the example neither uses nor claims
  that equivalence. Flagged for Step 5-8 review with this exact reason.

## Checkpoint 2 — all eight items authored and the pages written (2026-10-09)

Files written (all under this workspace):

- `items/def-em-experiment-record-contract.md` — Definition, clauses (a)-(i),
  the batch-38 record vocabulary verbatim in content; provenance
  ai-altered/not-applicable; 4 source references with locators (GUM, Faraday,
  Hertz, Cavendish).
- `items/exp-em-induction-report.md`, `items/exp-em-inverse-square-report.md`,
  `items/exp-em-wave-propagation-report.md` — five public sections each plus
  `empirical_result` (observation/uncertainty/conditions/source_url matching a
  source reference); provenance ai-altered/not-applicable.
- `items/ex-em-apparatus-model-ambiguity.md` — Example + Verification in the
  precheck's canonical layered form, steps 1.1; 2.1-2.3; 3.1; 4.1.
- `items/pthm-em-specified-model-comparison.md` — Statement, Facts [F1]-[F6],
  Proof steps 1.1-1.3; 2.1; 3.1; `relations.tested_by` = the three reports
  (nonlogical; never deps).
- `items/ex-em-ideal-and-measured-fringes.md` — Example + Verification, steps
  1.1-1.4; 2.1-2.4; 3.1-3.3; 4.1 (12 steps).
- `items/rem-em-classical-validity-limits.md` — Remark clauses (a)-(g), no
  Proof section, provenance ai-altered/not-applicable.
- `library/classical-electromagnetism/em-empirical-tests-and-scope.md` (items
  list in manifest order) and
  `library/classical-electromagnetism/em-empirical-tests-and-scope-examples.md`
  (examples list in manifest order), both `library: physics`, `status: draft`.
- `research/physics-em-sr-40-2026-10-08-batch-38.proof-contracts.json` —
  version 1, level `physics-em-sr-40-2026-10-08`, scope = all eight items;
  proof worksheets with exact citation quotes and uses for the theorem and the
  two example verifications, `physics_review` (seven fields each) for the
  three experiments, and boundary-only worksheets for the definition and the
  remark.
- Batch-38 cross-batch input refreshed to 22 rows: 18 `verified` (all
  authored suppliers whose actual uses were reconciled) and 4 `open` (the two
  required pages without carriers yet, plus the rem-em-radiation-reaction-limits
  item row and the page row that depends on that pair).

## Checks actually run (2026-10-09, exact outcomes)

- `precheck.mts` on the six proof-bearing items: 6 checked, 0 failing
  (three nonproof-structure passes, three direct passes; no repair proposed
  after the canonical layering was adopted for the two examples).
- `rendercheck.mjs` on the eight items and the two pages: OK — 10 files, no
  wikilink in math, no nested/unbalanced delimiters, no multiline display,
  every math span parses under KaTeX, every frontmatter block parses.
- `proof-layout.mjs` in one batched command over the eight changed item paths:
  8 items, 23 steps, 0 defects.
- `content-policy.mjs research/…-batch-38.pages.json`: 8 scoped items,
  0 errors, 0 warnings.
- `proof-contract.mjs research/…-batch-38.proof-contracts.json --strict`:
  0 errors, 0 warnings, 8/8 items checked.
- `author-check.mts physics-em-sr-40-2026-10-08 38`: `ok: true`; precheck,
  rendercheck, content-policy and proof-contract all exit 0; receipt written to
  `research/physics-em-sr-40-2026-10-08-author-check-38.json`.
- `depcheck.mjs --items-file` scoped to the eight items: only the expected
  `dep-unresolved`/`link-unresolved` errors for the missing supplier
  `rem-em-radiation-reaction-limits`; no other error or warning.
- Focused `validatePhysicsContent` over the eight items and two pages: only
  (i) the expected unresolved `rem-em-radiation-reaction-limits`, and (ii) two
  errors inside the supplier chain: `math-physics-dependency` and
  `mathematical-role` on `thm-sr-tensor-and-current-transformation` (a
  mathematics-domain theorem that depends on the physics item
  `def-sr-si-units-and-coordinate-conventions` under a
  `formulation-prerequisite` role). See the parallel concern below.
- `item-dependency-levels.mjs check --run`: my eight labels (13, 14, 14, 14,
  14, 20, 21, 24) match the computed levels; the only run-level error is the
  sibling item `lem-em-outgoing-source-helmholtz-and-diffraction` (level 1,
  computed 0), outside this pair.
- `validate-plan.mjs research/plan-spec.json --run`: my rows read
  `355 em-empirical-tests-and-scope 6 items` and `356
  em-empirical-tests-and-scope-examples 2 items` with their declared
  `requires` and no `undeclared-prereq`, `prereq-order`, cycle, B-leaf or
  order error; the run-level FAIL consists of other pairs' undeclared-prereq
  rows (em-elementary-mathematical-prerequisites, em-expanded-analysis-
  prerequisites, em-experiment-analysis-prerequisites, em-material-response,
  em-material-response-examples, em-variational-mathematical-prerequisites,
  em-boundary-and-spectral-prerequisites and their examples companions) —
  Step-4 splice items outside this pair.
- `physics-check.mjs --run`: fails closed at the run level on unauthored
  frontier items (`missing current item lem-em-spherical-mean-wave-identity`
  among others) — run-wide frontier incompleteness, not a defect of this pair.
  The batch-scoped content gates above (content-policy, physics-content focus,
  depcheck) are clean apart from the reported items.
- `frontier-dependency-ledger.mjs refresh --run`: refreshed and deduplicated;
  batch 38 now carries a current review row for every declared edge, with the
  four `open` rows named above.

## Supplier reconciliation and escalations

- Re-reconciled on current authored carriers (no textual drift found in the
  used clauses): def-em-lab-geometry, def-em-si-conventions, def-em-fields,
  def-em-sources, def-em-fixed-test-geometry, def-em-vacuum-energy-flux,
  def-em-plane-wave-definition, pthm-em-integral-maxwell,
  pthm-em-wave-energy-average (clause (b)), pthm-em-classical-interference
  (clauses (a),(b),(d)), thm-em-uncertainty-analysis, post-em-material-closure,
  post-em-lorentz-coupling.
- Open escalation (recorded as `escalate`): `rem-em-classical-validity-limits`
  clause (c) cites `rem-em-radiation-reaction-limits` (pair
  em-retarded-fields-and-radiation, batch 36, level 23), which has no `items/`
  carrier at decision time. The other four suppliers of that remark were
  verified. Owner resolution required once the supplier lands; the consumer is
  authored and checked apart from the unresolved link.
- Closed escalations: `pthm-em-specified-model-comparison` and
  `ex-em-ideal-and-measured-fringes` were prepared against the scaffolded
  vac-wave interfaces; both suppliers (`pthm-em-wave-energy-average`,
  `pthm-em-classical-interference`) were authored during this dispatch and
  their statements, hypotheses, symbols and signs were reconciled, so both
  items are recorded `accept`.

## Recorded Step-3b item decisions

`accept` with confidence 1 and examined dependency lists:
`def-em-experiment-record-contract`, `exp-em-induction-report`,
`exp-em-inverse-square-report`, `exp-em-wave-propagation-report`,
`ex-em-apparatus-model-ambiguity`, `pthm-em-specified-model-comparison`,
`ex-em-ideal-and-measured-fringes`.
`escalate`: `rem-em-classical-validity-limits` (missing supplier, exact
consumer step clause (c), evidence in the receipt). Receipts are
`research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json`.
`step3-decisions.mjs check --run … --phase scope` reports all 40 pair scopes
closed, including this pair.

## Concerns outside this pair (reported, not repaired)

1. **Confirmed schema-boundary defect in a supplier chain reaching this
   pair.** `items/thm-sr-tensor-and-current-transformation.md` is
   `domain: mathematics`, `kind: theorem`, yet lists the physics item
   `def-sr-si-units-and-coordinate-conventions` in `deps` under
   `formulation-prerequisite`. The physics-content validator raises
   `math-physics-dependency` and `mathematical-role` for it, and the error is
   in the closure of this pair through `def-em-sources` (a direct dependency
   of `def-em-experiment-record-contract`). Required repair owner: the pair
   owning that SR item. Remedy: remove the physical dependency from the
   mathematical item and express the transformation statement in purely
   mathematical terms (units interpretations belong to a separate physics
   item), or obtain an owner decision before any reclassification of the item.
   Confidence: confirmed by the mechanical gate, not a suspicion.
2. **Run-level level-label mismatch.** `lem-em-outgoing-source-helmholtz-and-diffraction`
   stores `dependency_level: 1` where the checker computes 0 (batch 40 area,
   outside this pair).
3. **Run-level plan mismatches.** `validate-plan --run` FAIL rows for the
   pages listed under Checks are pre-existing undeclared-prerequisite rows of
   other pairs; the Step-4 splice owner should reconcile them. None concern
   the items of this pair.
4. **Run-level incompleteness.** `physics-check --run` and the frontier
   extcheck cannot pass while other frontier items lack carriers
   (`lem-em-spherical-mean-wave-identity`, `pthm-em-lienard-emitted-power`,
   `pthm-sr-observer-time-length-and-velocity-measurements`,
   `texp-em-classical-orbit-instability`, `rem-em-radiation-reaction-limits`
   among them). The batch-scoped gates for this pair are clean.

## Handoff summary

- Completed and fully authored (with pages and contracts): all eight assigned
  items; both library pages; batch-38 proof contracts; batch-38 ledger input
  refreshed; per-item decisions recorded.
- Checks actually run: precheck, rendercheck, proof-layout (batched), 
  content-policy, strict proof-contract, author-check 38 (all four checks),
  scoped depcheck, focused physics-content validation,
  item-dependency-levels, validate-plan, ledger refresh. Results as listed
  above; the only failures attributable to this pair are the flagged missing
  supplier and its dependent remark decision.
- Suppliers added by this author: none (no new prerequisite items were needed;
  six already-published mathematical imports were added to the manifest deps
  of `ex-em-ideal-and-measured-fringes` and recorded in item and manifest).
- Open obligations: `rem-em-classical-validity-limits` remains `escalate`
  until `rem-em-radiation-reaction-limits` is authored and its clause (c) use
  is reconciled; `em-experiment-analysis-prerequisites` and
  `em-retarded-fields-and-radiation` pages have no carriers yet (page rows
  open); Steps 5-8 independent review of all eight items still follows.
- Local interface decisions to review in Steps 5-8: (i) the fringes
  detector-density measurability is a declared hypothesis (recorded above);
  (ii) the fringes example's added imported deps and the theorem's
  `relations.tested_by` row; (iii) the theorem's clause (c) restates the
  design's no-numerical-application content without creating a logical
  dependency on the reports.

## Checkpoint 3 — final rechecks before handoff

- Batch-40 recheck: the two previously flagged `undeclared-prereq` rows for
  `em-scattering-and-scalar-diffraction` / `-examples` are gone from the
  current `validate-plan --run` output (rows 359/360 now read 9/1 items with
  no such row); that earlier finding is closed.
- `step3-decisions.mjs check --run … --phase final`: among the eight owned
  items only `rem-em-classical-validity-limits` appears as open work (its
  recorded `escalate`); the seven `accept` receipts are current
  (sha256 matches unchanged inputs). `--phase scope`: all 40 pair scopes
  closed.
- `frontier-item-gate --tool pathcheck`: reports 10 `focus-page-unknown`
  errors for other frontier pages without carriers
  (`em-expanded-analysis-prerequisites`, `em-lorentz-covariant-formulation`,
  `em-retarded-fields-and-radiation`, `em-waveguides-and-cavities`,
  `sr-observer-measurements` and their companions); neither page of this pair
  is named, and no `_pathway.md` exists yet in the category, so no pathway
  placement obligation arises for this pair at this stage.
- No item file was edited after the batched `proof-layout` run or after the
  item decisions were recorded; the batched run remains the final layout
  check for this handoff (8 items, 23 steps, 0 defects).
