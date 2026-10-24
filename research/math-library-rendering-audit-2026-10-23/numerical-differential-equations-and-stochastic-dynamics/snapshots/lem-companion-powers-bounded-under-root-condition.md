---
id: lem-companion-powers-bounded-under-root-condition
kind: lemma
title: "The root condition is equivalent to bounded powers of the multistep companion matrix"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - def-companion-matrix-of-a-linear-recurrence
  - prop-companion-matrix-iterates-a-linear-recurrence
  - thm-characteristic-polynomial-of-a-recurrence-companion-matrix
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - def-algebraically-closed-field
  - cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form
  - def-jordan-block-and-jordan-string
  - def-jordan-canonical-form
  - lem-characteristic-polynomial-of-block-triangular-matrix
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.7"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.8"
      url: "https://fncbook.com/zerostability/"
dependency_level: 1
---

## Statement

Let $C$ be the row-shift companion matrix for the monic polynomial $\rho/\alpha_k$, where $\rho$ is the characteristic polynomial of a $k$-step method. For a complex vector $v$, set $\|v\|_\infty=\max_i|v_i|$ and for a matrix $A$ set $\|A\|_\infty=\max_i\sum_j|A_{ij}|$. Then

$$\sup_{n\ge0}\|C^n\|_\infty<\infty$$

if and only if $\rho$ satisfies the root condition from [[def-linear-multistep-method-consistency-order-and-root-condition]]. Consequently the homogeneous recurrence is zero-stable exactly under that root condition.

## Facts & Assumptions

**Given:** The coefficients of a $k$-step method, its characteristic polynomial $\rho$, and the companion-matrix convention from [[def-companion-matrix-of-a-linear-recurrence]].

[F1] [[def-linear-multistep-method-consistency-order-and-root-condition]] defines the root condition and zero-stability as a uniform bound on all homogeneous recurrence solutions in terms of their initial state.

[F2] [[thm-characteristic-polynomial-of-a-recurrence-companion-matrix]] says the characteristic polynomial of the row-shift companion matrix is its monic recurrence polynomial.

[F3] [[prop-companion-matrix-iterates-a-linear-recurrence]] says its state vectors satisfy $v_{n+1}=Cv_n$ and $v_n=C^nv_0$.

[F4] [[thm-complex-numbers-form-a-field]] makes $\mathbb C$ a field; [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] and [[def-algebraically-closed-field]] imply that $\mathbb C$ is algebraically closed.

[F5] [[cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form]] gives a Jordan form for every finite-dimensional endomorphism over an algebraically closed field.

[F6] [[def-jordan-canonical-form]] and [[def-jordan-block-and-jordan-string]] say that a Jordan form is block diagonal with blocks $J_m(\lambda)=\lambda I+N$, where $N^m=0$.

[F7] [[lem-characteristic-polynomial-of-block-triangular-matrix]] gives the product of the characteristic polynomials of diagonal blocks in a block-triangular matrix.

## Proof

1.1 The companion matrix has characteristic polynomial $\rho/\alpha_k$ by [F2]. By [F4] and [F5], write $C=SJS^{-1}$ over $\mathbb C$, where $J$ is a block diagonal sum of Jordan blocks. Each block $J_m(\lambda)$ contributes $(z-\lambda)^m$ to the characteristic polynomial by [F6] and [F7]. Thus the algebraic multiplicity of each root of $\rho$ is the sum of the sizes of its Jordan blocks. [F2, F4, F5, F6, F7]

1.2 If $\rho$ has a root $\lambda$ with $|\lambda|>1$, the complex sequence $u_n=\lambda^n$ solves the homogeneous recurrence. If $\lambda$ is real, this is an unbounded real solution. If $\lambda$ is nonreal, its real and imaginary parts solve the real recurrence because the coefficients are real, and $\max(|\operatorname{Re}u_n|,|\operatorname{Im}u_n|)\ge |u_n|/\sqrt2$ for every $n$; hence at least one of those real solutions is unbounded along a subsequence. By [F3], the corresponding real solution has an initial state whose companion iterates are unbounded. [F1, F3, algebra]

1.3 If a root $\lambda$ of modulus one has multiplicity $m\ge2$, write $\rho(z)=(z-\lambda)^m q(z)$. For the forward shift $E u_n=u_{n+1}$, $(E-\lambda)(n^s\lambda^n)=\lambda^{n+1}((n+1)^s-n^s)$, whose polynomial factor has degree $s-1$. Iterating $m$ times gives $(E-\lambda)^mu=0$ for $u_n=n^{m-1}\lambda^n$; since $q(E)$ commutes with $(E-\lambda)^m$, this sequence satisfies $\rho(E)u=0$, yet $|u_n|=n^{m-1}$ is unbounded. If coefficients are real and $\lambda$ is nonreal, the real and imaginary parts are real recurrence solutions and at least one is unbounded along a subsequence. [F1, F3, algebra]

2.1 Suppose the root condition holds. If $|\lambda|=1$, its algebraic multiplicity is one by [F1], so its only Jordan block has size one. [F1, step 1.1]

3.1 For a block with $0<|\lambda|<1$, the binomial identity gives $J_m(\lambda)^n=\sum_{j=0}^{m-1}\binom nj\lambda^{n-j}N^j$. For each fixed $j$, the ratio of successive terms $n^j|\lambda|^{n-j}$ tends to $|\lambda|<1$, so this scalar sequence is bounded; if $\lambda=0$, the block powers vanish for $n\ge m$. A unit-modulus block has size one by step 2.1 and therefore has powers of modulus one. Finitely many blocks give $\sup_n\|J^n\|_\infty<\infty$. [F6, step 2.1, algebra]

4.1 For any matrices $A,B$, expanding entries and applying the triangle inequality gives $\|AB\|_\infty\le\|A\|_\infty\|B\|_\infty$. Hence $\|C^n\|_\infty\le\|S\|_\infty\|J^n\|_\infty\|S^{-1}\|_\infty$, uniformly in $n$. [step 3.1, algebra]

5.1 Under the root condition, steps 2.1, 3.1, and 4.1 bound the powers of $C$. If it fails, steps 1.2–1.3 give an unbounded homogeneous mode, and [F3] turns that mode into an initial state with unbounded companion iterates. Thus the powers are bounded exactly under the root condition, and [F1] gives the equivalent zero-stability statement. [F1, F3, step 2.1, step 3.1, step 4.1, step 1.2, step 1.3] ∎
