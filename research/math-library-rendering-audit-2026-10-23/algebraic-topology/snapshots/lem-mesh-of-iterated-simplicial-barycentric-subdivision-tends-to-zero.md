---
id: lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero
kind: lemma
title: "Mesh of iterated simplicial barycentric subdivision tends to zero"
status: published
origin: pipeline
deps: ["lem-barycentric-face-chains-triangulate-a-geometric-simplex", "lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology", "def-metric-bounded-diameter"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

For a finite Euclidean simplicial complex $K$ define its simplex mesh $m(K)$ to be the maximum diameter of its nonempty simplices, with the separate convention $m(K)=0$ if there are none. If $\dim K=n\geq1$, then
$$m(\operatorname{sd}^rK)\leq\left(\frac n{n+1}\right)^r m(K)\longrightarrow0.$$
Every nonempty vertex star has diameter at most $2m(K)$. Zero-dimensional and vertex-free complexes have mesh zero. The metric is the original Euclidean metric transported through barycentric realization, not a new unit-edge metric at each subdivision.

## Source locators

2.1, p.120 (complete mesh argument); Maunder 2.5.15 p.53.


## Facts & Assumptions

[F1] Diameter is the supremum of distances for nonempty bounded sets. [[def-metric-bounded-diameter]].

[F2] Subdivided simplices have vertices in nested barycentric face chains. [[lem-barycentric-face-chains-triangulate-a-geometric-simplex]].

[F3] Finite weak and Euclidean topologies agree. [[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]].


## Proof

**Given:** A finite complex linearly realized in Euclidean space, with its inherited distance.

1.1 For points $x=\sum_i a_iv_i$ and $y=\sum_j b_jv_j$ in a simplex, $\|x-y\|\leq\sum_{i,j}a_ib_j\|v_i-v_j\|\leq\max_{i,j}\|v_i-v_j\|$, since all weights are nonnegative and sum to $1$. The maximum is attained by vertices, so it equals the diameter. A point has diameter zero; the definition of mesh assigns zero to a vertex-free complex without taking a diameter of the empty set. [F1]

2.1 For nonempty nested faces $F\subsetneq G\subseteq\sigma$, $b_G=(\#F/\#G)b_F+(1-\#F/\#G)b_{G\setminus F}$. Thus $\|b_G-b_F\|\leq(1-\#F/\#G)\operatorname{diam}\sigma\leq n/(n+1)\operatorname{diam}\sigma$. Vertices of every subdivided simplex form such a chain, so the previous diameter calculation bounds its diameter by this factor. Iteration gives the asserted estimate. Since $0<n/(n+1)<1$, its powers tend to zero. Zero-dimensional simplices remain points. [F2, step 1.1]

3.1 For any $x$ in the open or closed vertex star of $v$, some simplex contains both $x$ and $v$, so $\|x-v\|\leq m(K)$. For two points $x,y$ in that star, the triangle inequality gives $\|x-y\|\leq2m(K)$, and taking the supremum proves the star bound. Finite weak realization topology agrees with the Euclidean topology, so these estimates use a compatible metric. [F1, F3, step 1.1] ∎
