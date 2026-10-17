---
id: lem-centered-difference-dirichlet-truncation-residual
kind: lemma
title: Centered-difference residual bound with exact Dirichlet closure
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-centered-difference-dirichlet-bvp, cor-taylor-remainder-bound, lem-of-triangle-inequality]
dependency_level: 1
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
---

## Statement

Let $u:[0,1]\to\mathbb R$ have four continuous derivatives, with $u(0)=u(1)=0$, let $g=-u''$, and suppose $|u^{(4)}(x)|\le M$ on $[0,1]$ for a constant $M\ge0$. For the grid and matrix of [[alg-centered-difference-dirichlet-bvp]], put $u_j=u(x_j)$, $g_j=g(x_j)$, and $\tau_j=(A_hu_{\rm grid})_j-g_j$ for $1\le j\le N$. Then
$$
\max_{1\le j\le N}|\tau_j|\le\frac{Mh^2}{12}.
$$
The endpoint closure residuals are exactly zero: $u(0)-0=0$ and $u(1)-0=0$. If $\tau_0=\tau_{N+1}:=0$ records those boundary residuals, then $\max_{0\le j\le N+1}|\tau_j|\le Mh^2/12$ as well.

## Facts & Assumptions

**Given:** The regularity, boundary values, differential equation and fourth-derivative bound in the statement; $N\ge1$ and $h=1/(N+1)$.

[F1] [[alg-centered-difference-dirichlet-bvp]] fixes $x_j=jh$, sets $U_0=U_{N+1}=0$, and uses $(A_hU)_j=(-U_{j-1}+2U_j-U_{j+1})/h^2$ for $1\le j\le N$.

[F2] [[cor-taylor-remainder-bound]]: on a closed interval, if $f$ has four derivatives and $|f^{(4)}|\le M$, its degree-three Taylor remainder satisfies $|R_{3,a}f(x)|\le M|x-a|^4/24$.

[F3] [[lem-of-triangle-inequality]]: for real $x,y$, $|x+y|\le|x|+|y|$; here apply it to the two Taylor remainders.

## Proof

1.1 The endpoint values of the exact function agree with the algorithm's prescribed endpoint values, so both boundary closure residuals are $0$. Fix an interior index $j$. Applying [F2] with center $x_j$ and targets $x_j-h$ and $x_j+h$ gives $u(x_j\pm h)=u_j\pm hu'(x_j)+\frac{h^2}{2}u''(x_j)\pm\frac{h^3}{6}u'''(x_j)+R_\pm$, with $|R_\pm|\le Mh^4/24$. Both closed intervals lie in $[0,1]$, including when $j=1$ or $j=N$. [given, F1, F2, choose]

2.1 Substituting these expansions into [F1] cancels the odd derivative terms and gives $(A_hu_{\rm grid})_j=-u''(x_j)-(R_-+R_+)/h^2$. Since $g=-u''$, it follows that $\tau_j=-(R_-+R_+)/h^2$. [given, F1, step 1.1, algebra]

3.1 By [F3] and step 1.1, $|\tau_j|\le(|R_-|+|R_+|)/h^2\le(Mh^4/24+Mh^4/24)/h^2=Mh^2/12$. This holds for every interior index, and the endpoint residuals from step 1.1 are zero, proving both bounds. [F2, F3, step 1.1, step 2.1, algebra] ∎
