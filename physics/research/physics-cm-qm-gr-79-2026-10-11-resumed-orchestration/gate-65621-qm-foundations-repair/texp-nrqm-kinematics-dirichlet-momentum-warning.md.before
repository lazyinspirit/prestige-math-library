---
id: texp-nrqm-kinematics-dirichlet-momentum-warning
aliases: [nrqm-kinematics-dirichlet-momentum-warning]
kind: thought-experiment
domain: physics
title: "A confined model with Dirichlet walls: the naive interval momentum is not an observable"
status: draft
origin: session
dependency_level: 7
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-nrqm-intervals-hilbert-sobolev-spaces, def-nrqm-observables-framework-observable-and-outcome-law, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-weak-derivative-of-a-locally-integrable-function, lem-nrqm-intervals-integration-by-parts, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, thm-nrqm-intervals-twisted-periodic-momentum-domain]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  thm-nrqm-intervals-twisted-periodic-momentum-domain: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1, printed pages 181-188 (PDF pages 193-200): Sturm-Liouville operators, the symmetric operator A_0 = tau on D(tau) intersect AC_c(I), the computation of its closure and adjoint via the boundary (Wronskian) form, and the parametrization of self-adjoint boundary conditions including the Dirichlet condition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.2 printed pages 202-216 (PDF pages 217-231), Theorem 8.8 printed page 212 (PDF page 227) and Corollary 8.10 printed page 215 (PDF page 230): the Sobolev space W^{1,p}(I), the bounded/continuous representative and the integration-by-parts formula; Section 8.6 printed pages 231-232 (PDF pages 246-247), Theorem 8.22: Dirichlet eigenfunction expansion and self-adjointness of the associated solution operator for a second-order operator (contrast case)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
physical_scope: "A conditional warning about a hypothetical confined-model extension of the massive-particle kinematics: if a model confines a spinless particle to an interval and declares the formal momentum -i hbar d/dx on the Dirichlet domain, then that operator is symmetric but not self-adjoint and hence is not an assigned sharp observable of the observable and probability postulate; no self-adjoint extension keeps the Dirichlet domain, and the Dirichlet eigenfunctions are not momentum eigenfunctions of any such extension. The item asserts no experiment, no apparatus realization and no claim that confinement models are physically realized; it excludes any assertion about which self-adjoint realization, if any, describes a laboratory device."
verification:
  precheck: pass
---
## Statement

Adopt the observable and probability postulate P2 in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]] and the
kinematics and massive-particle model postulate P5
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), and
assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Consider the following
hypothetical confined-model extension of the kinematics: a spinless particle
of mass $m>0$ is restricted to an interval $(0,L)$ of length $0<L<\infty$ in
one spatial direction, with Hilbert space $L^{2}(0,L;\mathbb C)$, and the
model declares its momentum to be the formal differential expression
$$T:=-i\hbar D,\qquad D(T):=\bigl\{u\in H^{1}(0,L;\mathbb C):\ u^{*}(0)=u^{*}(L)=0\bigr\},$$
with $H^{1}$ and the continuous trace $u^{*}$ as in
[[def-nrqm-intervals-hilbert-sobolev-spaces]]. Then, in that hypothetical
model:

(a) $T$ is densely defined and symmetric, but not self-adjoint; its adjoint is
$$T^{*}=-i\hbar D,\qquad D(T^{*})=H^{1}(0,L;\mathbb C),$$
without boundary condition;

(b) no self-adjoint extension $S\supseteq T$ has domain contained in the
Dirichlet class $D(T)$: there is no self-adjoint realization of the formal
momentum on $(0,L)$ that keeps the Dirichlet condition on its domain;

(c) for every self-adjoint extension $S\supseteq T$ and every $n\ge1$, the
normalized Dirichlet function $u_{n}(x)=\sqrt{2/L}\,\sin(n\pi x/L)$ lies in
$D(S)$ but is not an eigenvector of $S$; consequently a momentum
quantization read off from the Dirichlet eigenfunctions is not a statement
about any self-adjoint realization of the interval momentum;

