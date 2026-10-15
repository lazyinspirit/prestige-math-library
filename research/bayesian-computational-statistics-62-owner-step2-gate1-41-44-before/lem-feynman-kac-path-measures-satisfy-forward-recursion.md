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
  - thm-measurability-of-integration-against-a-kernel
proof_strategy: direct
axiom_use: "AC is inherited only through the finite path-law construction in the definition; this finite recursion adds no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

[A1] [[def-axiom-of-choice]]: AC is used in the finite path-law construction recorded in the definition.

[F1] [[def-feynman-kac-path-targets-and-normalizers]]: $\gamma_k$ is the path law $\mu_0\prod_{j=1}^kM_j$ weighted by the nonnegative product $\prod_{j=0}^kG_j$.

[F2] [[thm-measurability-of-integration-against-a-kernel]]: A nonnegative product-measurable integrand has a measurable section integral against a probability kernel.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], expand $\gamma_k(\varphi)$ against the finite path law as the ordered integral of $\varphi(x_{0:k})\prod_{j=0}^kG_j(x_j)$ with respect to $\mu_0(dx_0)\prod_{j=1}^kM_j(x_{j-1},dx_j)$. Group the first $k$ potentials and the first $k$ state coordinates; their iterated integral is exactly $\gamma_{k-1}(dx_{0:k-1})$. [A1, F1, given]

2.1 The remaining last-coordinate integral is the displayed inner kernel integral. It is measurable in $x_{0:k-1}$ by [F2]; all integrands are nonnegative, so the ordered iterated integrals agree even if their common value is infinite. This proves the recursion. [F1, F2, step 1.1] ∎
