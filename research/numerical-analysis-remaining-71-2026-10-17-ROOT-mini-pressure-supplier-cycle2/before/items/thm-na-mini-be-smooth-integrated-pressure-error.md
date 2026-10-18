---
id: thm-na-mini-be-smooth-integrated-pressure-error
kind: theorem
title: "First-order smooth pressure-primitive error for backward Euler MINI"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 11
deps: [thm-na-mini-be-smooth-velocity-error, def-na-mini-navier-stokes-backward-euler-scheme, def-na-evolutionary-incompressible-ns-weak-solution, lem-na-evolutionary-ns-weak-form-is-well-defined, def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-evolutionary-skew-convective-form, thm-na-mini-element-fortin-stability, lem-na-scott-zhang-boundary-preserving-p1-interpolant, def-na-mini-element-p1-bubble-p1-spaces, lem-na-evolutionary-skew-convective-form-bound, thm-na-mini-be-step-existence-energy, thm-poincare-inequality-for-w-one-p-zero, thm-orthogonal-decomposition-by-a-closed-subspace, cor-sobolev-inequality-for-w-one-p-zero, thm-holder-inequality-for-integrals, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-bochner-integrable-function, def-strongly-measurable-banach-valued-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, thm-bounded-linear-maps-commute-with-bochner-integration, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, def-separable-space, thm-locally-integrable-functions-embed-in-distributions, thm-countable-union-of-null-is-null, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53: Stokes equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Theorem 53.17 and Lemmas 53.20–53.21: the static mixed pressure estimate and approximation terms used after time integration; the current pressure-primitive bound is derived locally."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2, and Chapter 8 MINI-element sections: static inf-sup and approximation context; the evolutionary primitive estimate is proved locally."
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§§3.1–3.3, PDF pp.9–13: MINI/Fortin and time reconstructions. Their different stress scheme does not state the present pressure estimate."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§3, pp.24–31: two-dimensional backward-Euler mixed recurrence; its Taylor–Hood implementation is not used as a MINI stability claim."
verification: {}
---

## Statement

Assume Countable Choice and every domain, mesh, time-partition, smooth-solution, initialization and time-step hypothesis of [[thm-na-mini-be-smooth-velocity-error]]. Thus $D$ is a bounded connected Lipschitz polyhedral domain in dimension $d\in\{2,3\}$, the matching affine simplicial meshes are shape regular, $\nu>0$, $f\in L^2(0,T;L^2(D)^d)$, and $(u,p)$ is a strong no-slip solution with
$$u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma),\qquad p\in W^{1,\infty}(0,T;H^1(D)\cap Q),\qquad Q=L^2_0(D).$$
The point values of these classes mean their unique continuous representatives, constructed in the proof using Countable Choice. Set
$$M=1+\|u\|_{W^{1,\infty}H^2}+\|p\|_{W^{1,\infty}H^1},\qquad M_u=\|u\|_{L^\infty V},\qquad M_E=\nu^{-1/2}\|u(0)\|_2+C_P\nu^{-1}\|f\|_{L^2L^2}.$$
Let $C_*$ and $\Lambda$ be exactly the explicit viscosity-dependent constants in [[thm-na-mini-be-smooth-velocity-error]] and impose its restriction $\tau_{\max}\Lambda\le1/2$. Use the same initialization $u_h^0=P_{Z_h}u(0)$ and any mixed backward Euler MINI solution. Define
$$e_n=u(t_n)-u_h^n,\qquad E_0=\max_{0\le n\le N}\|e_n\|_2,\qquad E_1=\left(\sum_{n=1}^N\tau_n\|e_n\|_V^2\right)^{1/2},\qquad H=hM+\tau_{\max}M^2.$$
Let $\beta>0$ be the uniform MINI inf-sup lower bound, $M_b=\sqrt d$, and let $C_I$ be a mean-adjusted continuous P1 pressure interpolation constant satisfying
$$\inf_{q_h\in Q_h}\|q-q_h\|_2\le C_Ih\|q\|_{H^1(D)}\qquad(q\in H^1(D)\cap Q).$$
Choose $C_c$ with $|c(a;b,v)|\le C_c\|a\|_V\|b\|_V\|v\|_V$, put $P(t)=\int_0^tp(s)\,ds$, $P_h^0=0$, $P_h^m=\sum_{n=1}^m\tau_np_h^n$, and let $P_h$ be the continuous piecewise-affine interpolant through $P_h^m$. Then
$$\max_{0\le m\le N}\|P(t_m)-P_h^m\|_2\le(1+M_b/\beta)C_IThM+\beta^{-1}\bigl(2C_PE_0+[2\nu\sqrt T+C_c(M_E+\sqrt T M_u)]E_1+2\nu T\tau_{\max}M+2C_cT\tau_{\max}M^2\bigr).$$
In particular, with
$$K=(1+M_b/\beta)C_IT+\beta^{-1}\bigl(2C_P+[2\nu\sqrt T+C_c(M_E+\sqrt T M_u)]\nu^{-1/2}\bigr)C_*+\beta^{-1}(2\nu T+2C_cT),$$
one has
$$\max_m\|P(t_m)-P_h^m\|_2\le KH,\qquad \|P-P_h\|_{L^\infty(0,T;Q)}\le(K+1)H.$$
For the right-constant pressure reconstruction $\overline p_h(t)=p_h^n$ on $(t_{n-1},t_n]$, every $\eta\in C_c^\infty(0,T)$ also satisfies
$$\left\|\int_0^T\bigl(p(t)-\overline p_h(t)\bigr)\eta(t)\,dt\right\|_2\le(K+1)H\|\eta'\|_{L^1(0,T)}.$$
The constants are independent of $h$ and the individual time steps; their viscosity dependence includes the displayed powers and the exponential contained in $C_*$. No additional mesh/time relation is imposed. This estimate controls accumulated pressure and the stated negative time norm; it does not claim an instantaneous $L^{4/3}_tL^2_x$ pressure-error rate.

