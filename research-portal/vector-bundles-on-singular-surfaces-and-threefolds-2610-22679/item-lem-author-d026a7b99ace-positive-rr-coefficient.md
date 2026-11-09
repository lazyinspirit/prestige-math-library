---
title: An integral P³ test fixes the supported RR coefficient as positive two
status: draft
research_item: lem-author-d026a7b99ace-positive-rr-coefficient
dependency_level: 23
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan)
- [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map)
- [thm-author-d026a7b99ace-supported-rr](item-thm-author-d026a7b99ace-supported-rr)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [def-total-chern-class](item-def-total-chern-class)
- [lem-smooth-point-motivic-purity](item-lem-smooth-point-motivic-purity)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)


## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds of the supplied motivic and perfect K-theory constructions. For the RR polynomial of codimension $d=3$ and class index $q=3$, $P^3_3(n)=2n$ for every integer rank $n$. In particular the supported third Chern class of the positive point K-generator is twice the positive motivic point generator. The coefficient is integral and the same in every characteristic.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fix compatible universes and small scheme sites as in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). These are the foundational assumptions of the projective-bundle, smooth-comparison, point-purity, virtual-Chern and actual perfect K-space suppliers in [F1]–[F3], used in steps 1.1–3.1. The finite Koszul resolution and integral formal-series arithmetic require no additional choice.

[F1] [thm-author-d026a7b99ace-supported-rr](item-thm-author-d026a7b99ace-supported-rr) gives the actual supported formula, and [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map) identifies the actual supported Chern operation and its compatibility with forgetting support through the smooth comparison. When $q=d=3$, every positive Chern/normal variable disappears and only rank remains.

[F2] By [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison), $H^{2j,j}(k)=CH^j(k)=0$ for $j>0$ and $H^{0,0}(k)=\mathbb Z$. The projective-space formula of [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula) gives the diagonal ring on $\mathbb P^3_k$ with hyperplane $h=c_1(\mathcal O(1))$ and $H^{6,3}=\mathbb Z h^3$. The triple coordinate-hyperplane point has positive fundamental class $h^3$ by normalized divisor Gysin and its functoriality, included in [F1]. [lem-smooth-point-motivic-purity](item-lem-smooth-point-motivic-purity) gives $H^{6,3}_x(\mathbb P^3)=\mathbb Z\delta_x$ and forgetting support sends $\delta_x$ to $h^3$, hence is injective.

[F3] [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan) supplies the actual perfect total-series homomorphism on every noetherian finite-dimensional scheme, hence on the nonaffine scheme $\mathbb P^3_k$. Its bundle values are the original projective-relation classes. Thus the virtual bundle rules of [prop-chern-whitney-identities](item-prop-chern-whitney-identities) and [def-total-chern-class](item-def-total-chern-class) compute these actual perfect operations on the explicit Koszul class and on all its integer multiples. No global bundle-representation assertion for arbitrary qcqs schemes is used.

## Proof
**Given:** [A1], any algebraically closed $k$, a coordinate point $x\in\mathbb P^3_k$, and integer $n$.

**Goal:** Determine the universal integer polynomial value without a sign convention guess or division.

1.1 The three coordinate linear sections cut out $x$ regularly. Their Koszul resolution gives $[k(x)]=1-3[\mathcal O(-1)]+3[\mathcal O(-2)]-[\mathcal O(-3)]$ in actual perfect $K_0(\mathbb P^3)$. The actual perfect total Chern operation on this explicit Koszul class is computed by [F3] from the line-bundle values in [F2], giving $(1-2ht)^3/((1-ht)^3(1-3ht))$. [A1, F2, F3, construct]

2.1 Expand only through degree3 in the integral formal-series ring. The numerator is $1-6ht+12h^2t^2-8h^3t^3$; the denominator is $1-6ht+12h^2t^2-10h^3t^3$ modulo $t^4$. Thus their quotient is $1+2h^3t^3$ modulo $t^4$, with first two coefficients zero. For $n$ times this perfect class, the actual total Cartan identity of [F3] gives the $n$th power of this series, whose degree-three coefficient is $2nh^3$, including negative $n$ by formal inversion. [A1, F2, F3, step 1.1]

3.1 Apply supported RR [F1] to $a=n\in K_0(k)=\mathbb Z$ and forget support. Its right side is $P^3_3(n)h^3$, while step 2.1 gives $2nh^3$. Since $h^3$ freely generates $H^{6,3}(\mathbb P^3)$, their equality gives $P^3_3(n)=2n$. The injective support-forgetting map in [F2] also fixes its supported sign. This test determines the universal polynomial value for every regular codimension-three point pair. [A1, F1, F2, F3, step 2.1] ∎
