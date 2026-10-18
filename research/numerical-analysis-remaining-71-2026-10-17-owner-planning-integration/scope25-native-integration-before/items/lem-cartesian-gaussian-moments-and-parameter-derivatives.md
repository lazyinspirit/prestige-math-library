---
id: lem-cartesian-gaussian-moments-and-parameter-derivatives
kind: lemma
title: Cartesian Gaussian moments and exponent-parameter derivatives
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-cartesian-gaussian-primitives-and-contractions, thm-gaussian-integral, thm-substitution-for-improper-integrals, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, thm-integration-by-parts, lem-mean-value-theorem-on-closed-interval, thm-derivative-of-exponential, lem-derivative-algebra-and-chain-rules]
proof_strategy: direct
axiom_use: None. Only finite products, Tonelli/Fubini, and dominated convergence for an explicit Gaussian majorant are used.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Gaussian moments and Hermite-Gaussian integration, pp. 6–9 and 14."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§II–III, pp. 5–12, Gaussian moments and differentiated Gaussian integrals."
---

## Statement

Let $p>0$ and $\alpha\in\mathbb N_0^3$. If any component of $\alpha$ is odd, then
$$\int_{\mathbb R^3}x^\alpha e^{-p\|x\|_2^2}\,dx=0.$$
If $\alpha_j=2k_j$ for $j=1,2,3$, then
$$\int_{\mathbb R^3}x^\alpha e^{-p\|x\|_2^2}\,dx=\pi^{3/2}\prod_{j=1}^3\frac{(2k_j)!}{4^{k_j}k_j!\,p^{k_j+1/2}}.$$
For every $q\in\mathbb N_0$, differentiation with respect to $p$ is valid and
$$\frac{d^q}{dp^q}\int_{\mathbb R^3}x^\alpha e^{-p\|x\|_2^2}\,dx=(-1)^q\int_{\mathbb R^3}\|x\|_2^{2q}x^\alpha e^{-p\|x\|_2^2}\,dx.$$

## Facts & Assumptions

**Given:** $p>0$, a multi-index $\alpha\in\mathbb N_0^3$, and the Lebesgue integral convention of [[def-cartesian-gaussian-primitives-and-contractions]].

[F1] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$.

[F2] [[thm-integration-by-parts]]: finite-interval integration by parts holds when the displayed functions and derivatives are integrable.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions on a sigma-finite product may be integrated by sections in either order.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely integrable functions on a sigma-finite product have equal iterated and product integrals.

[F5] [[thm-dominated-convergence]]: pointwise convergence under a single integrable majorant permits passage of the limit through the integral.

[F6] [[lem-mean-value-theorem-on-closed-interval]]: a difference quotient of a differentiable scalar function is bounded by the supremum of its derivative on the intervening segment.

[F7] [[thm-substitution-for-improper-integrals]]: a monotone differentiable substitution on the real line preserves a convergent improper integral.

[L9] [[thm-derivative-of-exponential]] and [[lem-derivative-algebra-and-chain-rules]]: the exponential is smooth with derivative itself; finite sums, products and polynomial compositions obey the product, power and chain rules. Applying these rules one coordinate or parameter at a time justifies every displayed finite Gaussian derivative.

## Proof

1.1 In one dimension, scaling $y=\sqrt p\,x$ and [F1], [F7] give $J_0(p):=\int e^{-px^2}dx=\sqrt\pi\,p^{-1/2}$. Odd moments vanish by the substitution $x\mapsto-x$. For $k\ge1$, integration by parts [F2] on $[-R,R]$ with $dv=xe^{-px^2}dx=-d(e^{-px^2})/(2p)$ gives $J_k(p)=(2k-1)J_{k-1}(p)/(2p)$ after $R\to\infty$; the boundary term is a polynomial times $e^{-pR^2}$ and tends to zero. Iterating yields $J_k(p)=\sqrt\pi(2k)!/(4^k k!p^{k+1/2})$. [given, F1, F2, F7, algebra]

2.1 The absolute value of each three-dimensional integrand is a product of three one-dimensional polynomial-Gaussian factors. Their integrals are finite by step 1.1, so [F3] and then [F4] factor the integral into the product of the three one-dimensional moments. If a component is odd, its factor is zero; otherwise multiplying the three formulas from step 1.1 gives the displayed expression. [given, F3, F4, step 1.1, algebra]

3.1 Fix $p_0>0$ and restrict $p$ to $[p_0/2,3p_0/2]$. The absolute value of each $q$-th parameter derivative integrand is bounded by $\|x\|^{|\alpha|+2q}e^{-(p_0/2)\|x\|^2}$, which is integrable by step 2.1 after expanding the finite power into coordinate monomials. Difference quotients for one derivative are bounded by the corresponding next polynomial-Gaussian majorant by [F6]; [F5] therefore passes each limit through the integral. Repeating this argument $q$ times gives the stated factor $(-1)^q\|x\|^{2q}$. [given, F5, F6, step 2.1, induction, L9] ∎
