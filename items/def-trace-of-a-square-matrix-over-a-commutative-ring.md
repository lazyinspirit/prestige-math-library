---
id: def-trace-of-a-square-matrix-over-a-commutative-ring
kind: definition
title: "The trace of a square matrix over a commutative ring"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Section 4.7"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Definition 8.47"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $p\in\mathbb N$, and let $A=(a_{ij})\in M_p(R)$ ([[def-matrices-over-a-commutative-ring]]). The **trace of $A$ over $R$** is

$$\operatorname{tr}_R(A):=\sum_{i<p}a_{ii}.$$

For $p=0$, this is the empty sum and equals $0_R$. The subscript may be omitted when the coefficient ring is clear.

