---
id: def-fixed-real-form-of-a-conjugation
kind: definition
title: "The fixed real form of a conjugation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-conjugation-and-real-structure-on-a-complex-vector-space]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Definition

Let $\sigma$ be a conjugation on the complex vector space $W$ ([[def-conjugation-and-real-structure-on-a-complex-vector-space]]). Its **fixed real form** is the real subspace

$$W^{\sigma}:=\{\,w\in W:\sigma(w)=w\,\}\subseteq W_{\mathbb R},$$

where $W_{\mathbb R}$ is the realification of $W$. That $W^{\sigma}$ is a real subspace is immediate: it contains $0$, is closed under addition because $\sigma$ is additive, and is closed under real scalars because $\sigma(rw)=\overline r\,\sigma(w)=rw$ for $r\in\mathbb R$.

## Remarks

The same complex vector space can carry different conjugations with different fixed real forms; a fixed real form is extra structure attached to the choice of $\sigma$, not canonical data of $W$ alone.
