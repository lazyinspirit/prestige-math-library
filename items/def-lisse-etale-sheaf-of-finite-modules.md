---
id: def-lisse-etale-sheaf-of-finite-modules
kind: definition
title: "Lisse étale sheaf with finite coefficients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-etale-sheaf-of-finite-modules
  - lem-locally-constant-functions-sheafify-the-constant-etale-presheaf
justified_by: []
axiom_use: "The finite coefficient definition is choice-neutral; the cited local realization of constant sheaves carries the AC-qualified open-map proof used by this authored dependency chain."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.64, Definition 59.64.1"
      url: https://stacks.math.columbia.edu/tag/09Y8
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 6"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Definition

Let $X$ be a scheme. A sheaf of sets on $X_{\acute e t}$ is **finite locally constant** if it is étale locally isomorphic to $\underline E$ for finite sets $E$. Let $\Lambda$ be a finite commutative ring with identity. A sheaf $\mathcal F$ of $\Lambda$-modules on $X_{\acute e t}$ is **finite locally constant**, or **lisse**, if there is an étale covering family $\{U_i\to X\}$ and finite $\Lambda$-modules $M_i$ such that $\mathcal F|_{U_i}\cong\underline{M_i}$ as module sheaves for every $i$. The finite values may differ between covering objects; no global trivialization is part of the definition.

## Definition references

[The Stacks Project, Section 59.64, Definition 59.64.1](https://stacks.math.columbia.edu/tag/09Y8)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 6](https://www.jmilne.org/math/CourseNotes/LEC.pdf)
