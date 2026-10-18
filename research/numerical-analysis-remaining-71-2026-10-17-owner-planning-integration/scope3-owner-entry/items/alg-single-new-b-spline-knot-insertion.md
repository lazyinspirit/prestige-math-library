---
id: alg-single-new-b-spline-knot-insertion
kind: algorithm
title: Single new-knot insertion for a B-spline curve
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-b-spline-space-and-basis]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter XI, pp. 135–138
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Gershon Elber, Computer Aided Geometric Design, Chapter 7, Boehm's knot insertion
      url: https://class236716.cs.technion.ac.il/wp-content/uploads/2021/04/chapter7.pdf
---

## Definition

Use the zero-based reindexing $t_i=\xi_{i+1}$ of the clamped knot vector
in [[def-b-spline-space-and-basis]], so $t_0\le\cdots\le t_{n+p}$ with
$n\ge p+1$. Let $p\in\mathbb N_0$, $d\in\mathbb N$, and let the controls
be $P_0,\ldots,P_{n-1}\in\mathbb R^d$. Let $k$ be a
nonempty span index with $t_k<u<t_{k+1}$, where $u$ is not already a knot.
Insert $u$ between $t_k$ and $t_{k+1}$ to obtain $t'$. The output controls
$Q_0,\ldots,Q_n$ are defined by

$$Q_i=\begin{cases}P_i,&0\le i\le k-p,\\\alpha_iP_i+(1-\alpha_i)P_{i-1},&k-p+1\le i\le k,\\P_{i-1},&k+1\le i\le n,\end{cases}\qquad\alpha_i=\frac{u-t_i}{t_{i+p}-t_i}.$$

The middle range is empty when $p=0$. The curve uses the same degree and
the B-spline basis for the new knot vector. Each denominator in the middle
range is positive and each $\alpha_i$ lies in $[0,1]$, so the update is an
exact affine blend. This procedure inserts one knot that is new to the
vector; repeated insertion at an existing knot is not part of this
algorithm's input contract.
