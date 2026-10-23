---
id: thm-fd-bounded-global-weak-existence
kind: theorem
title: Global bounded no-slip Leray–Hopf existence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-fd-bounded-solenoidal-spaces, lem-fd-bounded-compactness, lem-fd-no-slip-lsix, lem-fd-bounded-solenoidal-basis, thm-picard-lindelof-local-existence-and-uniqueness, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-fd-weak-time-continuity, thm-fourier-basis-and-parseval-on-the-n-torus, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-fd-bounded-solenoidal-spaces: mathematical-premise
  lem-fd-bounded-compactness: mathematical-premise
  lem-fd-no-slip-lsix: mathematical-premise
  lem-fd-bounded-solenoidal-basis: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-fd-weak-time-continuity: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Theorem 3 and proof, §5.2, printed pp. 14–15; that source treats smoother domains, while this proof uses the closure spaces stated here."
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.2–5.5, printed pp. 39–51, for the Galerkin and energy framework."
---

## Statement

Let $\Omega\subset\mathbb R^3$ be bounded and open, assume the Axiom of
Choice, let $\nu>0$, and let $u_0\in H$ for the bounded closure spaces
defined above. There exists
$$u\in C_w([0,\infty);H)\cap L^\infty(0,\infty;H)\cap L^2_{\rm loc}(0,\infty;V)$$
with $u(0)=u_0$ and $\|u(t)-u_0\|_H\to0$ as $t\downarrow0$, satisfying for
every compactly time-supported $C^1$ map $\phi:[0,\infty)\to V$,
$$\int_0^\infty\!\big[(u,\partial_t\phi)+(u\otimes u,\nabla\phi)-\nu(\nabla u,\nabla\phi)\big]dt+(u_0,\phi(0))=0.$$
It also satisfies
$$\|u(t)\|_2^2+2\nu\int_0^t\|\nabla u\|_2^2ds\le\|u_0\|_2^2\quad(t\ge0),$$
and there is a full-measure set $S\subset(0,\infty)$ such that for every
$s\in S\cup\{0\}$ and $t\ge s$,
$$\|u(t)\|_2^2+2\nu\int_s^t\|\nabla u\|_2^2d\tau\le\|u(s)\|_2^2.$$
The conclusion is a velocity result for the specified unforced closure-space
formulation; it asserts no uniqueness, smoothness, pressure regularity, or
boundary trace beyond membership in $H_0^1$. Here
$(u\otimes u):\nabla\phi=\sum_{i,j}u_i u_j\partial_j\phi_i$ and
$\nabla u:\nabla\phi=\sum_{i,j}\partial_j u_i\partial_j\phi_i$. For a matrix field
$A$, $(\operatorname{div}A)_i=\sum_j\partial_jA_{ij}$.

## Statement references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, Theorem 3, §5.2, pp. 14–15](https://www.mdpi.com/2311-5521/6/1/42/pdf).

