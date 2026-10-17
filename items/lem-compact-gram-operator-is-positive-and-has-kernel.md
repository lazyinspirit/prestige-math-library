---
id: lem-compact-gram-operator-is-positive-and-has-kernel
kind: lemma
title: A compact Hilbert-space Gram operator is positive and has the forward kernel
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 0
deps:
  - def-countable-choice
  - def-hilbert-space-adjoint
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-bounded-linear-operator
  - def-compact-linear-operator
  - def-inner-product-space
  - cor-inner-product-induces-a-norm
  - thm-hilbert-adjoint-properties
  - lem-compositions-with-a-compact-operator-are-compact
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
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 2, compact operators and the compact self-adjoint spectral theorem, PDF pp. 13–21.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf
      locator: Complete 29-slide chapter; slides 11–17 give the discrete normal operator and Tikhonov setting.
---

## Statement

Assume Countable Choice. Let $X,Y$ be real or complex Hilbert spaces and let
$A:X\to Y$ be compact and bounded, with adjoint $A^*:Y\to X$. Then both
$A^*A:X\to X$ and $AA^*:Y\to Y$ are compact, self-adjoint and positive, and
$$\ker(A^*A)=\ker A,\qquad \ker(AA^*)=\ker A^*.$$

## Facts & Assumptions

**Given:** Countable Choice, real or complex Hilbert spaces $X,Y$, a compact
bounded linear operator $A:X\to Y$, and its Hilbert adjoint $A^*$.

[A1] [[def-countable-choice]]: Countable Choice is sufficient for the Hilbert
adjoint used here; the proof does not assume full Choice.

[F1] [[def-hilbert-space-adjoint]]: The adjoint satisfies
$\langle Ax,y\rangle_Y=\langle x,A^*y\rangle_X$.

[F2] [[def-compact-linear-operator]]: A compact operator maps bounded sets to
sets with compact closure.

[F3] [[lem-compositions-with-a-compact-operator-are-compact]]: A composition
of a compact operator with a bounded operator is compact.

[F4] [[thm-hilbert-adjoint-properties]]: The adjoint of a composition reverses
order, and $(A^*)^*=A$.

[F5] [[def-self-adjoint-positive-unitary-and-normal-operator]]: Self-adjoint
means $T^*=T$; positive means $\langle Tx,x\rangle\ge0$ for every $x$.

[F6] [[def-inner-product-space]]: The inner product is positive definite.

[F7] [[cor-inner-product-induces-a-norm]]: $\|x\|^2=\langle x,x\rangle$.

## Proof
1.1 Since $A$ is compact and $A^*$ is bounded, [F3] makes $A^*A$ compact. The same lemma makes $AA^*$ compact because it is the composition of the compact map $A$ after the bounded map $A^*$. By [F4], $(A^*A)^*=A^*A$ and $(AA^*)^*=AA^*$, so both are self-adjoint. [A1, F2, F3, F4]

1.2 For every $x\in X$, [F1] and [F7] give $\langle A^*Ax,x\rangle_X=\langle Ax,Ax\rangle_Y=\|Ax\|^2\ge0$. For every $y\in Y$, the same identity gives $\langle AA^*y,y\rangle_Y=\langle A^*y,A^*y\rangle_X=\|A^*y\|^2\ge0$. Thus both operators are positive. [F1, F5, F7, algebra]

2.1 If $Ax=0$, then $A^*Ax=0$. Conversely, if $A^*Ax=0$, step 1.2 implies $\|Ax\|^2=\langle A^*Ax,x\rangle=0$, so positive definiteness [F6] gives $Ax=0$. Hence $\ker(A^*A)=\ker A$. The same argument with $A^*$ in place of $A$ proves $\ker(AA^*)=\ker A^*$. [F1, F6, step 1.2, algebra] ∎
