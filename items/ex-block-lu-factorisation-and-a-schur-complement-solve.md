---
id: ex-block-lu-factorisation-and-a-schur-complement-solve
kind: example
title: "A block LU factorisation turns a linear solve into a Schur-complement solve"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-block-lu-factorisation-via-an-invertible-leading-block, thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Example

For
$$A=\begin{pmatrix}2&1&1\\1&3&1\\1&1&2\end{pmatrix}$$

with the $1+2$ block split, the Schur complement is

$$S=\begin{pmatrix}\frac52&\frac12\\[2pt]\frac12&\frac32\end{pmatrix},$$

and

$$A=\begin{pmatrix}1&0&0\\[2pt]\frac12&1&0\\[2pt]\frac12&0&1\end{pmatrix}\begin{pmatrix}2&1&1\\0&\frac52&\frac12\\0&\frac12&\frac32\end{pmatrix}.$$

For the right-hand side $b=(4,5,4)^{\mathsf T}$, the solve $Ax=b$ reduces to the
Schur-complement solve and yields $x=(1,1,1)^{\mathsf T}$.

## Facts & Assumptions

**Given:** The displayed matrix $A$, its block split, the right-hand side $b$,
and the candidate factorisation.

[L1] An invertible leading block yields the block LU factorisation through its
Schur complement ([[thm-block-lu-factorisation-via-an-invertible-leading-block]]).

[L2] Triangular systems are solved by forward and backward substitution
([[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]).

## Verification

**Proof technique:** direct.

1.1 The leading block is $A_{11}=[2]$, so $S=\begin{pmatrix}3&1\\1&2\end{pmatrix}-\frac12\binom11(1\ 1)$, which is the displayed Schur complement. The block-LU formula of [L1] gives the displayed factorisation. [given, L1, algebra]

2.1 Solve $Ly=b$: $y_1=4$, $y_2=5-\frac12\cdot 4=3$, $y_3=4-\frac12\cdot 4=2$. Then solve $Ux=y$ from the bottom: $\frac32x_3=2-\frac12x_2$, $\frac52x_2+\frac12x_3=3$, and $2x_1+x_2+x_3=4$. This gives $x_3=1$, $x_2=1$, and $x_1=1$. [step 1.1, L2, algebra]

3.1 Steps 1.1-2.1 verify both the factorisation and the Schur-complement solve. [step 1.1, step 2.1] ∎
