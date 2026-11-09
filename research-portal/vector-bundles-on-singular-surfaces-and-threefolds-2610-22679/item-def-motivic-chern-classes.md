---
title: Motivic Chern classes
status: published
research_item: def-motivic-chern-classes
dependency_level: 14
---

PDF p. 2: Displayed motivic Chern classes; PDF p. 8: Section 3, first display

## Prerequisites

- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [lem-chern-relation-uniqueness](item-lem-chern-relation-uniqueness)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Definition
Assume the Axiom of Choice and the suitable universes used by the supplied constructions. Let $k$ be a field, $X$ a quasi-compact quasi-separated $k$-scheme, and $E$ a vector bundle of constant rank $n\geq 0$ on $X$. A vector bundle means a finite locally free $\mathcal O_X$-module. Write $H^{a,b}(X)$ for the supplied integral motivic cohomology $H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)$, with its natural bigraded ring structure.

If $n>0$, let $\pi:\mathbb P_X(E)\to X$ be the projective bundle of rank-one quotients of $E$, let $\mathcal O(1)$ be its tautological quotient line bundle, and put $\xi=c_1(\mathcal O(1))\in H^{2,1}(\mathbb P_X(E))$, using the supplied orientation on line bundles. Define the **motivic Chern classes** $c_i(E)\in H^{2i,i}(X)$ for $1\leq i\leq n$ as the unique coefficients satisfying
$$\xi^n+\sum_{i=1}^{n}(-1)^i\pi^*c_i(E)\,\xi^{n-i}=0.$$
Set $c_0(E)=1\in H^{0,0}(X)$ and $c_i(E)=0$ for $i>n$. For the rank-zero bundle use the same conventions $c_0(E)=1$ and $c_i(E)=0$ for $i>0$, without using a projective bundle. The **total Chern series** of an actual bundle is $c_t(E)=\sum_{i\geq0}c_i(E)t^i$, a polynomial with constant term one.

For every $i\geq0$ this construction defines a map $c_i:\mathrm{Vect}_n(X)\to H^{2i,i}(X)$, where $\mathrm{Vect}_n(X)$ is the set of isomorphism classes of rank-$n$ bundles. It is natural under pullback of $k$-schemes. These definitions apply to singular as well as smooth schemes. The article also uses total Chern classes of virtual bundle classes; their extension and its Whitney identity are supplied separately and are not part of this definition.

## Facts & Assumptions

**Given:** A field $k$, a qcqs $k$-scheme $X$, a constant-rank bundle $E$, the Axiom of Choice and the suitable universes of the supplied constructions.

**Goal:** Define the stated coefficients and justify their existence, uniqueness, invariance under bundle isomorphism and pullback naturality.

[A1] Assume the Axiom of Choice, as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). This discharges the Choice hypotheses of the projective-bundle and coefficient-uniqueness suppliers [F1] and [F2] in steps 1.1–3.1, and of the bundle-class supplier [F3] in step 2.1.

[F1] The supplied motivic cohomology, extended by zero in negative weights, is an additively oriented bigraded theory on qcqs $k$-schemes. For a positive-rank bundle its quotient projective bundle has the projective-bundle isomorphism in every bidegree, with powers of the first Chern class of the tautological quotient line. Pullbacks preserve the unit and ring operations. [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)

[F2] In such a theory, for a rank-$n>0$ bundle the displayed monic relation has unique coefficients in the stated bidegrees, and those coefficients commute with pullback. The rank-zero convention is preserved by pullback. [lem-chern-relation-uniqueness](item-lem-chern-relation-uniqueness)

[F3] A vector bundle is finite locally free; $\mathrm{Vect}_n(X)$ is the set of isomorphism classes of rank-$n$ bundles. [def-vector-bundle-classes](item-def-vector-bundle-classes)

## Justification

1.1 The hypotheses of [F1] and [F2] hold for $X$ and $E$. When $n>0$, [F2] therefore supplies exactly one coefficient $c_i(E)$ in each indicated bidegree satisfying the displayed relation. The unit and zero classes used for $c_0$ and for indices above the rank exist in the bigraded ring; the separate rank-zero prescription is consequently defined without a projective-bundle assertion. These choices give a polynomial $c_t(E)$ with constant coefficient one. [A1, F1, F2, given]

2.1 An isomorphism $E\cong E'$ induces an isomorphism of quotient projective bundles over $X$ carrying the tautological quotient line to the corresponding quotient line. By naturality of its first Chern class, the two defining relations correspond. Their coefficients agree by uniqueness in [F2]. The prescribed zero and unit coefficients also agree, so each $c_i$ is well-defined on the set of isomorphism classes in [F3]. The same conclusion holds in rank zero by its explicit convention. [A1, F1, F2, F3, step 1.1]

3.1 For a morphism $f:Y\to X$ of qcqs $k$-schemes, the pullback bundle has rank $n$. For $1\leq i\leq n$, [F2] gives $f^*c_i(E)=c_i(f^*E)$; for $i=0$ or $i>n$ this follows from preservation of the unit and zero. The rank-zero case follows from the same conventions. Thus the maps are natural, and no smoothness hypothesis has been used. This completes the justification. [A1, F1, F2, step 1.1, step 2.1] ∎
