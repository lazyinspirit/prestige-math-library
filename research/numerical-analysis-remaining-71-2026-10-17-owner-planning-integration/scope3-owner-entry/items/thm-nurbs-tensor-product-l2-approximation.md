---
id: thm-nurbs-tensor-product-l2-approximation
kind: theorem
title: Tensorized spline quasi-interpolation gives a NURBS L2 rate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - def-local-spline-quasi-interpolant
  - thm-sobolev-spline-quasi-interpolant-rate
  - thm-tonelli-and-fubini-for-completed-product-measures
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - lem-positive-nurbs-basis-and-quotient-derivative
  - lem-isogeometric-pullback-energy-norm-equivalence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

Assume the Axiom of Choice. On each coordinate interval $[0,1]$, let a clamped degree-$p_r$ knot mesh have largest cell size $h_r$, and let $Q_r$ be a family as in [[def-local-spline-quasi-interpolant]] with reproduction order $0\le\ell_r\le p_r$, local constant $M_r$, and stability constant $C_r$. Suppose $g$ belongs to the anisotropic Sobolev class with each pure derivative $\partial_r^{\ell_r+1}g\in L^2(\widehat\Omega)$ and with sections to which the one-dimensional estimate of [[thm-sobolev-spline-quasi-interpolant-rate]] applies almost everywhere. Require each $Q_r$ to have its bounded extension to $L^2(\widehat\Omega)$, acting in coordinate $r$, with norm at most $S_r=C_r\sqrt{M_r}$; require the coordinate operators to commute pairwise and to commute with weak derivatives in every other coordinate on the stated anisotropic class. These are explicit hypotheses on the supplied family, not conclusions of the univariate rate theorem. Under the Axiom of Choice, completed-product Fubini is available and the sectionwise operators and derivatives are measurable. Define $\mathcal Q:=Q_d\cdots Q_1$ and set $A_r:=(1+C_r)M_r^{\ell_r+1+1/2}/\ell_r!$. Then $\mathcal Qg$ is in the tensor-product spline numerator space and
$$\|g-\mathcal Qg\|_{L^2(\widehat\Omega)} \le\sum_{r=1}^d A_r\!\left(\prod_{j\ne r}S_j\right)h_r^{\ell_r+1}\|\partial_r^{\ell_r+1}g\|_{L^2(\widehat\Omega)}.$$
If $g=W(\widehat u)$ and $v_h:=(\mathcal Qg/W)\circ F^{-1}$, then
$$\|u-v_h\|_{L^2(\Omega)}\le \frac{\sqrt{j_+}}{w_-}\|g-\mathcal Qg\|_{L^2(\widehat\Omega)},\qquad u:=\widehat u\circ F^{-1}.$$
This is an $L^2$ approximation estimate. It does not imply an $H^1$ energy rate.

## Facts & Assumptions

**Given:** The Axiom of Choice; coordinatewise clamped meshes and quasi-interpolant families with the extension, stability, commutation, section-regularity, and measurability hypotheses of the Statement; the finite tensor-product spline space; numerator $g$ and NURBS denominator $W$; and map $F$ with Jacobian upper bound $j_+$.

[A1] [[def-axiom-of-choice]] is assumed for the one-dimensional Sobolev quasi-interpolation estimate and completed-product Fubini used below; it is not inferred from the weaker Countable Choice branch used by the pullback theorem.

[F1] [[def-local-spline-quasi-interpolant]]: each $Q_r$ is linear, local, reproduces all polynomials through degree $\ell_r$, and obeys the common local $L^2$ stability bound with overlap at most $M_r$.

[A2] In addition to [F1], the Statement assumes bounded extensions to $L^2(\widehat\Omega)$ with norm $S_r$, pairwise commutation, commutation with weak derivatives in other coordinates on the anisotropic class, and the stated section-regularity and measurability.

[F2] [[thm-sobolev-spline-quasi-interpolant-rate]] under the Axiom of Choice: for a fixed clamped mesh, $\|f-Q_rf\|_{L^2}\le A_rh_r^{\ell_r+1}\|f^{(\ell_r+1)}\|_{L^2}$ with the displayed $A_r$.

[F3] [[thm-tonelli-and-fubini-for-completed-product-measures]]: nonnegative section integrals over the product box agree with the iterated integrals.

[F4] [[lem-positive-nurbs-basis-and-quotient-derivative]]: $W\ge w_->0$ and the NURBS numerator-space relation is $\mathcal N_h=S_h/W$.

[F5] [[lem-isogeometric-pullback-energy-norm-equivalence]] includes the scalar $L^2$ change-of-variable bound $\|z\circ F^{-1}\|_{L^2(\Omega)}\le\sqrt{j_+}\|z\|_{L^2(\widehat\Omega)}$.

## Proof

1.1 For a continuous one-dimensional section $f$, square the local stability inequalities in [F1] and sum over the disjoint knot cells. Each point belongs to at most $M_r$ neighborhoods, so $\|Q_rf\|_{L^2(0,1)}^2\le C_r^2M_r\|f\|_{L^2(0,1)}^2$ and therefore $\|Q_rf\|_2\le S_r\|f\|_2$. Apply [F2] to almost every section and integrate the squared estimates over the remaining coordinates by [F3]. This gives $\|(I-Q_r)g\|_{L^2(\widehat\Omega)}\le A_rh_r^{\ell_r+1}\|\partial_r^{\ell_r+1}g\|_{L^2(\widehat\Omega)}$. [A1, A2, F1, F2, F3, given, algebra]

2.1 By [A2], each coordinate operator is bounded on $L^2(\widehat\Omega)$ and the coordinate operators commute pairwise. Each $Q_j$ reproduces the constant function one by [F1], whose norm on the unit box is one. Its operator bound therefore gives $1=\|Q_j1\|_2\le S_j$, so $S_j\ge1$. Use the finite telescoping identity $I-Q_d\cdots Q_1=\sum_{r=1}^d Q_d\cdots Q_{r+1}(I-Q_r)$, with the product empty for $r=d$. Step 1.1 and boundedness of the left factors bound its $r$th summand in $L^2$ by $A_rh_r^{\ell_r+1}\prod_{j>r}S_j\|\partial_r^{\ell_r+1}g\|_2$. Since each omitted $S_j\ge1$, this is at most $A_rh_r^{\ell_r+1}\prod_{j\ne r}S_j\|\partial_r^{\ell_r+1}g\|_2$. Summing proves the displayed tensor-product estimate; the range is the tensor-product spline numerator space by construction. [A2, F1, F3, step 1.1, given, algebra]

3.1 By [F4], $\mathcal Qg/W$ is a NURBS analysis function. Its physical push-forward differs from $u$ by $(g-\mathcal Qg)/W$ composed with $F^{-1}$. Since $W\ge w_-$, its parametric $L^2$ norm is at most $w_-^{-1}\|g-\mathcal Qg\|_2$; applying [F5] proves the physical $L^2$ bound. No gradient estimate is used, so no energy-norm conclusion follows. [F4, F5, step 2.1, algebra] ∎
