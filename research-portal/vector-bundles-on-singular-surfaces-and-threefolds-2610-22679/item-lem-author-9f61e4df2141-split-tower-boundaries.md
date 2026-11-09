---
title: Boundary maps vanish for a split tower
status: published
research_item: lem-author-9f61e4df2141-split-tower-boundaries
dependency_level: 6
---

## Prerequisites

- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting)

## Statement
Suppose a decreasing augmented tower $F^\bullet E$ is equipped with an equivalence of augmented towers to the direct-sum tail tower of [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting). Then every connecting map $\operatorname{gr}^qE\to F^{q+1}E[1]$ is zero. In particular, every connecting homomorphism on homotopy groups in the stage long exact sequences is zero.

## Facts & Assumptions
**Given:** The augmented tower and the specified equivalence of towers.

**Goal:** Prove the vanishing of its stage boundaries.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines the graded pieces as cofibers of transitions.

[F2] [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) gives zero connecting maps for the tail tower.

## Proof
1.1 The equivalence of tower diagrams identifies each transition map with the corresponding tail inclusion. Functoriality of cofiber sequences identifies the connecting map of the given transition with that of the tail inclusion. [F1, given]

2.1 The latter map is zero by [F2], including in negative filtration degrees. Applying the homotopy-group functor sends a zero map to the zero homomorphism, which proves both assertions. [F2, step 1.1] ∎
