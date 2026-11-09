---
title: Elmanto–Morrow motivic complex input
status: draft
research_item: lem-author-b747b28c359f-elmanto-morrow-complexes
dependency_level: 7
---

PDF p. 4: Definition 2.2, citing EM23 Theorem 1.1

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

## Statement
Let $F$ be a prime field, namely $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. For each integer $j\geq0$, Elmanto and Morrow construct a finitary Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ on the category of quasi-compact quasi-separated $F$-schemes, valued in the derived category $D(\mathbb Z)$ of complexes of abelian groups. Finitary means compatibility with the filtered inverse limits to which the cited theorem applies. The sheaf is understood in the derived, homotopy-coherent sense of the cited source.

For a field $k$ with prime subfield $F$, restriction along the forgetful functor from qcqs $k$-schemes to qcqs $F$-schemes supplies the corresponding contravariant complex-valued functor on $\mathrm{Sch}_k$ of [def-article-conventions](item-def-article-conventions), with Nisnevich descent for covers in that category. Nisnevich covers are as in [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface).

## External input
The existence and Nisnevich descent of the prime-field sheaves are imported from the opening assertion of Elmanto–Morrow, Theorem 1.1, under its stated hypotheses. This item does not reconstruct their construction or import the filtration, spectral sequence, or comparison theorems.

## Facts & Assumptions

[F1] The cited external input gives the prime-field functor and its Nisnevich descent.

[F2] A qcqs $k$-scheme is a qcqs $F$-scheme by composition with $\operatorname{Spec}k\to\operatorname{Spec}F$; Nisnevich covering families are defined by their underlying étale morphisms and residue-field maps ([def-article-conventions](item-def-article-conventions), [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)).

## Proof

**Given:** A field $k$, its prime subfield $F$, and $j\geq0$.

**Goal:** Obtain the stated restricted functor and descent from the external input.

1.1 Apply [F1] to $F$ and $j$. Composition with the forgetful functor in [F2] gives a contravariant $D(\mathbb Z)$-valued functor on qcqs $k$-schemes. [F1, F2]

2.1 Every Nisnevich covering family and its fibre-product descent diagram in the chosen qcqs $k$-site is also such a diagram after forgetting to $F$. The descent equivalence supplied by [F1] therefore applies to the restricted diagram. This proves the stated restriction and descent; existence itself remains the external input. [F1, F2, step 1.1] ∎
