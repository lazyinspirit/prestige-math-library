---
id: prop-one-node-gauss-collocation-order-two
kind: proposition
title: One-node Gauss collocation is implicit midpoint of order two
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-collocation-quadrature-tableau
  - lem-one-node-gauss-data-is-midpoint
  - def-first-order-ode-initial-value-problem-and-solution
  - def-vector-valued-derivative-and-integral
  - thm-collocation-one-step-stability
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - def-higher-derivatives-and-smoothness
  - thm-global-error-from-one-step-defect-and-stability
  - def-countable-choice
  - lem-compact-set-in-open-neighborhood-has-uniform-radius
  - thm-heine-borel-rn
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - lem-small-step-implicit-rk-branch-and-residual-error
  - lem-discrete-one-step-error-recurrence-bound
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

Assume Countable Choice for the Lebesgue interval-measure formula. Let $D\subseteq\mathbb R\times\mathbb R^d$ be open and let $f:D\to\mathbb R^d$ be an IVP vector field on a neighborhood of a common compact convex tube; consider an exact solution $y$ of $y'=f(t,y)$ on a fixed interval $[0,T]$ in this tube. Assume each scalar coordinate has continuous partial derivatives through total order two and is Lipschitz in $y$ there. Smoothness and Taylor expansions for vector-valued functions are interpreted componentwise, by applying scalar results to each coordinate. Assume the small-step one-stage collocation branch exists uniquely in this tube and its stages, the exact path, and the segments used in the estimates remain there. For the one-node Gaussian tableau of [[lem-one-node-gauss-data-is-midpoint]], the method is the implicit midpoint rule and, starting from the exact initial value, has global order two on any fixed interval for which these hypotheses hold uniformly.

## Facts & Assumptions

**Given:** An exact IVP solution on $[0,T]$, a common tube, the one-node Gaussian data, and the local branch assumptions in the Statement.

[F1] [[lem-one-node-gauss-data-is-midpoint]]: $c_1=1/2$, $b_1=1$, and $Q_{11}=1/2$.

[F2] [[def-collocation-quadrature-tableau]]: the one-stage equations are $U=u+hQ_{11}f(t+c_1h,U)$ and $Psi_h(u)=u+hb_1f(t+c_1h,U)$.

[F3] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: scalar Taylor expansion to second order has a uniform quadratic remainder on the tube and applies to each coordinate; differentiating each coordinate of $y'=f(t,y)$ gives $y''=f_t+D_yf\,f$ componentwise.

[F4] [[def-higher-derivatives-and-smoothness]]: the one-variable coordinate paths use the scalar $C^2$ convention; multivariable smoothness of the components of $f$ is the partial-derivative assumption in the Statement.

[F5] [[thm-collocation-one-step-stability]]: if $hL\|Q\|_\infty\le1/2$, then the one-stage map has Lipschitz constant at most $1+2hL|b_1|$.

[F6] [[thm-global-error-from-one-step-defect-and-stability]] requires all numerical grid states and stages in its common tube. We establish that containment below, using [[lem-discrete-one-step-error-recurrence-bound]]: an error recurrence $e_{n+1}\le(1+L_0h)e_n+Ch^3$ with $e_0=0$ gives a uniform bound $e_n\le C_T h^2$ on every mesh prefix of length at most $T$.

[F7] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact path satisfies $y'=f(t,y)$ on the stated interval.

[F8] [[lem-compact-set-in-open-neighborhood-has-uniform-radius]] gives a uniform positive neighborhood radius for a compact set inside an open set. [[thm-heine-borel-rn]] makes a closed bounded Euclidean neighborhood compact, and [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]] bounds continuous scalar derivatives on it.

[F9] [[lem-small-step-implicit-rk-branch-and-residual-error]]: a bounded Lipschitz stage field on a closed product ball has a unique stage when $h\|Q\|_\infty B\le R$ and $h\|Q\|_\infty L<1$.

