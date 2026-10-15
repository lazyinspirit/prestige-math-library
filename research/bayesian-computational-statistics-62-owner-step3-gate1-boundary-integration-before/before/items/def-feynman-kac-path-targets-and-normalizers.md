---
id: def-feynman-kac-path-targets-and-normalizers
kind: definition
title: "Feynman–Kac path targets and normalizers"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measure-kernel-and-probability-kernel
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - def-state-space-filtering-laws
axiom_use: "Assume AC through Ionescu–Tulcea for finite path laws and through the state-space filtering-law interface. This definition makes no additional selection."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.3–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2–11.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §§2.1–2.2"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Definition

Assume AC and fix a finite horizon $T\in\mathbb N_0$. For each $0\le k\le T$, let $(\mathsf X_k,\mathcal X_k)$ be a standard Borel space. Let $\mu_0$ be a probability measure on $\mathsf X_0$, and for $1\le k\le T$ let $M_k:\mathsf X_{k-1}\rightsquigarrow\mathsf X_k$ be a probability kernel. A **potential** at time $k$ is a finite-valued nonnegative measurable function $G_k:\mathsf X_k\to[0,\infty)$. Write $\mathsf X_{0:t}=\prod_{k=0}^t\mathsf X_k$ with its finite-product sigma-algebra.

For each $0\le t\le T$, let $P_t^M$ be the finite path law with ordered kernel integral $\mu_0(dx_0)\prod_{k=1}^tM_k(x_{k-1},dx_k)$, supplied by Ionescu–Tulcea ([[thm-ionescu-tulcea-construction-of-a-markov-chain]]). The **unnormalized Feynman–Kac path measure** is
$$\gamma_t(A)=\int_{\mathsf X_{0:t}}\mathbf 1_A(x_{0:t})\prod_{k=0}^tG_k(x_k)\,P_t^M(dx_{0:t}),\qquad A\in\bigotimes_{k=0}^t\mathcal X_k.$$
Its **normalizer** is $Z_t=\gamma_t(\mathsf X_{0:t})=\gamma_t(1)\in[0,\infty]$. Only when $0<Z_t<\infty$ define the normalized path target $\pi_t^{\mathrm{FK}}=\gamma_t/Z_t$. The sequence $(\gamma_t)$ with its kernels and potentials is the Feynman–Kac flow.

State-space filtering kernels are conditional-law versions as in [[def-state-space-filtering-laws]]. A Feynman–Kac path target is not by itself an assertion that a pointwise conditional version has been selected at observation-null histories.

## Remarks

Each coordinate projection from the finite product is measurable by [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]. Thus $V_t(x_{0:t})=\prod_{k=0}^tG_k(x_k)$ is nonnegative product-measurable by composition and finite-product measurability ([[thm-composition-with-borel-functions-preserves-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]]). Consequently, $\gamma_t(A)=\int_A V_t\,dP_t^M$ is a measure, possibly of infinite mass, by [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].
