---
id: def-exterior-algebra-of-a-vector-space
kind: definition
title: "The graded exterior algebra $\\Lambda V$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-kth-exterior-power-by-quotient, def-decomposable-k-vector-and-basic-wedge-product]
aliases: []
landmark: true
short: "Exterior algebra $\\Lambda V$"
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Definition

The **exterior algebra** of $V$ is the graded vector space

$$\Lambda V:=\bigoplus_{k\ge0}\Lambda^kV=\Lambda^0V\oplus\Lambda^1V\oplus\Lambda^2V\oplus\cdots,$$

whose homogeneous piece of degree $k$ is the exterior power of [[def-kth-exterior-power-by-quotient]]. On decomposables of [[def-decomposable-k-vector-and-basic-wedge-product]] define the **wedge product**

$$(v_1\wedge\cdots\wedge v_k)\wedge(w_1\wedge\cdots\wedge w_\ell):=v_1\wedge\cdots\wedge v_k\wedge w_1\wedge\cdots\wedge w_\ell\in\Lambda^{k+\ell}V,$$

and extend bilinearly to all of $\Lambda^kV\times\Lambda^\ell V$. The product of two homogeneous elements is homogeneous of the sum of the degrees, so $\Lambda V$ is a graded algebra with unit $1\in F=\Lambda^0V$.

**The product is well defined.** Each generator
$v_1\otimes\cdots\otimes v_k$ of $W_k$ contains a repeated pair, so its
concatenation with any pure tensor of degree $\ell$ lies in $W_{k+\ell}$.
By linearity, concatenation sends
$W_k\times V^{\otimes\ell}$ and $V^{\otimes k}\times W_\ell$ into
$W_{k+\ell}$. It therefore descends to a bilinear map on the two quotient
spaces, and that descended map is exactly the displayed wedge product.
Associativity and the graded commutation law are proved in
[[thm-exterior-algebra-laws]].
