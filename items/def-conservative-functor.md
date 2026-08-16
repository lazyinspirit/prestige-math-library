---
id: def-conservative-functor
kind: definition
title: "Conservative functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor, def-isomorphism-groupoid-and-connected-category]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., discussion following Lemma 5.6.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A functor $U:\mathcal D\to\mathcal C$ is **conservative** if it reflects isomorphisms: whenever $f$ is a morphism of $\mathcal D$ and $U(f)$ is an isomorphism in $\mathcal C$ ([[def-isomorphism-groupoid-and-connected-category]]), the morphism $f$ is an isomorphism in $\mathcal D$.
