---
id: def-realification-of-a-complex-vector-space
kind: definition
title: "Realification of a complex vector space by restriction of scalars"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space, def-complex-numbers-and-arithmetic]
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Definition

Let $W$ be a vector space over the field $\mathbb C$ ([[def-complex-numbers-and-arithmetic]]). Its **realification**, written $W_{\mathbb R}$, is the real vector space whose underlying set and addition are those of $W$, and whose scalar multiplication is the restriction of the complex scalar multiplication to the canonical real embedding $\mathbb R\subseteq\mathbb C$:

$$r\cdot w:=rw\qquad(r\in\mathbb R,\ w\in W).$$

The axioms of a real vector space are the restriction of the corresponding complex axioms: complex scalar multiplication is already an $\mathbb R$-scalar multiplication, since $\mathbb R$ is a subfield of $\mathbb C$ through the constant-class map of [[def-complex-numbers-and-arithmetic]].

## Remarks

Realification forgets the chosen complex structure: different complex structures on the same abelian group can have the same realification. The definition is the prototype of restriction of scalars along $\mathbb R\subseteq\mathbb C$; no basis and no choice of coordinates is involved.
