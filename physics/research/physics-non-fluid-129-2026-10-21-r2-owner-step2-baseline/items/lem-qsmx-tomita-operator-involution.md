---
id: lem-qsmx-tomita-operator-involution
kind: lemma
title: Involution and polar identities for the Tomita operator
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: null
deps:
  - def-qsmx-von-neumann-algebra
  - def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint
  - lem-qsmx-closed-antilinear-polar-calculus
  - lem-qsmx-bicommutant-and-commutant-cyclicity
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint: mathematical-premise
  lem-qsmx-closed-antilinear-polar-calculus: mathematical-premise
  lem-qsmx-bicommutant-and-commutant-cyclicity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: F. Hiai, Concise lectures on selected topics of von Neumann algebras
      url: https://arxiv.org/pdf/2004.02383
      locator: §2.1, Lemma 2.1 and its proof, printed p. 11
    - title: Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory
      url: https://arxiv.org/pdf/1803.04993
      locator: §3.1, equations (3.1)–(3.19), printed pp. 18–20 (PDF pp. 19–21)
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space with inner product linear in its first argument, let $M\subseteq\mathcal B(H)$ be a concrete von Neumann algebra, and let $\Omega$ be a unit vector that is cyclic and separating for $M$. Define $S_0(x\Omega)=x^*\Omega$ on $M\Omega$ and $F_0(x'\Omega)=x'^*\Omega$ on $M'\Omega$. Let $S=\overline{S_0}$ and $F=S^*$. Then $S$ is a densely defined closed antilinear involution, its polar decomposition is $S=J\Delta^{1/2}$ with $J$ antiunitary and $\Delta$ positive self-adjoint and injective, and
$$J=J^*=J^{-1},\qquad J\Delta J=\Delta^{-1},\qquad J\Delta^{it}J=\Delta^{it}\ (t\in\mathbb R),\qquad F=J\Delta^{-1/2}=\Delta^{1/2}J,\qquad J\Omega=\Omega,\qquad \Delta\Omega=\Omega.$$

## Statement references

[[def-qsmx-von-neumann-algebra]]

[[def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint]]

[[lem-qsmx-closed-antilinear-polar-calculus]]

[[lem-qsmx-bicommutant-and-commutant-cyclicity]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a complex Hilbert space $H$, a concrete von Neumann algebra $M$, and a unit cyclic-separating vector $\Omega$.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The concrete algebra, commutant, inner-product convention, cyclic vectors, and separating vectors have the meanings in [[def-qsmx-von-neumann-algebra]].

[F2] For cyclic-separating data, $S_0(x\Omega)=x^*\Omega$ is well defined, densely defined, antilinear and closable, and its closure has an antilinear polar decomposition ([[lem-qsmx-closed-antilinear-polar-calculus]]).

[F3] The conjugate Hilbert space and antilinear adjoint satisfy $\langle Sx,y\rangle=\langle S^*y,x\rangle$ on their exact domains ([[def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint]]).

[F4] For a concrete von Neumann algebra, $\Omega$ is cyclic for $M'$ exactly when it is separating for $M$; applying the same result to $M'$ gives the reverse duality ([[lem-qsmx-bicommutant-and-commutant-cyclicity]], [[def-qsmx-von-neumann-algebra]]).

## Proof

**Given:** [A1], [F1]–[F4], and the cyclic-separating data in the Statement. For calculations matching the adjoint convention of [F3] and the cited modular proof, write $(u|v):=\langle v,u\rangle$; this inner product is linear in its second argument, and the vector state is $\omega(x)=(\Omega|x\Omega)=\langle x\Omega,\Omega\rangle$.

1.1 If $x\Omega=y\Omega$ for $x,y\in M$, then $(x-y)\Omega=0$ and separatingness gives $x=y$. Thus $S_0$ is well defined; it is antilinear by $(ax+by)^*=\bar a x^*+\bar b y^*$, and its domain is dense by cyclicity. The same reasoning makes $F_0$ well defined; [F4] makes $M'\Omega$ dense. Also $S_0^2(x\Omega)=x\Omega$ and $F_0^2(x'\Omega)=x'\Omega$. [F1, F4, given, algebra]

2.1 For $x\in M$ and $x'\in M'$, the adjoint identity and commutation give $$(x'\Omega|S_0x\Omega)=(x'\Omega|x^*\Omega)=(x\Omega|x'^*\Omega)=(x\Omega|F_0x'\Omega).$$ By [F3] this says $F_0\subseteq S_0^*$ and $S_0\subseteq F_0^*$. In particular $F_0$ is closable, and $S_0$ is closable also by [F2]. [F2, F3, step 1.1, algebra]

2.2 Let $\xi\in D(S)$ and choose $\xi_n\in M\Omega$ with $\xi_n\to\xi$ and $S_0\xi_n\to S\xi$, using the definition of graph closure. Since $S_0^2\xi_n=\xi_n$, the graph points $(S\xi_n,S(S\xi_n))=(S_0\xi_n,\xi_n)$ converge to $(S\xi,\xi)$. Closedness of $S$ implies $S\xi\in D(S)$ and $S^2\xi=\xi$. Hence $S$ is an involution, so it is injective and its range is the dense domain $D(S)$. [F2, step 1.1, algebra]

3.1 Apply the closed-antilinear polar result [F2] to $S$. Injectivity and dense range make its partial anti-isometry $J$ antiunitary. The inverse of $S=J\Delta^{1/2}$ is $\Delta^{-1/2}J^*=J^*(J\Delta^{-1/2}J^*)$, whose second factor is positive self-adjoint. Since $S^{-1}=S$, uniqueness of the polar decomposition gives $J=J^*$ and $\Delta^{1/2}=J\Delta^{-1/2}J$. Thus $J^2=I$ and $J\Delta J=\Delta^{-1}$. For antiunitary conjugation the functional-calculus rule is $Jf(\Delta)J=\overline f(J\Delta J)$. Taking $f(s)=s^{it}$ gives $J\Delta^{it}J=(\Delta^{-1})^{-it}=\Delta^{it}$, so $J$ commutes with every $\Delta^{it}$. [A1, F2, step 2.2, algebra]

4.1 Because $S$ is the graph closure of $S_0$, their adjoints agree: the adjoint identity for $S_0$ extends along convergent graph pairs to $S$, and restriction gives the converse. Hence $F=S^*=S_0^*$ and $F_0\subseteq F$. From $S=J\Delta^{1/2}$, the antilinear adjoint identity [F3] and self-adjointness of $\Delta^{1/2}$ give $F=\Delta^{1/2}J$. Functional calculus applied to $J\Delta J=\Delta^{-1}$ gives $\Delta^{1/2}J=J\Delta^{-1/2}$ on their common domain. [F3, step 2.1, step 3.1, algebra]

5.1 Since $S_0\Omega=F_0\Omega=\Omega$ and $F_0\subseteq F$, steps 3.1 and 4.1 give $\Delta^{1/2}\Omega=J\Omega=\Delta^{-1/2}\Omega$. For the spectral measure of $\Delta$, this equality has squared norm difference $\int_{(0,\infty)}|\lambda^{1/2}-\lambda^{-1/2}|^2\,d\mu_\Omega(\lambda)=0$. The integrand vanishes only at $\lambda=1$, so $\Delta\Omega=\Omega$ and then $J\Omega=\Omega$. [F2, F3, step 3.1, step 4.1, algebra] ∎
