# Reader report — frontier-31a, batch 16

## Opened scope

Read the assigned A page library/pde/quasilinear-characteristics-and-cauchy-kovalevskaya.md, its B companion library/pde/quasilinear-characteristics-and-cauchy-kovalevskaya-examples.md, and all 33 current item bodies.

The A inventory was def-semilinear-and-quasilinear-first-order-cauchy-problems; def-augmented-characteristic-system-for-a-quasilinear-pde; lem-local-solvability-of-the-augmented-characteristic-ode; lem-quasilinear-solution-lifts-to-characteristics; lem-characteristic-strip-compatibility; lem-characteristic-strip-jacobian-at-the-initial-surface; thm-local-quasilinear-cauchy-problem-by-characteristics; lem-characteristic-solution-satisfies-the-quasilinear-pde; def-characteristic-crossing-and-caustic-for-first-order-pde; lem-burgers-slope-obeys-a-riccati-law-along-characteristics; thm-inviscid-burgers-characteristic-formula-and-first-crossing-time; cor-burgers-classical-solution-persists-for-monotone-data; thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing; def-fully-nonlinear-first-order-pde-and-complete-integral; lem-envelope-stationarity-implies-the-hamilton-jacobi-equation; def-lagrange-charpit-characteristic-system; lem-charpit-flow-preserves-the-pde-constraint; lem-charpit-contact-compatibility-is-preserved; lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi; thm-local-fully-nonlinear-cauchy-problem-by-charpit; rem-characteristics-do-not-select-a-post-crossing-weak-solution; rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem; and rem-cauchy-kovalevskaya-proof-boundary.

The B inventory was ex-semilinear-characteristics-with-logistic-growth; ex-inviscid-burgers-rarefying-data; ex-inviscid-burgers-gradient-catastrophe; cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up; ex-clairaut-complete-integral-and-envelope; ex-eikonal-cones-are-not-classical-at-the-vertex; cex-characteristic-initial-data-for-a-fully-nonlinear-equation; ex-cauchy-kovalevskaya-normal-form; ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time; and ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution.

Opened the direct targets def-linear-semilinear-quasilinear-and-fully-nonlinear-pde, def-noncharacteristic-first-order-cauchy-surface, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-continuous-dependence-of-odes-on-initial-data-and-parameters, thm-c1-dependence-of-solutions-on-initial-data, thm-chain-rule, thm-euclidean-inverse-function-theorem, and thm-euclidean-implicit-function-theorem, plus their three owning prerequisite pages. I also read the batch manifest, proof contract, coverage record, and PDE-2 design section.

The source ranges were checked against current full PDFs: Karageorgis, Part I: Explicit methods, pp. 8–15; Andersson, First order PDE: The Methods of Characteristics, pp. 1–23; and Ageno, Part III: Analysis of Partial Differential Equations, pp. 19–25 and 84–85. Ageno Theorem 2.22 retains the analytic hypersurface, analytic data, noncharacteristic condition, locality, and analytic uniqueness class. Karageorgis notes that fully nonlinear initial momenta need not be unique.

## Repairs

1. The quasilinear definition had only $C^1$ coefficients while its local ODE lemma invoked smooth ODE dependence. The definition and dependent facts blocks now require smooth coefficients.
2. The fully nonlinear Charpit theorem used smooth ODE dependence although $F\in C^2$ yields only a $C^1$ vector field, and it overclaimed unrestricted Cauchy-data uniqueness. It now uses the published continuous and $C^1$ initial-data-dependence results and claims uniqueness only for the fixed inverse-projected Charpit strip. Its proof-contract rows were updated.
3. The recorded Cauchy–Kovalevskaya theorem now explicitly retains the analytic-hypersurface hypothesis.
4. Narrowed two ancillary overstatements: tangential compatibility no longer asserts a bidirectional rank nonimplication, and the monotone-Burgers title now states no forward crossing.

No stale verification.judge record occurred in a repaired item.

## Verdicts and checks

| page | verdict |
| --- | --- |
| A — Quasilinear Characteristics and Cauchy Kovalevskaya | Pass after repair. The graph constructions retain local rank/inverse-projection conditions, Burgers keeps its $[0,\infty]$ convention, the envelope keeps its invertible parameter Hessian, and CK remains recorded-only. |
| B — Quasilinear Characteristics and Cauchy Kovalevskaya — Examples | Pass. The ten computations preserve their stated domains and hypotheses. |

Passed after repair: reflow for each changed item; focused precheck for changed proofs and then all 25 proof-bearing batch items; strict proof-contract checking for the repaired entries and all 25; manifest-deps; content-policy; and focused rendercheck on all 33 items and both pages.

Blockers: none. No uneditable defect remains.

