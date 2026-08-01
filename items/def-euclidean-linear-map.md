---
id: def-euclidean-linear-map
kind: definition
title: "A linear map $L:\\mathbb{R}^m\\to\\mathbb{R}^n$ in Euclidean coordinates"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $m,n\ge1$. A map $L:\mathbb R^m\to\mathbb R^n$ is **linear** when

$$L(\alpha u+\beta v)=\alpha L(u)+\beta L(v)$$

for all $u,v\in\mathbb R^m$ and all $\alpha,\beta\in\mathbb R$. Both spaces carry their Euclidean vector-space operations and Euclidean norms from [[def-euclidean-inner-product]].

## Remarks

This is the concrete Euclidean notion required for total differentiation. It makes no assertion about linear maps between arbitrary vector spaces.
