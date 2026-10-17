---
id: lem-tgr-constant-linear-energy-causality
kind: lemma
title: Complete symmetrized constant-coefficient evolution
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-countable-choice
  - def-schwartz-space-and-its-seminorms
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-fourier-inversion-on-schwartz-space
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-plancherel
dependency_roles:
  def-countable-choice: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-plancherel: mathematical-premise
sources:
  references:
    - title: "Guillaume Bal, Waves in Random Media: Lecture Notes (May 2017)"
      url: "https://www.stat.uchicago.edu/~guillaumebal/COURSES/LecturesWavesRandomMedia.pdf"
      locator: "Full 102-page notes; §§1.3.1 and 1.3.4, PDF pp. 7–8 and 11–12: Fourier-mode evolution, energy estimates, and cone-energy finite propagation."
    - title: "Eitan Tadmor, Spectral Methods for Hyperbolic Problems (1998 lecture notes)"
      url: "https://www.math.umd.edu/~tadmor/lecture-notes/hyperbolic/node6.html"
      locator: "Initial Value Problems of Hyperbolic Type, 'Hyperbolic systems with constant coefficients': Fourier symbol, positive symmetrizer, modewise energy, and Parseval estimate."
---

## Statement

Assume countable choice. Let $m\ge1$, let $U:\mathbb R\times\mathbb R^3\to\mathbb R^m$, and let $A_1,A_2,A_3,B,M\in\mathbb R^{m\times m}$ be constant matrices. Assume $M=M^{\mathsf T}$ is positive definite, each $MA_j$ is symmetric, and $S:=(MB+B^{\mathsf T}M)/2$ is positive semidefinite. Consider

$$\partial_tU+\sum_{j=1}^3A_j\partial_{x_j}U+BU=0.$$

Use [[def-schwartz-space-and-its-seminorms]]: for $f\in C^\infty(\mathbb R^3;\mathbb C)$ and multi-indices $\alpha,\beta\in\mathbb N^3$, the scalar seminorm is $p_{\alpha\beta}(f):=\sup_{x\in\mathbb R^3}|x^\alpha\partial^\beta f(x)|$, and $\mathcal S(\mathbb R^3)$ consists of functions for which all these seminorms are finite. Here $\mathcal S(\mathbb R^3;\mathbb R^m)$ means maps $U=(U_1,\ldots,U_m)$ with real-valued components such that each component, viewed as complex-valued with zero imaginary part, belongs to $\mathcal S(\mathbb R^3)$; its vector seminorms are $p_{\alpha\beta}^{(m)}(U):=\max_{1\leq\ell\leq m}p_{\alpha\beta}(U_\ell)$. For $U_0\in\mathcal S(\mathbb R^3;\mathbb R^m)$ there is a unique global smooth solution, Schwartz in $x$ at each time and continuous in every $p_{\alpha\beta}^{(m)}$ on compact time intervals. With the negative-sign, $2\pi$-normalized Fourier transform, put $\widehat U(\xi)=\int_{\mathbb R^3}e^{-2\pi i x\cdot\xi}U(x)\,dx$ and define, for $s\ge0$,

$$\|U\|_{H^s_M}^2:=\int_{\mathbb R^3}(1+|\xi|^2)^s\widehat U(\xi)^*M\widehat U(\xi)\,d\xi.$$

For $t\ge0$, $\|U(t)\|_{H^s_M}\le\|U_0\|_{H^s_M}$ for every $s\ge0$; hence the solution depends continuously on the data in each such norm. The same conclusions hold for smooth periodic data on the flat torus $\mathbb T_L^3:=(\mathbb R/L\mathbb Z)^3$, $L>0$, with Fourier coefficients $\widehat U_k=L^{-3}\int_{[0,L]^3}U(x)e^{-2\pi i k\cdot x/L}\,dx$ and

$$\|U\|_{H^s_M(\mathbb T_L^3)}^2:=\sum_{k\in\mathbb Z^3}(1+|k/L|^2)^s\widehat U_k^*M\widehat U_k.$$

For periodic data, $\|U(t)\|_\infty\le C_{s,L,M}\|U_0\|_{H^s_M(\mathbb T_L^3)}$ for each integer $s>3/2$.

For a unit vector $\nu\in\mathbb R^3$, write $A(\nu)=\sum_j\nu_jA_j$ and $\widetilde A(\nu)=M^{1/2}A(\nu)M^{-1/2}$. The finite speed

