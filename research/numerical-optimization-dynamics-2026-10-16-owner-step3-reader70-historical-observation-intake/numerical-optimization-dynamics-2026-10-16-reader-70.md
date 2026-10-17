# Step 3a reader report — batch 70

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `70`  
Role: reader

## Scope and inventory

Opened the assigned manifest and reader brief. The live autopilot status reports the run as running at Step 3a, with no worker currently in flight; batch 70 is the only scope in this review. The ten assigned items and both assigned pages are draft carriers for this run.

Assigned pages:

- A page `nonlinear-conjugate-gradient-methods`: `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-conjugate-gradient-methods.md`.
- B page `nonlinear-conjugate-gradient-methods-examples`: `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-conjugate-gradient-methods-examples.md`.

Assigned items, read in dependency order after their relevant suppliers:

- `alg-nonlinear-conjugate-gradient-methods`
- `lem-fr-descent-and-direction-growth-bound`
- `lem-safeguarded-pr-plus-uniform-angle`
- `thm-nonlinear-cg-finite-budget-terminates`
- `thm-fr-and-raw-prplus-exact-line-search-match-linear-cg`
- `thm-fletcher-reeves-liminf-gradient-under-strong-wolfe`
- `thm-safeguarded-pr-plus-gradient-norms-converge`
- `ex-rosenbrock-fr-prplus-trace`
- `cex-raw-prplus-loses-descent-and-safeguard-restarts`
- `ex-spd-quadratic-nonlinear-cg-matches-linear-cg`

Opened immediate mathematical suppliers used by those statements and proofs:

