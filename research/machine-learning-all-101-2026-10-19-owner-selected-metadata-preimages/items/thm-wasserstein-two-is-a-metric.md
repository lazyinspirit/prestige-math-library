---
id: "thm-wasserstein-two-is-a-metric"
kind: theorem
title: "The quadratic Wasserstein distance is a metric"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "lem-wasserstein-gluing", "prop-existence-and-lower-semicontinuity-of-optimal-couplings", "thm-minkowski-integral-inequality", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC is used by the optimal-coupling and gluing suppliers; this theorem adds no choice principle beyond those supplied arguments."
sources:
  references:
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3, PDF pp. 161–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix A.1, PDF pp. 12–13"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume the Axiom of Choice. For every integer $d\ge1$, the function $W_2$ defined on $\mathcal P_2(\mathbb R^d)$ is a metric: for all $\mu,\nu,\lambda\in\mathcal P_2(\mathbb R^d)$ it is finite and nonnegative, $W_2(\mu,\nu)=0$ exactly when $\mu=\nu$, $W_2(\mu,\nu)=W_2(\nu,\mu)$, and $W_2(\mu,\lambda)\le W_2(\mu,\nu)+W_2(\nu,\lambda)$.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[lem-wasserstein-gluing]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[[thm-minkowski-integral-inequality]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

[Chizat and Bach, Appendix A.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC and $\mu,\nu,\lambda\in\mathcal P_2(\mathbb R^d)$.

[F1] The quadratic coupling infimum is finite and attained by a coupling. [[def-wasserstein-two-space-and-couplings]] [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[F2] Given couplings of $\mu$ with $\nu$ and $\nu$ with $\lambda$, under AC there is a joint law of $(X,Y,Z)$ with those two pair marginals. [[lem-wasserstein-gluing]] [[def-axiom-of-choice]]

[F3] For square-integrable scalar or vector functions, the $L^2$ norm satisfies Minkowski's inequality. [[thm-minkowski-integral-inequality]]

## Proof
1.1 The product coupling has finite cost by [F1], so $W_2$ is finite and nonnegative. The diagonal pushforward of $\mu$ under $x\mapsto(x,x)$ is a coupling with zero cost, hence $W_2(\mu,\mu)=0$. Swapping the two coordinates maps each coupling of $\mu,\nu$ to a coupling of $\nu,\mu$ and preserves $|x-y|^2$; applying the swap twice proves equality of the two infima. [given, F1, construct]

2.1 If $W_2(\mu,\nu)=0$, choose an optimal coupling $\pi$ using [F1]. Its integral of $|x-y|^2$ is zero. For each positive integer $k$, the set $\{|x-y|\ge1/k\}$ has $\pi$-measure zero, since its contribution to the integral is at least $k^{-2}$ times its measure. Their union is the complement of the diagonal, so $\pi$ is concentrated on the diagonal. For every Borel set $A$, both coordinate indicators agree $\pi$-almost everywhere, giving $\mu(A)=\pi(A\times\mathbb R^d)=\pi(\mathbb R^d\times A)=\nu(A)$. Conversely, if $\mu=\nu$, step 1.1 gives distance zero. [given, F1, step 1.1]

3.1 Choose optimal couplings $\pi_{12}$ of $(\mu,\nu)$ and $\pi_{23}$ of $(\nu,\lambda)$ using [F1]. Glue them by [F2] to obtain a law $\gamma$ of $(X,Y,Z)$. Its $(X,Z)$ marginal is a coupling of $\mu,\lambda$. Pointwise, $|X-Z|\le|X-Y|+|Y-Z|$; applying [F3] on the probability space $(\mathbb R^{3d},\gamma)$ gives $W_2(\mu,\lambda)\le\left(\int|X-Z|^2d\gamma\right)^{1/2}\le W_2(\mu,\nu)+W_2(\nu,\lambda).$ This proves the triangle inequality and all metric axioms. [given, F1, F2, F3, step 1.1, step 2.1] ∎
