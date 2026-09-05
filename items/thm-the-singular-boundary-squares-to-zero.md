---
id: thm-the-singular-boundary-squares-to-zero
kind: theorem
title: "The singular boundary squares to zero"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-boundary-operator, lem-affine-face-maps-satisfy-the-cosimplicial-identities]
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

For every topological space $X$, every abelian group $G$, and every integer
$n\geq 1$,
$$\partial_{n-1}\partial_n=0:C_n(X;G)\to C_{n-2}(X;G).$$
In degree $0$, the boundary is already the zero map.

## Facts & Assumptions

**Given:** A topological space $X$, an abelian group $G$, and an integer $n\geq 0$.

[L1] The singular boundary is the alternating sum of affine face restrictions ([[def-singular-boundary-operator]]).

[L2] For $i<j$, the affine face maps satisfy $$\delta_j\delta_i=\delta_i\delta_{j-1}$$ ([[lem-affine-face-maps-satisfy-the-cosimplicial-identities]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, then $\partial_0=0$ by [L1], so the degree-zero boundary is already zero. If $n=1$ and $\sigma:\Delta^1\to X$ is a singular $1$-simplex, then $$\partial_0\partial_1\sigma=\partial_0(\sigma\delta_0-\sigma\delta_1)=0,$$ again because $\partial_0=0$. Thus the claim holds in the two low degrees. [L1, given]

1.2 Assume $n\geq 2$ and let $\sigma:\Delta^n\to X$ be a singular $n$-simplex. Expanding twice with [L1] gives $$\partial_{n-1}\partial_n\sigma=\sum_{i=0}^n\sum_{j=0}^{n-1}(-1)^{i+j}\sigma\delta_i\delta_j.$$ Reindex the terms by pairs $0\leq j<i\leq n$ and $0\leq i\leq j\leq n-1$. By [L2], the term $\sigma\delta_i\delta_j$ with $j<i$ equals $\sigma\delta_j\delta_{i-1}$, but the two appearances carry opposite signs because $$(-1)^{i+j}=-(-1)^{j+(i-1)}.$$ Hence every codimension-two face occurs twice with opposite coefficients, so the whole sum is zero. [L1, L2, given, algebra]

2.1 Since singular simplices generate $C_n(X;\mathbb Z)$ and the coefficient version is obtained by tensor extension, steps 1.1 and 1.2 imply $\partial_{n-1}\partial_n=0$ on $C_n(X;G)$ for every $n\geq 1$, with degree $0$ handled separately in step 1.1. [step 1.1, step 1.2] ∎
