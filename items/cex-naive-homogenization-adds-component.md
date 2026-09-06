---
id: cex-naive-homogenization-adds-component
kind: counterexample
title: "naive homogenization adds component"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homogeneous-ideal-saturation, thm-ideal-projective-closure-saturation]
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

Raw homogenization of arbitrary generators always gives the projective closure.

## Counterexample

**Given:** $I=(x-1,xy)\subseteq k[x,y]$, with projective coordinates $[Z:X:Y]$.

1.1 The raw homogenized generators are $X-Z$ and $XY$, whose common projective zeros include $[0:0:1]$: both polynomials vanish there. [given, algebra]

2.1 Since $xy-y(x-1)=y$, one has $I=(x-1,y)$; hence $V(I)=\{(1,0)\}$ and its closure is $V_+(X-Z,Y)$, which does not contain $[0:0:1]$. [step 1.1, algebra]

3.1 Thus raw generators introduce a spurious point at infinity; saturation removes it and is necessary. [step 2.1] ∎
