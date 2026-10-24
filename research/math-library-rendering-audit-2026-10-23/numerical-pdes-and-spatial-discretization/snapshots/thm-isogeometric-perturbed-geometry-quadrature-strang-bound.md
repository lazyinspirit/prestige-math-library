---
id: thm-isogeometric-perturbed-geometry-quadrature-strang-bound
kind: theorem
title: Isogeometric geometry and quadrature defects enter through Strang's bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - lem-isogeometric-pullback-energy-norm-equivalence
  - lem-nurbs-laplace-tensor-gap-under-map-error
  - def-variational-crime-error-framework
  - thm-first-strang-lemma-for-conforming-perturbed-galerkin
  - def-countable-choice
  - lem-nurbs-knot-cell-simplicial-geometry-adapter
  - lem-nurbs-homogeneous-data-perturbation-geometry-bounds
  - lem-w-one-two-is-a-hilbert-space
  - lem-na-homogeneous-dirichlet-poincare
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
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf"
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods"
      url: "https://jschoeberl.github.io/iFEM/FEM/nonconforming.html"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
---

## Statement

Assume Countable Choice and use real scalar Sobolev spaces. Let $\widehat\Omega=(0,1)^d$, $d\in\{2,3\}$, and $V=H^1_0(\widehat\Omega;\mathbb R)$ with the gradient norm. Let $F$ be an exact admissible patch map and $G$ an approximate admissible map on the same reference box, with a common finite refinement of their cell grids. Let $f$ be a bounded real-linear functional on $H^1_0(F(\widehat\Omega);\mathbb R)$ equipped with its physical gradient norm, and define the exact pulled-back unit-diffusion form and load by
$$\widehat a_F(v,w)=\int_{\widehat\Omega}K_F\nabla v\cdot\nabla w,\quad K_F=(\det DF)DF^{-1}DF^{-\mathsf T},\qquad \widehat\ell_F(w)=\langle f,w\circ F^{-1}\rangle.$$
Define $\widehat a_G$ by the same tensor formula with $G$. Let $u\in V$ solve $\widehat a_F(u,w)=\widehat\ell_F(w)$ for every $w\in V$. Let $V_h\subset V$ be a finite conforming rational spline space and let bounded $a_h$ and $\ell_h$ be a discrete form and load assembled using $G$ and a specified quadrature rule. Assume $a_h$ is coercive on $V_h$ with inherited norm and constant $\alpha_h>0$, and let $M_F$ be a boundedness constant for $\widehat a_F$. Define
$$\delta_{\rm geom}(v_h):=\sup_{w_h\ne0}\frac{|\widehat a_F(v_h,w_h)-\widehat a_G(v_h,w_h)|}{\|w_h\|_V},\quad \delta_{\rm quad}(v_h):=\sup_{w_h\ne0}\frac{|\widehat a_G(v_h,w_h)-a_h(v_h,w_h)|}{\|w_h\|_V},$$
and $\delta_{\rm load}:=\sup_{w_h\ne0}|\widehat\ell_F(w_h)-\ell_h(w_h)|/\|w_h\|_V$. When $V_h=\{0\}$ define all three defects to be zero. Let $u_h\in V_h$ solve the discrete problem; then
$$\|u-u_h\|_V\le\inf_{v_h\in V_h}\left((1+M_F/\alpha_h)\|u-v_h\|_V+\frac{\delta_{\rm geom}(v_h)+\delta_{\rm quad}(v_h)+\delta_{\rm load}}{\alpha_h}\right).$$
If $\delta=\|DF-DG\|_{L^\infty({\rm op})}$ and both map derivative and inverse bounds are at most $M\ge1$, then the geometry defect obeys
$$\delta_{\rm geom}(v_h)\le(dM^{d+1}+2M^{d+3})\delta\,\|v_h\|_V.$$
The hypotheses require discrete coercivity; neither exact geometry nor positive NURBS weights imply it. The estimate retains the load defect and makes no convergence claim for any geometry or quadrature rule.

## Facts & Assumptions

**Given:** Countable Choice; exact and approximate admissible maps on a common reference domain; the exact pulled-back problem; finite conforming $V_h$; boundedness of the exact form; and coercivity of the assembled form with constant $\alpha_h$.

[A1] [[def-countable-choice]] is the precise choice hypothesis of [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]; the local tensor defect calculation adds no stronger choice principle.

[F1] [[lem-isogeometric-pullback-energy-norm-equivalence]]: the unit-diffusion form pulls back to $\widehat a_F(v,w)=\int_{\widehat\Omega}K_F\nabla v\cdot\nabla w$, with $K_F=(\det DF)DF^{-1}DF^{-\mathsf T}$, and the H1 norm bound applies to the pulled-back load; the tensor formula applies to $G$ as well.

[F2] [[lem-nurbs-laplace-tensor-gap-under-map-error]]: when both maps and inverses have operator bounds at most $M$, $|\widehat a_F(v,w)-\widehat a_G(v,w)|\le(dM^{d+1}+2M^{d+3})\delta\|v\|_V\|w\|_V$.

[F3] [[def-variational-crime-error-framework]] defines the conforming form defect $\delta_{a,h}$ as the supremum of $|\widehat a_F(v_h,w_h)-a_h(v_h,w_h)|/\|w_h\|_V$ and the load defect as the corresponding supremum for $\widehat\ell_F-\ell_h$.

