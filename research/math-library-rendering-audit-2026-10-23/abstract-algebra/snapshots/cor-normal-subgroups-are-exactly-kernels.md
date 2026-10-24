---
id: cor-normal-subgroups-are-exactly-kernels
kind: corollary
title: 'A subgroup is normal if and only if it is the kernel of a group homomorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-image-subgroup-and-kernel-normal, prop-canonical-quotient-map, def-kernel-and-image-of-group-homomorphism, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Milne, Group Theory, Kernels and Quotients"
      url: "https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/01%3A_Basic_Definitions_and_Results/1.08%3A_Kernels_and_quotients"
pipeline_run: null
---

## Statement

A subgroup is normal if and only if it is the kernel of a group homomorphism.

Let $N\le G$. Then $N\mathrel{\trianglelefteq}G$ exactly when there are a group
$H$ and a homomorphism $f:G\to H$ with $\ker f=N$.

## Facts & Assumptions

**Given:** A subgroup $N\le G$.

[L1] The kernel of every group homomorphism is normal ([[thm-image-subgroup-and-kernel-normal]]).

[L2] If $N\mathrel{\trianglelefteq}G$, the canonical map $\pi:G\to G/N$ is a homomorphism with kernel $N$ ([[prop-canonical-quotient-map]]).

[L3] The kernel of $f$ consists of the elements sent to the identity ([[def-kernel-and-image-of-group-homomorphism]]).

[L4] Normality means invariance under conjugation ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 If $N=\ker f$ for a homomorphism, then $N$ is normal by [L1]. [L1, L2, L3, L4, given]

2.1 If $N$ is normal, [L2] supplies the quotient homomorphism $\pi$ and gives $\ker\pi=N$. [step 1.1, L1, L2, L3, L4, given]

3.1 Thus normal subgroups are exactly kernels. [step 1.1, step 2.1] ∎
