---
id: ex-dirichlet-inverse-infinity-norm-tight-at-n3
kind: example
title: The inverse infinity row-sum bound is uniform and sharp
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-centered-difference-dirichlet-bvp, lem-centered-difference-dirichlet-inverse-maxnorm, lem-of-triangle-inequality]
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, author-source revision 2025.01.27, Chapter 10, linear.md"
      url: "https://raw.githubusercontent.com/fncbook/fnc/a280ed1a013393ee0a184dcbaa866522f35a3516/chapter10/linear.md"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 5: Finite Difference Approximation, Spring 2009"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 6: General Linear Second Order Equation, Spring 2009"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf"
verification:
  precheck: pass
---

## Example

For a real matrix $B=(b_{ij})$, define its row-sum matrix norm by $\|B\|_{\mathrm{row},\infty}:=\max_i\sum_j|b_{ij}|$. For the matrices $A_h$ from [[alg-centered-difference-dirichlet-bvp]], this norm of $A_h^{-1}$ is at most $1/8$ for every $N\ge1$; at $N=3$ it is exactly $1/8$.

## Facts & Assumptions

**Given:** The row-sum norm just defined, the Dirichlet matrices $A_h$ for $N\ge1$, and the inverse bound of [[lem-centered-difference-dirichlet-inverse-maxnorm]].

[F1] [[alg-centered-difference-dirichlet-bvp]] defines $A_h=h^{-2}\operatorname{tridiag}(-1,2,-1)$ with $h=1/(N+1)$.

[F2] [[lem-centered-difference-dirichlet-inverse-maxnorm]] proves $\|A_h^{-1}r\|_\infty\le\|r\|_\infty/8$ for every $r\in\mathbb R^N$.

[F3] [[lem-of-triangle-inequality]] gives $|x+y|\le|x|+|y|$ for real $x,y$.

## Verification

1.1 The row-sum expression is nonnegative and equals zero only when every matrix entry is zero; $\|\lambda B\|_{\mathrm{row},\infty}=|\lambda|\|B\|_{\mathrm{row},\infty}$; and [F3] applied entrywise gives $\|B+C\|_{\mathrm{row},\infty}\le\|B\|_{\mathrm{row},\infty}+\|C\|_{\mathrm{row},\infty}$. Hence it is a matrix norm. [given, F3, algebra]

1.2 At $N=3$, $h=1/4$ and [F1] gives $A_h=16T$ with $T=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$. Direct multiplication gives $A_h^{-1}=\frac1{64}\begin{pmatrix}3&2&1\\2&4&2\\1&2&3\end{pmatrix}$, since the displayed integer matrix multiplied by $T$ is $4I_3$. [F1, algebra]

2.1 Its value equals the induced infinity operator norm $\sup_{\|z\|_\infty\le1}\|Bz\|_\infty$: for every such $z$, each row obeys $|(Bz)_i|\le\sum_j|b_{ij}|$, while a row $i_0$ attaining the finite maximum is attained by the vector $z_j=\operatorname{sgn}(b_{i_0j})$, with $\operatorname{sgn}(0)=0$. [given, step 1.1, choose, algebra]

3.1 By [F2], $\|A_h^{-1}z\|_\infty\le1/8$ whenever $\|z\|_\infty\le1$. Taking the supremum and using step 2.1 shows $\|A_h^{-1}\|_{\mathrm{row},\infty}\le1/8$ for every $N$. [F2, step 2.1]

4.1 The three absolute row sums of this inverse are $6/64$, $8/64$, and $6/64$, so its row-sum norm is $8/64=1/8$. Along with the uniform bound in step 3.1, this proves the stated example and shows its constant is attained. [step 3.1, step 1.2, algebra] ∎
