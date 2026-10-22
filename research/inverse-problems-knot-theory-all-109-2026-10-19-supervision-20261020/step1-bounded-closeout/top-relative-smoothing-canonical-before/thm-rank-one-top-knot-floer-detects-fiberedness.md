---
id: thm-rank-one-top-knot-floer-detects-fiberedness
kind: theorem
title: "Rank-one top knot Floer homology detects fibering"
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
  - lem-ni-fiberedness-sutured-floer-and-gabai-inputs
  - def-axiom-of-choice
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, Theorem 1.1"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed p.2 for exact hypotheses; §§3–7 for the homology-product, horizontal-decomposition, product-annulus, characteristic-region, and regluing proof"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, Theorem 9.11 and proof"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.36–38; HFK-sutured identification, tautness, rank lower bound for a nonproduct, and reconstruction of the fibration"
verification:
  precheck: n/a
---

## Statement

Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, and suppose that the knot complement $Y\setminus K$ is irreducible. Let $F$ be a genus-$g$ Seifert surface for $K$. If the integral top Alexander group satisfies

$$\widehat{\mathrm{HFK}}(Y,K,[F],g;\mathbb Z)\cong\mathbb Z,$$

then $Y\setminus K$ fibers over $S^1$ with fiber $F$.

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The integral top Alexander group]]

[[def-balanced-taut-sutured-manifold-and-product-region|The sutured complement cut along F and its product structure]]

[Ni, *Knot Floer homology detects fibred knots*, Theorem 1.1 and §§3–7](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, Theorem 9.11](https://arxiv.org/pdf/math/0609779v3)
