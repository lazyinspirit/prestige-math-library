---
id: def-cardinality-of-a-small-category-and-kappa-small-diagram
kind: definition
title: "Assuming Choice, cardinality of a small category and κ-small diagrams"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-small-locally-small-and-large-category, lem-cardinality-of-a-well-orderable-set, def-cardinal-arithmetic, def-axiom-of-choice, def-diagram-in-a-category]
justified_by: []
aliases: [def-kappa-small-diagram]
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.7.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), so every set has a
cardinality ([[lem-cardinality-of-a-well-orderable-set]],
[[def-cardinal-arithmetic]]). For a small category $\mathcal J$
([[def-small-locally-small-and-large-category]]), define

$$|\mathcal J|:=|\operatorname{Mor}(\mathcal J)|.$$

Every object contributes an identity morphism, so this convention also bounds
the number of objects. The **cardinality of a small diagram**
$D:\mathcal J\to\mathcal C$ ([[def-diagram-in-a-category]]) is $|\mathcal J|$.
For a cardinal $\kappa$, the diagram is **$\kappa$-small** when
$|\mathcal J|<\kappa$.
