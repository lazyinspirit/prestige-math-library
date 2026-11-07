---
id: def-perfectoid-space
kind: definition
title: "Perfectoid space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-perfectoid-affinoid-k-algebra
  - def-affinoid-adic-spectrum-and-rational-subsets
  - thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity
  - def-ringed-space
  - def-locally-ringed-space
  - def-morphism-locally-ringed-spaces
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Definition 6.15"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a perfectoid field $K$. An **adic space over $K$** in this setting is a locally ringed space obtained by gluing affinoid adic spectra $\operatorname{Spa}(R,R^+)$ of complete Tate $K$-algebra pairs along open subspaces by morphisms of locally ringed spaces that respect the valuation-defined affinoid charts. A **perfectoid space over $K$** is an adic space that is locally isomorphic, as an adic space over $K$, to $\operatorname{Spa}(R,R^+)$ for a perfectoid affinoid $K$-algebra $(R,R^+)$. Morphisms of perfectoid spaces are morphisms of their underlying adic spaces over $K$.

## Definition references

[[def-perfectoid-affinoid-k-algebra]]

[[def-affinoid-adic-spectrum-and-rational-subsets]]

[[thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity]]

[[def-locally-ringed-space]]

[[def-morphism-locally-ringed-spaces]]

[Peter Scholze, *Perfectoid Spaces*, Definition 6.15](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)
