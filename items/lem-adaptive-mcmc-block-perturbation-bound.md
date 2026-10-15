---
id: lem-adaptive-mcmc-block-perturbation-bound
kind: lemma
title: Finite-block perturbation bound for adaptive MCMC
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-diminishing-adaptation
  - def-measure-kernel-and-probability-kernel
  - lem-total-variation-coupling-and-kernel-contraction
  - thm-monotone-convergence-for-the-integral
  - thm-measurability-of-integration-against-a-kernel
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§5, pp. 8–9, comparison with a frozen kernel in Theorem 5."
    - title: "Gersende Fort, Adaptive MCMC: theory and methods, Warwick lecture notes"
      url: "https://www.math.univ-toulouse.fr/~gfort/Slides/Warwick09.pdf"
      locator: "PDF slides 20–21, common-target decomposition into frozen-chain perturbation and fixed-kernel convergence."
---

## Statement

Let $(X_n,\Gamma_n)$ be an adaptive MCMC process with adaptation sizes $D_n$
as in [[def-diminishing-adaptation]]. For integers $n\ge0$ and $N\ge1$, define
the frozen-kernel mixture $Q_{n,N}$ by
$$Q_{n,N}(A):=\mathbb E\!\left[P_{\Gamma_n}^{N}(X_n,A)\right]\quad(A\in\mathcal X).$$
Then $Q_{n,N}$ is a probability measure and
$$\left\lVert\mathcal L(X_{n+N})-Q_{n,N}\right\rVert_{\rm TV}\le\sum_{i=0}^{N-1}\sum_{j=0}^{i-1}\mathbb E[D_{n+j}],$$
where the inner sum is $0$ for $i=0$.

## Facts & Assumptions

**Given:** The jointly measurable probability-kernel family and adaptive process in [[def-diminishing-adaptation]], with its stated one-step conditional law and measurable $D_n$.

[F1] [[def-diminishing-adaptation]]: conditional on $\mathcal F_m$, $X_{m+1}$ has law $P_{\Gamma_m}(X_m,\cdot)$ and $D_m=\sup_x\lVert P_{\Gamma_{m+1}}(x,\cdot)-P_{\Gamma_m}(x,\cdot)\rVert_{\rm TV}$.

[F2] [[lem-total-variation-coupling-and-kernel-contraction]]: total variation is the supremum over measurable $[0,1]$-valued tests, and a test integral difference is bounded by the total variation distance of its laws.

[F3] [[thm-measurability-of-integration-against-a-kernel]]: integration of a product-measurable function against a probability kernel is measurable.

[F4] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative measurable functions converge under integration.

## Proof

**Given:** [F1]–[F3] and the hypotheses in the Statement.

1.1 Fix $f:\mathsf X\to[0,1]$ measurable. For $i=0,\ldots,N$, set $g_i=P_{\Gamma_n}^{N-i}f$, so $g_N=f$. Joint kernel measurability and [F3] make each $g_i$ measurable in $(\Gamma_n,x)$ and $0\le g_i\le1$. Also $g_i=P_{\Gamma_n}g_{i+1}$. [F1, F3, given]

2.1 The conditional transition rule [F1] and the identity in step 1.1 give $\mathbb E[f(X_{n+N})]-\mathbb E[P_{\Gamma_n}^{N}f(X_n)]=\sum_{i=0}^{N-1}\mathbb E\!\left[(P_{\Gamma_{n+i}}-P_{\Gamma_n})g_{i+1}(X_{n+i})\right].$ Indeed, each summand is the difference between $\mathbb E[g_{i+1}(X_{n+i+1})]$ and $\mathbb E[g_i(X_{n+i})]$, and these differences telescope from $i=0$ through $N-1$. [F1, step 1.1, algebra]

3.1 By [F2] and the triangle inequality applied pointwise to successive kernels, $\left|(P_{\Gamma_{n+i}}-P_{\Gamma_n})g_{i+1}(X_{n+i})\right|\le\sum_{j=0}^{i-1}D_{n+j}$. Both sides are measurable, by step 1.1 and the assumed measurability of the $D_m$. Taking expectations bounds the absolute value of the $i$th summand in step 2.1 by $\sum_{j=0}^{i-1}\mathbb E[D_{n+j}]$. Summing gives the displayed bound for every such $f$; take the supremum using [F2]. For pairwise disjoint $A_\ell$, countable additivity of each $P_{\Gamma_n}^{N}(X_n,\cdot)$ and [F4] give $Q_{n,N}(\bigcup_\ell A_\ell)=\sum_\ell Q_{n,N}(A_\ell)$ by monotone convergence; also $Q_{n,N}(\mathsf X)=1$. Thus $Q_{n,N}$ is a probability measure. [F1, F2, F4, step 2.1, algebra] ∎
