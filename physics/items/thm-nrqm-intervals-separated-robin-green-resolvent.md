---
id: thm-nrqm-intervals-separated-robin-green-resolvent
aliases: [nrqm-intervals-and-contacts-separated-robin-green-resolvent]
kind: theorem
domain: mathematics
title: "Green resolvent for separated Robin boundary conditions"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, lem-nrqm-intervals-integration-by-parts, thm-nrqm-intervals-sine-on-completeness, thm-nrqm-intervals-regular-ivp-parameter-series, thm-self-adjointness-range-criterion, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, lem-compositions-with-a-compact-operator-are-compact, cor-compact-domain-maps-are-uniformly-continuous, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-compact-linear-operator, def-bounded-linear-operator, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  thm-self-adjointness-range-criterion: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  cor-compact-domain-maps-are-uniformly-continuous: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.2, Lemma 9.7 pp. 188-189, equations (9.27)-(9.28), and Theorem 9.10 p. 192 (separated Green kernel and discrete spectral background)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (American Mathematical Society, Graduate Studies in Mathematics 140), Chapter 3 pp. 55-74 (variation of constants and Green functions for linear systems)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$, let $\alpha,\beta\in\mathbb R$,
let $V\in C([0,L];\mathbb R)$, and put
$D(A):=\{u\in H^2(0,L):u'^*(0)=\alpha u^*(0),\ u'^*(L)=\beta u^*(L)\},\qquad
Au:=-D^2u+Vu,$
with $H^2$, weak derivatives and traces as in
[[def-nrqm-intervals-hilbert-sobolev-spaces]] and
[[lem-nrqm-intervals-weak-derivative-ac-representative]]. Then:

(a) $D(A)$ is dense in $L^2(0,L;\mathbb C)$, $A$ is well defined and
symmetric, and $A$ is self-adjoint;

(b) for every $z\in\mathbb C\setminus\mathbb R$ there are unique $C^2$
solutions $u_a(\cdot,z)$ of $-u''+Vu=zu$ with
$u_a(0)=1$, $u_a'(0)=\alpha$, and $u_b(\cdot,z)$ with
$u_b(L)=1$, $u_b'(L)=\beta$; the Wronskian
$W(z):=u_a(x,z)u_b'(x,z)-u_a'(x,z)u_b(x,z)$
is independent of $x$ and $W(z)\ne0$;

(c) for $f\in L^2(0,L)$ the function
$u(x):=\int_0^LG_z(x,y)f(y)\,dy,\qquad
G_z(x,y):=-\frac{u_a(\min\{x,y\},z)\,u_b(\max\{x,y\},z)}{W(z)},$
lies in $H^2(0,L)$, satisfies the two Robin boundary conditions, and
$(A-z)u=f$. Consequently $(A-z)^{-1}f=u$, the resolvent is an integral
operator with continuous kernel $G_z$ on $[0,L]^2$, and $(A-z)^{-1}$ is a
compact operator for every $z$ in the resolvent set of $A$.

## Facts & Assumptions

**Given:** $L>0$; $\alpha,\beta\in\mathbb R$; real continuous $V$; the operator $A$ and its domain $D(A)$.

[F1] The sine system $(e_n)_{n\ge1}$ is a complete orthonormal family in $L^2(0,L)$ ([[thm-nrqm-intervals-sine-on-completeness]]). Each $e_n$ is in $H^1(0,L)$ with zero endpoint traces, so the characterization $H^1_0(0,L)=\{u\in H^1:u^*(0)=u^*(L)=0\}$ in [[lem-nrqm-intervals-integration-by-parts]] clause (b) gives $e_n\in H^1_0(0,L)$. By definition, $H^1_0(0,L)$ is the $H^1$-norm closure of $C_c^\infty(0,L)$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]]). To see $C_c^\infty(0,L)$ is dense in $L^2$, take $f\in L^2$ and $\varepsilon>0$, choose a finite sine sum $p$ with $\|f-p\|_2<\varepsilon/2$, and then choose $\varphi\in C_c^\infty(0,L)$ with $\|p-\varphi\|_{H^1}<\varepsilon/2$; since the $H^1$ norm dominates the $L^2$ norm, $\|f-\varphi\|_2<\varepsilon$. Thus $C_c^\infty(0,L)\subseteq D(A)$ is dense.

[F2] For the Wronskian of two solutions of the same equation, $(u_av_b'-u_a'v_b)'=u_av_b''-u_a''v_b=0$, so $W$ is constant; this is the standard reduction of order identity for the linear equation.

[F3] Range criterion: a densely defined symmetric operator $T$ is self-adjoint if and only if $\operatorname{ran}(T-z)=H$ for every $z\in\mathbb C\setminus\mathbb R$ ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F4] A continuous kernel $k$ on $[0,L]^2$ defines a bounded integral operator $T_kf(x)=\int_0^Lk(x,y)f(y)dy$ with $\|T_kf\|_2\le L\|k\|_\infty\|f\|_2$, and $T_k$ is compact: uniform continuity gives piecewise-constant kernels $k_N$ with $\|k-k_N\|_\infty\to0$, each $T_{k_N}$ has finite rank, finite-rank operators are compact, and compact operators are closed in the operator norm ([[cor-compact-domain-maps-are-uniformly-continuous]], [[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-compact-linear-operator]]); moreover a composite of a compact operator with a bounded operator, in either order, is compact ([[lem-compositions-with-a-compact-operator-are-compact]]).

