---
id: def-complexification-of-a-real-linear-map
kind: definition
title: "Complexification of a real-linear map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complexification-of-a-real-vector-space, def-linear-map, thm-universal-property-of-module-tensor-products]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Definition

Let $T:V\to W$ be a real-linear map between real vector spaces ([[def-linear-map]]). Its **complexification** is the $\mathbb R$-linear map

$$T_{\mathbb C}:=\operatorname{id}_{\mathbb C}\otimes T:\mathbb C\otimes_{\mathbb R}V\longrightarrow\mathbb C\otimes_{\mathbb R}W,\qquad T_{\mathbb C}(z\otimes v):=z\otimes T(v).$$

**Existence.** The map $(z,v)\mapsto z\otimes T(v)$ from $\mathbb C\times V$ to $\mathbb C\otimes_{\mathbb R}W$ is additive in each variable and $\mathbb R$-balanced because $T$ is real-linear, so [[thm-universal-property-of-module-tensor-products]] supplies the unique $\mathbb R$-linear map with the displayed value on elementary tensors.

## Remarks

The map $T_{\mathbb C}$ is complex-linear on the complexifications of [[def-complexification-of-a-real-vector-space]]: for $z,z'\in\mathbb C$ and $v\in V$,

$$T_{\mathbb C}\bigl(z'\cdot(z\otimes v)\bigr)=T_{\mathbb C}((z'z)\otimes v)=(z'z)\otimes T(v)=z'\cdot(z\otimes T(v))=z'\cdot T_{\mathbb C}(z\otimes v),$$

so the identities extend from elementary tensors to all of $\mathbb C\otimes_{\mathbb R}V$ by additivity.
