---
title: Reindexing cochains as chains
status: draft
research_item: lem-author-80e2d7bee57f-cochain-to-chain
dependency_level: 0
---

PDF p. 4: Shift [2j] in equation (2.1)

## Prerequisites

None.

## Statement
Let $C$ be a cochain complex of abelian groups, with differentials $d^q:C^q\to C^{q+1}$. Define a chain complex $D$ by $D_n=C^{-n}$ and $\partial_n=d^{-n}$. Then $H_n(D)=H^{-n}(C)$ naturally in $C$. Here homology and cohomology mean the kernel of the outgoing differential modulo the image of the incoming differential.

## Facts & Assumptions
**Given:** A cochain complex $C$ as stated.

**Goal:** Construct $D$ and identify its homology.

## Proof
1.1 The composite $\partial_{n-1}\partial_n=d^{-n+1}d^{-n}$ is zero, so the displayed groups and maps form a chain complex. A cochain map reindexes to a chain map. [given, construct]

2.1 At degree $n$, both the kernel and the image in the quotient $H_n(D)$ are exactly those defining $H^{-n}(C)$. The identity on representatives gives the natural isomorphism. [given, step 1.1] ∎
