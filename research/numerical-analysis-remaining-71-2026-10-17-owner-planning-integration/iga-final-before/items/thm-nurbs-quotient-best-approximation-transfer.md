---
id: thm-nurbs-quotient-best-approximation-transfer
kind: theorem
title: NURBS quotient spaces transfer numerator H1 approximation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-positive-nurbs-basis-and-quotient-derivative
  - lem-isogeometric-pullback-energy-norm-equivalence
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://link.springer.com/content/pdf/10.1007/s11831-022-09752-5.pdf"
---

## Statement

Assume Countable Choice. Let $F:\widehat\Omega\to\Omega$ be an admissible NURBS map and $W$ its continuous denominator, with $W\ge w_->0$ and cellwise $G_W:=\|\nabla W\|_{L^\infty}<\infty$. Let $\widehat u$ and a numerator spline $s\in S_h$ be $C^1$ up to the boundary of each cell in the common refinement of the geometry and analysis knot grids, with matching traces, and put $g:=W\widehat u$. Then the physical rational spline $v_h:=(s/W)\circ F^{-1}$ belongs to $H^1(\Omega)$ and
$$\|u-v_h\|_{H^1(\Omega)}\le C_F C_W\|g-s\|_{H^1(\widehat\Omega)},\qquad C_F:=\sqrt{j_+}\sqrt{1+L^2},\quad C_W:=\frac{2}{w_-}+\frac{G_W}{w_-^2},$$
where $u:=\widehat u\circ F^{-1}$. This result transfers a specified numerator approximation bound; it does not assert a polynomial-degree-independent rate or a general $H^1$ rate for arbitrary knot families.

## Facts & Assumptions

**Given:** Countable Choice; the admissible patch map $F$, continuous positive denominator $W$, parameter function $\widehat u$, numerator spline $s$, and matching cell traces of the Statement.

[A1] [[def-countable-choice]] is the exact choice assumption of the mapped H1 supplier [F2]. The local finite-cell quotient estimate requires no stronger axiom.

[F1] [[lem-positive-nurbs-basis-and-quotient-derivative]]: $W\ge w_->0$, $\nabla W$ is essentially bounded on the finite cells, and $\mathcal N_h=S_h/W$.

[F2] [[lem-isogeometric-pullback-energy-norm-equivalence]]: $H^1$ norms on $\widehat\Omega$ and $\Omega$ are equivalent with the stated map constants.

[F3] [[lem-matching-nurbs-patch-traces-give-h1-conformity]]: a piecewise $C^1$ function with matching traces and square-integrable cell gradients belongs to global $H^1$.

## Proof

1.1 Work on the finite common refinement and set $e:=g-s$. The continuous positive denominator is polynomial on each geometry cell, so $g$, $s$, $e$, $s/W$ and $e/W$ are continuous and C1 up to each refined cell boundary. Their classical cell gradients are square integrable on this finite partition; [F3] therefore puts them in H1 with these weak gradients. On each cell, $u-v_h=(\widehat u-s/W)\circ F^{-1}=(e/W)\circ F^{-1}$. Since $W\ge w_->0$, the cellwise quotient rule gives $\left|\frac eW\right|\le \frac{|e|}{w_-},\qquad \left|\nabla\!\left(\frac eW\right)\right|\le\frac{|\nabla e|}{w_-}+\frac{G_W|e|}{w_-^2}.$ Taking the $H^1$ norm and using the triangle inequality yields $\|e/W\|_{H^1(\widehat\Omega)}\le C_W\|e\|_{H^1(\widehat\Omega)}$. [F1, F3, given, algebra]

2.1 The traces of $e/W$ match because the traces of $\widehat u$, $s$, and $W$ match and $W$ is positive. Its cell gradients are square integrable by step 1.1, so [F3] gives $e/W\in H^1(\widehat\Omega)$. By [A1], [F2] maps $s/W\in H^1(\widehat\Omega)$ to $v_h\in H^1(\Omega)$. Applying its inverse-map estimate to $(e/W)\circ F^{-1}$ gives $\|u-v_h\|_{H^1(\Omega)}\le C_F\|e/W\|_{H^1(\widehat\Omega)}\le C_FC_W\|g-s\|_{H^1(\widehat\Omega)}.$ This is the claimed estimate, with all constants retaining the map and weight dependence. [A1, F2, F3, step 1.1, algebra] ∎