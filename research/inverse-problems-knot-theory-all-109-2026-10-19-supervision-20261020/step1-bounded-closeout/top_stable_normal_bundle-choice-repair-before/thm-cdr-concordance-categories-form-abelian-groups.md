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
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles Livingston, “A Survey of Classical Knot Concordance”"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1 and Theorem 2.2"
    - title: "Arunima Ray, “Slice Knots and Knot Concordance”"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "Definition 3.5"
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, Injectivity of satellite operators in knot concordance"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "Section 1, printed pp. 1–2: the four categories, their connected-sum groups, unknot identity and reverse-mirror inverse. TOP/exotic group construction imported externally."
---

## Statement

Assume AC_ω. Under connected sum, each of C_sm, C_top, C_ex and C^{1/n} is an abelian group. The identity is the class of the unknot, and the inverse of [K] is the class of the reverse mirror of K. Each category retains the ambient and coefficient conditions in its definition.

## Statement references

[Livingston, §2.1 and Theorem 2.2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

## Facts & Assumptions

**Given:** The four concordance sets with their specified concordance relations.

[F1] The ambient and coefficient conditions defining the four concordance relations ([[def-cdr-satellite-concordance-categories]]).

[F2] The mirror-reverse connected sum K#−K bounds a ribbon disk in the standard 4-ball ([[lem-general-knot-reverse-mirror-sum-is-ribbon]]).

[F3] Connected sum is associative and commutative on oriented knot types, with the unknot identity ([[thm-oriented-knot-connected-sum-is-a-commutative-monoid]]).

[F4] Connected sum of knot concordances is the operation on concordance classes ([[def-knot-connected-sum-and-prime-knot]]).

[A1] AC_ω supplies the countable choice used by the cited ribbon and concordance constructions ([[def-countable-choice]]).

[F5] **External TOP/exotic input.** In the category conventions of [F1], connected sum descends to an abelian group on $\mathcal C_{\mathrm{top}}$ and $\mathcal C_{\mathrm{ex}}$, with unknot identity and reverse-mirror inverse. This is the group assertion in Cochran–Davis–Ray Section1, printed1–2. Its underlying TOP ambient gluing and relative-collar conclusion are imported under the run-specific external-source boundary; no new local proof of those unresolved ambient identifications is claimed. The cited CDR definitions and group assertion on printed1–2 were read directly.

## Proof

1.1 The supplied connected-sum theorem gives associativity, commutativity and the unknot identity at the level of oriented knot types. The retained standard smooth boundary-sum construction on witnessing annuli gives concordance compatibility in the standard smooth product; the TOP/exotic compatibility is the external input [F5], and the localized ambient verification is given in steps2.1–2.2 below. The knot-type isotopies themselves are admissible annuli in every category. [F1, F3, F4, F5, given, algebra]

1.2 The reverse-mirror construction in [F2] supplies an inverse annulus in the standard 4-ball, hence in the standard product, and so it is admissible in all four categories. [A1, F1, F2, given]

2.1 The external input [F5] supplies the TOP and exotic ambient gluing/compatibility assertions at exactly the definitions in [F1]. For the localized smooth category, transitivity is stacking along the marked $S^3$: Mayer–Vietoris and the two boundary homology isomorphisms give another $R_n$-homology $S^3\times I$. Reflection gives symmetry and a product gives reflexivity, all with their smooth annulus collars. [F1, F5, given, construct, algebra]

2.2 For localized connected sum choose a smooth product neighborhood $D^3\times I$ of a proper spanning arc inside each witnessing annulus, with the annulus strip in its standard local position, and remove its interior. If $Q$ is the remaining ambient piece, excision gives $H_j(W,Q;R_n)=R_n$ only for $j=3$. The map $H_3(W;R_n)\to H_3(W,Q;R_n)$ is an isomorphism: the boundary fundamental class meets the spanning arc once. The pair sequence therefore makes $Q$ an $R_n$-homology ball. Glue the two such complements on $S^2\times I$, joining the annulus strips. Mayer–Vietoris gives $R_n$ in degrees0 and3 and zero in other positive degrees; the endpoint connected-sum spheres give the degree3 generator, so each end inclusion is a homology isomorphism. The resulting smooth annulus witnesses connected-sum compatibility in the original localized category. These calculations use no homeomorphism-to-product assertion. [F1, F4, step 2.1, construct, algebra]

3.1 Thus connected sum is well defined in every category: the retained standard smooth construction handles $\mathcal C_{\mathrm{sm}}$, [F5] handles TOP/exotic, and step2.2 handles the localized case. The oriented knot connected-sum monoid [F3] descends to each quotient, giving associativity, commutativity and the unknot identity. The ribbon inverse in [F2], admissible in all four ambients, supplies the stated reverse-mirror inverse. All ambient and coefficient conditions are those of [F1]. [A1, F1, F2, F3, F5, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
