---
id: lem-author-9b282fc59773-fixed-determinant-fibers
kind: lemma
title: Fixed determinant isolates the actual Chern fiber
status: published
domain: mathematics
deps:
  - def-author-9b282fc59773-chern-map-and-fibers
dependency_roles:
  def-author-9b282fc59773-chern-map-and-fibers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds
      url: https://arxiv.org/pdf/1204.0770v5
      locator: Theorem 1, p. 2; §6, pp. 22–26
dependency_level: 13
---

## Statement
For the map $C_X$ and subsets just defined, the fiber $C_X^{-1}(L,a)$ is exactly $V_{L,a}$. The map $C_X$ is bijective if and only if for every line-bundle class $L$ and every class $a\in\mathrm{CH}^2(X)$ the set $V_{L,a}$ has exactly one element. This classification forgets every choice of an isomorphism $\det E\cong L$.

## Statement references
[[def-author-9b282fc59773-chern-map-and-fibers]]

## Facts & Assumptions
**Given:** $X$, $C_X$ and $V_{L,a}$ from [F1].

**Goal:** Identify the fibers and the exact existence-and-uniqueness criterion.

[F1] $C_X([E])=([\det E],c_2(E))$, and $V_{L,a}$ imposes these two equalities on bundle isomorphism classes. [[def-author-9b282fc59773-chern-map-and-fibers]]

## Proof
1.1 An element $e$ belongs to $C_X^{-1}(L,a)$ precisely when both coordinates of $C_X(e)$ equal the displayed coordinates. The first equality says $e\in V_L$, and the second says $e\in V_{L,a}$. This proves equality of the two subsets, without adding a determinant isomorphism to their elements. [F1, given]

2.1 If all these fibers have one element, every target pair has a preimage and any two elements with equal images lie in the same singleton fiber; hence $C_X$ is surjective and injective. Conversely, a bijection has exactly one preimage for each target element. Step 1.1 translates that fact to the asserted sets. [step 1.1, given] ∎
