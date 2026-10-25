---
id: thm-quotient-group-universal-property
kind: theorem
title: 'A homomorphism that kills a normal subgroup factors uniquely through the quotient group'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-group, prop-canonical-quotient-map, def-kernel-and-image-of-group-homomorphism, lem-equal-images-iff-same-kernel-coset, def-group-homomorphism]
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
    - title: "Milne, Group Theory, Kernels and Quotients"
      url: "https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/01%3A_Basic_Definitions_and_Results/1.08%3A_Kernels_and_quotients"
pipeline_run: null
---

## Statement

A homomorphism that kills a normal subgroup factors uniquely through the quotient group.

If $N\mathrel{\trianglelefteq}G$, $f:G\to H$ is a homomorphism, and
$N\subseteq\ker f$, then there is a unique homomorphism $\bar f:G/N\to H$
such that $\bar f(gN)=f(g)$ and $f=\bar f\circ\pi$.

## Facts & Assumptions

**Given:** $N\mathrel{\trianglelefteq}G$, a homomorphism $f:G\to H$, and $N\subseteq\ker f$.

[L1] $G/N$ is the group of cosets of a normal subgroup ([[def-quotient-group]]).

[L2] The quotient map $\pi(g)=gN$ is a surjective homomorphism ([[prop-canonical-quotient-map]]).

[L3] $N\subseteq\ker f$ means that $f(n)=e_H$ for every $n\in N$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L4] Equal kernel cosets have equal images under a homomorphism ([[lem-equal-images-iff-same-kernel-coset]]).

[L5] A group homomorphism preserves products ([[def-group-homomorphism]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\bar f(gN):=f(g)$; if $gN=hN$, then $h^{-1}g\in N\subseteq\ker f$, so [L4] proves that this value is independent of the representative. [L1, L2, L3, L4, L5, given, construct]

2.1 For cosets, $\bar f((gN)(hN))=f(gh)=f(g)f(h)$, and $f(g)=\bar f(\pi(g))$. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 The surjectivity used in step 2.1 forces any such factor map to have these values, hence proves uniqueness. [step 2.1] ∎
