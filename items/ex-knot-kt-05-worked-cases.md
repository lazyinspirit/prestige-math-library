---
id: ex-knot-kt-05-worked-cases
kind: example
title: Connected-sum genus and ribbon examples
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - thm-knot-genus-additive-under-connected-sum
  - lem-right-trefoil-has-genus-one
  - lem-knot-genus-invariant-under-mirror-and-reversal
  - lem-knot-reverse-mirror-connected-sum-is-ribbon
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Charles Livingston, A Survey of Classical Knot Concordance,
        arXiv:math/0307077v4
      url: https://arxiv.org/pdf/math/0307077v4
      locator: §2.1, Definition 2.3, printed p.4; radial Morse function with no
        interior local maxima
    - title: Burde and Zieschang, Knots, 2nd revised and extended edition
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf
      locator: Chapter 7, Proposition 7.4, printed pp.93–94
    - title: Brendan Owens and Frank Swenton, An Algorithm to Find Ribbon Disks for
        Alternating Knots
      url: https://eprints.gla.ac.uk/287761/1/287761.pdf
      locator: Proposition 4.2, printed pp.21–22
---

## Example

Assume full AC. Let $T$ be the standard right-handed trefoil, let $T^*$ be its image under a fixed orientation-reversing reflection of $S^3$, and let $-T^*$ denote reversal of that image's knot orientation. Then $g(T\#T)=2$ and $g(T\#(-T^*))=2$. The knot $T\#(-T^*)$ bounds a smooth ribbon disk in $B^4$, meaning a smooth properly embedded disk whose radial-height function has no interior local maxima; in particular it bounds a smooth properly embedded disk and is smoothly slice.

## Example references

[[def-knot-connected-sum-and-prime-knot|Connected sum and knot orientation conventions]]

## Facts & Assumptions

**Given:** Full AC, the standard right-handed trefoil, its reverse mirror, and the stated connected-sum operations.

[F1] The trefoil genus is exactly $1$. ([[lem-right-trefoil-has-genus-one]])

[F2] Genus is additive under connected sum. ([[thm-knot-genus-additive-under-connected-sum]])

[F3] Mirroring and reversing orientation preserve genus. ([[lem-knot-genus-invariant-under-mirror-and-reversal]])

[F4] The trefoil sum with its reverse mirror bounds a smooth ribbon disk. ([[lem-knot-reverse-mirror-connected-sum-is-ribbon]])

[A1] Full AC is the choice-function axiom. ([[def-axiom-of-choice]])

[A2] Full AC implies AC$_\omega$. ([[thm-choice-implies-dependent-implies-countable-choice]])

[A3] The ribbon convention excludes interior radial maxima; index-zero minima and index-one saddles are allowed.

## Verification

**Given:** Full AC and the two connected sums in the statement.

1.1 By [F1], $g(T)=1$, and by [F3], $g(-T^*)=1$. Full AC implies the AC$_\omega$ hypothesis of [F2] by [A2], so additivity gives $g(T\#T)=1+1=2$ and $g(T\#(-T^*))=1+1=2$. [given, F1, F2, F3, A1, A2, algebra]

2.1 By [F4], $T\#(-T^*)$ bounds a smooth ribbon disk. A ribbon disk is in particular a smooth properly embedded disk, so the knot is smoothly slice. The explicit doubled-arc disk has no interior radial maxima, as required by the stated convention. [given, F4, A3] ∎

## Sources

[[lem-right-trefoil-has-genus-one]]

[[thm-knot-genus-additive-under-connected-sum]]

[[lem-knot-genus-invariant-under-mirror-and-reversal]]

[[lem-knot-reverse-mirror-connected-sum-is-ribbon]]
