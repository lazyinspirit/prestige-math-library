# Batch 2 notes — `cm-math-balances` / `cm-math-balances-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 2, cover `cm-math-balances`. Category `non-relativistic-classical-mechanics-mathematics`, library `mathematics`. All content authored 2026-10-11; this file records checkpoint evidence, conflicts and unresolved findings, not approvals.

## Inventory and levels

- A page `cm-math-balances` (order 83, plan-spec `requires`: `picard-lindelof-and-first-order-odes`, `regular-surfaces-and-surface-integrals`, `the-total-derivative`), nine items:
  `lem-cm-derivative-of-pairings-of-curves` (0), `thm-cm-center-of-mass-and-kinetic-splitting` (0), `thm-cm-momentum-and-angular-momentum-balance` (1), `thm-cm-work-energy-balance` (1), `thm-cm-variable-mass-momentum-balance` (0), `thm-cm-compact-continuation-for-locally-lipschitz-odes` (0), `cor-cm-finite-time-breakdown-requires-escape` (1), `lem-cm-piecewise-c1-jump-derivative` (0), `thm-cm-impulse-restitution-and-energy-loss` (1).
- B page `cm-math-balances-examples` (order 84, `requires: [cm-math-balances]`), two items: `ex-cm-balances-impulse-and-rocket-checks` (2), `ex-cm-balances-continuation-boundary-checks` (2).
- Levels are one plus the maximum in-run dependency level per the dispatch rule; published root suppliers do not raise levels. Engine batch graph: batch 2 has `dependency_level: 0` and `requires: []` in `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`.

## Files written by this batch

- `items/` carriers for the eleven ids above; page carriers `library/non-relativistic-classical-mechanics-mathematics/cm-math-balances.md` and `...-examples.md`.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-2.pages.json` (manifest with per-item statements, deps, dependency_roles, dependency_level, sources).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-2.coverage.json` (6 sources, 34 harvested contents entries, 2 canonical rows; dispositions included/inline with item ids, `coverage-checklist.mjs --require-destination` green).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-2.proof-contracts.json` (strict contract: 11/11 items, 0 errors, 0 warnings; citations quote the exact source statements verified on disk; boundary worksheets complete for all eight standard cases per item).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-2.cross-batch-dependencies.json` = `[]`; reasoning: no in-run batch item depends on a batch-2 item, and every batch-2 item's dependencies are either in-batch (already accounted inside the batch manifest) or published root-library suppliers external to the run. Page-level `requires` edges *onto* `cm-math-balances` exist from pages `cm-math-dynamics` (batch 3), `cm-math-central` (batch 5) and `cm-math-rigid` (batch 9) per the engine batch graph (`requires` batches 2); those consumer-owned page edges are for the consuming batches to review, not entries of this batch's input file.
- `research/physics-cm-qm-gr-79-2026-10-11-step3b-pair-cm-math-balances.md` (pair report).
- `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` readiness records for the eleven ids (recorded after the final carriers; `step1-decisions.mjs check` is current for this batch, subject to other batches).

## Conflicts and deviations (recorded, not hidden)

1. **Design vs plan suppliers.** Design L42 (`research/plan-non-relativistic-classical-mechanics-track.md`) names `def-cross-product-in-r3`, `thm-chain-rule-for-total-derivatives`, `thm-picard-lindelof-local-existence-and-uniqueness` as the published canonical mathematical suppliers; the current `plan-spec.json` page `requires` lists `picard-lindelof-and-first-order-odes`, `regular-surfaces-and-surface-integrals`, `the-total-derivative`. The current plan controls; page `requires` copies plan-spec verbatim, and the design-named root items are additionally consumed at item level where the proofs actually use them.
2. **Granular split.** Design sections M2/M10/E11 were split into nine A items plus two constructed B examples (the design reserved no B items); every promised claim is preserved. Details in the step3b report.
3. **Source limitation (honest).** No full independent source was found deriving the general isolated reciprocal impulse model, restitution law, or open-system variable-mass accounting as theorems; items `thm-cm-impulse-restitution-and-energy-loss` and `thm-cm-variable-mass-momentum-balance` are explicit local conditional deductions from stated balance hypotheses, with the adopted content flagged in their statements. Recorded in the coverage `canonical` rows and the step3b report. This is a coverage-scope statement, not a fabricated derivation or a claim of source reading.

## Gate findings

