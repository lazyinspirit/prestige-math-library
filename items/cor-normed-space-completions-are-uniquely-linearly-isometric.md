---
id: cor-normed-space-completions-are-uniquely-linearly-isometric
kind: corollary
title: "Any two completions of a normed space are uniquely linearly isometric"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-completion-of-a-normed-space,
       def-linear-isometry-and-isometric-isomorphism,
       thm-completion-universal-property-for-bounded-linear-maps,
       thm-metric-completion-unique]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-27
---

## Statement

Let $X$ be a normed space, and let $(Y,j)$ and $(Z,k)$ be two completions of
$X$. Then there is a unique linear isometric isomorphism $U:Y\to Z$ such that
$$U\circ j=k.$$

## Facts & Assumptions

**Given:** A normed space $X$ and two completions $(Y,j)$ and $(Z,k)$ of $X$.

[L1] Any two metric completions are related by a unique isometry commuting with the dense embeddings ([[thm-metric-completion-unique]]).

[L2] Bounded linear maps extend uniquely across a completion ([[thm-completion-universal-property-for-bounded-linear-maps]]).

[L3] A linear isometric isomorphism is a bijective linear isometry ([[def-linear-isometry-and-isometric-isomorphism]], [[def-completion-of-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a unique isometry $U:Y\to Z$ with $U\circ j=k$. [L1]

1.2 On the dense subspace $j[X]\subseteq Y$, the map $j(x)\mapsto k(x)$ is linear and norm-preserving. Applying [L2] to this dense linear isometry extends it to a bounded linear map $\widetilde U:Y\to Z$ with $\widetilde U\circ j=k$. [L2, L3]

2.1 Both $U$ and $\widetilde U$ are continuous maps $Y\to Z$ extending the same map on $j[X]$, so the uniqueness in step 1.1 forces $U=\widetilde U$. Hence $U$ is linear. [step 1.1, step 1.2, L1]

3.1 Since $U$ is already an isometry by step 1.1, it is a linear isometric isomorphism. Uniqueness of such a map is again the uniqueness from [L1]. [step 2.1, L3] ∎
