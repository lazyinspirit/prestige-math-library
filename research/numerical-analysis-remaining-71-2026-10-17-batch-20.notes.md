# Batch 20 — Multigrid methods and complexity

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: beta  
Pages: `multigrid-methods-and-complexity` (A, order 2594) and `multigrid-methods-and-complexity-examples` (B, order 2595)

## Inventory and item levels

The batch inventory contains 14 items: 11 on A and 3 on B. The A page has 11 of its 100 allowed items; the B page has 3. The recomputed in-batch levels are:

| Level | Items |
|---|---|
| 0 | `def-galerkin-coarse-grid-correction`; `lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero` |
| 1 | `thm-galerkin-coarse-correction-is-energy-orthogonal-projector`; `ex-one-dimensional-poisson-coarse-correction-removes-linear-error` |
| 2 | `def-symmetric-two-grid-error-operator`; `alg-aggregation-based-algebraic-multigrid-hierarchy`; `lem-one-dimensional-poisson-smoothing-and-approximation`; `alg-finite-galerkin-v-cycle` |
| 3 | `thm-two-grid-energy-contraction-under-joint-estimate`; `thm-aggregation-amg-hierarchy-preserves-spd-and-terminates`; `thm-galerkin-v-cycle-work-recurrence-master-regimes` |
| 4 | `thm-one-dimensional-poisson-two-grid-energy-contraction`; `ex-v-and-w-cycle-costs-in-two-dimensions` |
| 5 | `ex-one-dimensional-poisson-two-grid-uniform-contraction` |

A scoped run of `dependencyLevels` on the assigned manifest checked all 14 items, found no cycles or level errors, and found no local-order violation: each same-batch supplier precedes its consumer. Batch 20 itself remains dependency level 0 with `requires: []`; its cross-batch input is `[]`.

The cross-pair prerequisite `lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero` was added to A before its use by both finite-element examples. It proves membership using the Sobolev norm-closure definition, a cutoff estimate, zero extension, and mollification. The examples therefore have an explicit supplier for the nodal hats' membership in the homogeneous test space.

## Plan and design reconciliation

The controlling scope is the approved NA-07 extension in `research/plan-spec.json`. It includes a deterministic strength-graph aggregation setup, indicator prolongation, Galerkin hierarchy, explicit termination statuses, and one concrete level-uniform 1D Poisson result. This extension controls the narrower repaired summary in `research/plan-numerical-linear-track.md` and the older general outline in `research/plan-numerical-analysis-track.md`; those summaries omit the AMG extension or retain an older smoothing route. The current 1D proof gives the compatible joint estimate directly and does not import a separate alpha/beta rate without its compatibility proof.

The older analysis-track locator points to Cornell lecture notes 32–33. Inspection of the official index shows these are CG convergence and tridiagonal/Lanczos material, not multigrid. The plan-spec source key `davis` resolves to *Direct Methods for Sparse Linear Systems*, which does not support AMG. The pair instead used the full Brenner–Scott and Heidelberg multigrid treatments and Zhang's dedicated AMG notes. Additive Schwarz is assigned to PE25 and is not authored here. These conflicts and their evidence are also recorded in the coverage JSON.

The A page retains the declared page interfaces `preconditioner-algorithms-and-residual-metrics` and `lax-milgram-and-weak-elliptic-solutions`. The former supplies only shared residual/method context. The latter supplies the homogeneous weak-form definitions used by the examples. No page placement is treated as a proof premise; the proof facts cite item bodies directly.

## Mathematical and axiom notes

The general symmetric two-grid theorem assumes the joint estimate `||CSx||_A^2 ≤ ρ||x||_A^2`, with `ρ<1`; it does not infer that estimate from separate smoothing and approximation bounds. The 1D Poisson proof derives both bounds, checks their constants, and obtains `ρ=2/(2ν+1)≤2/3` uniformly for `N=2M≥4`.

The AMG setup proves partition, indicator rank, Galerkin SPD/sign preservation, and bounded status termination only. It makes no convergence claim. The finite V/W-cycle definition and work recurrence likewise separate recursion, arithmetic work, and convergence.

The PDE examples use only the homogeneous weak Dirichlet branch. Countable Choice is named at the Sobolev interfaces and in the examples; the inhomogeneous trace branch and its Axiom of Choice assumption are not used. The matrix and cycle arguments otherwise use finite-dimensional algebra and finite recurrences.

## Source reading and retrieval

Read the complete relevant reasoning in:

- Brenner–Scott, *The Mathematical Theory of Finite Element Methods*, Chapter 6 §§6.1–6.7, printed pp.155–172, PDF pp.167–184.
- Heidelberg *Numerical Methods II*, Chapter 10 Example 10.4 and §§10.3–10.4, PDF pp.182–193.
- Zhang, *Multilevel Iterative Methods*, Chapter 6 §§6.3–6.5, printed pp.123–135, PDF pp.125–137.

The full source extracts and their SHA-256 hashes are in `numerical-analysis-remaining-71-2026-10-17-batch-20-source-cache/`. `source-fetch-check --stamp` verified all 6 page/source entries; the repeated B-page book/notes entries were separately stamped and have matching bytes and hashes. No source was dropped. The Saad plan URL had an initial browser timeout. The first `source-fetch-check` recovery retry fetched and stamped the complete 567-page PDF, so retries stopped; that chapter was not read or used. Cornell and Davis mismatches and the Saad history are recorded in coverage/source evidence.

## Scoped checks

- `precheck.mts`: 14 items, 10 proof-bearing items pass; 4 definitions/algorithms not applicable. Three proposed normalizations were adopted before the final pass.
- `proof-layout.mjs` on all 14 assigned item files: 35 steps, 0 defects.
- `rendercheck.mjs`: 16 changed item/page files, 0 errors, 0 warnings. The AMG strength criterion's display formula was kept on one source line.
- `content-policy.mjs`: 14 scoped items, 0 errors, 0 warnings.
- `depcheck.mjs --items-file`: 14 scoped items; dependency closure 1,521 items / 224 pages; 0 errors, 0 warnings.
- `proof-contract.mjs --strict`: 14/14 items, 0 errors, 0 warnings. Contracts contain exact supplier-section excerpts, actual step claims/inputs, all eight boundary dispositions, empty finite-smoke rows (no registered multigrid check), and author self-check risk notes.
- `citation-fidelity.mjs`: 45 citations checked, 0 missing quotes, 0 widening candidates.
- `source-fetch-check.mjs` check mode: 6/6 source entries resolved with fetch stamps.
- `step1-decisions.mjs check`: all 14 batch items have current `ready` records; 0 unresolved records in batch 20.

## Run-wide owner handoff

The full `item-dependency-levels.mjs check --run` is not a batch-scoped gate: its final run reports 80 errors, comprising 79 empty scaffold inventories in other assigned pairs and one out-of-scope declared-level mismatch (`ex-ewald-source-collision-field-singularity`, declared 4, computed 1). The scoped batch-20 calculation passes as reported above.

The run-wide `batch-dependency-levels.mjs check` cannot recompute because its snapshot reader reaches malformed YAML in the unrelated `items/lem-ewald-gaussian-poisson-periodization.md:21` (an invalid `\p` escape in a double-quoted locator). The shared `batch-dependency-levels.json` currently records batch 20 as level 0 with no suppliers; it was left to the owner. The live autopilot remains at `1-scaffold` (7/71 batches covered) with its existing owner repair/recertification blocker; no engine state, shared plan, verdict, or other pair was edited.

All 14 batch items are recorded `ready` for Step 1 based on their current dependencies, placements, contracts, and source evidence. This records authoring readiness only and is not independent approval.