- **Green (batch-owned):** `proof-layout.mjs` on the eleven items: 47 steps, 0 defects; `precheck.mts` on the eleven items: 0 failing; `rendercheck.mjs` on eleven items + two pages: OK; `content-policy.mjs <batch-2 manifest>` (item mode): 11 items, 0 errors; `proof-contract.mjs --strict`: 0 errors, 0 warnings; `coverage-checklist.mjs --require-destination`: 0 errors; `manifest-deps.mjs` on the batch manifest: 11 items, 0 errors; `item-dependency-levels.mjs check --run physics-cm-qm-gr-79-2026-10-11`: no error mentions `cm-math-balances` or `cm-math-balances-examples` — batch 2 labels are computed-consistent.
- **Red, owned elsewhere (not papered over):** the same whole-run `item-dependency-levels check` exits 1 with 148 `empty scaffold inventory` errors, all for pages of other concurrent batches whose manifests have not been transcribed into the plan yet; the whole-run `frontier-dependency-ledger --require-reviewed` and the merged run-level proof contract remain open until those batches finish. `step1-decisions.mjs check --run` reports work for other batches' empty inventories; batch 2's items are recorded ready against current inputs.
- **`content-policy.mjs --manifest-only` finding.** It reports `batch-item-already-exists` for all eleven ids because the plan-spec pages currently carry empty `items` arrays and manifest-only mode reads the plan as a future minting batch whose items already exist. This is the known mechanical state of this run's plan/manifest transcription; item mode is green, and the engine's Step-1 mechanical repair (splice-verify transcription of the batch manifest) is the intended resolution. The shared plan was not edited by hand; flagged for owner/operator reconciliation (see step3b report).
- **Published defects:** none found in the root suppliers consumed by this batch that would block these proofs. All consumed root statements were read at their exact sections; any hypothesis mismatch would have been recorded here with item ids and evidence, and none was found.

## Edits made during contract construction (final carriers)

- `thm-cm-compact-continuation-for-locally-lipschitz-odes` step 5.2 (label after the canonical renumbering; originally written 5.1) explicitly invokes the local-Lipschitz hypothesis (`[L2]`) at $(b,x_b)$, making the use of `def-locally-lipschitz-in-the-state-variable` visible in the proof rather than only in the facts block.
- `ex-cm-balances-impulse-and-rocket-checks` step 3.1 no longer writes the decimal approximation $0.693$; the momentum comparison at $t=1$ is stated exactly. This keeps every proof-step token mappable to a real step id in the contract worksheet.
- All checks above were rerun after these edits; readiness records were written last, so their input hashes are current.

## Plan-gate finding (validate-plan `undeclared-prereq`), escalated for owner reconciliation

- Command and result: `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-cm-qm-gr-79-2026-10-11` exits 1. For this batch's pages it reports 22 hard `[undeclared-prereq]` errors: 17 for `cm-math-balances` and 5 for `cm-math-balances-examples`. The errors state that an item depends on a root-library page not lying in the transitive closure of the page's declared `requires` (which is the plan-seeded three-page list `picard-lindelof-and-first-order-odes, regular-surfaces-and-surface-integrals, the-total-derivative`, copied verbatim into the manifest per the controlling plan).
  - Missing for `cm-math-balances`, in tool order: `rn-as-a-normed-space`; `the-derivative-and-mean-value-theorems`; `topology-of-r`; `monotone-sequences-and-cauchy-completeness`; `roots-and-rational-powers`; `the-inverse-function-theorem-completed`; `metric-spaces`; `completeness-and-uniform-continuity`; `properties-of-the-integral-and-the-working-ftc`; `compactness-in-metric-spaces`; `foundations-of-the-real-numbers`; `distributions-test-functions-and-differentiation`; `the-maximal-function-and-lebesgue-differentiation`; `the-lebesgue-integral-and-the-convergence-theorems`; `countability-and-uncountability`; `fourier-transform-convolution-and-approximate-identities`; `the-riemann-integral`.
  - Missing for `cm-math-balances-examples`: the same list restricted to its own closure plus `the-logarithm-and-general-powers`: `rn-as-a-normed-space`; `monotone-sequences-and-cauchy-completeness`; `the-derivative-and-mean-value-theorems`; `the-logarithm-and-general-powers`; `compactness-in-metric-spaces`.
