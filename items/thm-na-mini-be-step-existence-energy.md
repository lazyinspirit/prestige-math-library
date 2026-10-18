---
id: thm-na-mini-be-step-existence-energy
kind: theorem
title: "Backward Euler MINI step existence and discrete energy bound"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-na-mini-navier-stokes-backward-euler-scheme, lem-na-mini-be-scheme-is-well-defined, def-na-evolutionary-skew-convective-form, def-na-stokes-zero-mean-pressure-and-velocity-spaces, lem-na-evolutionary-skew-convective-form-bound, lem-pe12-outward-zero-brouwer, thm-na-mini-element-fortin-stability, def-na-discrete-weak-and-exact-divergence-free-spaces, lem-na-homogeneous-dirichlet-korn-identity, lem-parabolic-discrete-energy-identity, thm-poincare-inequality-for-w-one-p-zero, thm-holder-inequality-for-integrals, lem-bochner-integral-norm-inequality, thm-young-inequality-real-exponents, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§4, finite-dimensional outward-pointing existence and the energy test in the implicit step; the present unregularized Newtonian step is proved locally."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§3, pp. 24–31: backward Euler finite-dimensional mixed system."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice, the mini-element hypotheses of [[def-na-mini-navier-stokes-backward-euler-scheme]], $f\in L^2(0,T;L^2(D)^d)$, and an initial value $u_h^0\in Z_h$. On every finite positive time partition there is at least one mixed solution $(u_h^n,p_h^n)_{n=1}^N$ of the backward Euler scheme. Every such solution satisfies, for $0\le m\le N$, the work-form inequality
$$\frac12\|u_h^m\|_2^2+\frac12\sum_{n=1}^m\|u_h^n-u_h^{n-1}\|_2^2+\nu\sum_{n=1}^m\tau_n\|\nabla u_h^n\|_2^2\le\frac12\|u_h^0\|_2^2+\sum_{n=1}^m\tau_n(f_h^n,u_h^n)_{L^2}.$$
Consequently it satisfies the mesh-independent estimate
$$\frac12\|u_h^m\|_2^2+\frac12\sum_{n=1}^m\|u_h^n-u_h^{n-1}\|_2^2+\frac{\nu}{2}\sum_{n=1}^m\tau_n\|\nabla u_h^n\|_2^2\le\frac12\|u_h^0\|_2^2+\frac{C_P(D)^2}{2\nu}\|f\|_{L^2(0,T;L^2)}^2.$$
The constant is independent of mesh size and time-step sizes.

## Facts & Assumptions

**Given:** Countable Choice, the MINI spaces, $\nu>0$, a finite partition, $f\in L^2(0,T;L^2)$, and $u_h^0\in Z_h$.

[A1] Countable Choice is inherited from the MINI/Stokes stability supplier; no arbitrary-index choice is used inside a single finite partition. ([[def-countable-choice]], [[thm-na-mini-element-fortin-stability]])

[F1] The velocity mass form is real Hilbert; $a_\nu(z,z)=2\nu\|\varepsilon(z)\|_2^2\ge\nu\|\nabla z\|_2^2$ on $H^1_0$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-homogeneous-dirichlet-korn-identity]])

[F2] $c(z;z,z)=0$ for every $z\in V$, and $c$ is continuous on the finite-dimensional MINI space. ([[def-na-evolutionary-skew-convective-form]], [[lem-na-evolutionary-skew-convective-form-bound]])

[F3] A continuous finite-dimensional map with positive outward radial pairing on a sphere has a zero in the ball. ([[lem-pe12-outward-zero-brouwer]])

[F4] The stable MINI pair has a positive discrete inf-sup constant, so the pressure map is injective and the velocity constraint map is onto. ([[thm-na-mini-element-fortin-stability]], [[def-na-discrete-weak-and-exact-divergence-free-spaces]])

[F5] The identity $2(x-y,x)=\|x\|^2-\|y\|^2+\|x-y\|^2$ holds in $L^2$, and Poincare gives $\|z\|_2\le C_P(D)\|\nabla z\|_2$. ([[lem-parabolic-discrete-energy-identity]], [[thm-poincare-inequality-for-w-one-p-zero]])

