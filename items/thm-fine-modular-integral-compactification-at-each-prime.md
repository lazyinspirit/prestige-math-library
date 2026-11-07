---
id: thm-fine-modular-integral-compactification-at-each-prime
kind: theorem
title: Fine modular integral compactification at each prime
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-full-level-three-punctured-projective-line-integral-model
- lem-full-level-four-punctured-projective-line-integral-model
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, modular curves; explicit integral constructions are in the named local suppliers.
dependency_level: 4
proof_strategy: direct
axiom_use: AC is assumed by both explicit modular-model inputs.
---

## Statement

Assume AC. For each prime p choose N=3 when p=2 and N=4 otherwise. There is a smooth proper curve X over `Z[1/N]`, an open subscheme Y with finite étale complement, and an elliptic curve with full level-N structure over Y. The pair Y and its elliptic curve represents the full-level-N moduli functor on locally Noetherian `Z[1/N]`-schemes. In particular X and Y have good smooth fibres at p. This asserts the two selected levels, not a compatible system of all full levels, an elliptic extension across the boundary, or a cohomological comparison.

## Facts & Assumptions

**Given:** AC and a prime p.

[F1] The full-level-three fine model is `P¹_R` minus four disjoint sections over `R=Z[1/3,a]/(a²−a+1)`, with a smooth proper integral compactification. [[lem-full-level-three-punctured-projective-line-integral-model]]

[F2] The full-level-four fine model is `P¹_R` minus six disjoint sections over `R=Z[1/2,i]/(i²+1)`, with a smooth proper integral compactification. [[lem-full-level-four-punctured-projective-line-integral-model]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** choose the explicit level prime to p.

1.1 If p=2, take N=3 and apply [F1]. The coefficient ring in [F1] is finite étale over `Z[1/3]`, so the four disjoint boundary sections form a finite étale closed subscheme over that base. Since 2 is not inverted, the proper curve and its open have smooth fibres at p. [F1, F3, given, algebra]

1.2 If p is odd, take N=4 and apply [F2] over `Z[1/4]=Z[1/2]`. Its coefficient ring is finite étale and the six disjoint boundary sections form a finite étale closed subscheme. Since p is not inverted, the proper curve and its open have smooth fibres at p, including p=3. [F2, F3, given, algebra]

2.1 In both cases the universal elliptic curve and the moduli equivalence are exactly those of the cited supplier. No assertion that the elliptic curve extends across the boundary, that these two levels form the full Hecke-compatible tower, or that cohomology comparisons hold is used. [F1, F2, F3, step 1.1, step 1.2, given, algebra] ∎

## Source and authoring record

This theorem combines only the two explicit integral models. It does not supply modular-cohomology comparison, the all-level tower, or Weil II.
