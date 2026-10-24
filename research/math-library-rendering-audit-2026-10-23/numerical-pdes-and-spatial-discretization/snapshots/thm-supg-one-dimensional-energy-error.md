---
id: thm-supg-one-dimensional-energy-error
kind: theorem
title: "One-dimensional SUPG energy error bound with explicit tau dependence"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-supg-one-dimensional-convection-diffusion-model, def-supg-one-dimensional-residual-form, lem-supg-one-dimensional-optimal-parameter, lem-supg-one-dimensional-l2-interpolation-estimate, thm-supg-one-dimensional-consistency-coercivity, lem-one-dimensional-p1-interpolation-error, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Theorem 5.26 and its complete proof, printed pp. 59–62: SUPG interpolation, Galerkin orthogonality, and the mesh-dependent stabilized-norm estimate."
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 24, Finite element error analysis"
      url: "https://jschoeberl.github.io/iFEM/FEM/erroranalysis.html"
      locator: "Complete Chapter 24 text: the interpolation estimate and the energy-error proof route."
---

## Statement

Assume the homogeneous one-dimensional problem and uniform P1 SUPG form of [[def-supg-one-dimensional-convection-diffusion-model]] and [[def-supg-one-dimensional-residual-form]]. Assume Countable Choice, and let $u\in C^2([0,1])$ be the exact solution and $u_h\in V_h$ the unique discrete solution from [[thm-supg-one-dimensional-consistency-coercivity]]. For every continuous, piecewise-H1 function $w$ with $w(0)=w(1)=0$, define
$$\|w\|_{\mathrm{SD}}^2:=\epsilon\|w'\|_{L^2(0,1)}^2+\tau b^2\|w'\|_{L^2(0,1)}^2,\qquad M:=\|u''\|_{L^\infty(0,1)}.$$
This is the product $L^2$ norm of $(\sqrt{\epsilon}w',\sqrt{\tau}|b|w')$, so it has the triangle inequality.
Then
$$\|u-u_h\|_{\mathrm{SD}}\le \left[h\sqrt{\epsilon+\tau b^2}+h\sqrt{\epsilon}+h|b|\sqrt{\tau}+\epsilon\sqrt{\tau}+\frac{h^2}{\sqrt{\tau}}\right]M.$$
With $c_*$ from [[lem-supg-one-dimensional-optimal-parameter]], there is a universal $C_*>0$ such that also
$$\|u-u_h\|_{\mathrm{SD}}\le C_*\left(h\sqrt{\epsilon}+h^{3/2}\sqrt{|b|}\right)M.$$

## Facts & Assumptions

**Given:** Countable Choice; $\epsilon>0$, $b\ne0$, a uniform mesh of size $h$, a homogeneous exact solution $u\in C^2([0,1])$, and its discrete SUPG solution $u_h$.

[F1] [[def-supg-one-dimensional-residual-form]]: for P1 functions $a_h(v_h,v_h)=\epsilon\|v_h'\|_2^2+\tau b^2\|v_h'\|_2^2$, while for piecewise smooth $w$ its stabilization uses $-\epsilon w''+bw'$; $\tau=h(2|b|)^{-1}(\coth(\mathrm{Pe})-1/\mathrm{Pe})$.

[F2] [[thm-supg-one-dimensional-consistency-coercivity]]: $a_h(u-u_h,v_h)=0$ for every $v_h\in V_h$, and $a_h(v_h,v_h)=\|v_h\|_{\mathrm{SD}}^2$.

[F3] [[lem-one-dimensional-p1-interpolation-error]] under Countable Choice: for the nodal P1 interpolant $I_hu$, $\|(u-I_hu)'\|_2\le h\|u''\|_\infty$.

[F4] [[lem-supg-one-dimensional-l2-interpolation-estimate]]: $\|u-I_hu\|_2\le h^2\|u''\|_\infty$.

[F5] [[lem-supg-one-dimensional-optimal-parameter]]: $\tau<h/(2|b|)$, $\tau\ge(c_*/2)\min\{h^2/(2\epsilon),h/|b|\}$, and $\tau\le h^2/(8\epsilon)$.

[A1] Countable Choice is assumed only for the imported interpolation result [F3] ([[def-countable-choice]]); no arbitrary choice is used elsewhere in this finite-mesh proof.

