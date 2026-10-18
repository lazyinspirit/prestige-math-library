---
id: cex-na-polyhedral-energy-ns-pressure-endpoint
kind: counterexample
title: "An energy Navier–Stokes velocity on the square without endpoint-integrable pressure"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 11
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, lem-na-halfline-heat-logarithmic-mass-loss, lem-na-shrinking-boundary-stream-corrector, def-na-solenoidal-energy-weak-ns-velocity, def-na-evolutionary-incompressible-ns-weak-solution, def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-evolutionary-skew-convective-form, lem-na-zero-mean-of-zero-boundary-divergence, thm-na-bounded-lipschitz-domain-divergence-right-inverse, thm-na-mini-navier-stokes-be-subsequential-limit, lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness, thm-holder-inequality-for-integrals, thm-dominated-convergence]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Heat-kernel background only; the exact square counterexample is derived locally."
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids"
      url: https://arxiv.org/pdf/1804.02264
      locator: "Definition 2.1 and following pressure-free discussion are context, not a source asserting this counterexample."
---

## Statement refuted

Assume the Axiom of Choice. For every bounded connected Lipschitz polyhedral $D\subset\mathbb R^d$, $d\in\{2,3\}$, constant $\nu>0$, finite $T>0$, $f\in L^2(0,T;L^2(D)^d)$ and $u_0\in H_\sigma$, the solenoidal energy weak velocity obtained as a MINI backward-Euler subsequential limit admits a mean-zero pressure in $L^{4/3}(0,T;L^2_0(D))$.

For every $\nu>0$, there exist $T>0$, $D=(0,1)^2$, $u_0\in H_\sigma$ and $f\in L^2(0,T;L^2(D)^2)$ with a unique solenoidal energy weak velocity $u$. This $u$ is smooth for positive time, has zero boundary trace, and satisfies the energy equality. Its unique mean-zero distributional pressure is an $L^1(0,T;L^2_0(D))$ function $p$ with $p\notin L^{4/3}(0,T;L^2_0(D))$. Thus $u$ does not satisfy the regular-pressure requirement in [[def-na-evolutionary-incompressible-ns-weak-solution]]. Every MINI subsequential energy limit for these data equals $u$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a viscosity $\nu>0$, the square $D$, and the following explicit choices and conventions. Write $\operatorname{rot}\psi=(\psi_y,-\psi_x)$. Choose nonzero $a\in C_c^\infty((1/3,2/3))$, $1/2<\alpha\le3/4$, and the functions $w_0,w,h,M_0,m$ of [[lem-na-halfline-heat-logarithmic-mass-loss]]. Choose smooth $\kappa,\chi$ equal to $1$ on $[0,1/8]$ and $0$ on $[1/4,1]$. All time bounds below are on a sufficiently small $T>0$.

[A1] The Axiom of Choice supplies the choice hypotheses of the integration, Hilbert-space and evolution interfaces. ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]])

[F1] The halfline construction supplies $w_t=\nu w_{yy}$, $h_y=w$, $h_t=\nu h_{yy}$, $h(t,0)=-M_0-m(t)$, $w(t,0)=0$, $\sup_t\|w\|_{L^1\cap L^2}<\infty$, $w_y\in L^2_{t,y}$, $w\in L^4_{t,y}$, strong initial $L^2$ convergence, local uniform initial convergence of $h$, and the logarithmic estimates on $m,m'$. ([[lem-na-halfline-heat-logarithmic-mass-loss]])

[F2] On the square the explicit $R_{\sqrt t}$ correction for a smooth boundary-zero $b$ has the trace cancellation, spatial estimates, time estimates and interior tangential derivative estimate stated in [[lem-na-shrinking-boundary-stream-corrector]].

[F3] The solenoidal class uses $V_\sigma=\{v\in H^1_0(D)^2:\operatorname{div}v=0\}$, $H_\sigma=\overline{V_\sigma}^{L^2}$ and $Q=L^2_0(D)$. The skew convection agrees with $(u\cdot\nabla)u$ for a divergence-free zero-boundary velocity. The weak Newtonian viscous term agrees with $\nu(\nabla u,\nabla v)$ for such a velocity, by integration by parts and $\operatorname{div}u=0$. ([[def-na-solenoidal-energy-weak-ns-velocity]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[def-na-evolutionary-skew-convective-form]], [[lem-na-zero-mean-of-zero-boundary-divergence]])

