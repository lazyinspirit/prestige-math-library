---
id: lem-nrqm-autonomous-dynamics-flow-calculus
aliases: [nrqm-autonomous-dynamics-flow-calculus]
kind: lemma
domain: mathematics
title: "Flow calculus of a self-adjoint generator: commutation, invariance and differentiability"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-infinitesimal-generator-of-a-unitary-group, def-projection-valued-measure, def-strongly-continuous-one-parameter-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-unbounded-integral-against-a-pvm, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Theorems 5.1-5.2, printed pages 123-125 (a self-adjoint operator generates a strongly continuous unitary group; the derivative exists exactly on the domain and equals iT)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Sections 2.1-2.3, printed pages 10-17 (unitary time evolution, the evolution operator and the generator equation)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]), the choice hypotheses of the cited spectral and functional-calculus suppliers. Let $H\ne\{0\}$ be a complex Hilbert space ([[def-hilbert-space]]), let $T$ be self-adjoint on $H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]) with spectral projection-valued measure $E$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]]), and put
$$U(t):=e^{itT}=\int_{\mathbb R}e^{it\lambda}\,dE(\lambda)\qquad(t\in\mathbb R)$$
in the sense of the integral of a measurable function against a projection-valued measure ([[def-unbounded-integral-against-a-pvm]]). Then:

(a) $U$ is a strongly continuous one-parameter unitary group ([[def-strongly-continuous-one-parameter-unitary-group]]) with $U(0)=I$, $U(t+s)=U(t)U(s)$ and $U(t)^{*}=U(t)^{-1}=U(-t)$ for all $s,t$; moreover $U(t)D(T)=D(T)$, $TU(t)=U(t)T$ on $D(T)$, and the difference quotient $\frac1t\bigl(U(t)x-x\bigr)$ has a norm limit as $t\to0$ exactly for $x\in D(T)$, where that limit is $iTx$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-infinitesimal-generator-of-a-unitary-group]]).

(b) For every bounded Borel function $h:\mathbb R\to\mathbb C$ and every $t\in\mathbb R$ one has $h(T)U(t)=U(t)h(T)$; in particular $E(B)U(t)=U(t)E(B)$ for every Borel set $B\subseteq\mathbb R$.

(c) For $x\in D(T)$ the map $t\mapsto U(t)x$ is differentiable at every $t\in\mathbb R$, with
$$\frac{d}{dt}U(t)x=iU(t)Tx=iTU(t)x;$$
for $x\in H\setminus D(T)$ the map $t\mapsto U(t)x$ is differentiable at no point of $\mathbb R$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a nonzero complex Hilbert space $H$ ([[def-hilbert-space]]); a self-adjoint operator $T$ on $H$ with spectral projection-valued measure $E$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]]); the operator $U(t)=\int e^{it\lambda}\,dE(\lambda)$ ([[def-unbounded-integral-against-a-pvm]]); a bounded Borel function $h:\mathbb R\to\mathbb C$; vectors $x\in H$ and real $s,t$.

[F1] **Generated group and generator.** $U$ is a strongly continuous one-parameter unitary group ([[def-strongly-continuous-one-parameter-unitary-group]]) with $U(t)D(T)=D(T)$, $TU(t)=U(t)T$ on $D(T)$, and the difference quotient $\frac1t(U(t)x-x)$ converges as $t\to0$ exactly for $x\in D(T)$, the limit then being $iTx$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]); by [[def-infinitesimal-generator-of-a-unitary-group]] this says that the generator of $U$ is $iT$ with domain $D(T)$.

[F2] **Bounded Borel calculus.** For bounded Borel $f,g:\mathbb R\to\mathbb C$ the operator $\Phi_E(f)=\int f\,dE$ is the unique bounded operator with $\langle\Phi_E(f)x,y\rangle=\int f\,dE_{x,y}$ for all $x,y\in H$, obtained as the norm limit of integrals of simple functions along uniform approximations; and $\Phi_E(fg)=\Phi_E(f)\Phi_E(g)$, $\Phi_E(\overline f)=\Phi_E(f)^{*}$, $\Phi_E(\mathbf 1_{\mathbb R})=I$ ([[thm-bounded-borel-pvm-integral]], [[thm-unbounded-borel-functional-calculus]], [[thm-pvm-integral-is-a-star-homomorphism]]).

