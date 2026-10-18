---
id: thm-nurbs-p1-tensor-spline-h1-error-rate
kind: theorem
title: Smooth compactly supported data have a degree-one NURBS energy rate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - lem-isogeometric-pullback-energy-norm-equivalence
  - thm-nurbs-quotient-best-approximation-transfer
  - thm-isogeometric-poisson-galerkin-quasioptimality
  - lem-compactly-supported-h1-belongs-to-h-zero
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - lem-tensor-q1-interpolation-h1-estimate
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

Assume Countable Choice. Let $F:\widehat\Omega\to D$ be one admissible NURBS patch, $\widehat\Omega=(0,1)^d$, $d\in\{2,3\}$, with determinant upper bound $j_+$, derivative and inverse-derivative bound $L$, and continuous denominator $W$ that is $C^1$ on each knot cell, satisfies $W\ge w_->0$, and has $\|\nabla W\|_{L^\infty}\le G_W$. Let $g\in C^1(\overline{\widehat\Omega})$ have Lipschitz gradient with constant $M_g$ and support contained in a nonempty compact set $K\Subset\widehat\Omega$, and set $\widehat u=g/W$ and $u=\widehat u\circ F^{-1}$. On the uniform tensor grid of side $h=1/N$, use degree-one $C^0$ numerator splines and let $I_hg$ be the tensor Q1 nodal interpolant. If $h<\operatorname{dist}(K,\partial\widehat\Omega)/\sqrt d$, then $v_h=(I_hg/W)\circ F^{-1}$ is conforming in $H^1_0(D)$. If $u$ is the weak solution of an exact symmetric scalar elliptic problem with coefficient operator bound $\beta$ and coercivity bound $\alpha$ as in [[thm-isogeometric-poisson-galerkin-quasioptimality]], and $u_h$ its exact-form isogeometric Galerkin solution, then
$$\|u-u_h\|_{H^1_0(D),\nabla}\le\frac\beta\alpha\,C_F C_W C_d\,hM_g,$$
where $C_F=\sqrt{j_+}\sqrt{1+L^2}$, $C_W=2/w_-+G_W/w_-^2$, and $C_d=d+\sqrt d+2^{d-1}d\sqrt d$. These constants retain their map, weight, coefficient, and dimension dependence. This proves only the degree-one compact-support branch; it is not a general high-degree, knot-family, or locking-free rate.

## Facts & Assumptions

**Given:** The admissible patch and denominator bounds; the compactly supported $C^{1,1}$ parameter numerator $g$; the uniform degree-one tensor grid; and the exact elliptic weak problem described in the Statement.

[A1] [[def-countable-choice]] is used by the imported Hilbert-space Céa result in [F6]; the local interpolation argument does not require the Axiom of Choice.

[F1] [[lem-tensor-q1-interpolation-h1-estimate]]: for the uniform tensor grid and $C^{1,1}$ numerator, $I_hg$ is in the degree-one tensor spline space and $\|g-I_hg\|_{H^1(\widehat\Omega)}\le C_d hM_g$.

[F2] [[lem-compactly-supported-h1-belongs-to-h-zero]]: compactly supported $H^1$ functions in the reference domain belong to $H^1_0$.

[F3] [[lem-matching-nurbs-patch-traces-give-h1-conformity]]: piecewise $C^1$ fields with square-integrable cell gradients and matching traces belong to $H^1$.

[F4] [[thm-nurbs-quotient-best-approximation-transfer]]: if $s$ and the target numerator have matching cell traces, then the physical H1 error is at most $C_FC_W$ times the numerator H1 error.

[F5] [[lem-isogeometric-pullback-energy-norm-equivalence]]: the map preserves $H^1_0$ and gives the stated physical/reference norm factor $C_F$.

[F6] [[thm-isogeometric-poisson-galerkin-quasioptimality]]: for the exact symmetric form with coefficient upper and coercivity constants $\beta$ and $\alpha$, the exact-geometry Galerkin error in gradient norm is at most $\beta/\alpha$ times best approximation.

## Proof

1.1 If $g=0$, then $s=0$, $u=v_h=0$ and the result is immediate. Otherwise use the nonempty support set $K$ from the Statement. Every tensor cell meeting $\partial\widehat\Omega$ has all its vertices outside $K$: each vertex is within $\sqrt d\,h$ of a boundary point. Therefore $g$ is zero at those vertices, and the cellwise Q1 interpolant is identically zero on each such boundary cell. The function $s:=I_hg$ is continuous, has support in the compact $\sqrt d h$-neighborhood of $K$ inside $\widehat\Omega$, and is a degree-one tensor spline by [F1]. Both $s/W$ and $g/W$ are piecewise $C^1$, have matching traces because $s,g,W$ are continuous and $W\ge w_->0$, and have square-integrable cell gradients. By [F3] they belong to $H^1$; their supports are compact in the reference box, so [F2] puts them in $H^1_0(\widehat\Omega)$. Pullback by [F5] gives $v_h,u\in H^1_0(D)$. [F1, F2, F3, F5, given, algebra]

1.2 Apply [F4] with target numerator $g=W\widehat u$ and approximating numerator $s=I_hg$. They are $C^1$ on each knot cell and have matching traces; the denominator is positive, so the hypotheses hold and $\|u-v_h\|_{H^1(D)}\le C_FC_W\|g-I_hg\|_{H^1(\widehat\Omega)}\le C_FC_WC_dhM_g,$ where the final inequality is [F1]. [F1, F4, given, algebra]

2.1 Apply the exact-form Galerkin estimate [F6] and use $v_h$ as a candidate in its best-approximation infimum. The gradient error is at most $(\beta/\alpha)\|u-v_h\|_{H^1(D)}$; insert step 1.2 to obtain the displayed bound. No quadrature, perturbed geometry, or high-degree approximation rate is used. [A1, F6, step 1.2, given, algebra] ∎