---
id: def-picard-rank-over-number-field
kind: definition
title: "Picard rank over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-smooth-fano-variety-over-number-field
  - def-picard-group-scheme
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

Let $K$ be a number field and let $X/K$ be a smooth Fano variety. The Picard group $\operatorname{Pic}(X)$ is the abelian group of isomorphism classes of invertible $\mathcal O_X$-modules under tensor product. When this group is a free abelian group of finite rank, the **Picard rank over $K$** is $\rho(X):=\operatorname{rank}_{\mathbb Z}\operatorname{Pic}(X)$. This rank concerns line bundles defined on $X$ over $K$; it is not, by definition, the rank of $\operatorname{Pic}(X_{\overline K})$.

## Definition references

[[def-smooth-fano-variety-over-number-field]]

[[def-picard-group-scheme]]