[F3] **The flow as a function of $T$.** $U(t)=\Phi_E(f_t)$ with $f_t(\lambda)=e^{it\lambda}$, and $E(B)=\Phi_E(\mathbf 1_B)$ for every Borel $B\subseteq\mathbb R$ ([[def-unbounded-integral-against-a-pvm]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).



## Proof

**Proof technique:** direct; read the group properties and the domain characterization from the cited generation lemma, then prove the commutation with the bounded calculus and the everywhere-differentiability statements.

**Given:** A self-adjoint $T$ with spectral PVM $E$; $U(t)=e^{itT}$; a bounded Borel $h$; $x\in H$; $s,t\in\mathbb R$.

1.1 Clause (a) is exactly the statement of the cited generation lemma, read in the notation $U(t)=e^{itT}$: it gives the group law, unitarity, $U(t)^{*}=U(-t)$, the invariance $U(t)D(T)=D(T)$, the commutation $TU(t)=U(t)T$ on $D(T)$, and the characterization of the difference quotient with limit $iTx$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-infinitesimal-generator-of-a-unitary-group]]). [given, F1]

1.2 For bounded Borel $h$ and fixed $t$, [F2] and [F3] give $h(T)U(t)=\Phi_E(h)\Phi_E(f_t)=\Phi_E(hf_t)$, and multiplication of complex functions is commutative, so $\Phi_E(hf_t)=\Phi_E(f_th)=\Phi_E(f_t)\Phi_E(h)=U(t)h(T)$; this is the first assertion of (b). [given, F2, F3, algebra]

1.3 Let $x\in D(T)$. At $t=0$ the difference quotient converges to $iTx$ by [F1]. For fixed $t$ and $s\to0$ the group law gives $U(t+s)x-U(t)x=U(t)\bigl(U(s)x-x\bigr)$, hence $\frac1s\bigl(U(t+s)x-U(t)x\bigr)=U(t)\frac1s\bigl(U(s)x-x\bigr)\to U(t)iTx=iU(t)Tx$, because $U(t)$ is bounded and the limit in the last factor exists; the identity $iU(t)Tx=iTU(t)x$ is the commutation in [F1]. The derivative $t\mapsto iU(t)Tx$ is continuous because $U$ is strongly continuous and $U(t)Tx$ depends continuously on $t$; hence $t\mapsto U(t)x$ is differentiable at every $t$ with the displayed derivative. [given, F1, algebra]

1.4 Let $x\in H\setminus D(T)$ and suppose that $t\mapsto U(t)x$ were differentiable at some $t_0$ with derivative $y$. Then for $s\to0$, using the group law and boundedness of $U(-t_0)$, $\frac1s\bigl(U(s)x-x\bigr)=U(-t_0)\frac1s\bigl(U(t_0+s)x-U(t_0)x\bigr)\to U(-t_0)y$, so the difference quotient at $0$ would converge, contradicting [F1], which says that it converges exactly for $x\in D(T)$. Hence $t\mapsto U(t)x$ is differentiable at no point of $\mathbb R$. [given, F1, algebra]

2.1 Taking $h=\mathbf 1_B$ for a Borel set $B$ in step 1.2 and using $E(B)=\Phi_E(\mathbf 1_B)$ from [F3] gives $E(B)U(t)=U(t)E(B)$, the second assertion of (b). [step 1.2, F3]

3.1 Steps 1.1, 1.2, 2.1, 1.3 and 1.4 establish clauses (a), (b) and (c). [step 1.1, step 1.2, step 2.1, step 1.3, step 1.4] ∎

## Remarks

- **Sign and scaling conventions.** The physical reading of this lemma uses $T=-K/\hbar$ for a self-adjoint energy operator $K$ and a positive constant $\hbar$; then $D(T)=D(K)$ and $U(t)=e^{-itK/\hbar}$ in the spectral calculus, while the derivative statement of clause (c) becomes $i\hbar\frac{d}{dt}U(t)x=KU(t)x$ for $x\in D(K)$. The identification of the group generated by $-iK/\hbar$ with the spectral-calculus exponential is the uniqueness statement of Stone's theorem; it is used, not reproved, on the physics pages.
- **Only the domain carries the equation.** Clause (c) shows that the norm-differentiability of the flow is equivalent to membership in $D(T)$; the flow itself, clause (a), is defined on all of $H$ and is continuous there.

