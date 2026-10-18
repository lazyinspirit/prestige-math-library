---
id: thm-na-first-order-hjb-scheme-convergence
kind: theorem
title: Convergence of the positive-interpolation and upwind first-order HJB schemes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-positive-interpolation-semilagrangian-hjb-step, alg-na-upwind-hjb-grid-step, lem-na-multilinear-interpolation-positive-and-second-order-accurate, thm-na-positive-interpolation-hjb-step-monotone-stable-consistent, thm-na-upwind-hjb-grid-step-monotone-stable-consistent, lem-na-first-order-hjb-discrete-initial-trace, lem-na-grid-contact-localization-for-half-relaxed-limits, lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity, def-na-first-order-hjb-cauchy-problem, def-half-relaxed-limits, def-viscosity-subsolution-and-supersolution, def-countable-choice, thm-comparison-for-first-order-hamilton-jacobi-equations, thm-heine-borel-rn, thm-heine-cantor-metric]
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
axiom_base: Countable Choice is used only by the declared half-relaxed-limit recovery and mesh-contact localization suppliers; the finite update maps require no choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 3 §4, Theorem 3.15 and the grid-maximum proof for monotone consistent schemes, printed pp. 100–103."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2, assumptions (2.2)–(2.5), Theorem 2.1 and proof, printed pp. 274–276."
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§§2–4, positive interpolation and first-order semi-Lagrangian HJB update, printed pp. 2–5."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $u_0$ and the coefficients satisfy
[[def-na-first-order-hjb-cauchy-problem]]. Consider a sequence of periodic
grids with $h_{k,\max}\to0$, time steps $\tau_k=T/M_k\to0$, $M_k\in\mathbb N$,
and finite nonempty control sets $A_k\subseteq A$ whose Hamiltonian errors
$\eta_k(R)$ tend to zero for each finite $R$. For the positive-interpolation
scheme additionally assume $h_{k,\max}^2/\tau_k\to0$. For the upwind scheme
assume its CFL condition at every step. Extend the initial interpolant
constantly for $-1<t<0$ and identify the mesh sequence with the parameter
family $V_\epsilon=V_k$ for $(k+1)^{-1}<\epsilon\le k^{-1}$ in
[[def-half-relaxed-limits]]. Then the respective piecewise
multilinear-in-space, piecewise-constant-in-time extensions of the nodal
solutions converge locally uniformly on $\mathbb T^d\times[0,T)$ to the same
bounded continuous viscosity solution of the Cauchy problem. This conclusion
includes exact finite-control models ($A_k=A$), where $\eta_k=0$. The proof
does not assert a rate.

## Facts & Assumptions

**Given:** One of the two scheme families and mesh conditions in the
statement. Let $V_k$ denote its spatially multilinear and temporally
piecewise-constant periodic extension on $\mathbb R^d\times(-1,T)$,
initialized as in the statement for $-1<t<0$.

[F1] Each update is order-preserving and commutes with adding a constant to
all nodal values; it is bounded by the preceding sup norm plus $\tau_k L$.
Its smooth-test residual is $\phi_t+H+o(1)$, uniformly on compact test sets,
with the respective conditions $h_{k,\max}^2/\tau_k\to0$ or CFL and with
$\eta_k(P)\to0$
([[thm-na-positive-interpolation-hjb-step-monotone-stable-consistent]],
[[thm-na-upwind-hjb-grid-step-monotone-stable-consistent]]).

[F2] For any locally bounded family, the set-defined upper and lower
half-relaxed limits are respectively upper and lower semicontinuous, satisfy
$\underline V\le\overline V$, and have sequential recovery pairs under
Countable Choice ([[def-half-relaxed-limits]], [[def-countable-choice]]).

[F3] A strict upper (respectively lower) half-relaxed contact by a smooth test
localizes to nodal local maxima (respectively minima) on a fixed space-time
ball; the localizing nodes converge to the contact and their values recover
the envelope ([[lem-na-grid-contact-localization-for-half-relaxed-limits]]).

[F4] Testing a subsolution or supersolution with smooth tests is equivalent
to testing with all $C^1$ tests for this first-order equation
([[lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity]]).

[F5] The periodic HJB Hamiltonian obeys
$$|H(x,t,p)-H(y,s,p)|\le L(1+|p|)(|x-y|+|t-s|),\qquad |H(x,t,p)-H(x,t,q)|\le B|p-q|,$$
so with $C=\max\{1,L,B\}$ it satisfies the positive-constant whole-space
comparison bounds and comparison applies to bounded USC
subsolutions and bounded LSC supersolutions on the periodic lift when their
initial traces are ordered ([[def-na-first-order-hjb-cauchy-problem]],
[[thm-comparison-for-first-order-hamilton-jacobi-equations]]).

[F6] For the semi-Lagrangian branch the nodal values approach $u_0$ uniformly
as $t_n\to0$ under $h_{k,\max}^2/\tau_k\to0$; for the upwind branch the same
holds under its CFL condition ([[lem-na-first-order-hjb-discrete-initial-trace]]).

[F7] The convex interpolation weights give
$|I_{h_k}u_0(x)-u_0(x)|\le\omega_0(\sqrt d\,h_{k,\max})$ for a modulus
$\omega_0(\delta)\to0$, by uniform continuity of the periodic initial data
([[lem-na-multilinear-interpolation-positive-and-second-order-accurate]],
[[thm-heine-cantor-metric]]).

