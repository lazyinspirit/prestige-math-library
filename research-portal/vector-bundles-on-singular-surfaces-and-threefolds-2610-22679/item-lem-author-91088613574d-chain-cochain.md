---
title: Reindexing a chain complex cohomologically
status: published
research_item: lem-author-91088613574d-chain-cochain
dependency_level: 0
---

PDF p. 4: Property (4): cycle-complex convention

## Prerequisites

None.

## Statement
Let C be a chain complex of abelian groups, with differential d from $C_n$ to $C_{n-1}$. Define the cochain complex $C^\vee$ by $(C^\vee)^q$ = $C_{-q}$, with differential d in each degree. Then $H^q(C^\vee)$ is canonically $H_{-q}(C)$.

A chain complex has consecutive differentials whose composite is zero; its homology is the kernel modulo the image. A cochain complex is defined analogously, with differential increasing degree, and its cohomology is the corresponding kernel modulo image.

## Facts & Assumptions
**Given:** A chain complex C and an integer q.

**Goal:** Identify the cohomology of its reindexing with its homology.

## Proof
1.1 The reindexed differential goes from $C_{-q}$ to $C_{-q-1}$, and its square is zero because d squared is zero in C. Thus $C^\vee$ is a cochain complex. [given, construct]

2.1 Its degree-q kernel and incoming image are exactly the degree-(−q) cycles and boundaries of C. Their quotients are therefore identical, giving the claimed canonical isomorphism. [given, step 1.1] ∎
