---
id: def-decomposable-k-vector-and-basic-wedge-product
kind: definition
title: "Decomposable $k$-vectors and the basic wedge product"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-kth-exterior-power-by-quotient]
aliases: []
landmark: false
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

For $v_1,\ldots,v_k\in V$, the image of the basic wedge map of [[def-kth-exterior-power-by-quotient]] is written

$$v_1\wedge\cdots\wedge v_k:=v_1\otimes\cdots\otimes v_k+W_k\in\Lambda^kV,$$

and is called the **wedge** (or **exterior product**) of the list. A $k$-vector $\alpha\in\Lambda^kV$ is **decomposable** (or **pure**) when it equals $v_1\wedge\cdots\wedge v_k$ for some list; a general element of $\Lambda^kV$ is a finite sum of decomposables, because the pure tensors span $V^{\otimes k}$ and their classes span the quotient.

For $k=0$ the empty wedge is $1\in F=\Lambda^0V$; for $k=1$ the wedge of a single vector is the vector itself under the identification $\Lambda^1V=V$.

## Remarks

The wedge of $v_1,\ldots,v_k$ depends on the order of the list only up to a sign (see [[thm-exterior-algebra-laws]]); the notation $v_1\wedge\cdots\wedge v_k$ records the order.
