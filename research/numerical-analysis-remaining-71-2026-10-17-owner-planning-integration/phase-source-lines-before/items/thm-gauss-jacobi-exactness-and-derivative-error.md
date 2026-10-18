---
id: thm-gauss-jacobi-exactness-and-derivative-error
kind: theorem
title: Gauss–Jacobi exactness and the derivative remainder
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-gauss-jacobi-quadrature-rule, lem-gauss-jacobi-rule-data-well-defined, lem-gauss-jacobi-weight-finite-moment-measure, def-countable-choice, thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights, thm-gauss-hermite-mean-value-remainder, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-gauss-polynomial-moment-pairing-is-an-inner-product, def-factorial-and-falling-factorial, lem-nat-finite-sum-laws-and-the-canonical-embedding, def-higher-derivatives-and-smoothness]
proof_strategy: direct
axiom_use: Countable Choice is used only for existence of the Lebesgue-density Jacobi measure. The positive-measure Gaussian exactness and Hermite remainder are choice-free after that datum is supplied.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, printed pp. 108–119, exactness by orthogonality and the mean-value derivative remainder.
---

## Statement

Assume Countable Choice. Let $n\ge1$, $\alpha,\beta>-1$, and let $Q_n^{\alpha,\beta}$ be the rule of [[def-gauss-jacobi-quadrature-rule]] for $d\mu_{\alpha,\beta}=(1-t)^\alpha(1+t)^\beta\,dt$ on $[-1,1]$. It integrates every polynomial of degree at most $2n-1$ exactly and has positive weights. If $g\in C^{2n}([-1,1])$, and $p_n$ is the monic node polynomial, then some $\xi\in(-1,1)$ satisfies
$$\int_{[-1,1]}g\,d\mu_{\alpha,\beta}-Q_n^{\alpha,\beta}(g)=\frac{g^{(2n)}(\xi)}{(2n)!_{\mathbb R}}\int_{[-1,1]}p_n(t)^2\,d\mu_{\alpha,\beta}(t).$$
In particular, with $K_{n,\alpha,\beta}:=(2n)!_{\mathbb R}^{-1}\int p_n^2\,d\mu_{\alpha,\beta}>0$,
$$\left|\int g\,d\mu_{\alpha,\beta}-Q_n^{\alpha,\beta}(g)\right|\le K_{n,\alpha,\beta}\,\|g^{(2n)}\|_\infty.$$

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $\alpha,\beta>-1$, the Gauss–Jacobi rule, and $g\in C^{2n}([-1,1])$.

[A1] [[def-countable-choice]]: Countable Choice is the only axiom used to construct the Jacobi density measure.

[F1] [[lem-gauss-jacobi-weight-finite-moment-measure]] and [[lem-gauss-jacobi-rule-data-well-defined]]: $\mu_{\alpha,\beta}$ is finite positive, has at least $n+1$ support points, has every finite moment, and the $n$ nodes and weights are defined.

[F2] [[def-gauss-jacobi-quadrature-rule]]: $Q_n^{\alpha,\beta}$ is the Gaussian rule for $\mu_{\alpha,\beta}$, with node polynomial $p_n$ and weights defined by integrating the Lagrange cardinal polynomials.

[F3] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: an $n$-node Gaussian rule for finite positive order-$2n-1$ moment data is exact through degree $2n-1$, has positive weights, and its weights sum to the total mass.

[F4] [[thm-gauss-hermite-mean-value-remainder]]: for order-$2n$ moment data and $g\in C^{2n}$, the Gaussian error equals $g^{(2n)}(\xi)/(2n)!_{\mathbb R}$ times the squared norm of the monic node polynomial.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: every continuous real function on $[-1,1]$ attains a finite maximum and minimum.

[F6] [[thm-gauss-polynomial-moment-pairing-is-an-inner-product]]: a nonzero polynomial of degree at most $n$ has strictly positive squared integral under this full-support positive measure.

[F7] [[def-factorial-and-falling-factorial]] and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: $(2n)!_{\mathbb R}$ is the positive real image of $\prod_{j=1}^{2n}j$.

[F8] [[def-higher-derivatives-and-smoothness]]: $C^{2n}$ means the derivatives through order $2n$ exist and are continuous.

## Proof

1.1 By [F1], $\mu_{\alpha,\beta}$ is a finite positive measure with all moments finite and support containing at least $n+1$ points. Thus its moment datum satisfies both the order-$2n-1$ and order-$2n$ hypotheses in [F3] and [F4]. [A1, F1, F3, F4, given]

1.2 Applying [F3] to the rule [F2] proves polynomial exactness through degree $2n-1$ and positivity of the weights. [F2, F3, step 1.1]

2.1 Apply the Hermite remainder [F4] to $g$ and the order-$2n$ datum from step 1.1. It gives the stated $\xi$ and error identity with the same monic node polynomial $p_n$. [F1, F2, F4, given, step 1.1]

2.2 The integral of $p_n^2$ is finite by [F1] and strictly positive by [F6], since $p_n$ is monic and hence nonzero. Thus $K_{n,\alpha,\beta}>0$ by [F7]. The derivative $g^{(2n)}$ is continuous by [F8] on a compact interval, so [F5] gives $\|g^{(2n)}\|_\infty<\infty$; taking absolute values in step 2.1 yields the claimed error bound. [F1, F5, F6, F7, F8, step 2.1, algebra] ∎
