---
id: ex-nrqm-intervals-contacts-dirichlet-momentum-failure
aliases: [nrqm-intervals-and-contacts-example-dirichlet-momentum-failure]
kind: example
domain: mathematics
title: "Dirichlet momentum failure"
status: published
origin: pipeline
dependency_level: 5
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-integration-by-parts, thm-nrqm-intervals-sine-on-completeness, thm-nrqm-intervals-twisted-periodic-momentum-domain, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-complex-exponential, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  thm-nrqm-intervals-twisted-periodic-momentum-domain: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.6, example pp. 82-83, equations (2.108)-(2.110) (momentum extensions with phase-related endpoints); the adjoint and extension classification are proved locally"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.5-8.6 pp. 226-233 (boundary traces and self-adjointness of differential operators under boundary conditions)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Example

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$ and define on
$L^2(0,L;\mathbb C)$ the operator
$T:=-iD,\qquad D(T):=\{u\in H^1(0,L):u^*(0)=u^*(L)=0\},$
with $H^1$ and traces as in [[def-nrqm-intervals-hilbert-sobolev-spaces]].
Then:

(a) $T$ is densely defined and symmetric, but not self-adjoint; its adjoint
is
$T^*=-iD,\qquad D(T^*)=H^1(0,L),$
with no boundary condition;

(b) the deficiency vectors are explicit:
$\ker(T^*-i)=\mathbb C\,e^{-x},\qquad \ker(T^*+i)=\mathbb C\,e^{x},$
both one-dimensional, so the deficiency indices of $T$ are $(1,1)$;

(c) the self-adjoint extensions of $T$ are exactly the twisted-periodic
momentum operators $P_\theta$, $\theta\in[0,2\pi)$, of
[[thm-nrqm-intervals-twisted-periodic-momentum-domain]]:
$P_\theta=-iD,\qquad
D(P_\theta)=\{u\in H^1(0,L):u^*(L)=e^{i\theta}u^*(0)\};$
in particular no self-adjoint extension keeps the Dirichlet condition
$u^*(0)=u^*(L)=0$.

## Verification

**Given:** $0<L<\infty$; the operator $T=-iD$ with $D(T)=\{u\in H^1(0,L):u^*(0)=u^*(L)=0\}$; the twisted-periodic operators $P_\theta$ of [[thm-nrqm-intervals-twisted-periodic-momentum-domain]].

**Proof technique:** direct computation of the adjoint and of the boundary form.

[F1] The normalized sine system $(e_n)_{n\ge1}$ is complete in $L^2(0,L)$ ([[thm-nrqm-intervals-sine-on-completeness]]). Each sine has zero endpoint traces, so $e_n\in H^1_0(0,L)$ by [[lem-nrqm-intervals-integration-by-parts]] clause (b); by the definition $H^1_0(0,L)=\overline{C_c^\infty(0,L)}^{\|\cdot\|_{H^1}}$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]]), every finite sine sum is an $L^2$ limit of test functions because $\|\cdot\|_2\le\|\cdot\|_{H^1}$. Thus $C_c^\infty(0,L)$ is dense in $L^2$ and contained in $D(T)$. For $u,v\in H^1(0,L)$, $\int_0^Lu\overline{v'}=u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}-\int_0^Lu'\overline v$ ([[lem-nrqm-intervals-integration-by-parts]]).

[F2] A vector $v\in L^2$ lies in $D(T^*)$ exactly when $u\mapsto\langle Tu,v\rangle$ is bounded on $D(T)$; then $\langle Tu,v\rangle=\langle u,T^*v\rangle$ for all $u\in D(T)$; a self-adjoint operator has no proper symmetric extension ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F3] The equation $Du=cu$ on $(0,L)$ has the solutions $u(x)=Ae^{cx}$ ([[def-complex-exponential]] and uniqueness of solutions of a first-order linear ODE with constant coefficient).

1.1 [Density and symmetry] By [F1], $C_c^\infty(0,L)\subseteq D(T)$ and $C_c^\infty(0,L)$ is dense, so $T$ is densely defined. For $u,v\in D(T)$, [F1] gives $\langle Tu,v\rangle-\langle u,Tv\rangle =-i\bigl(u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}\bigr)=0,$ since both traces of both functions vanish. Hence $T$ is symmetric. [F1]

