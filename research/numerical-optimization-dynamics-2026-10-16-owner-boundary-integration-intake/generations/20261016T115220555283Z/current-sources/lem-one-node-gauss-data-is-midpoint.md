---
id: lem-one-node-gauss-data-is-midpoint
kind: lemma
title: One-node Gauss data are midpoint data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-gauss-moment-data
  - def-gauss-quadrature-rule
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - lem-gauss-quadrature-rule-data-well-defined
  - lem-unit-interval-lebesgue-gauss-data-valid
  - lem-continuous-riemann-lebesgue-agreement
  - thm-ftc-second-part
  - def-cardinal-polynomial-interpolation
  - def-collocation-quadrature-tableau
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
    - title: John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020
      url: https://gubner.ece.wisc.edu/gaussquad.pdf
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

Assume Countable Choice for the Lebesgue interval-measure formula. For Lebesgue measure on $[0,1]$, the one-node Gaussian quadrature rule has node $c_1=1/2$ and weight $b_1=1$. Its one-stage collocation tableau therefore has $Q_{11}=1/2$ and endpoint weight $b_1=1$.

## Facts & Assumptions

**Given:** Lebesgue measure on $[0,1]$ and the one-node Gaussian quadrature rule from [[def-gauss-quadrature-rule]].

[F1] [[lem-unit-interval-lebesgue-gauss-data-valid]]: Lebesgue measure on $[0,1]$ is valid one-node moment data through degree two, and its support has at least two points.

[F2] [[def-gauss-moment-data]]: the order-two datum also meets the order-one branch used by the rule definition, because its measure, support, and moments through degree one satisfy that branch's conditions.

[F3] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]: for these data, the monic degree-one polynomial orthogonal to constants is unique.

[F4] [[def-gauss-quadrature-rule]] and [[lem-gauss-quadrature-rule-data-well-defined]]: the Gaussian node is the root of that polynomial and its weight is the integral of the one-node cardinal polynomial; the root and weight are defined.

[F5] [[def-cardinal-polynomial-interpolation]]: the cardinal polynomial for one node is $\ell_1(x)=1$.

[F6] [[lem-continuous-riemann-lebesgue-agreement]] and [[thm-ftc-second-part]]: for continuous $1$ and $x$ on $[0,1]$, Lebesgue and Riemann integrals agree, and the Riemann integrals are computed by primitives.

[F7] [[def-collocation-quadrature-tableau]]: the one-stage collocation coefficient is $Q_{11}=\int_0^{c_1}\ell_1(s)\,ds$ and the endpoint weight is $b_1=\int_0^1\ell_1(s)\,ds$.

[A1] Countable Choice, through the Lebesgue interval-measure theorem used by [F1].

## Proof

1.1 By [F6], $\int_0^1x\,d\lambda=\int_0^1x\,dx=1/2$ and $\int_0^1 1\,d\lambda=1$. Thus $p_1(x)=x-1/2$ is monic and satisfies $\int p_1\,d\lambda=0$, the orthogonality condition against every degree-zero polynomial. The data are admissible by [A1, F1]–[F2], so uniqueness in [F3] identifies it with the one-node orthogonal polynomial. [A1, F1, F2, F3, F6, algebra, construct]

2.1 The only root of $p_1$ is $1/2$, so [F4] gives $c_1=1/2$. By [F5] its cardinal polynomial is $1$, whose integral on $[0,1]$ is $1$ by step 1.1; hence $b_1=1$. The tableau formula [F7] gives $Q_{11}=\int_0^{1/2}1\,ds=1/2$. [F4, F5, F7, step 1.1, algebra] ∎
