# Step 3a reader report — batch 76

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `76`

## Opened inventory

Assigned pages opened:

- `library/numerical-differential-equations-and-stochastic-dynamics/stable-sde-schemes-for-superlinear-drift.md` (A page)
- `library/numerical-differential-equations-and-stochastic-dynamics/stable-sde-schemes-for-superlinear-drift-examples.md` (B page)

All assigned items opened and reviewed, suppliers before consumers:

- A page: `def-locally-lipschitz-ito-sde-and-maximal-solution`, `lem-brownian-ito-integral-bdg-moment-bound`, `alg-cir-lamperti-positive-implicit-scheme`, `alg-tamed-euler-superlinear-drift`, `thm-local-sde-existence-and-uniqueness-until-exit`, `lem-cir-lamperti-transform-and-positive-root`, `lem-tamed-euler-uniform-moment-bounds`, `thm-superlinear-sde-global-existence-and-moments`, `alg-drift-implicit-euler-sde`, `thm-cir-positive-solution-and-nonattainment`, `thm-tamed-euler-strong-order-half`, `thm-cir-lamperti-scheme-converges-in-probability`, and `thm-drift-implicit-euler-sde-strong-order-half`.
- B page: `cex-euler-moments-diverge-for-cubic-dissipative-sde`, `ex-cir-lamperti-scheme-positive-root-at-boundary`, and `ex-noise-induced-instability-in-explicit-em`.