[Leonid Ryzhik, *Math 256B Lecture Notes*, §§5.2–5.5, pp. 39–51](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

## Facts & Assumptions

**Given:** A bounded open $\Omega\subset\mathbb R^3$, the closure spaces $H,V$, Axiom of Choice, viscosity $\nu>0$, and $u_0\in H$.

[A1] [[def-axiom-of-choice]] and [[def-countable-choice]]: AC applies to all families, hence also supplies Countable Choice for the Fourier supplier [F7] and the countable selections in [F8]; AC is also assumed here for the Sobolev completeness and separability suppliers.

[F1] [[def-fd-bounded-solenoidal-spaces]]: $H$ is the $L^2$ closure and $V$ the $H_0^1$ closure of compact smooth divergence-free fields.

[F2] [[lem-fd-bounded-solenoidal-basis]]: there are smooth compactly supported solenoidal $e_j$ whose finite span is dense in both $H$ and $V$.

[F3] [[lem-fd-bounded-compactness]]: the $H$ projections $\Pi_K$ onto the first basis vectors obey $\|(I-\Pi_K)a\|_H\le\delta_K\|a\|_V$, with $\delta_K\to0$.

[F4] [[lem-fd-no-slip-lsix]]: energy-bounded fields satisfy $u\in L^{8/3}(0,T;L^4)$ and the nonlinear form defines an $L^{4/3}(0,T;V^*)$ functional.

[F5] [[def-fd-weak-time-continuity]]: $C_wH$ means continuity of every fixed $H$ pairing; the stated Bochner spaces use strongly measurable representatives.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative sums and time integrals interchange, including the a.e. convergence argument from a summable sequence of $L^2_tH$ errors.

[F7] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, scalar $L^2$ on a finite time interval, identified with a periodic interval up to endpoints, is separable by a countable Fourier family.

[F8] [[def-countable-choice]]: countable coefficient diagonalizations and the choice of a summable-error subsequence are allowed.

[F9] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field on an open subset of $\mathbb R\times\mathbb R^m$ that is locally Lipschitz in the state has a unique local solution through every initial point, and any two such solutions agree on each common interval containing that initial time. In particular, on a closed cylinder with state radius $r$ and time radius $h$, a bound $\|F\|\le B$, a state-Lipschitz constant $L_F$, $hB\le r$, and $hL_F<1$ give the stated local solution.

## Proof

1.1 Let $(e_j)$ be the basis from [F2], and set $u_N=\sum_{j=1}^Na_j(t)e_j$ with initial value the $H$-projection of $u_0$. Solve
$$ (u_N',e_i)_H+\int_\Omega(u_N\cdot\nabla)u_N\cdot e_i\,dx+\nu(\nabla u_N,\nabla e_i)=0,\quad i\le N.$$
Because the $e_j$ are real and $H$-orthonormal, the displayed system has identity mass matrix and is an autonomous polynomial ODE $a'=F_N(a)$ on $\mathbb R^N$. Its open time-state domain is $\mathbb R\times\mathbb R^N$; it is continuous and its derivative is bounded on every closed coefficient ball, giving a Lipschitz bound there by integration along line segments. Hence [F9] gives its unique local solution. Pairing with $u_N$ and summing the equations cancels the transport term because $\operatorname{div}u_N=0$ and $\int (u_N\cdot\nabla)u_N\cdot u_N=\int\operatorname{div}(u_N|u_N|^2/2)=0$ for its compact support. Thus
$$\|u_N(t)\|_2^2+2\nu\int_s^t\|\nabla u_N\|_2^2d\tau=\|u_N(s)\|_2^2.$$
The overlap uniqueness in [F9] glues all local solutions through the initial value on their interval union. The energy identity bounds the coefficient vector of this maximal solution for nonnegative times; $F_N$ is bounded on that closed ball, so the curve is uniformly Lipschitz in time. A finite positive endpoint would therefore have a limit $a_*\in\mathbb R^N$. The local solution supplied by [F9] at that endpoint and state joins to the old one with matching derivative $F_N(a_*)$, producing a $C^1$ extension and contradicting maximality. Hence $u_N$ is forward global. [given, A1, F2, F9, algebra]

2.1 For fixed $i$ and $N\ge i$, integration by parts and the energy bound give
$$|(u_N'(t),e_i)|\le\|\nabla e_i\|_\infty\|u_N(t)\|_2^2+\nu\|\nabla e_i\|_2\|\nabla u_N(t)\|_2.$$
Integrating from $s$ to $t$ and applying Cauchy–Schwarz bounds coefficient increments by $C_i|t-s|+D_i|t-s|^{1/2}$, uniformly in $N$ on each finite horizon. Diagonal extraction over the countable basis and integer horizons gives uniformly convergent coefficient curves. Their finite sums define for every $t$ a bounded $H$ element; approximation of an arbitrary $H$ test by finite basis sums proves weak continuity as in [F5]. [given, F2, F5, F8, step 1.1]

3.1 For each integer $m\ge1$, the energy equality bounds $u_N$ in the separable Hilbert space $X_m=L^2(0,m;V)$. Completeness follows by selecting from a Cauchy sequence a subsequence with summable $X_m$-norm differences, applying [F6] to obtain pointwise summability in complete $V$, and then using the $L^2$ triangle inequality for convergence. Separability follows by approximating strongly measurable maps by finite-valued simple maps, their scalar indicators by the countable Fourier span from [F7], and their values by a countable dense subset of $V$ from [F2]. In any separable Hilbert space, a bounded sequence has a weakly convergent subsequence: diagonalize coordinates in a countable orthonormal basis; finite squared sums bound the limiting coordinates, their square-summable series defines a vector, and finite-basis approximation plus the uniform norm bound gives convergence against every vector. Apply this successively on $m=1,2,\ldots$ to nested subsequences of the coefficient-convergent sequence from step 2.1, and take the diagonal subsequence. It converges weakly in every $X_m$. The limits agree on overlapping horizons: for each basis vector $e_j$ from [F2], the map $w\mapsto(w,e_j)_H$ is continuous from $V$ to $\mathbb R$, so the induced map $X_m\to L^2(0,m)$ preserves weak convergence, while step 2.1 gives strong $L^2$ convergence of that coefficient to its fixed uniform limit. Uniqueness of weak limits identifies the coefficient of each $X_m$ limit with that same curve; the countable basis then identifies the $H$-valued limits almost everywhere. Thus one $u\in L^2_{\rm loc}(0,\infty;V)$ is obtained on all finite horizons. [given, F2, F6, F7, F8, step 2.1]

4.1 On each integer horizon $m$, [F3] gives
$$\int_0^m\|(I-\Pi_K)u_N(t)\|_2^2dt\le\delta_K^2\int_0^m\|u_N(t)\|_V^2dt,$$
uniformly in $N$. The weak limit in step 3.1 has the same tail bound: restriction and $I-\Pi_K:L^2(0,m;V)\to L^2(0,m;H)$ are bounded linear maps, and the Hilbert norm is weakly lower semicontinuous. For each fixed $K$, the first $K$ coefficients converge uniformly by step 2.1. Choose $K$ to make both $u_N$ and $u$ tails small in $L^2(0,m;H)$, then pass to the limit in the finitely many coefficients; this proves strong convergence in $L^2(0,m;H)$ for every $m$. A further diagonal subsequence can be chosen with $\|u_{N_j}-u\|_{L^2(0,j;H)}^2\le2^{-j}$. For each fixed $m$, Tonelli [F6] gives $\sum_{j\ge m}\|u_{N_j}(t)-u(t)\|_H^2<\infty$ for almost every $t\in(0,m)$. Intersecting these full-measure sets over integer $m$ gives a single full-measure set $S\subset(0,\infty)$ on which $u_{N_j}(t)\to u(t)$ strongly in $H$. The identity
$$\|u_{N_j}\otimes u_{N_j}-u\otimes u\|_{L^1((0,m)\times\Omega)}\le(\|u_{N_j}\|_{L^2((0,m)\times\Omega)}+\|u\|_{L^2((0,m)\times\Omega)})\|u_{N_j}-u\|_{L^2((0,m)\times\Omega)}$$
then gives strong tensor convergence on every finite horizon. [given, F3, F6, F8, step 2.1, step 3.1]

5.1 For a test field taking values in a fixed finite span of the $e_j$, the Galerkin identity is exact for all sufficiently large $N$. Uniform coefficient convergence passes the time and initial terms, strong tensor convergence from step 4.1 passes the transport term, and weak convergence in $L^2V$ passes viscosity. To pass to any compactly supported $C^1$ curve $\phi:[0,\infty)\to V$, let $Q_K$ be the $V$-orthogonal projection onto $\operatorname{span}(e_1,\ldots,e_K)$. It is a contraction and converges strongly to the identity by [F2]; finite nets of the compact images of $\phi$ and $\phi_t$ make this convergence uniform in time. The nonlinear error is bounded by the uniform $L^{4/3}_tV^*$ norm from [F4] times $\|\phi-Q_K\phi\|_{L^4_tV}$; the time and viscosity errors tend to zero by the $L^\infty H$ and $L^2V$ bounds. Thus the full weak identity holds. [given, F2, F4, step 2.1, step 4.1]

6.1 For each fixed $t$, convergence of the finite coefficients gives $\|u(t)\|_2^2\le\liminf_N\|u_N(t)\|_2^2$. Weak convergence in $L^2V$ restricted to any $[s,t]$ gives lower semicontinuity of the gradient integral there. At $s=0$, $u_N(0)\to u_0$ strongly, so passing the Galerkin equality proves the initial energy inequality for every $t$. At every time $s$ in the full-measure set from step 4.1, $u_N(s)\to u(s)$ strongly; passing the same equality on $[s,t]$ gives the restart inequality for every $t\ge s$. Coefficient convergence gives $u(t)\rightharpoonup u_0$ as $t\downarrow0$, and the initial energy inequality gives the norm limsup; the Hilbert identity then gives strong convergence to $u_0$. Together the Galerkin, compactness, weak-limit, and energy arguments prove the stated existence, with the finite-dimensional local existence and continuation supplied by [F9]. [given, A1, F1, F5, F6, F9, step 1.1, step 3.1, step 4.1, step 5.1] ∎

