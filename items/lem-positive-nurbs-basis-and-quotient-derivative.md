---
id: lem-positive-nurbs-basis-and-quotient-derivative
kind: lemma
title: Positive weights give a bounded partition-of-unity NURBS basis
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - def-b-spline-space-and-basis
  - thm-spline-polynomial-reproduction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
    - title: "Tom Lyche, Carla Manni, Hendrik Speleers, B-Splines and Spline Approximation, complete lecture notes"
      url: "https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf"
---

## Statement

For the finite tensor-product basis and weights of [[def-nurbs-patch-map-and-rational-spline-space]], the denominator satisfies $w_-\le W(\xi)\le w_+$, the rational basis is nonnegative and sums to one, and
$$\mathcal N_h=\{s/W:s\in S_h\},\qquad S_h:=\operatorname{span}\{N_\alpha:\alpha\in\mathcal I\}.$$
On each open knot cell, the rational basis functions are differentiable and
$$\nabla R_\alpha=\frac{w_\alpha}{W}\nabla N_\alpha-\frac{w_\alpha N_\alpha}{W^2}\nabla W.$$
In particular, if $G_N:=\max_\alpha\|\nabla N_\alpha\|_{L^\infty(\text{cells})}$ and $G_W:=w_+\sum_\alpha\|\nabla N_\alpha\|_{L^\infty(\text{cells})}$, then
$$\|\nabla R_\alpha\|_{L^\infty(\text{cells})}\le \frac{w_+G_N}{w_-}+\frac{w_+G_W}{w_-^2}.$$
These derivative bounds depend on the fixed degrees and knot cells; no degree-independent bound is asserted.


## Facts & Assumptions

**Given:** The finite tensor-product B-spline basis of [[def-nurbs-patch-map-and-rational-spline-space]], its positive weights $w_\alpha$, and a fixed nonempty knot cell.

[F1] [[thm-spline-polynomial-reproduction]]: each univariate B-spline is nonnegative and piecewise polynomial; on every nonempty knot interval the active basis functions sum to one.

[F2] [[def-nurbs-patch-map-and-rational-spline-space]] defines $N_\alpha$ as the product of the one-dimensional B-splines, $W=\sum_\alpha w_\alpha N_\alpha$, $R_\alpha=w_\alpha N_\alpha/W$, and $w_-\le w_\alpha\le w_+$.

## Proof

1.1 Each tensor product $N_\alpha$ is nonnegative by [F1]. On any open tensor knot cell, each coordinate lies in one nonempty knot interval, so finite distributivity and [F1] give $\sum_{\alpha\in\mathcal I}N_\alpha(\xi)=\prod_{r=1}^d\left(\sum_{i_r}B^{(r)}_{i_r,p_r,\Xi_r}(\xi_r)\right)=1.$ Hence $0\le N_\alpha\le1$ on the cell. The endpoint values follow by the one-sided endpoint convention in [[def-b-spline-space-and-basis]]. [F1, F2, algebra]

2.1 Since every coefficient $w_\alpha$ is between $w_-$ and $w_+$, the identity in step 1.1 yields $w_-\sum_\alpha N_\alpha\le W=\sum_\alpha w_\alpha N_\alpha\le w_+\sum_\alpha N_\alpha,$ so $w_-\le W\le w_+$. Thus each $R_\alpha$ is well-defined and nonnegative, and $\sum_\alpha R_\alpha=\frac{\sum_\alpha w_\alpha N_\alpha}{W}=1.$ For any coefficients $c_\alpha$, $\sum_\alpha c_\alpha R_\alpha=(1/W)\sum_\alpha(c_\alpha w_\alpha)N_\alpha$. Multiplication of each coefficient by the nonzero $w_\alpha$ is a bijection on the finite coefficient space, so the span equals $S_h/W$. [F2, step 1.1, algebra]

3.1 On the open knot cell all $N_\alpha$ and $W$ are polynomial and $W\ge w_->0$ by step 2.1. The ordinary quotient rule gives the displayed gradient formula. Also $\|\nabla W\|_\infty\le\sum_\alpha w_\alpha\|\nabla N_\alpha\|_\infty\le G_W$ and $N_\alpha\le1$ by step 1.1. Applying these bounds to the quotient rule proves the stated derivative estimate. The finite number of polynomial pieces makes each $G_N$ finite. [F1, F2, step 1.1, step 2.1, algebra] ∎
