---
id: def-kth-exterior-power-by-quotient
kind: definition
title: "The $k$th exterior power as the tensor-power quotient by repeated-vector relations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alternating-k-linear-map, cor-finite-iterated-tensor-products-represent-multilinear-maps]
aliases: []
landmark: true
short: "Exterior power $\\Lambda^kV$"
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

Let $V$ be a vector space over a field $F$ and let $k\ge0$. The **$k$-fold tensor power** is $V^{\otimes0}=F$, $V^{\otimes1}=V$, and for $k\ge2$ the iterated tensor product of $k$ copies of $V$ under any parenthesization. By [[cor-finite-iterated-tensor-products-represent-multilinear-maps]] every parenthesization represents the $k$-linear maps out of $V^k$, and different parenthesizations are joined by the unique isomorphism preserving pure tensors, so $V^{\otimes k}$ is determined up to that isomorphism.

Let $W_k\subseteq V^{\otimes k}$ be the subspace **spanned** by all pure tensors $v_1\otimes\cdots\otimes v_k$ for which $v_i=v_j$ for some pair $1\le i<j\le k$ (so $W_0=W_1=0$). The **$k$th exterior power** of $V$ is the quotient vector space

$$\Lambda^kV:=V^{\otimes k}/W_k,$$

and the **basic wedge map** is

$$\wedge:V^k\longrightarrow\Lambda^kV,\qquad (v_1,\ldots,v_k)\longmapsto v_1\otimes\cdots\otimes v_k+W_k.$$

## Remarks

The construction never divides by $k!$, so $\Lambda^kV$ is defined in every characteristic. Its relation to the [[def-alternating-k-linear-map]] maps is the universal property of [[thm-universal-property-and-uniqueness-of-exterior-powers]]; the convention fixed here is that a repeated entry makes the wedge zero.
