---
id: lem-ni-fiberedness-sutured-floer-and-gabai-inputs
kind: lemma
title: "Ni's sutured Floer and Gabai product criterion"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-jsj-decomposition-of-knot-exteriors
  - def-satellite-pattern-companion-and-winding-number
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - def-knot-relative-spinc-structure
  - lem-ni-holomorphic-disk-and-jsj-analytic-inputs
  - def-axiom-of-choice
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, §§3–7"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed pp.7–20; homology-product reduction, horizontal decomposition, product annuli, characteristic product region, and Theorem 1.1 proof"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, §§8–9"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.28–38; taut sutured Floer nonvanishing, Theorem 9.7 rank lower bound, and Theorem 9.11 fibering criterion"
    - title: "David Gabai, Foliations and the topology of 3-manifolds III, Theorem 3.13 and Theorem 8.9"
      url: "https://doi.org/10.2307/1971333"
      locator: "Taut hierarchies, norm-minimizing surfaces, and the foliations used in Ni's characteristic-product-region argument"
verification:
  precheck: n/a
---

## Statement

Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, let $Y\setminus K$ be irreducible, and let $F$ be a genus-$g$ Seifert surface. If the integral top Alexander group $\widehat{\mathrm{HFK}}(Y,K,[F],g;\mathbb Z)$ is isomorphic to $\mathbb Z$, then the sutured manifold obtained by cutting the compact knot exterior along $F$ is a product sutured manifold. The argument uses Ni's homology-product reduction, the horizontal and separating product-annulus decompositions, the characteristic product region, and Gabai's taut-foliation input under their stated hypotheses.

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The integral top Alexander group and normalization]]

[[def-balanced-taut-sutured-manifold-and-product-region|Product sutured manifold and characteristic product region]]

[[def-sutured-floer-chain-complex|Sutured Floer homology notation and coefficients]]

[Ni, *Knot Floer homology detects fibred knots*, §§3–7](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, §§8–9](https://arxiv.org/pdf/math/0609779v3)

[Gabai, *Foliations and the topology of 3-manifolds III*](https://doi.org/10.2307/1971333)
