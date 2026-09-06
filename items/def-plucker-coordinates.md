---
id: def-plucker-coordinates
kind: definition
title: Plucker coordinates and the Plucker map
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-grassmannian-subspaces, def-decomposable-k-vector-and-basic-wedge-product, cor-the-top-exterior-power-acts-by-the-determinant]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Remark 6.34
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For $S\in\operatorname{Gr}(r,V)$ with ordered basis $(v_1,\ldots,v_r)$, its **Plucker point** is
$$\operatorname{pl}(S)=[v_1\wedge\cdots\wedge v_r]\in\mathbf P(\Lambda^rV).$$
After choosing an ordered basis $(e_1,\ldots,e_n)$ of $V$, write this wedge in the ordered basis $(e_{i_1}\wedge\cdots\wedge e_{i_r})_{i_1<\cdots<i_r}$; its coefficients are the Plucker coordinates. Replacing the basis of $S$ multiplies the wedge by its nonzero determinant and hence does not change the projective class.