Published dependency clauses used to check those claims were opened in `items/`: `alg-euler-maruyama-autonomous`; `cor-absolute-value-and-powers-of-a-martingale-are-submartingales`; `cor-cauchy-schwarz-for-random-variables`; `cor-markov-inequality-for-random-variables`; `def-axiom-of-choice`; `def-continuous-brownian-ito-process`; `def-continuous-time-stopping-time`; `def-d-dimensional-brownian-motion`; `def-filtration-and-filtered-probability-space`; `def-ito-sde-and-strong-solution`; `def-standard-normal-and-normal-laws`; `lem-brownian-ito-integral-l1-maximal-bound`; `lem-distance-to-set-is-lipschitz`; `lem-rat-embeds-dense`; `thm-brouwer-fixed-point-theorem`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-doob-lp-maximal-inequality`; `thm-doob-maximal-bound-for-the-ito-integral`; `thm-dominated-convergence`; `thm-fatou-lemma`; `thm-finite-union-bound`; `thm-global-strong-well-posedness-for-lipschitz-ito-sdes`; `thm-gronwall-integral-inequality`; `thm-heine-borel-rn`; `thm-holder-inequality-for-integrals`; `thm-ito-formula-one-dimensional` (the original scalar citation in the BDG lemma, replaced after review); `thm-ito-integral-process-has-a-continuous-martingale-version`; `thm-ito-isometry-and-linearity-in-predictable-l2`; `thm-monotone-convergence-for-the-integral`; `thm-multidimensional-ito-formula-for-brownian-driven-processes`; `thm-of-square-roots`; `thm-real-power-continuity-and-derivatives`; `thm-stopping-an-ito-integral`; and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The current-run batch-65 draft supplier `thm-backward-euler-dissipative-resolvent-contraction` was read together with its direct suppliers `def-backward-euler-step-equation` and `lem-strongly-monotone-continuous-map-is-bijective`; `def-euclidean-inner-product` and the Brouwer fixed-point statement needed in that proof were also checked. I found no defect in this supplier chain.

Primary-source checks:

- [Hutzenthaler–Jentzen–Kloeden, “Strong convergence of an explicit numerical method…”](https://arxiv.org/pdf/1010.3756), §1 and Theorem 1.1 (PDF p. 5), plus the moment-bound argument in §3.9 (PDF pp. 23–25) and interpolation error proof in §3.11 (PDF pp. 25–30), confirms the tamed scheme's order-one-half path-supremum claim under one-sided Lipschitz drift, polynomial derivative growth, globally Lipschitz diffusion, and all finite initial moments.
- [Higham–Mao–Stuart, “Strong convergence of Euler-type methods…”](https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf), Assumptions 3.1 and 4.1 (PDF pp. 6 and 14) and Theorem 5.3 (PDF pp. 19–20; printed pp. 1059–1060), gives a related backward-Euler path-supremum result. It uses a different continuous extension and its proof invokes earlier theorems; the assigned grid-point proof was checked independently.
- [Alfonsi, “Strong convergence of some drift implicit Euler scheme…”](https://arxiv.org/pdf/1206.3855), §1, equations (2)–(3) (PDF pp. 1–2), confirms the CIR Lamperti equation and implicit root. [Dereich–Neuenkirch–Szpruch, “An Euler-type method for the strong approximation of the CIR process”](https://www.uni-muenster.de/Stochastik/dereich/Publikationen/Preprints/cir.pdf), Theorem 1 (PDF p. 2), assumes the strict Feller inequality; it does not support the equality case. The assigned localization proof covers that endpoint and claims convergence in probability only.
- [Hutzenthaler–Jentzen–Kloeden, “Strong and weak divergence in finite time…”](https://arxiv.org/pdf/0905.0273), equations (1.1)–(1.2) (PDF pp. 2–3) and Theorem 1 (PDF p. 5), confirms the cubic SDE and finite-time Euler-divergence setting. The assigned counterexample supplies its own explicit event and lower-bound proof.

## Repairs made

- `items/lem-brownian-ito-integral-bdg-moment-bound.md`: the proof used a scalar Itô formula for each coordinate although each coordinate is driven by the full $m$-dimensional Brownian motion. Replaced that citation with the multidimensional formula (applied with one-dimensional output), made the hitting-time condition explicit, and stated the Hölder, dyadic-grid monotone-convergence, absolute-value submartingale, and Fatou inputs used in the proof. Added those dependencies and synchronized the contract citations and derivation records. `reflow` reported unchanged; `precheck` passed.
- `items/thm-superlinear-sde-global-existence-and-moments.md`: corrected the step-3.1 boundary statement. At a zero-time exit caused by $|\xi|\ge R$, the stopped state has norm at least $R$, not necessarily equal to $R$; the probability inequality remains valid. Added the dominated-convergence argument that makes the stopped expectation continuous for the stated Gronwall result and Tonelli for expectation/time interchange. Updated dependencies and contract evidence. `reflow` reported unchanged; `precheck` passed.
- `items/thm-cir-positive-solution-and-nonattainment.md`: made the scale-function conclusion precise: it rules out lower-boundary termination on paths bounded above, while the separate upper-exit estimate rules out the remaining unbounded paths. Specified how the local compact exhaustion makes the interval-exit stop a stopping time, and added the stopping-integral, dominated-convergence, Tonelli, and Fatou support needed by the moment argument. Updated dependencies and contract citations/derivations. `reflow` reported unchanged; `precheck` passed.
- `items/thm-tamed-euler-strong-order-half.md`: made the one-sided drift estimate a pathwise nonnegative majorant before taking a time supremum, so the drift part of Itô's identity is controlled uniformly over all times. Added explicit prerequisites for Gaussian increment moments, time/expectation interchange, finite interpolation path-supremum moments, and continuity of the Gronwall function. Updated dependencies and contract citations/derivations. `reflow` reported unchanged; `precheck` passed.
- `items/thm-drift-implicit-euler-sde-strong-order-half.md`: added the martingale-version dependency that supports the conditional-mean and martingale-difference claims for the stochastic error increments, and Tonelli for the time-integrated moment estimates. Updated dependencies and contract citations/derivations. `reflow` reported unchanged; `precheck` passed.
- `items/def-locally-lipschitz-ito-sde-and-maximal-solution.md`: added the stopping-time definition as a dependency and explained why the displayed compact exhaustion sets are compact, nested, and have interiors exhausting $U$. Updated the definition contract's boundary evidence. `reflow` reported unchanged; `precheck` had no proof body to check (0 checked).
- `items/thm-cir-lamperti-scheme-converges-in-probability.md`: corrected the bibliography so Alfonsi is credited for equations (2)–(3), while the Dereich–Neuenkirch–Szpruch Theorem 1 entry records its strict-Feller scope. The item proof covers the inclusive Feller endpoint and makes no $L^p$-rate claim. Updated the contract's boundary evidence. `reflow` reported unchanged; `precheck` passed.

No changed item had a stale `verification.judge` record. No page prose or B-page prose was edited. The proof-contract ledger is `research/numerical-optimization-dynamics-2026-10-16-batch-76.proof-contracts.json`.

Final formatting check required by the dispatch: `node tools/proof-layout.mjs` on all seven changed item paths reported **7 items, 28 steps, 0 defects**.

## Unedited defects

None found. The batch-65 draft resolvent dependency and all published dependency clauses used by these proofs were sufficient after the repairs above.

## Page verdicts

- `stable-sde-schemes-for-superlinear-drift` (A): **pass after repairs**. Its tamed, drift-implicit, and CIR summaries match the repaired theorem assumptions and conclusions; it asserts no $L^p$ CIR rate.
- `stable-sde-schemes-for-superlinear-drift-examples` (B): **pass**. The cubic Euler divergence, positive CIR boundary step, and explicit-versus-implicit noise comparison match their assigned items.

## Blocker

None.
