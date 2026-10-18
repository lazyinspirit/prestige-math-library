---
id: thm-nonsymmetric-nitsche-l2-error-with-boundary-defect
kind: theorem
title: Nonsymmetric Nitsche L2 estimate with its boundary consistency defect
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-nitsche-boundary-penalty-forms, thm-nitsche-consistency-and-energy-quasioptimality, lem-nitsche-fractional-face-trace-on-simplex, def-nitsche-restriction-bessel-potential-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, lem-nitsche-h-one-zero-functions-have-zero-facet-traces, lem-nitsche-fractional-weak-green-and-flux-cancellation, thm-nitsche-zero-boundary-fractional-comparison-interpolation, lem-nitsche-global-fractional-boundary-flux-trace, thm-adjoint-problem-for-bounded-coercive-variational-forms, lem-w-one-two-is-a-hilbert-space, thm-poincare-inequality-for-w-one-p-zero, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
---

## Statement

Assume Countable Choice and the nonsymmetric Nitsche setup of [[def-nitsche-boundary-penalty-forms]] and [[thm-nitsche-consistency-and-energy-quasioptimality]] with penalty above its coercivity threshold. Put $e:=u-u_h^0\in L^2(\Omega)$, and let $\zeta_e\in H^1_0(\Omega)$ solve $\int_\Omega\nabla v\cdot\nabla\zeta_e=\int_\Omega ve$ for all $v\in H^1_0(\Omega)$. Let $s\in(1/2,1]$ and assume the genuine dual regularity hypothesis [A1]. The proved comparison interpolation theorem supplies $z_h:=I_{h,0}\zeta_e\in Y_h$ with $\|\zeta_e-z_h\|_{\#,h}\le C_D h^s\ell_\Omega^{1-s}\|\zeta_e\|_{H^{1+s}}$, and the proved weighted flux trace theorem supplies
$$\left(\sum_{F\in\mathcal F_h^\partial}h_F\|\partial_n\zeta_e\|_{L^2(F)}^2\right)^{1/2}\le C_T h^{1/2}\ell_\Omega^{1/2}\|\zeta_e\|_{H^{1+s}(\Omega)},\qquad 0<h\le\ell_\Omega:=\operatorname{diam}(\Omega).$$
Then
$$\|e\|_2\le\left(M_0C_DC_Rh^s\ell_\Omega^{1-s}+C_TC_Rh^{1/2}\ell_\Omega^{1/2}\right)\|e\|_{\#,h},$$
where $M_0:=2+\gamma_0\ge1$ and $C_D,C_T$ are mesh-uniform for the fixed domain. Since $s>1/2$ and $h\le\ell_\Omega$, the right side is $O(h^{1/2}\ell_\Omega^{1/2})\|e\|_{\#,h}$ after absorbing the fixed constants. The surviving boundary term prevents claiming the symmetric $h^s$ factor from dual regularity alone.

## Facts & Assumptions

**Given:** Countable Choice; the nonsymmetric method and its energy orthogonality; $e=u-u_h^0$; the zero-trace adjoint solution; and [A1], its stated dual regularity.

[F1] The energy theorem gives $a_h^0(e,w_h)=0$ for every $w_h\in V_h$; its weighted Cauchy bound at $\theta=0$ has constant $2+\gamma_0$, denoted $M_0$ here ([[thm-nitsche-consistency-and-energy-quasioptimality]]).

[F2] $H^1_0(\Omega)$ is formed from $W^{1,2}(\Omega)$ using the zero-trace closure convention ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]), and with its usual norm is a Hilbert space ([[lem-w-one-two-is-a-hilbert-space]]). The adjoint Poisson form is coercive in that norm by the Poincare inequality, and the adjoint variational problem is well-posed under Countable Choice ([[thm-poincare-inequality-for-w-one-p-zero]], [[thm-adjoint-problem-for-bounded-coercive-variational-forms]]).

[F3] $H^s(K)$ is the restriction of $H^s(\mathbb R^d)$ with the quotient Bessel-potential norm, and the weighted Fourier norm maps $H^{1+s}(\mathbb R^d)$ continuously into $H^s(\mathbb R^d)$ under each first derivative ([[def-nitsche-restriction-bessel-potential-sobolev-spaces]], [[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F4] For $s>1/2$, a function in $H^s(K)$ has a unique bounded $L^2$ trace on each affine simplex facet ([[lem-nitsche-fractional-face-trace-on-simplex]]).

[F5] Every real function in $H^1_0(\Omega)$ has zero $L^2$ trace on each boundary facet ([[lem-nitsche-h-one-zero-functions-have-zero-facet-traces]]).

[F6] If $v\in H^{1+s}(\Omega)$, $-\Delta v=g\in L^2(\Omega)$ distributionally, and the cellwise normal derivatives have the stated fractional traces, the weak Green supplier gives the global Green identity with interior flux cancellation ([[lem-nitsche-fractional-weak-green-and-flux-cancellation]]).

[F7] The zero-boundary fractional comparison interpolation theorem supplies $z_h=I_{h,0}\zeta_e$ and the full comparison-norm bound in the Statement ([[thm-nitsche-zero-boundary-fractional-comparison-interpolation]]).

[F8] The fixed-domain weighted boundary flux trace theorem gives the stated estimate for every $\zeta_e\in H^{1+s}(\Omega)$ ([[lem-nitsche-global-fractional-boundary-flux-trace]]).

[A1] The adjoint solution satisfies $\|\zeta_e\|_{H^{1+s}(\Omega)}\le C_R\|e\|_2$ for some fixed $C_R$ and $s\in(1/2,1]$. This dual elliptic regularity is an explicit PDE hypothesis, not a consequence of the variational adjoint equation.

## Proof


**Proof technique:** nonsymmetric adjoint duality with an explicit consistency residual.



**Given:** The data and estimates in the Statement, [F1]–[F8], and [A1].

1.1 The adjoint equation is bounded and coercive on the Hilbert space $H^1_0(\Omega)$: Cauchy–Schwarz bounds the gradient form, and [F2] plus Poincaré makes it coercive in the usual $H^1$ norm. Its load $v\mapsto\int_\Omega ve$ is bounded by $\|v\|_{H^1}\|e\|_2$, so [F2] gives a unique weak solution; its stated higher regularity remains an assumption. Testing the equation with $\phi\in C_c^\infty(\Omega)\subset H^1_0(\Omega)$ gives $\int\nabla\phi\cdot\nabla\zeta_e=\int\phi e$, hence $-\Delta\zeta_e=e$ distributionally and [F6] applies. By [F3] the gradient has an $H^s(K)$ restriction on each cell, and [F4] gives its individual facet traces, which [F6] identifies as weak conormal traces. [F2, F3, F4, F6, given]

1.2 Green's identity [F6] for $\zeta_e$ with test $e$ gives $\|e\|_2^2=\int_\Omega\nabla e\cdot\nabla\zeta_e-\sum_F\int_F e\,\partial_n\zeta_e$. For $z_h\in Y_h$, [F5] gives zero boundary trace, so $a_h^0(e,z_h)=\int_\Omega\nabla e\cdot\nabla z_h$; the nonsymmetric flux term and penalty term vanish. Orthogonality [F1] therefore gives $\int_\Omega\nabla e\cdot\nabla z_h=0$, and $\|e\|_2^2=\int_\Omega\nabla e\cdot\nabla(\zeta_e-z_h)-\sum_F\int_F e\,\partial_n\zeta_e.$ [F1, F5, F6, given, algebra]

2.1 Cauchy–Schwarz and [F7] bound the volume term by $C_Dh^s\ell_\Omega^{1-s}\|e\|_{\#,h}\|\zeta_e\|_{H^{1+s}}$. Weighted Cauchy–Schwarz and [F8] bound the boundary term by $\left(\sum_Fh_F^{-1}\|e\|_F^2\right)^{1/2}\left(\sum_Fh_F\|\partial_n\zeta_e\|_F^2\right)^{1/2}\le C_Th^{1/2}\ell_\Omega^{1/2}\|e\|_{\#,h}\|\zeta_e\|_{H^{1+s}}.$ Use [A1] and $M_0\ge1$ to obtain $\|e\|_2^2\le(M_0C_DC_Rh^s\ell_\Omega^{1-s}+C_TC_Rh^{1/2}\ell_\Omega^{1/2})\|e\|_{\#,h}\|e\|_2$. If $\|e\|_2=0$ the conclusion is immediate; otherwise divide by it. Since $(h/\ell_\Omega)^s\le(h/\ell_\Omega)^{1/2}$ for $s>1/2$, the displayed half-order consequence follows. [A1, F7, F8, given, step 1.2, algebra] ∎
## Source notes

This is the nonsymmetric branch of Guermond's Theorem 37.7 with its actual adjoint-consistency defect retained. The fractional weak Green identity, zero-boundary comparison interpolation, and weighted global flux trace are proved on the A page and discharge the former interfaces. The dual elliptic regularity estimate remains an explicit PDE hypothesis, and the half-order boundary defect remains in the conclusion.
