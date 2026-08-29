---
id: def-kth-exterior-power-of-a-linear-map
kind: definition
title: "The induced map $\\Lambda^kT$ on exterior powers"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-kth-exterior-power-by-quotient, prop-functoriality-of-module-tensor-products]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Definition

Let $T:V\to W$ be linear. Iterating the induced map of [[prop-functoriality-of-module-tensor-products]] gives the **$k$-fold tensor power**

$$T^{\otimes k}:V^{\otimes k}\longrightarrow W^{\otimes k},\qquad T^{\otimes k}(v_1\otimes\cdots\otimes v_k)=T(v_1)\otimes\cdots\otimes T(v_k),$$

with $T^{\otimes0}=\operatorname{id}_F$ and $T^{\otimes1}=T$. A pure tensor with $v_i=v_j$ maps to the pure tensor with $T(v_i)=T(v_j)$, so $T^{\otimes k}(W_k(V))\subseteq W_k(W)$ for the relation subspaces of [[def-kth-exterior-power-by-quotient]]. Hence $T^{\otimes k}$ descends to the quotient, defining the **$k$th exterior power**

$$\Lambda^kT:\Lambda^kV\longrightarrow\Lambda^kW,\qquad \Lambda^kT(v_1\wedge\cdots\wedge v_k)=T(v_1)\wedge\cdots\wedge T(v_k).$$

For $k=0$ this is $\Lambda^0T=\operatorname{id}_F$, and for $k=1$ it is $T$ itself under $\Lambda^1V=V$.
