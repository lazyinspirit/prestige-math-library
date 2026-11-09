---
title: Factor two in the supported third Chern map
status: draft
research_item: prop-smooth-point-third-chern-factor
dependency_level: 25
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [lem-author-d026a7b99ace-positive-coordinates](item-lem-author-d026a7b99ace-positive-coordinates)
- [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map)
- [lem-author-d026a7b99ace-positive-rr-coefficient](item-lem-author-d026a7b99ace-positive-rr-coefficient)
- [lem-author-d026a7b99ace-actual-edge](item-lem-author-d026a7b99ace-actual-edge)
- [lem-author-d026a7b99ace-rr-and-global-square](item-lem-author-d026a7b99ace-rr-and-global-square)
- [def-third-edge-map](item-def-third-edge-map)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata)
- [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $X$ be a normal affine finite-type $k$-scheme of pure dimension three over an algebraically closed field $k$ of arbitrary characteristic, and let $x$ be a smooth closed point, with closed immersion $i:\operatorname{Spec}k(x)\hookrightarrow X$. With the actual support operations constructed above,
$$K_{0,x}(X)\xrightarrow{c_{3,x}}H^{6,3}_{\rm mot,x}(X,\mathbb Z)\xrightarrow{\epsilon_{3,x}}K_{0,x}(X)$$
is multiplication by $2$. More precisely, $c_{3,x}([i_*k(x)])=2\delta_x$ and $\epsilon_{3,x}(\delta_x)=[i_*k(x)]$, where $\delta_x$ is the positive fundamental motivic point class. These maps commute with support-to-global maps into the current global Chern class and third edge. Consequently the global composite $\epsilon_3c_3$ is multiplication by $2$ on each residue-sheaf point generator of the third image filtration. This conclusion also holds on a normal affine finite-type $k$-scheme of dimension three that has lower-dimensional components, for every smooth closed point on a three-dimensional component: its supported groups are those on the pure clopen union $X_3$ of the three-dimensional components, and its global point class is extended by zero.

## Facts & Assumptions
[F1] [lem-author-d026a7b99ace-positive-coordinates](item-lem-author-d026a7b99ace-positive-coordinates) fixes the positive supported generators; [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map) supplies actual Chern support compatibility.

[F2] [lem-author-d026a7b99ace-positive-rr-coefficient](item-lem-author-d026a7b99ace-positive-rr-coefficient) fixes the supported RR integer and sign; [lem-author-d026a7b99ace-actual-edge](item-lem-author-d026a7b99ace-actual-edge) supplies the actual supported edge and its normalization.

[F3] [lem-author-d026a7b99ace-rr-and-global-square](item-lem-author-d026a7b99ace-rr-and-global-square) gives the calculation on all integer multiples and the two actual support-to-global squares.

[F4] [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata) and [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products) give the pure clopen union $X_3$, its zero-extended point classes and the augmented product decompositions. The supported and global extension in [F3] uses these actual decompositions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is the inherited assumption used by the point-coordinate and edge suppliers.

## Proof
**Given:** The stated field, normal affine finite-type pure threefold, smooth closed point, Choice and size hypotheses; or the stated nonpure extension with $x$ on its three-dimensional clopen part.

**Goal:** Prove the precise factor and its global application.

1.1 Apply [F1] under the stated Choice premise in [F4]. In the pure case every supported K-zero class is $nu_x$ for a unique integer $n$. By [F2]–[F3], $c_{3,x}(nu_x)=2n\delta_x$ and $\epsilon_{3,x}(\delta_x)=u_x$, so their composite is $nu_x\mapsto2nu_x$. This also fixes the two requested generator formulas with their positive signs. [F1, F2, F3, F4]

2.1 Apply the commutative support-to-global squares in [F3]. The image of $u_x$ is the actual perfect residue-sheaf class in $K_0(X)$ and belongs to its third image filtration. Thus the global composite on that generator is twice the same class, even if its global image is zero. For a nonpure normal affine $X$ as stated, use [F4] and the extension in [F3]: the pure calculation on $X_3$ gives the same supported formula, and the global class is zero on the complementary clopen factors. Pointed Chern operations, the natural edge, and the augmented product decompositions transfer the same identity to $X$. Thus every smooth-point generator on a three-dimensional component has the asserted factor, with no purity restriction on the global normal affine scheme. [F1, F3, F4, step 1.1] ∎
