# Batch 29 — Monotone finite-volume entropy convergence

Run `numerical-analysis-remaining-71-2026-10-17`; assigned pair `monotone-finite-volume-entropy-convergence` / `monotone-finite-volume-entropy-convergence-examples`. The run assigns batch level 1, requiring batch 28. Scheduling input SHA-256: `f84df69a5e310ca97af60bfc3cf67de8e856f66424a8a99ba39332ea4ae7eced`.

## Design control and discrepancy

The binding owner authoring direction was read first; it contains no additional NA-27 pair-specific amendment. The detailed spatial design at `plan-numerical-spatial-track.md` §NA-27 controls the authoring interfaces because the current `plan-spec.json` row points to that scaffold. The numerical-analysis design at §NA-27 agrees on scalar bounded-BV scope, CFL and mesh-ratio conditions, the rational-point compactness proof, the initial trace, the axiom branches, local convergence, and the examples.

Both detailed design sections list `scalar-conservation-laws-and-entropy-solutions` as a page prerequisite. The controlling current `plan-spec.json` row lists only `conservative-finite-volume-weak-limits` in page `requires`. Following the plan, the A page retains that page-level requirement. The theorem item directly depends on the published Kruzhkov entropy definition, local contraction theorem, and bounded-data existence theorem; their exact hypotheses are also stated in its Facts & Assumptions. This is a page-level design/plan discrepancy for owner reconciliation, not an unavailable item-level supplier.

## Inventory, dependencies, and item levels

The manifest contains 7 A items and 4 B items (11 total); both pages are below the 100-item cap. Direct dependencies below match the current carriers and scaffold manifest. Published or out-of-batch suppliers remain explicit but do not raise item levels; an in-run supplier raises the level to one plus its maximum level.

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-bounded-bv-data-on-line` | 0 | `def-l-p-space-as-a-quotient-by-null-functions`, `def-l-infinity-on-a-measure-space`, `def-locally-integrable-function-on-r-n` |
| `def-monotone-finite-volume-entropy-scheme` | 1 | `def-bounded-bv-data-on-line`, `def-conservative-finite-volume-scheme` |
| `def-piecewise-linear-fv-time-interpolant` | 2 | `def-monotone-finite-volume-entropy-scheme`, `def-finite-volume-space-time-reconstruction` |
| `lem-monotone-fv-update-preserves-range-and-tvd` | 2 | `def-bounded-bv-data-on-line`, `def-monotone-finite-volume-entropy-scheme` |
| `lem-monotone-fv-discrete-kruzhkov-inequality` | 3 | `def-monotone-finite-volume-entropy-scheme`, `lem-monotone-fv-update-preserves-range-and-tvd`, `def-kruzhkov-entropy-solution` |
| `lem-monotone-fv-local-compactness-and-trace` | 3 | `def-bounded-bv-data-on-line`, `def-monotone-finite-volume-entropy-scheme`, `def-piecewise-linear-fv-time-interpolant`, `lem-monotone-fv-update-preserves-range-and-tvd`, `thm-bolzano-weierstrass`, `lem-q-and-irrationals-dense-r`, `thm-rationals-countable`, `thm-monotone-convergence-for-the-integral`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` |
| `thm-monotone-finite-volume-entropy-convergence` | 4 | `def-bounded-bv-data-on-line`, `def-monotone-finite-volume-entropy-scheme`, `def-piecewise-linear-fv-time-interpolant`, `lem-monotone-fv-update-preserves-range-and-tvd`, `lem-monotone-fv-discrete-kruzhkov-inequality`, `lem-monotone-fv-local-compactness-and-trace`, `thm-conservative-finite-volume-weak-limit`, `def-kruzhkov-entropy-solution`, `thm-kruzhkov-local-l1-contraction`, `thm-existence-of-bounded-kruzhkov-entropy-solutions`, `thm-extreme-value-metric`, `cor-mean-value-theorem`, `def-countable-choice`, `def-dependent-choice` |
| `cex-nonmonotone-fv-scheme-selects-expansion-shock` | 1 | `def-bounded-bv-data-on-line`, `def-conservative-finite-volume-scheme`, `def-locally-bounded-distributional-weak-solution`, `def-kruzhkov-entropy-solution`, `lem-schwartz-cutoffs-from-the-standard-smooth-step` |
| `ex-godunov-fv-monotone-under-cfl` | 5 | `def-bounded-bv-data-on-line`, `def-monotone-finite-volume-entropy-scheme`, `def-godunov-flux-for-burgers`, `lem-godunov-flux-for-burgers-is-continuous-and-consistent`, `def-countable-choice`, `def-dependent-choice`, `thm-monotone-finite-volume-entropy-convergence` |
| `ex-lax-friedrichs-fv-monotone-under-cfl` | 5 | `def-bounded-bv-data-on-line`, `def-monotone-finite-volume-entropy-scheme`, `thm-extreme-value-metric`, `cor-mean-value-theorem`, `def-countable-choice`, `def-dependent-choice`, `thm-monotone-finite-volume-entropy-convergence` |
| `ex-godunov-fv-captures-stationary-burgers-shock` | 6 | `def-bounded-bv-data-on-line`, `def-monotone-finite-volume-entropy-scheme`, `def-godunov-flux-for-burgers`, `lem-godunov-flux-for-burgers-is-continuous-and-consistent`, `def-distributional-weak-solution-of-a-scalar-conservation-law`, `thm-rankine-hugoniot-jump-condition`, `def-kruzhkov-entropy-solution`, `def-countable-choice`, `ex-godunov-fv-monotone-under-cfl`, `thm-monotone-finite-volume-entropy-convergence` |

