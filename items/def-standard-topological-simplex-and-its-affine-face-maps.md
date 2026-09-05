---
id: def-standard-topological-simplex-and-its-affine-face-maps
kind: definition
title: "The standard topological simplex and its affine face maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
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

For each integer $n\geq 0$, the **standard topological $n$-simplex** is
$$\Delta^n:=\left\{(t_0,\dots,t_n)\in\mathbb R^{n+1}: t_i\geq 0\text{ for all }i,\ \sum_{i=0}^n t_i=1\right\},$$
with the subspace topology from $\mathbb R^{n+1}$. Its vertices are the
standard basis vectors $v_0,\dots,v_n$.

For $n\geq 1$ and $0\leq i\leq n$, the **$i$th affine face map**
$$\delta_i:\Delta^{n-1}\to\Delta^n$$
is the continuous affine map that inserts a zero in the $i$th coordinate:
$$\delta_i(t_0,\dots,t_{n-1})=(t_0,\dots,t_{i-1},0,t_i,\dots,t_{n-1}).$$
Equivalently, $\delta_i$ carries the vertex $v_k$ of $\Delta^{n-1}$ to $v_k$
for $k<i$ and to $v_{k+1}$ for $k\geq i$, so its image is the face opposite
the vertex $v_i$.

For $n=0$ there are no face maps because $\Delta^{-1}$ is not part of the
chain-level indexing used on this page.
