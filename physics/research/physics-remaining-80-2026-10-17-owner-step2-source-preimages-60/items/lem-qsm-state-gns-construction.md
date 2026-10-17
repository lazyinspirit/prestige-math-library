---
id: lem-qsm-state-gns-construction
kind: lemma
title: Cyclic representation of a quasi-local state
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
- lem-qsm-consistent-local-states
- lem-qsm-quasilocal-completion
- def-qsm-quasilocal-spin-algebra
- def-qsm-infinite-algebraic-state
- lem-qsm-matrix-state-calculus
- def-countable-choice
- thm-completion-of-an-inner-product-space-is-hilbert
- def-space-of-bounded-linear-operators
- def-operator-norm
- thm-hilbert-adjoint-properties
- lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  lem-qsm-consistent-local-states: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-completion-of-an-inner-product-space-is-hilbert: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §2.5, Theorem 2.5.3, pp. 38–40
    url: https://arxiv.org/pdf/1311.2717
  - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §4, pp. 7–8
    url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Assume Countable Choice ([[def-countable-choice]]), the C*-algebra completion interface of [[lem-qsm-quasilocal-completion]], and the finite-matrix positive square-root interface of [[lem-qsm-matrix-state-calculus]]. Let $\{\rho_\Lambda\}$ be a consistent family of finite local density matrices as in [[lem-qsm-consistent-local-states]], and let $\omega$ be its extended algebraic state on the unital quasi-local algebra $\mathcal A$. Then there are a complex Hilbert space $\mathcal H_\omega$, a unital $*$-representation $\pi_\omega:\mathcal A\to\mathcal B(\mathcal H_\omega)$, and a unit vector $\Omega_\omega$ cyclic for $\pi_\omega$ such that

$$\omega(A)=\langle \pi_\omega(A)\Omega_\omega,\Omega_\omega\rangle\qquad(A\in\mathcal A),$$

using the linear-first inner-product convention. Here $\mathcal B(\mathcal H_\omega)$ is the space of bounded linear operators with its operator norm, a $*$-representation is a complex-linear map preserving products, adjoints and the identity, and cyclic means that $\{\pi_\omega(A)\Omega_\omega:A\in\mathcal A\}$ is norm dense in $\mathcal H_\omega$. The theorem asserts existence of a cyclic representation, not uniqueness up to unitary equivalence.

## Facts & Assumptions

**Given:** Countable Choice, the C*-algebra structure on $\mathcal A$, a consistent local density family, and the state $\omega$ supplied by [[lem-qsm-consistent-local-states]].

[A1] Countable Choice is assumed for the norm completions of inner-product spaces and the norm completion defining $\mathcal A$ ([[def-countable-choice]], [[thm-completion-of-an-inner-product-space-is-hilbert]], [[def-qsm-quasilocal-spin-algebra]]).

[F1] $\mathcal A_{\mathrm{loc}}$ is a dense unital $*$-subalgebra of $\mathcal A$, and the completed algebra is a unital C*-algebra using the finite-matrix C*-identity ([[def-qsm-quasilocal-spin-algebra]], [[lem-qsm-quasilocal-completion]]).

[F2] [[lem-qsm-matrix-state-calculus]] and [[lem-qsm-finite-matrix-cstar-and-state-duality]] supply the positive square root of $\|a\|^2I-a^*a$ in every finite local matrix algebra, with the same operator norm.

[F3] [[lem-qsm-consistent-local-states]] supplies a bounded positive complex-linear functional $\omega$ on $\mathcal A$ with $\omega(I)=1$ and local restrictions $A\mapsto\operatorname{Tr}(\rho_\Lambda A)$.

[F4] The completion of a real or complex inner-product space is a Hilbert space under Countable Choice ([[thm-completion-of-an-inner-product-space-is-hilbert]]).

[F5] $\mathcal B(H)$ denotes the bounded linear maps from $H$ to itself, equipped with the operator norm ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).

[F6] Every bounded operator on a Hilbert space has an adjoint; adjoints reverse products, are involutive, and preserve the operator norm, under Countable Choice ([[thm-hilbert-adjoint-properties]]).

## Proof

**Proof technique:** direct.

**Given:** A1, F1–F6 and the local algebra $\mathcal A_{\mathrm{loc}}$.

1.1 For $a,b\in\mathcal A_{\mathrm{loc}}$, positivity makes $Q(z):=\omega((a+zb)^*(a+zb))\ge0$ for every $z\in\mathbb C$. Expanding gives $Q(z)=\omega(a^*a)+z u+\overline z\,v+|z|^2c$, where $u=\omega(a^*b)$, $v=\omega(b^*a)$, and $c=\omega(b^*b)\ge0$. Taking real $z=t$ and purely imaginary $z=it$ shows respectively that $u+v$ is real and $i(u-v)$ is real, so $v=\overline u$. If $c>0$, take $z=-v/c$ to obtain $Q(z)=\omega(a^*a)-|v|^2/c\ge0$. If $c=0$ and $v\ne0$, taking $z=-t v$ for sufficiently large real $t>0$ gives $Q(z)=\omega(a^*a)-2t|v|^2<0$, a contradiction; hence $v=0$. Therefore $|\omega(b^*a)|^2\le\omega(a^*a)\omega(b^*b)$. [given, F3, algebra]

