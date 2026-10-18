---
id: thm-gaussian-product-rule-error-bound
kind: theorem
title: A tensor product of two positive Gaussian rules has a derivative error bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-gauss-moment-data, def-gauss-quadrature-rule, thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights, thm-gauss-hermite-mean-value-remainder, thm-ftc-second-part, thm-heine-cantor-metric, def-borel-sigma-algebra, def-integrable-real-and-complex-functions-and-their-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-factorial-and-falling-factorial, lem-nat-finite-sum-laws-and-the-canonical-embedding]
proof_strategy: direct
axiom_use: None beyond whatever is needed to supply the two finite positive measure data; the estimate uses finite sums and integrals only.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, tensor-product quadrature on the square.
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, Gaussian derivative remainder and positive Gaussian rules.
---

## Statement

Let $a<b$ and $c<d$ and let $[a,b]$, $[c,d]$ be compact intervals. Let $\mu,\nu$ be finite positive measures on them, respectively. Assume each has valid Gaussian moment data of orders $2n-1$ and $2n$ for the same $n$ and measure: the order-$2n-1$ datum defines its $n$-node Gaussian rule $Q_\mu,Q_\nu$, while the stronger datum supplies the Hermite remainder. (It suffices that the measure has support with at least $n+1$ points and finite absolute moments through degree $2n$.) Write $M_\mu=\mu([a,b])$, $M_\nu=\nu([c,d])$, and
$$K_\mu=\frac1{(2n)!_{\mathbb R}}\int p_\mu^2\,d\mu,\qquad K_\nu=\frac1{(2n)!_{\mathbb R}}\int p_\nu^2\,d\nu,$$
where $p_\mu,p_\nu$ are their monic node polynomials. Suppose $G$ and its pure partial derivatives through order $2n$ in each coordinate are continuous on the rectangle. Then the tensor rule $Q_\mu Q_\nu G$ satisfies
$$\left|\int_{[a,b]}\int_{[c,d]}G(x,y)\,d\nu(y)d\mu(x)-Q_\mu Q_\nu G\right| \le K_\mu M_\nu\|\partial_x^{2n}G\|_\infty+M_\mu K_\nu\|\partial_y^{2n}G\|_\infty.$$

## Facts & Assumptions

**Given:** Two finite positive order-$2n$ Gaussian moment data, their $n$-node rules, and a function with the stated continuous pure partial derivatives.

[F1] [[def-gauss-moment-data]] and [[def-gauss-quadrature-rule]]: order-$2n$ data require finite absolute moments through $2n$; discarding the last moment condition gives the same measure's order-$2n-1$ data used to define the Gaussian rules.

[F2] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: each rule has positive weights summing to its measure's total mass.

[F3] [[thm-gauss-hermite-mean-value-remainder]]: for $u\in C^{2n}$, each one-coordinate error has absolute value at most $K_\mu\|u^{(2n)}\|_\infty$ or $K_\nu\|u^{(2n)}\|_\infty$, respectively.

[F4] [[thm-ftc-second-part]]: increments of a primitive are integrals of its continuous derivative.

[F5] [[thm-heine-cantor-metric]]: each continuous partial derivative on the compact rectangle is uniformly continuous.

[F6] [[def-borel-sigma-algebra]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: continuous bounded functions on the compact intervals are Borel measurable and integrable for the finite measures.

[F7] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: $|\int v\,d\nu|\le M_\nu\|v\|_\infty$, bounded integrands are integrable, and finite integral differences distribute linearly.

[F8] [[def-factorial-and-falling-factorial]] and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: $(2n)!_{\mathbb R}$ is the positive real image of $\prod_{j=1}^{2n}j$.

## Proof

1.1 The partial derivatives are Borel and bounded on the compact rectangle, so their integrals exist by [F1, F6]–[F7]. Define $H(x)=\int_{[c,d]}G(x,y)d\nu(y)$. For $0\le j<2n$, the difference quotient of $\partial_x^jG$ in $x$ differs from $\partial_x^{j+1}G(x,y)$ by a quantity tending uniformly in $y$ to zero: by [F4], the quotient is the average of $\partial_x^{j+1}G(u,y)$ between $x$ and $x+h$, and [F5] makes that derivative uniformly continuous. Integrating the uniform error changes it by at most $M_\nu$ times its supremum by [F7], so induction gives $H\in C^{2n}$ and $H^{(2n)}(x)=\int\partial_x^{2n}G(x,y)d\nu(y)$. [F1, F4, F5, F6, F7, given, construct]

1.2 Apply [F3] to $H$ under $\mu$. The derivative formula in step 1.1 gives $$\left|\int H\,d\mu-Q_\mu(H)\right|\le K_\mu M_\nu\|\partial_x^{2n}G\|_\infty.$$ [F3, step 1.1, algebra]

2.1 Expand $Q_\mu(H)-Q_\mu Q_\nu G=\sum_iw_i\left(\int G(x_i,y)d\nu(y)-Q_\nu(G(x_i,\cdot))\right)$. The positive weights in [F2] sum to $M_\mu$, and [F3] bounds each parenthesized error by $K_\nu\|\partial_y^{2n}G\|_\infty$. Therefore this term has absolute value at most $M_\mu K_\nu\|\partial_y^{2n}G\|_\infty$. [F2, F3, F8, given, algebra]

2.2 The iterated integral minus the tensor rule is the sum of the errors in steps 1.2 and 2.1. The triangle inequality gives the stated bound. [step 1.2, step 2.1, algebra] ∎

