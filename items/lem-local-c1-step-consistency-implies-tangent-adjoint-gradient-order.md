---
id: lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order
kind: lemma
title: "Local C1 step consistency gives tangent, adjoint and gradient order"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-parameterized-finite-state-step-objective
  - lem-parameter-ode-flow-tangent-on-common-tube
  - lem-ode-adjoint-pairing-integration-by-parts
  - thm-continuous-ode-adjoint-gradient-formula
  - thm-discrete-adjoint-gradient-recursion
  - lem-discrete-one-step-error-recurrence-bound
  - thm-chain-rule-for-total-derivatives
  - thm-mean-value-inequality
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Method context for Runge-Kutta optimal-control derivatives; this local composition argument and its explicit constants are proved here, not quoted as an identical external theorem. No new source reading is claimed."
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
      locator: "Method context for adjoint derivative formulations; the stated local consistency composition and constants are proved here. This does not assert an identical theorem in the source or new source reading."
dependency_level: 4
---

## Statement

Let $p\ge1$ be an integer, $T>0$, $h=T/N\le h_0\le1$, and $t_n=nh$. The state dimension $d$ and parameter dimension $m$ are fixed. All vector norms are Euclidean and all matrix norms are their induced operator norms; gradients are columns.

Consider the continuous objective
$$J(\theta)=\phi(u(T,\theta),\theta)+\int_0^T\ell(t,u(t,\theta),\theta)\,dt,$$
and the actual finite graph
$$x_{n+1}=\Psi_n(x_n,\theta),\qquad J_h(\theta)=\phi_h(x_N,\theta)+\sum_{n=0}^{N-1}L_n(x_n,\theta).$$
Assume the hypotheses of the continuous flow-tangent and adjoint-gradient results hold on a common tube. Write $\Phi_n(x,\theta)$ for the exact flow from $t_n$ to $t_{n+1}$ and
$$K_n(x,\theta)=\int_{t_n}^{t_{n+1}}\ell(t,u(t;t_n,x,\theta),\theta)\,dt.$$
These exact maps and the actual numerical maps are $C^1$ on open neighborhoods of the admitted state and parameter sets. For every relevant $n$, all states $x_n,u(t_n)$ and the segment joining them belong to a convex admitted state set. All estimates below hold uniformly on those sets and a fixed parameter neighborhood, independently of $N,n$.

For $r=e,h$, define
$$A_n^e=D_x\Phi_n,\quad B_n^e=D_\theta\Phi_n,\quad c_n^e=D_xK_n^T,\quad d_n^e=D_\theta K_n^T,$$
$$A_n^h=D_x\Psi_n,\quad B_n^h=D_\theta\Psi_n,\quad c_n^h=D_xL_n^T,\quad d_n^h=D_\theta L_n^T.$$
Suppose constants $c_v,c_1,L,M,H\ge0$ satisfy, at each admitted $(x,\theta)$,
$$\|\Psi_n-\Phi_n\|\le c_vh^{p+1},$$
$$\|A_n^h-A_n^e\|,\ \|B_n^h-B_n^e\|,\ \|c_n^h-c_n^e\|,\ \|d_n^h-d_n^e\|\le c_1h^{p+1},$$
$$\|A_n^r\|\le1+Lh,\qquad \|B_n^r\|,\ \|c_n^r\|,\ \|d_n^r\|\le Mh.$$
Each of $A_n^e,B_n^e,c_n^e,d_n^e$ is Lipschitz in $x$, with constant at most $Hh$.

Let $S_0=D_\theta u(0,\theta)$ and $S_0^h=D_\theta x_0(\theta)$. Assume
$$\|x_0-u(0)\|\le c_0h^p,\qquad \|S_0^h-S_0\|\le c_{s0}h^p,\qquad \|S_0\|\le M_0.$$
The terminal costs are $C^1$. The exact columns $D_x\phi^T,D_\theta\phi^T$ have norm at most $M_\phi$ and are Lipschitz in $x$ with constant $H_\phi$; at the same admitted $(x,\theta)$,
$$\|D_x\phi_h^T-D_x\phi^T\|,\ \|D_\theta\phi_h^T-D_\theta\phi^T\|\le C_\phi h^p.$$
No terminal value-error hypothesis is needed for the gradient conclusion.