## Proof

1.1 Let $I_hu$ be the nodal interpolant, $\eta:=u-I_hu$, and $e_h:=u_h-I_hu$. The homogeneous endpoint data imply $I_hu\in V_h$, so $e_h\in V_h$. By [F3] and [F4], $\|\eta'\|_2\le hM$ and $\|\eta\|_2\le h^2M$. [A1, F3, F4, given, construct]

2.1 By [F2], $a_h(e_h,e_h)=a_h(\eta,e_h)$. The convection term satisfies $(b\eta',e_h)=-(b\eta,e_h')$: cell boundary terms cancel at interior nodes because $\eta$ and $e_h$ are continuous, and the two outer terms vanish. The diffusion and P1 stabilization terms are bounded by $\sqrt{\epsilon}\|\eta'\|_2\|e_h\|_{\mathrm{SD}}$ and $|b|\sqrt{\tau}\|\eta'\|_2\|e_h\|_{\mathrm{SD}}$. The additional consistency-extension term involving $-\epsilon\eta''$ is bounded by $\epsilon\sqrt{\tau}\|\eta''\|_2\|e_h\|_{\mathrm{SD}}$, because $\sqrt{\tau}|b|\|e_h'\|_2\le\|e_h\|_{\mathrm{SD}}$. The integrated convection term is bounded by $\|\eta\|_2\|e_h\|_{\mathrm{SD}}/\sqrt{\tau}$, since $\sqrt{\tau}|b|\|e_h'\|_2\le\|e_h\|_{\mathrm{SD}}$. Therefore $|a_h(\eta,e_h)|\le\left(\sqrt{\epsilon}\|\eta'\|_2+|b|\sqrt{\tau}\|\eta'\|_2+\epsilon\sqrt{\tau}\|\eta''\|_2+\frac{\|\eta\|_2}{\sqrt{\tau}}\right)\|e_h\|_{\mathrm{SD}}$. [F1, F2, step 1.1, algebra]

3.1 If $e_h=0$, its norm estimate is immediate. Otherwise, divide step 2.1 by $\|e_h\|_{\mathrm{SD}}$ and use [F2] to get $\|e_h\|_{\mathrm{SD}}\le(\sqrt{\epsilon}+|b|\sqrt{\tau})\|\eta'\|_2+\epsilon\sqrt{\tau}\|\eta''\|_2+\|\eta\|_2/\sqrt{\tau}$. [F2, step 2.1, algebra]

4.1 Since $I_hu$ is affine on each cell, $\eta''=u''$ cellwise and $\|\eta''\|_2\le M$. With $u-u_h=\eta-e_h$, the triangle inequality, [F1], [F3], [F4], and step 3.1 give $\|u-u_h\|_{\mathrm{SD}}\le\left[h\sqrt{\epsilon+\tau b^2}+h\sqrt{\epsilon}+h|b|\sqrt{\tau}+\epsilon\sqrt{\tau}+\frac{h^2}{\sqrt{\tau}}\right]M$. [F1, F3, F4, step 1.1, step 3.1, algebra]

5.1 From [F5], $h|b|\sqrt{\tau}\le h^{3/2}\sqrt{|b|/2}$. If $\mathrm{Pe}\le1$, then $\tau\ge c_*h^2/(4\epsilon)$, so $h^2/\sqrt{\tau}\le2c_*^{-1/2}h\sqrt{\epsilon}$, and $\epsilon\sqrt{\tau}\le h\sqrt{\epsilon}/\sqrt8$. If $\mathrm{Pe}\ge1$, then $\tau\ge c_*h/(2|b|)$, so $h^2/\sqrt{\tau}\le(2/c_*)^{1/2}h^{3/2}\sqrt{|b|}$; also $\epsilon\le |b|h/2$ and $\tau<h/(2|b|)$ imply $\epsilon\sqrt{\tau}\le h^{3/2}\sqrt{|b|}/(2\sqrt2)$. Finally $h\sqrt{\epsilon+\tau b^2}\le h\sqrt{\epsilon}+h|b|\sqrt{\tau}$. These inequalities prove the second estimate with a universal constant depending only on $c_*$. [F1, F5, step 4.1, algebra] ∎

