---
title: Total Chern series for actual and virtual bundles
status: published
research_item: def-total-chern-class
dependency_level: 20
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-author-4f94f7982b0d-virtual-independence](item-lem-author-4f94f7982b0d-virtual-independence)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input](item-thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input)
- [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model)
- [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation)
- [lem-author-4f94f7982b0d-relation-comparison](item-lem-author-4f94f7982b0d-relation-comparison)
- [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)



## Definition
Assume AC and the supplied universe conventions. Let $k$ be a field and $X$ any qcqs $k$-scheme. For an actual finite locally free bundle $V$, put
$$c_t(V)=1+\sum_{i\geq1}c_i(V)t^i,$$
using the supplied projective-relation classes on constant-rank clopen components and their unique gluing for varying rank. This is a polynomial, with $c_i(V)\in H^{2i,i}_{\rm mot}(X,\mathbb Z)$; it is $1$ in rank zero.
Let $K^0_{\rm vb}(X)$ be the group on finite locally free bundles modulo the exact-sequence relations. Define its **total virtual Chern series** to be the unique natural homomorphism to the multiplicative group of formal series with constant coefficient $1$ and coefficient of $t^i$ in $H^{2i,i}(X)$ extending the actual series. Equivalently,
$$c_t([V]-[W])=c_t(V)c_t(W)^{-1}.$$
Inverses are formal, computed recursively coefficient by coefficient; no convergence or dimension truncation is assumed. For this actual motivic theory, however, each positive Chern coefficient of a bundle is nilpotent. Consequently the formal inverse of any actual bundle polynomial, and hence the value on every virtual bundle class, is itself a polynomial. Its finite degree follows from nilpotence for the chosen bundles, without any finite-dimensionality assumption on $X$. The formal-series target and coefficient formulas remain valid. This uses only nonnegative weights (the theory’s explicit negative-zero extension is unchanged).
For locally Noetherian $X$, the group is the published vector-bundle $K^0(X)$. On affines it may also be identified with the supplied spectral $K_0$ through its completed affine comparison. No general equality with perfect $K_0$ or coherent G-theory is asserted.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe bounds. These are the foundational hypotheses of the model, comparison and virtual-extension suppliers used below; the finite nilpotent-ideal argument uses no additional arbitrary choice.

[F1] [lem-author-4f94f7982b0d-virtual-independence](item-lem-author-4f94f7982b0d-virtual-independence) supplies the actual Whitney identity, clopen extension and unique natural virtual extension, using [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) only after the actual identity. [def-motivic-chern-classes](item-def-motivic-chern-classes) gives the constant-rank coefficients and their bidegrees.

[F2] [thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input](item-thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input) imports positive Chern-coefficient nilpotence for an oriented homotopy-commutative motivic ring spectrum with PBF over a qcqs derived base $S$, on smooth qcqs $S$-schemes.

[F3] [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model) gives the actual non-$\mathbb A^1$ homotopy-commutative EM ring spectrum over every qcqs field-base $S$. [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation) supplies its actual orientation and PBF. [lem-author-4f94f7982b0d-relation-comparison](item-lem-author-4f94f7982b0d-relation-comparison) identifies the source Chern coefficients with the supplied motivic classes. [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection) supplies the finite-clopen motivic restriction isomorphism.

[F4] [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) identifies the locally Noetherian vector-bundle presentation; [def-vector-bundle-classes](item-def-vector-bundle-classes) supplies the affine identification with the specified spectral perfect $K_0$.


**Given:** $k,X$, actual bundles or an element of $K^0_{\rm vb}(X)$, AC and the stated universe bounds.

**Goal:** Justify the representative-independent definition and polynomiality of its actual virtual values in the full qcqs scope.

## Justification
1.1 Apply [F1] to define the actual polynomial with its unit and zero conventions and natural coefficients. Its exact-sequence Whitney identity has been established for the actual projective-relation classes before virtual extension. [A1, F1, given]

2.1 The extension in [F1] is defined on the generator-and-relation group itself, kills all defining relations, and is unique on the bundle generators. Its difference formula therefore has the same value for every representative of a virtual class. Its formal inverse and coefficient bidegrees are those verified in the extension supplier. [A1, F1, step 1.1]

2.2 To apply [F2], first take a constant-rank bundle on a qcqs $k$-scheme and set $S=X$, regarded as a classical derived scheme, with $Y=X$ via the smooth identity. By [F3] the actual EM model is homotopy-commutative, oriented and satisfies the source PBF; its product-preserving coefficient identifications carry the source projective-relation coefficients to our $c_i$. Thus [F2] makes every positive $c_i$ nilpotent. For a varying-rank bundle, quasi-compactness gives finitely many clopen rank strata. On each nonempty stratum the same application with that stratum as base gives a nilpotence exponent. For each fixed $i$, take the maximum of these finitely many exponents; the corresponding power vanishes globally by the joint restriction isomorphism in [F3]. Rank zero and coefficients above rank are zero. On the empty scheme the same restriction isomorphism has empty product target, so all coefficient groups are zero and the conclusion holds as well. [A1, F1, F2, F3, step 1.1]

3.1 For a bundle $W$, write $c_t(W)=1+q(t)$ with $q(t)=\sum_{i=1}^m a_i t^i$, where $m$ bounds its rank and $a_i=c_i(W)$. If $q=0$, its inverse is $1$. Otherwise choose positive integers $n_i$ with $a_i^{n_i}=0$, using step 2.2. In the commutative diagonal ring $R_X=\bigoplus_{i\geq0}H^{2i,i}(X)$ put $I=(a_1,\ldots,a_m)$ and $N=1+\sum_{i=1}^m(n_i-1)$. Every monomial of degree $N$ in these generators contains some $a_i^{n_i}$, so $I^N=0$ and $q(t)^N=0$ in $R_X[t]$. Hence $(1+q(t))^{-1}=\sum_{j=0}^{N-1}(-q(t))^j$ is a polynomial. Multiplying by $c_t(V)$ proves polynomiality for every difference $[V]-[W]$, and every class has such a representative by [F1]. Each coefficient retains its required bidegree. This finite formula is the same as the unique formal inverse of step 2.1. [A1, F1, step 2.1, step 2.2, algebra]

4.1 The locally Noetherian and affine interpretations are exactly [F4]. None of the preceding steps identifies the bundle presentation with perfect $K_0$ on general schemes or with coherent G-theory. All original coefficient formulas and naturality survive in the formal-series target, while step 3.1 gives the stronger polynomial-value assertion without a dimension restriction. [A1, F1, F4, step 2.1, step 3.1] ∎
