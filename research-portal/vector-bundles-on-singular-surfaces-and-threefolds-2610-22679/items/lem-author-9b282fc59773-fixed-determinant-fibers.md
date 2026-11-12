---
id: lem-author-9b282fc59773-fixed-determinant-fibers
kind: lemma
title: Fixed determinant isolates the actual Chern fiber
status: published
domain: mathematics
deps:
  - def-author-9b282fc59773-chern-map-and-fibers
  - math:def-injection-surjection-bijection
  - math:def-axiom-of-choice
dependency_roles:
  def-author-9b282fc59773-chern-map-and-fibers: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
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
dependency_level: 15
formulation_deps:
  - def-author-9b282fc59773-chern-map-and-fibers
  - math:def-injection-surjection-bijection
  - math:def-axiom-of-choice
argument_deps:
  - def-author-9b282fc59773-chern-map-and-fibers
  - math:def-injection-surjection-bijection
  - math:def-axiom-of-choice
---

## Statement
Use the Choice and universe conventions of the supplied Chern-map construction. For the map $C_X$ and subsets just defined, the fiber $C_X^{-1}(L,a)$ is exactly $V_{L,a}$. The map $C_X$ is bijective if and only if for every line-bundle class $L$ and every class $a\in\mathrm{CH}^2(X)$ the set $V_{L,a}$ has exactly one element. This classification forgets every choice of an isomorphism $\det E\cong L$.

## Statement references
[[def-author-9b282fc59773-chern-map-and-fibers]]

[[math:def-injection-surjection-bijection]]

## Facts & Assumptions
**Given:** $X$, $V=\mathrm{Vect}_2(X)$, $T=\operatorname{Pic}(X)\times\mathrm{CH}^2(X)$, $C_X:V\to T$ and $V_{L,a}$ from [F1], including the supplier's Choice and universe assumptions.

**Goal:** Identify the fibers and the exact existence-and-uniqueness criterion.

[A1] Retain the Axiom of Choice and the separate universe-existence assumptions of [F1] for the supplied bundle-class and Chern constructions. The fiber calculation and existence-and-uniqueness argument below require no further selection. [[math:def-axiom-of-choice]] [[def-author-9b282fc59773-chern-map-and-fibers]]

[F1] $C_X([E])=([\det E],c_2(E))$, and $V_{L,a}$ imposes these two equalities on bundle isomorphism classes. These are sets under the supplied Choice and universe assumptions, and both invariants are well-defined on isomorphism classes. A determinant isomorphism to $L$ means an isomorphism to a representative line bundle of that class; no such isomorphism is included in an element of $V_{L,a}$. [[def-author-9b282fc59773-chern-map-and-fibers]]

[F2] For a map $f:S\to T$ and $y\in T$, write $f^{-1}(y)=f^{-1}[\{y\}]=\{s\in S:f(s)=y\}$ for the preimage of the singleton. Injectivity means that $f(s)=f(s\prime)$ forces $s=s\prime$; surjectivity means that every $y\in T$ has a preimage; bijectivity means both properties. [[math:def-injection-surjection-bijection]]

## Proof
1.1 An element $e$ belongs to $C_X^{-1}(L,a)$ precisely when both coordinates of $C_X(e)$ equal the displayed coordinates. The first equality says $e\in V_L$, and the second says $e\in V_{L,a}$. This proves equality of the two subsets, without adding a determinant isomorphism to their elements. [A1, F1, F2, given]

2.1 If all these fibers have one element, every target pair has a preimage and any two elements with equal images lie in the same singleton fiber; hence $C_X$ is surjective and injective. Conversely, a bijection has exactly one preimage for each target element. Step 1.1 translates that fact to the asserted sets. [F2, step 1.1, given] ∎
