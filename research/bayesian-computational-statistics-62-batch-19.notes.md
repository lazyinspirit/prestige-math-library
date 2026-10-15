# Batch 19 authoring notes — weak nonparametric Bernstein–von Mises limits

## Plan and scope

- The owner direction is controlling. The authored result is the fixed product-prior BvM theorem in the negative logarithmic Sobolev topology. It does not assert an adaptive-prior theorem, an $M_0(w)$ result, total-variation convergence of the full posterior, or credible-set coverage.
- `research/plan-spec.json` entries 2059–2060 agree with the task on page IDs, titles, category, order 2078/2079, companion relationship, and empty `requires`. Their `items: []` fields are the pre-authoring plan inventory; the batch manifest supplies the 13 authored item IDs. No substantive plan/design conflict was found.
- The A-page inventory is 11 items; its B-page inventory is 2 examples. Both pages remain draft and below the page cap.
- The posterior kernel is an explicit model input in the local posterior-coordinate interface. This batch proves its finite-coordinate conditional law and does not claim a general RCD-existence theorem under countable choice. The BvM claim is conditional on that supplied kernel.

## Item dependency levels

All declared item suppliers are either earlier items within this pair or external published context. The locally recomputed levels match the carriers and manifest:

| Level | Items |
|---|---|
| 0 | `def-negative-sobolev-space-for-white-noise`; `lem-wavelet-product-prior-is-l2-valued`; `lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces` |
| 1 | `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`; `lem-product-prior-coordinate-posterior-law` |
| 2 | `lem-product-prior-posterior-second-moment-in-negative-sobolev-space`; `lem-finite-coordinate-posterior-total-variation-limit`; `cor-canonical-white-noise-law-is-tight-under-choice` |
| 3 | `thm-weak-nonparametric-bernstein-von-mises-for-product-priors`; `ex-white-noise-is-not-l2-valued` |
| 4 | `cor-weak-posterior-convergence-in-negative-sobolev-space`; `ex-gaussian-product-prior-satisfies-weak-bvm` |
| 5 | `cor-continuous-functionals-of-the-scaled-posterior-converge` |

The two added external inequalities in the main theorem are the published random-variable Cauchy–Schwarz and Markov inequalities; neither creates an in-run edge. The cross-batch dependency input is empty. No cycle or cross-batch supplier change is required.

The continuous-mapping corollary directly declares the main BvM theorem because its Statement cites that theorem. This added in-batch dependency leaves its computed level at 5.

## Mathematical and axiom checks

- The weighted coefficient space is explicitly shown to be a separable Hilbert space; the $L^2$ coefficient embedding is justified by finite Pythagorean projections. The wavelet and trigonometric trace thresholds are checked by dyadic block comparisons.
- The white-noise construction has finite expected squared $H(\delta)$ norm exactly when $\delta>1/2$, is Borel Gaussian there, and is not $L^2$-valued in an infinite basis. The posterior second-moment estimate and the finite-coordinate $L^1$ limit are proved locally; the source omits the finite-dimensional proof.
- Countable choice is spent only for the Riesz–Fischer $L^2$ prior construction. The full posterior kernel is a stated model input. Full AC is confined to the separate Prokhorov/tightness and bounded-Lipschitz/weak-topology corollaries; the core bounded-Lipschitz BvM proof is choice-free beyond countable choice.
- Direct supplier statements/proofs and the transitive dependency closure were checked for availability and declared choice assumptions. All transitive external suppliers exist and are published. The only stronger axiom branch used here is the explicit full-AC branch in Prokhorov and weak-topology consequences.

## Source record

The existing coverage ledger retains its retrieval history, page locators, supported items, and per-result dispositions. Full documents were downloaded and inspected; their hashes and byte counts match the existing stamps. `source-fetch-check --stamp` reported 3/3 sources fetch-verified and 0 newly stamped.

- Castillo–Nickl (2013), full 30-page article: Definition 1, Definition 2, Condition 1, full Theorem 5 proof, Theorem 7 (proof expressly omitted), full Theorem 8 proof, and Theorem 9 proof. The local finite-coordinate density argument supplies the omitted Theorem 7 proof. Posterior-mean efficiency and credible-set results remain deferred to BCS-17.
- Giné–Nickl (2016), full monograph: Definition 7.3.10, Condition 7.3.11, full Theorem 7.3.12 proof, Theorem 7.3.18 proof, and full Theorem 7.3.19 projection/tail proof. The multiscale Theorem 7.3.20 uses a different model and stronger coefficient-tail assumption; it is out of scope. Theorem 7.3.23 credible-ball conclusions are deferred.
- Ray (2016), full paper: §§2.1–2.2 independently confirm the $H(\delta)$ topology and bounded-Lipschitz weak-BvM formulation. Its §7.1 adaptive empirical/hierarchical prior claims have different hypotheses and are not imported.

No retrieval failed, so no `source_resolution` drop or escalation record was needed. The existing successful recovery-attempt entries were reused; no retries were added.

## Scoped check results and owner handoff

- Pair-local dependency graph: 13/13 IDs, levels, and carrier/manifest dependency arrays agree; levels are acyclic and in ascending supplier order.
- Proof contracts: strict check passes for 13/13 contracts (42 proof-step derivations, 59 exact supplier citations, all eight standard boundary dispositions per item; no registered finite-smoke check applies).
- Proof layout: 13 items, 42 steps, 0 defects. Precheck: 12/12 proof-bearing items pass; the definition is not applicable.
- Rendercheck: 15/15 page/item files pass. Content policy: 13 items, 0 errors and 0 warnings. Focused depcheck: 746 dependency-closure items over 159 pages, 0 errors and 0 warnings.
- Source fetch check: 3/3 stamped sources verified, 0 newly stamped.
- The run-wide item-level check reports 54 empty scaffold inventories outside this assignment and no mismatch in batch 19; the pair-local 13-item check passes. Those other inventories were not edited.
- `batch-dependency-levels.mjs check` reports that the shared run artifact is stale after the authorized manifest edits. The recomputed batch-19 edge set remains `requires: []` and level 0 because no dependency points to another in-run batch. The shared scheduling artifact is left for the owner to regenerate.
- All 13 batch-19 Step-1 records are `ready` and hash-current. The run-wide scan sees 377 items, 106 ready, and remains open because other batches still have unclosed work; only assigned batch-19 records were written.
