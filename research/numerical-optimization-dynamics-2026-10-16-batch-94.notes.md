# Batch 94 — Exponential and integrating factor integrators

Run `numerical-optimization-dynamics-2026-10-16`; A/B pair `exponential-and-integrating-factor-integrators`. This record covers only batch 94's draft items, pages, and evidence.

## Controlling plan and reconciliation

The owner-authoring direction controls the older task/design wording. The batch task, the T03 row in `plan-spec.json` (orders 2472–2473), and the current page manifest agree on page IDs, category, companion, and the two A-page requirements: `global-ode-and-density-error` and `matrix-exponential-and-phi-function-actions`. The T03 design's phrase “exponential midpoint/ETD2” is implemented as the fully specified explicit two-stage ETD2 method; the task and current plan do not require a separate midpoint item. The design's other conditions are retained: fixed finite matrix, variation of constants, series-defined phi values at zero, constants allowed to depend on the matrix, action-error accumulation, explicit matrix-action work, and no stiffness-uniform/PDE claim without domain and commutator hypotheses.

The older prose describes prerequisites by planned pair keys `LIN-EXPA` and `P-NUM-ODE-02`; those aliases are not item dependencies. The concrete current page IDs above are used in the manifest and cross-batch record. The initial T03 page design leaves the same-pair Duhamel/variation-of-constants result local; batch 94 supplies `lem-finite-matrix-semilinear-variation-of-constants` before its consumers.

## Inventory and dependency levels

The manifest contains 10 A-page items and 4 B-page examples. The levels were recomputed over current run manifests; all 14 batch-94 labels match the computed item graph:

| Level | Items |
| --- | --- |
| 0 | `lem-finite-matrix-semilinear-variation-of-constants`, `lem-skew-hermitian-matrix-exponential-is-unitary` |
| 2 | `lem-exponential-phi-integral-representations`, `def-exponential-euler-and-etd2-step-maps` |
| 3 | `lem-exponential-integrator-interaction-picture-stability`, `lem-exponential-euler-local-defect`, `ex-nonnormal-transient-growth-exponential-step`, `ex-phi-functions-at-zero-no-division` |
| 4 | `lem-etd2-local-defect`, `alg-certified-exponential-euler-etd2-step` |
| 5 | `lem-certified-exponential-step-action-error`, `ex-diagonal-stiff-diffusion-with-reaction-etd` |
| 6 | `thm-exponential-euler-etd2-global-error-and-action` |
| 7 | `ex-skew-hermitian-imaginary-time-unitary-step` |

The A page has 10 items (below the 100-item cap); the B page has 4 examples. There are no dependency cycles in the pair. Exact direct supplier excerpts and matched hypotheses are in `batch-94.cross-batch-dependencies.json` and the proof contracts.

## Cross-batch supplier inspection

Batch 28's complete `thm-global-error-from-one-step-defect-and-stability` statement/proof was inspected. Its relevant interface is exact-start defect `C h^(p+1)`, one-step stability `1+Lh`, exact initial data, and a common compact time-state tube with positive margin. The complex system is realified, its interaction-picture tube is shown to remain compact/open-domain admissible, and the local constants are matched before the theorem is applied.

Batch 81's actual phi-series/convergence, augmented-matrix identity, Arnoldi routine, certified arithmetic interface, logarithmic norm, and Arnoldi exponential-action error theorem were inspected. For phi actions, batch 94 uses the actual augmented matrix `B_k(hA,v)`, invokes the certified exponential-action theorem on that full matrix, and projects to its top coordinates. The action certificate explicitly requires a per-request logarithmic-norm upper bound, reduced-matrix norm bound, initial mismatch bound, basis norm bound, relation-error bounds, reduced-action bound, and projection bound. Missing certificates return inconclusive. The cited supplier bodies remain drafts; this is an interface/readiness record and not supplier approval.

## Source coverage and retrieval history

