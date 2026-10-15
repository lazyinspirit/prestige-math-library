---
id: lem-feynman-kac-path-measures-satisfy-forward-recursion
kind: lemma
title: "Feynman–Kac path measures satisfy the forward recursion"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-feynman-kac-path-targets-and-normalizers
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-integration-against-a-density
  - thm-measurability-of-integration-against-a-kernel
proof_strategy: direct
axiom_use: "AC is inherited only through the finite path-law construction in the definition; this finite recursion adds no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.3–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2–11.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §§2.1–2.2"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement

Assume AC and the finite-horizon setup of [[def-feynman-kac-path-targets-and-normalizers]]. For $1\le k\le T$ and every nonnegative product-measurable $\varphi:\mathsf X_{0:k}\to[0,\infty]$,
$$\gamma_k(\varphi)=\int_{\mathsf X_{0:k-1}}\gamma_{k-1}(dx_{0:k-1})\int_{\mathsf X_k}G_k(x_k)\varphi(x_{0:k})M_k(x_{k-1},dx_k),$$
with equality in $[0,\infty]$.

## Facts & Assumptions

**Given:** AC, the finite-horizon path measures and potentials in the Statement, and $k\ge1$.

[F1] [[def-feynman-kac-path-targets-and-normalizers]]: $\gamma_k$ is the path law $\mu_0\prod_{j=1}^kM_j$ weighted by the nonnegative product $\prod_{j=0}^kG_j$.

[F2] [[thm-measurability-of-integration-against-a-kernel]]: A nonnegative product-measurable integrand has a measurable section integral against a probability kernel.

[F3] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: Coordinate projections from finite product measurable spaces are measurable.

[F4] [[thm-composition-with-borel-functions-preserves-measurability]]: The composition of measurable maps is measurable.

[F5] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Finite products of nonnegative measurable functions are measurable.

[F6] [[thm-integration-against-a-density]]: If $f,g\ge0$ are measurable, then $\int g\,d(f\,d\mu)=\int gf\,d\mu$, including infinite values.

## Proof

**Given:** The hypotheses in the Statement.

1.1 The coordinate projection $x_{0:k}\mapsto x_k$ is measurable by [F3], so $G_k(x_k)$ is measurable by [F4]. Its product with the nonnegative product-measurable $\varphi$ is measurable by [F5]; hence $H(x_{0:k-1})=\int G_k(x_k)\varphi(x_{0:k})M_k(x_{k-1},dx_k)$ is measurable by [F2]. [F2, F3, F4, F5, given]

2.1 By [F1], the finite path law at time $k$ is obtained by appending $M_k$ to the time-$(k-1)$ path law, and $\gamma_{k-1}=V_{k-1}\,dP_{k-1}^M$. Applying [F6] to $H$ and then expanding the ordered kernel integral gives $\int H\,d\gamma_{k-1}=\int H V_{k-1}\,dP_{k-1}^M=\gamma_k(\varphi)$. These are nonnegative integrals, so the identity holds in $[0,\infty]$ and is the stated recursion. [F1, F6, step 1.1] ∎
