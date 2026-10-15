# Step 3a reader report — batch 46

Run: `bayesian-computational-statistics-62`  
Role: independent reader  
Date: 2026-10-15

## Opened inventory

### Assigned pages

- `library/bayesian-computational-statistics/particle-smoothing-backward-simulation-and-rbpf.md` (A page)
- `library/bayesian-computational-statistics/particle-smoothing-backward-simulation-and-rbpf-examples.md` (B page)

### Assigned items

Read in dependency order from manifest levels 0–7:

1. `lem-nonlinear-path-extension-is-a-probability-kernel`
2. `def-conditionally-linear-gaussian-state-space-model`
3. `lem-kalman-filter-is-exact-conditional-on-nonlinear-path`
4. `lem-smoothing-backward-kernel-bayes-factorization`
5. `alg-particle-backward-simulator`
6. `alg-rao-blackwellized-particle-filter`
7. `lem-bootstrap-particle-filter-weak-consistency`
8. `alg-fixed-lag-particle-smoother`
9. `thm-particle-backward-simulator-normalization-and-cost`
10. `thm-particle-smoothing-consistency-under-stated-conditions`
11. `thm-fixed-lag-smoother-targets-truncated-conditional-law`
12. `ex-switching-linear-gaussian-rbpf`
13. `ex-zero-backward-simulation-denominator`
14. `ex-fixed-lag-smoothing-bias-from-delayed-information`

### Dependency and contract context

Opened the 25 direct suppliers named in the batch manifest:

- `alg-kalman-filter`
- `alg-multinomial-and-residual-offspring-resampling`
- `alg-sequential-importance-resampling`
- `def-axiom-of-choice`
- `def-feynman-kac-path-targets-and-normalizers`
- `def-general-state-space-model-by-kernels`
- `def-linear-gaussian-state-space-model-with-independent-noises`
- `def-measure-kernel-and-probability-kernel`
- `def-multivariate-normal-law`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `def-standard-borel-space`
- `def-state-space-filtering-laws`
- `def-weak-convergence-of-borel-probability-measures`
- `lem-feynman-kac-path-measures-satisfy-forward-recursion`
- `lem-finite-products-of-standard-borel-spaces-are-standard-borel`
- `lem-one-step-kalman-gaussian-conditioning`
- `thm-chebyshev-markov-inequality-for-the-integral`
- `thm-conditional-density-formula`
- `thm-dominated-state-space-filtering-recursion`
- `thm-dynkin-pi-lambda`
- `thm-finite-horizon-state-space-kernel-law-exists-uniquely`
- `thm-kalman-filter-is-exact-posterior`
- `thm-measurability-of-integration-against-a-kernel`
- `thm-nondegenerate-multivariate-normal-law-has-density`
- `thm-state-space-filtering-and-smoothing-laws-exist`

Also opened `thm-feynman-kac-path-radon-nikodym-weight`, the proposal-weight supplier used by the cross-batch SIR dependency. Its statement specifies a proposal probability and probability kernels and a fixed prefix horizon. The current SIR use in this batch is consistent with those conditions.

Read `research/bayesian-computational-statistics-62-batch-46.proof-contracts.json` and compared its citation/step maps and boundary rows with the current items. The contract material was treated as evidence; it did not determine the verdict.

## Mathematical review

- The path-extension proof establishes measurable sections, probability mass one, and measurable evaluations. The conditionally linear-Gaussian definition supplies Borel coefficient maps, semidefinite state/process covariances, and positive-definite observation covariances; the latter make each innovation covariance positive definite.
- The Kalman result preserves positive semidefinite covariance and uses the exact Gaussian conditional law under the stated positive innovation condition. Its likelihood factor is finite, positive, and measurable. The finite-positive evidence restriction is carried through to the Feynman–Kac conditional-law claim.
- The smoothing backward kernel is the conditional-density update from the filtering law and the transition density. Its exceptional zero/infinite-density fibers use the filtering law as a probability filler, while the particle density mode requires finite positive denominators only for reachable positive-weight children. The general-kernel branch is explicitly conditional on supplied backward conditional kernels.
- The RBPF applies the exact conditional Gaussian update along sampled nonlinear histories; its finite Gaussian mixture remains an approximation to the nonlinear filtering law. The bootstrap consistency proof uses the stated fixed-horizon Feller and bounded-positive-potential assumptions. The backward-smoothing consistency statement separately supplies compactness, continuity, density bounds, and an increasing number of backward draws.
- The fixed-lag procedure and theorem target the prefix conditional law through (s_t=\min(t+L,T)). The examples' Gaussian mixture weights/variances, zero backward denominator, and total-variation distance (1/2) follow from their displayed models.

Authoritative source checks used to resolve the particle-smoothing and lag claims:

- Doucet and Johansen, *A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later*, §5.1, equation (47), explains the truncated-observation target and possible fixed-lag bias; §5.2, equations (48)–(49), gives the backward particle weights and the (O(NT))/(O(N^2T)) operation counts. [PDF](https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF.pdf)
- Lindsten et al., *Rao-Blackwellized particle smoothers for conditionally linear Gaussian models*, §3.1, equations (6)–(9), gives the smoothing factorization and backward weights; §3.2, equation (10) and surrounding text, describes Gaussian conditional components carried by a particle filter. [arXiv:1505.06357](https://arxiv.org/abs/1505.06357)

## Edits and unresolved defects

- Edits: none. No confirmed repairable defect was found in the assigned in-flight items or assigned A-page prose.
- Uneditable defects: none found in the inspected dependency chain.
- Blocker: none.

## Page verdicts

- `particle-smoothing-backward-simulation-and-rbpf`: **Pass.** The summary accurately describes density-based backward simulation and its denominator restriction, the exact-kernel caveat, fixed-lag truncation, conditional Gaussian exactness, finite-particle approximation, and the fixed-horizon assumptions.
- `particle-smoothing-backward-simulation-and-rbpf-examples`: **Pass.** The summary matches the three verified examples and does not overstate exactness of the finite-particle approximation.

## Coverage limit

All assigned pages and items, all 25 direct manifest dependencies, the batch proof-contract file, and the additional SIR Radon–Nikodym supplier were opened. I did not independently re-audit the full transitive dependency closure of every supplier beyond the statements and proof steps needed for this batch.
