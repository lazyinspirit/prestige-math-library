---
id: def-conjugation-and-real-structure-on-a-complex-vector-space
kind: definition
title: "Conjugations and real structures on a complex vector space"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-complexification-of-a-real-vector-space, thm-universal-property-of-module-tensor-products]
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
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Definition

Let $W$ be a complex vector space. A **conjugation** (also called a **real structure**) on $W$ is a map $\sigma:W\to W$ such that for all $w,w'\in W$ and $z\in\mathbb C$:

1. $\sigma(w+w')=\sigma(w)+\sigma(w')$;
2. $\sigma(zw)=\overline z\,\sigma(w)$, where $\overline z$ is complex conjugation;
3. $\sigma(\sigma(w))=w$.

Thus a conjugation is additive, conjugate-linear (anti-linear) in the scalar action, and an involution. When $V$ is a real vector space, the **canonical conjugation** on the complexification $V_{\mathbb C}$ of [[def-complexification-of-a-real-vector-space]] is

$$\sigma_{\operatorname{can}}(z\otimes v):=\overline z\otimes v;$$

its well-definedness on the tensor product follows from [[thm-universal-property-of-module-tensor-products]], applied to the $\mathbb R$-bilinear map $(z,v)\mapsto\overline z\otimes v$.

## Remarks

On a nonzero complex vector space, a conjugation is not complex-linear: if it
were, then for every $w$ one would have both
$\sigma(iw)=-i\sigma(w)$ and $\sigma(iw)=i\sigma(w)$, forcing $w=0$ because
$\sigma$ is an involution. On the zero space the unique conjugation is also
complex-linear. Every conjugation is $\mathbb R$-linear, because
$\overline r=r$ for every $r\in\mathbb R$.
