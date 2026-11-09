---
id: lem-author-9415fc97ee80-relative-empty-split-cases
kind: lemma
title: Relative objects for empty and split pairs
status: draft
domain: mathematics
deps:
  - lem-author-9415fc97ee80-relative-cone-quotient-model
  - lem-author-9415fc97ee80-contravariant-relative-hom
dependency_roles:
  lem-author-9415fc97ee80-relative-cone-quotient-model: mathematical-premise
  lem-author-9415fc97ee80-contravariant-relative-hom: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement
For a cochain complex $B$, the relative cone of $\operatorname{id}_B$ is contractible and that of $0\to B$ is $B$. For the split inclusion $A\to A\oplus B$, $a\mapsto(a,0)$, its cone is quasi-isomorphic to $B$. Dually the support fibers of $\operatorname{id}_C:C\to C$, $C\to0$ and $C\oplus D\to C$ are respectively zero, $C$ and $D$ in the derived category.

Thus whenever a motive-valued or coefficient-complex-valued functor is separately known to take the empty scheme to zero, the pair with empty support has zero relative/support object and the pair with full support has the whole object. If finite disjoint unions are additionally known to become direct sums, the relative/support object of the split pair $X=U\coprod Z$ is the $Z$ summand. These are formal boundary cases and do not prove purity for a positive-codimension smooth pair.

## Facts & Assumptions

**Given:** The displayed complexes and maps; the functorial applications assume exactly the stated empty-value and, for the split case, direct-sum property.

**Goal:** Compute these special cases without invoking any Gysin statement.

[F1] The relative cone is $\operatorname{Cone}(f)^n=B^n\oplus A^{n+1}$ with the differential already established. [[lem-author-9415fc97ee80-relative-cone-quotient-model]]

[F2] A contravariant enhanced Hom sends such a cofiber to the corresponding restriction fiber whenever that enhancement is supplied. [[lem-author-9415fc97ee80-contravariant-relative-hom]]

## Proof

1.1 For $f=\operatorname{id}_B$, the contraction $h(b_0,b_1)=(0,b_0)$ satisfies $dh+hd=\operatorname{id}$ by the calculation in [F1]. For $f:0\to B$, its cone formula has no second summand and is exactly $B$. For the split inclusion, $f$ is termwise injective and its quotient is $B$, so the quotient conclusion of [F1] gives the claimed quasi-isomorphism. [F1, algebra]

2.1 The explicit fiber of a map is its cone shifted by $-1$, up to the standard sign identification. Thus the fiber of an identity is zero and that of $C\to0$ is $C$. For the projection $C\oplus D\to C$, its fiber is $D$ plus the contractible fiber of the identity of $C$, as is seen directly by separating the three coordinates of its cone. Hence it is isomorphic to $D$ in the derived category. These results also agree with [F2] in its specified enhanced setting. [F1, F2, step 1.1, algebra]

3.1 Substitute the restriction or inclusion maps of the stated pairs only when the functor's empty-value and disjoint-union properties have been supplied. They become exactly the maps computed in steps 1.1 through 2.1. This proves the conditional applications and shows that none uses the positive-codimension purity theorem it is intended to accompany. [given, step 1.1, step 2.1] ∎
