---
id: thm-parabolic-fe-gradient-error-with-time-dependent-ritz
kind: theorem
title: Parabolic finite-element gradient errors include the time-dependent Ritz residual
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [thm-parabolic-adjoint-gradient-sensitivity, thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound, lem-parabolic-projection-time-product-rule, lem-parabolic-energy-pairing-and-trace, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the parabolic Ritz energy estimate and energy-pairing supplier; the gradient bound is conditional on their stated solutions and residuals."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Clason, Introduction to Finite Element Methods, complete lecture notes, §§11.1–11.2 and §12.2"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.1–1.2 and Chapter 3"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
---

## Statement

Assume Countable Choice and the differentiable continuous state/adjoint setting of [[thm-parabolic-adjoint-gradient-sensitivity]]. Let $u,p$ and $u_h,p_h$ denote the continuous and semidiscrete state/adjoint pairs. Write
$$r[\eta]=D_\theta\phi(u(T),\theta)[\eta]+\int_0^T D_\theta L(t,u(t),\theta)[\eta]dt,\qquad r_h[\eta]=D_\theta\phi_h(u_h(T),\theta)[\eta]+\int_0^T D_\theta L_h(t,u_h(t),\theta)[\eta]dt.$$
Assume their gradients $g,g_h\in(\mathbb R^m)^*$ have the representations, for every $\eta\in\mathbb R^m$,
$$g[\eta]=r[\eta]+(p(0),D_\theta u_0[\eta])_H+\int_0^T\bigl(\langle D_\theta f[\eta],p\rangle-D_\theta a[\eta](u,p)\bigr)dt,$$
$$g_h[\eta]=r_h[\eta]+(p_h(0),D_\theta u_{0,h}[\eta])_H+\int_0^T\bigl(\langle D_\theta f_h[\eta],p_h\rangle-D_\theta a_h[\eta](u_h,p_h)\bigr)dt.$$
The continuous representation is supplied by the cited adjoint theorem; the semidiscrete representation is an explicit hypothesis here. Assume $u,p\in H^1(0,T;V)$, the parabolic form and its parameter derivative are uniformly bounded, and the form is coercive with constant $\alpha>0$. Suppose the forward state and time-reversed adjoint both satisfy the hypotheses of [[thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound]], with operator-norm $C^1$ comparison maps $P_{u,h}(t),P_{p,h}(t):V\to V_h$. For the state comparison map, set $\rho_u=P_{u,h}u-u$, $\vartheta_u=u_h-P_{u,h}u$, and
$$\mathcal R_u(t)(v_h)=(\rho_u'(t),v_h)_H+a_\theta(t;\rho_u(t),v_h),\qquad \rho_u'=P_{u,h}'(t)u+P_{u,h}(t)u'-u'.$$
In reverse time $s=T-t$, put $q(s)=p(T-s)$ and $\widetilde P_{p,h}(s)=P_{p,h}(T-s)$; define $\rho_p(s)=\widetilde P_{p,h}(s)q(s)-q(s)$, $\vartheta_p(s)=p_h(T-s)-\widetilde P_{p,h}(s)q(s)$, and $\mathcal R_p(s)(v_h)=(\rho_p'(s),v_h)_H+a_\theta(T-s;v_h,\rho_p(s))$. The projection product rule gives $\rho_p'=\widetilde P_{p,h}'q+\widetilde P_{p,h}q'-q'$, with $\widetilde P_{p,h}'(s)=-P_{p,h}'(T-s)$. The Ritz supplier gives, for $z=u,p$,
$$\|z-z_h\|_{L^2(0,T;V)}\le E_z:=\|\rho_z\|_{L^2(0,T;V)}+\alpha^{-1/2}\left(\|\vartheta_z(0)\|_H^2+\alpha^{-1}\|\mathcal R_z\|_{L^2(0,T;V_h^*)}^2\right)^{1/2},$$
where the adjoint's initial trace means its terminal trace in original time. In particular, $\mathcal R_z$ contains the derivative of the time-dependent projection; it cannot be dropped from this hypothesis.

For $\|\eta\|_2\le1$, assume $\|D_\theta f[\eta]\|_{L^2(V^*)}\le M_f$, $\|D_\theta a(t)[\eta]\|_{\mathcal L(V,V^*)}\le M_a$ a.e., and define $U_*:=\max(\|u\|_{L^2(V)},\|u_h\|_{L^2(V)})$, $P_*:=\max(\|p\|_{L^2(V)},\|p_h\|_{L^2(V)})$, $P_{0,*}:=\max(\|p(0)\|_H,\|p_h(0)\|_H)$, and $U_0':=\|D_\theta u_0\|_{\mathcal L(\mathbb R^m,H)}$. Suppose $\|r_h-r\|_{(\mathbb R^m)^*}\le\varepsilon_J$, $\|D_\theta u_{0,h}-D_\theta u_0\|_{\mathcal L(\mathbb R^m,H)}\le\varepsilon_0$, $\|D_\theta f_h-D_\theta f\|_{\mathcal L(\mathbb R^m,L^2(V^*))}\le\varepsilon_f$, and $\|D_\theta a_h-D_\theta a\|_{L^\infty(0,T;\mathcal L(\mathbb R^m,\mathcal L(V,V^*)))}\le\varepsilon_a$. Put $E_{p,0}=\|p_h(0)-p(0)\|_H$. Then
$$\|g_h-g\|_{(\mathbb R^m)^*}\le \varepsilon_J+U_0'E_{p,0}+P_{0,*}\varepsilon_0+M_fE_p+\varepsilon_fP_*+M_a(E_uP_*+U_*E_p)+\varepsilon_aU_*P_*.$$
The derivative-data and trace defects are additional assumptions; an energy estimate for the state alone does not imply this gradient bound.

## Facts & Assumptions

**Given:** The continuous and semidiscrete differentiable state/adjoint pairs, their objective-gradient formulas, the bounded coercive form, parameter derivative bounds, and the time-dependent Ritz comparison maps and residuals.

[F1] The continuous parabolic adjoint formula expresses the gradient through the initial trace, forcing derivative, bilinear-form derivative and direct objective terms ([[thm-parabolic-adjoint-gradient-sensitivity]]). The semidiscrete representation is assumed explicitly in the Statement.

[F2] The Ritz splitting obeys the residual identity and energy estimate, and for a time-dependent comparison map its residual uses $\rho'=P_h'u+P_hu'-u'$ ([[thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound]]).

[F3] The weak time product rule yields $(P_h(t)u(t))'=P_h'(t)u(t)+P_h(t)u'(t)$ for an operator-norm $C^1$ family ([[lem-parabolic-projection-time-product-rule]]).

[A1] Countable Choice ([[def-countable-choice]]) is required by the cited parabolic energy/pairing results. Both state and time-reversed transposed adjoint estimates, all traces, and all displayed derivative-data defects are assumed to satisfy their stated hypotheses ([[thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound]], [[lem-parabolic-energy-pairing-and-trace]]).

## Proof

1.1 For the forward state, the product rule [F3] gives $\rho_u'=P_{u,h}'u+P_{u,h}u'-u'$, so the residual in [F2] is exactly the one displayed in the Statement. Apply the energy estimate in [F2] to $\vartheta_u$; it gives $\|\vartheta_u\|_{L^2(V)}\le\alpha^{-1/2}(\|\vartheta_u(0)\|_H^2+\alpha^{-1}\|\mathcal R_u\|_{L^2(V_h^*)}^2)^{1/2}$. Since $u-u_h=-\rho_u-\vartheta_u$, the triangle inequality proves the stated $E_u$ bound. [A1, F2, F3, given, algebra]

2.1 Set $s=T-t$ and $q(s)=p(T-s)$. The backward adjoint equation becomes a forward parabolic variational equation with transposed form $a_\theta(T-s;v,w)$, which has the same boundedness and coercivity constants. The comparison $\widetilde P_{p,h}(s)=P_{p,h}(T-s)$ is operator-norm $C^1$ and $\widetilde P_{p,h}'(s)=-P_{p,h}'(T-s)$. By [F3], its residual contains $\widetilde P_{p,h}'q+\widetilde P_{p,h}q'-q'$; apply the energy estimate in [F2] and the splitting $p-p_h=-\rho_p-\vartheta_p$ to get the stated $E_p$ bound by the same triangle inequality as step 1.1. [A1, F2, F3, step 1.1, construct]

3.1 Subtract the continuous and semidiscrete representations assumed in the Statement; [F1] supplies the continuous one. The direct term contributes $\varepsilon_J$. For the initial pairing, add and subtract $(p_h(0),D_\theta u_0)$; Cauchy--Schwarz bounds the difference by $U_0'E_{p,0}+P_{0,*}\varepsilon_0$. In the forcing term, add and subtract $D_\theta f[p_h]$; the derivative-data defect is at most $\varepsilon_fP_*$, and the exact derivative contributes at most $M_fE_p$ by step 2.1. Thus the direct, initial, and forcing contributions are bounded by the first four terms in the stated gradient estimate. [A1, F1, step 2.1, given, algebra]

4.1 For the form term, add and subtract $D_\theta a[u_h,p_h]$. Its derivative-data defect is at most $\varepsilon_aU_*P_*$. Split the exact derivative difference as $D_\theta a[u_h-u,p_h]+D_\theta a[u,p_h-p]$; Cauchy--Schwarz in time, the bound $\|D_\theta a[\eta]\|\le M_a$, and steps 1.1 and 2.1 give $M_a(E_uP_*+U_*E_p)$. Combine this with step 3.1 and take the supremum over $\|\eta\|_2\le1$ to obtain the displayed dual norm bound. [A1, F1, step 1.1, step 2.1, step 3.1, given, algebra] ∎
