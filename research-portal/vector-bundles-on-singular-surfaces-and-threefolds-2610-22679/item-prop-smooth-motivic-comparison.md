---
title: Smooth motivic comparison
status: published
research_item: prop-smooth-motivic-comparison
dependency_level: 13
---

PDF p. 4: Property (4); PDF p. 13: Smooth groups in Proposition 6.1

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)
- [lem-author-91088613574d-quasi-isomorphism](item-lem-author-91088613574d-quasi-isomorphism)
- [lem-author-91088613574d-cycle-reindex](item-lem-author-91088613574d-cycle-reindex)
- [lem-author-91088613574d-filtered-images](item-lem-author-91088613574d-filtered-images)
- [thm-author-91088613574d-smooth-comparison-input](item-thm-author-91088613574d-smooth-comparison-input)


## Statement
Assume the Axiom of Choice. Let k be a field, X a smooth finite-type k-scheme, j ≥ 0 and i an integer. The Elmanto–Morrow complex Z(j)_mot(X) is equivalent to $z^j(X,\bullet)[-2j]$, where the homological cycle complex is placed in cochain degree −n in homological degree n. Hence $H^{i,j}_{\mathrm{mot}}(X,\mathbb Z)\cong CH^j(X,2j-i)$, and these groups agree with classical Voevodsky motivic cohomology. The motivic filtration of K(X) agrees, by a natural multiplicative filtered equivalence, with the filtration arising from Voevodsky's slice filtration. In particular $H^{2r,r}_{\mathrm{mot}}(X,\mathbb Z)\cong CH^r(X)$ for r ≥ 0, and $H^{7,3}_{\mathrm{mot}}(X,\mathbb Z)=0$; the latter includes the case of a smooth threefold.

Here $CH^j(X,n)$ is degree-n homology of Bloch's cycle complex, with negative degrees zero, and $CH^r(X)$ is codimension-r cycles modulo principal-divisor rational equivalence. The filtration is the decreasing Elmanto–Morrow tower on nonconnective K-theory of perfect complexes; its image filtration consists of the images of stage-to-zero maps on homotopy groups. The classical comparison and slice filtration are the constructions recalled in the imported smooth-comparison input.

## Facts & Assumptions
**Given:** The Axiom of Choice, a field k, a smooth finite-type k-scheme X, j ≥ 0 and i in Z.

**Goal:** Establish the smooth complex and filtration comparisons and the stated cohomological consequences.

[F1] The imported Elmanto–Morrow comparison supplies the derived equivalence, classical identification, and natural multiplicative filtered equivalence under these hypotheses. [thm-author-91088613574d-smooth-comparison-input](item-thm-author-91088613574d-smooth-comparison-input)

[F2] Motivic cohomology is cohomology of the Elmanto–Morrow complex. [def-motivic-cohomology](item-def-motivic-cohomology)

[F3] Equivalent derived complexes have isomorphic cohomology; the cohomology of the shifted cycle complex is higher Chow homology in degree 2j−i. [lem-author-91088613574d-quasi-isomorphism](item-lem-author-91088613574d-quasi-isomorphism), [lem-author-91088613574d-cycle-reindex](item-lem-author-91088613574d-cycle-reindex), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F4] Degree-zero cycle homology is the ordinary Chow group, and negative cycle homology vanishes. [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)

[F5] The assumed Choice premise, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the AC hypothesis of the selected perfect-complex realization when [def-motivic-filtration](item-def-motivic-filtration) is invoked. For nonnegative stages, the image filtration uses transitions to stage zero, and a filtered equivalence identifying stage zero with $K(X)$ identifies these images by [lem-author-91088613574d-filtered-images](item-lem-author-91088613574d-filtered-images). The integer-indexed convention of [def-motivic-filtration](item-def-motivic-filtration) extends the nonnegative tower constantly below zero, with stage $K(X)$ and identity augmentation. Apply the same constant extension to the classical tower when comparing integer indices. At every negative stage, both augmentation images are therefore the whole group $K_i(X)$. No transition from a negative stage to zero is used, and the image comparison makes no further choice.

## Proof
1.1 Apply the imported smooth comparison [F1] to X and j. This gives the displayed derived equivalence and the identification with the classical motivic complex; it also gives the multiplicative filtered equivalence. [given, F1]

2.1 Apply cohomology to the derived equivalence and use the explicit chain-to-cochain and shift translation in [F3]. Together with the definition in [F2], this gives $H^{i,j}_{\mathrm{mot}}(X,\mathbb Z)\cong CH^j(X,2j-i)$. The classical identification in step 1.1 identifies the same groups with classical Voevodsky motivic cohomology. [F2, F3, step 1.1]

3.1 Put i = 2r and $j = r$ in step 2.1. The higher Chow index is zero, so [F4] identifies the result with $CH^r(X)$. Put $i = 7$ and $j = 3$: the index is −1, so the group is zero by [F4], independently of dimension. [F4, step 2.1, algebra]

4.1 Invoke the local motivic-filtration interface under the assumed Choice premise as specified in [F5]. The filtered equivalence of step 1.1 gives the asserted comparison of nonnegative towers. For each nonnegative stage, its compatibility with the transition to zero gives the commuting square of [F5], so the images in $K_i(X)$ agree. Under the common constant extension to negative indices, extend the equivalence there by its stage-zero identification; both negative-stage augmentations are identities on $K(X)$ and thus have image $K_i(X)$. This also compares the integer-indexed image filtrations without a negative-stage transition to zero. Steps 1.1 through 3.1 prove the cohomological assertions. [F5, step 1.1, step 2.1, step 3.1] ∎