## Proof

1.1 [Density, well-definedness, symmetry] $C_c^\infty(0,L)\subseteq D(A)$ because test functions have vanishing traces at $0$ and $L$, and $C_c^\infty(0,L)$ is dense in $L^2(0,L)$ by [F1], so $D(A)$ is dense. If $u\in D(A)$, then $D^2u$ and $Vu$ are $L^2$ classes, so $Au\in L^2$ is well defined and depends only on the class $u$; linearity is clear. For $u,v\in D(A)$, the first-order identity of [[lem-nrqm-intervals-integration-by-parts]] clause (a), applied to the pairs $(u',v)$ and $(v',u)$, gives $\langle Au,v\rangle-\langle u,Av\rangle =\bigl[u^*\overline{v'^*}-u'^*\overline{v^*}\bigr]_0^L =\Bigl(u(L)\overline{\beta v(L)}-\beta u(L)\overline{v(L)}\Bigr) -\Bigl(u(0)\overline{\alpha v(0)}-\alpha u(0)\overline{v(0)}\Bigr)=0,$ because both $u$ and $v$ satisfy the two boundary conditions and $\alpha,\beta$ are real. Hence $A$ is symmetric. [F1, given, algebra]

2.1 [The two solutions and the Wronskian] By [[thm-nrqm-intervals-regular-ivp-parameter-series]] the solution $u_a$ with data $(1,\alpha)$ at $0$ and the solution $u_b$ with data $(1,\beta)$ at $L$ exist uniquely. By [F2] $W$ is constant. If $W=0$, then $u_a,u_b$ are linearly dependent; since $u_a(0)=1\ne0$, $u_b=cu_a$ for some $c\ne0$, and the right boundary condition $u_b'(L)=\beta u_b(L)$ gives $u_a'(L)=\beta u_a(L)$, so $u_a\in D(A)$ and $Au_a=zu_a$ with $u_a\ne0$. A symmetric operator has only real eigenvalues ($\langle Au_a,u_a\rangle =z\|u_a\|^2$ equals its own conjugate by symmetry), so $z\in\mathbb R$, contradicting $z\notin\mathbb R$. Hence $W(z)\ne0$. [F1, F2, step 1.1]

3.1 [The Green kernel is well defined and inverts $A-z$] For $f\in L^2(0,L)$ put $a(x):=\int_0^xu_a(y)f(y)dy$ and $b(x):=\int_x^Lu_b(y)f(y)dy$. These functions are absolutely continuous with $a'=u_af$ and $b'=-u_bf$ almost everywhere. The kernel formula gives $u(x)=-(u_b(x)a(x)+u_a(x)b(x))/W$. Its derivative is $u'(x)=-(u_b'(x)a(x)+u_a'(x)b(x))/W$, since the two terms containing $f$ cancel. The latter expression is absolutely continuous and, using $u_a''=(V-z)u_a$, $u_b''=(V-z)u_b$ and $u_b'u_a-u_a'u_b=W$, its derivative is $u''=(V-z)u-f$ almost everywhere. Thus $u\in H^2(0,L)$ and $-u''+Vu-zu=f$. At zero, $u(0)=-W^{-1}\int_0^Lu_bf$ and $u'(0)=-\alpha W^{-1}\int_0^Lu_bf=\alpha u(0)$; at $L$, $u(L)=-W^{-1}\int_0^Lu_af$ and $u'(L)=-\beta W^{-1}\int_0^Lu_af=\beta u(L)$. Therefore $u\in D(A)$ and $(A-z)u=f$. [step 2.1, F1, algebra]

4.1 [Self-adjointness] Step 3.1 shows $\operatorname{ran}(A-z)=L^2(0,L)$ for every nonreal $z$ (in particular for $z=\pm i$); with the density and symmetry of step 1.1, the range criterion [F3] makes $A$ self-adjoint. [step 1.1, step 3.1, F3]

5.1 [Compactness] The kernel $G_z$ is continuous on the compact square $[0,L]^2$ (it is built from continuous functions, and the apparent singularity at $x=y$ is removable because $\min$ and $\max$ are continuous), hence bounded. By [F4] the resolvent $(A-z)^{-1}$ is compact for every nonreal $z$: the uniform-continuity approximation of $G_z$ by piecewise-constant kernels exhibits it as a norm limit of finite-rank integral operators. For an arbitrary $z$ in the resolvent set, the second resolvent identity $(A-z)^{-1}=(A-i)^{-1}+(z-i)(A-i)^{-1}(A-z)^{-1}$ (an identity of bounded operators on $L^2(0,L)$, obtained from $(A-i)^{-1}-(A-z)^{-1}=-(z-i)(A-i)^{-1}(A-z)^{-1}$) writes $(A-z)^{-1}=(A-i)^{-1}\bigl(I+(z-i)(A-z)^{-1}\bigr)$, a composite of a compact with a bounded operator, hence compact by [F4]. This proves (c). [step 3.1, step 4.1, F4] ∎
