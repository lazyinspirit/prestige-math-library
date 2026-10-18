---
id: thm-symmetric-nitsche-l2-error-under-dual-regularity
kind: theorem
title: Symmetric Nitsche L2 estimate under dual regularity and Nitsche approximation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-nitsche-boundary-penalty-forms, thm-nitsche-consistency-and-energy-quasioptimality, lem-nitsche-fractional-face-trace-on-simplex, def-nitsche-restriction-bessel-potential-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, lem-nitsche-global-boundary-flux-bound, lem-nitsche-h-one-zero-functions-have-zero-facet-traces, lem-nitsche-fractional-weak-green-and-flux-cancellation, thm-nitsche-zero-boundary-fractional-comparison-interpolation, thm-adjoint-problem-for-bounded-coercive-variational-forms, lem-w-one-two-is-a-hilbert-space, thm-poincare-inequality-for-w-one-p-zero, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-countable-choice]
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

Assume Countable Choice and the symmetric Nitsche setup of [[def-nitsche-boundary-penalty-forms]] and [[thm-nitsche-consistency-and-energy-quasioptimality]] with penalty above the symmetric coercivity threshold. Let $e:=u-u_h^1\in L^2(\Omega)$ and let $\zeta_e\in H^1_0(\Omega)$ solve the adjoint Poisson problem $\int_\Omega\nabla v\cdot\nabla\zeta_e\,dx=\int_\Omega ve\,dx$ for every $v\in H^1_0(\Omega)$. Assume its dual regularity bound [A1]
$$\|\zeta_e\|_{H^{1+s}(\Omega)}\le C_R\|e\|_{L^2(\Omega)},\qquad s\in(1/2,1],$$
The proved interpolation theorem [[thm-nitsche-zero-boundary-fractional-comparison-interpolation]] supplies $z_h:=I_{h,0}\zeta_e\in Y_h$ and a mesh-uniform constant $C_D$ with
$$\|\zeta_e-z_h\|_{\#,h}\le C_D h^s\ell_\Omega^{1-s}\|\zeta_e\|_{H^{1+s}(\Omega)},\qquad 0<h\le\ell_\Omega:=\operatorname{diam}(\Omega).$$
Set $C_\partial$ as in [[lem-nitsche-global-boundary-flux-bound]] and preserve the original constant $M_1:=2+C_\partial+\gamma_0$. Then
$$\|u-u_h^1\|_{L^2(\Omega)}\le M_1 C_D C_R h^s\ell_\Omega^{1-s}\|u-u_h^1\|_{\#,h},$$
where the all-comparison-space symmetric form bound with this same $M_1$ is proved below. The dual elliptic regularity estimate remains an explicit PDE hypothesis. If, in addition, the general higher-order/local primal energy approximation hypothesis [A3] holds with exponent $0<t\le r$, then
$$\|u-u_h^1\|_{L^2(\Omega)}\le M_1 C_D C_R C_\theta C_I h^s\ell_\Omega^{1-s}\left(\sum_{K\in\mathcal T_h}h_K^{2t}\|u\|_{H^{1+t}(K)}^2\right)^{1/2}.$$
The primal branch retains its full exponent range and local broken-norm hypothesis; the zero-boundary P1 interpolation theorem supplies the dual approximation and does not replace that branch.

## Facts & Assumptions

**Given:** Countable Choice; the symmetric weak-boundary problem and its energy orthogonality; $e=u-u_h^1$; the zero-trace adjoint solution $\zeta_e$; its stated dual regularity; and the remaining primal approximation hypothesis only for the final conditional branch.

[F1] The energy theorem gives $a_h^1(e,w_h)=0$ for all $w_h\in V_h$ ([[thm-nitsche-consistency-and-energy-quasioptimality]]).

[F2] $H^1_0(\Omega)$ is formed from $W^{1,2}(\Omega)$ using the zero-trace closure convention ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]), and with its usual norm is a Hilbert space ([[lem-w-one-two-is-a-hilbert-space]]). The adjoint variational equation is well-posed for a bounded coercive form on a Hilbert space under Countable Choice ([[thm-adjoint-problem-for-bounded-coercive-variational-forms]]). On bounded $\Omega$, the Poincare inequality controls the $L^2$ part of the $W^{1,2}$ norm of a zero-trace function by its first-derivative part ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F3] $H^s(K)$ is the restriction of $H^s(\mathbb R^d)$ with the quotient Bessel-potential norm, and the weighted Fourier norm maps $H^{1+s}(\mathbb R^d)$ continuously into $H^s(\mathbb R^d)$ under each first derivative ([[def-nitsche-restriction-bessel-potential-sobolev-spaces]], [[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F4] For $s>1/2$, a function in $H^s(K)$ has a unique bounded $L^2$ trace on each affine simplex facet ([[lem-nitsche-fractional-face-trace-on-simplex]]).

[F5] Every real function in $H^1_0(\Omega)$ has zero $L^2$ trace on each boundary facet ([[lem-nitsche-h-one-zero-functions-have-zero-facet-traces]]).

[F6] If $v\in H^{1+s}(\Omega)$, $-\Delta v=g\in L^2(\Omega)$ distributionally, and the cellwise normal derivatives have the stated fractional traces, the weak Green supplier gives the global Green identity and interior flux cancellation for every $w\in H^1(\Omega)$ ([[lem-nitsche-fractional-weak-green-and-flux-cancellation]]).

[F7] The zero-boundary fractional comparison interpolation theorem supplies $z_h=I_{h,0}\zeta_e\in Y_h$ and the displayed $C_D h^s\ell_\Omega^{1-s}$ estimate ([[thm-nitsche-zero-boundary-fractional-comparison-interpolation]]).

[F8] For the nonempty domain, $C_\partial\ge1$; the forms have one volume term, two consistency flux terms, and one penalty term with weights matching $\|\cdot\|_{\#,h}$ ([[lem-nitsche-global-boundary-flux-bound]], [[def-nitsche-boundary-penalty-forms]]).

[A1] The adjoint solution satisfies $\|\zeta_e\|_{H^{1+s}(\Omega)}\le C_R\|e\|_2$ for some fixed $C_R$ and $s\in(1/2,1]$. This dual elliptic regularity is an explicit PDE hypothesis, not a consequence of the variational adjoint equation.

[A3] The primal solution satisfies the energy theorem's comparison-norm approximation hypothesis, so its conditional conclusion gives $$\|e\|_{\#,h}\le C_\theta C_I\left(\sum_{K\in\mathcal T_h}h_K^{2t}\|u\|_{H^{1+t}(K)}^2\right)^{1/2}$$ ([[thm-nitsche-consistency-and-energy-quasioptimality]]).

## Proof


**Proof technique:** symmetric adjoint consistency and duality.



**Given:** Countable Choice; $e$, $\zeta_e$, the hypotheses in the Statement, [F1]–[F8], [A1], and [A3] for the final conditional branch.



1.1 The adjoint equation is bounded and coercive on the Hilbert space $H^1_0(\Omega)$: Cauchy–Schwarz bounds the gradient form, and [F2] plus Poincaré makes it coercive in the usual $H^1$ norm. Its load $v\mapsto\int_\Omega ve$ is bounded by $\|v\|_{H^1}\|e\|_2$, so [F2] gives a unique weak solution; the stated higher regularity remains an assumption on this solution. Testing the adjoint equation with any $\phi\in C_c^\infty(\Omega)\subset H^1_0(\Omega)$ gives $\int\nabla\phi\cdot\nabla\zeta_e=\int\phi e$, exactly the distributional identity $-\Delta\zeta_e=e$. Thus [F6] applies to $\zeta_e$ as well as to $u$. [F2, F6, given]

1.2 Apply [F6] to $\zeta_e$ with test $e$. The adjoint equation gives $\|e\|_2^2=\int_\Omega\nabla e\cdot\nabla\zeta_e-\sum_F\int_F e\,\partial_n\zeta_e$. By [F5], both $z_h$ and $\zeta_e$ have zero boundary traces, so $a_h^1(e,z_h)=0$ from [F1] reduces to $\int_\Omega\nabla e\cdot\nabla z_h-\sum_F\int_F e\,\partial_nz_h=0$; the other terms vanish because their test values are zero. Subtracting this zero identity yields $\|e\|_2^2=a_h^1(e,\zeta_e-z_h)$. [F1, F5, F6, given, algebra]

1.3 By [F3], the regularity of $u$ and $\zeta_e$ places $e$ and $\zeta_e-z_h$ in the comparison space $\mathcal X_h$ of the forms definition; [F4] supplies their facet traces. For arbitrary $v,w\in\mathcal X_h$, weighted Cauchy–Schwarz in the form definition bounds the volume product by $\|v\|_{\#,h}\|w\|_{\#,h}$, each of the two flux products by the product of the normal-flux component of one norm and the boundary-value component of the other, and the penalty product by $\gamma_0\|v\|_{\#,h}\|w\|_{\#,h}$. Thus $|a_h^1(v,w)|\le(3+\gamma_0)\|v\|_{\#,h}\|w\|_{\#,h}$. By [F8], $C_\partial\ge1$, so $3+\gamma_0\le2+C_\partial+\gamma_0=M_1$. This proves the all-comparison-space bound with the original $M_1$, without applying a discrete inverse estimate to $\zeta_e-z_h$. [F3, F4, F8, given, algebra]

2.1 Interpolation [F7] and the bound of step 1.3 give $\|e\|_2^2=|a_h^1(e,\zeta_e-z_h)|\le M_1C_Dh^s\ell_\Omega^{1-s}\|e\|_{\#,h}\|\zeta_e\|_{H^{1+s}}$. Use [A1]; if $\|e\|_2=0$ the conclusion is immediate, and otherwise divide by $\|e\|_2$ to obtain the first estimate. [A1, F7, step 1.2, step 1.3, algebra]

3.1 Under the separate higher-order primal hypothesis [A3], substitute its energy error bound into the first estimate from step 2.1 and multiply the constants. This gives the stated conditional primal $L^2$ rate without changing its exponent range or local seminorm. [A3, step 2.1, algebra] ∎
## Source notes

Guermond's Chapter 37, Theorem 37.8 cancels the adjoint boundary consistency defect and uses a zero-trace interpolant in a norm controlling both the boundary value and normal-derivative traces. The local fractional weak Green and comparison interpolation suppliers prove those interfaces for the commissioned dual branch. The dual elliptic regularity estimate is still a genuine PDE hypothesis, and the higher-order/local primal branch [A3] is preserved as its own assumption; neither follows from ordinary conforming $H^1$ approximation.