2.1 Define $N:=\{a\in\mathcal A_{\mathrm{loc}}:\omega(a^*a)=0\}$. If $a,b\in N$, step 1.1 makes both mixed terms $\omega(a^*b)$ and $\omega(b^*a)$ zero, so $\omega((a+b)^*(a+b))=0$; scalar multiples stay in $N$ by homogeneity. Thus $N$ is a vector subspace. The same inequality makes $\langle[a],[b]\rangle:=\omega(b^*a)$ independent of representatives in $\mathcal A_{\mathrm{loc}}/N$. This form is linear in its first argument, conjugate-linear in the second, conjugate symmetric, and positive definite on the quotient: $\langle[a],[a]\rangle=0$ implies $a\in N$ and hence $[a]=0$. [step 1.1, algebra]

3.1 Let $a,b\in\mathcal A_{\mathrm{loc}}$ and choose one finite region containing both. In its matrix representation, $c:=\|a\|^2I-a^*a$ is Hermitian and positive, since $\langle c\xi,\xi\rangle=\|a\|^2\|\xi\|^2-\|a\xi\|^2\ge0$ for every vector $\xi$. By [F2], $c^{1/2}$ exists in that same finite matrix algebra. Therefore $b^*cb=(c^{1/2}b)^*(c^{1/2}b)$ and positivity of $\omega$ gives $\omega(b^*a^*ab)\le\|a\|^2\omega(b^*b)$. In particular, the null space $N$ of step 2.1 is a left ideal under multiplication by local $a$: if $b\in N$, the inequality gives $\omega((ab)^*(ab))=0$. [given, F2, F3, step 2.1, algebra]

4.1 Define $\pi_0(a)[b]:=[ab]$ for $a,b\in\mathcal A_{\mathrm{loc}}$. Step 3.1 shows this is well defined on the quotient. The bound there gives $\|\pi_0(a)[b]\|^2\le\|a\|^2\|[b]\|^2$, so $\pi_0(a)$ extends uniquely to a bounded operator on the Hilbert completion $\mathcal H_\omega$, with $\|\pi_0(a)\|\le\|a\|$. On quotient vectors, multiplication gives $\pi_0(a)\pi_0(d)[b]=\pi_0(ad)[b]$, and $\langle\pi_0(a)[b],[c]\rangle=\omega(c^*ab)=\langle[b],\pi_0(a^*)[c]\rangle$; continuity extends these identities to $\mathcal H_\omega$. [A1, F4, step 2.1, step 3.1, algebra]

5.1 For $A\in\mathcal A$, represent it by a Cauchy sequence $(a_n)$ in $\mathcal A_{\mathrm{loc}}$, as in the norm-completion construction. The estimate $\|\pi_0(a_n)-\pi_0(a_m)\|\le\|a_n-a_m\|$ makes the operators operator-norm Cauchy. For each $\xi\in\mathcal H_\omega$, completeness gives $T\xi:=\lim_n\pi_0(a_n)\xi$; this is linear and bounded because $(a_n)$ is norm bounded and $\|\pi_0(a_n)\xi\|\le\|a_n\|\|\xi\|$. Given $\varepsilon>0$, for all sufficiently large $n,m$ the operator difference has norm at most $\varepsilon$; fixing such $n$ and passing $m\to\infty$ gives $\|(\pi_0(a_n)-T)\xi\|\le\varepsilon\|\xi\|$, hence $\|\pi_0(a_n)-T\|\le\varepsilon$. Thus $T\in\mathcal B(\mathcal H_\omega)$ is the operator-norm limit. Equivalent representatives give the same limit by the same estimate, defining $\pi_\omega(A):=T$. Linearity follows because local approximants to $A,B$ and $\lambda\in\mathbb C$ give approximants $a_n+\lambda b_n$ to $A+\lambda B$, and each $\pi_0$ is linear. Passing $\|\pi_0(a_n)\|\le\|a_n\|$ to the limit also gives $\|\pi_\omega(A)\|\le\|A\|$, so $\pi_\omega$ is bounded and contractive. If $(b_n)$ represents $B$, then $(a_nb_n)$ represents $AB$ by continuity of multiplication in $\mathcal A$, and $\pi_0(a_nb_n)=\pi_0(a_n)\pi_0(b_n)$; taking operator-norm limits gives multiplicativity. For any $x$ in a C*-algebra, $\|x^*\|^2=\|xx^*\|\le\|x\|\|x^*\|$ by the C*-identity and submultiplicativity; this gives $\|x^*\|\le\|x\|$, and applying it to $x^*$ yields equality. Hence $(a_n^*)$ represents $A^*$; the adjoint identity from step 4.1 and norm continuity of Hilbert adjoints [F6] give $\pi_\omega(A^*)=\pi_\omega(A)^*$. The constant sequence at $I$ gives $\pi_\omega(I)=I$. [A1, F1, F5, F6, step 4.1, algebra]

6.1 Put $\Omega_\omega:=[I]$. Its squared norm is $\omega(I)=1$. For every local $a$, $\pi_\omega(a)\Omega_\omega=[a]$; these classes are dense by the definition of $\mathcal H_\omega$, so $\Omega_\omega$ is cyclic. For local $a$, $\langle\pi_\omega(a)\Omega_\omega,\Omega_\omega\rangle=\omega(a)$ by the quotient inner product. Both sides are continuous in $a$ and $\mathcal A_{\mathrm{loc}}$ is dense in $\mathcal A$, so the identity holds for every $A\in\mathcal A$. [F1, F3, step 2.1, step 5.1] ∎
