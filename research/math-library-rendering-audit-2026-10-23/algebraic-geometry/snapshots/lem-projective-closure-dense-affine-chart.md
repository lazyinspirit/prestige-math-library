---
id: lem-projective-closure-dense-affine-chart
kind: lemma
title: "projective closure dense affine chart"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-closure-affine-set, lem-standard-projective-opens-are-affine-spaces]
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

The image of $A\subseteq\mathbf A_k^n=D_+(x_0)$ is dense in $\overline A^{\rm proj}$.

## Proof

**Given:** The chosen projective closure of an affine algebraic set $A$.

1.1 By definition it is the intersection of all projective closed sets containing the image of $A$. [given]

2.1 Hence every closed subset of the closure containing the image is the closure itself, which is precisely density. [step 1.1] ∎
