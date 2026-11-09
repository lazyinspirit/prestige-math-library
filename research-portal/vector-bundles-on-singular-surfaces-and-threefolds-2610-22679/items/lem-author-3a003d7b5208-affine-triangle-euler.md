---
id: lem-author-3a003d7b5208-affine-triangle-euler
kind: lemma
title: Affine perfect triangle classes and bundle Euler classes
status: draft
domain: mathematics
deps:
  - def-scheme-perfect-complexes
  - math:thm-perfect-complex-k-zero-agrees-with-projective-k-zero
  - lem-author-3a003d7b5208-affine-bundle-split-group
  - lem-author-3a003d7b5208-exact-equivalence-k-zero
  - math:def-axiom-of-choice
dependency_roles:
  def-scheme-perfect-complexes: mathematical-premise
  math:thm-perfect-complex-k-zero-agrees-with-projective-k-zero: mathematical-premise
  lem-author-3a003d7b5208-affine-bundle-split-group: mathematical-premise
  lem-author-3a003d7b5208-exact-equivalence-k-zero: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Lemma 15.121.1, current online text read 2026-11-09
      url: https://stacks.math.columbia.edu/tag/0AFY
proof_strategy: direct
dependency_level: 5
---

## Statement
Assume AC and suitable universes. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$. The triangle Grothendieck group of the homotopy category of $\operatorname{Perf}(X)$ is isomorphic to the vector-bundle Grothendieck group of $X$. Under this isomorphism, the class of the associated sheaf complex of a bounded finite-projective complex $P$ maps to $\sum_n(-1)^n[\widetilde{P^n}]$, and the class of a degree-zero bundle complex $E[0]$ maps to $[E]$.

Here $\operatorname{Perf}(X)$ is the full stable derived subcategory of locally perfect complexes. The triangle group uses one additive relation for each distinguished triangle; the vector-bundle group uses short exact sequence relations. A bounded complex has only finitely many nonzero terms. No Noetherian or regularity hypothesis is imposed.

## Statement references

[[def-scheme-perfect-complexes]]

[[lem-author-3a003d7b5208-affine-bundle-split-group]]

## Facts & Assumptions
**Given:** AC, suitable universes, $A$ and $X$ as stated. AC carries the supplied enhanced affine and bundle comparisons in [F1] and [F3]; the group-presentation argument makes no additional choice.

**Goal:** Compose the affine derived equivalence with the Euler and bundle comparisons.

[F1] Degreewise associated sheaf gives an exact equivalence $\operatorname{Perf}(A)\simeq\operatorname{Perf}(X)$; the former consists of objects represented by bounded finite-projective $A$-complexes. [[def-scheme-perfect-complexes]]

[F2] Degree-zero inclusion induces an isomorphism from the split group of finite projective $A$-modules to the triangle group of $\operatorname{Perf}(A)$. Its inverse sends $P$ to $\sum_n(-1)^n[P^n]$. This holds for every unital associative ring. [[math:thm-perfect-complex-k-zero-agrees-with-projective-k-zero]]

[F3] Associated sheaf identifies the finite-projective split group with the vector-bundle group. [[lem-author-3a003d7b5208-affine-bundle-split-group]]

[F4] An exact equivalence induces an isomorphism on triangle groups. [[lem-author-3a003d7b5208-exact-equivalence-k-zero]]

## Proof
1.1 By [F1] and [F4], associated sheaf induces an isomorphism of the triangle groups of $\operatorname{Perf}(A)$ and $\operatorname{Perf}(X)$. Invert it, compose with the inverse of the degree-zero isomorphism in [F2], and then with [F3]. This constructs the asserted isomorphism. [F1, F2, F3, F4, construct]

2.1 The inverse affine equivalence takes the associated sheaf complex of $P$ to $P$. Its Euler class under [F2] is $\sum_n(-1)^n[P^n]$, and [F3] sends each term to $[\widetilde{P^n}]$, proving the formula. [F1, F2, F3, step 1.1]

3.1 Every bundle $E$ is isomorphic to $\widetilde P$ for a finite projective $P$ by [F3]. Apply step 2.1 with $P$ concentrated in degree zero: $[E[0]]$ maps to $[E]$. This is independent of the representative because step 1.1 is a well-defined group isomorphism. [F3, step 1.1, step 2.1] ∎

## Source notes
The current online Stacks tag 0AFY, Lemma 15.121.1, has a missing exponent in the first sum of its acyclic-complex display: the intended term is $(-1)^n[M^n]$. For the identity complex $\mathbb Z\to\mathbb Z$ in degrees zero and one, the literal unweighted negative sum is $-2[\mathbb Z]$ rather than zero. This localized source typo does not refute Lemma 15.121.2 or [F2], whose supplied local proof uses the alternating Euler class. This affine result does not assert global vector-bundle representation of perfect classes on arbitrary qcqs schemes.