- Current-run draft suppliers: `def-wolfe-and-strong-wolfe-conditions`, `alg-bracketing-zoom-strong-wolfe-search`, `lem-bracketing-zoom-finite-budget-checked-return`, `lem-wolfe-step-lower-bound-from-the-descent-angle`, `thm-zoutendijk-summability-for-wolfe-steps`, and `cor-uniform-descent-angle-implies-gradient-vanishing`.
- Published suppliers: `def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`, `def-c-one-map-and-local-inverse`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-total-derivative-in-euclidean-space`, `thm-chain-rule-for-total-derivatives`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `thm-cauchy-schwarz-finite`, `def-cholesky-factorisation-with-positive-diagonal`, `prop-standard-coordinate-inner-products`, `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix`, `def-conjugate-gradient-recurrence`, `prop-conjugate-gradient-denominators-are-positive-before-convergence`, and `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate`.

Read the nine proof contracts for the proof-bearing assigned items and compared their fact sources, derivation steps, and boundary cases with the current carriers. The assigned algorithm has no phase proof contract, as expected for a definition-like procedure.

## Mathematical review

- The nonlinear-CG algorithm has admissible inputs for the two modes, handles zero gradients before forming coefficients, states the FR and PR+ recurrences, checks the two PR+ safeguards, and routes bounded line-search failures to `search-failure`. The separate result items correctly state properties of infinite successful sequences rather than claiming convergence of every finite-budget execution.
- The FR descent lemma’s normalized derivative bounds and direction-growth estimate follow from strong-Wolfe curvature and the displayed recurrence. The PR+ safeguard lemma correctly gives a uniform positive angle bound in both the retained and restart branches.
- The bracketing/zoom finite-return lemma follows from the finite loop budgets and the stated endpoint updates; its return checks establish positive feasible strong-Wolfe steps. The outer finite-budget theorem’s counts are consistent with at most one zoom call per line search and at most one accepted update per outer iteration. The count explicitly excludes initial-point data.
- The Zoutendijk proof and its uniform-angle corollary are valid under the stated lower bound, Lipschitz-on-segments, feasibility, and Wolfe assumptions. The FR liminf proof uses the direction-growth estimate to obtain a harmonic-series contradiction and does not upgrade liminf to convergence. The safeguarded PR+ theorem uses the angle bound and the corollary to conclude convergence of gradient norms only.
- The exact-line-search theorem is correct for real SPD quadratics: exact minimization gives a zero directional derivative, the Armijo inequality follows from (c_1<1/2), and CG residual orthogonality identifies FR and raw PR+ coefficients. Its induction is compressed: the invariant should be read as matching iterates/residuals, directions, and accepted steps through the preceding index. The following step proves this synchronization, so this is an immediately closable proof presentation omission, not a remaining finding.
- Recomputed the Rosenbrock example’s dyadic trial values as exact fractions: the listed integer lower bounds are the floors of φ(2⁻ʲ) for (j=0,…,9); the (1/1024) trial satisfies both strong-Wolfe inequalities, and the stated FR/PR+ coefficients and restart calculation follow. Also recomputed the counterexample’s positive-definite quadratic, strong-Wolfe witness, PR+ ascent derivative, and safeguard restart. The two-dimensional SPD example’s CG steps (2/3) and (3/4), and zero second residual, are correct.

## Source verification

Opened the cited primary texts at the relevant passages:

- Nocedal and Wright, *Numerical Optimization*, 2nd ed., Chapter 3, Theorem 3.2 and its proof (printed pp. 38–39): the Wolfe curvature plus Lipschitz-gradient estimate gives Zoutendijk summability; the following discussion gives the uniform-angle consequence. Chapter 5, Lemma 5.6 (pp. 125–126) gives the FR normalized descent bounds; Theorem 5.7 (pp. 128–130) gives the FR gradient-liminf result under its source assumptions. Chapter 3 §3.5 (pp. 60–61) supplies the bracketing/zoom context. Chapter 5 §5.2 (pp. 122–125) supplies the FR/PR formulas, PR+ truncation and restart context, and explains reduction to linear CG on strictly convex quadratics with exact one-dimensional minimization. [Source PDF](https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf)
- Gilbert and Nocedal, “Global Convergence Properties of Conjugate Gradient Methods for Optimization,” §2 Theorem 2.1 (printed pp. 23–24) states Zoutendijk’s condition under bounded-level-set and smoothness hypotheses; §3 Lemma 3.1 and Theorem 3.2 (pp. 25–27) give the FR descent and liminf results. The local items prove their stated variants rather than treating these source results as identical hypotheses. §1 (pp. 21–22) gives the nonlinear-CG recurrence convention and its exact-quadratic relation to linear CG. [Author-hosted PDF](https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf)

## Defect not editable in this batch

`alg-bracketing-zoom-strong-wolfe-search` is a draft supplier owned by batch 58, so it was not edited. Its `## Definition` accepts (f,x,p), then uses φ(0) in both expansion and zoom Armijo tests, but it does not specify an initial objective evaluation or declare (f(x)=φ(0)) as supplied data. The direction check computes the initial directional derivative but does not supply the missing objective value. Add an explicit one-time evaluation of φ(0), or make it an input; the finite-budget result can continue to count trial evaluations separately from initial-point data. Assigned consumer: `alg-nonlinear-conjugate-gradient-methods`.

## Edits, page verdicts, and blocker

- Edits: none. No confirmed repair was needed in an assigned item or the A-page prose. The B-page prose was left unchanged. Because no item was edited, no contract update, stale judge removal, reflow, precheck, or proof-layout run was required.
- A page `nonlinear-conjugate-gradient-methods`: sound summary of the algorithm and the qualified convergence claims.
- B page `nonlinear-conjugate-gradient-methods-examples`: sound summary of the three examples and their computed outcomes.
- Blocker: none. The uneditable supplier specification issue is recorded in the findings artifact for owner routing.

## Coverage note

All ten assigned items, both pages, their immediate proof-used suppliers, relevant cited derivative/Cauchy–Schwarz/CG results, and all nine proof contracts were opened. This review did not re-audit the full foundational transitive dependency graph of the published suppliers.