[F6] Holder and Young absorb $\|f_h^n\|_2\|u_h^n\|_2$ into $\nu\|\nabla u_h^n\|_2^2/2$ with remainder $C_P(D)^2\|f_h^n\|_2^2/(2\nu)$. ([[thm-holder-inequality-for-integrals]], [[thm-young-inequality-real-exponents]])

[F7] The norm of a Bochner integral is at most the integral of the norm. ([[lem-bochner-integral-norm-inequality]])

## Proof

1.1 Fix a time cell and the previous value $u_h^{n-1}\in Z_h$. On $Z_h$, define $F_n(z)\in Z_h^*$ by $\langle F_n(z),w_h\rangle=\tau_n^{-1}(z-u_h^{n-1},w_h)_{L^2}+a_\nu(z,w_h)+c(z;z,w_h)-(f_h^n,w_h)_{L^2}.$ The map is continuous by [F2] and finite dimensionality. If $Z_h=\{0\}$ its only velocity is zero; otherwise represent $F_n$ in coordinates of a gradient-orthonormal basis of $Z_h$. [A1, F2, given, construct]

2.1 By [F1]–[F2], $\langle F_n(z),z\rangle\ge\nu\|\nabla z\|_2^2-C_P(D)\big(\tau_n^{-1}\|u_h^{n-1}\|_2+\|f_h^n\|_2\big)\|\nabla z\|_2.$ Choose $R$ so the right side is strictly positive whenever $\|\nabla z\|_2=R$. The outward-zero result [F3] supplies $u_h^n\in Z_h$ with $F_n(u_h^n)=0$. [F1, F2, F3, given, step 1.1, algebra]

3.1 Let $G_n(v_h)$ be the velocity residual (time term plus viscosity and convection minus forcing). Step 2.1 gives $G_n=0$ on $Z_h=\ker\mathcal B$, where $\mathcal Bv_h(q_h)=b(v_h,q_h)$. Since [F4] makes $\mathcal B$ onto $Q_h^*$, $\mathcal B^*$ is injective and its range is contained in $(\ker\mathcal B)^\circ$. Rank-nullity gives both spaces dimension $\dim Q_h$, so they are equal. Thus $-G_n=\mathcal B^*p_h^n$ for a unique $p_h^n\in Q_h$, which gives the stated mixed equation with the correct residual sign. Repeating the finite step for $n=1,\ldots,N$ gives a mixed solution. [F4, step 2.1, algebra]

4.1 Test the mixed equation with $u_h^n$. Its pressure term is zero since $u_h^n\in Z_h$, and its convective term is zero by [F2]. Apply [F5] to the time term and [F1] to the viscosity term, obtaining $\frac12(\|u_h^n\|_2^2-\|u_h^{n-1}\|_2^2+\|u_h^n-u_h^{n-1}\|_2^2)+\nu\tau_n\|\nabla u_h^n\|_2^2\le\tau_n(f_h^n,u_h^n)_{L^2}.$ The right side is retained with its sign; it follows directly from the tested equation, skew cancellation, and the lower Korn bound. [F1, F2, F5, given, step 3.1]

5.1 Before applying Young, retain the actual work term in step 4.1 and sum over $n=1,\ldots,m$; telescoping gives the first displayed inequality. For the coarser estimate, Cauchy–Schwarz, Poincare and Young give $\tau_n(f_h^n,u_h^n)\le\frac{\nu}{2}\tau_n\|\nabla u_h^n\|_2^2+\frac{C_P(D)^2}{2\nu}\tau_n\|f_h^n\|_2^2.$ For each interval, [F7] and Holder [F6] give $\tau_n\|f_h^n\|_2^2=\tau_n^{-1}\left\|\int_{t_{n-1}}^{t_n}f(t)\,dt\right\|_2^2\le\tau_n^{-1}\left(\int_{t_{n-1}}^{t_n}\|f(t)\|_2\,dt\right)^2\le\int_{t_{n-1}}^{t_n}\|f(t)\|_2^2\,dt.$ Summing proves $\sum_n\tau_n\|f_h^n\|_2^2\le\|f\|_{L^2L^2}^2$. Substitution into the work-form inequality proves the second displayed estimate. [F5, F6, F7, step 4.1, algebra] ∎
