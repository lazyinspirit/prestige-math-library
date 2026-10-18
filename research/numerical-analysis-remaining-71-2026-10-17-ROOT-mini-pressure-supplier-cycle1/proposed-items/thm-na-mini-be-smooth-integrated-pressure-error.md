---
id: thm-na-mini-be-smooth-integrated-pressure-error
kind: theorem
title: "First-order smooth pressure-primitive error for backward Euler MINI"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 11
deps: [thm-na-mini-be-smooth-velocity-error, def-na-mini-navier-stokes-backward-euler-scheme, def-na-evolutionary-incompressible-ns-weak-solution, def-na-stokes-zero-mean-pressure-and-velocity-spaces, thm-na-mini-element-fortin-stability, lem-na-scott-zhang-boundary-preserving-p1-interpolant, def-na-mini-element-p1-bubble-p1-spaces, lem-na-evolutionary-skew-convective-form-bound, thm-na-mini-be-step-existence-energy, thm-poincare-inequality-for-w-one-p-zero, thm-holder-inequality-for-integrals, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, thm-bounded-linear-maps-commute-with-bochner-integration, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§§3.1–3.3, PDF pp.9–13: stable mixed spaces and temporal reconstructions; the smooth Newtonian pressure-primitive estimate is derived locally here, not quoted as their theorem."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53: Stokes equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "§53.3, Theorems 53.17–53.19: inf-sup pressure estimates and conforming approximation; here inf-sup is applied after exact time integration."
verification: {}
---

## Statement

Assume Countable Choice and every domain, MINI mesh, time-partition, smooth-solution, initialization and time-step hypothesis of [[thm-na-mini-be-smooth-velocity-error]]. Thus $D$ is a bounded connected Lipschitz polyhedral domain in dimension $d=2$ or $3$, the matching affine simplicial meshes are shape regular, $\nu>0$, $f\in L^2(0,T;L^2(D)^d)$, and $(u,p)$ is a strong no-slip solution with
$$u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma),\qquad p\in W^{1,\infty}(0,T;H^1(D)\cap Q),\qquad Q=L^2_0(D).$$
The scheme uses interval-average forcing, $u_h^0=P_{Z_h}u(0)$ and any mixed backward Euler MINI solution. Use the norms $\|v\|_V=\|\nabla v\|_2$ and
$$M=1+\|u\|_{W^{1,\infty}H^2}+\|p\|_{W^{1,\infty}H^1},\quad M_u=\|u\|_{L^\infty V},\quad M_E=\nu^{-1/2}\|u(0)\|_2+C_P\nu^{-1}\|f\|_{L^2L^2}.$$
Let $C_*$ and $\Lambda$ be exactly the explicit viscosity-dependent constants in [[thm-na-mini-be-smooth-velocity-error]] and impose its restriction $\tau_{\max}\Lambda\le1/2$. Set
$$e_n=u(t_n)-u_h^n,\qquad E_0=\max_{0\le n\le N}\|e_n\|_2,\qquad E_1=\left(\sum_{n=1}^N\tau_n\|e_n\|_V^2\right)^{1/2},\qquad H=hM+\tau_{\max}M^2.$$
Let $\beta>0$ be the uniform MINI inf-sup lower bound, $M_b=\sqrt d$, and let $C_I$ be a mean-adjusted continuous P1 pressure interpolation constant, so that $\inf_{q_h\in Q_h}\|q-q_h\|_2\le C_Ih\|q\|_{H^1}$ for $q\in H^1(D)\cap Q$. Choose $C_c$ with $|c(a;b,v)|\le C_c\|a\|_V\|b\|_V\|v\|_V$. Define
$$P(t)=\int_0^tp(s)\,ds,\qquad P_h^0=0,\qquad P_h^m=\sum_{n=1}^m\tau_np_h^n,$$
and let $P_h(t)$ be the continuous piecewise-affine interpolant through the $P_h^m$. Then
$$\max_{0\le m\le N}\|P(t_m)-P_h^m\|_2\le(1+M_b/\beta)C_IThM+\beta^{-1}\bigl(2C_PE_0+[2\nu\sqrt T+C_c(M_E+\sqrt T M_u)]E_1+2\nu T\tau_{\max}M+2C_cT\tau_{\max}M^2\bigr).$$
In particular, define
$$K=(1+M_b/\beta)C_IT+\beta^{-1}\bigl(2C_P+[2\nu\sqrt T+C_c(M_E+\sqrt T M_u)]\nu^{-1/2}\bigr)C_*+\beta^{-1}(2\nu T+2C_cT).$$
Then
$$\max_m\|P(t_m)-P_h^m\|_2\le KH,\qquad \|P-P_h\|_{L^\infty(0,T;Q)}\le(K+1)H.$$
For the right-constant pressure reconstruction $\overline p_h(t)=p_h^n$ on $(t_{n-1},t_n]$, this also gives, for every scalar $\eta\in C_c^\infty(0,T)$,
$$\left\|\int_0^T\bigl(p(t)-\overline p_h(t)\bigr)\eta(t)\,dt\right\|_2\le(K+1)H\|\eta'\|_{L^1(0,T)}.$$
The constants are independent of $h$ and the individual time steps; their viscosity dependence includes the displayed powers and the exponential contained in $C_*$. No additional mesh/time relation is imposed. The estimate controls pressure primitives and the stated negative time norm; it does not claim an instantaneous $L^{4/3}_tL^2_x$ pressure-error rate.