[A1] The exact path and stage values remain in the common tube, the unique local branch in the Statement is selected, and the segments used in the Lipschitz and Taylor estimates are contained there; all constants are uniform in the starting grid time.

[A2] Countable Choice, as required by the one-node Lebesgue moment data in [F1].

## Proof

1.1 Substituting [F1] under [A2] into [F2] gives $U=u+(h/2)f(t+h/2,U)$ and $\Psi_h(u)=u+h f(t+h/2,U)$, which is precisely implicit midpoint. Since $f$ is bounded on the compact tube, the stage equation gives $U-u=O(h)$. Taylor expansion of each coordinate at $(t,u)$ then gives $U-u=(h/2)f(t,u)+O(h^2)$: first use $U-u=O(h)$ in $f(t+h/2,U)=f(t,u)+O(h)$ and substitute that estimate back into the stage equation. [A1, A2, F1, F2, F3, F4, algebra]

2.1 Write $f_0=f(t,u)$. Applying the first-order scalar Taylor formula with quadratic remainder [F3] to each coordinate at $(t+h/2,U)$ and using step 1.1 yields $f(t+h/2,U)=f_0+\frac h2\bigl(f_t(t,u)+D_yf(t,u)f_0\bigr)+O(h^2)$ in Euclidean norm. The exact path has $y'(t)=f_0$ by [F7] and $y''(t)=f_t(t,u)+D_yf(t,u)f_0$ by [F3]. Coordinatewise Taylor's formula for $y$ and the endpoint expression in step 1.1 therefore give $y(t+h)-\Psi_h(u)=O(h^3)$ uniformly. [A1, F2, F3, F7, step 1.1, algebra]

3.1 Let $\mathcal K$ be the compact convex time-state tube in the Statement, and let $V$ be its open neighborhood where $f$ is componentwise $C^2$. By [F8] choose $r>0$ such that the closed $4r$-neighborhood $\mathcal K^+$ lies in $V\subseteq D$. This neighborhood is compact and convex, and [F8] gives uniform bounds $B_+$ for $f$, $L_+$ for $D_yf$, and bounds for the second partial derivatives there. If $\|u-y(t_n)\|_2\le r$ and $h\le2r$, every stage point $(t_n+h/2,Y)$ with $\|Y-u\|_2\le r$ is within $3r$ of $(t_n,y(t_n))\in\mathcal K$, hence lies in $\mathcal K^+$. For $hB_+/2\le r$ and $hL_+/2\le1/2$, [F9] supplies the unique midpoint stage in that ball. Any other midpoint stage in $\mathcal K^+$ equals it by subtracting the equations and using $hL_+/2<1$; thus it agrees with the branch assumed in the Statement whenever that branch lies in $\mathcal K$. The Taylor estimates of steps 1.1–2.1 and stability [F5] apply uniformly on $\mathcal K^+$, with endpoint Lipschitz bound $1+2L_+h$. [A1, F1, F3, F5, F8, F9, step 1.1, step 2.1, choose, algebra]

4.1 Set $y_0=y(0)$ and compute on $h=T/N$. As long as $e_n:=\|y_n-y(t_n)\|_2\le r$, step 3.1 defines the next stage and endpoint. Inserting the exact-start endpoint and using steps 2.1 and 3.1 gives $e_{n+1}\le(1+2L_+h)e_n+Ch^3$. On every such mesh prefix [F6] bounds all errors, including the newly computed endpoint error, by $C_T h^2$, with $C_T$ independent of the prefix length because that length is at most $T$. Choose $h$ small enough that $C_T h^2<r$. Starting with $e_0=0$, induction now continues every step and keeps every grid state within $r$ of the exact path. All grid states and stages therefore lie in $\mathcal K^+$, and the same recurrence gives $\max_{0\le n\le N}e_n\le C_T h^2$. This proves global order two without assuming endpoint containment in the original tube. [F6, step 2.1, step 3.1, choose, induction, algebra] ∎