## Facts & Assumptions
**Given:** Countable Choice, the smooth solution, MINI scheme solution, constants, initialization and partition in the Statement.

[A1] Countable Choice is the only choice principle needed for the local representative argument below; it is also inherited by the smooth velocity, MINI stability and Bochner suppliers. No use of the Axiom of Choice or Dependent Choice is added here. ([[def-countable-choice]], [[thm-na-mini-be-smooth-velocity-error]])

[F1] The strong solution satisfies the full time-tested mixed equation, with $b(v,q)=-(q,\operatorname{div}v)$ and $|a_\nu(v,w)|\le2\nu\|v\|_V\|w\|_V$; every term is integrable. ([[def-na-evolutionary-incompressible-ns-weak-solution]], [[lem-na-evolutionary-ns-weak-form-is-well-defined]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F2] The current smooth velocity theorem gives $E_0+\sqrt{\nu}E_1\le C_*H$. The discrete energy theorem gives $\sum_n\tau_n\|u_h^n\|_V^2\le M_E^2$. ([[thm-na-mini-be-smooth-velocity-error]], [[thm-na-mini-be-step-existence-energy]])

[F3] The MINI pressure space $Q_h$ from [[def-na-mini-element-p1-bubble-p1-spaces]] is finite-dimensional and has inf-sup constant $\beta>0$. The face-average P1 interpolant in [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]] maps $H^1(D)$ to the continuous P1 space and has $L^2$ error at most $C h\|q\|_{H^1}$ on the stated shape-regular meshes. Also $|b(v,q)|\le\sqrt d\|v\|_V\|q\|_2$. ([[thm-na-mini-element-fortin-stability]], [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], [[def-na-mini-element-p1-bubble-p1-spaces]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F4] The skew form is trilinear and satisfies the $V^3$ bound in the Statement. Poincare gives $\|v\|_2\le C_P\|v\|_V$, and Holder gives the weighted time Cauchy–Schwarz estimates used below. In $d=3$ the needed $L^6$ embedding is the $p=2$ Sobolev embedding; in $d=2$ it follows from the $p=3/2$ zero-boundary inequality and finite-measure Holder, not from a $p=2$ critical formula. ([[def-na-evolutionary-skew-convective-form]], [[lem-na-evolutionary-skew-convective-form-bound]], [[thm-poincare-inequality-for-w-one-p-zero]], [[thm-holder-inequality-for-integrals]], [[cor-sobolev-inequality-for-w-one-p-zero]])

[F5] The Bochner norm inequality and bounded-linear-map interchange apply to interval averages and primitives. Scalar Fubini applies to the time integrals. ([[def-bochner-integrable-function]], [[def-strongly-measurable-banach-valued-function]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F6] $L^2(D)$ is a separable real Hilbert space, and every closed subspace has an orthogonal decomposition by [[thm-orthogonal-decomposition-by-a-closed-subspace]]. $H^1(D)$ and $H^2(D)^d$ embed into finite products of $L^2(D)$ by listing their weak derivatives and are separable as subspaces under Countable Choice. A locally integrable scalar function defining the zero distribution vanishes almost everywhere, and countable unions of null sets are null. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]], [[def-separable-space]], [[thm-locally-integrable-functions-embed-in-distributions]], [[thm-countable-union-of-null-is-null]])

