---
id: def-barycentric-subdivision-prism-homotopy
kind: definition
title: "Subdivision prism homotopy"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-barycentric-subdivision-chain-operator, def-barycenter-and-affine-cone-on-a-singular-chain]
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Definition

Let $\iota_n:\Delta^n\to\Delta^n$ be the identity affine simplex. Put
$P_0=0$. Inductively, after $P_m$ has been defined for $m<n$, set
$P(\lambda)=\lambda_\#P_m$ for every affine $m$-simplex
$\lambda:\Delta^m\to\Delta^n$. Then define the linear $(n+1)$-chain
$$P_n=b_n\bigl(\iota_n-P(\partial\iota_n)\bigr),$$
where $b_n(-)$ is affine coning inside the convex simplex $\Delta^n$ to its
barycenter. For a singular simplex $\sigma:\Delta^n\to X$, set
$T(\sigma)=\sigma_\#P_n$ and extend $G$-linearly. This degree-one operator is
the **subdivision prism homotopy**.
