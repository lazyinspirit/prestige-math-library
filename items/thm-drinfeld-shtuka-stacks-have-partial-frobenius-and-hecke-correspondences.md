---
id: thm-drinfeld-shtuka-stacks-have-partial-frobenius-and-hecke-correspondences
kind: theorem
title: Drinfeld shtuka stacks, partial Frobenius, and Hecke correspondences
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- def-drinfeld-shtuka-with-bounded-modification
- def-partial-frobenius-and-hecke-correspondences-for-shtukas
- def-algebraic-stack-and-inertia
- def-morphism-representable-by-algebraic-spaces
- def-etale-morphism-schemes
- def-smooth-morphism-schemes
- def-relative-dimension-smooth-morphism
- def-finite-morphism-schemes
- lem-shtuka-level-forgetting-is-a-finite-etale-frame-torsor
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
  - title: Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands
    url: https://www.laurentlafforgue.org/math/fulltext.pdf
    locator: Chapter I §1, Definitions I.1–I.2 and the following stack and partial-Frobenius
      statements, printed pp. 17–20.
  - title: Gérard Laumon, La correspondance de Langlands sur les corps de fonctions
    url: https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf
    locator: §2.1, shtuka stacks, level maps, partial Frobenius, and Hecke correspondences.
---

## Statement

Let $X/\mathbb F_q$ be a smooth projective geometrically connected curve, let $r\ge1$, and let $N\subset X$ be a nonempty finite closed subscheme. The moduli groupoid of rank-$r$ right Drinfeld shtukas with legs outside $N$ and compatible level-$N$ structure is represented by a Deligne–Mumford algebraic stack $\operatorname{Cht}_{r,N}$. Its level-forgetting map to the unlevelled shtuka groupoid restricted to the same leg-avoiding base $(X\setminus N)^2$ is representable finite étale Galois with group $\mathrm{GL}_r(\mathcal O_N)$, and its structure morphism to $(X\setminus N)\times(X\setminus N)$ is smooth of relative dimension $2r-2$. On the locus $\Lambda$ from the preceding definition, the stack has commuting partial Frobenius morphisms $\operatorname{Frob}_\infty$ and $\operatorname{Frob}_0$ lying over $F_X\times\operatorname{id}_X$ and $\operatorname{id}_X\times F_X$; their composite in either order is absolute Frobenius. The level-$N$ Hecke correspondences defined by double cosets in $\mathrm{GL}_r(\mathbb A_F)$ that are the identity at the places in the support of $N$ act on this stack by correspondences.

## Statement references

[Laurent Lafforgue, Chapter I §1](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §2.1](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

The AC-conditional finite étale level-cover component, over the correctly restricted target and for arbitrary bases and nonreduced finite levels, is proved completely in [[lem-shtuka-level-forgetting-is-a-finite-etale-frame-torsor]]. This does not establish the original unqualified statement. Deligne–Mumford algebraicity, smooth relative dimension, partial-Frobenius constructions and identities on the shtuka groupoid, and Hecke correspondences still require full local proofs; the original no-AC scope is also held. The base $\Lambda$ is an intersection scheme, generally not open.
