---
id: thm-correspondence-theorem-ideals
kind: theorem
title: 'Correspondence theorem: ideals of $R/I$ correspond to ideals of $R$ containing $I$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-quotient-ring-map, thm-ring-homomorphism-kernel-is-an-ideal, def-left-right-and-two-sided-ideal, thm-quotient-ring-laws]
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
    - title: "Judson, Abstract Algebra: Theory and Applications, Ring Homomorphisms and Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals"
pipeline_run: null
---

## Statement

Correspondence theorem: ideals of $R/I$ correspond to ideals of $R$ containing $I$.

For $I\mathrel{\trianglelefteq}R$, $J\mapsto J/I$ and
$K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between
ideals $J$ of $R$ containing $I$ and ideals $K$ of $R/I$.

## Facts & Assumptions

**Given:** An ideal $I\mathrel{\trianglelefteq}R$ and $\pi:R\to R/I$.

[L1] $\pi$ is a surjective ring homomorphism with kernel $I$ ([[prop-canonical-quotient-ring-map]]).

[L2] Kernels of ring homomorphisms are ideals ([[thm-ring-homomorphism-kernel-is-an-ideal]]).

[L3] Ideals are additive subgroups with absorption ([[def-left-right-and-two-sided-ideal]]).

[L4] $R/I$ is a ring ([[thm-quotient-ring-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $J$ contains $I$, then $J/I=\pi[J]$ is an ideal of $R/I$; if $K$ is an ideal of $R/I$, then $\pi^{-1}(K)$ is an ideal containing $I$. [L1, L2, L3, L4, given, construct]

2.1 Surjectivity gives $\pi[\pi^{-1}(K)]=K$, and $I\subseteq J$ gives $\pi^{-1}(\pi[J])=J$; inclusion is preserved. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Therefore the two assignments give the claimed correspondence. [step 2.1] ∎
