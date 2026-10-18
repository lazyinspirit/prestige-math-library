---
id: thm-sipdg-l2-error-under-adjoint-regularity
kind: theorem
title: SIPDG L2 error under adjoint consistency and dual approximation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-sipdg-bilinear-form-and-energy-norm,
    lem-sipdg-physical-simplex-trace-green,
    thm-sipdg-exact-consistency,
    lem-sipdg-adjoint-consistency-h2,
    lem-sipdg-boundedness-augmented-norm,
    def-wkp-zero-as-a-sobolev-closure,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.3, Theorem 38.12 and its dual-problem setup, printed pp.
        198–199: the s>1/2 regularity index and h^s ell_Omega^(1-s) L2
        estimate."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§5.1, printed pp. 1767–1768: adjoint consistency, Galerkin
        orthogonality, and duality for the L2 error."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the SIPDG setting of [[def-sipdg-bilinear-form-and-energy-norm]]. Let $u$ satisfy all hypotheses of [[thm-sipdg-exact-consistency]], and let $u_h\in V_h^{\rm br}$ satisfy $a_h(u_h,v_h)=\ell_h(v_h)$ for all $v_h\in V_h^{\rm br}$. Set $e:=u-u_h$, let $V:=H_0^1(\Omega;\mathbb R)=W_0^{1,2}(\Omega;\mathbb R)$ as in [[def-wkp-zero-as-a-sobolev-closure]], and let $h:=\max_{K\in\mathcal T}h_K$, with $0<h\le\ell_\Omega:=\operatorname{diam}(\Omega)$. Suppose $s\in(1/2,1]$ and a dual solution $z_e\in V$ exists satisfying
$$\sum_{K\in\mathcal T}\int_KA_K\nabla v\cdot\nabla z_e\,dx=\int_\Omega ve\,dx\qquad(v\in V),$$
with the following properties:

1. Its one-sided normal coefficient-flux traces are in $L^2(F)$ in the weak Green sense defining $\mathcal D_h$. In the branch $s=1$, assume also $z_e|_K\in H^2(K)$ on every cell, with matching interior value traces, zero boundary value trace, and matching interior normal coefficient fluxes; then [[lem-sipdg-adjoint-consistency-h2]] gives $a_h(e,z_e)=\|e\|_{L^2(\Omega)}^2$. In the branch $s<1$, assume this adjoint-consistency identity as an additional hypothesis. The weak dual equation gives $\operatorname{div}(A_K\nabla z_e)|_K=-e|_K\in L^2(K)$, so the stated flux and trace conditions place $z_e$ in the form domain $\mathcal D_h$ of [[def-sipdg-bilinear-form-and-energy-norm]].
2. The specified normed dual-regularity space $\mathcal R_s$ is a subspace of $V\cap\mathcal D_h$, and $\|z_e\|_{\mathcal R_s}\le C_{\rm reg}\|e\|_{L^2(\Omega)}$ for some $C_{\rm reg}\ge0$.
3. There is $z_h\in V_h^{\rm br}$ such that
$$\|z_e-z_h\|_{DG,*}\le C_{\rm app}h^s\ell_\Omega^{1-s}\|z_e\|_{\mathcal R_s}.$$
Here $C_{\rm app}\ge0$.

Then
$$\|e\|_{L^2(\Omega)}\le (2+2\gamma^{-1/2})C_{\rm app}C_{\rm reg}h^s\ell_\Omega^{1-s}\|e\|_{DG,*}.$$
The theorem retains the dual regularity exponent and the half-order face-flux contribution in $\|\cdot\|_{DG,*}$. It does not infer the dual approximation estimate or adjoint-consistency identity from elliptic regularity alone.

## Facts & Assumptions

**Given:** Countable Choice; the exact solution $u$ satisfying [[thm-sipdg-exact-consistency]] and the discrete solution $u_h$ satisfying the equation in the Statement; the dual solution $z_e\in H_0^1(\Omega;\mathbb R)$; an exponent $s\in(1/2,1]$; the branch-specific adjoint-consistency hypotheses in the Statement; the dual regularity and approximation inequalities in the Statement; and the augmented SIPDG expression.