Thus the A chain is 0 → 1 → 2 → 3 → 4; the nonmonotone counterexample is level 1; the two flux examples are level 5; the stationary shock example is level 6. The batch-29 local level computation checked all 11 labels, with maximum 6.

## Supplier body checks

The current batch-28 A page and actual supplier bodies were inspected before consumers were declared ready. Verified edges and exact interface details are recorded in `batch-29.cross-batch-dependencies.json`:

- `def-conservative-finite-volume-scheme` supplies half-open full-line cells, cell-average initialization, shared-face flux orientation, and the conservative update.
- `def-finite-volume-space-time-reconstruction` supplies the piecewise-constant space-time states used by the affine interpolant.
- `thm-conservative-finite-volume-weak-limit` statement and full proof supply only the conditional weak identity from strong local convergence and local boundedness. It supplies neither compactness nor entropy admissibility; batch 29 proves those locally.
- `def-godunov-flux-for-burgers` and `lem-godunov-flux-for-burgers-is-continuous-and-consistent` supply the actual branch formula and its continuity/diagonal consistency. The examples prove the coordinate monotonicity, local Lipschitz property, and CFL bounds used here.
- `def-locally-bounded-distributional-weak-solution` supplies the weak identity checked directly in the counterexample.

The published scalar entropy definition, local-contraction theorem, bounded-data existence theorem, Rankine–Hugoniot theorem, cutoff result, and basic compactness/integration suppliers were checked at their actual statement and proof bodies. No required supplier is absent. No supplier excerpt or approval is inferred from a plan interface.

## Axiom branches

The main theorem states `ACω` for the imported weak-limit and local-contraction interfaces. It invokes the published bounded-data existence theorem only when `u₀ ∈ L¹(R)`; that branch additionally assumes `DC`. For nonintegrable bounded-BV data, the pair constructs an entropy solution from the local finite-volume limit and uses the local contraction theorem, without `DC`. It does not assume full AC. The compactness lemma’s rational diagonal and subsequence choices are defined by deterministic least-index selections; they do not use a choice axiom. Both general flux examples carry the same conditional `DC` hypothesis because they cover integrable as well as nonintegrable data. The stationary ±1 shock is nonintegrable and uses only the `ACω` branch.

## Sources and disposition

Two independent full lecture-note treatments were retrieved and inspected for both A and B pages. Retrieval hashes, page counts, item support, locators, and each harvested result’s disposition are in `batch-29.source-coverage.json` and `batch-29.source-evidence.json`.

