---
id: thm-curved-isoparametric-strang-error-bound
kind: theorem
title: "Strang error bound for a parabolic isoparametric P1 family"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-variational-crime-error-framework
  - def-hk-and-hk-zero-notation
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - def-matching-affine-simplicial-meshes
  - def-curved-domain-geometry-approximation
  - lem-w-one-two-is-a-hilbert-space
  - lem-curved-p1-interpolation-scaling
  - lem-shape-regular-affine-simplex-scaling
  - lem-h2-zero-boundary-p1-interpolant-conforming
  - lem-parabolic-domain-map-approximation
  - lem-isoparametric-pullback-and-surface-metric
  - lem-isoparametric-laplace-tensor-defect
  - lem-curved-boundary-lift-residual
  - thm-first-strang-lemma-for-conforming-perturbed-galerkin
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: "Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)"
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement
Assume the Axiom of Choice and Countable Choice. Let $\widehat\Omega=(-1,1)^2$, let $\Phi(x,y)=(x,y+x^2/4)$, and let $\Phi_h$ be its continuous piecewise-affine nodal interpolant on a shape-regular matching triangular mesh with maximum diameter $h\le1$, small enough that $J_h=\det D\Phi_h\ge1/2$ as in [[lem-parabolic-domain-map-approximation]]. Put $J=\det D\Phi$ and define the pulled-back Laplace tensors $$B=J D\Phi^{-1}D\Phi^{-T},\qquad B_h=J_hD\Phi_h^{-1}D\Phi_h^{-T}.$$ On $V=H^1_0(\widehat\Omega)$ set $$a(v,w)=\int_{\widehat\Omega}\nabla v^TB\nabla w,\qquad a_h(v,w)=\int_{\widehat\Omega}\nabla v^TB_h\nabla w.$$ Let $V_h$ be the finite-dimensional space of continuous functions on $\overline{\widehat\Omega}$ that are affine on each triangle and vanish on $\partial\widehat\Omega$, viewed as a subspace of $V$. Suppose $a$ and $a_h$ are uniformly bounded and coercive on $V$ and $V_h$, respectively, with constants independent of $h$, $F\in V^*$ and $F_h\in V_h^*$ are bounded, $u\in H^2(\widehat\Omega)\cap V$ is real-valued and satisfies $a(u,w)=F(w)$ for every $w\in V$, and $u_h\in V_h$ satisfies $a_h(u_h,w_h)=F_h(w_h)$ for every $w_h\in V_h$.

If a common physical boundary lift $G\in C^2$ with bounded first and second derivatives on a convex neighborhood of the two geometry images is used, let $\ell_{\partial,h}$ be its pulled-back residual from [[lem-curved-boundary-lift-residual]] and set $\epsilon_{\partial,h}=\|\ell_{\partial,h}\|_{V^*}$. Assume the load difference on $V_h$ splits as $$ (F-F_h)|_{V_h}=L_{\mathrm{bulk},h}+\ell_{\partial,h}|_{V_h},\qquad \|L_{\mathrm{bulk},h}\|_{V_h^*}\le\epsilon_{F,h}^{\mathrm{bulk}},\qquad \epsilon_{F,h}^{\mathrm{bulk}}\ge0.$$ Here the $V^*$ and $V_h^*$ norms are induced by the $H^1$ norm. If no lift is used, set $\ell_{\partial,h}=0$ and take the same bound for the full load difference. Then $$\|u-u_h\|_{H^1(\widehat\Omega)}\le C\bigl(h\|u\|_{H^2(\widehat\Omega)}+\epsilon_{F,h}^{\mathrm{bulk}}+\epsilon_{\partial,h}\bigr).$$ where $C$ is independent of $h$. For the parabolic geometry family, $\epsilon_{\partial,h}\le C_G(e_0+e_1)\le C_Gh$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the parabolic exact and
approximate geometry maps on the reference square; a shape-regular matching
mesh with $h\le1$ and $J_h\ge1/2$; bounded, uniformly coercive forms and
bounded exact and discrete loads; the stated exact and discrete variational
solutions; and, when a lift is present, the stated decomposition of the load
difference.

[L1] $H^k=W^{k,2}$ with the derivative-sum Sobolev norm, and
$H^1_0=W^{1,2}_0$ is the norm closure of $C_c^\infty$ in $H^1$.
([[def-hk-and-hk-zero-notation]],
[[def-sobolev-space-wkp-and-its-norm]],
[[def-wkp-zero-as-a-sobolev-closure]])

[L2] A matching affine mesh is a finite face-to-face triangulation by
nondegenerate cells; shape regularity gives the cellwise scaling hypotheses
used by the P1 interpolation estimate.
([[def-matching-affine-simplicial-meshes]],
[[lem-shape-regular-affine-simplex-scaling]])

[L3] $e_0$ and $e_1$ denote the uniform value and derivative geometry gaps.
([[def-curved-domain-geometry-approximation]])

[F1] For the parabolic geometry family, $e_0\le Ch^2$, $e_1\le Ch$, and
$J_h\ge1/2$ for sufficiently small $h$.
([[lem-parabolic-domain-map-approximation]])

