---
id: thm-cm-spring-chain-continuum-limit
kind: theorem
title: "Finite-time continuum limit of the cyclic spring chain: uniform $O(a^{3/2})$ nodal and uniform interpolation convergence"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-cyclic-spring-chain, lem-cm-second-difference-remainder-bound, lem-cm-discrete-periodic-summation-by-parts, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, def-first-order-ode-initial-value-problem-and-solution, prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem, thm-rolle, thm-ftc-first-part, thm-ftc-second-part, def-oriented-integral, thm-additivity-over-subintervals, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-interval, def-metric-ball]
dependency_roles:
  def-cm-cyclic-spring-chain: mathematical-premise
  lem-cm-second-difference-remainder-bound: mathematical-premise
  lem-cm-discrete-periodic-summation-by-parts: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem: mathematical-premise
  thm-rolle: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014), Section 6.1 (the chain-to-continuum limit, Eqs. (6.1)–(6.8))"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Problem 5.5 (harmonic crystal in one dimension) and the nearest-neighbour lattice example (8.81) in Section 8.4"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"

  precheck: pass
---

## Statement

Let $L>0$, $c>0$, let $N\ge2$ be an integer and $a:=L/N$, and let $[0,T]$ be a compact time interval, with $T\ge0$. Let

$$u:[0,T]\times\mathbb R\to\mathbb R$$

be $C^2$ in $t$ and $C^4$ in $x$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), $L$-periodic in $x$, and satisfy $u_{tt}=c^2u_{xx}$ on $[0,T]\times\mathbb R$; put

$$M:=\sup_{[0,T]\times\mathbb R}|\partial_x^4u|<+\infty,\qquad M_2:=\sup_{[0,T]\times\mathbb R}|\partial_x^2u|<+\infty .$$

Let $q:[0,T]\to\mathbb R^N$ be the (by (i), unique) solution of the cyclic spring-chain system of [[def-cm-cyclic-spring-chain]] with the sampled initial data $q_j(0)=u(0,ja)$, $q_j'(0)=u_t(0,ja)$, and put

$$e_j(t):=q_j(t)-u(t,ja),\qquad C:=\frac{c^2\sqrt L\,M}{12}.$$

Then:

Here smoothness on the closed time interval means restriction of a map defined on an open neighbourhood, with the indicated derivatives extending continuously to the interval. A chain solution on $[0,T]$ is the restriction of a solution on an open time interval containing $[0,T]$; the sampled derivative $q_j\prime(0)$ is the derivative of that solution. Thus derivatives remain defined when $T=0$. Uniqueness concerns the restricted state $(q,q\prime)$.

**(i)** the solution $q$ exists and is unique on $[0,T]$;

**(ii)** for every $t\in[0,T]$,

$$\|e(t)\|_a\le\frac{Ca^2t^2}{2},\qquad \|e'(t)\|_a\le Ca^2t ;$$

**(iii)** consequently $\max_j|e_j(t)|\le \tfrac12Ca^{3/2}t^2$ for $t\in[0,T]$, so the nodal error tends to $0$ uniformly as $a\to0$;

**(iv)** let $I_aq(t,\cdot)$ be the piecewise-linear function on $[0,L]$ that equals $q_j(t)$ at $x=ja$ and is extended $L$-periodically; then for the periodic extension of $u$,

$$\sup_{x\in[0,L]}\bigl|I_aq(t,x)-u(t,x)\bigr|\le\max_j|e_j(t)|+\frac{M_2a^2}{8}\qquad(0\le t\le T),$$

so the interpolated chain displacement converges to $u$ uniformly on $[0,T]\times[0,L]$ as $a\to0$.

## Facts & Assumptions

**Given:** $L,c,N,a,T$; the smooth periodic solution $u$ with the bounds $M,M_2$; the sampled initial data.

[F1] Linear matrix ODEs with continuous coefficients have unique solutions on a compact interval ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]); a first-order system $z'=Az$ with constant $A$ is of this form, and its solutions are $z(t)=Y(t)z(0)$ for the matrix solution $Y$ with $Y(0)=I$ ([[def-first-order-ode-initial-value-problem-and-solution]], [[thm-algebra-of-derivatives]]).

[F2] Apply [[lem-cm-second-difference-remainder-bound]] to the one-variable function $x\mapsto u(t,x)$ at each $x=ja$. This gives $|\Delta_au(t,ja)-u_{xx}(t,ja)|\le Ma^2/12$ for every $j,t$.

[F3] Discrete summation by parts and the energy identity of [[lem-cm-discrete-periodic-summation-by-parts]]: for the chain perturbation $R$ defined below, $\frac{d}{dt}E_a=a\sum_jR_je_j'$ and $\bigl|\frac{d}{dt}E_a\bigr|\le\|R\|_a\sqrt{2E_a}$; the scaled Cauchy–Schwarz inequality is that item's part (b) ([[prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem]]).

[F4] Linear interpolation error: if $\varphi\in C^2$ on $[x_j,x_{j+1}]$ and $|\varphi''|\le M_2$ there, then the chord $\ell$ through the endpoint values satisfies $|\varphi(x)-\ell(x)|\le M_2a^2/8$. Put $g=\varphi-\ell$, so $g(x_j)=g(x_{j+1})=0$ and $|g''|\le M_2$. For an interior $x$, set $c:=g(x)/((x-x_j)(x-x_{j+1}))$ and $H(s):=g(s)-c(s-x_j)(s-x_{j+1})$. Then $H$ vanishes at $x_j,x,x_{j+1}$; Rolle's theorem twice gives $H''(\xi)=0$ for some $\xi\in(x_j,x_{j+1})$. Hence $g(x)=\tfrac12g''(\xi)(x-x_j)(x-x_{j+1})$, and $|(x-x_j)(x-x_{j+1})|\le a^2/4$ gives the stated bound. Endpoints are immediate ([[thm-rolle]], [[thm-ftc-first-part]], [[def-derivative]]).

