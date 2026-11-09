---
title: Motivic weight one
status: draft
research_item: prop-motivic-weight-one
dependency_level: 16
---

PDF p. 4: Property (2) and equation (2.3)

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-13e6fe931c45-prime-field-restriction](item-lem-author-13e6fe931c45-prime-field-restriction)
- [lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external)
- [lem-author-13e6fe931c45-weight-one-identifications](item-lem-author-13e6fe931c45-weight-one-identifications)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the site-size bounds of [lem-author-13e6fe931c45-weight-one-identifications](item-lem-author-13e6fe931c45-weight-one-identifications). Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. There is a natural map
$$R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\longrightarrow\mathbb Z(1)_{\rm mot}(X)$$
that is an equivalence in degrees at most three: it induces an isomorphism on cohomology in every degree $i\leq3$. Here $\mathbb G_m$ is the sheaf of invertible regular functions on the small Nisnevich site, and $\mathbb Z(1)_{\rm mot}(X)$ is the complex of [def-motivic-cohomology](item-def-motivic-cohomology). Consequently, for $i\leq2$,
$$H^{i,1}_{\rm mot}(X,\mathbb Z)\cong H^{i-1}_{\rm Nis}(X,\mathbb G_m)\cong\begin{cases}0&i\leq0,\\\Gamma(X,\mathcal O_X)^\times&i=1,\\\operatorname{Pic}(X)&i=2.\end{cases}$$
The Picard group is the group of isomorphism classes of line bundles, meaning locally free rank-one $\mathcal O_X$-modules, under tensor product.

## Facts & Assumptions

**Given:** $k$, $X$, Choice, and the stated site-size bounds.

**Goal:** Construct the comparison and establish its degree range and the displayed groups.

[F1] Passing to the prime subfield preserves the underlying scheme, the small Nisnevich units, and the value of the restricted motivic functor ([lem-author-13e6fe931c45-prime-field-restriction](item-lem-author-13e6fe931c45-prime-field-restriction)).

[F2] The Elmanto–Morrow external input supplies the natural comparison with cofiber supported in degrees $>3$ for qcqs schemes over a prime field ([lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external)).

[F3] Under Choice and the specified size bounds, such a comparison yields the stated low-degree identifications ([lem-author-13e6fe931c45-weight-one-identifications](item-lem-author-13e6fe931c45-weight-one-identifications)).

## Proof

1.1 Let $F$ be the prime subfield of $k$. By [F1], $X$ is a qcqs $F$-scheme, and the source and target of the comparison over $F$ are the displayed objects for $X$ over $k$. Apply [F2] to obtain the natural map with cofiber supported in degrees greater than three. Naturality on $k$-schemes follows by restricting naturality on $F$-schemes. [F1, F2, given]

2.1 Apply [F3] to this map. It gives an isomorphism in every degree at most three and the zero, units and Picard identifications through degree two. These are the claimed equivalence range and formula. [F3, step 1.1] ∎

## Reading limits
The article's property (2) and equation (2.3) were read. The comparison is used through the explicitly identified external input; its underlying proof is not reconstructed here.