## Proof

**Proof technique:** direct.

**Given:** The strong solution and all MINI scheme inputs in the Statement.

1.1 To justify pointwise time estimates without strengthening Countable Choice, let $X$ be either $H^2(D)^d$ or $H^1(D)\cap Q$, let $w\in W^{1,\infty}(0,T;X)$, and let $g=w'\in L^\infty(0,T;X)$ be its weak Bochner derivative. The separability of $X$ is [F6]. Define $G(t)=\int_0^tg(s)\,ds$. By [F5], $\|G(t)-G(s)\|_X\le\|g\|_{L^\infty X}|t-s|$. For $\xi\in X$ and $\phi\in C_c^\infty(0,T)$, scalar Fubini gives $-\int_0^T(G(t),\xi)_X\phi'(t)\,dt=-\int_0^T\int_0^t(g(s),\xi)_X\,ds\,\phi'(t)\,dt=\int_0^T(g(s),\xi)_X\phi(s)\,ds.$ Thus $G'=g$ in scalar distributions and $(w-G,\xi)$ has zero distributional derivative. [A1, F5, F6, given, construct]

1.2 For $v\in V$, Cauchy–Schwarz for the matrix trace gives $|\operatorname{div}v|=|\operatorname{tr}\nabla v|\le\sqrt d\,|\nabla v|$ almost everywhere. Integrating and applying Cauchy–Schwarz yields $\|b(v,q)\|\le\sqrt d\,\|v\|_V\|q\|_2=M_b\|v\|_V\|q\|_2$, as used in the Statement. [F1, given, algebra]

1.3 For $q\in H^1(D)\cap Q$, let $I_hq$ be the face-average P1 interpolant from [F3] and set $r_h^0q=I_hq-|D|^{-1}\int_DI_hq$. This belongs to $Q_h$. Since $q$ has mean zero, Cauchy–Schwarz gives $|D|^{1/2}\bigl||D|^{-1}\int_DI_hq\bigr|\le\|I_hq-q\|_2$, hence $\|q-r_h^0q\|_2\le2\|q-I_hq\|_2\le2Ch\|q\|_{H^1(D)}$. Thus some finite uniform best-approximation constant exists, as required by the Statement. Now let $r_h$ be the $L^2$-orthogonal projection onto $Q_h$. The finite-dimensional space $Q_h$ is closed in Hilbert $Q$; [F6] gives its unique orthogonal decomposition. Uniqueness makes $r_h$ linear, and Pythagoras gives $\|r_hq\|_2\le\|q\|_2$, so it is bounded. The Statement\u2019s selected best-approximation constant therefore yields $\|q-r_hq\|_2=\inf_{q_h\in Q_h}\|q-q_h\|_2\le C_Ih\|q\|_{H^1(D)}$. [F3, F6, given, construct, algebra]

