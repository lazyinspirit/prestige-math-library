---
id: def-induced-singular-chain-map
kind: definition
title: "The induced singular chain map of a continuous map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-simplex-and-singular-chain-group-with-coefficients, def-continuous-map-top]
verification:
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

Let $f:X\to Y$ be a continuous map of topological spaces. For each $n\geq 0$,
the **induced singular chain map in degree $n$** is the homomorphism
$$f_{\#,n}:C_n(X;\mathbb Z)\to C_n(Y;\mathbb Z)$$
defined on a singular simplex $\sigma:\Delta^n\to X$ by
$$f_{\#,n}(\sigma):=f\circ\sigma,$$
and extended $\mathbb Z$-linearly.

For coefficients in an abelian group $G$, tensor with
$\operatorname{id}_G$ to obtain
$$f_{\#,n}:C_n(X;G)\to C_n(Y;G).$$
The family $(f_{\#,n})_{n\geq 0}$ is denoted $f_\#:C_\bullet(X;G)\to
C_\bullet(Y;G)$.
