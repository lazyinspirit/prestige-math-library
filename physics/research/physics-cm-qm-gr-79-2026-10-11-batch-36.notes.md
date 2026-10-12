# Batch 36 notes — `qm-math-oscillator` / `qm-math-oscillator-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, Step 1 authoring, 2026-10-11.
Scope: exactly one A/B pair, A page order **151**, B page order **152**, category
`non-relativistic-quantum-mechanics-mathematics`, library `mathematics`.
Final inventory: **10 A items + 3 B items = 13**, all recorded `ready` by
`step1-decisions.mjs record` **after** the page-`requires` repair below; the 13
records were hash-checked current at the time of writing (`step1-decisions.mjs
check --run ...` lists no work for this pair; its remaining open work entries
belong to other, unauthored batches). The manifest, the two page
carriers, the coverage file, the proof contracts, the cross-batch input and this
note were written; no published item, shared plan, engine state or verdict was
edited. The only shared-state write was
`frontier-dependency-ledger.mjs refresh --run ...`, which is the run's derived
frontier ledger, regenerated from the manifests.

Read first: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the batch dispatch, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no clause
of it names or overrides this pair), the Step-1 drift record
`research/physics-cm-qm-gr-79-2026-10-11-alpha-step1-drift.md` (verdict for this
pair: **no-drift**, batch 36, order 151, declared prerequisite
`qm-math-composites`), the dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 36
requires batch 35), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L455 ff. with
`scaffold/inventory.json`, `scaffold/mathematical-prerequisites.md` (proof module
M12) and `research/plan-spec.json`.

## Design vs plan, recorded conflicts

1. **Page `requires` — real disagreement, recorded for Step-3 adjudication.**
   The design reservation declares `requires: [qm-math-composites]`; the current
   `research/plan-spec.json` declares three (`qm-math-composites`,
   `complex-lp-spaces-and-test-function-conventions`,
   `the-lebesgue-and-riemann-integrals-compared`), which is what the manifest
   must carry per the dispatch rule that the current plan controls. Item
   authoring additionally consumes four **published** supplier pages that
   neither list names, and every use is load-bearing:
   `strongly-continuous-semigroups-and-hille-yosida` via
   `def-resolvent-of-a-closed-operator` (statement and [F2] of
   `thm-nrqm-oscillator-diagonal-spectrum`);
   `the-exponential-function` via `thm-derivative-of-exponential` ([F4] of
   `thm-nrqm-oscillator-hermite-recurrence`, [F3] of
   `ex-nrqm-oscillator-ground-energy-units`, [F1] of
   `ex-nrqm-oscillator-formal-nonnormalizable-solution`);
   `series-and-nonnegative-tests` via
   `thm-nonnegative-series-bounded-partial-sums` ([F5] of
   `thm-nrqm-oscillator-hermite-completeness`) and `thm-geometric-series` ([F4]
   of `thm-nrqm-oscillator-coherent-state-convergence`); and
   `distributions-test-functions-and-differentiation` via
   `def-test-function-space-d-of-an-open-set` ([F6] of
   `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`).
   The A manifest page therefore declares seven `requires` (the plan's three plus
   those four, all published pages earlier in reading order) and the library
   carrier was set to the same list; the B page keeps `requires:
   [qm-math-oscillator]`, whose closure now reaches all of them. Before the
   repair `validate-plan.mjs ... --run ...` reported eight `undeclared-prereq`
   errors on these two pages; after it, scoped and run-manifest validation
   reports **zero** findings on either page. `splice-plan.mjs` refuses a
   manifest/plan `requires` disagreement by design and the Step-3 adjudication
   path is its `--accept-requires` mode after that gate closes; this batch does
   not edit `plan-spec.json`, and the four extra edges are the exact set that
   adjudication must accept (or the plan must otherwise reconcile).
2. **Reservation identifiers.** The design reservations spell the items
   `nrqm-oscillator-*`. SCHEMA.md requires the kind prefix in the ID, and the
   batch-35 precedent renamed the same way; all 13 items were authored with
   prefixed IDs (`lem-`, `thm-`, `ex-`) and keep the reservation spelling in the
   manifest `reference` fields and in `aliases`, so the plan keys still resolve.
   No promised claim was removed: the design's 10 A items and 3 B items are all
   present, with the same titles.
3. **B-item dependency adjustment.** The design reservations give each B item a
   single dependency on the first A item. The authored examples additionally
   depend on the items they actually use (the realised oscillator and the
   multidimensional completeness for the ground-energy units; the coherent-state
   convergence for the Poisson coefficients; the orthogonality item for the
   eigenvalue equation in the nonnormalizable-solution example). All additions
   are same-batch or published mathematical suppliers; nothing physical is used.
