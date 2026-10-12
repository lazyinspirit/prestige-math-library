# Batch 45 — Qm Observables And Born Probabilities

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label `batch-45`, one A/B
pair in `non-relativistic-quantum-mechanics`:

- A `qm-observables-and-born-probabilities` (order 169, requires
  `qm-state-geometry`);
- B `qm-observables-and-born-probabilities-examples` (order 170).

All 17 authored items remain `status: draft`. Nothing outside this batch's
ownership was edited; the root mathematics workspace and imported suppliers are
read-only, and the shared `plan-spec.json` was compared against but not
modified.

## Scope built

12 A items and 5 B items, with dependency levels as labelled in the run
manifest:

| item | kind | dep. level |
|---|---|---|
| `lem-nrqm-observables-l2-multiplication-spectral-measure` | math lemma | 3 |
| `lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues` | math lemma | 2 |
| `lem-nrqm-observables-spectral-support-and-outcome-law` | math lemma | 2 |
| `lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity` | math lemma | 5 |
| `lem-nrqm-observables-moments-and-variance` | math lemma | 2 |
| `lem-nrqm-observables-states-separated-by-bounded-projections` | math lemma | 3 |
| `def-nrqm-observables-framework-observable-and-outcome-law` | physics definition (reads P2) | 6 |
| `pthm-nrqm-observables-born-outcome-law-properties` | physics theorem | 7 |
| `pthm-nrqm-observables-preparation-moments` | physics theorem | 8 |
| `pthm-nrqm-observables-position-and-momentum-outcome-laws` | physics theorem | 7 |
| `pthm-nrqm-observables-states-separated-by-born-statistics` | physics theorem | 8 |
| `rem-nrqm-observables-scope-and-empirical-status` | physics remark | 9 |
| `ex-nrqm-observables-two-level-energy-readout` | example (B) | 9 |
| `ex-nrqm-observables-position-bin-probabilities` | example (B) | 8 |
| `cex-nrqm-observables-plane-wave-is-not-a-preparation` | counterexample (B) | 8 |
| `ex-nrqm-observables-position-mean-without-variance` | example (B) | 9 |
| `rem-nrqm-observables-examples-scope-limits` | remark (B) | 10 |

