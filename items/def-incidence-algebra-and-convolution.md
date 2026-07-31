---
id: def-incidence-algebra-and-convolution
kind: definition
title: "The incidence functions $I(P,R)$ of a locally finite poset and their convolution"
status: published
origin: session
deps: [def-poset-interval-and-finiteness-conditions, def-finite-sum-in-a-commutative-monoid, def-commutative-ring, def-ring, def-ring-of-functions]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Definition

Let $(P,\le)$ be a locally finite poset ([[def-poset-interval-and-finiteness-conditions]]) and let $R$ be a commutative ring ([[def-commutative-ring]], [[def-ring]]). Put

$$\operatorname{Int}(P):=\{(x,y)\in P\times P:x\le y\}.$$

An **incidence function** with coefficients in $R$ is a function $f:\operatorname{Int}(P)\to R$. The set of all incidence functions is denoted

$$I(P,R):=R^{\operatorname{Int}(P)}.$$

Addition, zero and additive inverses are pointwise, as in the function ring of [[def-ring-of-functions]]. For $f,g\in I(P,R)$ their **convolution** is the incidence function

$$(f*g)(x,y):=\sum_{z\in[x,y]}f(x,z)g(z,y)\qquad(x\le y),$$

where the sum is the finite commutative-monoid sum of [[def-finite-sum-in-a-commutative-monoid]] in the additive monoid of $R$.

This operation is well defined precisely at the stated level of generality: local finiteness makes $[x,y]$ finite for each comparable pair, so the displayed ring-valued sum has finitely many terms. The definition makes no claim about sums over an entire principal ideal or principal filter.