$$v_*:=\sup_{|\nu|=1}\max\{|\lambda|:\lambda\in\operatorname{spec}(\widetilde A(\nu))\}$$

is finite. If $v_*>0$, $R>v_*t$, and $U_0$ vanishes on $B_R(x_0)$, then $U(t)$ vanishes on $B_{R-v_*t}(x_0)$ for $0\le t<R/v_*$. The same assertion holds on $\mathbb T_L^3$ using its geodesic distance. If $v_*=0$, every $A_j=0$ and the system is a pointwise linear ODE, so spatial support does not move. These are conclusions for the displayed linear systems; no variable-coefficient or nonlinear existence claim is included.

## Facts & Assumptions

**Given:** $m\ge1$, constant real matrices $A_j,B,M$ with the stated symmetry and positivity conditions, $U_0\in\mathcal S(\mathbb R^3;\mathbb R^m)$ or $U_0\in C^\infty(\mathbb T_L^3;\mathbb R^m)$, and $L>0$ in the periodic case. Use the Fourier convention fixed in the Statement.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed, with no stronger choice principle ([[def-countable-choice]]). It is the choice strength carried by the Fourier and divergence suppliers below.

[F1] [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]: the negative-sign, $2\pi$-normalized Fourier transform maps $\mathcal S(\mathbb R^3)$ continuously into itself.

[F2] [[thm-fourier-inversion-on-schwartz-space]]: for $f\in\mathcal S(\mathbb R^3)$, $f(x)=\int\widehat f(\xi)e^{2\pi ix\cdot\xi}\,d\xi$ absolutely for every $x$.

[F3] [[thm-plancherel]]: under $\mathrm{AC}_\omega$, the same transform extends uniquely to a unitary map on complex $L^2(\mathbb R^3)$.

[F4] [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]: the integral and Plancherel transforms agree as tempered distributions on $L^1$ and $L^2$ inputs, so the Schwartz Fourier-mode construction has the stated distributional and $L^2$ meanings.

[F5] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under $\mathrm{AC}_\omega$, a $C^1$ vector field on the closure of a bounded $C^1$ domain in $\mathbb R^n$, $n\ge2$, satisfies $\int_\Omega\operatorname{div}F=\int_{\partial\Omega}F\cdot\nu\,dS$ with the outward normal and Euclidean surface measure.

[F6] [[def-schwartz-space-and-its-seminorms]] defines the scalar complex Schwartz space by the seminorms $p_{\alpha\beta}$ above. The real $\mathbb R^m$-valued data class and its seminorms in the Statement are the componentwise real subspace, with the finite maximum convention stated there.

## Proof

1.1 For any real symmetric matrix $H$, maximize $z^{\mathsf T}Hz$ on the compact unit sphere. Differentiating along every tangent direction shows the maximizing vector is an eigenvector; its orthogonal complement is invariant under $H$, so induction gives an orthonormal eigenbasis. Applying this to $M$ constructs $M^{1/2}$ and $M^{-1/2}$. The condition $MA_j=A_j^{\mathsf T}M$ makes $\widetilde A_j=M^{1/2}A_jM^{-1/2}$ symmetric. Therefore each eigenvalue in $v_*$ is real and has absolute value at most $\sum_j\|\widetilde A_j\|$, so $v_*<\infty$. With $e=U^{\mathsf T}MU/2$ and $F_j=U^{\mathsf T}MA_jU/2$, the product rule gives $\partial_te+\sum_j\partial_{x_j}F_j=-U^{\mathsf T}SU\le0$ for every smooth solution, and $|F\cdot\nu|\le v_*e$ by diagonalizing $\widetilde A(\nu)$. [given, algebra]

1.2 For Schwartz data, [F1] permits componentwise Fourier transformation of the system, giving $\partial_t\widehat U=C(\xi)\widehat U$ with $C(\xi)=-2\pi i\sum_j\xi_jA_j-B$. The matrix exponential $E(t,\xi)=e^{tC(\xi)}$, defined by its locally uniformly convergent power series, solves this finite-dimensional ODE. For $z(t)=E(t,\xi)z_0$, $\frac d{dt}(z^*Mz)=-2z^*Sz\le0$, because $MA(\xi)$ is real symmetric and its multiple by $-i$ has zero real quadratic part. Thus $\|E(t,\xi)\|_M\le1$ for $t\ge0$, uniformly in $\xi$; for $t<0$, $|\frac d{dt}(z^*Mz)|\le2\|M^{-1/2}SM^{-1/2}\|z^*Mz$, so Grönwall gives a uniform $e^{C|t|}$ bound on bounded time intervals. [A1, F1, given, algebra]