2.1 A locally integrable scalar function with zero distributional derivative is constant almost everywhere. Indeed, fix $\rho\in C_c^\infty(0,T)$ with $\int\rho=1$. For any $\phi\in C_c^\infty(0,T)$, $\psi=\phi-(\int\phi)\rho$ has integral zero, so $\theta(t)=\int_0^t\psi(s)\,ds$ belongs to $C_c^\infty(0,T)$ and $\theta'=\psi$. The zero-derivative identity gives $\int(w-G,\xi)\psi=0$, hence $\int(w-G,\xi)\phi=c_\xi\int\phi$ with $c_\xi=\int(w-G,\xi)\rho$. Injectivity of the locally integrable embedding into distributions [F6] yields $(w-G,\xi)=c_\xi$ almost everywhere. [F6, step 1.1, algebra]

3.1 Choose a countable dense set $(\xi_k)$ in $X$. By [F6], the scalar identities in step 2.1 hold outside one common null set. Choose $t_0$ outside that set where the Bochner representative of $w$ is defined, and put $c=w(t_0)-G(t_0)$. Density gives $w(t)-G(t)=c$ for almost every $t$. Thus $w^*(t)=G(t)+c$ is the unique continuous representative and is Lipschitz with constant $\|w'\|_{L^\infty X}$. Apply this to $u$ and $p$: for all $s,t$, $\|u(t)-u(s)\|_V\le M|t-s|$ and $\|p(t)-p(s)\|_{H^1}\le M|t-s|$. Continuity and their essential bounds then give $\|u(t)\|_V\le M_u$ and $\|p(t)\|_{H^1}\le M$ for every $t$. Also $M\ge M_u$, since the $H^2$ norm controls the $V$ norm. These representatives are the ones used for the nodal errors in the existing smooth velocity theorem. [A1, F6, step 1.1, step 2.1, construct]

4.1 Write $u_n=u(t_n)$, $\overline u_n=\tau_n^{-1}\int_{t_{n-1}}^{t_n}u(t)\,dt$, and use bars similarly for exact pressure, forcing and convection. For each vector in a basis of the finite-dimensional $V_h$, [F1] and step 3.1 imply that the full scalar momentum residual is the zero distribution. All residual terms are integrable, so [F6] identifies that residual with zero almost everywhere; integrating over each time cell and using $u(t_n)-u(t_{n-1})=\int_{t_{n-1}}^{t_n}u_t$ from step 3.1 gives the exact interval equation. Subtract the mixed backward Euler equations and sum through $m$. The identical forcing averages cancel and the time derivatives telescope, giving for every $v_h\in V_h$ $b(v_h,P(t_m)-P_h^m)=-(e_m-e_0,v_h)_2-\sum_{n\le m}\tau_na_\nu(\overline u_n-u_h^n,v_h)-\sum_{n\le m}\tau_n\bigl(\overline{c(u;u,v_h)}_n-c(u_h^n;u_h^n,v_h)\bigr).$ No projection onto the discrete kernel is used in this identity. [F1, F5, F6, step 3.1, given, algebra]

5.1 Set $R_h^m=\int_0^{t_m}r_hp(t)\,dt\in Q_h$, where $r_h$ is the mean-adjusted face-average P1 interpolant from step 1.3. Its bounded linearity and [F5] give $\|P(t_m)-R_h^m\|_2\le C_I\int_0^{t_m}h\|p(t)\|_{H^1}\,dt\le C_IThM.$ Apply inf-sup to $R_h^m-P_h^m$, and use $|b(v_h,R_h^m-P(t_m))|\le M_b\|v_h\|_V\|R_h^m-P(t_m)\|_2$. The triangle inequality yields $\|P(t_m)-P_h^m\|_2\le(1+M_b/\beta)C_IThM+\beta^{-1}\sup_{v_h\ne0}\frac{|b(v_h,P(t_m)-P_h^m)|}{\|v_h\|_V}.$ [F3, F5, step 1.2, step 1.3, step 4.1, construct, algebra]

5.2 Poincare bounds $|(e_m-e_0,v_h)_2|\le2C_PE_0\|v_h\|_V$. Step 3.1 gives $\|\overline u_n-u_n\|_V\le\tau_nM$, hence $\sum_{n\le m}\tau_n\|\overline u_n-u_h^n\|_V\le\sqrt T E_1+T\tau_{\max}M.$ The viscosity contribution in step 4.1 is therefore at most $2\nu(\sqrt T E_1+T\tau_{\max}M)\|v_h\|_V$. [F1, F2, F4, step 3.1, step 4.1, algebra]