[F4] [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]] under Countable Choice: for Hilbert $V$, a bounded coercive exact form with bounded data and constant $M_F$, finite conforming $V_h$, and a bounded discrete form coercive with constant $\alpha_h$, the error is bounded by the best-approximation term $(1+M_F/\alpha_h)\|u-v_h\|_V$ plus the form and load defects divided by $\alpha_h$.

[F5] [[lem-nurbs-knot-cell-simplicial-geometry-adapter]] subdivides a common finite NURBS knot partition into matching parameter-coordinate simplices; each restriction is an admissible curved-cell map, and the NURBS $e_0,e_1$ errors and global map relation are unchanged by the subdivision. Cross-face derivative matching and equality of distinct exterior boundaries are not asserted.

[F6] [[lem-nurbs-homogeneous-data-perturbation-geometry-bounds]] derives $e_0\le E_0$ and $e_1\le E_1$ from same-basis homogeneous coefficient errors, a positive weight margin, an original global lower Lipschitz bound, and an explicit boundary certificate; its stated $C^1$ multiplicity branch and dyadic rounding construction are sufficient alternatives under their displayed hypotheses.

[F7] [[lem-w-one-two-is-a-hilbert-space]] makes $H^1_0(\widehat\Omega)$ Hilbert in its full H1 norm under Countable Choice, and [[lem-na-homogeneous-dirichlet-poincare]] makes the gradient norm equivalent to that norm on the unit cube.

## Proof

1.1 By [F7], $V$ is Hilbert in its stated gradient norm; because [F1] makes $F(\widehat\Omega)$ bounded, the same Poincare supplier also shows that the physical gradient seminorm is a norm. For any vector $z\in\mathbb R^d$, [F1] and the map bounds give $z\cdot K_Fz=J_F|DF^{-\mathsf T}z|^2\ge j_-L^{-2}|z|^2,\qquad \|K_F\|_{\rm op}\le j_+L^2.$ Indeed, $|DF^{-\mathsf T}z|\ge |z|/\|DF^{\mathsf T}\|_{\rm op}\ge |z|/L$ and $|DF^{-\mathsf T}z|\le L|z|$. Thus $\widehat a_F$ is coercive and bounded in the gradient norm. The pullback gradient identity and change of variables in [F1] give $\|w\circ F^{-1}\|_{\nabla,F}\le\sqrt{j_+}L\|w\|_V$, so the physical gradient-bounded load pulls back to bounded data. With the exact solution given in the Statement, all exact-form hypotheses of [F4] hold; one may take $M_F=j_+L^2$. [F1, F4, F7, given, algebra]

1.2 By [F1], the exact and approximate pulled-back forms use tensors $K_F$ and $K_G$. The form defect in [F3] splits, for any $v_h,w_h$, as $\widehat a_F(v_h,w_h)-a_h(v_h,w_h)=\bigl(\widehat a_F(v_h,w_h)-\widehat a_G(v_h,w_h)\bigr)+\bigl(\widehat a_G(v_h,w_h)-a_h(v_h,w_h)\bigr).$ Take absolute values, divide by $\|w_h\|_V$, and take the supremum over nonzero $w_h$; the triangle inequality yields $\delta_{a,h}(v_h)\le\delta_{\rm geom}(v_h)+\delta_{\rm quad}(v_h)$. If $V_h=\{0\}$ all three defects are zero by the Statement and the same comparison is vacuous. [F1, F3, given, algebra]

1.3 Under the additional map bound in the Statement, [F2] holds for every $w_h$, so taking its supremum gives $\delta_{\rm geom}(v_h)\le(dM^{d+1}+2M^{d+3})\delta\|v_h\|_V$. This controls only the form's geometry component; it says nothing about the load or quadrature defect. [F2, given]

1.4 For NURBS maps $F,G$ satisfying the Statement, apply [F5] on their common knot partition. The resulting reference simplicial mesh is matching, and the cellwise PE17 geometry errors are exactly the same $e_0,e_1$ used here; the homeomorphism $G\circ F^{-1}$ gives the common image topology. The boundary traces of $F$ and $G$ need not be equal. [F5, given, algebra]

2.1 By [F4], the error is bounded by best approximation plus $\delta_{a,h}/\alpha_h$ and $\delta_{F,h}/\alpha_h$. Substitute the split from step 1.2, which is exactly the sum of our geometry and quadrature defects, and use $\delta_{F,h}=\delta_{\rm load}$. Taking the infimum over $v_h$ gives the displayed inequality. Step 1.3 supplies the explicit geometry bound under the additional derivative-map hypotheses. [A1, F3, F4, step 1.1, step 1.2, step 1.3, given, algebra]

3.1 If the same-basis homogeneous-data hypotheses of [F6] hold and its boundary condition makes $G$ admissible, then its derivative estimate supplies $\delta\le E_1$. Step 1.3 therefore gives $\delta_{\rm geom}(v_h)\le(dM^{d+1}+2M^{d+3})E_1\|v_h\|_V$. In the stated dyadic branch, $E_1\le D\eta_b$, so this particular geometry contribution is at most $(dM^{d+1}+2M^{d+3})D\eta_b\|v_h\|_V$. This does not bound the separate quadrature, load, or discrete-coercivity terms. [F2, F6, step 1.3, given, algebra] ∎

