---
id: thm-cdr-concordance-categories-form-abelian-groups
kind: theorem
title: "The CDR concordance categories are abelian groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-cdr-satellite-concordance-categories
  - def-countable-choice
  - def-knot-connected-sum-and-prime-knot
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - thm-oriented-knot-connected-sum-is-a-commutative-monoid
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Charles Livingston, “A Survey of Classical Knot Concordance”"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1 and Theorem 2.2"
    - title: "Arunima Ray, “Slice Knots and Knot Concordance”"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "Definition 3.5"
---

## Statement

Assume AC_ω. Under connected sum, each of C_sm, C_top, C_ex and C^{1/n} is an abelian group. The identity is the class of the unknot, and the inverse of [K] is the class of the reverse mirror of K. Each category retains the ambient and coefficient conditions in its definition.

## Statement references

[Livingston, §2.1 and Theorem 2.2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

## Facts & Assumptions

**Given:** The four concordance sets with their specified concordance relations.

[F1] The ambient and coefficient conditions defining the four concordance relations ([[def-cdr-satellite-concordance-categories]]).

[F2] The mirror-reverse connected sum K#−K bounds a ribbon disk in the standard 4-ball ([[lem-general-knot-reverse-mirror-sum-is-ribbon]]).

[F3] Connected sum is associative and commutative on oriented knot concordance classes ([[thm-oriented-knot-connected-sum-is-a-commutative-monoid]]).

[F4] Connected sum of knot concordances is the operation on concordance classes ([[def-knot-connected-sum-and-prime-knot]]).

[A1] AC_ω supplies the countable choice used by the cited ribbon and concordance constructions ([[def-countable-choice]]).

## Proof

1.1 The supplied connected-sum theorem gives associativity, commutativity and the unknot identity on knot concordance classes. Taking boundary connected sums of the witnessing annuli gives the corresponding operation in the standard smooth and locally flat products. [F1, F3, F4, given, algebra]

1.2 The reverse-mirror construction in [F2] supplies an inverse annulus in the standard 4-ball, hence in the standard product, and so it is admissible in all four categories. [A1, F1, F2, given]

2.1 For C_ex and C^{1/n}, transitivity and compatibility of boundary connected sum must be checked against the specified ambient homeomorphism and R_n-homology conditions. The definitions in [F1] alone do not prove these gluing properties, and the smooth and topological arguments in steps 1.1–1.2 do not supply the missing verification. [F1, F2, F3, F4, step 1.1, step 1.2]

## Owner escalation

The cited library theorem proves only the smooth branch and explicitly leaves the locally flat group proof incomplete; this draft adds the standard constructions but has not closed the topological microbundle or exotic/localized gluing verifications. The full four-category statement is not proved.