[F5] Norms: $\|z\|_a^2=a\sum_jz_j^2$, so $\max_j|z_j|\le a^{-1/2}\|z\|_a$. For continuous $r:[0,t]\to\mathbb R^N$, $\|\int_0^t r(s)ds\|_a\le\int_0^t\|r(s)\|_a ds$: the scaled Cauchy--Schwarz inequality gives the triangle inequality for $\|\cdot\|_a$, so this bound holds for every Riemann sum and passes to the integral limit ([[def-cm-cyclic-spring-chain]], [[prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem]], [[thm-ftc-first-part]], [[thm-additivity-over-subintervals]]).

## Proof

**Proof technique:** direct; compare the chain to the sampled solution, bound the Taylor remainder by the fourth derivative, and integrate the energy identity.

1.1 Write the chain as the first-order system $z'=Bz$ on $\mathbb R^{2N}$ with $z=(q,p)$ and the constant matrix $B(q,p)=(p,\frac{c^2}{a^2}(q_{j+1}-2q_j+q_{j-1}))_j$. By [F1] applied to the matrix ODE with $C(t)=B$ on $[-1,T+1]$ and initial time $0$, the initial value problem $z'=Bz$, $z(0)=(q(0),q'(0))$ has a unique solution on $[0,T]$, and its first component is the unique solution $q$ of the chain equations with the sampled data. The solution is smooth on the larger interval by repeated differentiation of its constant-coefficient equation. Restricting to $[0,T]$ proves (i), including $T=0$; in that case all errors and energy at $0$ vanish by the sampled state and every bound is immediate. [given, F1, construct]

2.1 Put $u_j(t):=u(t,ja)$ and define $$R_j(t):=c^2\bigl(\Delta_au_j(t)-u_{xx}(t,ja)\bigr)=c^2\Delta_au_j(t)-u_{tt}(t,ja),$$ the last equality by $u_{tt}=c^2u_{xx}$. By [F2], $|R_j(t)|\le c^2Ma^2/12$ for every $j,t$, hence $$\|R(t)\|_a=\Bigl(a\sum_jR_j(t)^2\Bigr)^{1/2}\le\frac{c^2Ma^2}{12}\sqrt{aN}=Ca^2 .$$ Since $e_j=q_j-u_j$, the identities $u_j''=c^2(\Delta_au)_j-R_j$ and $q_j''=c^2(\Delta_aq)_j$ give $e_j''=c^2(\Delta_ae)_j+R_j$; moreover $e_j(0)=0$ and $e_j'(0)=0$ by the sampled initial data. [given, F2, step 1.1, algebra]

3.1 Put $E_a(t):=\tfrac12(\|e'(t)\|_a^2+c^2\|D_+e(t)\|_a^2)$, which is $\ge0$ with $E_a(0)=0$. By [F3] (the energy identity with the perturbation $R$ of step 2.1), $$\frac{d}{dt}\sqrt{2E_a(t)+\delta}=\frac{E_a'(t)}{\sqrt{2E_a(t)+\delta}}\le\frac{\|R(t)\|_a\sqrt{2E_a(t)}}{\sqrt{2E_a(t)+\delta}}\le\|R(t)\|_a\le Ca^2$$ for every $\delta>0$. Integrating from $0$ and letting $\delta\downarrow0$ gives $\sqrt{2E_a(t)}\le Ca^2t$; in particular $\|e'(t)\|_a\le Ca^2t$. Integrating $e(t)=e(0)+\int_0^te'(s)ds$ and using [F5] gives $\|e(t)\|_a\le\int_0^tCs a^2ds=\tfrac12Ca^2t^2$. This is (ii). [given, F3, F5, step 2.1, algebra]

4.1 By [F5], $\max_j|e_j(t)|\le a^{-1/2}\|e(t)\|_a\le\tfrac12Ca^{3/2}t^2$, which is (iii). For (iv), fix $t\in[0,T]$ and $x=ja+s$ with $0\le s\le a$. The interpolant of the samples of $u$ satisfies the chord bound [F4] on $[ja,(j+1)a]$ with $\varphi=u(t,\cdot)$, and $|I_aq(t,x)-I_au(t,x)|\le\max_j|e_j(t)|$ because both interpolations are convex combinations of their nodal values; hence $$\sup_{x}\bigl|I_aq(t,x)-u(t,x)\bigr|\le\max_j|e_j(t)|+\frac{M_2a^2}{8}.$$ By (iii) the right-hand side tends to $0$ as $a\to0$ uniformly on $[0,T]$. [step 3.1, F4, F5, algebra] ∎

## Remarks

- The convergence is finite-time and uniform only for the stated smooth $L$-periodic regime; the rate is the nodal $O(a^{3/2})$ together with the interpolation error $O(a^2)$, and no uniform bound on $\|q\|_\infty$ is claimed beyond what the estimates give. Rough data, non-periodic boundary conditions and nonlinear chains are separate problems.

- The mechanical interpretation $m=\rho a$, $k=T_{\mathrm{tension}}/a$, $c^2=k a^2/m$ is a model reading of the parameters; the theorem compares the two mathematical evolutions and asserts no physical identification of the chain with any material string.

- The estimate is derived from the energy identity, so it requires only the perturbation $R$ to be continuous and the chain to solve exactly the linear system; no numerical integrator error is analyzed, and floating-point roundoff is not part of the statement.
