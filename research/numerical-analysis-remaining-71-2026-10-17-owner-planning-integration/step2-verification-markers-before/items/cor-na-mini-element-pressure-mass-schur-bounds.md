---
id: cor-na-mini-element-pressure-mass-schur-bounds
kind: corollary
title: "Steady MINI Stokes pressure-mass Schur bounds"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  - def-na-symmetric-saddle-point-system-and-block-preconditioners
  - thm-na-pressure-schur-spectral-equivalence-from-infsup
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - def-na-mini-element-p1-bubble-p1-spaces
  - lem-na-mini-element-local-and-global-dimensions
  - lem-na-homogeneous-dirichlet-korn-identity
  - lem-na-fortin-transfers-discrete-infsup
  - thm-na-mini-element-fortin-stability
  - prop-standard-coordinate-inner-products
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-holder-inequality-for-integrals
  - def-countable-choice
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michele Benzi, Gene H. Golub, and Jörg Liesen, Numerical solution of saddle point problems"
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf"
      locator: "§§3.1–3.2 and §10.1.3, printed pp. 14–17 and 70–71: steady Stokes Schur complement and pressure-mass scaling under inf-sup stability."
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf"
      locator: "§8, printed pp. 6030–6032: the role of the discrete inf-sup condition; the steady MINI mass-Schur estimate is derived here from the stated Fortin bound."
verification: {}
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be a
bounded connected Lipschitz polygonal or polyhedral domain with a finite,
nonempty conforming shape-regular affine simplicial mesh. Use the MINI spaces
$(V_h,Q_h)$ of
[[def-na-mini-element-p1-bubble-p1-spaces]], the Stokes norms and bilinear
forms of [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], and the
viscous velocity form
$$ a_\nu(v,w)=2\nu\int_D\varepsilon(v):\varepsilon(w),\qquad \nu>0. $$
Let $A_h,B_h$ be the matrices of $a_\nu$ and
$b(v,q)=-\int_Dq\,\operatorname{div}v$ in any bases, and let $M_Q$ be the
$L^2(D)$ pressure mass matrix. Use the symmetric saddle convention of
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]]. With
$S_h=B_hA_h^{-1}B_h^T$, the steady Stokes
pressure Schur complement satisfies
$$ \frac{(C_FC_{\rm div}(D))^{-2}}{\nu(1+d)}M_Q \preceq S_h\preceq \frac d\nu M_Q. $$
Here $C_F$ is the shape-regularity-uniform Fortin norm bound and
$C_{\rm div}(D)$ is the continuous divergence right-inverse bound in
[[thm-na-mini-element-fortin-stability]]. The result is for the steady
velocity stiffness; it asserts no corresponding bound for an unsteady shifted
Schur complement.

## Facts & Assumptions

**Given:** Countable Choice, the MINI Stokes pair on the stated finite
nonempty mesh family,
the homogeneous Dirichlet strain identity, and the generic Schur estimate
from inf-sup stability.

[F1] The velocity norm is $\|v\|_V=\|\nabla v\|_{L^2(D)}$, the pressure
norm is $\|q\|_Q=\|q\|_{L^2(D)}$, and the Stokes form is
$b(v,q)=-\int_Dq\,\operatorname{div}v$
([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]).

[F2] The MINI pair consists of continuous piecewise affine zero-boundary
velocities enriched by cell bubbles and continuous piecewise affine mean-zero
pressures on a conforming shape-regular affine simplicial mesh
([[def-na-mini-element-p1-bubble-p1-spaces]]).

[F3] On a finite connected conforming mesh, $\dim V_h=dN_{v,0}+dN_K$ and
$\dim Q_h=N_v-1$ ([[lem-na-mini-element-local-and-global-dimensions]]).

[F4] For $v\in H^1_0(D;\mathbb R^d)$,
$2\|\varepsilon(v)\|_2^2=\|\nabla v\|_2^2+\|\operatorname{div}v\|_2^2$
([[lem-na-homogeneous-dirichlet-korn-identity]]).

