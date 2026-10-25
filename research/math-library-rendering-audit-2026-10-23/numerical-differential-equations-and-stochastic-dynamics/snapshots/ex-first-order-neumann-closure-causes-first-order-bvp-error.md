---
id: ex-first-order-neumann-closure-causes-first-order-bvp-error
kind: example
title: A first-order Neumann closure limits the global rate
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-centered-difference-dirichlet-bvp]
dependency_level: 1
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

Fix $c\in\mathbb R$ and consider the mixed-boundary problem $-u''=1$ on $(0,1)$, $u(0)=0$, $u'(1)=c$. On the grid $x_j=jh$, $h=1/(N+1)$, use the same centered interior stencil as [[alg-centered-difference-dirichlet-bvp]], but close the right boundary with the first-order backward difference $(U_{N+1}-U_N)/h=c$. The exact solution is $u(x)=-x^2/2+(c+1)x$. This example changes the boundary condition and closure; it makes no claim that the assigned zero-Dirichlet theorem covers Neumann data.

## Facts & Assumptions

**Given:** $N\ge1$, $h=1/(N+1)$, $c\in\mathbb R$, the BVP and finite-difference equations in the Example, and the exact sampled values $\bar U_j=u(x_j)$.

[F1] [[alg-centered-difference-dirichlet-bvp]] supplies the uniform nodes $x_j=jh$ and centered interior operator $(-U_{j-1}+2U_j-U_{j+1})/h^2$; this example replaces its right Dirichlet closure by the stated backward-difference condition.

## Verification

1.1 For $u(x)=-x^2/2+(c+1)x$, one has $u''=-1$, $u(0)=0$, and $u'(1)=-(1)+(c+1)=c$, so $u$ solves the stated mixed-boundary BVP. [given, algebra]

1.2 Put $d_j=U_j-U_{j-1}$. Each interior equation is equivalent to $d_{j+1}=d_j-h^2$, while the boundary closure sets $d_{N+1}=hc$. Starting from this last difference and applying $d_j=d_{j+1}+h^2$ for $j=N,\ldots,1$ determines every $d_j$; then $U_0=0$ and $U_j=U_{j-1}+d_j$ determine a unique discrete vector. [given, F1, construct, algebra]

2.1 The exact quadratic samples satisfy each centered interior equation exactly. Their final backward difference is $(\bar U_{N+1}-\bar U_N)/h=u'(1)-h u''(1)/2=c+h/2$, so the boundary difference error for $e_j:=U_j-\bar U_j$ is $e_{N+1}-e_N=-h^2/2$. [given, F1, step 1.1, algebra]

3.1 Subtracting the identical interior equations gives $2e_j-e_{j-1}-e_{j+1}=0$, hence the increments $e_j-e_{j-1}$ are constant. Since $e_0=0$ and the final increment is $-h^2/2$ by step 2.1, every increment equals $-h^2/2$, and therefore $e_j=-jh^2/2=-h x_j/2$ for $0\le j\le N+1$. [step 2.1, algebra]

4.1 Thus $\max_{0\le j\le N+1}|e_j|=h/2$. This is not $O(h^2)$ as $N\to\infty$: such a bound would imply $1/(2h)\le C$ for all $h=1/(N+1)$, whereas $1/(2h)=(N+1)/2$ is unbounded. The first-order boundary closure has reduced the global rate to first order despite the interior stencil being exact on the quadratic solution. [step 3.1, given, algebra] ∎

## Remarks

The modified problem has a Neumann condition at the right endpoint, so this is a boundary-closure witness rather than a counterexample to the zero-Dirichlet error theorem.