[F4] The bounded divergence right inverse recovers a unique mean-zero $L^2$ pressure from its full-test divergence pairing. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]])

[F5] The MINI convergence theorem supplies solenoidal energy weak subsequential velocities for the stated data. ([[thm-na-mini-navier-stokes-be-subsequential-limit]])

[F6] Holder and dominated convergence are available. ([[thm-holder-inequality-for-integrals]], [[thm-dominated-convergence]])

[F7] Two-dimensional solenoidal energy velocities with these data are unique, with the strong trace and restricted-derivative facts proved in [[lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness]].

## Counterexample

1.1 Put $a_n=2\int_0^1a(x)\sin(n\pi x)\,dx$ and define
$$\theta(x,y)=\sum_{n\ge1}a_n\sin(n\pi x)\frac{\sinh(n\pi(1-y))}{\sinh(n\pi)},\qquad \widetilde\phi(x,y)=\sum_{n\ge1}a_n\cos(n\pi x)\frac{\cosh(n\pi(1-y))}{\sinh(n\pi)}.$$
Repeated integration by parts makes $|a_n|\le C_Nn^{-N}$ for every $N$, since $a$ vanishes near the endpoints. The hyperbolic factors and their derivatives of order $k$ are bounded by $C_kn^k$ uniformly on $[0,1]$. Thus every differentiated series converges absolutely uniformly, and both functions are smooth on the closed square and harmonic. The sine series equals $a$ at $y=0$: indeed the odd, $2$-periodic smooth extension of $a$ has its Fourier series equal to itself. To verify this last assertion directly, its rapid coefficients define a uniformly convergent Fourier series with the same coefficients; their difference has all Fourier coefficients zero. Convolution with the Fejer kernels, which are nonnegative unit-mass kernels concentrating at zero by their formula $N^{-1}|\sum_{j=0}^{N-1}e^{ij\pi x}|^2$, converges uniformly to a continuous periodic function by uniform continuity; it vanishes for a function whose coefficients all vanish. Hence the difference is zero. The other boundary values of $\theta$ are zero. Direct differentiation gives $\widetilde\phi_x=\theta_y$ and $\widetilde\phi_y=-\theta_x$. Let $\phi=\widetilde\phi-\int_D\widetilde\phi$, so $\phi\in Q$, $\nabla\phi=\operatorname{rot}\theta$, and $\|\phi\|_2>0$ because $a\ne0$ makes $\theta$ nonconstant. [A1, given, construct, algebra]

1.2 Define $b=\theta-a\chi$. This is smooth and zero on all four sides. Its normal derivative equals $\partial_n\theta$ everywhere on the boundary: at the bottom $\chi'=0$, at the top $\chi=\chi'=0$, and near the vertical sides $a=a'=0$. Take the function $R(t)=R_{\sqrt t}$ from [F2] and choose $T$ small enough for that construction, with $\sqrt T<1/16$. Set
$$\psi_m=a(x)[\kappa(y)h(t,y)+M_0\chi(y)],\qquad \psi=\psi_m+m(t)\theta-m(t)bR(t),$$
$$u=\operatorname{rot}\psi,\qquad p=-m'(t)\phi,\qquad r=-m(t)\operatorname{rot}(bR(t)).$$
All these fields are smooth for $t>0$. On the bottom $\psi_m=-am$, $\theta=a$, and $b=0$; on the other sides $\psi_m=\theta=b=0$. Thus $\psi=0$ on the boundary. The normal derivative of $\psi_m$ is zero on every side: on the bottom it is, up to its sign, $a w(t,0)=0$, and on all other sides the fixed cutoffs or $a,a'$ vanish. Hence $\partial_n(\psi_m+m\theta)=m\partial_n b$, and [F2] makes $\partial_n\psi=0$. Thus $u(t)\in V_\sigma$ exactly, with no-slip on every edge including compatible corner values. [F1, F2, step 1.1, construct, algebra]