[F1] Exact consistency and the discrete equation imply $a_h(e,v_h)=0$ for every $v_h\in V_h^{\rm br}$. ([[thm-sipdg-exact-consistency]])

[F2] On its form domain, the SIPDG bilinear form satisfies $|a_h(v,w)|\le C_B\|v\|_{DG,*}\|w\|_{DG,*}$ with $C_B=2+2\gamma^{-1/2}$. ([[lem-sipdg-boundedness-augmented-norm]])

[F3] In the $s=1$ branch, piecewise $H^2$ dual solutions with matching traces and normal flux satisfy $a_h(e,z_e)=\|e\|_{L^2(\Omega)}^2$. ([[lem-sipdg-adjoint-consistency-h2]])

[F4] Countable Choice is the stated background for the exact-consistency, adjoint-consistency, physical-trace, and SIPDG form-domain suppliers used here. ([[def-countable-choice]])

[F5] The zero-boundary space $V$ is the norm closure of $C_c^\infty(\Omega)$ in $W^{1,2}(\Omega)$, so a smooth test compactly supported inside a cell belongs to $V$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F6] The reference trace maps transfer to bounded value traces on each physical simplex facet for every cellwise $W^{1,2}$ function. ([[lem-sipdg-physical-simplex-trace-green]])

[F7] The exact solution is cellwise $H^2$ by the hypotheses of exact consistency, and the SIPDG definition places cellwise $H^2$ functions and broken polynomials in $\mathcal D_h$. ([[thm-sipdg-exact-consistency]], [[def-sipdg-bilinear-form-and-energy-norm]])

[A1] For $s<1$, the dual solution is assumed to have the stated weak $L^2$ normal-flux traces and adjoint-consistency identity; this carrier does not prove the fractional trace theorem that would discharge those assumptions.

## Proof

1.1 The result is immediate if $\|e\|_{L^2}=0$. Otherwise choose $z_h$ from the stated approximation hypothesis. For $s=1$, [F3] gives $a_h(e,z_e)=\|e\|_{L^2}^2$ under the stated piecewise-$H^2$ and trace-matching hypotheses; for $s<1$ this identity is [A1]. Exact consistency plus the discrete equation give $a_h(e,z_h)=0$ by [F1]. Hence $\|e\|_{L^2}^2=a_h(e,z_e-z_h)$. [F1, F3, F4, A1, given, choose]

1.2 By [F7], $u$ is cellwise $H^2$ and $u_h,z_h$ are broken polynomials, so $e=u-u_h$ and $z_h$ belong to $\mathcal D_h$. For each cell $K$, a test in $C_c^\infty(K)$ extended by zero belongs to $V$ by [F5]; the weak dual equation then gives $\operatorname{div}(A_K\nabla z_e)|_K=-e|_K\in L^2(K)$ in distributions. Item 1 supplies the one-sided $L^2$ normal flux traces, and $z_e\in V$ supplies its cellwise $H^1$ restrictions and value traces by [F6]. Thus $z_e\in\mathcal D_h$ and [F2] gives $|a_h(e,z_e-z_h)|\le C_B\|e\|_{DG,*}\|z_e-z_h\|_{DG,*}$ with $C_B=2+2\gamma^{-1/2}$. [F2, F4, F5, F6, F7, given]

2.1 Apply step 1.2 to step 1.1 and then use the dual approximation and regularity assumptions. This gives $\|e\|_{L^2}^2\le C_BC_{\rm app}C_{\rm reg}h^s\ell_\Omega^{1-s}\|e\|_{DG,*}\|e\|_{L^2}$. Divide by the positive $\|e\|_{L^2}$ to obtain the asserted estimate. [step 1.1, step 1.2, given, algebra] ∎
