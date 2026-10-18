---
id: thm-na-mini-navier-stokes-be-subsequential-limit
kind: theorem
title: "MINI backward Euler converges subsequentially to a solenoidal energy weak velocity"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps: [def-na-solenoidal-energy-weak-ns-velocity, def-na-evolutionary-incompressible-ns-weak-solution, def-na-mini-navier-stokes-backward-euler-scheme, lem-na-evolutionary-skew-convective-form-bound, thm-na-mini-be-step-existence-energy, lem-na-mini-fortin-l2-approximation, lem-na-mini-weak-solenoidal-compactness, lem-na-solenoidal-scalar-equations-give-weak-continuity, lem-na-scott-zhang-boundary-preserving-p1-interpolant, def-na-mini-element-p1-bubble-p1-spaces, def-na-discrete-weak-and-exact-divergence-free-spaces, thm-na-mini-element-fortin-stability, thm-na-discrete-helmholtz-projection-and-pressure-schur, lem-na-zero-mean-of-zero-boundary-divergence, thm-pe12-discrete-aubin-lions-compactness, lem-pe12-bochner-lp-mollification, lem-pe12-space-time-gradient-weak-compactness, cor-sobolev-inequality-for-w-one-p-zero, thm-holder-inequality-for-integrals, thm-reflexivity-of-lp-for-one-less-p-less-infinity, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, lem-weak-lower-semicontinuity-of-the-sobolev-norm, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, thm-orthogonal-decomposition-by-a-closed-subspace, def-separable-space, def-axiom-of-choice]
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
      locator: "§§3.1–3.2, Example 3.6(iii), and §4, Theorem 4.1: MINI spaces and fully discrete weak convergence; their auxiliary stress regularization is not used here."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§§1–3, pp. 3–31: weak equation, semidiscrete/full discretization, and backward Euler."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be nonempty, bounded, connected, Lipschitz and polyhedral, and let $0<T<\infty$. Let $\{\mathcal T_j\}$ be matching shape-regular affine simplicial meshes with $h_j\to0$, and let the time partitions of $[0,T]$ have maximum step tending to zero, with no relation required between the two limits. Let $f\in L^2(0,T;L^2(D)^d)$ and $u_0\in H_\sigma$. On each mesh take $u_j^0=P_{Z_j}u_0$, the $L^2$-orthogonal projection onto the weak MINI kernel, and choose any backward Euler MINI solution from [[thm-na-mini-be-step-existence-energy]]. Then a subsequence of piecewise-constant velocities converges strongly in $L^2(0,T;L^2(D)^d)$ and weakly in $L^2(0,T;H^1_0(D)^d)$ to a velocity $u$ satisfying the solenoidal weak momentum equation, initial trace and energy inequality in [[def-na-solenoidal-energy-weak-ns-velocity]]. This theorem supplies the velocity limit and its energy inequality. It does not assert the pressure regularity and pressure-bearing formulation required by the PE06 plan; the remaining pressure obligation is explicitly escalated on the A page.

## Facts & Assumptions

**Given:** The Axiom of Choice, the domain and viscosity hypotheses, the shape-regular mesh/time families, $f\in L^2(0,T;L^2)$, and $u_0\in H_\sigma$.

[A1] The Axiom of Choice is used for subsequence extraction in the PE12 discrete Aubin–Lions input. ([[def-axiom-of-choice]], [[thm-pe12-discrete-aubin-lions-compactness]])

[F1] Each finite mixed backward Euler problem has a solution and the uniform energy bound in [[thm-na-mini-be-step-existence-energy]].

[F2] The local coefficient-probe compactness lemma applies to weak MINI kernels, shape-regular meshes, and vanishing maximum time steps. ([[lem-na-mini-weak-solenoidal-compactness]])

