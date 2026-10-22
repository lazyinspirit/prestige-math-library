---
id: thm-qsmx-tomita-takesaki
kind: theorem
title: Tomita modular automorphisms and the upper-strip KMS condition
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
physical_scope: null
deps:
  - def-qsmx-standard-modular-data
  - def-qsmx-von-neumann-algebra
  - lem-qsmx-tomita-operator-involution
  - def-qsmx-von-neumann-kms-state
  - lem-qsmx-modular-strip-analyticity
  - lem-qsmx-modular-unitary-strong-continuity
  - lem-qsmx-modular-resolvent-core
  - lem-qsmx-von-neumann-predual
  - lem-qsmx-trace-class-duality
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-standard-modular-data: mathematical-premise
  def-qsmx-von-neumann-algebra: mathematical-premise
  lem-qsmx-tomita-operator-involution: mathematical-premise
  def-qsmx-von-neumann-kms-state: mathematical-premise
  lem-qsmx-modular-strip-analyticity: mathematical-premise
  lem-qsmx-modular-unitary-strong-continuity: mathematical-premise
  lem-qsmx-modular-resolvent-core: mathematical-premise
  lem-qsmx-von-neumann-predual: mathematical-premise
  lem-qsmx-trace-class-duality: mathematical-premise
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
      locator: §2.1, Theorem 2.2, printed pp. 11 and 15–16; §2.2, Theorem 2.14, printed pp. 18–19
    - title: Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory
      url: https://arxiv.org/pdf/1803.04993
      locator: §3.1, equations (3.10)–(3.19), printed pp. 19–20 (PDF pp. 20–21)
---
## Statement

Assume the Axiom of Choice. Let $M\subseteq\mathcal B(H)$ be a concrete von Neumann algebra and $\Omega$ a unit cyclic-separating vector with standard modular data $(J,\Delta,\sigma_t)$ and vector state $\omega(x)=\langle x\Omega,\Omega\rangle$. Then $\sigma_t(x)=\Delta^{it}x\Delta^{-it}$ restricts to a one-parameter group of normal $*$-automorphisms of $M$ that is point-ultraweakly continuous, and $JMJ=M'$. The vector state $\omega$ is faithful and normal and is an upper-strip $(\alpha,1)$ KMS state, in the definition of the preceding item, for $\alpha_t=\sigma_{-t}$. This is a dimensionless W*-algebra KMS assertion; it does not assert norm continuity of $\sigma_t$ on all of $M$.

## Statement references

[[def-qsmx-standard-modular-data]]

[[def-qsmx-von-neumann-algebra]]

[[lem-qsmx-tomita-operator-involution]]

[[def-qsmx-von-neumann-kms-state]]

[[lem-qsmx-modular-resolvent-core]]

[[lem-qsmx-modular-strip-analyticity]]

[[lem-qsmx-modular-unitary-strong-continuity]]

[[lem-qsmx-von-neumann-predual]]

[[lem-qsmx-trace-class-duality]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, standard modular data for $M$ and $\Omega$, the vector functional $\omega$, and the quotient-trace-class predual of $M$.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] A concrete von Neumann algebra, its commutant, and its unit cyclic-separating vector are defined in [[def-qsmx-von-neumann-algebra]]. The standard modular data define $\sigma_t(x)=\Delta^{it}x\Delta^{-it}$, give $\Delta^{it}\Omega=\Omega$, and fix $\omega(x)=\langle x\Omega,\Omega\rangle$ ([[def-qsmx-standard-modular-data]], [[lem-qsmx-tomita-operator-involution]]).

[F2] The modular resolvent-core lemma proves $JMJ=M'$ and $\Delta^{it}M\Delta^{-it}=M$ for every real $t$ ([[lem-qsmx-modular-resolvent-core]]).

[F3] For every $x\in M$, $x\Omega\in D(\Delta^{1/2})$ and $\Delta^{1/2}x\Omega=Jx^*\Omega$, because $S=J\Delta^{1/2}$ extends $S_0$ ([[def-qsmx-standard-modular-data]], [[lem-qsmx-tomita-operator-involution]]).

[F4] For $\xi\in D(\Delta^{1/2})$, $z\mapsto\Delta^{-iz/2}\xi$ is bounded and continuous on $0\leq\operatorname{Im}z\leq1$ and norm-holomorphic inside ([[lem-qsmx-modular-strip-analyticity]]).

[F5] The trace-class quotient $Q$ is a predual of $M$, and vector functionals are normal ([[lem-qsmx-von-neumann-predual]]).

[F6] Finite-rank operators are dense in trace norm, and rank-one trace pairing gives every matrix coefficient as an ultraweakly continuous functional ([[lem-qsmx-trace-class-duality]]).

[F7] The upper-strip $(\alpha,\beta)$ KMS condition uses $F(t)=\omega(A\alpha_t(B))$ and $F(t+i\beta)=\omega(\alpha_t(B)A)$ ([[def-qsmx-von-neumann-kms-state]]).

[F8] For every $\xi\in H$, $t\mapsto\Delta^{it}\xi$ is norm-continuous ([[lem-qsmx-modular-unitary-strong-continuity]]).

## Proof

**Proof technique:** modular invariance and a spectral vector function give the two KMS boundaries.

**Given:** [A1], [F1]–[F8], $M$, $\Omega$, and $\omega$.

