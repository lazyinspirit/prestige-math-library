---
id: def-simplicial-to-singular-chain-map
kind: definition
title: "The degreewise simplicial-to-singular homomorphisms"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-fundamental-singular-cycle-of-an-oriented-simplex, def-simplicial-chain-groups-and-boundary, def-geometric-realization-of-an-abstract-simplicial-complex]
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

Let $K$ be an abstract simplicial complex whose vertex set is equipped with a
total order. For each oriented $n$-simplex $\tau$ of $K$, let
$[v_0<\cdots<v_n]$ be the increasing ordering of its vertices and let
$\varepsilon(\tau)\in\{\pm1\}$ be the sign for which
$$\tau=\varepsilon(\tau)[v_0,\dots,v_n]$$
in the simplicial chain group from
[[def-simplicial-chain-groups-and-boundary]]. For each $n\geq 0$, the
**simplicial-to-singular homomorphism**
$$\Phi_n:C_n^{\mathrm{simp}}(K)\to C_n^{\mathrm{sing}}(|K|;\mathbb Z)$$
is defined on an oriented simplex $\tau$ by
$$\Phi_n(\tau):=\varepsilon(\tau)\,\chi_{[v_0,\dots,v_n]},$$
where $\chi_{[v_0,\dots,v_n]}$ is the affine characteristic singular simplex
from [[def-fundamental-singular-cycle-of-an-oriented-simplex]], and then
extended linearly.

Because the increasing representative of each simplex is unique, the sign
$\varepsilon(\tau)$ is well defined. Thus $\Phi_n$ is a well-defined homomorphism
with no ambiguity from reordering the vertices. The next lemma proves that the
family $(\Phi_n)$ commutes with the two boundaries and hence is a chain map.