[F3] The MINI Fortin map for the P1-bubble/P1 pair in [[def-na-mini-element-p1-bubble-p1-spaces]] and the weak kernel in [[def-na-discrete-weak-and-exact-divergence-free-spaces]] preserves the divergence pairing, maps $V_\sigma$ into $Z_j$, is uniformly $H^1_0$-stable, and converges to the identity in $H^1_0$ for each fixed input. ([[thm-na-mini-element-fortin-stability]], [[lem-na-mini-fortin-l2-approximation]])

[F4] For the weak MINI kernel $Z_j$ defined from the P1-bubble/P1 pair and weak divergence constraint in [[def-na-mini-element-p1-bubble-p1-spaces]] and [[def-na-discrete-weak-and-exact-divergence-free-spaces]], the discrete L2-orthogonal projector exists; its best-approximation property is used only to initialize the scheme. ([[thm-na-discrete-helmholtz-projection-and-pressure-schur]])

[F5] $H^1_0(D)\hookrightarrow L^6(D)$ in $d=3$; the same $L^6$ bound in $d=2$ follows from the $p=3/2$ zero-boundary Sobolev inequality and Holder. ([[cor-sobolev-inequality-for-w-one-p-zero]], [[thm-holder-inequality-for-integrals]])

[F6] Every zero-boundary velocity has zero integral divergence. ([[lem-na-zero-mean-of-zero-boundary-divergence]])

[F7] Cell averages of a Bochner $L^2$ function converge strongly in $L^2$ as the maximum cell length tends to zero. ([[lem-pe12-bochner-lp-mollification]])

[F9] For a sequence bounded in $L^2(0,T;H^1_0(D))$ and strongly convergent in $L^2(0,T;L^2(D))$, the PE12 weak-compactness lemma gives a subsequence weakly convergent in the Bochner Sobolev space and weak convergence of its gradients; apply it successively to the finitely many vector components. The Sobolev norm is weakly lower semicontinuous. ([[lem-pe12-space-time-gradient-weak-compactness]], [[lem-weak-lower-semicontinuity-of-the-sobolev-norm]])

[F10] Strong $L^2(0,T;L^2)$ convergence yields a subsequence converging in $L^2(D)^d$ for almost every time. ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]], [[def-axiom-of-choice]])

[F11] The skew trilinear form is continuous on $V^3$ and has the energy-class $L^{4/3}(0,T;V^*)$ bound used for coefficient differences. ([[lem-na-evolutionary-skew-convective-form-bound]])

[F12] $H_\sigma$ is defined as the $L^2$-closure of $V_\sigma$. ([[def-na-evolutionary-incompressible-ns-weak-solution]])

[F13] The discrete mixed equation on the MINI spaces has the mass, viscosity, skew-convection, pressure and interval-average forcing terms in [[def-na-mini-navier-stokes-backward-euler-scheme]], with its spaces supplied by [[def-na-mini-element-p1-bubble-p1-spaces]] and [[def-na-discrete-weak-and-exact-divergence-free-spaces]].

[F14] $L^2(D)^d$ is a separable real Hilbert space: extend scalar classes by zero to $\mathbb R^d$, restrict the countable dense rational-box step family there, and take finite products; the integral pairing gives its Hilbert structure. A closed subspace of a Hilbert space is Hilbert. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]], [[def-separable-space]], [[thm-orthogonal-decomposition-by-a-closed-subspace]])

[F15] For a separable real Hilbert space $H$, dense subspace $X$, and scalar weak equations with integrable derivatives and a common essential bound, the corresponding $L^2(0,T;H)$ function has a unique weakly continuous representative with the prescribed initial value. ([[lem-na-solenoidal-scalar-equations-give-weak-continuity]])

## Proof

