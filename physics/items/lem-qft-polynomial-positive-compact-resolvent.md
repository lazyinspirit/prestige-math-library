---
id: lem-qft-polynomial-positive-compact-resolvent
kind: lemma
domain: mathematics
title: Positive injective compact polynomial form resolvent
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-qft-coercive-polynomial-form-domain, lem-qft-cube-poincare-compact-form-inclusion, thm-riesz-representation-for-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, def-bounded-linear-operator, def-compact-linear-operator, def-self-adjoint-positive-unitary-and-normal-operator, thm-double-orthogonal-complement-is-closure, def-countable-choice]
dependency_roles:
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  lem-qft-cube-poincare-compact-form-inclusion: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  thm-double-orthogonal-complement-is-closure: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §2.3, pp.76–83"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 4, pp.27–32"
      url: "https://arxiv.org/pdf/1203.2344v1"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) and use $Q$, $H_N$, $a$, and $W$ from
[[lem-qft-coercive-polynomial-form-domain]]. For each $f\in H_N$, let $Rf$ be
the unique vector of $Q$ satisfying
$$a(v,Rf)=\langle v,f\rangle_{H_N}\qquad(v\in Q),$$
and view $R$ as an operator $H_N\to H_N$ by the inclusion of
[[lem-qft-cube-poincare-compact-form-inclusion]]. Then $R$ is bounded, compact,
self-adjoint, positive, injective, and has dense range; moreover
$\|R\|\le\tfrac12$. This is the variational inverse of the shifted polynomial
form. It establishes compactness and dense range but does not itself assert a
differential-operator realization.

## Facts & Assumptions

**Given:** Countable Choice, the coercive form Hilbert space $Q$, the complex
Hilbert space $H_N$, and the compact inclusion $J:Q\hookrightarrow H_N$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function.

[F1] [[lem-qft-coercive-polynomial-form-domain]]: $a$ is a Hilbert inner product on $Q$, $\|v\|_2\le\|v\|_Q$, and $a(v,v)\ge2\|v\|_2^2$.

[F2] [[lem-qft-cube-poincare-compact-form-inclusion]]: $J:Q\to H_N$ is a compact linear inclusion.

[F3] [[thm-riesz-representation-for-hilbert-space]]: under Countable Choice, every bounded linear functional on a real or complex Hilbert space is uniquely represented by pairing in the first variable; the representing vector has the same norm as the functional.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|\|v\|$ in $H_N$ and in $Q$.

[F5] [[def-bounded-linear-operator]]: a bounded linear operator is a linear map $T$ with $\|Tx\|\le C\|x\|$ for some $C$.

[F6] [[def-compact-linear-operator]]: a linear operator is compact when every bounded set has image with compact closure.

[F7] [[def-self-adjoint-positive-unitary-and-normal-operator]]: for a bounded operator on a Hilbert space, self-adjoint means $T^*=T$ and positive means $\langle Tx,x\rangle\ge0$ for all $x$.

[F8] [[thm-double-orthogonal-complement-is-closure]]: for a linear subspace $M$ of a Hilbert space, $M^{\perp\perp}=\overline M$.

## Proof

**Proof technique:** direct.

1.1 For fixed $f\in H_N$, the functional $v\mapsto\langle v,f\rangle_{H_N}$ is linear and satisfies $|\langle v,f\rangle|\le\|v\|_2\|f\|_2\le\|v\|_Q\|f\|_2$ by [F1] and Cauchy–Schwarz. Thus [F3] applied to the Hilbert space $(Q,a)$ gives a unique $Rf\in Q$ with the stated variational identity. For $\alpha,\beta\in\mathbb C$, conjugate-linearity in the second argument gives $a(v,\alpha Rf+\beta Rg)=\langle v,\alpha f+\beta g\rangle$, so uniqueness makes $R$ linear. [A1, F1, F3, F4, given]

2.1 Taking $v=Rf$ in the identity gives $\|Rf\|_Q^2=a(Rf,Rf)=\langle Rf,f\rangle$. Hence $\|Rf\|_Q^2\le\|Rf\|_2\|f\|_2\le\|Rf\|_Q\|f\|_2$, so $\|Rf\|_Q\le\|f\|_2$ (with the zero case immediate). Consequently $R:H_N\to H_N$ is bounded by [F5]. [step 1.1, F1, F4, F5, algebra]

2.2 The same identity and $a(Rf,Rf)\ge2\|Rf\|_2^2$ give $2\|Rf\|_2^2\le\|Rf\|_2\|f\|_2$; division when $Rf\ne0$ yields $\|R\|\le\tfrac12$. If $Rf=0$, the variational identity says $\langle v,f\rangle=0$ for every $v\in Q$; since $Q$ is dense in $H_N$ by [F1], continuity of the inner product gives $\langle f,f\rangle=0$, hence $f=0$. Thus $R$ is injective. [step 1.1, F1, F4, algebra]

2.3 For $f,g\in H_N$, the variational identity and conjugate symmetry of $a$ yield $\langle Rf,g\rangle=a(Rf,Rg)=\langle f,Rg\rangle$, so $R$ is self-adjoint by [F7]. Also $\langle Rf,f\rangle=a(Rf,Rf)\ge0$, so it is positive. [step 1.1, F1, F7, algebra]

3.1 The map $f\mapsto Rf$ is bounded from $H_N$ into $Q$ by step 2.1, and the inclusion $J:Q\to H_N$ is compact by [F2]. Therefore for every bounded $B\subseteq H_N$, $R(B)=J(R(B))$ has compact closure, which is exactly compactness by [F6]. [step 2.1, F2, F6]

4.1 If $z\perp\operatorname{ran}R$, then $\langle Rf,z\rangle=0$ for every $f\in H_N$. Self-adjointness from step 2.3 gives $\langle f,Rz\rangle=0$ for every $f$, so $Rz=0$ and step 2.2 gives $z=0$. Thus $(\operatorname{ran}R)^\perp=\{0\}$, and [F8] gives $\overline{\operatorname{ran}R}=(\operatorname{ran}R)^{\perp\perp}=\{0\}^\perp=H_N$. Therefore $R$ has dense range. [step 2.2, step 2.3, F8] ∎

