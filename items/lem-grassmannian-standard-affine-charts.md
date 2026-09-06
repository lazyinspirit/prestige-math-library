---
id: lem-grassmannian-standard-affine-charts
kind: lemma
title: Standard affine charts on the Grassmannian
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-plucker-image-closed, def-grassmannian-subspaces]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Remark 6.31
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For every $r$-subset $I$ of a basis of an $n$-dimensional $V$, the locus $p_I\ne0$ in $\operatorname{Gr}(r,V)$ is isomorphic to $\mathbf A_k^{r(n-r)}$; these loci cover the Grassmannian and have regular transition maps.

## Proof

**Given:** A plane $S$ with nonzero Plucker coordinate $p_I$.

1.1 Reorder the basis so $I=\{1,\ldots,r\}$. The projection $S\to k^r$ is invertible, so $S$ has the unique row-space representative $(I_r\mid A)$ with $A\in\operatorname{Mat}_{r,n-r}(k)$. [given, algebra]

2.1 The $r(n-r)$ entries of $A$ give affine coordinates, and every Plucker coordinate is a minor of $(I_r\mid A)$, hence a polynomial in them. Conversely these entries are ratios of Plucker coordinates by $p_I$. [step 1.1, algebra]

3.1 Thus this locus is affine space. On an overlap, changing the pivot columns replaces $(I_r\mid A)$ by multiplication with the inverse of an invertible minor, so the transition entries are regular ratios on that overlap. [step 2.1] ∎
