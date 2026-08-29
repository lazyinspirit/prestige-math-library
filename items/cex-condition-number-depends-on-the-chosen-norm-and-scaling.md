---
id: cex-condition-number-depends-on-the-chosen-norm-and-scaling
kind: counterexample
title: "Condition number depends on the chosen norm and on diagonal rescaling"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-condition-number-of-a-nonsingular-linear-system, thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Statement refuted

The condition number of a linear system is a property of the bare linear
relation alone: it does not change with the chosen norm, and diagonally
rescaling the equations leaves it unchanged.

## Facts & Assumptions

**Given:** The matrix
$A=\begin{pmatrix}1&2&0\\0&3&1\\0&0&4\end{pmatrix}$, the diagonal matrix
$D=\operatorname{diag}(10,1,1)$, and the equivalent systems $Ax=b$ and
$(DA)x=Db$.

[L1] $\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$
([[def-condition-number-of-a-nonsingular-linear-system]]).

[L2] The induced $1$-norm is the maximum column sum and the induced
$\infty$-norm the maximum row sum
([[thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]]).

## Counterexample

**Proof technique:** direct.

1.1 The inverse of the upper triangular matrix $A$ is $$A^{-1}=\begin{pmatrix}1&-2/3&1/6\\0&1/3&-1/12\\0&0&1/4\end{pmatrix},$$ obtained by back substitution from $AX=I_3$. [algebra]

1.2 By [L2], the column sums of $A$ are $1,5,5$ so $\lVert A\rVert_1=5$, and the column sums of $A^{-1}$ are $1,1,1/2$ so $\lVert A^{-1}\rVert_1=1$; [L1] gives $\kappa_1(A)=5\cdot 1=5$. [L1, L2, algebra]

1.3 By [L2], the row sums of $A$ are $3,4,4$ so $\lVert A\rVert_\infty=4$, and the row sums of $A^{-1}$ are $11/6,5/12,1/4$ so $\lVert A^{-1}\rVert_\infty=11/6$; [L1] gives $\kappa_\infty(A)=4\cdot 11/6=22/3$. [L1, L2, algebra]

1.4 The rescaled matrix is $DA=\begin{pmatrix}10&20&0\\0&3&1\\0&0&4\end{pmatrix}$, with inverse $(DA)^{-1}=A^{-1}D^{-1}=\begin{pmatrix}1/10&-2/3&1/6\\0&1/3&-1/12\\0&0&1/4\end{pmatrix}$. [algebra]

1.5 By [L2], the column sums of $DA$ are $10,23,5$ so $\lVert DA\rVert_1=23$, and the column sums of $(DA)^{-1}$ are $1/10,1,1/2$ so $\lVert(DA)^{-1}\rVert_1=1$; [L1] gives $\kappa_1(DA)=23\cdot 1=23$. [L1, L2, algebra]

2.1 Steps 1.2 and 1.3 give $\kappa_1(A)=5\ne 22/3=\kappa_\infty(A)$: the same matrix has different condition numbers in different induced norms. [step 1.2, step 1.3]

2.2 Since $D$ is invertible, the systems $Ax=b$ and $(DA)x=Db$ have exactly the same solution set, yet step 1.5 shows $\kappa_1(DA)=23\ne 5=\kappa_1(A)$: diagonal rescaling changes the condition number even though it changes nothing about the set of solutions. [step 1.5, step 1.2, algebra]

3.1 Steps 2.1 and 2.2 refute both halves of the false statement: condition number depends on the declared norm and on the scaling of the equations. [step 2.1, step 2.2] ∎
