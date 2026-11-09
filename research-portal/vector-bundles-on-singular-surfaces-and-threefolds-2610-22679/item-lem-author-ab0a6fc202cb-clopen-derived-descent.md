---
title: Derived Nisnevich descent on a finite clopen partition
status: published
research_item: lem-author-ab0a6fc202cb-clopen-derived-descent
dependency_level: 7
---

PDF p. 8: Computations after the splitting principle

## Prerequisites

- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

## Statement
Let $F$ be a homotopy-coherent sheaf with values in the derived infinity-category $D(\mathbb Z)$ on a category of schemes with the Nisnevich topology. Suppose the empty scheme and a finite clopen partition $X=\coprod_{\alpha\in A}X_\alpha$, its inclusions and their fiber products lie in that category. Then $F(\varnothing)\simeq0$, and restriction induces a natural equivalence
$$F(X)\xrightarrow{\simeq}\prod_{\alpha\in A}F(X_\alpha).$$
Here sheaf means that evaluating on a cover is the homotopy limit of its Cech descent diagram; the empty covering family is included. The finite empty product in $D(\mathbb Z)$ is its zero object. No assertion about injectivity for general overlapping open covers is made.

## Facts & Assumptions

**Given:** $F$, its derived sheaf condition and the partition in the Statement.

**Goal:** Compute descent on this particular finite cover.

[F1] Open immersions are etale and preserve residue fields, so an open cover is a Nisnevich cover. The empty family covers the empty scheme. [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[F2] By the assumed sheaf condition, $F(X)$ is the totalization (homotopy limit) of the cosimplicial diagram whose degree $n$ term is the product of $F(X_{\alpha_0}\times_X\cdots\times_X X_{\alpha_n})$ over all $(n+1)$-tuples of indices. Descent for the empty family is the limit of the empty diagram, the terminal object.

## Proof

1.1 Apply the empty-cover case of [F1]–[F2]. It identifies $F(\varnothing)$ with the terminal object of $D(\mathbb Z)$, which is zero. This also proves the conclusion for an empty partition. [F1, F2]

2.1 For a nonempty partition, the intersection indexed by $(\alpha_0,\ldots,\alpha_n)$ is $X_\alpha$ if all indices equal $\alpha$, and empty otherwise. Step 1.1 deletes all mixed-index factors, so in every degree the Cech object is canonically $\prod_\alpha F(X_\alpha)$. Every face and degeneracy map is the identity on these surviving factors, since all the diagonal fiber products of a clopen inclusion are that same open subscheme. Thus this is the constant cosimplicial object on that product. [F2, step 1.1, construct]

3.1 The totalization of a constant cosimplicial object with its identity structure maps is the object itself: the simplex indexing category has contractible nerve, with its terminal object $[0]$, so the homotopy limit of this constant diagram has the canonical equivalence to its value. Apply [F2] and step 2.1. The augmentation maps to the surviving factors are precisely restriction to $X_\alpha$, giving the displayed natural equivalence. [F1, F2, step 2.1] ∎
