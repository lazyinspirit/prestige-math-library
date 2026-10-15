# Step 3a reader report — batch 20

Run: `bayesian-computational-statistics-62`  
Role: reader  
Scope: batch `20` only

## Inventory opened

Read the current batch-20 manifest, coverage evidence, dependency ledger, proof contracts, and authoring notes. The current manifest assigns 22 items to A page `functional-bayesian-limits-and-credible-set-calibration` and 4 items to B page `functional-bayesian-limits-and-credible-set-calibration-examples`; this is the present scope even though the authoring notes describe an earlier 18-item inventory.

Opened both page files:

- `library/bayesian-computational-statistics/functional-bayesian-limits-and-credible-set-calibration.md`
- `library/bayesian-computational-statistics/functional-bayesian-limits-and-credible-set-calibration-examples.md`

Opened every assigned item in dependency order:

- A page: `def-multiscale-coefficient-space-m0w`, `def-sobolev-linear-functional-for-white-noise`, `def-type-s-and-h-multiscale-density-priors`, `lem-compact-wavelet-projection-kernel-and-commutator`, `lem-m0w-separable-and-projection-tails`, `lem-multiscale-primitive-map-to-continuous-cdfs`, `lem-random-posterior-quantiles-stabilize-under-bvm`, `lem-smooth-functional-extends-to-negative-sobolev-space`, `lem-type-s-h-prior-draws-are-l2-densities`, `lem-type-s-posterior-preliminary-contraction`, `lem-m0w-finite-projection-and-tail-bvm-criterion`, `lem-density-gaussian-bridge-is-borel-on-m0w`, `lem-finite-dirichlet-gamma-representation-and-bernstein-bound`, `thm-linear-functional-bvm-and-credible-coverage`, `thm-nonlinear-functional-bvm-and-credible-coverage`, `thm-projected-empirical-process-clt-in-m0w`, `lem-density-bridge-norm-cdfs-are-continuous-and-strict`, `thm-type-h-histogram-posterior-weak-bvm-in-m0w`, `thm-type-s-density-weak-bvm-on-m0w`, `thm-cdf-and-multiscale-credible-band-calibration-from-bvm`, `thm-multiscale-credible-band-holder-diameter`, and `cor-type-s-h-density-credible-band-calibration`.
- B page: `cex-credible-posterior-set-with-zero-frequency-coverage`, `ex-nonlinear-functional-remainder-at-parametric-scale`, `ex-smooth-linear-functional-in-white-noise`, and `ex-type-s-and-h-density-prior-contracts`.

Opened all 45 distinct direct dependency items declared by the assigned items. These included current-run suppliers from batches 6 (`def-dirichlet-distribution`, `def-gamma-distribution-shape-rate`, `lem-gamma-density-normalization`, `thm-dirichlet-multinomial-conjugate-update`), 7 (`lem-measurable-posterior-quantile-and-cdf-bracketing`, `thm-central-posterior-quantile-interval-is-credible`, `def-posterior-credible-set`), 11 (`lem-iid-bounded-variance-bernstein-tail`), 14 (`thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel`), and 19 (`def-negative-sobolev-space-for-white-noise`, `lem-density-normal-laws-and-square-summable-gaussian-series`, `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`, `thm-weak-nonparametric-bernstein-von-mises-for-product-priors`, `lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces`). The remaining direct suppliers are published library items, including the measure, Gaussian, Brownian, weak-convergence, change-of-variables, and posterior-kernel results used in the assigned proofs.

## Review and decisions

Reviewed statements, hypotheses, definitions, constructions, computations, proof steps, cited dependency statements, examples, and page summaries against the current authored files. The batch contract rows and source notes were used as navigation evidence only; they did not determine verdicts.

The A page's functional white-noise results preserve the product-prior and topology assumptions of their supplier. The nonlinear remainder uses the stronger radius convention stated locally. The multiscale and primitive-map arguments state their additional admissibility and summability requirements. The Type-S and Type-H proofs provide local posterior arguments under the stated prior, truth, basis, cutoff, and Dirichlet conditions; their direct empirical-center limits feed the conditional calibration theorem. The norm-quantile arguments establish the local continuity and strict-increase conditions used there. I found no confirmed mathematical, citation, title, or statement defect in the assigned A-page items.

The B page's Bernoulli boundary example computes the posterior and zero frequentist coverage correctly. The integral-functional and nonlinear-remainder examples meet their stated assumptions and their computations are correct. The uniform-truth example verifies the displayed Type-S, Type-H, and weight-sequence conditions. I found no confirmed defect in the assigned B-page items or its page summary.

Independently checked the relevant statements in Castillo and Nickl, *On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures*, arXiv:1310.2484: prior cutoffs and Type-S/Type-H specifications, equations (19)–(25), Theorem 1, Theorem 3, and the setup of §5.4 (PDF pp. 12–14, 9, 14, and 24–28 respectively). The source Type-S/Type-H truth, cutoff, prior-scale, and Dirichlet restrictions agree with the local claim interfaces. Also checked Castillo and Nickl, *Nonparametric Bernstein–von Mises theorems in Gaussian white noise*, arXiv:1208.3862, Condition 1 and Theorems 3–4 (§§2.3.1–2.3.2, PDF pp. 13–14); the local linear and nonlinear results retain their representer and contraction requirements.

### Page verdicts

- `functional-bayesian-limits-and-credible-set-calibration` (A): no confirmed defect found in the current page summary or its 22 assigned items.
- `functional-bayesian-limits-and-credible-set-calibration-examples` (B): no confirmed defect found in the current page summary or its 4 assigned items.

### Edits, unresolved defects, and checks

- Edits: none. No confirmed defect requiring repair was found.
- Defects not editable: none identified.
- Blocker: none. The live autopilot state was `running` at `3a-read`; no batch-20 result artifact existed at review start.
- No item changed, so reflow, precheck, and proof-layout were not run.

## Coverage limitation

All assigned items, pages, proof-contract records, and their 45 distinct direct dependency items were opened. I did not independently re-audit every transitive proof closure behind those dependencies or every bibliography entry; the mathematical review here covers the assigned carriers and the directly used supplier statements/proofs. The two Castillo–Nickl source checks above were limited to the listed claims and passages, and their source proofs were not used as substitutes for the local assigned arguments.
