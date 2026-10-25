---
id: thm-gauss-collocation-local-defect-order-2m
kind: theorem
title: M-node Gauss collocation has local defect order 2M
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - def-collocation-quadrature-tableau
  - def-gauss-moment-data
  - def-gauss-quadrature-rule
  - lem-unit-interval-lebesgue-gauss-data-valid
  - def-countable-choice
  - lem-continuous-riemann-lebesgue-agreement
  - def-vector-valued-derivative-and-integral
  - lem-collocation-quadrature-matrix-well-defined
  - lem-gauss-collocation-weighted-defect-bound
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
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7, Theorems 7.9–7.10
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3
      url: https://arxiv.org/pdf/1706.06245
---

## Statement

Assume Countable Choice for the Lebesgue interval-measure formula. Let $M\ge1$, fix a time $t$ and an exact IVP solution $y$ on an interval containing $[t,t+h_0]$ for some $h_0>0$, and put $u=y(t)$. Let $D\subseteq\mathbb R\times\mathbb R^d$ be open and let $f:D\to\mathbb R^d$ be an IVP vector field on a neighborhood of a common compact convex tube along this exact path, its collocation branch, and connecting segments. Assume each scalar coordinate of $f$ has continuous partial derivatives through total order $2M+1$, bounded on the tube; vector smoothness and derivative estimates are componentwise, using scalar Taylor results coordinatewise. Use the $M$-node Gaussian rule for Lebesgue measure on $[0,1]$, assume $\|D_yf\|_{op}\le L$ there, and assume the stage branch is uniquely defined in the tube for all sufficiently small $h\le h_0$. Then the exact-start local defect of the collocation endpoint is $O(h^{2M+1})$ as $h\downarrow0$. Its constant depends on the fixed nodes and $M$.

## Facts & Assumptions

**Given:** The Gaussian moment data, its quadrature rule, the matching collocation tableau, and the exact-start IVP and local branch in the Statement.

[F1] [[def-gauss-moment-data]] and [[def-gauss-quadrature-rule]]: for Lebesgue measure on $[0,1]$, the Gauss nodes and weights are defined from the monic orthogonal polynomial and cardinal integrals.

[F2] [[lem-continuous-riemann-lebesgue-agreement]]: for continuous integrands on $[0,1]$, the Lebesgue and Riemann integrals agree.

[F3] [[lem-gauss-collocation-weighted-defect-bound]]: under the stated smoothness, convex-tube and branch assumptions, the Gauss collocation endpoint defect is bounded by $Ch^{2M+1}$.

[F4] [[def-collocation-quadrature-tableau]] and [[lem-collocation-quadrature-matrix-well-defined]]: the resulting collocation coefficients and endpoint map are finite and defined.

[F5] [[lem-unit-interval-lebesgue-gauss-data-valid]]: for every $M$, Lebesgue measure on $[0,1]$ satisfies the order-$2M$ moment-data assumptions used in [F1].

[A1] Countable Choice, as required by the Lebesgue moment-data verification in [F5].

[A2] The selected stages and exact path remain in the common tube, including every segment used in the weighted-defect proof; the local branch hypotheses are uniform for sufficiently small $h$.

## Proof

1.1 By [F5] under [A1] the chosen Gaussian rule has admissible Lebesgue moment data. Fact [F1] gives its nodes and cardinal-integral weights, and [F4] makes the matching collocation tableau finite and defined. [A1, F1, F4, F5, construct]

2.1 The smoothness, common-tube, and branch hypotheses of [F3] are precisely those in the Statement and [A2]. The lemma therefore gives $\|y(t+h)-\Psi_h(y(t))\|_2\le Ch^{2M+1}$, which is the claimed exact-start local defect estimate. Agreement of the integral conventions is [F2]. [A2, F2, F3, step 1.1] ∎
