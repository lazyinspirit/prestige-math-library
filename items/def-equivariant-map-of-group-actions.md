---
id: def-equivariant-map-of-group-actions
kind: definition
title: "Equivariant maps and isomorphisms of group actions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action, def-function, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Definition

Let $X$ and $Y$ be $G$-sets ([[def-group-action]]). A function
$f:X\to Y$ ([[def-function]]) is **$G$-equivariant** when

$$f(g\cdot x)=g\cdot f(x)$$

for every $g\in G$ and $x\in X$. An **isomorphism of $G$-sets** is an
equivariant bijection ([[def-injection-surjection-bijection]]). Two actions are
**equivariantly isomorphic** when such a bijection exists between their
$G$-sets.
