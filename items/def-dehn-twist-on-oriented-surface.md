---
id: def-dehn-twist-on-oriented-surface
kind: definition
title: "Dehn twist on an oriented surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-smooth-embedding
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Robion Kirby, A Calculus for Framed Links in S3"
      url: "https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf"
      locator: "§2, printed pp. 36–37; Dehn twists in the Heegaard gluing map"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $F$ be an oriented smooth surface and let $c:S^1\hookrightarrow F$ be a smooth embedded circle. Choose an annular coordinate map $\phi:S^1\times[-1,1]\to A\subset F$ whose product orientation agrees with the orientation of $F$ and whose core $\phi(S^1\times\{0\})$ is $c(S^1)$. Choose a smooth function $\rho:[-1,1]\to[0,1]$ that is $0$ near $-1$ and $1$ near $1$. The positive **Dehn twist about $c$ in the chosen annular coordinates** is the diffeomorphism that is the identity outside $A$ and on $A$ is
$$
\phi(e^{i\theta},t)\longmapsto\phi(e^{i(\theta+2\pi\rho(t))},t).
$$
The negative Dehn twist is its inverse. The annular coordinates and cutoff are part of the data whenever a representative diffeomorphism is used; its mapping class is its class under smooth isotopy through orientation-preserving diffeomorphisms of $F$.

## Definition references

[[def-oriented-smooth-manifold-and-oriented-chart|Orientation of the surface]]

[[def-smooth-embedding|The embedded circle]]

[Kirby, A Calculus for Framed Links in S3, §2, printed pp. 36–37](https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf)
