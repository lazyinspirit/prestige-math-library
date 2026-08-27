---
id: def-intertwiner-equivalent-and-faithful-representations
kind: definition
title: "Intertwiners, the spaces $\\operatorname{Hom}_G(V,W)$ and $\\operatorname{End}_G(V)$, equivalent representations, and faithful representations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-linear-map, def-vector-space-of-linear-maps]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 2 Section 2.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $\rho:G \to \operatorname{GL}(V)$ and $\sigma:G \to \operatorname{GL}(W)$ be
representations of $G$ over the same field $k$.

A linear map $f:V \to W$ ([[def-linear-map]]) is an **intertwiner**, or
**$G$-equivariant map**, when
$$f(\rho(g)v)=\sigma(g)f(v)\qquad(g \in G,\ v \in V).$$
Equivalently,
$$f\rho(g)=\sigma(g)f\qquad(g \in G).$$

Write
$$\operatorname{Hom}_G(V,W)$$
for the set of all intertwiners. It is a subset of the vector space
$\mathcal L(V,W)$ of all linear maps ([[def-vector-space-of-linear-maps]]).
When $V=W$, write
$$\operatorname{End}_G(V):=\operatorname{Hom}_G(V,V).$$

The two representations are **equivalent** if there is an invertible
intertwiner $V \to W$.

A representation $\rho$ is **faithful** when $\rho(g)=\operatorname{id}_V$
implies $g=e$.

## Remarks

- Faithfulness says that the action remembers every group element.

- The equality $f\rho(g)=\sigma(g)f$ is the representation-language form of a
  module homomorphism condition.