5.3 Trilinearity gives $c(u_n;u_n,v_h)-c(u_h^n;u_h^n,v_h)=c(e_n;u_n,v_h)+c(u_h^n;e_n,v_h).$ Its absolute value is at most $C_c(\|u_n\|_V+\|u_h^n\|_V)\|e_n\|_V\|v_h\|_V$. Weighted Cauchy–Schwarz, $\|u_n\|_V\le M_u$, and [F2] show that its summed contribution is at most $C_c(\sqrt T M_u+M_E)E_1\|v_h\|_V$. [F2, F4, step 4.1, algebra]

6.1 For $t\in(t_{n-1},t_n)$, split $c(u(t);u(t),v_h)-c(u_n;u_n,v_h)=c(u(t)-u_n;u(t),v_h)+c(u_n;u(t)-u_n,v_h).$ By step 3.1, $\|u(t)-u_n\|_V\le\tau_nM$, and $M\ge M_u$. The $V^3$ estimate bounds the integrand by $2C_c\tau_nM^2\|v_h\|_V$. Integrating over the cells through $m$ gives at most $2C_cT\tau_{\max}M^2\|v_h\|_V$, completing the convection bound in step 4.1. [F4, step 3.1, step 4.1, step 5.3, algebra]

7.1 Insert the estimates in steps 5.2, 5.3, and 6.1 into step 5.1. This gives the first displayed pressure-primitive inequality, uniformly in $m$. Substitute $E_0\le C_*H$ and $E_1\le\nu^{-1/2}C_*H$ from [F2]. Since $M\ge1$, both $hM$ and $\tau_{\max}M$ are at most $H$, and $\tau_{\max}M^2\le H$. The resulting coefficient is exactly $K$, so $\max_m\|P(t_m)-P_h^m\|_2\le KH$. [F2, step 5.1, step 5.2, step 5.3, step 6.1, algebra]

8.1 The exact primitive $P$ is Lipschitz in $Q$ with constant at most $\|p\|_{L^\infty Q}\le M$, by step 3.1. Let $\widetilde P$ interpolate its exact endpoint values affinely on the partition. For $t\in[t_{n-1},t_n]$ and $\alpha=(t-t_{n-1})/\tau_n$, $P(t)-\widetilde P(t)=(1-\alpha)(P(t)-P(t_{n-1}))+\alpha(P(t)-P(t_n)),$ so $\|P(t)-\widetilde P(t)\|_2\le2\alpha(1-\alpha)\tau_nM\le\tau_{\max}M$. Convexity gives $\|\widetilde P-P_h\|_{L^\infty Q}\le\max_m\|P(t_m)-P_h^m\|_2$. Together with step 7.1 this proves $\|P-P_h\|_{L^\infty Q}\le(K+1)H$, because $\tau_{\max}M\le H$. [F5, step 3.1, step 7.1, algebra]

9.1 On each time cell, $P_h'=\overline p_h$. Scalar integration by parts against $\eta\in C_c^\infty(0,T)$ and cancellation of the node terms give the $Q$-valued identity $\int_0^T(p-\overline p_h)\eta\,dt=-\int_0^T(P-P_h)\eta'\,dt.$ Scalarization and [F5] justify the vector identity; its norm is at most $\|P-P_h\|_{L^\infty Q}\|\eta'\|_{L^1}$. Step 8.1 proves the stated negative-time-norm estimate. [F5, step 8.1, algebra] ∎

## Remarks

This is an additive pressure estimate under the existing initialization and smooth-solution hypotheses. Differentiating a small primitive does not give a small instantaneous $L^{4/3}_tQ$ pressure error. The original instantaneous pressure-rate clause remains a separate obligation. The proof uses uniform inf-sup after time integration and neither assumes nor derives uniform $H^1$ stability of the mass-orthogonal projector onto $Z_h$.
