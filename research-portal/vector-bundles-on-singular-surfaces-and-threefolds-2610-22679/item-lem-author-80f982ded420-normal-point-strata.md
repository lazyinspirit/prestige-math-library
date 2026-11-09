---
title: Normal dimension strata and the actual residue class model
status: draft
research_item: lem-author-80f982ded420-normal-point-strata
dependency_level: 17
---

PDF p. 3: Levine–Weibel image after TheoremC; PDF p. 14: Definition6.5 pure-dimensional smooth-point subgroup

## Prerequisites

- [thm-author-fc2380accb47-normal-geometric-input](item-thm-author-fc2380accb47-normal-geometric-input)
- [lem-koszul-point-support-class](item-lem-koszul-point-support-class)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [def-smooth-point-cycle-map](item-def-smooth-point-cycle-map)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC and the completed size conventions. Let $X$ be a normal affine finite-type scheme over a perfect field $k$, of dimension $d$. Its finitely many integral components are clopen. For $0\leq e\leq d$, let $X_e$ be the union of its dimension-$e$ components. These form a finite clopen partition, each nonempty $X_e$ is pure-dimensional, and
$$K(X)\simeq\prod_eK(X_e),\qquad K_0(X)\cong\bigoplus_eK_0(X_e).$$
Restriction is the displayed equivalence. Extension by zero along $i_e:X_e\hookrightarrow X$ is exact on perfect complexes and induces the corresponding zero-in-other-factors inclusion. For a smooth closed point $x\in X_e$, the current point class $\varphi_x(1)$ is this zero extension of the perfect residue-sheaf class. Under the completed affine $K_0$ comparison, it is the classical Euler class $[\kappa(x)]$ used for the source cycle map; no opposite sign or degree factor is inserted.

## Facts & Assumptions
**Given:** The stated normal affine scheme, field, AC and current nonconnective perfect-complex model.

**Goal:** Supply finite dimension bookkeeping and actual point-class/model compatibility.

[F1] [thm-author-fc2380accb47-normal-geometric-input](item-thm-author-fc2380accb47-normal-geometric-input) gives finite clopen integral components in the Noetherian case.

[F2] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) gives exact-category functoriality; [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) gives the support-category fiber sequence for a qcqs scheme with quasi-compact open complement.

[F3] [lem-koszul-point-support-class](item-lem-koszul-point-support-class), [def-smooth-point-cycle-map](item-def-smooth-point-cycle-map) and [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identify the point with the positive residue-sheaf class and identify its affine perfect-complex class with the alternating finite-projective Euler class. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies inherited Choice.

## Proof
1.1 Finite type over a field makes $X$ Noetherian and gives finitely many irreducible components. Normality and [F1] make them disjoint and open as well as closed. Group them by dimension to obtain the finite clopen $X_e$; each is affine and all its components have dimension $e$. [F1, given]

2.1 A sheaf complex on a finite clopen union is exactly a tuple of complexes on its pieces. Perfection is local, so zero extension is exact, preserves perfect objects, restricts to identity on its own piece and to zero on the others. The supported category for a clopen piece is its perfect category. Apply [F2] to that piece and its clopen complement. The resulting fiber sequence is split by zero extension of the complement, and restrictions identify it with the split product sequence. Iteration gives the displayed equivalence of actual K-spectra and hence the direct-sum formula on $\pi_0$. [F2, step 1.1]

3.1 By [F3], the current point map sends $1$ to the globally defined perfect sheaf $i_*\kappa(x)$, and every local Koszul representative resolves that same object. On an affine scheme its bounded finite-projective representative maps, under the actual affine bridge, to its alternating Euler class. This is the classical $[\kappa(x)]$ convention in $K_0$ of projective modules. Zero extension of that sheaf agrees literally with the same residue sheaf on $X$ and has zero restriction to every other clopen piece, by step 2.1. These facts establish model and sign compatibility, without identifying coherent G-theory with perfect K-theory in a singular ambient scheme. [F3, step 2.1] ∎
