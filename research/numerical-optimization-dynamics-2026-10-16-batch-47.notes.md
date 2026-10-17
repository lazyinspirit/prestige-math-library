# Batch 47 authoring notes — finite generator master equations and uniformization

Date: 2026-10-16. Run: `numerical-optimization-dynamics-2026-10-16`. Scope: the assigned A/B pair and batch-47 evidence only.

## Instructions, design, and recorded conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch assignment and dependency-level input, the complete XD-01 plan section, matching `plan-spec.json` entries, the current batch evidence, and `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md` before authoring.

The controlling plan is XD-01, `research/plan-numerical-dynamics-track.md` lines 608–634. The plan-spec entries agree on page IDs, titles, order 2378/2379, category, companion relationship, and seven A-page prerequisites. No plan-versus-plan-spec conflict was found. The owner direction's E1 clarification controls source reuse: the finite generator, matrix-series and Poisson-tail facts are locally supplied; the published Krylov matrix-free interface is imported exactly; no CSR cost, stability, or convergence result is inferred from it. The empty plan-spec item arrays are planning scaffolds; the assigned manifest now contains the complete item inventories.

The mathematical scope follows the plan: column probability vectors and column-sum-zero generators; exact finite matrix-exponential and Poisson uniformization; zero-rate handling; a finite term cap and geometric tail certificate; exact one-series missing mass; time-split transient error with a separate arithmetic-error ledger; a given nonexplosive countable chain for killed finite-state projection; the cemetery lift, exact lost mass, bounded-observable bound, return paths, and finite-budget adaptive certification with no existence claim.

## Inventory and dependency levels

The manifest inventory was populated before the carriers. The dispatch scheduling input was `6a3d96e658afa4d7b5dc85a7719275b5ffcf5cee7374f9a389199dfa5f4d2d63`; batch 47 is level 2 with prerequisite batches 2, 7, 10, and 28. The finished A page has 13 items and the B page has four, both below the 100-item cap. Every carrier dependency list matches the manifest, all cross-page item references resolve, and the local graph is acyclic.

| Item | In-batch suppliers | Level |
|---|---|---:|
| `def-xd-finite-column-generator` | — | 0 |
| `lem-xd-finite-matrix-exponential-series` | — | 0 |
| `lem-xd-geometric-poisson-tail-bound` | — | 0 |
| `def-xd-countable-nonexplosive-ctmc` | — | 0 |
| `def-xd-countable-l1-distance` | — | 0 |
| `lem-xd-uniformized-matrix-is-stochastic` | `def-xd-finite-column-generator` | 1 |
| `def-xd-finite-state-projection-and-cemetery-lift` | `def-xd-countable-nonexplosive-ctmc`; `def-xd-finite-column-generator`; `def-xd-countable-l1-distance` | 1 |
| `thm-xd-finite-generator-master-equation-uniformization` | `def-xd-finite-column-generator`; `lem-xd-uniformized-matrix-is-stochastic`; `lem-xd-finite-matrix-exponential-series` | 2 |
| `alg-xd-budgeted-uniformization-accumulation` | `def-xd-finite-column-generator`; `lem-xd-uniformized-matrix-is-stochastic`; `lem-xd-geometric-poisson-tail-bound` | 2 |
| `thm-xd-uniformization-truncation-and-error` | `def-xd-finite-column-generator`; `lem-xd-uniformized-matrix-is-stochastic`; `alg-xd-budgeted-uniformization-accumulation`; `thm-xd-finite-generator-master-equation-uniformization`; `lem-xd-geometric-poisson-tail-bound`; `lem-xd-finite-matrix-exponential-series` | 3 |
| `thm-xd-finite-state-projection-loss-and-observable-bound` | `def-xd-countable-nonexplosive-ctmc`; `def-xd-finite-column-generator`; `def-xd-finite-state-projection-and-cemetery-lift`; `def-xd-countable-l1-distance`; `thm-xd-finite-generator-master-equation-uniformization` | 3 |
| `alg-xd-finite-budget-adaptive-projection` | `def-xd-finite-state-projection-and-cemetery-lift`; `thm-xd-finite-state-projection-loss-and-observable-bound`; `alg-xd-budgeted-uniformization-accumulation`; `thm-xd-uniformization-truncation-and-error` | 4 |
| `thm-xd-finite-budget-adaptive-projection-soundness` | `alg-xd-finite-budget-adaptive-projection`; `thm-xd-finite-state-projection-loss-and-observable-bound`; `thm-xd-uniformization-truncation-and-error` | 5 |
| `ex-xd-two-state-gating-uniformization` | `def-xd-finite-column-generator`; `thm-xd-finite-generator-master-equation-uniformization` | 3 |
| `ex-xd-birth-death-poisson-tail` | `def-xd-finite-column-generator`; `lem-xd-geometric-poisson-tail-bound`; `alg-xd-budgeted-uniformization-accumulation`; `thm-xd-finite-generator-master-equation-uniformization`; `thm-xd-uniformization-truncation-and-error` | 4 |
| `ex-xd-immigration-death-finite-state-projection` | `def-xd-countable-nonexplosive-ctmc`; `def-xd-finite-state-projection-and-cemetery-lift`; `thm-xd-finite-state-projection-loss-and-observable-bound`; `thm-xd-finite-generator-master-equation-uniformization` | 4 |
| `ex-xd-equal-mean-distinct-probability-vectors` | `def-xd-finite-column-generator`; `thm-xd-finite-generator-master-equation-uniformization` | 3 |