## Facts & Assumptions

**Given:** The exact smooth solution, current mixed MINI solution, constants, initialization and partition in the Statement.

[A1] Countable Choice is inherited from the smooth velocity theorem, MINI stability and their Sobolev/Bochner conventions. ([[def-countable-choice]], [[thm-na-mini-be-smooth-velocity-error]])

[F1] The full exact mixed equation can be averaged on each interval and the discrete mixed equation holds for every $v_h\in V_h$, with the same average forcing. The pressure sign is $b(v,q)=-(q,\operatorname{div}v)_2$ and $|a_\nu(v,w)|\le2\nu\|v\|_V\|w\|_V$. ([[def-na-evolutionary-incompressible-ns-weak-solution]], [[def-na-mini-navier-stokes-backward-euler-scheme]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F2] The current velocity theorem gives $E_0+\sqrt\nu E_1\le C_*H$. The energy theorem gives $\sum_n\tau_n\|u_h^n\|_V^2\le M_E^2$. ([[thm-na-mini-be-smooth-velocity-error]], [[thm-na-mini-be-step-existence-energy]])

[F3] MINI satisfies $\beta\|q_h\|_2\le\sup_{v_h\ne0}|b(v_h,q_h)|/\|v_h\|_V$. The face-average P1 interpolation, followed by subtraction of its mean, is a fixed bounded linear map $r_h:H^1(D)\cap Q\to Q_h$ with $\|q-r_hq\|_2\le C_Ih\|q\|_{H^1}$. Also $|b(v,q)|\le M_b\|v\|_V\|q\|_2$. ([[thm-na-mini-element-fortin-stability]], [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], [[def-na-mini-element-p1-bubble-p1-spaces]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F4] The skew form is trilinear and satisfies the $V^3$ bound in the Statement, using its refined bound and Poincare. Poincare gives $\|v\|_2\le C_P\|v\|_V$, and Holder gives the weighted time Cauchy–Schwarz inequalities. ([[lem-na-evolutionary-skew-convective-form-bound]], [[thm-poincare-inequality-for-w-one-p-zero]], [[thm-holder-inequality-for-integrals]])

[F5] The Bochner norm inequality applies to the averages and primitives; bounded linear interpolation and pairings commute with these integrals. Scalarization of a Hilbert-valued Sobolev curve against each fixed Hilbert vector and the scalar absolutely continuous representative theorem give $w(t)-w(s)=\int_s^tw'(r)\,dr$ for the curves $u,p$ here. In particular their $W^{1,\infty}$ bounds imply the norm Lipschitz estimates used below. ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]], [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]])

## Proof

1.1 Write $u_n=u(t_n)$, $\overline u_n=\tau_n^{-1}\int_{t_{n-1}}^{t_n}u(t)\,dt$, and use bars similarly for the exact convective functional. Average the exact full mixed equation over each time cell, subtract the discrete mixed equation, and sum after multiplication by $\tau_n$ through $m$. The forcing averages cancel exactly and the time derivatives telescope, giving for every $v_h\in V_h$ the identity $b(v_h,P(t_m)-P_h^m)=-(e_m-e_0,v_h)_2-\sum_{n\le m}\tau_na_\nu(\overline u_n-u_h^n,v_h)-\sum_{n\le m}\tau_n\bigl(\overline{c(u;u,v_h)}_n-c(u_h^n;u_h^n,v_h)\bigr)$. No projection onto the discrete kernel is used in this identity. [A1, F1, F5, given, algebra]

2.1 Set $R_h^m=\int_0^{t_m}r_hp(t)\,dt\in Q_h$. Bounded linearity and [F3]–[F5] give $\|P(t_m)-R_h^m\|_2\le C_I\int_0^{t_m}h\|p(t)\|_{H^1}\,dt\le C_IThM$. Apply inf-sup to $R_h^m-P_h^m$ and use $|b(v_h,R_h^m-P(t_m))|\le M_b\|v_h\|_V\|R_h^m-P(t_m)\|_2$. The triangle inequality yields $\|P(t_m)-P_h^m\|_2\le(1+M_b/\beta)C_IThM+\beta^{-1}\sup_{v_h\ne0}|b(v_h,P(t_m)-P_h^m)|/\|v_h\|_V$. [F3, F5, step 1.1, construct, algebra]

3.1 Poincare bounds $|(e_m-e_0,v_h)_2|\le2C_PE_0\|v_h\|_V$. The smooth time bound gives $\|\overline u_n-u_n\|_V\le\tau_nM$, so $\sum_{n\le m}\tau_n\|\overline u_n-u_h^n\|_V\le\sqrt T E_1+T\tau_{\max}M$. Hence the viscosity contribution in step 1.1 is at most $2\nu(\sqrt T E_1+T\tau_{\max}M)\|v_h\|_V$. [F1, F4, F5, step 1.1, algebra]

4.1 Trilinearity gives $c(u_n;u_n,v_h)-c(u_h^n;u_h^n,v_h)=c(e_n;u_n,v_h)+c(u_h^n;e_n,v_h)$. Its absolute value is at most $C_c(\|u_n\|_V+\|u_h^n\|_V)\|e_n\|_V\|v_h\|_V$. Weighted time Cauchy–Schwarz, $\|u_n\|_V\le M_u$ and [F2] show that its summed contribution is at most $C_c(\sqrt T M_u+M_E)E_1\|v_h\|_V$. [F2, F4, step 1.1, algebra]

4.2 For $t\in(t_{n-1},t_n)$, split $c(u(t);u(t),v_h)-c(u_n;u_n,v_h)=c(u(t)-u_n;u(t),v_h)+c(u_n;u(t)-u_n,v_h)$. By [F5], $\|u(t)-u_n\|_V\le\tau_nM$ and $\|u(t)\|_V+\|u_n\|_V\le2M$. The $V^3$ estimate bounds the integrand by $2C_c\tau_nM^2\|v_h\|_V$. Integrating over all cells through $m$ yields at most $2C_cT\tau_{\max}M^2\|v_h\|_V$. Combining with step 4.1 bounds the complete convection term in step 1.1. [F4, F5, step 4.1, algebra]

5.1 Insert steps 3.1 and 4.1–4.2 into step 2.1. This gives exactly the first displayed pressure-primitive inequality, uniformly in $m$. Substitute $E_0\le C_*H$ and $E_1\le\nu^{-1/2}C_*H$ from [F2]. Since $M\ge1$, both $hM$ and $\tau_{\max}M$ are bounded by $H$, as is $\tau_{\max}M^2$. The resulting coefficient is the stated $K$, proving $\max_m\|P(t_m)-P_h^m\|_2\le KH$. The factors $\nu^{-1/2}$, $\nu$ and the inherited $C_*$ are retained explicitly. [F2, step 2.1, step 3.1, step 4.1, step 4.2, algebra]

6.1 The exact primitive $P$ is Lipschitz in $Q$ with constant at most $\|p\|_{L^\infty Q}\le M$. Let $\widetilde P$ interpolate its exact endpoint values affinely on the partition. For $t\in[t_{n-1},t_n]$ and $\alpha=(t-t_{n-1})/\tau_n$, the identity $P(t)-\widetilde P(t)=(1-\alpha)(P(t)-P(t_{n-1}))+\alpha(P(t)-P(t_n))$ gives $\|P(t)-\widetilde P(t)\|_2\le2\alpha(1-\alpha)\tau_nM\le\tau_{\max}M$. Convexity gives $\|\widetilde P-P_h\|_{L^\infty Q}\le\max_m\|P(t_m)-P_h^m\|_2$. With step 5.1 this proves the full-time bound $\|P-P_h\|_{L^\infty Q}\le(K+1)H$. [F5, step 5.1, algebra]

7.1 On every time cell $\partial_tP_h=\overline p_h$, and the primitive is continuous across nodes. Scalar integration by parts against $\eta\in C_c^\infty(0,T)$ on each cell, followed by cancellation of node terms, gives $\int_0^T(p-\overline p_h)\eta=-\int_0^T(P-P_h)\eta'$ as a $Q$-valued identity; bounded pairings and [F5] justify scalarization and restoration of the vector identity. Its norm is at most $\|P-P_h\|_{L^\infty Q}\|\eta'\|_{L^1}$. Step 6.1 gives the claimed negative-time-norm estimate and completes all conclusions. [F5, step 6.1, algebra] ∎

## Remarks

This is an additional pressure estimate with the existing initialization and smooth-solution hypotheses. Differentiating a small primitive does not yield a small instantaneous $L^{4/3}_tQ$ pressure error. The original instantaneous pressure-rate clause therefore remains a separate obligation. The proof uses uniform inf-sup after time integration, and neither assumes nor derives uniform $H^1$ stability of the mass-orthogonal projector onto $Z_h$.
