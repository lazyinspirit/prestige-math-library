---
id: thm-centered-difference-dirichlet-second-order-error
kind: theorem
title: Second-order max-norm error for the centered Dirichlet scheme
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-centered-difference-dirichlet-bvp, lem-centered-difference-dirichlet-inverse-maxnorm, lem-centered-difference-dirichlet-truncation-residual, lem-of-triangle-inequality]
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $u:[0,1]\to\mathbb R$ have four continuous derivatives, satisfy $-u''=g$ and $u(0)=u(1)=0$, and let $M\ge0$ satisfy $|u^{(4)}(x)|\le M$ on $[0,1]$. For $N\ge1$, set $h=1/(N+1)$, $x_j=jh$, $g_h=(g(x_1),\ldots,g(x_N))$, and $u_{\rm grid}=(u(x_1),\ldots,u(x_N))$. If $v_h\in\mathbb R^N$ has residual $\rho_h:=A_hv_h-g_h$ for the scheme of [[alg-centered-difference-dirichlet-bvp]], then
$$
\|v_h-u_{\rm grid}\|_\infty\le\frac{Mh^2}{96}+\frac{\|\rho_h\|_\infty}{8},
$$
where $\|z\|_\infty=\max_{1\le j\le N}|z_j|$. The justified exact-arithmetic algorithm returns a solution for every admissible input, and its output has $\rho_h=0$, so its global max-norm error is at most $Mh^2/96$. The zero Dirichlet boundary closure contributes no additional residual.

## Facts & Assumptions

**Given:** The $C^4$ solution $u$, data $g=-u''$, fourth-derivative bound $M$, and $N\ge1$ as in the statement.

[F1] [[alg-centered-difference-dirichlet-bvp]] defines $A_h=h^{-2}\operatorname{tridiag}(-1,2,-1)$, fixes $U_0=U_{N+1}=0$, and on success returns a vector satisfying $A_hU=g_h$ exactly.

[F2] [[lem-centered-difference-dirichlet-inverse-maxnorm]] proves that the Thomas recurrence defined in [[alg-centered-difference-dirichlet-bvp]] returns the unique solution of $A_hU=g_h$ for every admissible exact input, so neither `linear-solve-failure` branch is reached. It also proves that $A_h$ is invertible and $\|A_h^{-1}r\|_\infty\le\|r\|_\infty/8$ for every $r\in\mathbb R^N$.

[F3] [[lem-centered-difference-dirichlet-truncation-residual]]: the exact nodal vector has residual $\tau_h=A_hu_{\rm grid}-g_h$ with $\|\tau_h\|_\infty\le Mh^2/12$, and the imposed endpoint residuals are zero.

[F4] [[lem-of-triangle-inequality]]: for real $x,y$, $|x+y|\le|x|+|y|$; the coordinatewise maximum-norm estimate applies this inequality at each coordinate.

## Proof

1.1 Let $\tau_h=A_hu_{\rm grid}-g_h$. By [F3], $\|\tau_h\|_\infty\le Mh^2/12$ and the exact endpoint values agree with the imposed endpoint closure, so the endpoint error is zero. [given, F3]

2.1 For $e_h:=v_h-u_{\rm grid}$, subtracting the definitions of $\rho_h$ and $\tau_h$ gives $A_he_h=\rho_h-\tau_h$. Since $A_h$ is invertible by [F2], $e_h=A_h^{-1}(\rho_h-\tau_h)$. [given, F1, F2, step 1.1, algebra]

3.1 By [F2], each coordinate satisfies $|(e_h)_j|\le\|\rho_h-\tau_h\|_\infty/8$. The coordinatewise triangle inequality [F4] gives $\|\rho_h-\tau_h\|_\infty\le\|\rho_h\|_\infty+\|\tau_h\|_\infty$, because for each $j$, $|\rho_j-\tau_j|\le\|\rho_h\|_\infty+\|\tau_h\|_\infty$. [F2, F4, step 2.1, algebra]

4.1 Substituting the residual bound from [F3] into step 3.1 yields $\|e_h\|_\infty\le\|\rho_h\|_\infty/8+Mh^2/(8\cdot12)=\|\rho_h\|_\infty/8+Mh^2/96$. For the exact algorithm output, [F2] guarantees that the recurrence returns the unique solution and the exact equation check succeeds, so $\rho_h=0$; exact endpoint closure was recorded in step 1.1. [F2, F3, step 1.1, step 3.1, algebra] ∎
