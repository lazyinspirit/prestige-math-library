---
id: def-normal-addition-map-for-a-euclidean-submanifold
kind: definition
title: "The normal addition map for a Euclidean submanifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-tubular-neighbourhood-of-an-embedded-submanifold,
       prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle,
       def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold. Using the
Euclidean inner product, define its **orthogonal normal bundle** by
$$
N^\perp S:=\{(p,v)\in S\times\mathbb R^m:v\perp T_pS\}.
$$
Local slice charts and orthogonal projection onto $T_pS$ give this set its
standard smooth rank-$(m-\dim S)$ vector-bundle structure. The **normal
addition map** is
$$
E:N^\perp S\to\mathbb R^m,\qquad E(p,v):=p+v.
$$
It restricts on the zero section to the inclusion $S\hookrightarrow\mathbb R^m$
and is the basic model map used to build Euclidean tubular neighbourhoods.
