---
id: thm-nearest-neighbor-cfl-domain-condition
kind: theorem
title: The nearest-neighbor CFL condition is necessary but not sufficient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-periodic-one-way-advection-schemes, def-uniform-grid-and-difference-operators, def-operator-norm, lem-periodic-advection-amplification-symbols, def-linear-transport-equation-and-its-characteristic-flow, cor-mean-value-theorem, thm-induction-principle, lem-schwartz-cutoffs-from-the-standard-smooth-step, lem-integer-part, def-test-function-space-d-of-an-open-set, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.6, PDF pp. 99–104: the finite-stencil inflow scheme and its CFL/domain-of-dependence discussion."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete PDF pp. 1–2: characteristic direction, the upwind CFL condition, and centered instability."
---

## Statement

Fix $a,T>0$. The following two claims hold.

**Strict domain-of-dependence obstruction.** Suppose $h_m,k_m\to0$ and along a subsequence $ak_m/h_m\ge1+\varepsilon$ for some fixed $\varepsilon>0$, and put $R=aT\varepsilon/(4(1+\varepsilon))$. Consider any homogeneous linear nearest-neighbor explicit update on the infinite grid whose value after $n$ steps depends only on initial indices $j-n,\ldots,j+n$. Fix a real-valued datum $u_0\in C_c^\infty((-R,R);\mathbb R)$ with $u_0(0)=1$ and initialize each mesh by $U_j^0=u_0(jh_m)$. The exact samples $u_0(jh_m-at_m)$ and numerical values fail to converge in the sampled maximum error
$$\sup_{j\in\mathbb Z}|U_j^{n_m}-u_0(jh_m-at_m)|$$
at $t_m=n_mk_m\to T$, where $n_m=\lfloor T/k_m\rfloor$.

**CFL insufficiency for centered advection.** For any fixed period $P>0$, set $N_q=4q$, $h_q=P/N_q$, and $k_q=h_q/(2a)$ for $q\ge1$. Let $Q_q$ be the centered advection update on this periodic grid and $r_q=\lfloor T/k_q\rfloor$. Then $0<ak_q/h_q=1/2<1$, but
$$\max_{\substack{r\in\mathbb N\\0\le r k_q\le T}}\|Q_q^r\|_{2,h_q\to2,h_q}\ge\|Q_q^{r_q}\|_{2,h_q\to2,h_q}\ge(\sqrt5/2)^{r_q}\longrightarrow\infty.$$
Thus a fixed strict violation of $ak/h\le1$ prevents convergence for the nearest-neighbor family, while the domain-of-dependence bound does not suffice for uniform finite-time power stability of every periodic nearest-neighbor scheme.

## Facts & Assumptions

**Given:** Fixed $a,T>0$; for the first claim, an infinite-grid homogeneous linear nearest-neighbor update and a mesh subsequence with $ak/h\ge1+\varepsilon$; and, independently, for the second claim, the fixed-period centered periodic family with $N_q=4q$.

[F1] The centered advection stencil in [[def-periodic-one-way-advection-schemes]] is a homogeneous explicit nearest-neighbor update.

[F2] For a real-valued $C^1$ function on an open subset of $\mathbb R^2$, the first coordinate partial derivatives exist and are continuous; a classical solution on a neighborhood of a characteristic segment is continuous on that segment ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] Finite induction on the natural-number step count is valid ([[thm-induction-principle]]).

[F4] There is a real cutoff $\chi\in C_c^\infty(\mathbb R)$ with $\chi=1$ for $|x|\le1$ and $\chi=0$ for $|x|\ge2$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F5] For constant velocity $a$, the characteristic ODE is $X'(s)=a$ with terminal value $X(t)=x$, and the transport equation is $u_t+a u_x=0$ ([[def-linear-transport-equation-and-its-characteristic-flow]]).

[F6] A real differentiable function with zero derivative on an interval is constant there, by the mean value theorem ([[cor-mean-value-theorem]]).

[F7] For every real $y$ there is a unique integer $m=\lfloor y\rfloor$ with $m\le y<m+1$ ([[lem-integer-part]]).

[F8] For an open interval $I$, $C_c^\infty(I;\mathbb C)$ consists of smooth functions whose support is a compact subset of $I$; its real-valued functions form the real test-function subspace ([[def-test-function-space-d-of-an-open-set]]).

[F9] On a periodic grid, the centered advection factor is $g_{\rm centered}=1-i\nu S_\ell$, where $z_\ell=e^{2\pi i\ell/N}$ and $S_\ell=\operatorname{Im}z_\ell$; the modes form an orthogonal basis ([[lem-periodic-advection-amplification-symbols]]).

[F10] The operator norm is the supremum of $\|Qv\|$ over the unit ball in the given norm ([[def-operator-norm]]).

