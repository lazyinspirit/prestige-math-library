---
title: External actual graded algebra and multiplicative tower spectral sequence
status: published
research_item: thm-author-74a9c17e63f1-source-multiplicative-input
dependency_level: 12
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Version 1 (15 September 2023): §2.2 pp.11–12; Definition4.9 and Theorem4.10(1)–(2) pp.21–22; Definition4.23 pp.27–28 and Theorem4.24 p.28; Theorem4.12 pp.22–23 and Theorem4.27 p.29; §3.1 p.13.](https://arxiv.org/pdf/2309.08463v1)
- [Daniel Dugger, Multiplicative structures on homotopy spectral sequences I · §5 Proposition5.1 and Proposition5.3 p.11; §6 Theorem6.1 p.13, Theorem6.2 and Proposition6.4 p.14; proofs pp.16–17](https://arxiv.org/pdf/math/0305173v1)

## Statement
Assume the Axiom of Choice and fix the compatible size conventions of the local filtration realization. On qcqs schemes over $\mathbb Q$ or $\mathbb F_p$ for a prime $p$, the EM filtration used by the completed local filtration definition is the actual pullback filtered $E_\infty$-algebra of EM Definition4.9 in characteristic zero and Definition4.23 in characteristic $p$. Its natural graded equivalence is
$$\gamma_r:\operatorname{gr}^rF_{\mathrm{mot}}K\xrightarrow{\sim}\mathbb Z(r)_{\mathrm{mot}}[2r].$$
For $r\geq0$ these are the very complexes defining the completed motivic cohomology. For $r<0$ both sides are zero under the explicit source convention. Associated graded is strong symmetric monoidal for Day convolution, so this is the specified graded algebra structure, with products induced from the actual filtered multiplication. Its associated tower spectral sequence has multiplicative page pairings, the graded product on its initial page, differential derivation rules and compatibility with the filtered abutment product where bounded convergence applies. No convergence hypothesis is needed to define the products on finite pages.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed compatible size conventions are inherited from the completed local filtration realization. This assumption discharges the local realization premise when that definition is invoked; it is not an extra geometric condition on $X$. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [def-motivic-filtration](item-def-motivic-filtration)

**Given:** The Axiom of Choice, the fixed compatible size conventions, a qcqs prime-field scheme, and the same actual multiplicative filtered object as in the completed local supplier.

**Goal:** Supply the missing multiplicative and graded source data, rather than infer them from additive exact-couple groups.

[F1] EM Definitions4.9/4.23 and Theorems4.10/4.24 identify motivic complexes as shifted actual graded pieces, including vanishing in negative weights. Its §2.2 specifies the Day convolution algebra structures.

[F2] EM Theorems4.12/4.27 identify the associated tower spectral sequence as multiplicative (and bounded in finite valuative dimension). The actual pairings are those of its filtered algebra, not arbitrary products placed on matching groups. Dugger’s tower-pairing construction describes their finite-page/graded and abutment compatibility; all derivation checks use finite sections, as explicitly explained in§6.3, and do not need a global bound. Its realizability hypotheses are not weakened to a bare homotopy-category pairing here.

## External input
Import [F1]–[F2] for this actual source tower, with the precise statements and reading limits recorded in the references. The source product on motivic cohomology is by this graded algebra. The local additive exact-couple supplier is used below only to calculate and identify its underlying pages and indices; it does not establish [F2]. No general model-category rectification theorem is invented or reconstructed by this item.

## Proof
1.1 Under [A1], use the local filtration realization and apply [F1] to its underlying qcqs prime-field scheme. The defining graded equivalences and negative-weight zero convention are those of this actual filtered algebra, so the strong symmetric monoidal associated-graded functor transports its multiplication to the specified motivic products. [A1, F1, given]

2.1 Apply [F2] to the same actual multiplicative tower. Its finite-page pairings and derivation rules do not use convergence; under the stated boundedness hypothesis its filtered abutment compatibility applies as well. These are imported source data with the stated realization qualifications, rather than products inferred from additive groups or an unproved rectification claim. This gives all the stated comparisons and scope. [A1, F2, step 1.1] ∎

## Source qualifications
In Elmanto–Morrow v1, the classical paragraph on printed p.13 gives the homological lower-bound order $\dim X-j$. Its compatible order is $j-\dim X$: the printed order at $X=\mathbb A^1$, $j=0$ would incorrectly force $K_0(X)=0$. The boundedness proofs on pp.23 and29 similarly print the lower bounds $d+1-j$ and $d+2-j$ for the motivic stages. At stage zero over the respective prime field ($d=0$), these would kill $K_0=\mathbb Z$. These are retained source errors; they do not refute the separately stated boundedness theorem. Only boundedness in the §2.2 sense, with some finite $B(X)$ and connectivity growing as $j-B(X)$, is imported. No corrected explicit numerical constant is asserted here. The characteristic-zero defining square is (4.3), although the p.23 proof refers to (4.6); (4.6) is the characteristic-$p$ square.