1.1 Since $u_0\in H_\sigma=\overline{V_\sigma}^{L^2}$, for any $\epsilon>0$ choose $v\in V_\sigma$ with $\|u_0-v\|_2<\epsilon$. By [F3], $\Pi_jv\in Z_j$ and $\|\Pi_jv-v\|_2\to0$. The best-approximation property [F4] gives $\|P_{Z_j}u_0-u_0\|_2\le\|\Pi_jv-u_0\|_2\le\|\Pi_jv-v\|_2+\epsilon$. Letting $j\to\infty$ and then $\epsilon\downarrow0$ proves strong convergence of the discrete initial data. [A1, F3, F4, given, choose]

1.2 Apply [F1] to every mesh and partition. The energy inequality gives uniform bounds for $\max_n\|u_j^n\|_2$ and $\|\overline u_j\|_{L^2V}$; it also gives $\|\overline u_j\|_{L^\infty H}\le M$. [F1, given]

1.3 Fix a finite orthonormal family $e_1,\ldots,e_m\in V_\sigma$. For each mesh, $\Pi_je_i\in Z_j$ by [F3], so testing the discrete equation [F13] with $\Pi_je_i$ removes pressure. The backward difference of $a_{j,i}^n=(u_j^n,\Pi_je_i)_2$ is therefore bounded by $|(D_\tau a_{j,i}^n)|\le C_{e_i}\big(\|f_j^n\|_2+\nu\|u_j^n\|_V+\|u_j^n\|_2^{1/2}\|u_j^n\|_V^{3/2}\big).$ The first two terms are bounded in $L^2(0,T)$ by [F1], and the last in $L^{4/3}(0,T)$ by [F11], because its $4/3$ power is at most $M^{2/3}C\|u_j^n\|_V^2$. Thus the coefficient condition of [F2] holds for every finite family. [F1, F2, F3, F5, F11, F13, given, algebra]

1.4 By [F2], after a subsequence $\overline u_j\to u$ strongly in $L^2(0,T;L^2)$. The energy bounds [F1] and [F9] give, after a further subsequence, $\overline u_j\rightharpoonup u$ in $L^2(0,T;V)$. Apply [F10] to the scalar functions $t\mapsto\|\overline u_j(t)-u(t)\|_2$ to obtain almost-everywhere-in-time strong convergence along a further subsequence. The uniform $L^\infty H$ bound then implies $u\in L^\infty(0,T;H)$. [A1, F1, F2, F9, F10]

2.1 For any $q\in C_c^\infty(D)$, apply the face-average interpolant to $q-|D|^{-1}\int_Dq$ and subtract the mean of its interpolant to obtain $q_j\in Q_j$ converging in $L^2$, using the approximation estimate in [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]]. Since $b(u_j^n,q_j)=0$, [F6] gives $\int_Dq\,\operatorname{div}u_j^n=0$ for the $q_j$ part and $\int_D\operatorname{div}u_j^n=0$ for the mean part. The $L^2$ approximation error times the uniformly bounded $L^2(0,T;V)$ divergence norm tends to zero by Holder. Passing to the weak gradient limit proves $\operatorname{div}u=0$ a.e.; hence $u\in L^2(0,T;V_\sigma)$. [F1, F6, step 1.4, F5]

2.2 Let $v\in V_\sigma$ and $\eta\in C^1([0,T])$ vanish near $T$. Test each time step [F13] by $\Pi_jv\in Z_j$, multiply by the left-endpoint value $\eta(t_{n-1}^j)$, and sum. Discrete summation by parts gives $-(u_j^0,\Pi_jv)_2\eta(0)-\sum_{n=1}^{N_j-1}(u_j^n,\Pi_jv)_2(\eta(t_n^j)-\eta(t_{n-1}^j))$; the terminal term is zero for all fine partitions because $\eta$ vanishes near $T$. The sum is exactly the integral of $-\overline u_j\cdot\Pi_jv\,\eta'$ on the nonterminal cells, so the time contribution converges to $-(u_0,v)_2\eta(0)-\int_0^T(u,v)_2\eta'$. Moving its initial term to the right side gives the required positive initial trace. Uniform convergence of the left-endpoint step approximation to $\eta$, [F3], and step 1.1 justify these limits. The viscosity term converges by weak $L^2V$ convergence and $\Pi_jv\to v$ in $V$; the force averages converge by [F7] and the same uniform time-test approximation. [F1, F3, F7, F13, step 1.1, step 1.4, algebra]

