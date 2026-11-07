---
id: def-etale-sheaf-of-finite-modules
kind: definition
title: "Étale sheaves of modules over a finite ring"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-small-etale-site-of-a-scheme
  - lem-etale-coverings-form-a-grothendieck-site
justified_by:
  - lem-locally-constant-functions-sheafify-the-constant-etale-presheaf
axiom_use: "The sheaf and equalizer definitions make no choices; AC is carried only through the cited site and constant-sheaf existence proofs in this authoring chain."
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

Let $X$ be a scheme and consider its small étale site. A presheaf of sets assigns a set $F(U)$ to each object and a restriction map to each arrow, contravariantly and compatibly with composition. It is a **sheaf of sets** when, for every covering family $\{U_i\to U\}$, the diagram $F(U)\to\prod_iF(U_i)\rightrightarrows\prod_{i,j}F(U_i\times_U U_j)$ is an equalizer of sets. Let $\Lambda$ be a finite commutative ring with identity. A presheaf of $\Lambda$-modules assigns a unital $\Lambda$-module $\mathcal F(U)$ to each object and $\Lambda$-linear restrictions; it is a **sheaf of $\Lambda$-modules** when the same diagram is an equalizer in $\Lambda$-modules. A finite set or finite $\Lambda$-module means one with finite underlying set. The **sheafification** of a presheaf $P$ is a sheaf $aP$ with a presheaf morphism $P\to aP$ such that composition induces a bijection from morphisms $aP\to G$ to morphisms $P\to G$ for every sheaf $G$ in the same category. For a finite set $E$, its **constant étale sheaf** $\underline E$ is the sheafification of the presheaf with value $E$ and identity restrictions. For a finite $\Lambda$-module $M$, its **constant étale module sheaf** $\underline M$ is the sheafification of the corresponding module presheaf. These sheafifications are realized by locally constant functions, as the following lemma proves.

## Definition references

[The Stacks Project, Definition 59.64.1](https://stacks.math.columbia.edu/tag/09Y8)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 6](https://www.jmilne.org/math/CourseNotes/LEC.pdf)
