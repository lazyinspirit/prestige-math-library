---
title: Smooth threefold rank-two classification
status: draft
research_item: thm-smooth-threefold-rank-two-classification
dependency_level: 16
---

PDF p. 1: Introduction, first paragraph, AF14

## Prerequisites

- [def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)
- [lem-author-9b282fc59773-unique-lifting-criterion](item-lem-author-9b282fc59773-unique-lifting-criterion)
- [thm-author-9b282fc59773-asok-fasel-comparison-input](item-thm-author-9b282fc59773-asok-fasel-comparison-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Use the Axiom of Choice and the supplied universe conventions. Let $X$ be a smooth affine threefold over an algebraically closed field $k$ of characteristic different from two. The first two Chern classes give a pointed bijection
$$\mathrm{Vect}_2(X)\xrightarrow{\ \sim\ }\operatorname{Pic}(X)\times\mathrm{CH}^2(X),\qquad [E]\longmapsto(c_1(E),c_2(E)).$$
Here the first coordinate is $[\det E]$ in $\operatorname{Pic}(X)$, equivalently its usual first Chern class under $\operatorname{Pic}(X)\cong\mathrm{CH}^1(X)$. Thus every pair of classes is attained by exactly one bundle isomorphism class. No determinant trivialization is included in the classification data.

## Statement references
[def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)

[thm-author-9b282fc59773-asok-fasel-comparison-input](item-thm-author-9b282fc59773-asok-fasel-comparison-input)

## Facts & Assumptions
**Given:** A smooth affine $k$-scheme of finite type of pure dimension three, with $k$ algebraically closed and $\operatorname{char}(k)\ne2$, and the stated set-theoretic conventions.

**Goal:** Prove bijectivity for the actual pair of Chern classes and identify the basepoints.

[F1] The map $C_X([E])=([\det E],c_2(E))$ is well-defined and takes the trivial rank-two bundle to $([\mathcal O_X],0)$. [def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)

[F2] Under exactly these hypotheses, the external Asok–Fasel comparison gives compatible maps $v,t,b$ and exact obstruction-group sequences with zero end groups, together with the nonempty lift-fiber quotient descriptions. It also identifies the determinant coordinate with $c_1$ and the second coordinate with the ordinary $c_2$. [thm-author-9b282fc59773-asok-fasel-comparison-input](item-thm-author-9b282fc59773-asok-fasel-comparison-input)

[F3] Compatible presentation maps with this lifting and vanishing interface imply singleton Chern fibers and bijectivity. [lem-author-9b282fc59773-unique-lifting-criterion](item-lem-author-9b282fc59773-unique-lifting-criterion)

## Proof
1.1 The field and scheme satisfy all hypotheses of [F2]: algebraic closure, characteristic different from two, smoothness, affineness, and dimension three. Apply that input to $X$. It gives bijections $v$ and $b$, a surjective $t$, the equality $b t v=C_X$, and, over every second-stage class, the exact sequence and zero end groups required by [F3]. No assertion about arbitrary singular threefolds or characteristic two is used. [given, F1, F2]

2.1 Applying [F3] to these actual maps makes $C_X$ a bijection, with one bundle isomorphism class for every pair. By [F2] this is precisely the displayed pair of Chern classes, and by [F1] it preserves the specified basepoints. This proves the full stated classification. [F1, F2, F3, step 1.1] ∎

## Source notes
The original article, Fasel–Yakerson, arXiv:2610.22679v1, p. 1, first paragraph, attributes this result to Asok–Fasel [AF14]. The precise source is Asok–Fasel arXiv:1204.0770v5, Theorem 1, p. 2, with proof at Theorem 6.6, p. 26. The five intermediate prerequisites above author the Chern map, determinant fibers, map-compatible transport, zero-group argument and local lifting application. The substantial motivic representability, truncation and cohomology computation remain explicitly external; no full reconstruction of their proofs is claimed. The native job-00115 authoring obstacle is resolved by this construction, not classified as an error in either paper.
