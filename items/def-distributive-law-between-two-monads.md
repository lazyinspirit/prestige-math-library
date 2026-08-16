---
id: def-distributive-law-between-two-monads
kind: definition
title: "Distributive law between two monads"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monad]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Cheng, Distributive laws for Lawvere theories, Definition 2.1"
      url: "https://compositionality.episciences.org/13507/pdf"
pipeline_run: null
---

## Definition

Let $(S,\eta^S,\mu^S)$ and $(T,\eta^T,\mu^T)$ be monads on a category $\mathcal C$. A **distributive law of $S$ over $T$** is a natural transformation $\lambda:ST\Rightarrow TS$ satisfying

$$\lambda\circ\eta^S T=T\eta^S,\qquad \lambda\circ S\eta^T=\eta^T S,$$

and

$$\lambda\circ\mu^S T=T\mu^S\circ\lambda S\circ S\lambda,$$

$$\lambda\circ S\mu^T=\mu^T S\circ T\lambda\circ\lambda T.$$
