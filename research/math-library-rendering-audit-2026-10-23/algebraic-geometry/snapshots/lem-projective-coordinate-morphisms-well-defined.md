---
id: lem-projective-coordinate-morphisms-well-defined
kind: lemma
title: "projective coordinate morphisms well defined"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-to-projective-space-homogeneous-coordinates, lem-homogeneous-polynomial-zero-locus-well-defined, lem-projective-regular-function-chart-compatibility]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

A same-degree homogeneous tuple $F_0,\ldots,F_m$ having no common zero on $X$ defines a projective morphism $X\to\mathbf P_k^m$.

## Proof

**Given:** Such a tuple, of common degree $d$.

1.1 Rescaling $a$ by $\lambda$ rescales every $F_i(a)$ by $\lambda^d$, so the target class is representative-independent. [given, algebra]

2.1 On $D_+(y_j)$ the coordinate functions are $F_i/F_j$, regular equal-degree fractions wherever $F_j\ne0$. [step 1.1, algebra]

3.1 The target standard opens cover the image and the ratios agree on overlaps, so the local maps glue to a morphism. [step 2.1] ∎
