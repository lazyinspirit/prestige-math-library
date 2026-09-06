---
id: lem-homogenization-dehomogenization-correspondence
kind: lemma
title: "homogenization dehomogenization correspondence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homogeneous-polynomial-and-homogeneous-ideal]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $f\in k[x_1,\ldots,x_n]$ has degree at most $d$, then $f^h=x_0^df(x_1/x_0,\ldots,x_n/x_0)$ is homogeneous of degree $d$ and $(f^h)(1,x)=f(x)$. If $F$ is homogeneous of degree $d$, then $F=x_0^dF(1,x_1/x_0,\ldots,x_n/x_0)$.

## Proof

**Given:** $f=\sum_{|\alpha|\le d}c_\alpha x^\alpha$ and homogeneous $F$ of degree $d$.

1.1 $f^h=\sum c_\alpha x_0^{d-|\alpha|}x^\alpha$, so each monomial has degree $d$ and $x_0=1$ recovers $f$. [given, algebra]

2.1 Factoring $x_0^d$ from every homogeneous monomial of $F$ proves the displayed reverse formula. [given, algebra] ∎
