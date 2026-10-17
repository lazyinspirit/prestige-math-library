---
id: def-euclidean-linear-map
kind: definition
title: "A linear map $L:\\mathbb{R}^m\\to\\mathbb{R}^n$ in Euclidean coordinates"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product, def-linear-map]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $m,n\in\mathbb N$, including zero. A map $L:\mathbb R^m\to\mathbb R^n$ is **linear** when

$$L(\alpha u+\beta v)=\alpha L(u)+\beta L(v)$$

for all $u,v\in\mathbb R^m$ and all $\alpha,\beta\in\mathbb R$. Both spaces carry their Euclidean vector-space operations and Euclidean norms from [[def-euclidean-inner-product]].

This is precisely the identity in [[def-linear-map]], applied to the real vector spaces $\mathbb R^m$ and $\mathbb R^n$ with their pointwise operations; thus the abstract and coordinate notions agree. If $m=0$, linearity forces the sole domain point $0$ to map to $0$, and this unique map is linear. If $n=0$, the unique map into the zero space is linear. These assertions use the zero-space and norm conventions of [[def-euclidean-inner-product]], not a maximum over an empty coordinate set.

## Remarks

This is the concrete Euclidean notion required for total differentiation. It makes no assertion about linear maps between arbitrary vector spaces.
