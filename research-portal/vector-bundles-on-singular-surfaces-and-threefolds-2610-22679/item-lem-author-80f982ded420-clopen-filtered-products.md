---
title: Finite clopen restrictions split the actual motivic image filtration
status: draft
research_item: lem-author-80f982ded420-clopen-filtered-products
dependency_level: 19
---

PDF p. 3: Levine–Weibel image after TheoremC; PDF p. 14: Definition6.5 pure-dimensional smooth-point subgroup

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe size bounds of the supplied constructions. Let $k$ be a field, $X$ a qcqs $k$-scheme, and $X=\coprod_eX_e$ any finite clopen partition. For this partition and every $j\geq0$, actual restrictions induce equivalences
$$F^j_{\mathrm{mot}}K(X)\simeq\prod_eF^j_{\mathrm{mot}}K(X_e)$$
commuting with the stage-to-zero maps. Hence
$$F^j_{\mathrm{mot}}K_0(X)\cong\bigoplus_eF^j_{\mathrm{mot}}K_0(X_e)$$
inside the actual $K_0$ product. In particular zero extension of a class in $F^j_{\mathrm{mot}}K_0(X_e)$ belongs to $F^j_{\mathrm{mot}}K_0(X)$. This does not assume that motivic stages have arbitrary proper pushforward maps.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed size conventions of the cited constructions are inherited through [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence). They discharge that supplier’s local-realization premise at its first application below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The Axiom of Choice and the fixed size conventions of the cited constructions, together with the exact finite clopen partition and current augmented tower.

**Goal:** Justify filtration membership after zero extension using actual restriction diagrams.

[F1] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) defines the actual spectra from the enhanced perfect categories and their exact pullbacks. [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) supplies the support-category fiber sequence for every qcqs scheme with quasi-compact open complement. For a finite clopen partition all pieces and complements are qcqs. A perfect complex supported on a clopen piece is exactly its perfect complex extended by zero; this is an exact equivalence of categories. These inputs apply without normality, affineness, finite type or dimension bounds.

[F2] [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) gives derived Nisnevich sheaves at each weight; [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent) gives their finite-clopen product equivalences and value zero at the empty scheme.

[F3] [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) supplies the natural triangle $F^{j+1}K\to F^jK\to\mathbb Z(j)_{\mathrm{mot}}[2j]$, and [def-motivic-filtration](item-def-motivic-filtration) fixes its actual augmentation/image group.

## Proof
1.1 First establish the stage-zero restriction equivalence in the full stated scope. For a binary clopen decomposition $X=A\amalg B$, extension by zero identifies $\operatorname{Perf}(A)$ with the perfect category supported on $A$. The localization sequence of [F1] is therefore $K(A)\to K(X)\to K(B)$; its last arrow has the exact zero-extension section from $B$. Restriction to $A$ is identity on the first factor and zero on that section. Thus the actual restriction map $K(X)\to K(A)\times K(B)$ is an equivalence of the split fiber sequences. Iterate for a finite nonempty partition. For the empty scheme, apply the same localization contract to its identity open: its fiber is zero, while its supported perfect category is the whole perfect category, giving $K(\varnothing)=0$. This also handles the empty partition. Extension by zero gives the coordinate inclusions in each case. [A1, F1, given]

2.1 Identify stage zero with K by [F3]. Suppose the actual stage restriction is an equivalence at $j$. Compare the natural triangle of [F3] on $X$ with the finite product of its triangles on the $X_e$. The middle vertical arrow is an equivalence by induction and the right arrow is one by [F2]. Finite products preserve fiber sequences, so taking fibers makes the left arrow an equivalence. Induction proves the assertion at every $j\geq0$, including the empty partition since [F2] gives zero graded terms there. These are the actual restrictions of a single tower; hence they commute with transitions and augmentations. [A1, F1, F2, F3, step 1.1]

3.1 Apply $\pi_0$ to the commuting augmentation diagrams of step 2.1. The image of a finite product of homomorphisms is the product of its images: a tuple of image elements has a tuple of preimages. For finitely many abelian groups the product is also their direct sum. This proves the asserted image-filtration decomposition inside actual $K_0$. A stage preimage on one piece, together with zero preimages on the others, gives a stage class on $X$ by step 2.1. By step 1.1 its augmentation is exactly the K-class extended by zero, proving the final membership assertion without requiring filtered proper pushforwards. [F1, F3, step 1.1, step 2.1] ∎

The stage-zero argument uses the current general perfect-K localization contract. The earlier normal affine finite-type stratum lemma remains valid but is not used to infer a qcqs or nonaffine product assertion. The ten direct consumers were inspected for this interface: their existing clopen restrictions, punctured opens, smooth loci, zero extensions, Choice and size premises agree with this statement. Their bodies require no resulting change. No new primary-source reading or independent acceptance of the supplied localization theorem is claimed.

## Maintenance scope
The stage-zero argument uses the current general perfect-K localization contract. The earlier normal affine finite-type stratum lemma remains valid but is not used to infer a qcqs or nonaffine product assertion. The ten direct consumers were inspected for this interface: their existing clopen restrictions, punctured opens, smooth loci, zero extensions, Choice and size premises agree with this statement. Their bodies require no resulting change. No new primary-source reading or independent acceptance of the supplied localization theorem is claimed.