2.1 [The adjoint] Let $v\in H^1(0,L)$. For every $u\in D(T)$, [F1] and the vanishing of $u^*$ at the endpoints give $\langle Tu,v\rangle=\int_0^L(-iDu)\overline v =-i\bigl[u^*\overline{v^*}\bigr]_0^L+\int_0^Lu\overline{(-iDv)} =\langle u,-iDv\rangle .$ Hence $u\mapsto\langle Tu,v\rangle$ is the restriction to $D(T)$ of the bounded functional $\langle\,\cdot\,,-iDv\rangle$ on $L^2$, so $v\in D(T^*)$ and $T^*v=-iDv$ by [F2]. Conversely, if $v\in D(T^*)$, testing the identity $\langle Tu,v\rangle=\langle u,T^*v\rangle$ against $u\in C_c^\infty(0,L) \subseteq D(T)$ shows that $-iDv$ (as a distribution) equals the $L^2$ class $T^*v$; hence $Dv\in L^2$ and $v\in H^1(0,L)$. Thus $D(T^*)=H^1(0,L)$ and $T^*=-iD$. Since $H^1(0,L)\supsetneq D(T)$ (for instance the constant function $1$ lies in $H^1$ but $1^*(0)=1\ne0$), $T$ is not self-adjoint. This is (a). [step 1.1, F1, F2, algebra]

3.1 [Deficiency vectors] By step 2.1, $v\in\ker(T^*-i)$ means $v\in H^1(0,L)$ and $-iDv=iv$, i.e. $Dv=-v$; by [F3], $v(x)=Ae^{-x}$. Hence $\ker(T^*-i)=\mathbb Ce^{-x}$, one-dimensional; similarly $Dv=v$ gives $\ker(T^*+i)=\mathbb Ce^{x}$. This is (b). [step 2.1, F3]

4.1 [All self-adjoint extensions] Fix $\theta\in[0,2\pi)$. By [[thm-nrqm-intervals-twisted-periodic-momentum-domain]], $P_\theta$ is self-adjoint with $D(P_\theta)=\{u\in H^1:u^*(L)=e^{i\theta}u^*(0)\}$, and $P_\theta u=-iDu=T^*u$ for $u\in D(P_\theta)$; since $D(T)\subseteq D(P_\theta)$ ($0=e^{i\theta}\cdot0$), $P_\theta$ is a self-adjoint extension of $T$. Conversely, let $S$ be a self-adjoint extension of $T$, so $T\subseteq S$ and $S\subset T^*$ (a self-adjoint operator has no proper symmetric extension and $T^*$ is the maximal domain on which the action is $-iD$ by step 2.1); write $D_1:=D(S)$, a linear subspace with $D(T)\subseteq D_1\subseteq H^1(0,L)$. Since $S$ is symmetric, for all $u,v\in D_1$, $0=\langle Su,v\rangle-\langle u,Sv\rangle =-i\bigl(u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}\bigr).$ If every $u\in D_1$ had $u^*(0)=0$, then the identity would give $u^*(L)\overline{v^*(L)}=0$ for all $u,v\in D_1$, hence $u^*(L)=0$ for all $u$, so $D_1\subseteq D(T)$ and $S=T$, contradicting that $T$ is not self-adjoint. Choose $v\in D_1$ with $v^*(0)\ne0$; the identity for $u\in D_1$ and this fixed $v$ gives $u^*(L)=\lambda u^*(0)$ with $\lambda:=\overline{v^*(0)}/\overline{v^*(L)}$, and testing the identity with $u=v$ gives $|v^*(L)|=|v^*(0)|$, so $|\lambda|=1$ and $\lambda=e^{i\theta}$ for some $\theta\in[0,2\pi)$. Hence $D_1\subseteq D(P_\theta)$ and $S\subseteq P_\theta$. Both operators are self-adjoint, so by [F2] the inclusion cannot be proper: $S=P_\theta$. This is (c). [step 2.1, step 3.1, F2, algebra] ∎
