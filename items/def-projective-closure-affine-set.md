---
id: def-projective-closure-affine-set
kind: definition
title: "projective closure affine set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-algebraic-set, def-projective-algebraic-set, lem-homogenization-dehomogenization-correspondence]
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

Embed $\mathbf A_k^n$ in $\mathbf P_k^n=D_+(x_0)\cup V_+(x_0)$ by $a\mapsto[1:a]$. For $A\subseteq\mathbf A_k^n$, its projective closure $\overline A^{\rm proj}$ is the projective Zariski closure of this image. $V_+(x_0)$ is the hyperplane at infinity.

