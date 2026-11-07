---
id: def-constructible-etale-sheaf-of-finite-modules
kind: definition
title: "Constructible étale sheaf with finite coefficients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-lisse-etale-sheaf-of-finite-modules
  - def-locally-noetherian-and-noetherian-scheme
justified_by: []
axiom_use: "The finite stratification definition itself uses no choice; its lisse strata inherit the constant-sheaf interface recorded in the preceding definition."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.71, Definition 59.71.1, and Section 59.74"
      url: https://stacks.math.columbia.edu/tag/03RW
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 14"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Definition

Let $X$ be a Noetherian scheme and let $\Lambda$ be a finite commutative ring with identity. An étale sheaf $\mathcal F$ of $\Lambda$-modules on $X$ is **constructible** if there is a finite partition $X=\coprod_{i=1}^m X_i$ into locally closed subschemes, each closed in an open subscheme and with the indicated underlying subsets disjoint and exhaustive, such that, for every stratum $X_i$, the inverse-image sheaf $\mathcal F|_{X_i}$ on the small étale site of $X_i$ is finite locally constant.

## Definition references

[The Stacks Project, Definition 59.71.1 and Section 59.74](https://stacks.math.columbia.edu/tag/03RW)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 14](https://www.jmilne.org/math/CourseNotes/LEC.pdf)
