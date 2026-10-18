---
id: thm-nystrom-operator-norm-perturbation-error
kind: theorem
title: The operator-norm Nyström perturbation bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nystrom-quadrature-and-finite-rank-operators
  - lem-finite-node-equation-reconstruction-equivalence
  - lem-neumann-series-and-small-perturbations-of-bounded-inverses
  - def-operator-norm
  - def-bounded-linear-operator
  - lem-composition-operator-norm-inequality
  - thm-heine-borel-rn
  - thm-c-k-complete-in-the-sup-metric
  - lem-uniform-integral-error-bound
  - thm-linearity-of-the-integral
  - lem-triangle-inequality-finite
  - def-finite-sum
  - lem-finite-sum-laws
justified_by: []
proof_strategy: direct
axiom_use: None. This branch assumes a bounded inverse and a norm bound, and
  uses only the Neumann series.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and
        Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computa\
        tional%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Theorem 1.5 and its complete proof, printed pp. 10–12."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Method 3.12 and the error term in Theorem 3.18, printed pp. 60–63."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use $X$, $K$, and the finite quadrature Nyström operator $K_Q$ from
[[def-nystrom-quadrature-and-finite-rank-operators]]. Suppose $A:=I-K$ has a
bounded inverse, put $R:=\|A^{-1}\|$, and let $\varepsilon:=\|K_Q-K\|$ as an
operator on $X$. If $q:=R\varepsilon<1$, then $I-K_Q$ has a bounded inverse and
$$\|(I-K_Q)^{-1}\|\le\frac{R}{1-q}.$$
For $f,f_Q\in X$, let $u$ and $u_Q$ solve $(I-K)u=f$ and
$(I-K_Q)u_Q=f_Q$. Then
$$\|u_Q-u\|_\infty\le\frac{R}{1-q}    \bigl(\|(K_Q-K)u\|_\infty+\|f_Q-f\|_\infty\bigr).$$
When $Q$ is point sampling on all of $C([0,1],\mathbb R)$, this theorem is
conditional: its hypothesis is an actual operator-norm bound, not merely
convergence of the quadrature on each fixed continuous integrand.

## Facts & Assumptions

**Given:** The Nyström operators in the Statement, a bounded inverse $A^{-1}$, and $q=\|A^{-1}\|\|K_Q-K\|<1$.

[F1] [[def-nystrom-quadrature-and-finite-rank-operators]]: $K_Q$ is the finite-sum map $u\mapsto\sum_jw_jk(\cdot,y_j)u(y_j)$, with continuous coefficient functions $x\mapsto w_jk(x,y_j)$.

[F2] [[lem-finite-node-equation-reconstruction-equivalence]]: the finite system is nonsingular exactly when the reconstructed operator $I-K_Q$ is bijective.

[F3] [[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]: if $\|R\|<1$, then $I-R$ is invertible with inverse norm at most $(1-\|R\|)^{-1}$; if $A$ and $E$ are bounded and $A^{-1}$ is bounded with $\|A^{-1}E\|<1$, then $A+E=A(I+A^{-1}E)$ is invertible.

[F4] [[def-operator-norm]]: $\|T\|$ is defined for a bounded linear operator by its supremum on the unit ball.

[F5] [[lem-composition-operator-norm-inequality]]: for bounded linear operators $S,T$, $\|ST\|\le\|S\|\|T\|$.

[F6] [[def-bounded-linear-operator]]: a linear map is bounded when one constant bounds its output norm by that constant times the input norm.

[F7] The square $[0,1]^2$ is compact ([[thm-heine-borel-rn]]), so $k$ is bounded by [[thm-c-k-complete-in-the-sup-metric]]. If $M:=\sup_{(x,y)\in[0,1]^2}|k(x,y)|$, the integral formula and [[lem-uniform-integral-error-bound]] give $\|Ku\|_\infty\le M\|u\|_\infty$, and [[thm-linearity-of-the-integral]] makes $K$ linear. The finite-sum formula and [[lem-triangle-inequality-finite]], [[def-finite-sum]], [[lem-finite-sum-laws]] give $\|K_Qu\|_\infty\le M\|u\|_\infty\sum_j|w_j|$ and make $K_Q$ linear. Hence $\|(K_Q-K)u\|_\infty\le M(1+\sum_j|w_j|)\|u\|_\infty$ and $\|(I-K)u\|_\infty\le(1+M)\|u\|_\infty$; thus $K$, $K_Q$, $K_Q-K$, and $A=I-K$ are bounded linear maps in the sense of [F6].

## Proof

**Given:** The operators and right-hand sides in the Statement, $E:=K-K_Q$, and $A:=I-K$.

1.1 By [F7] and [F6], $K_Q-K$ is bounded, so its norm $\varepsilon$ is defined by [F4]. Put $E:=K-K_Q$; then $I-K_Q=A+E=A(I+A^{-1}E)$ and $\|A^{-1}E\|\le\|A^{-1}\|\|E\|=R\varepsilon=q<1$ by [F5]. Applying both parts of [F3], with $R_0:=-A^{-1}E$, gives invertibility and $\|(I-K_Q)^{-1}\|=\|(I+A^{-1}E)^{-1}A^{-1}\| \le\frac{R}{1-\|A^{-1}E\|}\le\frac{R}{1-q}.$ The coefficient functions $x\mapsto w_jk(x,y_j)$ are continuous because $k$ is continuous, so [F2] applies and the associated finite system has the same unique solvability. [given, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 Subtracting $(I-K)u=f$ from $(I-K_Q)u_Q=f_Q$ in the form $(I-K_Q)(u_Q-u)=f_Q-f+(K_Q-K)u$ and applying the inverse from step 1.1 yields the stated error estimate by the triangle inequality. [given, F1, F4, step 1.1, algebra]

3.1 The two displayed conclusions are exactly the inverse and solution bounds obtained in steps 1.1 and 2.1. This proof uses the norm hypothesis $\varepsilon$ itself and asserts no norm convergence of the point-sampling operators. [step 1.1, step 2.1] ∎
