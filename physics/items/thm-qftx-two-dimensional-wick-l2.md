---
id: thm-qftx-two-dimensional-wick-l2
kind: theorem
title: Smeared Wick powers have a two-dimensional L² limit
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-two-dimensional-wick-cutoff
  - lem-qftx-finite-cross-wick-covariance
  - lem-qftx-two-dimensional-covariance-log-integrability
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-two-dimensional-wick-cutoff: mathematical-premise
  lem-qftx-finite-cross-wick-covariance: mathematical-premise
  lem-qftx-two-dimensional-covariance-log-integrability: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-complex-lp-completeness-and-almost-everywhere-subsequences: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3 opening and §3.1"
      url: "https://arxiv.org/pdf/1203.3991"
      locator: "PDF pp. 9–12: the massive two-dimensional Euclidean Gaussian covariance and Wick ordering in P(φ)₂. The local L² convergence proof is supplied here."
    - title: "Barry Simon, The P(φ)₂ Euclidean (Quantum) Field Theory, Chapter I, §1.1 (publisher preview)"
      url: "https://api.pageplace.de/preview/DT0400.9781400868759_A26063613/preview-9781400868759_A26063613.pdf"
      locator: "PDF pp. 24–33, printed pp. 4–13: Theorem 1.3 computes the covariance of two finite Gaussian Wick powers by expanding their generating functions. The smoothing and two-dimensional kernel estimates are proved locally here."
---

## Statement

Assume the Axiom of Choice, its countable-family consequence, and $m>0$. Let $\Phi$, $\mu_C$, the fixed nonnegative mollifier $\rho$, $\Phi_\epsilon$, and $W_{\epsilon,n}(f)$ be as in the earlier cutoff definition. Here $L^2(\mu_C)$ is the space of square-integrable complex random variables modulo almost-everywhere equality, with norm $\|X\|_2=(\mathbb E_{\mu_C}|X|^2)^{1/2}$. For every integer $n\ge1$ and every bounded measurable compactly supported $f:\mathbb R^2\to\mathbb C$, the family $W_{\epsilon,n}(f)$ is Cauchy in $L^2(\mu_C)$ as $\epsilon\downarrow0$; write its limit as $W_n(f)$. If $f$ is real-valued, then $W_n(f)$ is a real $L^2$-class. For all such $f,g$,

$$\mathbb E_{\mu_C}[\overline{W_n(f)}W_n(g)]=n!\int_{\mathbb R^2}\int_{\mathbb R^2}\overline{f(x)}g(y)G_m(x-y)^n\,d^2x\,d^2y.$$

The kernel satisfies $|G_m(z)|\le K_m(1+|\log|z||)$ for $0<|z|\le1$ and $|G_m(z)|\le K_m e^{-m|z|}/\sqrt{m|z|}$ for $|z|\ge1$, as established by the earlier covariance-kernel analysis.

## Statement references

[[def-qftx-two-dimensional-wick-cutoff]]

[[lem-qftx-two-dimensional-covariance-log-integrability]]

[[lem-qftx-finite-cross-wick-covariance]]

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and its countable-family consequence. Fix $m>0$, an integer $n\ge1$, and bounded measurable compactly supported $f,g:\mathbb R^2\to\mathbb C$.

[A1] The full Axiom of Choice is a hypothesis of the Gaussian field construction and finite Gaussian Wick suppliers. [[def-axiom-of-choice]]

[A2] Countable Choice is inherited from [A1] and is the hypothesis used by the complex $L^2$ completeness supplier. [[def-countable-choice]]

[F1] The earlier definition specifies the real centered generalized Gaussian field, its covariance Fourier convention, the fixed mollifier, and each finite-cutoff Wick polynomial and smearing. [[def-qftx-two-dimensional-wick-cutoff]]

[F2] For each $\epsilon,\delta>0$, $\mathbb E[\Phi_\epsilon(x)\Phi_\delta(y)]=C_{\epsilon,\delta}(x-y)$, where $C_{\epsilon,\delta}=G_m*\kappa_{\epsilon,\delta}$; for $x\ne y$ it tends to $G_m(x-y)$ and has a uniform logarithmic bound on compact difference sets. [[lem-qftx-two-dimensional-covariance-log-integrability]]

[F3] If $X,Y$ are centered jointly Gaussian with covariance $c$, then $\mathbb E[:X^n::Y^n:]=n!c^n$ with each Wick power normalized by its own variance. [[lem-qftx-finite-cross-wick-covariance]]

[F4] Fubini's theorem exchanges the probability and compact-support Lebesgue integrals when the product is absolutely integrable. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F5] An almost-everywhere convergent sequence dominated by one integrable function converges in $L^1$ and its integrals converge. [[thm-dominated-convergence]]

