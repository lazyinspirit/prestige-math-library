---
id: thm-gaussian-smoothing-endpoint-weak-limit
kind: theorem
title: Gaussian smoothing converges weakly at the endpoint
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 2
deps:
  - def-axiom-of-choice
  - lem-deterministic-ito-integral-has-gaussian-independent-increments
  - def-gaussian-smoothed-data-law-and-transition-density
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-law-or-distribution-of-a-random-element
  - def-weak-convergence-of-borel-probability-measures
  - def-wasserstein-two-space-and-couplings
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
      locator: "Sections 3.2.2–3.2.3, printed pp. 87–91; the deterministic Itô increment law is proved locally here."
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §§5.1.1–5.1.2, printed pp. 127–132; Gaussian convolution and its endpoint approximate-identity context."
---

## Statement

Assume the Axiom of Choice. Fix $d\ge1$, $T>0$, and a Borel probability measure $\mu$ on $\mathbb R^d$ supported in $\overline B(0,R)$ for some finite $R\ge0$. Let $g:[0,T]\to(0,\infty)$ be continuously differentiable and satisfy $0<g_{\min}\le g(t)\le g_{\max}<\infty$; set $v(t)=\int_0^t g(r)^2\,dr$. On a complete filtered probability space with the usual conditions, let $X_0$ be measurable at time zero with law $\mu$ and independent of future Brownian increments. Let $W$ be a standard adapted $d$-dimensional Brownian motion whose increment $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N_d(0,(t-s)I_d)$ for $0\le s<t\le T$. Let $X$ be the unique strong solution of $X_t=X_0+\int_0^t g(r)\,dW_r$, and write $\mu_t=\operatorname{Law}(X_t)$. For Borel probability laws $\alpha,\beta$ with finite second moments, write $W_2(\alpha,\beta)$ for the square root of the infimum of $\int|x-y|^2\,d\pi(x,y)$ over Borel probability couplings $\pi$ of $\alpha$ and $\beta$. For every $0<\epsilon\le T$,

$$\mathbb E|X_\epsilon-X_0|^2=d\,v(\epsilon),\qquad W_2(\mu_\epsilon,\mu)\le\sqrt{d\,v(\epsilon)}.$$

As $\epsilon\downarrow0$, $X_\epsilon\to X_0$ in probability and $\mu_\epsilon$ converges weakly to $\mu$, meaning that $\int f\,d\mu_\epsilon\to\int f\,d\mu$ for every bounded continuous real function $f$ on $\mathbb R^d$. This estimate controls endpoint truncation only: it gives no bound for learned-score error or numerical-discretization error, and asserts no density or score regularity at $\epsilon=0$.

## Statement references

