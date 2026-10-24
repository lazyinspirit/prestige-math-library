---
id: lem-induced-singular-chain-maps-commute-with-boundaries
kind: lemma
title: "Induced singular chain maps commute with boundaries"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-singular-chain-map, def-singular-boundary-operator]
proof_strategy: direct
verification:
  audited: 2026-09-05
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

If $f:X\to Y$ is continuous, then for every $n\geq 1$ and every abelian group
$G$,
$$\partial_n\circ f_{\#,n}=f_{\#,n-1}\circ\partial_n:C_n(X;G)\to C_{n-1}(Y;G).$$
In degree $0$, both composites from $C_0(X;G)$ to $0$ are the zero map.

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$, an abelian group $G$, and an integer $n\geq 0$.

[L1] The induced map sends a singular simplex $\sigma$ to the composite $f\circ\sigma$ ([[def-induced-singular-chain-map]]).

[L2] The singular boundary is the alternating sum of the affine face restrictions ([[def-singular-boundary-operator]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, then $\partial_0=0$ by [L2], so both composites from $C_0(X;G)$ to $0$ are the zero map. [L2, given]

1.2 Assume $n\geq 1$ and let $\sigma:\Delta^n\to X$ be a singular $n$-simplex. By [L1] and [L2], $$\partial_n f_{\#,n}(\sigma)=\sum_{i=0}^n(-1)^i(f\circ\sigma)\circ\delta_i=\sum_{i=0}^n(-1)^if\circ(\sigma\circ\delta_i).$$ The same formulas give $$f_{\#,n-1}\partial_n(\sigma)=f_{\#,n-1}\left(\sum_{i=0}^n(-1)^i\sigma\circ\delta_i\right)=\sum_{i=0}^n(-1)^if\circ(\sigma\circ\delta_i),$$ so the two values agree on every singular simplex. [L1, L2, given, algebra]

2.1 Singular simplices generate $C_n(X;\mathbb Z)$, and the coefficient-$G$ map is the tensor extension of the integer-coefficient map. Therefore step 1.2 proves the identity for every $n\geq 1$, while step 1.1 handles degree $0$. [step 1.1, step 1.2] ∎