2.1 Write $L(t)=\log(1/t)$. By [F1] and [F2],
$$\|r\|_\infty\le C|m|,\quad \|r\|_2\le C|m|t^{1/4},\quad \|\nabla r\|_2\le C|m|t^{-1/4},$$
$$\|r_t\|_2+\|\Delta r\|_2\le C(|m'|t^{1/4}+|m|t^{-3/4})\le Ct^{-1/2}L(t)^{-\alpha}.$$
The last function is square integrable near zero because $2\alpha>1$. In particular $r\in L^\infty_tL^2_x\cap L^2_tH^1_x$ and $r(t)\to0$ strongly in $L^2$. The main stream rotation has a uniform $L^2$ bound from bounded $h$ and bounded $\|w\|_2$. Its gradient uses only bounded $h$, $w$ with fixed coefficients and $w_y$ with fixed coefficients, so the heat energy bound makes it $L^2_{t,x}$. The smooth field $m\operatorname{rot}\theta$ has the same required bounds. We obtain
$$u\in L^\infty(0,T;L^2(D)^2)\cap L^2(0,T;V_\sigma).$$
[F1, F2, step 1.2, algebra]

2.2 The outer harmonic field cancels the entire rough gradient: $(\partial_t-\nu\Delta)(m\operatorname{rot}\theta)+\nabla p=m'\nabla\phi-m'\nabla\phi=0$. The main stream has the explicit residual
$$(\partial_t-\nu\Delta)\psi_m=-\nu[a''\kappa h+2a\kappa'w+a\kappa''h]-\nu M_0[a''\chi+a\chi''].$$
Its rotation contains only fixed coefficients times $h,w$, except for terms with $\kappa'w_y$. The latter are supported in $y\ge1/8$, a fixed positive distance from $\operatorname{supp}w_0\subset[0,1/16]$, and are square integrable by the off-support Gaussian bound in [F1]. All other terms are uniformly $L^2$ bounded. Together with step 2.1 this proves
$$F_L=(\partial_t-\nu\Delta)u+\nabla p\in L^2(0,T;L^2(D)^2).$$
[F1, step 1.1, step 1.2, step 2.1, algebra]

3.1 The normal component $u_2$ is uniformly bounded in space and time: $-\partial_x\psi_m$ uses only bounded $h$ and fixed functions, the harmonic term has bounded amplitude $m$, and $r$ is uniformly bounded. Thus $u_2\partial_yu\in L^2_{t,x}$ by step 2.1. The only unbounded part of $u_1$ is $a\kappa w$. Choose $J\Subset(0,1)$ containing $\operatorname{supp}a$ and decrease $T$ so the last estimate in [F2] applies there. On $J\times(0,1)$, $\partial_xr$ is uniformly bounded; the main and harmonic terms satisfy $|\partial_xu|\le C(1+|w|)$, so $|u_1\partial_xu|\le C(1+|w|^2)$. This belongs to $L^2_{t,x}$ by $w\in L^4_{t,y}$. Outside $J$, the coefficient $a$ vanishes and $u_1$ is bounded, so $u_1\partial_xu\in L^2_{t,x}$ there by the energy-gradient bound. Hence $N(u)=(u\cdot\nabla)u\in L^2_{t,x}$. Define $f=F_L+N(u)$. It belongs to $L^2_tL^2_x$, and the pointwise positive-time equation is $u_t-\nu\Delta u+N(u)+\nabla p=f$. [F1, F2, step 2.1, step 2.2, construct, algebra]

4.1 Let $h_0(y)=-\int_y^\infty w_0(z)\,dz$, $\psi_0=a[\kappa h_0+M_0\chi]$, and $u_0=\operatorname{rot}\psi_0$. Strong $L^2$ convergence of $w$, uniform convergence of $h$ on $[0,1]$, $m(t)\to0$ and step 2.1 give $u(t)\to u_0$ strongly in $L^2$. The stream $\psi_0$ is $H^1$, supported away from the other three sides, and vanishes on the bottom because $h_0(0)=-M_0$. Here is a direct approximation proving $\psi_0\in H^1_0$, without relying on an unstated trace theorem. Near the bottom it equals $a(x)\int_0^yw_0(z)\,dz$. If a cutoff removes $0<y<\varepsilon$, the derivative-of-cutoff error is bounded in squared $L^2$ by
$$C\varepsilon^{-2}\int_0^{2\varepsilon}\left|\int_0^yw_0(z)\,dz\right|^2dy\le C\int_0^{2\varepsilon}|w_0(z)|^2\,dz\longrightarrow0.$$
The inequality follows from $|\int_0^y w_0|^2\le y\int_0^y|w_0|^2$ and integrating $y\le2\varepsilon$. The other errors tend to zero by absolute continuity of the integrals of $|\psi_0|^2+|\nabla\psi_0|^2$. The cut-off streams are smooth and compactly supported inside $D$, since $w_0$ is smooth away from zero. Their rotations belong to $V_\sigma$ and converge to $u_0$ in $L^2$, proving $u_0\in H_\sigma$ by its actual closure definition. [F1, F3, F6, step 1.2, step 2.1, construct, algebra]

4.2 On $[\varepsilon,T]$, integrate the smooth equation from step 3.1 against $u$. The convection and pressure integrals vanish by divergence and no slip. Thus
$$\tfrac12\|u(t)\|_2^2+\nu\int_\varepsilon^t\|\nabla u\|_2^2=\tfrac12\|u(\varepsilon)\|_2^2+\int_\varepsilon^t(f,u).$$
Let $\varepsilon\downarrow0$: strong initial convergence handles the endpoint and the energy and force bounds handle both integrals. This gives energy equality with initial value $u_0$. Similarly integrate the positive-time equation against a fixed solenoidal $V$ test and a smooth scalar time test, integrate by parts in time, and send $\varepsilon\downarrow0$. The pressure term vanishes; all remaining integrals converge by the established bounds. The resulting identity is precisely the solenoidal weak equation with initial value $u_0$. Positive-time smoothness and strong initial convergence give the required weak continuity on $[0,T]$. Thus $u$ is a solenoidal energy weak velocity of [F3]. [F3, F6, step 2.1, step 3.1, step 4.1, algebra]

5.1 The pressure has zero spatial mean and is in $L^1_tQ$, since $m'\in L^1$ and $\phi\in Q$. It defines a time-distribution pressure for the full momentum equation: test the pointwise equation on compact positive-time intervals; its time-distribution identity on $(0,T)$ follows directly. Also $\|p(t)\|_2=|m'(t)|\|\phi\|_2$, so [F1] and $\|\phi\|_2>0$ imply $p\notin L^{4/3}_tQ$. If a second mean-zero $Q$-valued pressure distribution $q$ represented this same velocity and force, subtract their momentum equations. For each scalar time test $\zeta$, the $Q$ element $\langle q-p,\zeta\rangle$ has zero divergence pairing with every $V$ test. Pair with the bounded divergence right inverse of that very element, using [F4], to show its squared norm is zero. Thus $q=p$ as $Q$-valued distributions. In particular, if $q\in L^{4/3}_tQ$, both are $L^1_tQ$ functions and equality of their distributions gives equality almost everywhere (test against a countable dense set in $Q$ and scalar tests), contradicting the nonintegrability just proved. Consequently this velocity does not meet the regular-pressure definition named in the Counterexample. [F1, F4, step 1.1, step 3.1, algebra]

6.1 By [[lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness]], the constructed solenoidal energy velocity is the unique one for these two-dimensional square data. Every actual MINI subsequential limit supplied by [F5] is a solenoidal energy weak velocity with these same data, hence equals $u$. Steps 1.1–5.1 give all concrete properties and show that no mean-zero endpoint-integrable pressure exists for that limit. This refutes the universal regular-pressure assertion. [F5, step 4.2, step 5.1, F7, algebra] ∎

## Remarks

The pressure primitive is $-m(t)\phi$, bounded and initially zero. Thus this example is compatible with bounded pressure-primitive recovery and distributional pressure convergence. It does not address the separate smooth-data instantaneous MINI pressure-error estimate: its velocity has an initial boundary singularity and does not satisfy those smooth-branch hypotheses. This counterexample is not a logical supplier for any theorem or lemma.
