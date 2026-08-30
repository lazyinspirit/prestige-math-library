---
id: def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
kind: definition
title: "Upper Hessenberg matrices and real symmetric tridiagonal matrices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangular-and-diagonal-matrices-over-a-commutative-ring]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Definition

A square matrix $H=(h_{ij})$ is **upper Hessenberg** when
$h_{ij}=0$ for every $i>j+1$, so entries below the first subdiagonal vanish.

A real symmetric matrix $T=(t_{ij})$ is **tridiagonal** when
$t_{ij}=0$ for every $|i-j|>1$. Thus a real symmetric tridiagonal matrix is
exactly a symmetric upper Hessenberg matrix.
