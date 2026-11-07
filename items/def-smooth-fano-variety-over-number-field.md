---
id: def-smooth-fano-variety-over-number-field
kind: definition
title: "Smooth Fano variety over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-projective-variety-classical
  - def-scheme-over-base
  - def-smooth-morphism-classical
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-ample-invertible-sheaf
  - def-invertible-sheaf
  - def-algebraic-closure
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §3"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Régis de la Bretèche, Tim Browning, and Emmanuel Peyre, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one, §2"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/div-class-title-the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one-div.pdf"
verification: {}
---

## Definition

Let $K$ be a number field and let $X$ be a smooth, projective, geometrically integral $K$-variety of dimension $d\ge1$. Here geometrically integral means that $X_{\overline K}:=X\times_K\overline K$ is integral, where $\overline K$ is an algebraic closure of $K$. Write $\omega_{X/K}:=\bigwedge^d\Omega^1_{X/K}$ for the canonical line bundle and $-K_X:=\omega_{X/K}^{\vee}$ for its dual. The variety $X$ is a **smooth Fano variety over $K$** if $-K_X$ is ample.

## Definition references

[[def-number-field]]

[[def-projective-variety-classical]]

[[def-scheme-over-base]]

[[def-smooth-morphism-classical]]

[[def-smooth-projective-dualizing-line-bundle-and-trace]]

[[def-ample-invertible-sheaf]]

[[def-invertible-sheaf]]

[[def-algebraic-closure]]
