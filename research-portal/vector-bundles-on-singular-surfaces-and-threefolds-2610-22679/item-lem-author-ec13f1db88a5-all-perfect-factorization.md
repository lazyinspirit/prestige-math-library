---
title: Canonical first motivic class on every perfect K zero class
status: draft
research_item: lem-author-ec13f1db88a5-all-perfect-factorization
dependency_level: 22
---

PDF p. 8: Proposition3.2, perfect-complex first class and determinant

## Prerequisites

- [lem-author-ec13f1db88a5-perfect-determinant](item-lem-author-ec13f1db88a5-perfect-determinant)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection)
- [lem-author-ec13f1db88a5-bundle-comparison](item-lem-author-ec13f1db88a5-bundle-comparison)
- [prop-motivic-weight-one](item-prop-motivic-weight-one)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)


## Statement
Assume the Axiom of Choice and the fixed compatible site-size and universe bounds of the specified perfect K-theory, derived-section and weight-one constructions. For every field $k$ and qcqs $X/k$, the actual first EM layer defines a natural homomorphism $c_1^{\rm perf}:K_0(X)\to H^{2,1}_{\rm mot}(X,\mathbb Z)$ as follows. Let $r(\alpha)$ be the locally constant Euler rank, and let $s(r)$ be the virtual trivial-bundle class of that rank, formed on its finite clopen rank partition. Let $\widetilde\alpha$ be the unique element of $\pi_0\operatorname{Fil}^1K(X)$ mapping to $\alpha-s(r(\alpha))$. Set $c_1^{\rm perf}(\alpha)=\pi_0q_1(\widetilde\alpha)$, using the actual weight-one identification. Then $c_1^{\rm perf}(\alpha)=\gamma_X(\det_X\alpha)$ for every perfect class. It agrees with the existing first class on actual and virtual vector-bundle classes under their canonical map to perfect K zero.

The size data consist of universes containing the schemes and perfect-category enhancements in use, the chosen small Nisnevich sites used for derived sections of units, and a suitably small skeleton of the qcqs schemes over the prime field in those universes for the big-site low-layer comparisons. All these categories and their sheaves are interpreted in a sufficiently large ambient universe. These are the supplied size conventions; the assertion retains every field and every qcqs scheme.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[prop-motivic-weight-one](item-prop-motivic-weight-one)

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). The compatible site and universe data are those of [def-derived-sections-on-sites](item-def-derived-sections-on-sites), [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) and [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface), with the weight-one site bounds of [prop-motivic-weight-one](item-prop-motivic-weight-one). These premises are used through the supplied rank-zero and Picard comparisons in [F1], and through the perfect determinant and weight-one identification in [F2], at steps 1.1–3.1. The finite clopen rank-section construction itself uses only finite data.

[F1] [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage) supplies the rank and unique lift. [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection) identifies the actual q₁ map with determinant on that rank-zero space.

[F2] [lem-author-ec13f1db88a5-perfect-determinant](item-lem-author-ec13f1db88a5-perfect-determinant) supplies the homomorphism $\det_X$ on all perfect classes. [prop-motivic-weight-one](item-prop-motivic-weight-one) supplies the natural isomorphism $\gamma_X$. [lem-author-ec13f1db88a5-bundle-comparison](item-lem-author-ec13f1db88a5-bundle-comparison) matches actual/virtual bundle first classes.

## Proof
**Given:** A field $k$, a qcqs $k$-scheme $X$, Choice, the stated site-size and universe bounds, and $\alpha\in K_0(X)$ in the supplied perfect model.

**Goal:** Justify the definition on all classes and prove the formula.

1.1 The rank function has finite image on qcqs $X$. For each clopen rank stratum, extension of its trivial line by zero is a finite locally free sheaf (rank1 there, rank0 elsewhere). Integer combinations of these classes define $s(r)$, including negative ranks. Refining partitions leaves the class unchanged by direct sums on clopen components. Thus $s$ is a natural additive section of rank. Its determinant is the trivial line: each component trivial bundle has trivial determinant there and in rank zero elsewhere, with the canonical gluing. [F1, F2, construct, A1]

2.1 The difference $\alpha-s(r(\alpha))$ has rank zero. By [F1] it has the unique stated first-stage lift, so the displayed definition uses no representative of $\alpha$ and no global vector-bundle presentation. All constituent maps are natural and additive, hence so is $c_1^{\rm perf}$. [F1, step 1.1, A1]

3.1 By [F1], the projected rank-zero lift equals $\gamma_X(\det_X(\alpha-s(r(\alpha))))$. By the trivial determinant from step 1.1 and [F2], this is $\gamma_X(\det_X\alpha)$. On actual or virtual bundle classes, the latter expression equals their existing first coefficient by [F2]. Thus the comparison concerns the actual EM projection and original orientation, not a new map defined by the desired determinant equality alone. [F1, F2, step 1.1, step 2.1, A1] ∎
