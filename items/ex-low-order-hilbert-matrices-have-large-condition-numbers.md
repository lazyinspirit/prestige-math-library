---
id: ex-low-order-hilbert-matrices-have-large-condition-numbers
kind: example
title: "Low-order Hilbert matrices already have large condition numbers"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
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



## Example

The Hilbert matrices $H_n$ with entries $(H_n)_{ij}=1/(i+j+1)$ for
$0\le i,j<n$ are already severely ill conditioned at order two and three:

$$\kappa_\infty(H_2)=27,\qquad \kappa_\infty(H_3)=748.$$

The point is not asymptotic growth but that the ill conditioning appears at the
smallest possible orders.

## Facts & Assumptions

**Given:** The Hilbert matrices
$H_2=\begin{pmatrix}1&1/2\\1/2&1/3\end{pmatrix}$ and
$H_3=\begin{pmatrix}1&1/2&1/3\\1/2&1/3&1/4\\1/3&1/4&1/5\end{pmatrix}$.

[L1] $\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$
([[def-condition-number-of-a-nonsingular-linear-system]]).

[L2] The induced $\infty$-norm is the maximum row sum
([[thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]]).

## Verification

**Proof technique:** direct.

1.1 The inverse of $H_2$ is $H_2^{-1}=\begin{pmatrix}4&-6\\-6&12\end{pmatrix}$: multiplying, $(H_2H_2^{-1})_{00}=4-3=1$, $(H_2H_2^{-1})_{01}=-6+6=0$, $(H_2H_2^{-1})_{10}=2-2=0$ and $(H_2H_2^{-1})_{11}=-3+4=1$. [algebra]

1.2 By [L2], $\lVert H_2\rVert_\infty=1+1/2=3/2$ and $\lVert H_2^{-1}\rVert_\infty=\max\{4+6,\,6+12\}=18$, so [L1] gives $\kappa_\infty(H_2)=(3/2)\cdot 18=27$. [L1, L2, algebra]

1.3 The inverse of $H_3$ is $$H_3^{-1}=\begin{pmatrix}9&-36&30\\-36&192&-180\\30&-180&180\end{pmatrix},$$ as a direct multiplication verifies: the first column against the rows of $H_3$ gives $9-18+10=1$, $9/2-12+15/2=0$, $3-9+6=0$, and the other six entries similarly reduce to the identity matrix. [algebra]

1.4 By [L2], $\lVert H_3\rVert_\infty=1+1/2+1/3=11/6$, and the row sums of $H_3^{-1}$ are $9+36+30=75$, $36+192+180=408$ and $30+180+180=390$, so $\lVert H_3^{-1}\rVert_\infty=408$; [L1] gives $\kappa_\infty(H_3)=(11/6)\cdot 408=748$. [L1, L2, algebra]

2.1 Steps 1.2 and 1.4 exhibit condition numbers $27$ and $748$ at orders $2$ and $3$: the Hilbert family is badly conditioned from the start. [step 1.2, step 1.4] ∎
