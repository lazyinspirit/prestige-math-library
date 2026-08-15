---
id: def-internal-semidirect-product
kind: definition
title: "An internal semidirect product and a complement to a normal subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-subgroup, def-subgroup]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Definition

Let $N$ and $H$ be subgroups ([[def-subgroup]]) of a group $G$. The group $G$ is the **internal semidirect product** of $N$ by $H$ when

$$N\trianglelefteq G,\qquad G=NH,\qquad N\cap H=\{1\}.$$

Here $N\trianglelefteq G$ means that $N$ is normal in $G$ ([[def-normal-subgroup]]). In this situation $H$ is called a **complement** to $N$ in $G$.
