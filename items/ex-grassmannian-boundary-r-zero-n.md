---
id: ex-grassmannian-boundary-r-zero-n
kind: example
title: The boundary Grassmannians Gr(0,V) and Gr(dim V,V)
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-grassmannian-subspaces]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §6m Grassmann varieties
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

If $\dim V=n$, the only $0$-plane is $\{0\}$ and the only $n$-plane is $V$, so both $\operatorname{Gr}(0,V)$ and $\operatorname{Gr}(n,V)$ are one point. Their Plucker spaces are $\mathbf P(\Lambda^0V)=\mathbf P(k)$ and $\mathbf P(\Lambda^nV)$ respectively, again one point. There is no $r$-dimensional subspace when $r<0$ or $r>n$, so the stipulated Grassmannian is empty in those cases.
