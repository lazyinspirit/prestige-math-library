---
id: thm-correspondence-theorem-groups
kind: theorem
title: 'Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-quotient-map, def-kernel-and-image-of-group-homomorphism, thm-image-subgroup-and-kernel-normal, lem-subgroup-criterion, thm-normal-subgroup-characterisations, def-quotient-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Statement

Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved.

For $N\mathrel{\trianglelefteq}G$, the maps $H\mapsto H/N$ and
$K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between
subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$; they preserve
normality.

## Facts & Assumptions

**Given:** A normal subgroup $N\mathrel{\trianglelefteq}G$ and the quotient map $\pi:G\to G/N$.

[L1] $\pi$ is surjective with kernel $N$ ([[prop-canonical-quotient-map]]).

[L2] Kernels and images are defined by inverse images and values ([[def-kernel-and-image-of-group-homomorphism]]).

[L3] Images are subgroups and kernels are normal ([[thm-image-subgroup-and-kernel-normal]]).

[L4] The subgroup criterion is closure under $xy^{-1}$ ([[lem-subgroup-criterion]]).

[L5] Normality has the conjugation and coset characterisations ([[thm-normal-subgroup-characterisations]]).

[L6] $G/N$ is the quotient group of cosets ([[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 For $N\le H\le G$, $H/N=\pi[H]$ is a subgroup, while $\pi^{-1}(K)$ is a subgroup containing $\ker\pi=N$. [L1, L2, L3, L4, L5, L6, given, construct]

2.1 Surjectivity gives $\pi[\pi^{-1}(K)]=K$, and $N\le H$ gives $\pi^{-1}(\pi[H])=H$; both assignments therefore preserve inclusion and are inverse. [step 1.1, L1, L2, L3, L4, L5, L6, given, algebra]

3.1 The image and preimage calculation of step 2.1 also preserves normality. [step 2.1] ∎
