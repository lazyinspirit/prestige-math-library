---
id: ex-two-by-two-systems-with-contrasting-condition-numbers
kind: example
title: "Two 2x2 systems can have dramatically different condition numbers"
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



## Example

The diagonal system $A_1=\operatorname{diag}(1,4)$ is well conditioned, while the
nearly singular system

$$A_2=\begin{pmatrix}1&1\\1&1+\varepsilon\end{pmatrix},\qquad\varepsilon=\frac{1}{100},$$

is already severely ill conditioned, even though both matrices have the same
$2\times 2$ shape and entries of the same order.

## Facts & Assumptions

**Given:** The matrices $A_1=\operatorname{diag}(1,4)$ and
$A_2=\begin{pmatrix}1&1\\1&1+\varepsilon\end{pmatrix}$ with $\varepsilon=1/100>0$.

[L1] $\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$ for $p\in\{1,\infty\}$
([[def-condition-number-of-a-nonsingular-linear-system]]).

[L2] The induced $1$-norm is the maximum column sum and the induced
$\infty$-norm the maximum row sum
([[thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]]).

[L3] For a nonsingular $2\times2$ matrix $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$,
$M^{-1}=(ad-bc)^{-1}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.

## Verification

**Proof technique:** direct.

1.1 For $A_1$, the column sums and row sums are $\{1,4\}$, so [L2] gives $\lVert A_1\rVert_1=\lVert A_1\rVert_\infty=4$; its inverse is $\operatorname{diag}(1,1/4)$, with column and row sums $\{1,1/4\}$, so $\lVert A_1^{-1}\rVert_1=\lVert A_1^{-1}\rVert_\infty=1$. [L2, algebra]

1.2 For $A_2$, the column sums are $\{2,2+\varepsilon\}$ and the row sums $\{2,2+\varepsilon\}$, so [L2] gives $\lVert A_2\rVert_1=\lVert A_2\rVert_\infty=2+\varepsilon$. [L2, algebra]

1.3 By [L3], $A_2^{-1}=\varepsilon^{-1}\begin{pmatrix}1+\varepsilon&-1\\-1&1\end{pmatrix}$, whose column sums and row sums are both $\{(2+\varepsilon)/\varepsilon,\,2/\varepsilon\}$, the first being larger; so [L2] gives $\lVert A_2^{-1}\rVert_1=\lVert A_2^{-1}\rVert_\infty=(2+\varepsilon)/\varepsilon$. [L2, L3, algebra]

2.1 By [L1] and step 1.1, $\kappa_1(A_1)=\kappa_\infty(A_1)=4\cdot 1=4$: for every right-hand side $b\ne 0$ a relative perturbation of $b$ changes the solution by at most four times as much. [L1, step 1.1, algebra]

2.2 By [L1], $\kappa_1(A_2)=\kappa_\infty(A_2)=(2+\varepsilon)^{2}/\varepsilon$, and at $\varepsilon=1/100$ this is $(201/100)^{2}\cdot 100=201^{2}/100=40401/100$. [L1, step 1.2, step 1.3, algebra]

3.1 The two systems of the same shape therefore have condition numbers $4$ and $40401/100\approx 404$: the nearly singular one amplifies relative data perturbations about a hundred times more, and the contrast comes from the small determinant $\varepsilon$, not from large entries. [step 2.1, step 2.2] ∎
