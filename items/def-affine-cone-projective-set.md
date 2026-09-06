---
id: def-affine-cone-projective-set
kind: definition
title: "affine cone projective set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-algebraic-set, def-homogeneous-polynomial-and-homogeneous-ideal]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For $X\subseteq\mathbf P_k^n$, define its affine cone
$C(X)=V(I_+(X))\subseteq\mathbf A_k^{n+1}$. It is stable under scalar
multiplication. If $X\ne\varnothing$, then $0\in C(X)$; under the stated
definition, $C(\varnothing)=\varnothing$.