[F5] The mini-element discrete inf-sup constant satisfies
$\beta_h\ge(C_FC_{\rm div}(D))^{-1}$, with $C_F$ independent of mesh size
([[thm-na-mini-element-fortin-stability]]).

[F6] If $\alpha\|v\|_V^2\le a(v,v)\le\Lambda\|v\|_V^2$,
$|b(v,q)|\le C_b\|v\|_V\|q\|_Q$, and the inf-sup constant is $\beta$,
then $(\beta^2/\Lambda)M_Q\preceq BA^{-1}B^T\preceq
(C_b^2/\alpha)M_Q$
([[thm-na-pressure-schur-spectral-equivalence-from-infsup]]).

[F7] The standard real coordinate pairing is an inner product and
Cauchy--Schwarz holds for it ([[prop-standard-coordinate-inner-products]],
[[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F8] Holder's integral inequality gives
$|\int_D fg|\le\|f\|_{L^2(D)}\|g\|_{L^2(D)}$
([[thm-holder-inequality-for-integrals]]).

[F9] The generic saddle system has positive finite velocity and pressure
dimensions, an SPD velocity matrix, and a full-row-rank constraint matrix
([[def-na-symmetric-saddle-point-system-and-block-preconditioners]]).

[F10] The mini inf-sup constant is
$\beta_h=\inf_{q_h\ne0}\sup_{v_h\ne0}b(v_h,q_h)/(\|v_h\|_V\|q_h\|_Q)$
([[lem-na-fortin-transfers-discrete-infsup]]).

[A1] Countable Choice is the only choice principle assumed in the MINI,
Korn and Fortin supplier chain ([[def-countable-choice]]).

## Proof
1.1 The given finite nonempty mesh contains at least one $d$-simplex, so $N_K\ge1$ and $N_v\ge d+1$. The dimension formulas [F3] give $\dim V_h\ge d>0$ and $\dim Q_h\ge d>0$, verifying the dimension hypotheses in [F9]. For every nonzero pressure coefficient vector $q$, $q^TM_Qq=\|q_h\|_2^2>0$ by the pressure norm in [F1], so $M_Q$ is SPD. For every $v\in V_h$, [F4] and coordinate Cauchy--Schwarz [F7] give $|\operatorname{div}v|^2\le d|\nabla v|^2$ pointwise. Integrating this inequality and using [F4] yields $$ \nu\|\nabla v\|_2^2\le a_\nu(v,v) \le \nu(1+d)\|\nabla v\|_2^2. $$ The first inequality drops the nonnegative divergence term in [F4]; the second integrates the pointwise estimate. Thus $\alpha=\nu$ and $\Lambda=\nu(1+d)$ in [F6]. [A1, F1, F3, F4, F6, F7, F9, given, algebra]

1.2 For $v\in V_h$ and $q\in Q_h$, Holder's inequality [F8] and the same pointwise divergence bound give $$ |b(v,q)|\le\|q\|_2\|\operatorname{div}v\|_2 \le\sqrt d\|q\|_2\|\nabla v\|_2. $$ Hence the continuity constant in [F6] is $C_b=\sqrt d$. [F1, F2, F6, F8, algebra]

2.1 By [F5] and the definition [F10], the inf-sup constant in [F6] is at least $\beta=(C_FC_{\rm div}(D))^{-1}>0$. If $B_h^Tq=0$ for a nonzero pressure vector, then $b(v,q)=q^TB_hv=0$ for every $v$, making the supremum in [F10] zero and contradicting this positive lower bound. Thus $B_h$ has full row rank as required by [F9]. The lower bound in step 1.1 makes $A_h$ positive definite. Apply [F6] with the constants established in steps 1.1–1.2. Its lower coefficient is $(C_FC_{\rm div}(D))^{-2}/(\nu(1+d))$ and its upper coefficient is $d/\nu$. This is the asserted steady pressure-mass Schur bound. [A1, F5, F6, F9, F10, step 1.1, step 1.2, algebra] ∎
