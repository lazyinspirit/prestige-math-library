---
id: thm-fibered-knot-has-rank-one-top-knot-floer-homology
kind: theorem
title: "A fibered knot has rank-one top knot Floer homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - lem-ni-holomorphic-disk-and-jsj-analytic-inputs
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, §1"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed p.2; the top group of a fibered knot is a single copy of Z"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, Theorem 1.5 and §9"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.2–3 and 31–38; top knot Floer group as sutured Floer homology and the product criterion"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, Theorem 2.5"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed p.5; the S3 fibered-knot rank-one equivalence"
verification:
  precheck: n/a
---

## Statement

Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, and suppose $Y\setminus K$ fibers over $S^1$ with connected fiber a Seifert surface $F$ of genus $g$. Then the integral top Alexander group is one copy of the integers:

$$\widehat{\mathrm{HFK}}(Y,K,[F],g;\mathbb Z)\cong\mathbb Z.$$

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The integral Alexander grading and Seifert class]]

[[def-balanced-taut-sutured-manifold-and-product-region|The product sutured manifold obtained by cutting along a fiber]]

[Ni, *Knot Floer homology detects fibred knots*, §1](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, Theorem 1.5](https://arxiv.org/pdf/math/0609779v3)
