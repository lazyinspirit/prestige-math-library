---
id: lem-b-adic-anova-parseval
kind: lemma
title: "Orthogonal base-$b$ multiresolution and variance decomposition"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-b-adic-anova-components
  - lem-b-adic-step-functions-dense-in-l2-cube
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-countable-choice
  - def-moments-variance-and-covariance
  - thm-change-of-variables-for-expectation
justified_by: []
proof_strategy: direct
axiom_use: "Assume Countable Choice only through the stated L2 Hilbert and Parseval suppliers; the finite-grid orthogonality and density arguments are choice-free."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §§6–7"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
    - title: "Art B. Owen, Local Antithetic Sampling with Scrambled Nets, §5.1"
      url: "https://artowen.su.domains/reports/localanti.pdf"
---

## Statement

Assume Countable Choice. For real $f\in L^2([0,1)^d)$, the functions
$\psi_{u,\kappa,\tau,\rho}$ of [[def-b-adic-anova-components]], together with
the constant $1$, form a complete orthonormal family. Consequently
$f=I(f)+\sum_{u\ne\varnothing,\kappa}\nu_{u,\kappa}(f)$ in $L^2$, the
components are mutually orthogonal, and
$$\operatorname{Var}(f(U))=\sum_{u\ne\varnothing,\kappa} \sigma^2_{u,\kappa}(f),\qquad U\sim\operatorname{Unif}[0,1)^d.$$

## Facts & Assumptions
**Given:** Countable Choice, $b\ge2$, $d\ge1$, and real $f\in L^2([0,1)^d)$.

[F1] [[def-b-adic-anova-components]]: Each one-dimensional contrast is supported on one level-$k$ parent, is constant on its $b$ children, and has zero integral on that parent.

[F2] [[lem-b-adic-step-functions-dense-in-l2-cube]]: Finite linear combinations of base-$b$ box indicators are dense in $L^2([0,1)^d)$.

[F3] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: Under Countable Choice, $L^2$ with the integral pairing is a Hilbert space.

[F4] [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]: Under Countable Choice, a complete orthonormal family gives the $L^2$ expansion and Parseval identity.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: The integral of a product of integrable one-dimensional factors on the finite cube factors into the product of their integrals.

[F6] [[def-moments-variance-and-covariance]]: Variance is the centered second moment of a square-integrable real random variable.

[F7] [[thm-change-of-variables-for-expectation]]: Expectations of integrable Borel functions of a random element are integrals against its law.

[A1] [[def-countable-choice]]: Countable Choice is the only choice principle used in this lemma.



## Proof

**Proof technique:** direct.

**Given:** The facts above and the finite contrast formula in [F1].

1.1 On one parent interval, the unnormalized child coefficient vector for contrast $r$ is $(1,\ldots,1,-r,0,\ldots,0)$, with $r$ initial ones. Its entries sum to zero and its squared Euclidean norm is $r(r+1)$. The normalization in [F1] therefore makes each $h_{k,t,r}$ have integral zero and squared $L^2$ norm one. If $r<s$ are contrasts on the same parent, the $s$-contrast is constant on the first $r+1$ children, where the $r$-contrast coefficients sum to zero, so their inner product is zero. Distinct parents have disjoint interiors. At different levels, a finer parent is either disjoint from a coarser parent or lies in one of its children, where the coarser contrast is constant; the finer contrast has integral zero. Hence all one-dimensional contrasts are orthonormal and orthogonal to $1$. [F1, given, algebra]

2.1 On the partition into $b^J$ level-$J$ intervals, the constant and contrasts with $0\le k<J$ are orthonormal by step 1.1. Their number is $1+(b-1)\sum_{k=0}^{J-1}b^k=b^J$, the dimension of the space of functions constant on those intervals. They therefore form an orthonormal basis of that finite-dimensional space. [step 1.1, algebra]

3.1 Products of the one-dimensional bases from step 2.1 are orthonormal on rectangular grids by [F5]: each factor is bounded and supported on a finite union of intervals, hence integrable, and the cube is a finite-measure product space. Their inner products therefore factor coordinatewise; a coordinate with distinct basis functions gives zero. Their finite tensor products span each rectangular-grid step function because each one-dimensional basis in step 2.1 spans its level grid. Thus the family indexed by $(u,\kappa,\tau,\rho)$ in [F1], together with $1$, is orthonormal and its span contains every base-$b$ box step function. [F1, F5, step 2.1, algebra]

4.1 By [F2] the closed span in step 3.1 is all $L^2([0,1)^d)$. Apply [F3] and [F4], using [A1], to obtain the orthogonal expansion of $f$. Grouping the finitely many translation and contrast terms for each fixed $(u,\kappa)$ gives exactly $\nu_{u,\kappa}(f)$ from [F1]; the empty-coordinate term is the constant $I(f)$. Since $U$ has uniform law on the unit cube, [F7] identifies $\mathbb E[f(U)]=I(f)$ and its centered second moment with $\|f-I(f)\|_2^2$; [F6] identifies this with $\operatorname{Var}(f(U))$. Parseval then gives the displayed sum of squared component norms. [A1, F1, F2, F3, F4, F6, F7, step 3.1] ∎
