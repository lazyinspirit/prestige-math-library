---
id: def-three-colourability
kind: definition
title: "The three-colourability decision problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree]
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation, Chapter 8"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter8.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $G=(V,E)$ be a finite simple graph. A **proper three-colouring** of $G$ is
a map
$$ \kappa:V\to\{0,1,2\} $$
such that
$$ \kappa(u)\ne \kappa(v) \quad\text{whenever}\quad \{u,v\}\in E. $$

The decision problem **$3$-COLORABILITY** asks, given $G$, whether such a
proper three-colouring exists.
