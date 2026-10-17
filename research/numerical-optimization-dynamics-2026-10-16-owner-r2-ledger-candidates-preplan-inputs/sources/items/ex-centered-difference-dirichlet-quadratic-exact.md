---
id: ex-centered-difference-dirichlet-quadratic-exact
kind: example
title: The quadratic Dirichlet solution is represented exactly
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-centered-difference-dirichlet-bvp, lem-centered-difference-dirichlet-inverse-maxnorm]
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

Take $g(x)=1$ and $u(x)=x(1-x)/2$ on $[0,1]$. Then $-u''=g$ and $u(0)=u(1)=0$. We verify that the scheme in [[alg-centered-difference-dirichlet-bvp]] returns its exact nodal values for every $N\ge1$.

## Facts & Assumptions

**Given:** The function $u(x)=x(1-x)/2$, data $g(x)=1$, and an integer $N\ge1$.

[F1] [[alg-centered-difference-dirichlet-bvp]] uses $x_j=jh$, the interior equations $(-U_{j-1}+2U_j-U_{j+1})/h^2=g(x_j)$, and the exact endpoint values $U_0=U_{N+1}=0$.

[F2] [[lem-centered-difference-dirichlet-inverse-maxnorm]] proves that this finite-difference system has a unique solution.

## Verification

1.1 Differentiating $u(x)=x(1-x)/2$ gives $u''(x)=-1$, so $-u''=1$; also $u(0)=u(1)=0$. [given, algebra]

1.2 Let $u_j=u(x_j)$. Since $u$ is quadratic, direct substitution gives $-u_{j-1}+2u_j-u_{j+1}=h^2$ for every interior $j$; its two endpoint values are zero. Thus the samples satisfy the system in [F1]. [given, F1, algebra]

2.1 By [F2] the system has a unique solution, so the algorithm's output equals $(u_1,\ldots,u_N)$ and its nodal error is exactly zero for every $N\ge1$. [step 1.2, F2, algebra] ∎