(d) therefore $T$ is not an assigned sharp observable of the model in the
sense of P2, and no outcome law of a momentum observable of the confined
model exists until the model declares a self-adjoint realization of its
momentum. An explicit family of self-adjoint realizations of the same formal
expression is the twisted-periodic family $P_{\theta}$, $\theta\in[0,2\pi)$,
of [[thm-nrqm-intervals-twisted-periodic-momentum-domain]], whose domains
impose $u(L)=e^{i\theta}u(0)$ rather than Dirichlet conditions; nothing here
claims that any member of that family, or any other realization, describes a
laboratory apparatus.

## Facts & Assumptions

**Given:** The postulates P2 and P5 read as above; the Axiom of Countable Choice and the Axiom of Choice; $0<L<\infty$; the operator $T$ of the statement; classes $u,v\in H^{1}(0,L;\mathbb C)$; a self-adjoint extension $S$ of $T$; an integer $n\ge1$; the Dirichlet function $u_{n}$.

[F1] **Interval Sobolev space and integration by parts.** $H^{1}(0,L)$ is the space of $L^{2}$ classes with an $L^{2}$ weak derivative; each class has a continuous representative, its trace $u^{*}$ is defined at the endpoints, and $-\int_{0}^{L}u\,\overline{v'} =u^{*}(0)\overline{v^{*}(0)}-u^{*}(L)\overline{v^{*}(L)} \int_{0}^{L}u'\,\overline{v}$ for all $u,v\in H^{1}(0,L)$; the test classes $C_{c}^{\infty}(0,L)$ lie in every Dirichlet class and are dense in $L^{2}$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]], [[lem-nrqm-intervals-integration-by-parts]]). In particular $D(T)\supseteq C_{c}^{\infty}(0,L)$ is dense in $L^{2}(0,L;\mathbb C)$ and $D(T)$ is a linear subspace of $H^{1}$.

[F2] **Adjoints and self-adjointness.** A densely defined operator $B$ is symmetric when $\langle Bu,v\rangle=\langle u,Bv\rangle$ for all $u,v\in D(B)$; its adjoint $B^{*}$ has domain consisting of the $v$ for which $u\mapsto\langle Bu,v\rangle$ is bounded on $D(B)$, and $B$ is self-adjoint when $B^{*}=B$ including domains; a self-adjoint operator has no proper symmetric extension ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F3] **Assigned observables are self-adjoint.** An assigned sharp observable of the framework is a pair of a densely defined self-adjoint operator and a declared unit; a symmetric formal differential expression on a smaller domain does not by itself supply an assigned observable ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a)).

[F4] **Twisted-periodic realizations.** For each $\theta\in[0,2\pi)$ the operator $P_{\theta}=-iD$ with domain $D(P_{\theta})=\{u\in H^{1}(0,L):u^{*}(L)=e^{i\theta}u^{*}(0)\}$ is densely defined, symmetric and self-adjoint ([[thm-nrqm-intervals-twisted-periodic-momentum-domain]] clause (a)).

## Proof

**Proof technique:** direct; compute the adjoint of the Dirichlet momentum by integration by parts, show that no self-adjoint extension can keep the Dirichlet domain, test the Dirichlet functions against an arbitrary self-adjoint extension, and read the observability conclusion off the self-adjointness requirement of the observable postulate.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Density and symmetry] $D(T)$ contains $C_{c}^{\infty}(0,L)$, which is dense in $L^{2}$ [F1]; hence $T$ is densely defined, and it is linear on the linear subspace $D(T)$ [F1]. For $u,v\in D(T)$, the integration-by-parts identity [F1] gives $\langle Tu,v\rangle-\langle u,Tv\rangle =-i\hbar\Bigl(u^{*}(0)\overline{v^{*}(0)}-u^{*}(L)\overline{v^{*}(L)}\Bigr)=0,$ because both traces of both functions vanish. Hence $T$ is symmetric. [F1, algebra]

