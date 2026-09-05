---
id: lem-simplicial-to-singular-chains-commute-with-boundaries
kind: lemma
title: "The simplicial-to-singular chain map commutes with boundaries"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simplicial-to-singular-chain-map, def-singular-boundary-operator, def-simplicial-chain-groups-and-boundary]
proof_strategy: direct
verification:
  precheck: pass
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

## Statement

For every simplicial complex $K$ equipped with a total order on its vertices
and every $n\geq 1$,
$$\partial^{\mathrm{sing}}\Phi_n=\Phi_{n-1}\partial^{\mathrm{simp}}:C_n^{\mathrm{simp}}(K)\to C_{n-1}^{\mathrm{sing}}(|K|;\mathbb Z).$$
In degree $0$, both boundaries are zero maps to $0$.

## Facts & Assumptions

**Given:** A simplicial complex $K$ with a total order on its vertices and an integer $n\geq 0$.

[L1] $\Phi_n$ sends an oriented simplex to the sign of its increasing representative times the corresponding affine characteristic singular simplex ([[def-simplicial-to-singular-chain-map]]).

[L2] The singular boundary is the alternating sum of affine face restrictions ([[def-singular-boundary-operator]]).

[L3] The simplicial boundary is the alternating sum of the oriented codimension-one faces ([[def-simplicial-chain-groups-and-boundary]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, then both $\partial^{\mathrm{sing}}$ and $\partial^{\mathrm{simp}}$ are zero maps in degree $0$, so the degree-zero claim is immediate. [L2, L3, given]

1.2 Assume $n\geq 1$ and let $\sigma=[v_0,\dots,v_n]$ be the increasing representative of an oriented simplex of $K$. By [L1], the singular chain $\Phi_n(\sigma)$ is the affine characteristic simplex $\chi_{[v_0,\dots,v_n]}$. Restricting along the face map $\delta_i$ therefore produces the affine characteristic simplex of the face $[v_0,\dots,\widehat v_i,\dots,v_n]$, listed in the induced increasing order. [L1, given]

2.1 Applying [L2] and [L3] to step 1.2 gives $$\partial^{\mathrm{sing}}\Phi_n(\sigma)=\sum_{i=0}^n(-1)^i\Phi_{n-1}([v_0,\dots,\widehat v_i,\dots,v_n])=\Phi_{n-1}\partial^{\mathrm{simp}}(\sigma)$$ for the increasing representative. The same overall orientation sign $\varepsilon(\tau)$ from [L1] multiplies both sides for an arbitrary oriented simplex $\tau$, so the identity holds on every generator and hence on all simplicial chains by linearity; step 1.1 handles degree $0$. [L1, L2, L3, step 1.1, step 1.2, algebra] ∎