| Source | Read extent and supported results | Disposition |
|---|---|---|
| Jérôme Droniou, *A beginner’s course in finite volume approximation of scalar conservation laws*, complete 39-page PDF (398,076 bytes), [source](https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf), SHA-256 `8458122ef9611bc29a187b67f1721c1756683467a3714503d14070a8c2ae15f5`. | A page: §§2.2.2–2.2.3, PDF pp. 15–18 (monotone fluxes, invariant range, CFL); §§2.3.1–2.3.3, pp. 19–23 (TVD/time estimates, discrete entropy inequality, convergence); §2.6.2, pp. 28–30. B page: §2.2.3 and §2.4, pp. 17–18 and 23–24 (Godunov flux and Burgers shock); §2.3.3, pp. 22–23. | Included flux/CFL, TVD/time, discrete entropy, convergence, and Godunov/shock context. The no-BV entropy-process route in §2.6.2 is out of scope; batch 29 proves the approved bounded-BV local route directly. The polynomial counterexample is constructed and checked locally. |
| Siddhartha Mishra, Ulrik Skre Fjordholm, and Rémi Abgrall, *Numerical Methods for Conservation Laws and Related Equations*, complete 125-page ETH notes (4,841,397 bytes), [source](https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf), SHA-256 `a0434453c2e2ee752a5fe3ff20cab073e28195b5ddd4a3ab82cdb05d43685dcb`. | A page: §4.4.4, PDF pp. 49–50; §§4.5.2–4.5.4, pp. 51–54; §4.6, pp. 55–57, including the full proof of Theorem 4.19. B page: §4.4.4, pp. 49–50, and §4.6, pp. 55–57. | Included monotone-flux examples, discrete entropy flux, TVD/time estimates, compactness/convergence route, and its positive lower mesh-to-time ratio. The source’s global L¹ tail route is out of scope; the counterexample is a local construction. |

The B-page source records are context for the Godunov/Lax–Friedrichs and stationary-shock calculations; the complete formulas and entropy/weak checks are supplied in the local items. No source retrieval failed; no sources were dropped. Final `source-fetch-check --stamp`: 4/4 sources fetch-verified, 4/4 resolved, 0 documented drops (0 new stamps because all four records already had valid stamps).

## Final checks and handoff blocker

- `manifest-deps`: 11 items, 0 missing arrays, 0 errors.
- Batch-29 dependency labels: 11 items verified locally, maximum level 6. The whole-run `item-dependency-levels` command could not parse the concurrent batch-49 manifest: `research/numerical-analysis-remaining-71-2026-10-17-batch-49.pages.json`, at position 10453 (line 143, column 199). The subsequent decision-tool reads failed on the same file at position 10667 (line 148, column 199); its current statement string contains an unescaped `\mathcal`. The offsets changed between reads while batch 49 was being edited. This is outside batch 29 and was not edited.
- `proof-layout` on all 11 explicitly changed items: 41 steps, 0 defects.
- `precheck`: 8 proof-bearing items checked, 0 failing; definitions are not applicable.
- `author-check` batch 29: pass (precheck, renderer, content policy, and strict proof-contract checks all pass).
- `proof-contract --strict`: 11/11 items, 0 errors, 0 warnings; 56 exact fact/source excerpts and 41 mapped proof steps. `depcheck`, `fwdcheck`, and `extcheck` passed for the assigned 11-item scope.
- `finite_smoke` is empty for all 11 contracts: no registered finite check verifies these general compactness, entropy, or convergence claims; the local Burgers examples have complete analytic checks in their proof steps.
- Final `source-fetch-check --stamp`: 4/4 fetch-verified and resolved.

The hash-bound `step1-decisions record` was attempted for `def-bounded-bv-data-on-line` and failed before writing because its whole-run input load hits the same malformed batch-49 JSON. `step1-decisions check --run numerical-analysis-remaining-71-2026-10-17` fails there as well. No batch-29 readiness records were written. Batch 29’s suppliers, placement, contracts, and scoped checks are complete; after the owner repairs that batch-49 manifest, rerun `step1-decisions record` for these 11 items using the direct dependency arrays above, then rerun the check. This handoff blocker is run-wide input parsing, not a missing mathematical supplier or proof.
