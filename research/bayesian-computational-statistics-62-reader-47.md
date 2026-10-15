# Step 3a reader report — batch 47

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `47`  
Date: 2026-10-16

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/particle-mcmc-pmmh-and-particle-gibbs.md` (A)
- `library/bayesian-computational-statistics/particle-mcmc-pmmh-and-particle-gibbs-examples.md` (B)

Assigned items, read in dependency order:

- `def-particle-gibbs-extended-target`
- `alg-pmmh`
- `thm-pmmh-exact-invariance`
- `alg-monte-carlo-within-metropolis`
- `alg-conditional-particle-gibbs`
- `thm-particle-gibbs-selected-path-marginal`
- `thm-particle-gibbs-conditional-sweep-is-gibbs`
- `def-particle-gibbs-backward-simulation-extended-target`
- `alg-particle-gibbs-backward-simulation`
- `thm-particle-gibbs-backward-simulation-sweep-is-gibbs`
- `ex-pseudo-marginal-rejection`
- `cex-monte-carlo-within-metropolis-not-exact`
- `ex-particle-gibbs-invariant-but-sticky`
- `cex-particle-gibbs-missing-path-support`

All external direct dependencies declared by these items were opened:

- `alg-metropolis-hastings-kernel`
- `alg-sequential-importance-resampling`
- `def-axiom-of-choice`
- `def-feynman-kac-path-targets-and-normalizers`
- `def-invariant-and-stationary-distribution-for-a-markov-kernel`
- `def-measure`
- `def-measure-kernel-and-probability-kernel`
- `def-probability-measure`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `lem-prior-and-model-kernel-define-joint-law`
- `def-standard-borel-space`
- `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`
- `thm-feynman-kac-path-radon-nikodym-weight`
- `thm-metropolis-hastings-kernel-is-reversible-and-invariant`
- `thm-sequential-particle-estimator-is-unbiased`

Additional suppliers opened to verify those claims:

- `def-general-state-reversibility-by-symmetric-flow-measure`
- `thm-general-state-reversibility-implies-invariance`
- `lem-common-submeasure-and-bounded-radon-nikodym-density`
- `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels`
- `alg-multinomial-and-residual-offspring-resampling`
- `thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts`
- `lem-feynman-kac-path-measures-satisfy-forward-recursion`
- `def-state-space-filtering-laws`
- `def-general-state-space-model-by-kernels`

I also read the batch manifest, reader brief, proof contracts, and batch 47 authoring notes. I treated them as navigation and evidence, not mathematical verdicts. The run status command returned `running` with `3a-read` active; batch 47 had no reader artifact at that scan.

## Review and source evidence

The PMMH target and retained-state transition agree with the general accepted-flow Metropolis–Hastings construction. The unbiased SIR normalizer identity supplies a proper extended target, and summing over the terminal index gives the exact parameter-path posterior. The multinomial genealogical particle Gibbs target factors into the posterior path factor and normalized conditional particle-filter laws; its terminal index conditional is categorical with the final weights. The backward-simulation target and its CAPF/backward-index conditionals agree with the explicit factorization in the cited literature. The finite examples' weights, transition probabilities, and balance calculations check arithmetically.

Authoritative source passages read:

- Andrieu, Doucet, and Holenstein, *Particle Markov chain Monte Carlo methods*, [Oxford-hosted full text](https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf): §4.4, Theorem 4, for the extended PMMH target and invariance; §4.5, Theorem 5 and equations (36)–(37), for the particle Gibbs extended target and conditional sweep.
- Lindsten and Schön, *On the use of backward simulation in particle Markov chain Monte Carlo methods*, [arXiv:1110.2873v2 full text](https://arxiv.org/html/1110.2873v2): §3.1, Assumption 1, for proposal support; §4.1, equation (7) and Propositions 1–3, for the backward-simulation target, selected-path marginal, CAPF conditional, and backward-index conditional; Appendix A contains the cited derivations. The arXiv page gives the exact title and version. This showed that several assigned source entries had the wrong title for their arXiv URL.

## Repairs

- `items/alg-pmmh.md`: the definition accepts an arbitrary prior probability measure but previously required pointwise `\pi_0(\theta)>0` for initialization, a density-only condition. The density-ratio case now requires `p_0(\theta)\widehat L_\theta(U)>0`; the density-free accepted-flow version no longer invokes a pointwise prior value. The general MH dependency supplies that density-free construction.
- `items/def-particle-gibbs-extended-target.md`: its target integrates a parameter-indexed particle law, while the cited state-space model definition explicitly describes one fixed law and does not supply parameter measurability. The definition now requires common standard-Borel state spaces, jointly measurable parameterized target/proposal kernels, potentials, and weight versions, so `\gamma_{\theta,T}` and `\psi_\theta` are kernels and the target is defined. It also lists `lem-prior-and-model-kernel-define-joint-law` for the prior-kernel joint measure. The corresponding contract boundary evidence was updated.
- `library/bayesian-computational-statistics/particle-mcmc-pmmh-and-particle-gibbs.md`: the A-page summary now records measurable parameter dependence of the target and proposal kernels.
- Ten assigned items that cited arXiv:1110.2873 were corrected to the actual source title and version: `alg-pmmh`, `def-particle-gibbs-extended-target`, `alg-conditional-particle-gibbs`, `thm-particle-gibbs-selected-path-marginal`, `thm-particle-gibbs-conditional-sweep-is-gibbs`, `def-particle-gibbs-backward-simulation-extended-target`, `alg-particle-gibbs-backward-simulation`, `thm-particle-gibbs-backward-simulation-sweep-is-gibbs`, `ex-particle-gibbs-invariant-but-sticky`, and `cex-particle-gibbs-missing-path-support`.
- The `alg-pmmh` zero-weight and degenerate-case contract evidence was updated for the density-only initialization condition. None of the changed items had a `verification.judge` record to remove.

Required item checks after the final edits:

- Reflow and precheck ran for all 10 changed item paths. All commands exited 0; proof-bearing items passed, and definitions/algorithms reported zero proof sections to check.
- `node tools/proof-layout.mjs` on all 10 changed item paths: 10 items, 19 proof steps, 0 defects.

## Page verdicts

- `particle-mcmc-pmmh-and-particle-gibbs` (A): pass after the summary repair; its PMMH, particle Gibbs, and backward-simulation claims are supported with the stated measurability, support, and evidence assumptions.
- `particle-mcmc-pmmh-and-particle-gibbs-examples` (B): pass; the finite examples and counterexamples are correctly stated and computed. No B-page prose was edited.

## Unresolved defects and blockers

No confirmed defect remains in the assigned items or pages, and no confirmed defect was found in the opened dependency carriers. No blocker remains. I did not audit the full recursive prerequisite closure; foundational suppliers beyond the direct and claim-critical dependencies listed above were not independently re-proved.