[F6] Cauchy sequences in $L^2(\mu_C;\mathbb C)$ converge in that norm under Countable Choice. [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]

[F7] The $L^2$ inner product satisfies $|\mathbb E[\overline X Y]|\le\|X\|_2\|Y\|_2$. [[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof

**Proof technique:** compute mixed covariances, pass them to the kernel limit, then use completeness of $L^2$.

**Given:** [A1]–[A2], [F1]–[F7], $m>0$, $n\ge1$, and $f,g\in L^\infty_c(\mathbb R^2;\mathbb C)$.

1.1 For fixed $\epsilon,\delta>0$, the smoothed fields at $x,y$ are jointly centered Gaussian by [F1], and their cross-covariance is $C_{\epsilon,\delta}(x-y)$ by [F2]. Apply [F3] to obtain $\mathbb E[\overline{:\!\Phi_\epsilon(x)^n\!:}:\!\Phi_\delta(y)^n\!:]=n!C_{\epsilon,\delta}(x-y)^n$. For fixed cutoffs, each variance is finite and independent of $x$ by translation invariance; Cauchy–Schwarz [F7] therefore bounds the absolute expected product by a finite constant on the bounded support of $f(x)g(y)$. Fubini [F4] applies and yields $\mathbb E[\overline{W_{\epsilon,n}(f)}W_{\delta,n}(g)]=n!\int\!\!\int\overline{f(x)}g(y)C_{\epsilon,\delta}(x-y)^n\,d^2x\,d^2y$. For measurability of the samplewise smearing, on a fixed bounded box containing the support replace the continuous function $x\mapsto:\!\Phi_\epsilon(x)^n\!:$ on each fine grid cell by its value at one fixed point of that cell. Its integral against $f$ is a finite sum of measurable evaluations with deterministic coefficients $\int_{\text{cell}}f$; uniform continuity on the box makes the sums converge to the samplewise integral. The same approximations make the field jointly measurable in sample and position, so Fubini applies to measurable functions. [A1, A2, F1, F2, F3, F4, F7, given, algebra]

2.1 Let $K_f,K_g$ be bounded supports of $f,g$. By [F2], $C_{\epsilon,\delta}(z)^n\to G_m(z)^n$ for every $z\ne0$ and, on the bounded difference set $K_f-K_g$, its absolute value is bounded by $K(1+|\log|z||)^n$ for all sufficiently small cutoffs. This majorant is locally integrable: on the annulus $2^{-j-1}<|z|\le2^{-j}$ its integral is at most $\pi2^{-2j}(1+(j+1)\log2)^n$, and the resulting series converges by the ratio test. Consequently $(x,y)\mapsto |f(x)g(y)|(1+|\log|x-y||)^n$ is integrable on $K_f\times K_g$: for fixed $x$, the translated bounded set $x-K_g$ lies in one fixed disk on which the logarithmic power is integrable, uniformly in $x$, and $K_f$ has finite area. For every sequence $(\epsilon_k,\delta_k)\to(0,0)$, apply [F5] on this product to get $\mathbb E[\overline{W_{\epsilon_k,n}(f)}W_{\delta_k,n}(g)]\to n!\int\!\!\int\overline{f(x)}g(y)G_m(x-y)^n\,d^2x\,d^2y$. Sequential characterization of limits in $\mathbb R^2$ gives the same joint limit as $\epsilon,\delta\downarrow0$. [F2, F4, F5, step 1.1, given, algebra]

3.1 Take $g=f$. The right side of step 2.1 is a fixed finite real number, being the limit of the nonnegative diagonal covariances. Expanding the squared norm gives $\|W_{\epsilon,n}(f)-W_{\delta,n}(f)\|_2^2=\mathbb E|W_{\epsilon,n}(f)|^2+\mathbb E|W_{\delta,n}(f)|^2-2\operatorname{Re}\mathbb E[\overline{W_{\epsilon,n}(f)}W_{\delta,n}(f)]$, which tends to zero by step 2.1. Thus the cutoff family is Cauchy in $L^2(\mu_C)$, and [F6] supplies its limit $W_n(f)$. Applying the mixed covariance convergence in step 2.1 and [F7] to pass both factors to their $L^2$ limits proves the displayed covariance formula for $W_n(f),W_n(g)$. For real $f$, each cutoff smearing is real; continuity of the imaginary-part map in $L^2$ gives $\|\operatorname{Im}W_n(f)\|_2\le\|W_n(f)-W_{\epsilon,n}(f)\|_2\to0$, so the limit class is real. [A2, F6, F7, step 2.1, given, algebra] ∎
