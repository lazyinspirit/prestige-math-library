---
id: lem-hilbert-tikhonov-noise-amplification-bound
kind: lemma
title: "Hilbert-space Tikhonov amplifies data by at most $1/(2\\sqrt{\\lambda})$"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-hilbert-tikhonov-normal-operator-invertible
  - def-hilbert-space-adjoint
  - def-inner-product-space
  - def-countable-choice
  - cor-inner-product-induces-a-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-operator-norm
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
      locator: "Chapter 6, equations (6.1)–(6.4), PDF pp. 56–63; the local energy estimate is proved directly."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
      locator: "Complete 27-slide chapter, especially slides 2–6 on the regularized inverse and data perturbation."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: "https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf"
      locator: "Complete 29-slide chapter, especially slides 11–17 on the Tikhonov filter."
---

## Statement

Assume Countable Choice. Let $X,Y$ be real or complex Hilbert spaces and let
$A:X\to Y$ be bounded, with Hilbert adjoint $A^*$. For $\lambda>0$, put
$R_\lambda=(A^*A+\lambda I_X)^{-1}A^*$, which is well-defined by
[[lem-hilbert-tikhonov-normal-operator-invertible]]. Then for every $g\in Y$,

$$\|R_\lambda g\|\le\frac{\|g\|}{2\sqrt\lambda},\qquad \|R_\lambda\|\le\frac1{2\sqrt\lambda}.$$

The proof uses the normal equation and the Hilbert-space inner product; it
does not use a compact-operator convergence rate or a source condition.

## Facts & Assumptions

**Given:** Countable Choice, Hilbert spaces $X,Y$, a bounded linear map $A:X\to Y$, its Hilbert adjoint $A^*$, $\lambda>0$, and $g\in Y$.

[F1] [[lem-hilbert-tikhonov-normal-operator-invertible]]: For $B_\lambda=A^*A+\lambda I_X$, the inverse exists and $\|B_\lambda^{-1}\|\le1/\lambda$.

[A1] [[def-countable-choice]]: Countable Choice is the choice assumption used to define the Hilbert adjoint in this argument; full Choice is not used.

[F2] [[def-hilbert-space-adjoint]]: The adjoint satisfies $\langle Ax,y\rangle_Y=\langle x,A^*y\rangle_X$.

[F3] [[def-inner-product-space]]: The inner product is linear in its first argument and conjugate symmetric.

[F4] [[cor-inner-product-induces-a-norm]]: The induced norm satisfies $\|v\|^2=\langle v,v\rangle$.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\,\|y\|$.

[F6] [[def-operator-norm]]: For bounded $T$, its operator norm is the supremum of $\|Tz\|$ over $\|z\|\le1$.

## Proof

1.1 Let $x=R_\lambda g$. Under [A1], [F2] gives the Hilbert adjoint used in the definition of $R_\lambda$. By [F1], $(A^*A+\lambda I_X)x=A^*g$. Pairing with $x$ and using [F2] gives $\langle A^*Ax,x\rangle_X=\langle Ax,Ax\rangle_Y=\|Ax\|^2$ and $\langle A^*g,x\rangle_X=\langle g,Ax\rangle_Y$ by [F2]–[F4]. Hence $\|Ax\|^2+\lambda\|x\|^2=\langle g,Ax\rangle_Y$. [given, A1, F1, F2, F3, F4, algebra]

2.1 The left side of step 1.1 is real and nonnegative. By [F5], with $s=\|Ax\|$ and $t=\|g\|$, step 1.1 gives $\lambda\|x\|^2=\langle g,Ax\rangle-s^2\le |\langle g,Ax\rangle|-s^2\le ts-s^2$. Completing the square gives $ts-s^2=\frac{t^2}{4}-(s-t/2)^2\le t^2/4$. Since $\lambda>0$, taking nonnegative square roots yields $\|R_\lambda g\|=\|x\|\le\|g\|/(2\sqrt\lambda)$. [F5, step 1.1, algebra]

3.1 The pointwise inequality of step 2.1 holds for every $g\in Y$. Taking the supremum over the unit ball in [F6] gives $\|R_\lambda\|\le1/(2\sqrt\lambda)$. [F6, step 2.1, algebra] ∎
