---
id: def-qftx-gaga-projective-twisting-line-bundles
kind: definition
title: Projective twisting line bundles by coordinate transitions
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-complex-projective-space-and-holomorphic-charts
  - def-complex-manifolds-and-holomorphic-vector-bundles
dependency_roles:
  def-complex-projective-space-and-holomorphic-charts: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.117 Topics in Several Complex Variables, Spring 2005, lecture notes prepared by Jonathan Campbell"
      url: "https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf"
      locator: "Lecture 7, PDF pp. 18–20: the quotient definition of complex projective space and its standard affine charts."
    - title: "R. Dervan, lectures; Qiangru Kuang, notes, University of Cambridge Mathematics Tripos Part III, Complex Manifolds, Lent 2019"
      url: "https://qk206.user.srcf.net/notes/complex_manifolds.pdf"
      locator: "§5, printed pp. 27–29: holomorphic vector bundles, line bundles and their transition-function cocycles."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

For $r\ge1$, let $\mathbb P^r(\mathbb C)$ be the set of complex lines in
$\mathbb C^{r+1}$, with its quotient complex-manifold structure, and write
$[Z_0:\cdots:Z_r]$ for the line through a nonzero vector
$(Z_0,\ldots,Z_r)$. For $i\in\{0,\ldots,r\}$ set
$U_i=\{[Z_0:\cdots:Z_r]:Z_i\ne0\}$; its standard coordinates are the ratios
$Z_j/Z_i$ for $j\ne i$. For each integer $k$, the **projective twisting line
bundle** $\mathcal O_{\mathbb P^r}(k)$ is obtained by gluing the trivial
holomorphic line bundles $U_i\times\mathbb C$ with local frames $e_i^{(k)}$
and transition rule
$$e_j^{(k)}=\left(\frac{Z_j}{Z_i}\right)^k e_i^{(k)}\quad\text{on }U_i\cap U_j.$$
The transition factors are holomorphic and nowhere zero on the overlaps, with
$g_{ii}=1$, $g_{ij}=g_{ji}^{-1}$, and $g_{ij}g_{j\ell}=g_{i\ell}$ on every
triple overlap; hence they define a holomorphic line bundle. The sheaf
$\mathcal O_{\mathbb P^r}(k)$ assigns to an open set the holomorphic sections of
this bundle, and $\mathcal O_{\mathbb P^r}:=\mathcal O_{\mathbb P^r}(0)$ is the
structure sheaf.

## Definition references

[[def-complex-projective-space-and-holomorphic-charts]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[MIT OpenCourseWare, 18.117 lecture 7](https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf)

[Dervan–Kuang, *Complex Manifolds*, §5](https://qk206.user.srcf.net/notes/complex_manifolds.pdf)