- These are real transitive root-page homes of the items' dependency closures (the items depend on published root items such as `thm-euclidean-space-complete`, `cor-archimedean-reciprocal`, `def-metric-ball`, distribution and Lebesgue-integration items), so the finding is not spurious or removable by dropping dependencies: every cited root item is used in a proof or in a definition-level well-definedness argument.
- The condition is run-wide and pre-existing, not specific to batch 2: the same command reports 138 `undeclared-prereq` findings across sibling pages (e.g. `cm-math-geometry` 21, `cm-math-evidence` 15, `qm-math-composites` 41), including batches whose authoring is already complete. It arises from plan-seeded `requires` lists that stop short of each page's actual published-root closure.
- Resolution is an owner/adjudicator decision, so it is escalated, not hand-fixed here: (a) extend each page's `requires` (manifest first, then plan) to the full closure above and adjudicate the manifest-leads-plan divergence via the documented `splice-plan --accept-requires` gate; or (b) record an owner scope decision licensing reading-order access to published root pages without `requires` entries. This batch did not edit the shared plan or its page `requires`; the manifest still mirrors the plan-seeded list, and this finding is the exact unresolved gap.
- Related green checks in the same family: `extcheck.mjs` (whole library): every recorded-not-proved statement is a cited remark with no proof and every consequence is marked; `validate-plan` reports no `requires-resolve`, `requires-cycle`, `prereq-order`, `b-leaf`, `set-theory-boundary` or duplicate-ownership error attributable to this batch's pages.

## Authoring review repairs (mathematical closure, second round)

A full dependency-fidelity pass re-read every fact restatement against its cited statement. Ten items were repaired and re-recorded (item `thm-cm-variable-mass-momentum-balance` was unchanged and its record stayed closed); the detailed list and the exact gaps are in the step3b report's "Authoring review repairs" section. The repairs added only published root suppliers as new deps (`lem-finite-sum-reindexing-and-fubini`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `lem-reverse-triangle-inequality-in-a-normed-space`, `cor-continuous-functions-are-borel-measurable`, `def-borel-and-lebesgue-measurable-function-on-rn`), so no item dependency level changed and `.cross-batch-dependencies.json` remains `[]`. The manifest, contracts, coverage and readiness records were updated after the edits; all batch gates were re-run and are green as recorded above.

## Citation-faithfulness screen (heuristic, read)

`citation-faithfulness-screen.mjs` on the eleven ids reports 4 candidate items (token-level flags: `\mathbb`, `\eta`, `\alpha/\beta`, `\lVert/\rVert`). Each candidate was read against the cited statements: the flags are renaming/notation differences, not inflations. The one genuine overstatement found in the read (`lem-cm-piecewise-c1-jump-derivative` step 1.1's false half-interval-continuity claim), plus the finite-sum reindexing attribution in `thm-cm-momentum-and-angular-momentum-balance` and the real-function sum rule in `thm-cm-work-energy-balance`, were repaired as recorded above.


## Adopted choice-interface repair, cycle 1

The adopted reviewer /root/physics_missing_edge_reviews independently checked
`ex-cm-balances-impulse-and-rocket-checks` following the active batch-31 note.
The impulse theorem assumes Countable Choice for its distributional jump
argument and requires a full position/test-function model. The example had
used its formulas without those premises. Its two collision cases now solve
finite momentum and restitution equations directly and evaluate the exact
kinetic differences. All original velocities, J values and energy values remain.
The full theorem is accurately qualified contextual material in Remarks; its
load-bearing dependency and the unused kinetic-splitting dependency were removed.
No choice assumption was added to this finite calculation. The example's
computed dependency level is now1, from the choice-free variable-mass supplier.

The rocket verification additionally defines the unused inflow velocity as0,
checks smooth domain-relative derivatives at both endpoints of[0,1], computes
the logarithmic derivative by direct quotient/chain rules, and distinguishes
the naive zero velocity from the prescribed rocket velocity and fixed outflow.
The naive candidate fails the original balance at t=0; the readings differ
for every positive t and the endpoint remains log2 times e. The original
measurements/physics scope is unchanged: this is mathematics only.

The example has no aliases, direct/indirect item consumers or item mentions;
the companion B-page wording was updated. Existing source coverage contains
no row for this constructed example and retains its source harvest/provenance
unchanged. Evidence and preserved preimages are under
`research/physics-cm-qm-gr-79-2026-10-11-crash-recovery/batch2-choice-interface-repair/`.
This is first adopted repair cycle1/2, with no native counter reset, active31
write, independent audit or native whole-batch acceptance asserted.