The A-page source base is Hochbruck–Ostermann (2010), the complete ISEM 2011/12 lecture notes, and Niesen–Wright (2010). The full articles/notes and cited derivations were inspected; ISEM Theorem 14.11 is recorded only for its linear-inhomogeneity scope and is not represented as proving nonlinear ETD2. Niesen–Wright residual estimators are not used as certified bounds. The B examples use the same inspected treatments. `source-fetch-check --stamp` verified 6/6 page-source records (three on each page); no selected source was dropped.

Exploratory retrieval history: the earlier ISEM endpoint `https://www.uibk.ac.at/mathematik/na/isem/isem15_lecture14.pdf` returned 404; the complete Wuppertal-hosted lecture-note copy recorded in coverage was found and verified. An earlier Hochbruck–Ostermann PDF candidate also returned 404; the complete KIT repository copy recorded in coverage was found and verified. An exploratory White Rose thesis page returned HTTP 400 at the web opener because its body exceeded that opener's size limit; its text was recovered with `curl`/MuPDF but was not selected or used in any proof. These were recovered or unused explorations, not failed final sources; no `dropped` or `owner-escalation` source-resolution record is warranted. The successful source-fetch stamps preserve the selected-source retrieval evidence.

No named finite-smoke registration applies to these items. Exact finite calculations (the diagonal stiff coordinate, the nonnormal matrix products/amplification, the zero-matrix phi values, and the skew-Hermitian diagonal action) are recorded as manual finite checks in the proof contracts.

## Scoped checks

After the final item and evidence edits:

- `manifest-deps.mjs`: 14 items, no missing `deps` arrays or errors.
- Focused `depcheck.mjs`: 0 errors and 0 warnings across the 14 items and their prerequisite closure (982 items, 198 pages).
- Focused dependency-level calculation: 14/14 item levels match the computed current manifest graph.
- `precheck.mts`: 12 proof-bearing items checked, 0 failures; the definition and algorithm are not applicable.
- `proof-layout.mjs`: 14 items, 41 steps, 0 defects.
- Strict proof contracts: 14/14 items checked, 0 errors, 0 warnings.
- `content-policy.mjs`: 14 items, 0 errors, 0 warnings.
- `rendercheck.mjs`: 16 changed item/page files, 0 errors, 0 warnings.
- Source fetch check: 6/6 stamped and resolved, 0 documented drops.
- The direct cross-batch-record audit found no missing direct in-run supplier entries and no stale excerpts.
- `step1-decisions.mjs record` wrote 14 `ready` records (`owner: false`) after checking current dependencies, placement, contracts, and evidence. These are authoring-readiness records, not approval or acceptance.
- No tests were run.

## Run-wide blockers left for the owner

The final unfiltered `item-dependency-levels.mjs check --run` reports one mismatch outside batch 94: `thm-parabolic-control-adjoint-gradient-extension` is labeled level 4 but computes as level 6. All 14 batch-94 item levels match the current graph. No foreign page or item was edited.

`batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` cannot complete its run-wide load because `items/alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination.md` repeats the top-level `pipeline_run` key (lines 7 and 26); the parser reports a duplicate-map-key error. The dependency-order task records scheduling input SHA `612d24c94738feeb698923efcebf61f021c147ba4c232bd8fffbea5c82af3ff1`, while the current shared batch-dependency-levels file embeds `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`. Batch 94's assigned batch level and prerequisite batches remain level 6 / batches 28 and 81, and its local item levels independently pass. The shared input was not rewritten; the run-wide YAML blocker prevents checking/reconciling that hash through the batch-level tool.

The full `step1-decisions.mjs check --run` also stops while loading an unrelated malformed carrier, `items/alg-chebyshev-composite-simpson-weighted-mass-matrix.md`, which repeats `pipeline_run` at lines 7 and 26. The 14 batch-94 records were individually written and their decision fields checked, but the run-wide consistency check cannot verify them until the owner repairs the unrelated run metadata. No foreign carrier was edited.
