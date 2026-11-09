---
title: The product on graded motivic groups is the source cup product
status: published
research_item: lem-author-74a9c17e63f1-graded-products
dependency_level: 15
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison)
- [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation)
- [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input)


## Statement
Assume the Axiom of Choice. Under the actual graded comparison, the filtered multiplication induces the source cup product on the page2 groups. Explicitly it gives
$$E_2^{a,b}\otimes E_2^{c,e}\longrightarrow E_2^{a+c,b+e}$$
corresponding to the motivic product of degree/weight $(a-b,-b)$ and $(c-e,-e)$. The commutativity sign is $(-1)^{(a+b)(c+e)}$, equivalently the usual cohomological cup-product sign $(-1)^{(a-b)(c-e)}$.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed size conventions of the cited constructions are inherited through [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input). They discharge that supplier’s local-realization premise at its first application below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The Axiom of Choice and the fixed size conventions of the cited constructions, together with the actual filtered algebra and its source-induced graded algebra.

**Goal:** Identify products by actual multiplication maps, not by a coincidence of additive groups.

[F1] [def-motivic-filtration](item-def-motivic-filtration) gives coherent filtered products. [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input) makes associated graded strong symmetric monoidal and supplies its actual source comparison.

[F2] [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison) specifies that comparison; [lem-author-74a9c17e63f1-index-calculation](item-lem-author-74a9c17e63f1-index-calculation) gives its page2 degree labels.

## Proof
1.1 Use the supplied realization under [A1]. Associated graded in [F1] sends filtered multiplication to actual maps $Q_r\wedge Q_t\to Q_{r+t}$. Transport these maps along the source $\gamma_r,\gamma_t,\gamma_{r+t}$; the resulting maps on the shifted motivic complexes are their specified source products by [F1], not independently chosen pairings. After taking homotopy groups the degrees add: $r=-b,t=-e$ and homotopy degrees $-a-b,-c-e$ give target weight $-b-e$ and degree $-a-b-c-e$, namely the page2 group at $(a+c,b+e)$. [A1, F1, F2]

2.1 Symmetry of sphere smash in homotopy degrees $-a-b$ and $-c-e$ contributes $(-1)^{(a+b)(c+e)}$. The shifts $2r$ and $2t$ are even, and $a+b$ has the same parity as $a-b$, likewise for $c,e$. Hence the transported sign is exactly the displayed cohomological sign. Associativity and unit maps are those of the actual graded algebra in [F1], so these are the source cup products with all indicated laws. [F1, F2, step 1.1, algebra] ∎