2.1 [The adjoint] Let $v\in H^{1}(0,L)$. For every $u\in D(T)$, [F1] gives $\langle Tu,v\rangle=-i\hbar\int_{0}^{L}Du\,\overline{v} =-i\hbar\bigl[u^{*}\overline{v^{*}}\bigr]_{0}^{L} +\int_{0}^{L}u\,\overline{-i\hbar Dv} =\langle u,-i\hbar Dv\rangle$, since $u^{*}$ vanishes at both endpoints; so $u\mapsto\langle Tu,v\rangle$ is the restriction of a bounded functional and $v\in D(T^{*})$ with $T^{*}v=-i\hbar Dv$ [F2]. Conversely, if $v\in D(T^{*})$, testing the identity $\langle Tu,v\rangle=\langle u,T^{*}v\rangle$ against $u\in C_{c}^{\infty}(0,L)\subseteq D(T)$ shows that the distribution $-i\hbar Dv$ equals the $L^{2}$ class $T^{*}v$; hence $v$ has an $L^{2}$ weak derivative, that is $v\in H^{1}(0,L)$, and $T^{*}v=-i\hbar Dv$. Thus $D(T^{*})=H^{1}(0,L)$. The constant class $1$ lies in $H^{1}(0,L)$ with $1^{*}(0)=1\ne0$, so $D(T^{*})\ne D(T)$ and $T$ is not self-adjoint. This proves (a). [step 1.1, F1, F2, algebra]

2.2 [Dirichlet functions are not momentum eigenvectors] Fix $n\ge1$ and put $u_{n}(x):=\sqrt{2/L}\sin(n\pi x/L)$, a unit class in $H^{1}(0,L)$ with $u_{n}^{*}(0)=u_{n}^{*}(L)=0$, so $u_{n}\in D(T)$ and its weak derivative is the classical derivative $u_{n}'(x)=\sqrt{2/L}\,(n\pi/L)\cos(n\pi x/L)$ [F1]. Let $S\supseteq T$ be any self-adjoint extension. Then $u_{n}\in D(S)$ and $Su_{n}=Tu_{n}=-i\hbar u_{n}' =-i\hbar\sqrt{2/L}\,\frac{n\pi}{L}\cos(n\pi x/L).$ Suppose $Su_{n}=\lambda u_{n}$ for some $\lambda\in\mathbb R$; then the continuous functions $\cos(n\pi x/L)$ and $\sin(n\pi x/L)$ would be proportional on $[0,L]$. At $x=0$ one has $\sin0=0$ and $\cos0=1$, so proportionality would force the sine multiple to vanish identically, a contradiction. Hence $u_{n}$ is not an eigenvector of $S$, for any self-adjoint extension $S$. This proves (c). [step 1.1, F1, algebra]

3.1 [No Dirichlet self-adjoint extension] Let $S\supseteq T$ be self-adjoint with $D(S)\subseteq D(T)$. Since $T\subseteq S$, one has $D(T)\subseteq D(S)$; with the assumed inclusion this gives $D(S)=D(T)$, and since $S$ agrees with $T$ on $D(T)$, the operators coincide: $S=T$. But then $T$ would be self-adjoint, contradicting step 2.1. Hence no such $S$ exists, which is (b). Equivalently, any self-adjoint extension of $T$ must contain a vector of $H^{1}(0,L)$ whose trace at $0$ or $L$ is nonzero. [step 1.1, step 2.1, F2, algebra]

4.1 [Observability and scope] By [F3], assigned sharp observables of the model are densely defined self-adjoint operators; by steps 1.1 and 2.1 the Dirichlet momentum $T$ is densely defined and symmetric but not self-adjoint, so $T$ is not an assigned sharp observable of the hypothetical confined model, and no outcome law of the confined momentum exists until a self-adjoint realization is declared. [F4] provides an explicit family $P_{\theta}$ of self-adjoint realizations of the same formal expression $-iD$, distinct from the Dirichlet operator; the statement neither selects a member of that family nor asserts any laboratory realization, and it makes no claim about the framework's own momentum $P$ of P5, which is defined on the full line and is not obtained by restricting $T$. This proves (d). [step 1.1, step 2.1, step 3.1, step 2.2, F3, F4] ∎

## Remarks

- **The obstruction is the boundary form.** Symmetry of $-i\hbar D$ on a
  domain imposes $u^{*}(0)\overline{v^{*}(0)}=u^{*}(L)\overline{v^{*}(L)}$ for
  all pairs in the domain; the Dirichlet domain satisfies this only in the
  degenerate way, and enlarging it to any self-adjoint domain necessarily
  relates the endpoint values, as the twisted-periodic family illustrates
  ([[thm-nrqm-intervals-twisted-periodic-momentum-domain]]).
- **What is not claimed.** The thought experiment does not assert that
  confined models are physically realized, does not compare models with data,
  and does not claim that box energy levels lack a self-adjoint energy
  realization; the Dirichlet Laplacian is a self-adjoint energy operator, and
  the warning concerns the momentum observable only.
