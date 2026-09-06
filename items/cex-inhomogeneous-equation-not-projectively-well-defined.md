---
id: cex-inhomogeneous-equation-not-projectively-well-defined
kind: counterexample
title: "inhomogeneous equation not projectively well defined"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
deps: [def-projective-space-points, lem-homogeneous-polynomial-zero-locus-well-defined]
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

## Statement refuted

An arbitrary polynomial equation has a representative-independent zero locus in projective space.

## Counterexample

**Given:** A field $k$ of characteristic not equal to $2$, the inhomogeneous
polynomial $x_0+1$, and the projective point $[1:0]\in\mathbf P_k^1$.

1.1 The vectors $(1,0)$ and $(-1,0)$ represent the same projective point, but $x_0+1$ takes the nonzero value $2$ at the first and the value $0$ at the second. [given, algebra]

2.1 Thus the vanishing decision changes with the representative, refuting the assertion. [step 1.1] ∎
