---
id: def-singular-boundary-operator
kind: definition
title: "The singular boundary operator"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-simplex-and-singular-chain-group-with-coefficients]
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Definition

Let $X$ be a topological space and let $n\geq 1$. For a singular $n$-simplex
$\sigma:\Delta^n\to X$, its **singular boundary** is
$$\partial_n\sigma:=\sum_{i=0}^n(-1)^i\sigma\circ\delta_i\in C_{n-1}(X;\mathbb Z),$$
where the $\delta_i$ are the affine face maps from
[[def-singular-simplex-and-singular-chain-group-with-coefficients]].

Extend this formula $\mathbb Z$-linearly to a homomorphism
$$\partial_n:C_n(X;\mathbb Z)\to C_{n-1}(X;\mathbb Z).$$
For coefficients in an abelian group $G$, the boundary on $C_n(X;G)$ is the
tensor extension
$$\partial_n\otimes\operatorname{id}_G:C_n(X;G)\to C_{n-1}(X;G),$$
again denoted $\partial_n$.

The degree-zero boundary is the zero map
$$\partial_0:C_0(X;G)\to 0,$$
and for negative indices the chain groups are taken to be zero.