[Lawler, *Stochastic Calculus: An Introduction with Applications*, Sections 3.2.2–3.2.3](https://www.math.uchicago.edu/~lawler/finbook.pdf)

[Hunter, *Notes on Partial Differential Equations*, Chapter 5, §§5.1.1–5.1.2](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

## Facts & Assumptions

**Given:** The probability space, Brownian motion, initial random vector, coefficient, and strong solution in the statement.

[A1] The full Axiom of Choice is assumed by the inherited Brownian and Itô interfaces. [[def-axiom-of-choice]]

[F1] The deterministic Itô increment $\int_s^t g(r)\,dW_r$ is independent of $\mathcal F_s$ and has law $N_d(0,(v(t)-v(s))I_d)$. [[lem-deterministic-ito-integral-has-gaussian-independent-increments]]

[F2] The strong-solution equation identifies $X_t-X_0$ with the corresponding Itô integral. [[def-ito-sde-and-strong-solution]]

[F3] Under the stated globally Lipschitz and linear-growth SDE hypotheses there is a unique strong solution with continuous paths. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F4] The positive-time law $\mu_t$ has the stated Gaussian-mixture density, and $\mu_0=\mu$. [[def-gaussian-smoothed-data-law-and-transition-density]]

[F5] The law of a random element is its probability pushforward. [[def-law-or-distribution-of-a-random-element]]

[F6] Weak convergence of Borel probability laws is tested by bounded continuous real functions. [[def-weak-convergence-of-borel-probability-measures]]

[F7] For laws with finite second moments, $W_2$ is the infimum of quadratic costs over their Borel couplings. [[def-wasserstein-two-space-and-couplings]]

[F8] The Borel sigma-algebra on a finite-dimensional Euclidean product is the product of its Borel sigma-algebras. [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

## Proof

**Given:** The statement's hypotheses and notation.

1.1 The coefficients $b(t,x)=0$ and $\sigma(t,x)=g(t)I_d$ are jointly Borel, globally Lipschitz in $x$ with constant zero, and satisfy $|b|+\|\sigma\|_F=\sqrt d\,g(t)\le\sqrt d\,g_{\max}$. The initial support gives $\mathbb E|X_0|^2\le R^2$, and the complete usual filtered space, adapted Brownian increments, and independence of $X_0$ are exactly [F2]. Thus [F3] supplies the unique continuous strong solution. By [F2], $X_\epsilon-X_0=\int_0^\epsilon g(r)\,dW_r$. The characteristic-function identity in [F1] identifies this vector with $N_d(0,v(\epsilon)I_d)$, whose coordinate variances sum to $d\,v(\epsilon)$. Thus $\mathbb E|X_\epsilon-X_0|^2=d\,v(\epsilon)$. Also $v(\epsilon)\le g_{\max}^2\epsilon\to0$. For every $a>0$, $|X_\epsilon-X_0|^2\ge a^2\mathbf1_{\{|X_\epsilon-X_0|>a\}}$; taking expectations gives $P(|X_\epsilon-X_0|>a)\le d\,v(\epsilon)/a^2\to0$. [A1, F1, F2, F3, algebra]

2.1 The support condition gives $\mathbb E|X_0|^2\le R^2$, and step 1.1 gives $\mathbb E|X_\epsilon|^2\le2R^2+2d\,v(T)<\infty$. Hence both laws lie in the quadratic Wasserstein space. The measurable pair $(X_\epsilon,X_0)$ has a Borel law on $\mathbb R^d\times\mathbb R^d$ by [F8]; by [F5] its marginals are $\mu_\epsilon$ and $\mu$, and [F4] identifies $\mu_\epsilon$ as the smoothed law from the definition. Thus it is a coupling. Its cost is $\mathbb E|X_\epsilon-X_0|^2=d\,v(\epsilon)$. Taking the infimum in [F7] proves $W_2(\mu_\epsilon,\mu)\le\sqrt{d\,v(\epsilon)}$. [F4, F5, F7, F8, step 1.1, given]

3.1 Fix bounded continuous $f$ and let $K=\overline B(0,R+1)$. Its restriction to compact $K$ is uniformly continuous; define $\omega_K(\delta)=\sup\{|f(x)-f(y)|:x,y\in K,\ |x-y|\le\delta\}$, which tends to zero as $\delta\downarrow0$. For $0<\delta<1$, on the event $|X_\epsilon-X_0|\le\delta$, both vectors belong to $K$, so their $f$-values differ by at most $\omega_K(\delta)$. On the complementary event the difference is at most $2\|f\|_\infty$. Step 1.1 and Markov's inequality therefore give $\left|\int f\,d\mu_\epsilon-\int f\,d\mu\right|\le\omega_K(\delta)+2\|f\|_\infty\frac{d\,v(\epsilon)}{\delta^2}.$ For fixed $\delta$ the second term tends to zero as $\epsilon\downarrow0$; then letting $\delta\downarrow0$ proves convergence for every such $f$. This is weak convergence by [F6]. The estimates establish only the endpoint statements in the theorem. [F5, F6, step 1.1, given] ∎
