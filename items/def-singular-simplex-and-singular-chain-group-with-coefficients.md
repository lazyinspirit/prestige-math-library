---
id: def-singular-simplex-and-singular-chain-group-with-coefficients
kind: definition
title: "Singular simplices and singular chain groups with coefficients"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-standard-topological-simplex-and-its-affine-face-maps, def-continuous-map-top, def-tensor-product-of-modules-by-generators-and-relations]
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
    - title: "J. Peter May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: frontier-30
---

## Definition

Let $X$ be a topological space. For each integer $n\geq 0$, a
**singular $n$-simplex in $X$** is a continuous map
$$\sigma:\Delta^n\to X$$
from the standard topological simplex of
[[def-standard-topological-simplex-and-its-affine-face-maps]]. Write
$S_n(X)$ for the set of all singular $n$-simplices in $X$.

The **singular chain group with integer coefficients** is the free abelian group
on $S_n(X)$:
$$C_n(X;\mathbb Z):=\bigoplus_{\sigma\in S_n(X)}\mathbb Z[\sigma].$$
Thus an element of $C_n(X;\mathbb Z)$ is a finite formal sum
$$\sum_{k=1}^m a_k\sigma_k,\qquad a_k\in\mathbb Z,\ \sigma_k\in S_n(X).$$

If $G$ is an abelian group, the **singular chain group with coefficients in
$G$** is
$$C_n(X;G):=C_n(X;\mathbb Z)\otimes_{\mathbb Z} G,$$
using the tensor product of
[[def-tensor-product-of-modules-by-generators-and-relations]]. The page's
convention is that coefficients are attached through this tensor-product
construction, not by choosing a preferred $G$-basis of singular simplices.
