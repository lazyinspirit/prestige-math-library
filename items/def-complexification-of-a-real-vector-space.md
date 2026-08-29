---
id: def-complexification-of-a-real-vector-space
kind: definition
title: "Complexification as $\\mathbb C\\otimes_{\\mathbb R}V$ with its canonical real-linear embedding"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space, def-complex-numbers-and-arithmetic, thm-universal-property-of-module-tensor-products]
aliases: []
landmark: true
short: "Complexification $\\mathbb C\\otimes_{\\mathbb R}V$"
verification:
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

Let $V$ be a real vector space ([[def-vector-space]]) and regard $\mathbb C$ as a real vector space through the constant-class map of [[def-complex-numbers-and-arithmetic]]. The **complexification** of $V$ is the real tensor product

$$V_{\mathbb C}:=\mathbb C\otimes_{\mathbb R}V.$$

It becomes a complex vector space through the scalar action

$$z\cdot(w\otimes v):=(zw)\otimes v\qquad(z,w\in\mathbb C,\ v\in V),$$

and it carries the canonical real-linear **embedding**

$$\iota:V\longrightarrow V_{\mathbb C},\qquad \iota v:=1\otimes v.$$

**The scalar action is well defined.** For fixed $z\in\mathbb C$ the map $(w,v)\mapsto(zw)\otimes v$ from $\mathbb C\times V$ to $V_{\mathbb C}$ is additive in each variable and $\mathbb R$-balanced, so by [[thm-universal-property-of-module-tensor-products]] it induces a unique $\mathbb R$-linear map $\mu_z:V_{\mathbb C}\to V_{\mathbb C}$ with $\mu_z(w\otimes v)=(zw)\otimes v$. The identities $\mu_{z+z'}=\mu_z+\mu_{z'}$, $\mu_{zz'}=\mu_z\circ\mu_{z'}$ and $\mu_1=\operatorname{id}$ hold on every elementary tensor and hence everywhere, so the action makes $V_{\mathbb C}$ a complex vector space.

## Remarks

The tensor product is over $\mathbb R$, and the construction is basis-independent. Every element of $V_{\mathbb C}$ is a finite sum $\sum_j z_j\otimes v_j$ with $z_j\in\mathbb C$ and $v_j\in V$; after writing $z_j=a_j+ib_j$ each summand is $a_j(1\otimes v_j)+b_j(i\otimes v_j)$.
