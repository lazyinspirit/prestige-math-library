---
title: Irreducible rank-three reflection-arrangement counts
status: published
research_item: prop-rank-three-reflection-counts-artin-tits-normalisers
dependency_level: 5
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 28; §7.1, paragraph following Figure 1
      statement: An irreducible finite real reflection arrangement in dimension three
        has $6$, $9$ or $15$ hyperplanes, corresponding respectively to types
        $A_3$, $B_3$ and $H_3$.
      hypotheses: An irreducible finite real reflection arrangement in a
        three-dimensional real vector space; irreducible means no nontrivial
        linear product decomposition, as made explicit in the local
        invariant-metric prerequisite.
      reading_limits: Original frozen Step-2 attribution retained for the statement at
        §7.1 after Figure 1; no fresh reading of the original article is claimed
        here. The proof below uses independent Davis input and exact library
        suppliers, not this original-article citation.
---

PDF p. 28: ` §7.1, paragraph following Figure 1 `

## Prerequisites

- [def-hyperplane-arrangement-artin-tits-normalisers](item-def-hyperplane-arrangement-artin-tits-normalisers)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [lem-author-fcf1e9b45588-invariant-metric-essentiality](item-lem-author-fcf1e9b45588-invariant-metric-essentiality)
- [lem-author-fcf1e9b45588-chamber-wall-rank](item-lem-author-fcf1e9b45588-chamber-wall-rank)
- [lem-author-fcf1e9b45588-diagram-connectedness](item-lem-author-fcf1e9b45588-diagram-connectedness)
- [lem-author-fcf1e9b45588-mirror-reflection-bijection](item-lem-author-fcf1e9b45588-mirror-reflection-bijection)
- [lem-author-fcf1e9b45588-rank-three-reflection-cardinalities](item-lem-author-fcf1e9b45588-rank-three-reflection-cardinalities)
- [math:thm-cg-finite-coxeter-classification-including-h-and-dihedral](https://alphabetamath.cc/item/thm-cg-finite-coxeter-classification-including-h-and-dihedral)


## Statement

An irreducible finite real reflection arrangement in dimension three has $6$, $9$ or $15$ hyperplanes, corresponding respectively to types $A_3$, $B_3$ and $H_3$. Here a finite real reflection arrangement is the full arrangement of a finite linear reflection group, and irreducibility excludes nontrivial product decompositions, including an empty positive-dimensional factor, as in the local prerequisites.

## Facts & Assumptions

[F1] For an essential finite real reflection group, the reflections in the walls of a chamber form a Coxeter generating set of cardinality equal to the dimension ([lem-author-fcf1e9b45588-chamber-wall-rank](item-lem-author-fcf1e9b45588-chamber-wall-rank)). In the irreducible three-dimensional case its Coxeter diagram is connected ([lem-author-fcf1e9b45588-diagram-connectedness](item-lem-author-fcf1e9b45588-diagram-connectedness)).

[F2] A connected finite rank-three Coxeter system has type $A_3$, $B_3$ or $H_3$ ([math:thm-cg-finite-coxeter-classification-including-h-and-dihedral](https://alphabetamath.cc/item/thm-cg-finite-coxeter-classification-including-h-and-dihedral), part (1)).

[F3] For an essential finite real reflection group with its chamber-wall Coxeter system, the arrangement hyperplanes biject with the Coxeter reflections ([lem-author-fcf1e9b45588-mirror-reflection-bijection](item-lem-author-fcf1e9b45588-mirror-reflection-bijection)).

[F4] The reflection cardinalities for those three types are $6$, $9$ and $15$ ([lem-author-fcf1e9b45588-rank-three-reflection-cardinalities](item-lem-author-fcf1e9b45588-rank-three-reflection-cardinalities)).

[F5] The full reflection-arrangement and product-decomposition conventions, the invariant metric, and essentiality under irreducibility and $\dim E>1$ are supplied by [lem-author-fcf1e9b45588-invariant-metric-essentiality](item-lem-author-fcf1e9b45588-invariant-metric-essentiality).

## Proof
**Given:** An irreducible finite real reflection arrangement $\mathcal A(W)$ on a three-dimensional real space, with hyperplanes as in [def-hyperplane-arrangement-artin-tits-normalisers](item-def-hyperplane-arrangement-artin-tits-normalisers) and reflection, product and irreducibility conventions as in [lem-author-fcf1e9b45588-invariant-metric-essentiality](item-lem-author-fcf1e9b45588-invariant-metric-essentiality). Chambers, walls and the chamber-wall Coxeter system use [lem-author-fcf1e9b45588-chamber-wall-rank](item-lem-author-fcf1e9b45588-chamber-wall-rank); Coxeter diagrams and their types use [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers). **Goal:** Determine all possible types and hyperplane counts.


**Proof technique:** direct.

1.1 Since the given arrangement is irreducible and $\dim E=3>1$, [F5] supplies a $W$-invariant positive-definite inner product and essentiality $E^W=0$. Thus [F1] applies: the chamber-wall Coxeter system has rank three and connected diagram. The underlying group is finite by the definition of a finite real reflection arrangement, so this system satisfies [F2]. Reading the rank-three members of the classification leaves precisely $A_3$, $B_3$ and $H_3$; the other listed irreducible types have different ranks. [given, F5, F1, F2]

2.1 Essentiality and the chamber-wall Coxeter system established in step 1.1 satisfy the hypotheses of [F3]. Therefore the number of original geometric hyperplanes equals the cardinality of the abstract reflection set of that Coxeter system. Applying [F4] in the three cases gives respectively $6$, $9$ and $15$. This proves the retained statement, with the rank, irreducibility and counting bridge supplied explicitly. [step 1.1, F3, F4] ∎
