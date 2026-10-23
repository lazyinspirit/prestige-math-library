---
id: thm-fd-periodic-global-weak-existence
kind: theorem
title: Global periodic weak viscous existence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  [
    def-fd-periodic-solenoidal-spaces,
    def-fd-periodic-leray-hopf,
    lem-fd-finite-mode-compactness,
    lem-fd-negative-space-nonlinear-bound,
    thm-picard-lindelof-local-existence-and-uniqueness,
    def-countable-choice
  ]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-fd-periodic-leray-hopf: mathematical-premise
  lem-fd-finite-mode-compactness: mathematical-premise
  lem-fd-negative-space-nonlinear-bound: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
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
      locator: "Theorem 5.9 and proof, §§5.2–5.5, printed pp. 39–51; the local proof
        retains the mean mode and proves finite-mode compactness directly."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak
        Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Theorem 3 and proof, §5.2, printed pp. 14–15, flat-torus case."
---

## Statement

Assume Countable Choice. Let $d\ge2$, $L>0$, $\nu>0$, and $u_0\in H$ for the periodic solenoidal
Fourier spaces defined above. Then there
exists a global unforced periodic Leray–Hopf solution with data $(\nu,u_0)$
under the definition above. This is an existence assertion; it asserts no
uniqueness or global smoothness.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, Theorem 5.9, §§5.2–5.5, pp. 39–51](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, Theorem 3, §5.2, pp. 14–15](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** Countable Choice, $d\ge2$, $L>0$, $\nu>0$, and $u_0\in H$; all spaces, Fourier multipliers, and periodic conventions are those stated by [[def-fd-periodic-solenoidal-spaces]].

[F1] [[def-fd-periodic-solenoidal-spaces]]: under Countable Choice, $P$ and rectangular Fourier truncations are orthogonal contractions on $H$, Fourier coefficients satisfy Parseval, and $V=H\cap H^1$.

[F2] [[def-fd-periodic-leray-hopf]]: a solution must satisfy the divergence-free weak identity, the initial energy inequality for every time, and the full-measure restart inequality.

[F3] [[lem-fd-finite-mode-compactness]]: uniform $L^\infty_tH$ and $L^2_tV$ bounds plus fixed-mode Lipschitz estimates give a subsequence converging in $C_wH$ coefficientwise, strongly in $L^2_tH$, with strong $H$ convergence at almost every time.

[F4] [[lem-fd-negative-space-nonlinear-bound]]: the nonlinear Fourier coefficients are well-defined and bounded by the square of the $H$ norm; in particular every fixed-mode nonlinear coefficient is uniformly bounded on energy-bounded trajectories.

[F5] [[def-countable-choice]]: countable diagonal subsequences and the diagonal choice across integer time horizons are permitted.

[F6] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field on an open subset of $\mathbb R\times\mathbb R^m$ that is locally Lipschitz in the state has a unique local solution through every initial point, and any two such solutions agree on each common interval containing that initial time. In particular, on a closed cylinder with state radius $r$ and time radius $h$, a bound $\|F\|\le B$, a state-Lipschitz constant $L_F$, $hB\le r$, and $hL_F<1$ give the stated local solution.

## Proof

1.1 For $N\ge1$, let $X_N=\operatorname{ran}\Pi_N\cap H$ and solve in this finite-dimensional real space
$$\partial_tu_N+\Pi_NP\operatorname{div}(u_N\otimes u_N)=\nu\Delta u_N,\qquad u_N(0)=\Pi_Nu_0.$$
Choose real orthonormal coordinates on $X_N$, whose finite Fourier coefficients satisfy the real conjugation and solenoidal conditions. The right side preserves this real space and is a polynomial vector field $F_N:\mathbb R^m\to\mathbb R^m$. It is continuous on the open time-state domain $\mathbb R\times\mathbb R^m$; its derivative is bounded on each closed coefficient ball, so integration along line segments gives a Lipschitz bound there. Thus [F6] gives a unique local solution through the projected initial value. Pairing with $u_N$ removes $P,\Pi_N$ by orthogonality, and periodic integration by parts gives $\int (u_N\cdot\nabla)u_N\cdot u_N=\int\operatorname{div}(u_N|u_N|^2/2)=0$. Thus
$$\|u_N(t)\|_2^2+2\nu\int_s^t\|\nabla u_N\|_2^2d\tau=\|u_N(s)\|_2^2$$
on every local existence interval. [given, F1, F6, algebra]

2.1 By the overlap uniqueness in [F6], all local solutions through the initial data glue on their interval union to one maximal solution. The energy identity bounds its coordinates in the fixed finite-dimensional real space $X_N$ for all nonnegative times of existence. The polynomial vector field is bounded on that closed coefficient ball, so the coordinate curve is uniformly Lipschitz in time. If its positive endpoint $\beta$ were finite, completeness of $\mathbb R^m$ would give a limit $a_*$ as $t\uparrow\beta$. Apply [F6] at $(\beta,a_*)$ and join the resulting local solution to the old curve. The derivatives match because both approach $F_N(a_*)$, so this is a $C^1$ solution extending the maximal interval, a contradiction. Therefore every $u_N$ is forward global and the energy identity holds for all $0\le s\le t$. [given, F6, step 1.1]

2.2 For fixed $k$, the nonlinear coefficient is bounded by $C|\kappa_k|\|u_N\|_2^2$ and the viscous coefficient by $\nu|\kappa_k|^2\|u_N\|_2$. The energy identity supplies uniform $L^\infty H$ and $L^2V$ bounds. The fixed-mode derivative bound is therefore uniform in $N$; [F3] gives subsequential compactness on each finite horizon, including strong convergence in $L^2(0,m;H)$. Applying [F5] diagonally over integer horizons yields one subsequence that retains uniform coefficient convergence and converges strongly in $L^2(0,m;H)$ for every integer $m$. The limits on overlapping horizons agree because their Fourier coefficient curves are the same; hence they define one global limit $u\in C_w([0,\infty);H)\cap L^2_{\rm loc}V$ with the stated energy bounds. [given, F1, F3, F4, F5, step 1.1]

3.1 For a finite Fourier divergence-free test, uniform coefficient convergence passes the time-linear terms, strong $L^2_tH$ convergence passes the quadratic term by [F3], and the viscous term passes after integration by parts as $+\nu(u_N,\Delta\phi)$, using strong $L^2_tH$ convergence. A smooth periodic test and its time derivative have uniformly convergent Fourier truncations on their compact time support, by repeated integration by parts in space; the uniform energy bound controls the truncation errors. Thus the weak identity in [F2] holds for every admissible test, including its initial term because $\Pi_Nu_0\to u_0$ in $H$. [given, F1, F2, F3, step 2.2]

3.2 For each fixed $t$, finite coefficient convergence gives $\|u(t)\|_2^2\le\liminf_N\|u_N(t)\|_2^2$. For the gradient integral on $[s,t]$, each finite Fourier sum is the limit of the corresponding Galerkin sum and is bounded above by the full Galerkin integral; increasing the finite sets gives the lower-semicontinuous bound for $\int_s^t\|\nabla u\|_2^2$. At $s=0$, use $\Pi_Nu_0\to u_0$ in the Galerkin equality to obtain the initial energy inequality for every $t$. By step 2.2, the selected sequence converges strongly in $L^2(0,m;H)$ to $u$ for every positive integer $m$. Countable Choice therefore selects one increasing subsubsequence $(N_j)$ such that $\|u_{N_j}-u\|_{L^2(0,j;H)}^2\le2^{-j}$ for each $j$. For each integer $m$, Tonelli [F3] gives $\sum_{j\ge m}\|u_{N_j}(s)-u(s)\|_H^2<\infty$ for almost every $s\in(0,m)$; intersecting these full-measure sets over $m$ gives one full-measure $S\subset(0,\infty)$ with strong $H$ convergence at every $s\in S$. For each such $s$, passing the Galerkin equality at $s$ and any fixed $t\ge s$ gives the restart inequality; since the lower-semicontinuity bounds hold for every fixed $t$, this establishes the inequality for all $t\ge s$. [given, F2, F3, F5, step 1.1, step 2.2]

4.1 The coefficient convergence implies $u(t)\rightharpoonup u_0$ in $H$ as $t\downarrow0$. The initial energy inequality gives $\limsup_{t\downarrow0}\|u(t)\|_2\le\|u_0\|_2$; weak convergence and the Hilbert identity for $\|u(t)-u_0\|_2^2$ then imply strong convergence to $u_0$. Together the compactness, weak-limit, and energy arguments verify every clause of the Leray–Hopf definition; the finite-dimensional local existence and continuation used above are supplied by [F6]. [given, F2, F5, F6, step 2.2, step 3.2] ∎