Let $S_n^h=D_\theta x_n$, and let $p_n^h$ be the exact discrete adjoint of this numerical graph. Let $S(t)=D_\theta u(t)$ and let $p(t)$ be the continuous adjoint with terminal value $D_x\phi(u(T),\theta)^T$. Define
$$E=e^{LT},\quad X=E(c_0+Tc_v),\quad \overline S=E(M_0+TM),\quad \overline P=E(M_\phi+TM),$$
$$R=c_1+HX,\quad C_S=E\{c_{s0}+TR(\overline S+1)\},\quad D=C_\phi+H_\phi X,$$
$$C_P=E\{D+TR(\overline P+1)\},$$
$$C_G=D+c_{s0}\overline P+(M_0+c_{s0})C_P+T\{R(1+\overline P)+MC_P\}.$$
Then
$$\max_n\|x_n-u(t_n)\|\le Xh^p,\qquad \max_n\|S_n^h-S(t_n)\|\le C_Sh^p,$$
$$\max_n\|p_n^h-p(t_n)\|\le C_Ph^p,\qquad \|\nabla J_h-\nabla J\|\le C_Gh^p.$$
These conclusions assume local value and first-derivative consistency, rather than a global adjoint-error estimate. They require no representation by nonnegative quadrature weights.

## Facts & Assumptions

**Given:** The hypotheses and data in the Statement.

[F1] [[lem-parameter-ode-flow-tangent-on-common-tube]], [[thm-chain-rule-for-total-derivatives]], [[thm-mean-value-inequality]]: The common-tube flow result gives the actual parameter derivative and its variational equation. The chain rule gives derivatives of compositions of exact or numerical step maps. The vector mean value inequality bounds the endpoint difference along an admitted segment by a uniform bound on the derivative of its segment parameterization; the zero-dimensional endpoint difference is zero.

[F2] [[lem-ode-adjoint-pairing-integration-by-parts]], [[thm-continuous-ode-adjoint-gradient-formula]], [[thm-discrete-adjoint-gradient-recursion]]: The continuous adjoint pairing identity integrates on each subinterval. The continuous gradient formula and the finite-graph reverse recursion use column gradients.

[F3] [[lem-discrete-one-step-error-recurrence-bound]]: A recurrence $e_{n+1}\le(1+Lh)e_n+Ch^{p+1}$ has a uniform order-$p$ bound. The looser bound $e^{LT}(C_0+TC)h^p$ is valid also when $L=0$. The same argument applies after reversing a finite index sequence.

[A1] All domains, differentiability, tube, local consistency, stability, Lipschitz, initial-data and terminal-derivative assumptions in the Statement hold uniformly.

## Proof

1.1 The exact objective is also the finite graph with maps $\Phi_n$, costs $K_n$, initial state $u(0)$ and terminal cost $\phi$: the intervals partition the integral. Differentiability of $K_n$ follows by differentiating its integral using the common-tube flow derivative and the uniform continuous derivative bounds. In particular the initial-state variational matrix $V$ on interval $n$ has $V(t_n)=I$, $V'=f_uV$, and $$c_n^e=\int_{t_n}^{t_{n+1}}V(t)^T\ell_u(t)^T\,dt.$$ The pairing identity gives $$p(t_n)=c_n^e(u(t_n),\theta)+A_n^e(u(t_n),\theta)^Tp(t_{n+1}).$$ Thus the exact-flow graph adjoint equals the continuous adjoint at every node. Its tangent and gradient are also those of the exact continuous objective. [F1, F2, A1]

