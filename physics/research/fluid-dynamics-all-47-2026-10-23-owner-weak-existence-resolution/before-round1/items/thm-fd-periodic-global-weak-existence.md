---
id: thm-fd-periodic-global-weak-existence
kind: theorem
title: Global periodic weak viscous existence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-fd-periodic-solenoidal-spaces, def-fd-periodic-leray-hopf, lem-fd-finite-mode-compactness, lem-fd-negative-space-nonlinear-bound, NR-E2, def-countable-choice]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-fd-periodic-leray-hopf: mathematical-premise
  lem-fd-finite-mode-compactness: mathematical-premise
  lem-fd-negative-space-nonlinear-bound: mathematical-premise
  NR-E2: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "Theorem 5.9 and proof, §§5.2–5.5, printed pp. 39–51; the local proof retains the mean mode and proves finite-mode compactness directly."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Theorem 3 and proof, §5.2, printed pp. 14–15, flat-torus case."
---

## Statement

Let $d\ge2$, $L>0$, $\nu>0$, and $u_0\in H$ for the periodic solenoidal
Fourier spaces defined above. Assume the finite-dimensional ODE principle that on a closed cylinder where
$\|F\|\le B$ and $F$ is $L$-Lipschitz in the state, the integral map on
curves within radius $r$ of the initial state is invariant when $hB\le r$ and
a contraction when $hL<1$. Then there
exists a global unforced periodic Leray–Hopf solution with data $(\nu,u_0)$
under the definition above. This is an existence assertion; it asserts no
uniqueness or global smoothness.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, Theorem 5.9, §§5.2–5.5, pp. 39–51](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, Theorem 3, §5.2, pp. 14–15](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** $d\ge2$, $L>0$, $\nu>0$, and $u_0\in H$; all spaces, Fourier multipliers, and periodic conventions are those stated by [[def-fd-periodic-solenoidal-spaces]].

[F1] [[def-fd-periodic-solenoidal-spaces]]: $P$ and rectangular Fourier truncations are orthogonal contractions on $H$; Fourier coefficients satisfy Parseval; $V=H\cap H^1$.

[F2] [[def-fd-periodic-leray-hopf]]: a solution must satisfy the divergence-free weak identity, the initial energy inequality for every time, and the full-measure restart inequality.

[F3] [[lem-fd-finite-mode-compactness]]: uniform $L^\infty_tH$ and $L^2_tV$ bounds plus fixed-mode Lipschitz estimates give a subsequence converging in $C_wH$ coefficientwise, strongly in $L^2_tH$, with strong $H$ convergence at almost every time.

[F4] [[lem-fd-negative-space-nonlinear-bound]]: the nonlinear Fourier coefficients are well-defined and bounded by the square of the $H$ norm; in particular every fixed-mode nonlinear coefficient is uniformly bounded on energy-bounded trajectories.

[F5] [[def-countable-choice]]: countable diagonal subsequences and the diagonal choice across integer time horizons are permitted.

[F6] [[NR-E2]]: on a closed cylinder in an open time-state domain with $\|F\|\le B$ and $|F(t,x)-F(t,y)|\le L|x-y|$, the integral map $Tx(t)=x_0+\int_{t_0}^tF(s,x(s))ds$ is invariant on curves within distance $r$ of $x_0$ if $hB\le r$ and is a contraction if $hL<1$; its fixed point is the unique local solution. The complete argument is at `research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/expansion-proofs.md#E2`; that research proof is not a current item carrier, so the Galerkin use here is conditional on this exact interface pending carrier/readiness closure.

## Proof

1.1 For $N\ge1$, let $X_N=\operatorname{ran}\Pi_N\cap H$ and solve in this finite-dimensional real space
$$\partial_tu_N+\Pi_NP\operatorname{div}(u_N\otimes u_N)=\nu\Delta u_N,\qquad u_N(0)=\Pi_Nu_0.$$
The right side is polynomial in the coefficients, hence bounded and Lipschitz on every closed coefficient ball; [F6] gives a unique local solution. Pairing with $u_N$ removes $P,\Pi_N$ by orthogonality, and periodic integration by parts gives $\int (u_N\cdot\nabla)u_N\cdot u_N=\int\operatorname{div}(u_N|u_N|^2/2)=0$. Thus
$$\|u_N(t)\|_2^2+2\nu\int_s^t\|\nabla u_N\|_2^2d\tau=\|u_N(s)\|_2^2$$
on every local existence interval. [given, F1, F6, algebra]

1.2 The energy identity bounds all coefficients in the fixed finite-dimensional space $X_N$ for all times of existence. The polynomial vector field is bounded on the resulting compact coefficient ball, so $u_N'$ is bounded there; if a maximal finite endpoint existed, this derivative bound would give a coefficient limit at that endpoint, and [F6] would restart the local ODE from the limit. Therefore every $u_N$ is global and the energy identity holds for all $0\le s\le t$. [given, F6, step 1.1]

2.1 For fixed $k$, the nonlinear coefficient is bounded by $C|\kappa_k|\|u_N\|_2^2$ and the viscous coefficient by $\nu|\kappa_k|^2\|u_N\|_2$. The energy identity supplies uniform $L^\infty H$ and $L^2V$ bounds. The fixed-mode derivative bound is therefore uniform in $N$; [F3] gives subsequential compactness on each finite horizon. Applying [F5] diagonally over integer horizons yields one global limit $u\in C_w([0,\infty);H)\cap L^2_{\rm loc}V$ with the stated energy bounds. [given, F1, F3, F4, F5, step 1.1]

2.2 For a finite Fourier divergence-free test, uniform coefficient convergence passes the time-linear terms, strong $L^2_tH$ convergence passes the quadratic term by [F3], and the viscous term passes after integration by parts as $+\nu(u_N,\Delta\phi)$, using strong $L^2_tH$ convergence. A smooth periodic test and its time derivative have uniformly convergent Fourier truncations on their compact time support, by repeated integration by parts in space; the uniform energy bound controls the truncation errors. Thus the weak identity in [F2] holds for every admissible test, including its initial term because $\Pi_Nu_0\to u_0$ in $H$. [given, F1, F2, F3, step 2.1]

3.1 For each fixed $t$, finite coefficient convergence gives $\|u(t)\|_2^2\le\liminf_N\|u_N(t)\|_2^2$. For the gradient integral on $[s,t]$, each finite Fourier sum is the limit of the corresponding Galerkin sum and is bounded above by the full Galerkin integral; increasing the finite sets gives the lower-semicontinuous bound for $\int_s^t\|\nabla u\|_2^2$. At $s=0$, use $\Pi_Nu_0\to u_0$ in the Galerkin equality to obtain the initial energy inequality for every $t$. For almost every $s$, [F3] gives strong $H$ convergence $u_N(s)\to u(s)$ along the chosen subsequence; passing the equality from that $s$ yields the restart inequality for every $t\ge s$. [given, F2, F3, step 1.1, step 2.1]

3.2 The coefficient convergence implies $u(t)\rightharpoonup u_0$ in $H$ as $t\downarrow0$. The initial energy inequality gives $\limsup_{t\downarrow0}\|u(t)\|_2\le\|u_0\|_2$; weak convergence and the Hilbert identity for $\|u(t)-u_0\|_2^2$ then imply strong convergence to $u_0$. Together the compactness, weak-limit, and energy arguments verify every clause of the Leray–Hopf definition, conditional on the finite-dimensional ODE input [F6]. [given, F2, F5, F6, step 2.1, step 3.1] ∎
