---
id: def-projective-algebraic-set
kind: definition
title: "projective algebraic set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-space-points, def-homogeneous-polynomial-and-homogeneous-ideal, lem-homogeneous-polynomial-zero-locus-well-defined]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For homogeneous $T\subseteq k[x_0,\ldots,x_n]$, let $V_+(T)=\{[a]\in\mathbf P_k^n:F(a)=0\text{ for all }F\in T\}$. A projective algebraic set is a set $V_+(T)$; write $V_+(J)$ for a homogeneous ideal. By convention $V_+(\varnothing)=\mathbf P_k^n$ and $V_+((x_0,\ldots,x_n))=\varnothing$.

