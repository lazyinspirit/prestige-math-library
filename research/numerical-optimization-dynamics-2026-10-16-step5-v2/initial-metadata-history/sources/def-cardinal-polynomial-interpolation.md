---
id: def-cardinal-polynomial-interpolation
kind: definition
title: "Cardinal-polynomial interpolation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-field
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-reals-field
  - thm-reals-ordered-field
  - lem-finite-product-of-nonzero-reals-is-nonzero
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lectures 1 and 3"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
---

## Definition

Let $n\in\mathbb N$ with $n\ge0$, let $x_0<\cdots<x_n$ be distinct real nodes, and let $y_0,\ldots,y_n\in\mathbb R$. Define the node polynomial and barycentric weights by
$$\omega_n(X)=\prod_{k=0}^{n}(X-x_k),\qquad w_j=\left(\prod_{\substack{0\le k\le n\\k\ne j}}(x_j-x_k)\right)^{-1}\quad(0\le j\le n).$$
An empty product is $1$, so $w_0=1$ when $n=0$.

In these formulas, $X$ is a real argument, and for real $a$ and nonzero real $b$, $a/b$ denotes $ab^{-1}$ in the field $\mathbb R$ ([[def-field]]).

For each $j$, the cardinal function is
$$\ell_j(X)=\prod_{\substack{0\le k\le n\\k\ne j}}\frac{X-x_k}{x_j-x_k}.$$
The interpolation function for the data $y=(y_0,\ldots,y_n)$ is
$$I_n y(X)=\sum_{j=0}^{n}y_j\ell_j(X).$$
For a real function $f$ defined at the nodes, write $I_n f:=I_n(f(x_0),\ldots,f(x_n))$.

For products indexed by $k\ne j$, use the length-$n$ list $\widehat x_{j,k}$ ($0\le k<n$), where $\widehat x_{j,k}=x_k$ for $k<j$ and $\widehat x_{j,k}=x_{k+1}$ for $k\ge j$; the product is in this order and is empty when $n=0$. Strict ordering gives $x_j-\widehat x_{j,k}\ne0$ for every factor, so [[lem-finite-product-of-nonzero-reals-is-nonzero]] and the field inverse law make each $w_j$ well defined.