2.3 For almost every $t$, choose the first time node $t_j(t)\ge t$ and sum the work-form energy inequality of [F1] through that node. Then $\overline u_j(t)=u_j^{n_j(t)}$, so step 1.4 gives the required strong convergence of the kinetic-energy term for almost every $t$. By [F7], $f_j\to f$ in $L^2H$ and $\overline u_j\to u$ in $L^2H$, so their work integrals converge on $[0,t]$. The overshoot interval $[t,t_j(t)]$ contributes at most $\|f_j\|_{L^2H}M\sqrt{\tau_{\max}^j}$ by Cauchy--Schwarz and the uniform $L^\infty H$ bound, hence tends to zero. The gradient sum through $t_j(t)$ is bounded below by its integral through $t$; weak $L^2V$ convergence and [F9] give lower semicontinuity on $[0,t]$. The initial projections converge by step 1.1. This proves the energy inequality for almost every $t$. [A1, F1, F7, F9, step 1.1, step 1.2, step 1.4, algebra]

3.1 The test interpolation error in convection vanishes: continuity from [F11] bounds its integral by $C\|\Pi_jv-v\|_V\|\overline u_j\|_{L^2V}^2\|\eta\|_\infty$. The uniform left-endpoint test approximation from step 2.2 permits replacing the discrete weights by $\eta$. For fixed $v\in V_\sigma$, strong $L^2L^2$ convergence and the uniform $L^2L^6$ bound imply strong $L^2L^3$ and strong $L^2L^4$ convergence of velocities by Holder interpolation. In the skew formula, $u_j\otimes v$ then converges strongly in $L^2L^2$ while $\nabla u_j$ converges weakly in $L^2L^2$; $u_j\otimes u_j$ converges strongly in $L^1L^2$. Thus the convective term passes to $c(u;u,v)$. This proves the limiting momentum equation for all solenoidal tests. [F2, F3, F5, F11, step 1.4, step 2.2]

4.1 By [F14], $L^2(D)^d$ is separable, so balls with centers in a countable dense set and positive rational radii form a countable base. The space $H_\sigma=\overline{V_\sigma}^{L^2}$ from [F12] is a closed subspace and hence Hilbert by [F14]; intersecting that countable base with $H_\sigma$ gives a countable base there, and [A1] selects one point from each nonempty member to make a dense set. For every $v\in V_\sigma$, steps 2.2 and 3.1 give the scalar weak equation with $h_v(t)=(f(t),v)_{L^2}-a_\nu(u(t),v)-c(u(t);u(t),v)$. This function is integrable: its three terms lie in $L^2(0,T)$, $L^2(0,T)$, and $L^{4/3}(0,T)$ respectively by the data, energy bound [F1], and convection bound [F11]; finite $T$ embeds these spaces into $L^1$. The uniform $L^\infty H$ bound follows from step 1.4. Apply [F15] with $H=H_\sigma$ and $X=V_\sigma$ to obtain a unique weakly continuous representative with initial value $u_0$. Its energy inequality is already proved in step 2.3. [A1, F1, F11, F12, F14, F15, step 1.4, step 2.2, step 2.3, step 3.1]

5.1 Steps 1.4, 2.1–2.3, 3.1, and 4.1 give the strong and weak convergence, divergence constraint, solenoidal momentum equation, weakly continuous initial trace, and energy inequality required by [[def-na-solenoidal-energy-weak-ns-velocity]]. The stronger pressure-bearing PE06 claim is not inferred here and remains escalated as stated. [step 1.4, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎
