---
id: def-natural-transformation
kind: definition
title: "Natural transformation and its components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: true
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

Let $F,G:\mathcal C\to\mathcal D$ be functors
([[def-functor-and-contravariant-functor]]). A **natural transformation**
$\alpha:F\Rightarrow G$ is a family of morphisms
$\alpha_A:FA\to GA$, one for each object $A$ of $\mathcal C$, such that every
$f:A\to B$ satisfies the **naturality equation**

$$Gf\circ\alpha_A=\alpha_B\circ Ff.$$

The morphism $\alpha_A$ is the **component** of $\alpha$ at $A$.