1.2 Write $u_n=u(t_n)$ and $e_n=\|x_n-u_n\|$. For $d\ge1$, parameterize the admitted segment by $s\mapsto u_n+s(x_n-u_n)$, $0\le s\le1$. The chain rule and the derivative bound for $\Psi_n$ bound the derivative of its composition with this segment by $(1+Lh)\|x_n-u_n\|$; the vector mean value inequality [F1] therefore gives its endpoint Lipschitz bound with constant $1+Lh$. For $d=0$, the state difference and both endpoint values lie in the zero vector space, so the same bound is immediate. Consequently $$e_{n+1}\le(1+Lh)e_n+c_vh^{p+1}.$$ By [F3], $e_n\le Xh^p$. [A1, F1, F3]

2.1 The exact tangent and adjoint recurrences give $$\|S_{n+1}\|\le(1+Lh)\|S_n\|+Mh,\qquad \|p(t_n)\|\le(1+Lh)\|p(t_{n+1})\|+Mh.$$ Expanding these finite recurrences and using $(1+Lh)^k\le e^{LT}$ shows $\|S_n\|\le\overline S$ and $\|p(t_n)\|\le\overline P$. These bounds include $L=0$. For any one of the four derivative maps, comparison at numerical and exact nodes gives $$\|F_n^h(x_n,\theta)-F_n^e(u_n,\theta)\|\le c_1h^{p+1}+Hh e_n\le Rh^{p+1}.$$ [A1, step 1.2, F3]

3.1 The actual differentiated numerical graph satisfies $S_{n+1}^h=A_n^h(x_n)S_n^h+B_n^h(x_n)$. Subtract the exact recurrence and split the matrix product using $A_n^h(S_n^h-S_n)+(A_n^h-A_n^e)S_n$. Hence $$\|S_{n+1}^h-S_{n+1}\|\le(1+Lh)\|S_n^h-S_n\|+R(\overline S+1)h^{p+1}.$$ The initial derivative bound and [F3] yield $C_Sh^p$. [F1, A1, step 2.1]

3.2 At the terminal node, the difference of adjoint seeds is at most $Dh^p$. Subtract the two backward recurrences, splitting $A_h^Tp_h-A_e^Tp_e=A_h^T(p_h-p_e)+(A_h-A_e)^Tp_e$. The Euclidean operator norm of a transpose equals that of the matrix. For every finite-dimensional Euclidean vector $v$, Cauchy–Schwarz gives $\|v\|=\sup_{\|w\|\le1}|w^Tv|$: if $v\ne0$, equality is attained at $w=v/\|v\|$, while for $v=0$ both sides vanish, including in dimension zero. Applying this closed-unit-ball formula to both sides of the pairing gives the transpose identity in all finite dimensions. Therefore $$\|p_n^h-p(t_n)\|\le(1+Lh)\|p_{n+1}^h-p(t_{n+1})\|+R(\overline P+1)h^{p+1}.$$ Reverse the indices and apply [F3]. This gives $C_Ph^p$. [F2, A1, step 2.1]

4.1 Apply the finite-graph gradient formula to both graphs: $$\nabla J_h=D_\theta\phi_h(x_N)^T+(S_0^h)^Tp_0^h+\sum_{n<N}\{d_n^h(x_n)+(B_n^h(x_n))^Tp_{n+1}^h\},$$ $$\nabla J=D_\theta\phi(u_N)^T+S_0^Tp(0)+\sum_{n<N}\{d_n^e(u_n)+(B_n^e(u_n))^Tp(t_{n+1})\}.$$ The terminal direct-derivative difference is at most $Dh^p$. The initial contribution is bounded by $$\{c_{s0}\overline P+(M_0+c_{s0})C_P\}h^p,$$ since $h\le1$ implies $\|S_0^h\|\le M_0+c_{s0}$. Each running difference is bounded by $$\{R+R\overline P+MC_P\}h^{p+1},$$ using $B_h^T(p_h-p)+(B_h-B_e)^Tp$. Summing $N$ terms and using $Nh=T$ proves the stated $C_G$ bound. [F2, step 1.1, step 2.1, step 3.2, A1] ∎