2.1 Differentiating the matrix exponential with respect to $\xi_j$ gives $\partial_{\xi_j}E(t,\xi)=\int_0^tE(t-s,\xi)(-2\pi iA_j)E(s,\xi)\,ds$. Repeating this identity expresses every fixed $\xi$-derivative as a finite sum of ordered insertion integrals with constant matrix factors between evolution matrices. The uniform bounds from step 1.2 and the finite integration-simplex volumes bound each such derivative uniformly in $\xi$ on compact time intervals. Time derivatives multiply by $C(\xi)$ and therefore have at most polynomial growth in $\xi$. Leibniz's rule now shows $E(t,\cdot)\widehat U_0$ is Schwartz, uniformly in its seminorms on compact time intervals. [A1, step 1.2, F1, algebra]

2.2 For periodic smooth data, integration by parts in a coordinate with maximal $|k_j|$ gives $|\widehat U_k(0)|\le C_N(1+|k|)^{-N}$ for every $N$. The series $U(t,x)=\sum_{k\in\mathbb Z^3}e^{2\pi i k\cdot x/L}E(t,k/L)\widehat U_k(0)$ and every differentiated series converge uniformly on compact time intervals, by the same matrix-exponential derivative bounds and the lattice-shell estimate that a unit-width shell in $\mathbb Z^3$ has $O((1+r)^2)$ points. Hence it is a global smooth periodic solution and solves the PDE termwise. The modewise $M$-estimate from step 1.2 yields contraction of every weighted coefficient norm. For $s>3/2$, Cauchy–Schwarz and $M\ge\lambda_{\min}(M)I$ give $\sum_k|\widehat U_k(t)|\le\lambda_{\min}(M)^{-1/2}(\sum_k(1+|k/L|^2)^{-s})^{1/2}(\sum_k(1+|k/L|^2)^s\widehat U_k(t)^*M\widehat U_k(t))^{1/2}$; the first sum converges by the shell bound, proving the asserted uniform norm estimate. Integrating the equation against each periodic exponential shows that every solution coefficient solves the same finite-dimensional ODE, proving uniqueness. [step 1.2, algebra]

3.1 Define $U(t)=\mathcal F^{-1}(E(t,\cdot)\widehat U_0)$. By [F2] this inverse is pointwise the absolutely convergent Fourier integral; the decay proved in step 2.1 permits every spatial and time derivative to pass under that integral, proves the PDE, and recovers $U(0)=U_0$. Conjugation symmetry of $C(\xi)$ and $\widehat U_0(-\xi)=\overline{\widehat U_0(\xi)}$ makes $U$ real. [A1, F2, step 2.1, algebra]

4.1 By [F3] the Plancherel transform is unitary, and [F4] identifies it with the integral transform in $\mathcal S'$. Multiplying the pointwise $M$-norm estimate in step 1.2 by $(1+|\xi|^2)^s$ and integrating gives the stated $H^s_M$ contraction for every $s\ge0$. [A1, F3, F4, step 1.2, step 3.1, algebra]

5.1 Fix $t_*>0$, $x_*$, and $0\le t<t_*$. Put $R(t)=v_*(t_*-t)$ and $E(t)=\int_{B_{R(t)}(x_*)}e(t,x)\,dx$. In polar coordinates, the fundamental theorem of calculus differentiates this moving-ball integral; the PDE energy identity and [F5] then give $E'(t)=-\int_{\partial B_{R(t)}}(F\cdot\nu+v_*e)\,dS-\int_{B_{R(t)}}U^{\mathsf T}SU\,dx\le0$, since $|F\cdot\nu|\le v_*e$. If the initial data vanish on $B_{v_*t_*}(x_*)$, then $E(0)=0$; positivity of $M$ and $E(t)\ge0$ force $U(t,x_*)=0$ by continuity as $t\uparrow t_*$. For any $x$ with $|x-x_0|<R-v_*t_*$, the ball $B_{v_*t_*}(x)$ is contained in $B_R(x_0)$, proving the stated shrinking-ball conclusion. Applying the same argument to the difference of two solutions proves local uniqueness. Periodic lifts give the identical geodesic-ball conclusion on $\mathbb T_L^3$. If $v_*=0$, every symmetric $\widetilde A_j$ has zero spectrum and hence is zero, so each $A_j=0$; the pointwise ODE preserves spatial support. [A1, F5, step 1.1, algebra] ∎