[F8] Every open cover of a compact subset of the lifted space-time domain has
a finite subcover ([[thm-heine-borel-rn]]).

[A1] Countable Choice is used in [F2] and [F3] only to select near-recovery
pairs and contradiction subsequences; no choice is used in any finite row
calculation ([[def-countable-choice]]).

## Proof

1.1 By the stability part of [F1] and $M_k\tau_k=T$, all nodal values satisfy $$\|U_k^n\|_\infty\le\|u_0\|_\infty+Lt_n \le\|u_0\|_\infty+LT.$$ The convex interpolation weights give the same bound for $V_k$, so the family is locally bounded on $\mathbb T^d\times[0,T)$. Form its upper and lower half-relaxed limits $\overline V,\underline V$ as in [F2]. [F1, F2, given, algebra]

2.1 Let $\overline V-\phi$ have a local maximum at an interior point $(x_0,t_0)$, with $\phi$ smooth. Add $\varepsilon(|x-x_0|^4+|t-t_0|^4)$ to $\phi$; this makes the contact strict without changing its first derivatives at $(x_0,t_0)$, as in [F4]. Choose the nodal local maxima $(x_k,t_k)$ in [F3], with $(x_k,t_k)\to(x_0,t_0)$; write $c_k=U_{i_k}^{n_k}- \phi(x_k,t_k)$. For all sufficiently large $k$, every node used by the previous-time update at $(x_k,t_k)$ lies inside the fixed contact ball: the upwind neighbors are at distance at most $h_{k,\max}$ and each semi-Lagrangian interpolation vertex is at distance at most $\tau_kB+\sqrt d\,h_{k,\max}$. Hence each such previous-layer nodal value satisfies $U_j^{n_k-1}\le\phi(x_j,t_k-\tau_k)+c_k$. Order preservation and constant-shift invariance from [F1] imply $$U_{i_k}^{n_k}=S_k(U^{n_k-1})_{i_k} \le S_k(\phi(\cdot,t_k-\tau_k)+c_k)_{i_k} =S_k(\phi(\cdot,t_k-\tau_k))_{i_k}+c_k.$$ Since $U_{i_k}^{n_k}=\phi(x_k,t_k)+c_k$, the normalized residual is nonpositive. Taking $k\to\infty$ and using the consistency estimate in [F1] gives $\phi_t(x_0,t_0)+H(x_0,t_0,D\phi(x_0,t_0))\le0$. By [F4], $\overline V$ is a viscosity subsolution for the full $C^1$ test class. [A1, F1, F3, F4, step 1.1, algebra]

2.2 At a local minimum of $\underline V-\phi$, subtract $\varepsilon(|x-x_0|^4+|t-t_0|^4)$ from $\phi$ to make the contact strict without changing its derivatives at $(x_0,t_0)$, as in [F4]. Use the minimizing nodes in [F3]. All previous-layer stencil nodes lie in the contact ball, so $U_j^{n_k-1}\ge\phi(x_j,t_k-\tau_k)+c_k$. Order preservation and constant-shift invariance now yield the reverse update inequality, hence the normalized consistency residual is nonnegative. Passing to the limit gives the viscosity supersolution inequality. The smooth-test equivalence [F4] extends it to every $C^1$ lower test. [A1, F1, F3, F4, step 1.1, algebra]

2.3 The initial trace estimate [F6] and the interpolation error [F7] show that both half-relaxed limits equal $u_0$ on $t=0$. They are bounded by step 1.1 and have the required semicontinuity by [F2]. Apply comparison [F5] to the periodic lifts of $\overline V$ and $\underline V$: it gives $\overline V\le\underline V$. The reverse inequality is part of [F2], so they coincide with a continuous viscosity solution having initial data $u_0$. [F2, F5, F6, F7, step 1.1, algebra]

3.1 Fix $T'<T$ and let $K=[0,1]^d\times[0,T']$ in the periodic lift; it is compact by [F8]. Fix $\varepsilon>0$ and write $u$ for the common continuous limit from step 2.3. For $z\in K$ and $q\in\mathbb Q_{>0}$, put $P(z,q)$ when the set-defined upper and lower envelopes in [F2] give $$|V_k(y)-u(z)|\le\varepsilon/3\quad\text{for every integer }k\text{ with }1/k<q \text{ and every }y\text{ with }|y-z|<q,$$ and continuity gives $|u(y)-u(z)|<\varepsilon/3$ whenever $|y-z|<q$. The family of all balls $$\{B(z,q/2):z\in K,\ q\in\mathbb Q_{>0},\ P(z,q)\}$$ covers $K$: each point has a positive real radius from the two envelope definitions and continuity, and a smaller rational radius still works. This is the family of all qualifying pairs, so no radius is selected for every point. By [F8] take a finite subcover and let $q_*>0$ be its least radius. For $1/k<q_*$, every $y\in K$ lies in one of these balls and therefore $|V_k(y)-u(y)|<2\varepsilon/3<\varepsilon$. This proves uniform convergence on the fundamental box through $T'$, hence on the torus and every compact subset of $\mathbb T^d\times[0,T)$. [F2, F8, step 2.3, algebra] ∎