Published and cross-batch dependencies do not increase an in-run item level. The complete per-item level calculation and run-wide diagnostics are in `research/numerical-optimization-dynamics-2026-10-16-batch-47.dependency-level-check.json`.

## Mathematical construction and prerequisite review

- `def-xd-finite-column-generator` fixes `q_ij` as the rate from source column `j` to destination row `i`, nonnegative off-diagonal entries, zero column sums, and exit rate `r_j = -q_jj`. It cites the exact finite matrix-space and product/identity conventions.
- `lem-xd-finite-matrix-exponential-series` proves local uniform convergence, term differentiation, and the commuting-product identity from the induced 1-norm and the real exponential series. This supplies the finite-dimensional matrix-function facts needed by the plan.
- `lem-xd-geometric-poisson-tail-bound` handles `mu=0` separately and proves the positive-`mu` right-tail bound by the exact mass ratio and a convergent geometric series. It does not estimate a tail by subtracting rounded partial mass from one.
- `thm-xd-finite-generator-master-equation-uniformization` proves the probability-vector property, the matrix-exponential identity, the Poisson mixture, and uniqueness of the finite ODE solution. The `nu=0` case is explicit.
- The budgeted algorithm splits `nu*t` into substeps with parameter at most one and respects `m*(K+1)<=B`. A rounded backend must certify the scalar control decisions, tail comparisons, and an outward tail upper bound `T`, as well as the separate vector l1 error `E_alg`. Uncertain comparisons return `certificate-unavailable`; the theorem bounds the final error by `T+E_alg`. Its matrix-free action is exactly `v -> P v` plus vector additions/scalar multiples from the published Krylov definition.
- The countable-chain definition takes a given time-homogeneous pure-jump Markov process with finite exit rates and nonexplosion as input. The projection theorem locally derives the finite cemetery generator and first-jump expansion, then uses the finite master equation and common-path coupling. It proves the componentwise lower bound, exact embedded l1 loss, and the half-oscillation observable bound. Returning paths remain in the full marginal and are killed in the projection.
- The adaptive procedure checks only a supplied finite nested list, certifies each computed cemetery interval, and returns `inconclusive` when its list or arithmetic budget does not certify tolerance. It makes no existence claim for an adequate finite set.
- The core generator, matrix-series, uniformization, Poisson-tail, truncation, and projection arguments are choice-free. The immigration/death example invokes Countable Choice and Dependent Choice only through batch-10's nonexplosion theorem. It does not claim arbitrary countable finite-rate arrays generate a nonexplosive chain.

The B-page calculations are fully written out: the two-state gate's uniformization matrix and endpoint rates; the three-state birth-death prefix `P^k e_0` through `k=4`, retained vector `(1/e)*(703/384,277/384,5/32)`, exact omitted mass `1-65/(24e)`, and bound `1/(100e)`; the immigration/death Lyapunov check `V(n)=1+n`, exact cemetery lift and `c_F(t)`, plus a positive-probability return path; and two distinct laws with the common mean trajectory 1.

## Cross-batch and published interfaces

`research/numerical-optimization-dynamics-2026-10-16-batch-47.cross-batch-dependencies.json` records the seven page prerequisites and two exact item interfaces. Current bodies were inspected for batches 2, 7, 10, and 28. The CSR page supplies exact-arithmetic storage and operation counts; this pair makes no CSR cost or convergence claim. The forward-Euler and global ODE pages have their stated local-defect, stability, and compact-tube hypotheses, but no ODE time-stepping estimate is used here. The matrix-norm page supplies the exact induced 1-norm interfaces used by the local series and truncation proofs. The Poisson page supplies the finite count-law mass and normalization.

