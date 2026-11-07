---
id: def-geometric-picard-rank
kind: definition
title: "Geometric Picard rank"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-smooth-fano-variety-over-number-field
  - def-picard-group-scheme
  - def-algebraic-closure
  - def-absolute-galois-group-of-a-global-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §§3–4"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Régis de la Bretèche, Tim Browning, and Emmanuel Peyre, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one, §§2, 4"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/div-class-title-the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one-div.pdf"
verification: {}
---

## Definition

Let $K$ be a number field, let $X/K$ be a smooth Fano variety, and let $\overline K$ be an algebraic closure. The **geometric Picard group** is $\operatorname{Pic}(X_{\overline K})$, the group of isomorphism classes of invertible sheaves on $X_{\overline K}$. If it is free of finite rank, its rank $\overline\rho(X):=\operatorname{rank}_{\mathbb Z}\operatorname{Pic}(X_{\overline K})$ is the **geometric Picard rank**. This group carries the natural action of $G_K:=\operatorname{Gal}(\overline K/K)$ by transport of line bundles; the geometric rank and the rank of the subgroup of $G_K$-invariant classes are distinct quantities.

## Definition references

[[def-smooth-fano-variety-over-number-field]]

[[def-picard-group-scheme]]

[[def-algebraic-closure]]

[[def-absolute-galois-group-of-a-global-field]]
