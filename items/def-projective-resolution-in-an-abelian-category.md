---
id: def-projective-resolution-in-an-abelian-category
kind: definition
title: "Projective resolutions in an abelian category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-augmented-chain-complex-over-an-object, def-projective-object, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Definition

Let $A$ be an object of an abelian category. A **projective resolution of $A$** is an augmented chain complex $$\cdots \to P_2\to P_1\to P_0\xrightarrow{\varepsilon}A\to0$$ such that every $P_n$ is projective and the augmented complex is exact at every displayed term.

Thus a projective resolution is an exact way of recovering $A$ from projective objects arranged in homological degrees.