The only imported batch-10 theorem premise is `thm-countable-state-reaction-networks-lyapunov-nonexplosion` in the immigration/death example. Its complete current proof and current Step 1 record were inspected. The example verifies finite channels/rates and admissible positive-propensity poststates, properness of `V(n)=1+n` and `QV(n)=1-n<=V(n)` for every `n>=0`; the theorem's Countable Choice and Dependent Choice assumptions are declared. Its Step 1 record is `ready`, `owner:false`, and current. That record is authoring readiness, not approval.

## Sources and dispositions

The A-page harvest is recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-47.coverage.json`. It contains 17 harvested results: 9 included, 3 inline, and 5 out of scope with item-specific reasons. The retained full texts are:

- Whitt, *Continuous-Time Markov Chains*, complete 40-page lecture notes; Lemma 2.1, §§3.1–3.4, including the full finite matrix-exponential and uniformization reasoning. The notes use row vectors; formulas are transposed to the declared column convention.
- Munsky and Khammash, *The Finite State Projection Algorithm for the Solution of the Chemical Master Equation*, complete 13-page article; §II equations (2.3)–(2.8), complete proofs of Theorems 2.1 and 2.2, and §III algorithm/Proposition 3.1.
- Fox and Glynn, *Computing Poisson Probabilities*, complete six printed pages; positive Poisson recurrences, truncation/tail bounds, numerical-stability discussion, and the complete proofs of Propositions 5–6. The source's mode-centered underflow safeguards are not imported as claims.

`source-fetch-check --stamp` fetched and stamped all three complete PDFs; final check mode passes 3/3 with zero drops. Byte counts, full-document page counts, hashes, URLs, locators, read evidence, and every harvested result's disposition are in the coverage file. No retrieval failed, so `source_resolution` was not invoked.

## Contracts, readiness, and scoped checks

`research/numerical-optimization-dynamics-2026-10-16-batch-47.proof-contracts.json` covers all 17 items, with 56 exact supplier excerpts, all 48 numbered proof steps and their inputs, and eight boundary worksheets per item. There is no registered finite-smoke checker for finite CTMC/Poisson arithmetic; the finite matrix calculations are exact hand verifications in the B-page proof steps, and the finite-smoke runner reports zero selected checks.

All 17 final Step 1 records are `ready`, `owner:false`, current against their direct dependencies, and include the examined dependency list. The completion records express authoring readiness only.

Final scoped checks:

- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-47.pages.json`: 17 items, no missing dependency arrays or errors.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-47.coverage.json --json`: 1 page, 17 harvested results, zero errors/warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-47.coverage.json`: 3/3 fetch-verified, zero drops.
- Strict proof contracts: 17/17, zero errors/warnings. Precheck: 17 files, 11 proof-bearing items checked, zero failures; the six definitions/algorithms have no proof body. The canonical phase layering was applied to nine proofs so every cited proof step precedes its use.
- Explicit `proof-layout.mjs` on all 17 changed items: 17 items, 48 steps, zero defects. An initial renderer pass found unescaped set delimiters in `def-xd-finite-column-generator`; the braces were escaped, and final `rendercheck.mjs` on the 17 items and both A/B pages passes 19 files with zero errors/warnings.
- Scoped `depcheck`: 17 items and both pages, zero errors/warnings. Scoped `fwdcheck`: zero forward references/errors/warnings. Scoped `extcheck`: zero unproved items/errors/warnings. Scoped `content-policy`: 17 items, zero errors/warnings.
- Finite-smoke runner: success with zero registered checks for these items. No test suite was added or run.
- Scoped dependency levels: all 17 labels match their computed levels; zero cycles/mismatches.

The requested run-wide `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` still exits 1 on unrelated scaffold work. At the recorded check it scanned 214 pages and 966 items and reported 116 issues: 100 empty scaffold inventories and 16 item-level mismatches. The mismatches are in other batches, including `thm-computed-qz-pair-has-certified-backward-error`; no batch-47 item is among them. These diagnostics are preserved in the dependency-level evidence file, and other batches were not edited.

The current `.autopilot/numerical-optimization-dynamics-2026-10-16/status.md` records run stage `1-scaffold`, batch 47 in flight, and the owner-held scaffold blocker in `step1-blockers.json`. The live status file and current git log (HEAD `77fc3d29f8`) were inspected; no RESUME file was used to infer run status. No autopilot state, verdict, published content, or shared plan was changed.
