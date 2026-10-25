---
id: def-series-and-absolute-convergence-in-a-normed-space
kind: definition
title: "Series and absolute convergence in a normed space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-series, def-finite-sum, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Definition

Let $V$ be a normed space. A **sequence in $V$** is a function
$x:\mathbb N\to V$, written $(x_n)_{n\ge0}$ with $x_n:=x(n)$
([[def-natural-numbers]]). Fix such a sequence.

Define its vector partial sums recursively by

$$s_0:=0_V,\qquad s_{m+1}:=s_m+x_m.$$

We write $s_m=\sum_{n<m}x_n$. The **series**
$\sum_{n=0}^\infty x_n$ **converges** when these partial sums converge in $V$.
Its sum is then the limit of the partial sums.

The series is **absolutely convergent** when the scalar series
$$\sum_{n=0}^\infty \|x_n\|$$
converges in the sense of [[def-series]].

## Remarks

- Absolute convergence is a statement about the scalar series of norms, not a
  second notion of convergence in $V$.
- The tail identity
  $$s_m-s_\ell=\sum_{\ell\le n<m}x_n \qquad (\ell<m)$$
  is the finite-sum identity used in every norm estimate below.
