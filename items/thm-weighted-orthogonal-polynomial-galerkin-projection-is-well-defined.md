---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined.json
  precheck: pass
id: thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined
kind: theorem
title: "The weighted orthogonal-polynomial Galerkin projection is well-defined"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-weighted-orthogonal-polynomial-galerkin-space, thm-gauss-polynomial-moment-pairing-is-an-inner-product, thm-linearity-of-the-lebesgue-integral-on-l-one]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; only finite orthogonal expansions and a positive inner product are used."
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §3.1"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–108 / PDF pp. 111–114; the finite-dimensional weighted Galerkin formulation and basis expansion."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (full-book PDF); finite-dimensional polynomial interpolation and discretization."
---
 
## Statement

Under the hypotheses of [[def-weighted-orthogonal-polynomial-galerkin-space]], for every real measurable $u$ such that $\int|u p_j|\,d\mu<\infty$ for $0\le j\le N$, the formula
$$
\Pi_Nu=\sum_{j=0}^{N}\frac{\int u(x)p_j(x)\,d\mu(x)}{h_j}\,p_j
$$
is finite and defines the unique element of $V_N(\mu)$ whose residual is orthogonal to every $p_i$, $0\le i\le N$.

## Facts & Assumptions

**Given:** A finite positive measure $\mu$ with the support condition in [[def-weighted-orthogonal-polynomial-galerkin-space]], an integer $N\ge0$, and a real measurable $u$ with $\int|u p_j|\,d\mu<\infty$ for $0\le j\le N$.

[F1] [[def-weighted-orthogonal-polynomial-galerkin-space]]: the basis polynomials $p_0,\ldots,p_N$ are monic orthogonal polynomials and $h_j=\int p_j^2\,d\mu>0$.

[F2] [[thm-gauss-polynomial-moment-pairing-is-an-inner-product]]: on each finite polynomial space allowed by the moment data, the moment pairing is a positive-definite real inner product.

[F3] The given integrability hypotheses make each numerator $\int u p_j\,d\mu$ a finite real number.

[F4] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: finite sums and scalar multiples of integrable functions are integrable and may be integrated term by term.

## Proof

1.1 Each numerator is finite by [F3], and each denominator $h_j$ is finite and strictly positive by [F1]–[F2]. Thus every coefficient in the displayed finite sum is a defined real number. [given, F1, F2, F3, algebra]

2.1 The integrability hypotheses and [F1] make every term in the finite sum integrable, and [F4] distributes its integral. Orthogonality of the $p_j$ then gives, for each $i\le N$, $\int (u-\Pi_Nu)p_i\,d\mu =\int u p_i\,d\mu-\sum_{j=0}^{N}\frac{\int u p_j\,d\mu}{h_j}\int p_jp_i\,d\mu =0,$ because all terms with $j\ne i$ vanish and the $j=i$ term equals $\int u p_i\,d\mu$. Thus $\Pi_Nu\in V_N(\mu)$ has the required residual orthogonality. [F1, F4, step 1.1, algebra]

3.1 If $v\in V_N(\mu)$ has the same residual property, then $w=v-\Pi_Nu$ lies in $V_N(\mu)$ and is orthogonal to every basis vector, hence to itself. Positive definiteness in [F2] gives $\int w^2\,d\mu=0$, so $w=0$ in $L^2(\mu)$ and $v=\Pi_Nu$. This proves uniqueness. [F1, F2, step 2.1, algebra] ∎