[F2] The pullback of the physical Laplace form has tensor
$J D\Phi^{-1}D\Phi^{-T}$, and the tensor difference obeys
$\|B-B_h\|_{L^\infty}\le C e_1$.
([[lem-isoparametric-pullback-and-surface-metric]],
[[lem-isoparametric-laplace-tensor-defect]])

[F3] On each affine triangle, the identity-map P1 interpolant of an $H^2$
function has $H^1$ error at most $C h_K\|u\|_{H^2(K)}$; the constants are
uniform over the shape-regular mesh family.
([[lem-curved-p1-interpolation-scaling]])

[F4] The nodal P1 interpolant of $u\in H^2\cap H^1_0$ is well-defined,
continuous across the mesh, zero on boundary edges, and belongs to $V_h$.
([[lem-h2-zero-boundary-p1-interpolant-conforming]])

[F5] The first Strang estimate bounds the error by best approximation, the
form defect, and the load defect divided by the uniform discrete coercivity
constant.
([[thm-first-strang-lemma-for-conforming-perturbed-galerkin]])

[F6] The variational-crime framework defines
$\delta_{a,h}(v_h)=\sup_{w_h\ne0}|a(v_h,w_h)-a_h(v_h,w_h)|/\|w_h\|_{H^1}$
and $\delta_{F,h}=\sup_{w_h\ne0}|F(w_h)-F_h(w_h)|/\|w_h\|_{H^1}$.
([[def-variational-crime-error-framework]])

[F7] For the common $C^2$ physical lift, the pulled-back residual satisfies
$\|\ell_{\partial,h}\|_{V^*}\le C_G(e_0+e_1)$.
([[lem-curved-boundary-lift-residual]])

[F8] With the standard $H^1$ inner product, $H^1_0(\widehat\Omega)$ is a
closed Hilbert subspace of $H^1(\widehat\Omega)$.
([[lem-w-one-two-is-a-hilbert-space]])

[A1] Countable Choice is assumed through the first-Strang, geometry and
interpolation interfaces. ([[def-countable-choice]])

[A2] The Axiom of Choice is assumed for the automatic nodal-boundedness
clause of the interpolation supplier and the local conformity result.
([[def-axiom-of-choice]])

## Proof

1.1 The exact shear has positive determinant, and [F1] gives $J_h\ge1/2$; thus both tensor formulas are defined almost everywhere. By [L1] and [F8], $V=H^1_0(\widehat\Omega)$ is Hilbert in the stated $H^1$ norm. The boundedness and coercivity assumptions, bounded loads, finite-dimensional conforming subspace $V_h\subset V$, and the given variational equations supply the remaining hypotheses of [F5]. [A1, F1, F5, F8, L1, given]

1.2 For $v_h,w_h\in V_h$, [F2] and integral Cauchy--Schwarz give $|a(v_h,w_h)-a_h(v_h,w_h)| \le C e_1\|v_h\|_{H^1}\|w_h\|_{H^1}.$ Taking the supremum in [F6] yields $\delta_{a,h}(v_h)\le C h\|v_h\|_{H^1}$ by [F1]. The assumed load decomposition and the triangle inequality give $\delta_{F,h}\le\epsilon_{F,h}^{\mathrm{bulk}}+ \epsilon_{\partial,h}$, because restriction of the $V^*$ residual norm to $V_h\subset V$ cannot increase it. [A1, F1, F2, F6, F7, L3, given, algebra]

1.3 By [L2], the shape-regular matching mesh satisfies the affine scaling hypotheses in [F3]. Apply [F3] on each triangle with the identity geometry map. The finite element interpolants assemble into the global nodal interpolant $I_hu$, and [F4] gives $I_hu\in V_h$. Squaring each local estimate, summing over cells, and using $h_K\le h$ gives $\|u-I_hu\|_{H^1}\le Ch\|u\|_{H^2}$. Since $h\le1$, [L1] gives $\|I_hu\|_{H^1}\le\|u\|_{H^1}+Ch\|u\|_{H^2}\le C\|u\|_{H^2}$. [F3, F4, A1, A2, L1, L2, given, algebra]

2.1 Use $I_hu$ as the comparison function in [F5]. Step 1.3 bounds the best-approximation term by $Ch\|u\|_{H^2}$; steps 1.2 and 1.3 bound its form defect by $Ch\|I_hu\|_{H^1}\le Ch\|u\|_{H^2}$; and step 1.2 bounds the load defect by the two stated load tolerances. Uniform positive discrete coercivity in [F5] proves the displayed Strang estimate. [A1, F5, step 1.2, step 1.3, algebra]

3.1 By [F1] and [F7], $\epsilon_{\partial,h}\le C_G(e_0+e_1)\le C_G(h^2+h)\le C_G' h$ for $h\le1$. The residual remains an explicit term of the error bound, including when its $O(h)$ rate dominates higher-order geometric terms. [A1, F1, F7, L3, step 2.1, algebra] ∎
