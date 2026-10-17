---
id: lem-hilbert-tikhonov-normal-operator-invertible
kind: lemma
title: "The shifted Hilbert-space normal operator is invertible with inverse norm at most $1/\\lambda$"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-bounded-linear-operator
  - def-inner-product-space
  - def-countable-choice
  - def-operator-norm
  - def-orthogonality-and-orthogonal-complement
  - cor-inner-product-induces-a-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapters 2–3 and Chapter 6, equations (6.1)–(6.4), PDF pp. 8–63."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: "https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf"
      locator: "Complete 29-slide chapter, especially slides 11–17 on discrete Tikhonov."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
      locator: "Complete 27-slide chapter, especially slides 2–6 on the regularized inverse and error split."
---

## Statement

Assume the Axiom of Countable Choice. Let $X$ and $Y$ be real or complex
Hilbert spaces and let $A:X\to Y$ be bounded, with Hilbert adjoint $A^*$. For
$\lambda>0$, define

$$B_\lambda:=A^*A+\lambda I_X.$$

Then $B_\lambda:X\to X$ is bijective and

$$\|B_\lambda^{-1}\|\le\frac1\lambda.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, real or complex Hilbert spaces $X,Y$, a bounded linear map $A:X\to Y$, its Hilbert adjoint $A^*$, and a real $\lambda>0$.

[F1] [[def-hilbert-space]]: A Hilbert space is an inner-product space complete for the norm induced by its inner product.

[A1] [[def-countable-choice]]: Countable Choice states that every countable family of nonempty sets has a choice function.

[F2] [[def-hilbert-space-adjoint]]: Under Countable Choice, the adjoint assigns to each $y$ the unique vector $A^*y$ satisfying $\langle Ax,y\rangle_Y=\langle x,A^*y\rangle_X$.

[F3] [[def-bounded-linear-operator]]: A linear map is bounded when some finite $C\ge0$ satisfies $\|Tx\|\le C\|x\|$ for every $x$.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: For vectors in a real or complex inner-product space, $|\langle x,y\rangle|\le\|x\|\,\|y\|$.

[F5] [[thm-orthogonal-decomposition-by-a-closed-subspace]]: Under Countable Choice, a closed linear subspace $M$ of a Hilbert space satisfies $H=M\oplus M^\perp$.

[F6] [[def-inner-product-space]]: The inner product is linear in its first argument, conjugate symmetric, and positive definite.

[F7] [[def-operator-norm]]: The operator norm is the supremum of $\|Tx\|$ over vectors satisfying $\|x\|\le1$.

[F8] [[def-orthogonality-and-orthogonal-complement]]: A vector $z$ lies in $M^\perp$ exactly when $\langle z,m\rangle=0$ for every $m\in M$.

[F9] [[cor-inner-product-induces-a-norm]]: The induced norm satisfies $\|v\|^2=\langle v,v\rangle$.

## Proof

1.1 Uniqueness in [F2] gives linearity of $A^*$: for scalars $a,b$ and $y_1,y_2\in Y$, conjugate-linearity of the second slot shows that $aA^*y_1+bA^*y_2$ satisfies the defining identity for $ay_1+by_2$, so it equals $A^*(ay_1+by_2)$. For $w=A^*y$, [F2], [F4] and [F7] give $\|w\|^2=\langle Aw,y\rangle\le|\langle Aw,y\rangle|\le\|A\|\|w\|\|y\|$. Dividing when $w\ne0$, and treating $w=0$ directly, proves $\|A^*y\|\le\|A\|\|y\|$. Thus $A^*$ is bounded, and composition and addition make $B_\lambda$ linear and bounded with $\|B_\lambda x\|\le(\|A\|^2+\lambda)\|x\|$. The adjoint identity and conjugate symmetry [F6] give $\langle B_\lambda x,z\rangle=\langle Ax,Az\rangle+\lambda\langle x,z\rangle=\langle x,B_\lambda z\rangle$ for all $x,z\in X$. In particular, $\langle B_\lambda x,x\rangle=\|Ax\|^2+\lambda\|x\|^2\ge\lambda\|x\|^2$. [given, A1, F1, F2, F3, F4, F6, F7, F9, algebra]

2.1 By [F4], $\|B_\lambda x\|\,\|x\|\ge |\langle B_\lambda x,x\rangle|=\langle B_\lambda x,x\rangle\ge \lambda\|x\|^2$. Thus $\|B_\lambda x\|\ge\lambda\|x\|$ for $x\ne0$; the same inequality is trivial for $x=0$. Hence $B_\lambda$ is injective. If $B_\lambda x_n$ converges, this inequality applied to $x_n-x_m$ makes $(x_n)$ Cauchy; completeness of $X$ and boundedness of $B_\lambda$ show its limit lies in $\operatorname{ran}B_\lambda$. Therefore the range is closed. [given, F1, F4, F9, step 1.1, algebra]

3.1 If $z\in(\operatorname{ran}B_\lambda)^\perp$, [F8] gives $\langle z,B_\lambda x\rangle=0$ for every $x\in X$. By conjugate symmetry [F6] this is $\langle B_\lambda x,z\rangle=0$, and the symmetry identity from step 1.1 gives $\langle x,B_\lambda z\rangle=0$ for every $x\in X$. Taking $x=B_\lambda z$ and using positive definiteness [F6] yields $B_\lambda z=0$; injectivity from step 2.1 then gives $z=0$. Thus the closed range has zero orthogonal complement. [F6, F8, step 1.1, step 2.1, algebra]

4.1 By [F5] and the Countable Choice assumption [A1], a closed subspace with zero orthogonal complement is all of $X$; so $B_\lambda$ is surjective as well as injective. For $y=B_\lambda x$, step 2.1 gives $\|B_\lambda^{-1}y\|=\|x\|\le\|y\|/\lambda$, proving $\|B_\lambda^{-1}\|\le1/\lambda$. [A1, F5, F7, step 2.1, step 2.1, algebra] ∎
