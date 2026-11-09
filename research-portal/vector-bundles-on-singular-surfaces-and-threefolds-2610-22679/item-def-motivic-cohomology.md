---
title: Motivic complexes and cohomology
status: draft
research_item: def-motivic-cohomology
dependency_level: 8
---

PDF p. 4: Definition 2.2

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)
- [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients)

## Definition
Let $k$ and $\mathrm{Sch}_k$ have the conventions of [def-article-conventions](item-def-article-conventions): objects of $\mathrm{Sch}_k$ are quasi-compact quasi-separated schemes over $k$. For an integer $j\geq0$, the **motivic complex of weight $j$** is the restriction to $\mathrm{Sch}_k$ of the Elmanto–Morrow Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes). It is a contravariant functor with values in $D(\mathbb Z)$, the derived category of complexes of abelian groups.

For $X\in\mathrm{Sch}_k$ and $i\in\mathbb Z$, its **motivic cohomology group of degree $i$ and weight $j$** is
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\bigr).$$
For a positive integer $n$, define finite coefficients objectwise by
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z/n):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\bigr).$$
The derived tensor product here is equivalently the mapping cone of multiplication by $n$. A morphism $X\to Y$ of $k$-schemes induces pullback from the group of $Y$ to that of $X$.

## Justification
The external input [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the specified complex-valued functor and its Nisnevich descent on the stated category. By [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology), $H^i$ is a functor on $D(\mathbb Z)$, so the integral group and pullback are independent of representatives and respect identities and composition. [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients) supplies the derived quotient, its equivalence with the cone, and its functoriality; applying cohomology gives the finite-coefficient group and its pullback. Evaluation in this definition is evaluation of the supplied complex-valued sheaf; no identification with derived sections on a separately chosen site is assumed.

## Reading limits
The article's Definition 2.2 and the introduction and opening statement of Elmanto–Morrow Theorem 1.1 were read. The construction is used through the explicitly marked external input; its proof is not reconstructed here.