1.1 By [F2], $\sigma_t(M)=M$. Each $\sigma_t$ is conjugation by the unitary $\Delta^{it}$, so it is complex-linear, multiplicative, adjoint-preserving and bijective, with inverse $\sigma_{-t}$. The spectral calculus gives $\Delta^{i(s+t)}=\Delta^{is}\Delta^{it}$, hence $\sigma_s\sigma_t=\sigma_{s+t}$ and $\sigma_0=I$. To check normality, let $0\leq a_i\uparrow a$ be a bounded increasing net in $M$. Unitary conjugation is an order isomorphism of $\mathcal B(H)$: if $b$ bounds every $\Delta^{it}a_i\Delta^{-it}$, then $\Delta^{-it}b\Delta^{it}$ bounds every $a_i$, so $a\leq\Delta^{-it}b\Delta^{it}$ and $\Delta^{it}a\Delta^{-it}\leq b$. Thus $\Delta^{it}a_i\Delta^{-it}\uparrow\Delta^{it}a\Delta^{-it}$ in $\mathcal B(H)$. By [F2] the limit is in $M$, hence is also the supremum in $M$. By the definition in [F7], each restriction is a normal $*$-automorphism. [A1, F1, F2, F7, algebra]

1.2 For $A,B\in M$, both $A^*\Omega$ and $B\Omega$ lie in $D(\Delta^{1/2})$, because $Sx\Omega=x^*\Omega$ for $x\in M$ and $\|Sx\Omega\|=\|\Delta^{1/2}x\Omega\|$. Define $$F_{A,B}(z)=\bigl(\Delta^{i\overline z/2}A^*\Omega\,\big|\,\Delta^{-iz/2}B\Omega\bigr),$$ where $(u|v)=\langle v,u\rangle$ is linear in its second argument. By [F3], both vectors $A^*\Omega$ and $B\Omega$ belong to $D(\Delta^{1/2})$; [F4] then makes each vector factor bounded and continuous on the closed strip. The first is anti-holomorphic as a vector-valued function of $z$ and enters the first, conjugate-linear slot, while the second is holomorphic in the second slot. Hence $F_{A,B}$ is bounded and continuous on the strip and holomorphic inside. [F1, F3, F4, given]

2.1 By [F8], $t\mapsto\Delta^{it}\xi$ is norm-continuous for every $\xi\in H$. For fixed $x\in M$ and $\xi,\eta\in H$, the coefficient $\langle\sigma_t(x)\xi,\eta\rangle$ is therefore continuous. If $T$ is finite rank, $\operatorname{Tr}(T\sigma_t(x))$ is a finite sum of such continuous coefficients. For arbitrary trace-class $T$, choose finite-rank $T_n\to T$ in trace norm by [F6]; uniformly in $t$, $|\operatorname{Tr}((T-T_n)\sigma_t(x))|\leq\|T-T_n\|_1\|x\|$. Thus every element of the predual $Q$ evaluates continuously on $\sigma_t(x)$, which is point-ultraweak continuity. [F1, F5, F6, F8, step 1.1, algebra]

2.2 Since $\Delta^{it}\Omega=\Omega$ and $\Delta^{it}$ is unitary, $$\omega(\sigma_t(x))=\langle\Delta^{it}x\Omega,\Omega\rangle=\langle x\Omega,\Delta^{-it}\Omega\rangle=\omega(x).$$ So $\omega$ is invariant under $\sigma_t$ and under $\alpha_t=\sigma_{-t}$. Also $\omega(I)=\|\Omega\|^2=1$ and $\omega(x^*x)=\|x\Omega\|^2\geq0$, so $\omega$ is a state; because $\Omega$ is separating for $M$, this same identity shows that $\omega$ is faithful. By [F5], $\omega$ is a normal vector functional on $M$. Hence it is a faithful normal state as asserted. [F1, F5, step 1.1, algebra]

2.3 For real $t$, unitarity of $\Delta^{it/2}$ and the identity $\Delta^{-it}B\Omega=\sigma_{-t}(B)\Omega$ give $$F_{A,B}(t)=(A^*\Omega|\Delta^{-it}B\Omega)=(\Omega|A\Delta^{-it}B\Omega)=\omega(A\alpha_t(B)).$$ This is the lower boundary in [F7]. [F1, F7, step 1.2, algebra]

3.1 At $z=t+i$, $\Delta^{i\overline z/2}A^*\Omega=\Delta^{it/2}J A\Omega$ and $\Delta^{-iz/2}B\Omega=\Delta^{-it/2}J B^*\Omega$, because $Sx\Omega=x^*\Omega$ and $S=J\Delta^{1/2}$. By [F2], $J$ commutes with $\Delta^{it/2}$; antiunitarity gives $(Ju|Jv)=(v|u)$. Therefore $$F_{A,B}(t+i)=(\Delta^{-it/2}B^*\Omega|\Delta^{it/2}A\Omega)=(B^*\Omega|\Delta^{it}A\Omega)=\omega(B\sigma_t(A)).$$ Invariance from step 2.2 changes the last expression to $\omega(\sigma_{-t}(B)A)=\omega(\alpha_t(B)A)$, the upper boundary in [F7]. [F1, F2, F7, step 2.2, step 1.2, algebra]

4.1 Steps 2.2–3.1 provide the bounded continuous strip function with both required boundary values for each $A,B\in M$. By [F7], $\omega$ is upper-strip $(\alpha,1)$ KMS. Step 1.1 gives the asserted point-ultraweakly continuous automorphism group, and [F2] gives $JMJ=M'$. No norm-continuity assertion on all of $M$ is made. [F2, F7, step 1.1, step 1.2, step 2.2, step 2.3, step 3.1] ∎
