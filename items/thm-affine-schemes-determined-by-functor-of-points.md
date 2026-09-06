---
id: thm-affine-schemes-determined-by-functor-of-points
kind: theorem
title: "An affine scheme is determined by its functor of points"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-of-points-affine-scheme, thm-yoneda-lemma-is-natural-in-both-variables, cor-affine-scheme-isomorphism-ring-isomorphism]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.82--10.83"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Statement

If $X$ and $Y$ are affine schemes and $h_X\cong h_Y$ naturally as functors on
commutative rings, then $X\cong Y$ as schemes.

## Facts & Assumptions

**Given:** Affine schemes $X,Y$ and a natural isomorphism $h_X\cong h_Y$.

[F1] Yoneda identifies natural transformations between representable functors
with morphisms between their representing objects
([[thm-yoneda-lemma-is-natural-in-both-variables]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the natural isomorphism and its inverse are induced by morphisms $X\to Y$ and $Y\to X$. [F1]

1.2 Their composites induce identity natural transformations, so faithfulness in [F1] makes both composites identity morphisms. [F1]

2.1 The two morphisms are inverse scheme isomorphisms. [step 1.1, step 1.2] ∎
 