[F11] The periodic grid has indices modulo $N$ and norm $\|v\|_{2,h}^2=h\sum_{j=0}^{N-1}|v_j|^2$ ([[def-uniform-grid-and-difference-operators]]).

## Proof

1.1 Put $R=aT\varepsilon/(4(1+\varepsilon))$ and take $\chi$ from [F4]. Set $u_0(x)=\chi(3x/R)$. Then $u_0$ is smooth, equals $1$ at zero, and is supported in $[-2R/3,2R/3]$, a compact subset of $(-R,R)$; by [F8] it is an admissible real-valued datum. [given, F4, F8, algebra]

1.2 By finite induction [F3], the value at index $j$ after zero steps depends only on $j$. If every value after $n$ steps depends only on initial indices $j-n,\ldots,j+n$, then the next update reads indices $j-1,j,j+1$ at time $n$, whose initial dependence intervals have union $[j-(n+1),j+(n+1)]$. Thus after $n$ steps only initial indices $j-n,\ldots,j+n$ can affect the value. [given, F3, induction]

2.1 Along the violating subsequence put $n_m=\lfloor T/k_m\rfloor$ and $j_m=\lfloor aT/h_m+1/2\rfloor$. By [F7], $j_m\le aT/h_m+1/2<j_m+1$, so $|j_mh_m-aT|\le h_m/2$. Since $n_mh_m\le T h_m/k_m\le aT/(1+\varepsilon)$, the left edge of the numerical dependence interval obeys $$ j_mh_m-n_mh_m\ge\frac{aT\varepsilon}{1+\varepsilon}-\frac{h_m}{2}. $$ For all sufficiently large $m$, this exceeds $R$. Hence every sampled initial value on which $U_{j_m}^{n_m}$ depends is zero, so $U_{j_m}^{n_m}=0$. [given, F7, step 1.1, step 1.2, algebra]

3.1 The constant-velocity characteristic is $X(s;t,x)=x+a(s-t)$: it has derivative $a$ and terminal value $x$, and any other solution agrees by [F6] applied to its difference from $X$.
The explicit function $u^*(y,s)=u_0(y-as)$ has partial derivatives $u^*_y=u_0'(y-as)$ and $u^*_s=-a u_0'(y-as)$ by one-variable difference quotients, so it solves $u_t+a u_x=0$ with initial data $u_0$.
To verify uniqueness, let $u$ be any classical solution on an open neighborhood of this characteristic segment with the same initial data, fix $(x,t)$, and set $v(s)=u(x+a(s-t),s)$ on $[0,t]$.
For interior $s$ and small nonzero $\delta$ whose coordinate segments remain in the solution domain, applying [F6] separately in the first and second coordinates gives $$\frac{v(s+\delta)-v(s)}{\delta}=a u_x(\xi_\delta,s+\delta)+u_t(x+a(s-t),\eta_\delta),$$ where $\xi_\delta$ lies between $x+a(s-t)$ and $x+a(s+\delta-t)$, and $\eta_\delta$ lies between $s$ and $s+\delta$.
As $\delta\to0$, these intermediate points tend to $(x+a(s-t),s)$, so continuity of the partials in [F2] yields $v'(s)=a u_x(x+a(s-t),s)+u_t(x+a(s-t),s)=0$.
Then [F6] makes $v$ constant, hence $u(x,t)=u_0(x-at)$. Since $0\le T-n_mk_m<k_m$ and $k_m\to0$, the exact characteristic foot $j_mh_m-a n_mk_m$ tends to $aT-aT=0$. By continuity and $u_0(0)=1$, the exact sample tends to $1$, while step 2.1 gives numerical value zero. Thus the sampled maximum error does not tend to zero. [F2, F5, F6, step 1.1, step 2.1, algebra]

4.1 For the separate centered-family claim, fix $P>0$ and use $N_q=4q$, $h_q=P/(4q)$, $k_q=h_q/(2a)$, and $r_q=\lfloor T/k_q\rfloor$. Then [F1] gives the centered update with $ak_q/h_q=1/2$, and the Fourier index $\ell=q$ is admissible with $z_\ell=\exp(2\pi i q/(4q))=i$. By [F9] its multiplier is $g=1-i/2$, so $|g|=\sqrt5/2>1$. Repeated application gives $Q_q^{r_q}\phi_q=g^{r_q}\phi_q$. The mode is nonzero, and the finite Fourier basis in [F9] diagonalizes $Q_q^{r_q}$ with finitely many finite multipliers, so this operator is bounded. By [F10] its norm is at least $|g|^{r_q}$. Since [F7] gives $r_q\ge T/k_q-1=8aTq/P-1\to\infty$, these norms are unbounded while all time levels satisfy $r_qk_q\le T$. Thus the domain-of-dependence bound is not sufficient for uniform finite-time power stability. [given, F1, F7, F9, F10, F11, algebra] ∎
