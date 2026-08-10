---
id: def-vertical-composition-of-natural-transformations
kind: definition
title: "Identity natural transformation and vertical composition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-transformation]
justified_by: [lem-vertical-composition-of-natural-transformations-is-natural]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

For a functor $F:\mathcal C\to\mathcal D$, the **identity natural
transformation** $1_F:F\Rightarrow F$ has component $(1_F)_A=1_{FA}$.

For natural transformations $\alpha:F\Rightarrow G$ and
$\beta:G\Rightarrow H$ ([[def-natural-transformation]]), their **vertical
composite** $\beta\circ\alpha:F\Rightarrow H$ is defined componentwise by

$$(\beta\circ\alpha)_A=\beta_A\circ\alpha_A.$$

The fact that this componentwise family is natural is discharged by
[[lem-vertical-composition-of-natural-transformations-is-natural]].

