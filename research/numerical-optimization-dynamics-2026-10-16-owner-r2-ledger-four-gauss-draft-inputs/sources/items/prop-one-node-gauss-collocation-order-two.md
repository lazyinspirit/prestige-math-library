---
id: prop-one-node-gauss-collocation-order-two
kind: proposition
title: One-node Gauss collocation is implicit midpoint of order two
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-collocation-quadrature-tableau
  - lem-one-node-gauss-data-is-midpoint
  - thm-sdc-sweep-contraction-and-error-bound
  - thm-collocation-one-step-stability
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - def-higher-derivatives-and-smoothness
  - thm-global-error-from-one-step-defect-and-stability
  - def-countable-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3
      url: https://arxiv.org/pdf/1706.06245
---

## Statement

Assume Countable Choice for the Lebesgue interval-measure formula. Let $f(t,y)$ be $C^2$ on a common compact convex tube and Lipschitz in $y$ there. Assume the small-step one-stage collocation branch exists uniquely in this tube and its stages, the exact path, and the segments used in the estimates remain there. For the one-node Gaussian tableau of [[lem-one-node-gauss-data-is-midpoint]], the method is the implicit midpoint rule and has global order two on any fixed interval for which these hypotheses hold uniformly.

## Facts & Assumptions

**Given:** An exact IVP solution on $[0,T]$, a common tube, the one-node Gaussian data, and the local branch assumptions in the Statement.

[F1] [[lem-one-node-gauss-data-is-midpoint]]: $c_1=1/2$, $b_1=1$, and $Q_{11}=1/2$.

[F2] [[def-collocation-quadrature-tableau]]: the one-stage equations are $U=u+hQ_{11}f(t+c_1h,U)$ and $Psi_h(u)=u+hb_1f(t+c_1h,U)$.

[F3] [[thm-sdc-sweep-contraction-and-error-bound]]: under its invariant-set contraction hypotheses the selected branch exists uniquely for all sufficiently small $h$.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: Taylor expansion to second order has a uniform quadratic remainder on the tube, and differentiating $y'=f(t,y)$ gives $y''=f_t+D_yf\,f$.

[F5] [[thm-collocation-one-step-stability]]: if $hL\|Q\|_\infty\le1/2$, then the one-stage map has Lipschitz constant at most $1+2hL|b_1|$.

[F6] [[thm-global-error-from-one-step-defect-and-stability]]: a uniform exact-start local defect $O(h^{p+1})$ and a $(1+L_0h)$ one-step bound imply global error $O(h^p)$ on a fixed interval, with exact initial data.

[F7] [[def-higher-derivatives-and-smoothness]]: $C^2$ means the first and second derivatives exist and are continuous on the tube.

[A1] The exact path, stage values and the straight segments used in the Lipschitz and Taylor estimates are contained in the common tube; all constants are uniform in the starting grid time.

[A2] Countable Choice, as required by the one-node Lebesgue moment data in [F1].

## Proof

1.1 Substituting [F1] under [A2] into [F2] gives $U=u+(h/2)f(t+h/2,U)$ and $\Psi_h(u)=u+h f(t+h/2,U)$, which is precisely implicit midpoint. Since $f$ is bounded on the compact tube, the stage equation gives $U-u=O(h)$. Taylor expansion at $(t,u)$ then gives $U-u=(h/2)f(t,u)+O(h^2)$: first use $U-u=O(h)$ in $f(t+h/2,U)=f(t,u)+O(h)$ and substitute that estimate back into the stage equation. [A1, A2, F1, F2, F3, F4, F7, algebra]

2.1 Write $f_0=f(t,u)$. Applying the first-order Taylor formula with quadratic remainder [F4] to the point $(t+h/2,U)$ and using step 1.1 yields $f(t+h/2,U)=f_0+\frac h2\bigl(f_t(t,u)+D_yf(t,u)f_0\bigr)+O(h^2).$ The exact path has $y'(t)=f_0$ and $y''(t)=f_t(t,u)+D_yf(t,u)f_0$ by [F4]. Taylor's formula for $y$ and the endpoint expression in step 1.1 therefore give $y(t+h)-\Psi_h(u)=O(h^3)$ uniformly. [A1, F2, F4, step 1.1, algebra]

3.1 For the one-node data, $Q_{11}=1/2$ and $b_1=1$, so $\|Q\|_\infty=1/2$ and $\|b\|_1=1$. For sufficiently small $h$, [F5] gives one-step stability at most $1+2Lh$. Apply [F6] with $p=2$, exact initial data, the defect from step 2.1, and this uniform stability bound. It gives the asserted global order two. [A1, F1, F5, F6, step 2.1, algebra] ∎