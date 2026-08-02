---
id: def-invertible-euclidean-linear-map
kind: definition
title: "Invertible Euclidean linear maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euclidean-linear-map]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.2 Matrices and linear mappings"
      url: "https://www.jirka.org/ra/html/sec_svmatrix.html"
pipeline_run: null
---

## Definition

Let $n\ge1$.  A linear map $A:\mathbb R^n\to\mathbb R^n$
([[def-euclidean-linear-map]]) is **invertible** when there is a linear map
$B:\mathbb R^n\to\mathbb R^n$ such that

$$B(Au)=u\quad\hbox{and}\quad A(Bu)=u\qquad(u\in\mathbb R^n).$$

The map $B$ is unique: if $C$ has the same two properties, then
$C=C\circ(A\circ B)=(C\circ A)\circ B=B$.  It is denoted $A^{-1}$.
