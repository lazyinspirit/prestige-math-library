---
id: def-finite-dimensional-representation-of-a-group-over-a-field
kind: definition
title: "A finite-dimensional representation $\\rho:G\\to \\operatorname{GL}(V)$ over a field, and its degree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dimension, def-field, def-group-homomorphism, def-linear-isomorphism-and-invertible-linear-map, def-g-module-over-a-commutative-ring, def-vector-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 1.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Definition

Let $k$ be a field ([[def-field]]) and let $G$ be a group. A
**finite-dimensional representation of $G$ over $k$** is a finite-dimensional
$k$-vector space $V$ ([[def-vector-space]], [[def-dimension]]) together with a
group homomorphism
$$\rho:G\longrightarrow \operatorname{GL}(V),$$
where $\operatorname{GL}(V)$ denotes the group of invertible $k$-linear maps
$V \to V$ ([[def-linear-isomorphism-and-invertible-linear-map]], [[def-group-homomorphism]]).

The associated action is
$$g \cdot v:=\rho(g)(v).$$
This makes $V$ into a $G$-module over $k$ in the sense of
[[def-g-module-over-a-commutative-ring]].

The **degree** of the representation is the dimension of its underlying vector
space:
$$\deg(\rho):=\dim_k V.$$

## Remarks

- The finite-dimensionality convention is part of the definition on this page,
  not a later standing assumption.

- The representation is determined equally well by the homomorphism $\rho$ or
  by the associated $k$-linear action of $G$ on $V$.
