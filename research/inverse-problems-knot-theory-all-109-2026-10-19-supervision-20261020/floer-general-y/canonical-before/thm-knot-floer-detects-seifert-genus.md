---
id: thm-knot-floer-detects-seifert-genus
kind: theorem
title: "Knot Floer homology detects the Seifert genus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - def-axiom-of-choice
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and genus bounds, arXiv:math/0311496, Theorem 1.2 and proof"
      url: "https://arxiv.org/pdf/math/0311496"
      locator: "Printed pp.2 and 18–19; zero-surgery, taut foliation, contact nonvanishing, and the genus-one connected-sum case"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, Theorems 1.4–1.5 and Corollary 8.3"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.2–3 and 28–29; taut sutured Floer nonvanishing, the HFK-sutured decomposition, and genus detection"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, Theorem 2.3"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed p.5; S3 genus-detection formula and normalization"
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Countable Choice. Let $K\subset S^3$ be a smooth oriented knot, and let $g(K)$ be the least genus of a compact connected oriented embedded surface in $S^3$ with boundary $K$. With the integral Alexander normalization, the maximum Alexander grading in which the hat knot Floer homology of $K$ is nonzero is $g(K)$:

$$g(K)=\max\{i\in\mathbb Z:\widehat{\mathrm{HFK}}(S^3,K,i;\mathbb Z)\ne0\}.$$

## Statement references

[[def-oriented-seifert-surface-and-knot-genus|The minimum genus among embedded Seifert surfaces]]

[[def-top-alexander-grading-of-knot-floer-homology|The integral absolute Alexander grading]]

[Ozsvath and Szabo, *Holomorphic disks and genus bounds*, Theorem 1.2](https://arxiv.org/pdf/math/0311496)

[Juhasz, *Floer homology and surface decompositions*, Corollary 8.3](https://arxiv.org/pdf/math/0609779v3)

[Manolescu, *An Introduction to Knot Floer Homology*, Theorem 2.3](https://web.stanford.edu/~cm5/hfk.pdf)