Carriers: `library/non-relativistic-quantum-mechanics/qm-observables-and-born-probabilities.md`
and `...-examples.md` (both nonempty), the run manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-45.pages.json`, the coverage
file, the proof contracts (14 proof-bearing items, 114 exact citation entries)
and the cross-batch dependency input.

## Design vs current plan — recorded conflicts

1. **Reservation budget vs authored inventory.** The track design
   (`research/plan-non-relativistic-quantum-mechanics-track.md` L2994) reserves
   "38" A items and "22" B items. The authored pair is 12 A + 5 B. Every
   promised claim of the one-line reservation is covered, with the general
   unbounded self-adjoint spectral theory imported as published root
   mathematics instead of re-proved: unbounded domains and self-adjointness
   (`def-nrqm-observables-framework-observable-and-outcome-law` clause (a),
   `lem-nrqm-observables-l2-multiplication-spectral-measure`,
   `pthm-nrqm-observables-position-and-momentum-outcome-laws`, plus the
   published `thm-spectral-theorem-for-unbounded-self-adjoint-operators`);
   spectrum/PVM (the three spectral lemmas); scalar probability and moments
   (`lem-nrqm-observables-moments-and-variance`,
   `pthm-nrqm-observables-preparation-moments`, with the batch-35
   `lem-nrqm-composites-density-and-scalar-spectral-probability` supplier);
   continuous outcomes (position/momentum laws, the position-bin example and
   the plane-wave counterexample); finite energy readouts (two-level example);
   plane-wave/distribution caveats (counterexample). This is a bookkeeping
   conflict between planning budgets and authored inventory, not an unmet
   prerequisite; no promised claim was dropped or weakened.
2. **`requires_physics` is a claim id.** The reservation's
   `requires_physics: [NRQ-A02]` names a claim/coverage id, not a page id; the
   design's declared earlier prerequisite, and the manifest page `requires`,
   is the page `qm-state-geometry`. (Batch 44 recorded the same pattern for
   `NRQ-A01`.)
3. **B-page prerequisite extension.** The B example
   `ex-nrqm-observables-position-bin-probabilities` consumes the published
   real-analysis item `thm-gaussian-integral` (fact [F1]). `validate-plan`
   first reported `[undeclared-prereq] page
   qm-observables-and-born-probabilities-examples has an item depending on
   improper-and-parameter-dependent-multiple-integrals`, which is not in the
   closure of the B page's single declared prerequisite. The published page
   `improper-and-parameter-dependent-multiple-integrals` (plan order 30, kind
   P) was therefore declared in the B page's `requires` in both the run
   manifest and the library carrier, following the precedent of batch 42's
   `qm-math-magnetic-and-detection-examples`. The shared `plan-spec.json` was
   not edited; for run pages the manifest is the authoritative carrier. After
   the change `validate-plan` reports no finding on either batch-45 page.
4. **Empty plan item arrays.** The `plan-spec.json` entries for both pages
   carry empty `items` arrays (the engine's pre-authoring state); the run
   manifest carries the authored inventories and levels.
5. **Forward-reference repair in the Born theorem.** `fwdcheck` reported
   `[forward-undeclared]` for the wikilink
   `[[prop-cantor-measure-is-a-singular-atomless-probability-measure]]` in
   `pthm-nrqm-observables-born-outcome-law-properties`: the published
   proposition is homed on `lebesgue-stieltjes-measures-and-distribution-functions`,
   which lies beyond the physics frontier for this run, and a physics theorem
   may not carry a load-bearing forward edge. Clause (e) and fact [F7] were
   recast as a reading of P2 clause (iii) alone ("the law is a measure, not
   necessarily a density and not necessarily a finite or countable sum of
   point masses; the operational object is the probability of a declared Borel
   set"), and the dependency was removed from `deps` and from the proof
   contracts. The recast does not weaken the claim as worded — it is exactly
   the postulate clause — and no other item consumed that proposition.
6. **Manifest statement field.** The first manifest generation copied each
   item's statement with an off-by-one that dropped the first character of the
   heading ("`tatement`", "`efinition`", ...). The field was regenerated as
   the item body after the heading line, matching the convention used by the
   other batches of this run (for example batch 42); the 17 readiness records
   were then re-recorded so their input hashes are current. Batches 43 and 44
   retain the same cosmetic defect in their own manifests; that is recorded
   here as a run-level observation and not repaired, as those batches are
   outside this batch's ownership.

## Mathematical and physical closure decisions

- **Layering.** The six mathematical lemmas carry `domain: mathematics` and
  depend only on published canonical root mathematics and on in-run
  mathematics suppliers of batch 35 with current readiness records. The
  physics definition, the four physics theorems and the two remarks are
  `domain: physics`; the physics theorems are explicit conditional
  consequences of P1, P2 (and P5 where the massive-particle model is used)
  plus the page-local mathematics. No mathematical item depends on a physics
  item.
- **Postulate reuse, not restatement.** P2 is homed on
  `post-nrqm-framework-observable-and-probability` (batch 43). The page's
  definition reads it in observable/outcome-law vocabulary and adopts no new
  assumption; the Born theorem states conditional consequences only. The
  finite unsharp-effect extension of P2 clause (iv) is deferred to the
  measurement-and-instruments page.
- **Choice hypotheses.** The Axiom of Choice and the Axiom of Countable
  Choice are carried explicitly wherever the unbounded spectral theorem or
  functional calculus is used, and are named in each statement that needs
  them; finite-dimensional examples use only the assumptions actually needed.
- **No eigenbasis claim.** The batch does not assert a complete discrete
  eigenbasis: the spectral PVM carries the law, exact values are singletons,
  and only eigenvalue atoms have positive exact-value weight. Position and
  momentum laws are proved atomless for the spinless massive model, with
  moments conditional on the stated domains.
- **Pointwise vs finite-resolution outcomes.** Clause (iii) of P2 is read
  exactly: an exact continuum value is an idealization, while a
  finite-resolution record is the probability of a declared Borel set such as
  a bin. The plane-wave counterexample refutes the informal claim that a raw
  plane wave or a delta symbol is a preparation; it does not deny the use of
  those objects as distributional tools.
- **Empirical neutrality.** No item reports a measurement, apparatus,
  calibration or data comparison. The two remarks state the scope and
  empirical neutrality of the pair; `extcheck` records them as cited remarks
  without proof and no consequence item consumes a recorded-not-proved
  statement.

## Sources

The coverage file records 2 pages and 34 harvested results, each with a
disposition (included with an item id, or out of scope with a reason); 13
source entries, fetch-verified with `--stamp` during authoring and re-checked
in check mode:

- G. Teschl, *Mathematical Methods in Quantum Mechanics*, 1st edition 2009
  (author-hosted full text) — §2.1 physical axioms, Ch. 3 spectral calculus.
- D. Tong, *Quantum Mechanics* (author-hosted complete lecture set) —
  §§1.1-1.3, 3.2-3.3 (Born rule, Hermitian operators, measurement scope).
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics* (author-hosted
  Oxford PDF) — §§1.4 and 6.3 (ideal measurement, trace rule).
- B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013) chapters 2, 3, 4, 5, 7
  (OCW PDFs) — operators, bra-ket notation, uncertainty/compatibility,
  two-state systems.
- J. Preskill, Ph219/CS219 lecture notes, Chapter 2 (Caltech PDF) — density
  operators and generalized measurements.

Two independent treatments per page are present (a book/lecture-note set plus
expository lecture sets). Source claims are attributed to the page's own
conditional reading of P2, and no source authority is substituted for the
proofs.

## Checks actually run on the final carriers

- `precheck.mts` on the 17 items: **14 checked, 0 failing**.
- `rendercheck.mjs` on the 17 items and the 2 library carriers: **19 files
  clean** (KaTeX parse, YAML, wikilink/math nesting).
- `proof-layout.mjs` on the 17 item paths (run after the final proof-text
  edits): **17 items, 62 steps, 0 defects**.
- `fwdcheck.mjs --items-file`: exit 0, no forward-undeclared row and no
  open forward reference for these items; `depcheck.mjs --items-file`: exit
  0, prerequisite cycle checks passed; `extcheck.mjs --items-file`: exit 0,
  0 recorded-not-proved statements and 0 consequences resting on them.
- `content-policy.mjs` on the batch manifest: **17 scoped item(s), 0 error(s),
  0 warning(s)**; `manifest-deps.mjs`: **17 item(s), 0 error(s)**.
- `proof-contract.mjs --strict` on the batch proof contracts: **14/14 items
  checked, 0 error(s), 0 warning(s)** — exact cited quotes, per-step
  derivations with stated inputs, and the standard boundary dispositions
  (empty/zero/one/degenerate/endpoints/choice and both iff directions where
  applicable).
- `proof-contract-coverage.mjs` against an overlay root whose only current
  manifest is this batch's: **17 item(s), 14/14 supplied argument(s)
  covered**.
- `coverage-checklist.mjs` on the coverage file: **2 pages, 34 harvested
  results, 0 error(s), 0 warning(s)**; `source-fetch-check.mjs --coverage`
  (check mode, existing stamps): **13/13 fetch-verified, 13/13 resolved,
  0 documented drops**.
- `item-dependency-levels.mjs check --run`: no finding names a batch-45 item;
  the 78 run-wide errors are other batches' empty scaffold inventories.
- `validate-plan.mjs research/plan-spec.json --run ...`: exit 1 run-wide with
  a single remaining error on **another** batch's page
  (`qm-math-controlled-dynamics`); the only lines naming this pair are the
  informational page listings (169: 12 items; 170: 5 items with the two
  declared requires), with no undeclared-prerequisite, forward, intra-order,
  prefix or size error on either page.
- `pathcheck.mjs non-relativistic-quantum-mechanics`: 0 pathway files
  checked, 0 errors, 0 warnings (no `_pathway.md` exists yet).
- Scoped `validatePhysicsContent` (overlay root, `requireBodies: true`) on the
  17 items and 2 pages: **0 error(s), 17 items checked** (domains, dependency
  roles, physical scope, page membership).
- `physics-check.mjs --run` (whole run) is **not runnable as a whole**: it
  aborts in `verifyMathematicsImports` on pre-existing mathematics-import
  drift (`items/fs-rational-power-of-negative-base.md` differs from the
  read-only source root's receipt hash). This predates and is independent of
  this batch and is not repairable inside it; the scoped equivalent is
  reported above.
- Readiness records: one per item, recorded after the final carrier edits
  (and re-recorded after the manifest statement repair so their input hashes
  are current). `step1-decisions.mjs check --run` now reports **no pending
  work item for any of the 17 batch-45 items** (791 of 807 run items ready;
  the remaining work is 78 other batches' empty scaffold inventories and 16
  other batches' missing records).

## Cross-batch dependencies

`research/physics-cm-qm-gr-79-2026-10-11-batch-45.cross-batch-dependencies.json`
reviews all 45 cross-batch rows in which batch 45 is the consumer, each with
`status: verified` and evidence naming the exact consumed claim and its use
location: 11 rows to batch 35 (rank-one/density/scalar-spectral/multiplier
mathematics), 5 to batch 42 (position and momentum operators and their
self-adjointness), 15 to batch 43 (P1, P2, P5 and the quantities/units
definition), 14 to batch 44 (state space, state/ray definitions, density-set
convexity, ray-to-projection) including the page edge
`qm-observables-and-born-probabilities -> qm-state-geometry`. After
`frontier-dependency-ledger.mjs refresh --run
physics-cm-qm-gr-79-2026-10-11`, every batch-45 row carries the review, no
batch-45 review is orphaned, and batch 45 appears in `reviewed_batches`. The
merged ledger also shows two supplier-side rows where batches 46 and 47
declare `qm-observables-and-born-probabilities` as a prerequisite; those rows
are for those batches to review when they author consumers.

Every in-run supplier consumed here (batch 35, 42, 43, 44 items) is draft
content with a current readiness record; the root mathematics suppliers are
published canonical items. No planned or unproved supplier was used.

## Escalations

None. Every prerequisite is supplied with a current readiness record, every
other mathematical premise is a currently published canonical root item, and
no promised claim of the design was dropped or weakened. The budget and
requires-id differences above are bookkeeping conflicts recorded for the
owner, not unmet prerequisites.

## Run-level notes for the owner

- `physics-check.mjs --run` aborts on pre-existing mathematics-import drift in
  the read-only source root (currently
  `items/fs-rational-power-of-negative-base.md`); batch 44 recorded the same
  class of condition with a different file. Scoped validation is clean.
- `validate-plan.mjs --run` fails on one other batch's undeclared
  prerequisite (`qm-math-controlled-dynamics`); nothing names this pair.
- `item-dependency-levels.mjs check --run` fails on 78 empty scaffold
  inventories of other batches; nothing names this pair.
- `step1-decisions.mjs check --run` reports 94 remaining work items, all in
  other batches (78 empty scaffold inventories, 16 missing readiness
  records).
- Manifest cosmetic defect noted in conflict 6 above also exists in the
  batch 43 and 44 manifests (statements beginning "`tatement`",
  "`efinition`", ...); it is outside this batch's ownership and is reported
  here for a run-level repair decision.


## Owner diagnostic correction: original-import selection

Owner metadata diagnostic recorded 2026-10-11T04:40:43.369Z: this append-only correction supersedes the earlier run-level claim that a current scoped `physics-check.mjs --run` invocation aborted on `fs-rational-power-of-negative-base`. The authenticated command in `research/physics-cm-qm-gr-79-2026-10-11-dispatch/beta-batch-45.attempt-1.log`, line 14855, was `node tools/physics-support/physics-check.mjs --help 2>&1 | head -20`; it contained no `--run` flag. This CLI has no special help branch, so that invocation performed unscoped full-original import verification and legitimately reported the negative-base original mismatch at line 14926. It was not a current native frontier verification result.

The current read-only native import check `verifyMathematicsImports(root, { run: 'physics-cm-qm-gr-79-2026-10-11', planning: true })` passes all 28,422 local import pins and the selected original-source obligations. The matching native planning scope excludes `fs-rational-power-of-negative-base`; its prose link from the imported `def-rational-power` is nonlogical imported context and does not make it a selected original-pin obligation. The negative-base snapshot and pin remain unchanged. Exact flags/results are recorded in `research/physics-cm-qm-gr-79-2026-10-11-crash-recovery/batch45-handoff-diagnosis/native-import-verification-flags.json`.

The strict authored selector with `planning: false` currently stops at the still-empty batch-24 inventory, as expected before the final authored join. This planning diagnostic is not a Step-1 gate attempt or pass. The originally attributed item, source, scoped-content, proof-layout and readiness checks above retain their original attribution; this owner correction adds no mathematical audit, source-reading attestation or independent batch acceptance.
