---
title: The source Chern classes are the supplied projective-relation classes
status: published
research_item: lem-author-4f94f7982b0d-relation-comparison
dependency_level: 17
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model)
- [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation)
- [thm-author-4f94f7982b0d-non-a1-whitney-input](item-thm-author-4f94f7982b0d-non-a1-whitney-input)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-chern-relation-uniqueness](item-lem-chern-relation-uniqueness)


## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the supplied motivic constructions. Let $k$ be a field, $S$ a qcqs $k$-scheme, $Y$ a smooth qcqs $S$-scheme, and $V$ a finite locally free sheaf of constant rank $r\geq0$ on $Y$. Use the supplied non-$\mathbb A^1$ EM model $\mathcal E_S$ with its actual additive orientation and natural diagonal identifications $\mathcal E_S^{2i,i}(Y)\cong H^{2i,i}_{\mathrm{mot}}(Y,\mathbb Z)$ for $i\geq0$.

For $r>0$ the coefficients of Annala–Iwasa Definition 4.4.1 agree under these identifications with the supplied projective-relation coefficients $c_i(V)$. Extend the source-side polynomial by zero coefficients above rank and, for the zero bundle, by $\widetilde c_t(0)=1$. With these explicit local conventions the agreement holds for every $i\geq0$ and every constant rank, including zero. Definition 4.4.1 itself starts at positive rank. For a line the first coefficient is the original additive EM orientation and all higher coefficients are zero.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated site-size and universe bounds. This supplies the foundational hypotheses of the model and Chern-coefficient constructions invoked in steps 1.1 and 2.1; no additional bundle or affine-torsor choices are made here.

[F1] [thm-author-4f94f7982b0d-non-a1-whitney-input](item-thm-author-4f94f7982b0d-non-a1-whitney-input) specifies the source quotient-projective relation. [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model) and [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation) identify its groups, products and actual first class.

[F2] [def-motivic-chern-classes](item-def-motivic-chern-classes) and [lem-chern-relation-uniqueness](item-lem-chern-relation-uniqueness) give the unique coefficients of the supplied quotient-projective relation, including rank-zero conventions.

## Proof
**Given:** $k,S,Y,V$, the Axiom of Choice and the stated bounds, and the explicit source-side extensions in the statement.

**Goal:** Identify the actual coefficients and signs.

1.1 For $r>0$ the source relation is $\sum_{j=0}^r(-1)^j\xi^j\pi^*\widetilde c_{r-j}(V)=0$, with $\widetilde c_0=1$. Multiply by $(-1)^r$ and set $i=r-j$. It becomes $\xi^r+\sum_{i=1}^r(-1)^i\pi^*\widetilde c_i(V)\xi^{r-i}=0$. The orientation and quotient $\mathcal O(1)$ are the same by [F1]. Hence coefficient uniqueness in [F2] gives $\widetilde c_i(V)=c_i(V)$ for $1\leq i\leq r$; both zeroth coefficients are the unit. [A1, F1, F2, given]

2.1 For rank1, the quotient projective bundle is $Y$, its tautological quotient is $V$, and the relation is $\xi-c_1(V)=0$. It therefore identifies the first coefficient with the original orientation, which is additive under tensor product. Above positive rank the declared zero-coefficient extension agrees with the supplied convention. In rank zero the source-side series is $1$ by our explicit local extension of Definition 4.4.1, and the supplied series is $1$ by [F2]; no relation on the empty projective bundle is used. These statements identify the whole actual series, with no virtual extension used. [A1, F1, F2, step 1.1] ∎
