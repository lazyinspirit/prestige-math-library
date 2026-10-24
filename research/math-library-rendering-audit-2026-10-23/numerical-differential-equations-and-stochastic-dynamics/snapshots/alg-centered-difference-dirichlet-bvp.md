---
id: alg-centered-difference-dirichlet-bvp
kind: algorithm
title: Centered finite differences for the zero-Dirichlet boundary-value problem
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: []
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, author-source revision 2025.01.27, Chapter 10, linear.md"
      url: "https://raw.githubusercontent.com/fncbook/fnc/a280ed1a013393ee0a184dcbaa866522f35a3516/chapter10/linear.md"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 5: Finite Difference Approximation, Spring 2009"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 6: General Linear Second Order Equation, Spring 2009"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

The input is a real-valued continuous function $g$ on $[0,1]$ and a positive integer $N$. The procedure uses exact real arithmetic. Its admissible inputs have $N\ge1$; an input that is not a positive integer returns `invalid-mesh`.

Set $h=1/(N+1)$, $x_j=jh$ for $0\le j\le N+1$, and $g_j=g(x_j)$ for $1\le j\le N$. The unknowns are the $N$ interior values $U_1,\ldots,U_N$; set the boundary values $U_0=U_{N+1}=0$. The finite-difference equations are
$$
\frac{-U_{j-1}+2U_j-U_{j+1}}{h^2}=g_j,\qquad 1\le j\le N,
$$
or $A_hU=g_h$, where $A_h=h^{-2}\operatorname{tridiag}(-1,2,-1)$, with the known zero boundary values moved to the right-hand side (they contribute zero here).

To solve, form $b_j=h^2g_j$. Set $p_1=2$ and $s_1=b_1$. For $j=2,\ldots,N$, in increasing order, if $p_{j-1}=0$ return `linear-solve-failure`; otherwise set
$$
p_j=2-\frac1{p_{j-1}},\qquad s_j=b_j+\frac{s_{j-1}}{p_{j-1}}.
$$
If a formed pivot $p_j$ is zero, return `linear-solve-failure`. Otherwise set $U_N=s_N/p_N$ and, in decreasing order for $j=N-1,\ldots,1$, set
$$
U_j=\frac{s_j+U_{j+1}}{p_j}.
$$
Check the equations exactly. If any equation fails, return `linear-solve-failure`; otherwise return status `success` with the vector $U$ and the boundary values $U_0=U_{N+1}=0$.

## Remarks

This is an exact-arithmetic definition and makes no finite-precision accuracy claim. A numerical implementation that returns an approximate vector must report its residual separately; the assigned error theorem includes that residual as an independent term.
