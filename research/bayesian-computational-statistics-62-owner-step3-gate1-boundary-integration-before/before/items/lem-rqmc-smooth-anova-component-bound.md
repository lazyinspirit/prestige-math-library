---
id: lem-rqmc-smooth-anova-component-bound
kind: lemma
title: "Smoothness bounds the high-frequency ANOVA components"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-b-adic-anova-components
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-newton-leibniz-with-interior-derivative
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-heine-cantor-metric
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume Countable Choice through the published Riemann-to-Lebesgue integral supplier; the coefficient and orthogonality estimates add no choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Local Antithetic Sampling with Scrambled Nets, §5.1, Lemmas 2–3"
      url: "https://artowen.su.domains/reports/localanti.pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Assume Countable Choice. Let $f:[0,1]^d\to\mathbb R$ be continuous, and suppose every mixed
coordinate derivative $\partial_u f$ for nonempty
$u\subseteq\{1,\ldots,d\}$ exists and is continuous on the cube. For
$u\ne\varnothing$, let $f_u(x_u)=f(x)$ when $u=\{1,\ldots,d\}$, and otherwise let
$$f_u(x_u)=\int_{[0,1]^{d-|u|}}f(x_u,x_{-u})\,dx_{-u};\qquad M_u=\sup_{x_u\in[0,1]^{|u|}}|\partial_u f_u(x_u)|.$$
Then for every scale vector $\kappa$,
$$\sigma^2_{u,\kappa}(f)\le 4^{|u|}(b-1)^{|u|}M_u^2 b^{-2|\kappa|}.$$

## Facts & Assumptions
**Given:** Countable Choice, $b\ge2$, the finite-dimensional components in [[def-b-adic-anova-components]], and the stated continuous mixed derivatives of $f$.

[F1] [[def-b-adic-anova-components]]: $\nu_{u,\kappa}$ is the finite sum of its translation/contrast coefficients times the corresponding product contrasts.

[F2] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: A continuous parameter derivative on a compact rectangle passes through the Riemann integral.

[F3] [[thm-newton-leibniz-with-interior-derivative]]: A continuous function with continuous interior derivative satisfies the integral formula for its increments.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: For an $L^1$ function on a sigma-finite product space, the product integral equals the iterated integrals whenever the theorem's section hypotheses hold.

[F5] [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]: Under Countable Choice, every bounded Borel Riemann-integrable function on a compact rectangle has the same Lebesgue and Riemann integrals.

[F6] [[thm-heine-cantor-metric]]: A continuous function on the compact cube is uniformly continuous.

[F7] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: A continuous real function on a nonempty compact cube attains finite maximum and minimum values.

[A1] [[def-countable-choice]]: The published Riemann-to-Lebesgue equality theorem [F5] assumes Countable Choice.



## Proof

**Proof technique:** direct.

**Given:** The hypotheses in the Statement.

1.1 If $u$ is the full coordinate set, then $f_u=f$ and $\partial_u f_u=\partial_u f$. Otherwise, [F6] makes $f_u$ continuous: changing $x_u$ by less than $\delta$ changes the integrand uniformly in $x_{-u}$, and integration over a unit-volume cube preserves that bound. Repeated application of [F2] to the complementary coordinates, with [F4] identifying iterated integrals and [A1, F5] identifying the Riemann and Lebesgue integrals, gives $\partial_u f_u(x_u)=\int_{[0,1]^{d-|u|}}\partial_u f(x_u,x_{-u})\,dx_{-u}$. The same uniform-continuity argument makes this derivative continuous. Since $|\partial_u f|$ is continuous on the nonempty compact cube, [F7] gives a finite supremum; the displayed integral (or $f_u=f$ in the full-set case) shows $M_u\le\sup_{[0,1]^d}|\partial_u f|$. [A1, F2, F4, F5, F6, F7, given]

2.1 Fix $(\tau,\rho)$ and let $c_{u,\kappa,\tau,\rho}=\int f_u(x_u)\prod_{j\in u}h_{k_j,t_j,r_j}(x_j)\,dx_u$. The integrand is bounded and continuous on each cell of a finite rectangular partition, so it is Riemann integrable; by [A1, F5] this coefficient is also its Riemann integral. Each contrast has integral zero on its parent. Subtracting the left-endpoint value in one coordinate therefore leaves the integral unchanged. Applying [F3] successively in every coordinate expresses the resulting alternating finite difference as the iterated integral of $\partial_u f_u$ over $\prod_{j\in u}[a_j,x_j]$; its absolute value is at most $M_u\prod_{j\in u}b^{-k_j}$. The outer integral of the absolute contrast product factors by [F4] as $\prod_{j\in u}\|h_{k_j,t_j,r_j}\|_1$. [A1, F1, F3, F4, F5, step 1.1, algebra]

3.1 From the explicit child values in [F1], for $1\le r<b$, $\|h_{k,t,r}\|_1=2\sqrt{\frac r{r+1}}\,b^{-(k+1)/2}\le2b^{-k/2}.$ Thus step 2.1 gives $|c_{u,\kappa,\tau,\rho}|\le2^{|u|}M_u b^{-3|\kappa|/2}$. [F1, step 2.1, algebra]

4.1 For fixed $u,\kappa$, the contrasts at distinct translations have disjoint supports, and at the same parent their child coefficient vectors are orthonormal by the dot-product calculation in [F1]. Their tensor products are therefore orthonormal. There are $b^{|\kappa|}(b-1)^{|u|}$ such products, so $\sigma^2_{u,\kappa}=\sum_{\tau,\rho}|c_{u,\kappa,\tau,\rho}|^2 \le b^{|\kappa|}(b-1)^{|u|}4^{|u|}M_u^2b^{-3|\kappa|} =4^{|u|}(b-1)^{|u|}M_u^2b^{-2|\kappa|}$, as claimed. [F1, step 3.1, algebra] ∎
