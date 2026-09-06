---
id: ex-grassmannian-lines-in-projective-three-space
kind: example
title: Lines in P3 and the Klein quadric Gr(2,4)
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-plucker-image-closed]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Example 6.30
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 4, Example 5
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

A line in $\mathbf P^3$ is a $2$-plane in $k^4$. With Plucker coordinates $p_{01},p_{02},p_{03},p_{12},p_{13},p_{23}$, the unique Plucker relation is
$$p_{01}p_{23}-p_{02}p_{13}+p_{03}p_{12}=0.$$
Thus $\operatorname{Gr}(2,4)$ is the Klein quadric in $\mathbf P^5$.