4. **Proof modules vs authored items.** M12 is research prose with three
   distinct results compressed into its first paragraph ("diagonal adjoint and
   graph-core lemma", "diagonal spectrum") and its last paragraph
   ("multidimensional oscillator completeness"); the authored split follows the
   design titles, and the diagonal lemma/spectrum split is forced by the
   dependency rule (the spectrum argument uses the adjoint/domain computation as
   its supplier, so it cannot live in the same item without an internal
   forward reference).

## Inventory, levels and dependency checks

10 A items: diagonal adjoint and graph-core lemma, diagonal spectrum, Hermite
recurrence, Hermite orthogonality, Hermite completeness, oscillator scaling and
exact realization, closed ladder domains, coherent-state convergence, coherent
evolution and variance, multidimensional oscillator completeness. B items:
ground energy units, Poisson number distribution, formal nonnormalizable
solution.

In-run item levels after all authoring edits, over all 13 items: 0 (1 item),
1 (2), 2 (2), 3 (2), 4 (2), 5 (3), 6 (1). Cross-batch in-run suppliers are the four batch-35 items
`lem-nrqm-composites-complex-gaussian-continuation`,
`lem-nrqm-composites-hilbert-tensor-construction`,
`lem-nrqm-composites-euclidean-l2-product-unitary` and
`thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`;
all four carry current `ready` records and were hash-checked before authoring
consumed them. The manifest `deps`/`dependency_roles` equal the item frontmatter
exactly (reconciliation script: `problems: 0`; no cycles; every dependency
resolves to a published item, a ready batch-35 item, or an earlier item of this
batch; no B-page-only dependency). `node tools/physics-support/item-dependency-levels.mjs check
--run physics-cm-qm-gr-79-2026-10-11` exits 1 with 136 `empty scaffold
inventory` errors for **other** batches' unscaffolded pages (the count moves as
other batches progress) and reports no batch-36 finding. The page-`requires`
repair did not add an in-run edge: the six supplier pages outside
`qm-math-composites` are published baseline pages with no home batch, so batch
36's run-level row in
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` remains
`{"batch":"36","dependency_level":1,"requires":["35"]}`.

## Sources and source checks

Six source objects across the two pages, three independent treatments:

- G. Teschl, *Mathematical Methods in Quantum Mechanics*, 1st ed. 2009, §2.4
  pp. 73-74 (resolvent/spectrum and the multiplication-operator example) and
  §8.3 pp. 177-179 (ladder operators, Hermite polynomials, Theorem 8.5) —
  monograph, full PDF (317 pages) stamped.
- MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 "Quantum Dynamics", §1
  pp. 1-9 and §§4.3-4.5 pp. 30-41 — complete lecture-note chapter, full PDF
  (51 pages) stamped.
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics*, §3.1 pp. 37-41 —
  monograph, full PDF (310 pages) stamped.

`source-fetch-check.mjs --coverage ... --stamp` recorded full-text stamps for all
six entries (the same three documents on both pages; Teschl
`sha256_16 8dc8de0b58aa0a3f`, MIT Chapter 6 `4de0ffc54c76fec1`, Binney-Skinner
`f19649bce67898ee`); the check mode re-read them with 6/6 resolved and no drops.
The exact source ranges were inspected in the fetched documents before
authoring (Teschl §8.3 and Binney-Skinner §3.1 by text extraction; MIT Chapter 6
table of contents and the harmonic-oscillator and coherent-state sections).
`coverage-checklist.mjs`: 0 errors, 0 warnings, 21 harvested results.

## Checks actually run (results as observed)

- `precheck.mts` on all 13 items: 13 checked, 0 failing (the checker's proposed
  phase-layer renumbering was adopted before this pass; see below).
- `proof-layout.mjs` on all 13 items: 71 steps, 0 defects.
- `rendercheck.mjs` on the 13 items and 2 page carriers: OK (no wikilink in
  math, no unbalanced delimiters, every KaTeX and YAML parse).
- `depcheck.mjs --items-file` on the 13 items: OK after repairing one wrong
  supplier prefix (`thm-nrqm-composites-complex-gaussian-continuation` →
  `lem-nrqm-composites-complex-gaussian-continuation`); focused item/page checks
  and prerequisite cycle checks passed.
- `proof-contract.mjs --strict` on
  `research/physics-cm-qm-gr-79-2026-10-11-batch-36.proof-contracts.json`:
  0 errors, 0 warnings, 13/13 items checked, 118 citation contracts, 71 step
  derivations, 8 boundary dispositions per item.
- `audit-manifest.mjs` on the batch-36 manifest together with batch 35 (the
  in-run supplier context): 491 relationships over 43 items, 0 defects. Run on
  batch 36 alone, the five cross-batch edges are reported `unresolved` because
  the tool's in-run set is exactly the manifests passed to it; passing batch 35
  as well clears them. Recorded, not a content defect.
- `content-policy.mjs` (normal mode): 13 scoped items, 0 errors, 0 warnings.
  `--manifest-only` reports `batch-item-already-exists` for the authored items:
  that mode is the pre-authoring shape and is expected to reject an inventory
  that already exists on disk; recorded, not repaired.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed and
  deduplicated; the batch-36 cross-batch input has six rows (one page edge to
  `qm-math-composites`, five item edges to the four batch-35 suppliers), all
  `verified` with the exact use recorded.

### Completion checks re-run after the requires repair (2026-10-11)

- `validate-plan.mjs research/plan-spec.json --run ...`: exits 1 with exactly
  **two** errors, both on `cm-math-dynamics` (another batch's page, whose
  manifest is still missing two `requires` edges) and **none** on either
  batch-36 page. Before the repair the same command reported eight
  `undeclared-prereq` errors on the two batch-36 pages. The run's own
  `frontier-item-gate --run ... --tool validate-plan` cannot be green until that
  other batch reconciles its page, which is not this batch's scope; recorded as
  an unresolved run-level finding, not a batch-36 defect.
- `depcheck.mjs --items-file` (13 items): OK; the page-dependency-depth listing
  now shows the corrected seven-entry `requires` of `qm-math-oscillator`, and
  "selected item/page checks and their prerequisite cycle checks passed".
- `item-dependency-levels.mjs check --run ...`: no batch-36 finding (see above).
- `batch-dependency-levels.mjs check --run ...`: reports `Stale batch dependency
  levels ... recompute before authoring`. This is the run-level digest over
  **all** in-flight manifests, already stale from other batches' concurrent
  edits as well; the batch-36 row's content is unchanged (`level 1`, `requires
  ["35"]`). Recompute is owed by the orchestrator/owner, matching the batch-65
  precedent; this batch does not rewrite engine-derived scheduling state.
- `fwdcheck.mjs` (whole repo, forced by the tool): summary `errors: 12471,
  warns: 2`, **0 findings on any batch-36 item or page**; the repo-wide findings
  are pre-existing in other workspaces' items.
- `extcheck.mjs`: 27353 items, 0 recorded-not-proved, 0 resting on them — OK.
- `citecheck.mjs` on the 13 items: 13 scanned, OK (every recognised elementary
  move cites a home that states it).
- `manifest-integrity.mjs --run ...`: 158 pages owed, 158 in the manifests, no
  scope drift.
- `manifest-deps.mjs` on the batch-36 manifest: 13 items, 0 errors.
- `rendercheck.mjs` on the repaired `qm-math-oscillator` carrier: OK.
- `source-fetch-check.mjs --coverage ...` (check mode): 6/6 fetch-verified, 6/6
  resolved, 0 documented drops.
- `step1-decisions.mjs check --run ...`: all 13 batch-36 items closed with
  current hashes (records written after the requires repair); the remaining open
  work in the run belongs to other batches, including the two unrelated
  `qm-harmonic-oscillator` scaffold pages.

## Phase-layer renumbering record

`precheck.mts` computes proof "layers" from step citations and expects the
labels to follow them; the authored steps were first numbered by topic order.
The checker's canonical renumbering (and, for the Hermite-recurrence item, its
layer reordering of the Rodrigues and identification steps) was **adopted** as
proposed, with two hand repairs after adoption: the forward reference to a later
step in the completeness item was removed, and the display formulas orphaned by
the line-based reordering in the Hermite-recurrence item were merged back into
their steps as inline mathematics. All steps are now single tagged paragraphs
with inline mathematics only, so the 70% tag threshold and the 100%
blue-chip layout check both pass.

## Status

All 13 items and the two page carriers are draft mathematics under initial
authoring. No physical postulate, instrument realization, measurement claim or
empirical statement is made on these pages; the realised operators are stated
with positive real parameters and an explicit no-physical-identification scope
clause. This note records authoring-time checks only; independent mathematical
review (Steps 2/3) and the engine gate remain outstanding, and nothing here is a
publication or approval receipt.

