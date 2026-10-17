---
id: lem-centered-difference-dirichlet-inverse-maxnorm
kind: lemma
title: Discrete maximum principle and uniform inverse bound for the Dirichlet stencil
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-centered-difference-dirichlet-bvp]
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

Let $N\ge1$, $h=1/(N+1)$, $x_j=jh$, and $A_h=h^{-2}\operatorname{tridiag}(-1,2,-1)$ on the $N$ interior values, with $w_0=w_{N+1}=0$, as in [[alg-centered-difference-dirichlet-bvp]]. For $v\in\mathbb R^N$, define $\|v\|_\infty:=\max_{1\le j\le N}|v_j|$. The Thomas recurrence in that definition has pivots $p_j=(j+1)/j>0$ and returns the unique solution of $A_hU=g_h$ for every admissible exact input; neither `linear-solve-failure` branch is reached. Also, $A_h$ is invertible; if $r_j\ge0$ for every $j$, then $(A_h^{-1}r)_j\ge0$ for every $j$; and for every $r\in\mathbb R^N$,
$$
\|A_h^{-1}r\|_\infty\le\frac18\|r\|_\infty.
$$
In particular the inverse bound is uniform over all $N\ge1$.

## Facts & Assumptions

**Given:** An integer $N\ge1$, its mesh $h=1/(N+1)$, and $r\in\mathbb R^N$. The endpoints for a vector are fixed at $w_0=w_{N+1}=0$.

[F1] [[alg-centered-difference-dirichlet-bvp]] defines the nodes, matrix, and exact Thomas recurrence: “Set $h=1/(N+1)$, $x_j=jh$ for $0\le j\le N+1$”; “The finite-difference equations are $$\frac{-U_{j-1}+2U_j-U_{j+1}}{h^2}=g_j,\qquad 1\le j\le N$$”; and the forward pivots satisfy $p_1=2$, $p_j=2-1/p_{j-1}$.

## Proof

1.1 Let $p_1=2$ and $p_j=2-1/p_{j-1}$ for $2\le j\le N$, as in [F1]. Induction gives $p_j=(j+1)/j$: it holds at $j=1$, and if $p_{j-1}=j/(j-1)$ then $p_j=2-(j-1)/j=(j+1)/j>0$. Thus every Thomas pivot is nonzero. [F1, induction, algebra]

1.2 Define $q_j=x_j(1-x_j)/2$ and $q_0=q_{N+1}=0$. Direct expansion of this quadratic gives $q_{j-1}-2q_j+q_{j+1}=-h^2$, so $A_hq=\mathbf1$. Also $0\le q_j\le1/8$, since $x(1-x)=1/4-(x-1/2)^2$ on $0\le x\le1$. [F1, algebra]

2.1 For the equation $A_hw=r$, put $b_j=h^2r_j$ and $s_1=b_1$. The first row is $p_1w_1-w_2=s_1$. If elimination has produced $p_{j-1}w_{j-1}-w_j=s_{j-1}$, then $w_{j-1}=(s_{j-1}+w_j)/p_{j-1}$; substituting this into $-w_{j-1}+2w_j-w_{j+1}=b_j$ gives $p_jw_j-w_{j+1}=b_j+s_{j-1}/p_{j-1}=s_j$, exactly the recurrence in [F1]. [F1, step 1.1, algebra]

3.1 Since $w_{N+1}=0$, backward substitution gives $w_N=s_N/p_N$ and then $w_j=(s_j+w_{j+1})/p_j$ for $j=N-1,\ldots,1$. Each pivot is positive by step 1.1, so each value is uniquely determined; substitution into the transformed rows proves it solves the original rows. Hence for every $r$ there is exactly one $w$ with $A_hw=r$, and $A_h^{-1}$ exists. [F1, step 1.1, step 2.1, algebra]

4.1 Suppose $r_j\ge0$ and let $w=A_h^{-1}r$. If the finite list $w_0,\ldots,w_{N+1}$ had a negative minimum $m$ at an interior index $j$, then $w_{j-1},w_{j+1}\ge m$ and $h^2r_j=2m-w_{j-1}-w_{j+1}\le0$. Since $r_j\ge0$ and $h>0$, equality must hold, forcing both neighbors to equal $m$. Repeating this equality to the left reaches $w_0=m<0$, contradicting $w_0=0$. Thus $w_j\ge0$ at every interior index. [given, step 3.1, choose, algebra]

5.1 Put $R=\|r\|_\infty$. The coordinate bounds $-R\mathbf1\le r\le R\mathbf1$ and step 4.1 show that $A_h^{-1}(R\mathbf1-r)=Rq-A_h^{-1}r\ge0$ and $A_h^{-1}(R\mathbf1+r)=Rq+A_h^{-1}r\ge0$. Hence $-Rq\le A_h^{-1}r\le Rq$ coordinatewise. [given, step 4.1, step 1.2, algebra]

6.1 Step 5.1 and $q_j\le1/8$ from step 1.2 give $|(A_h^{-1}r)_j|\le R/8$ for every $j$, so $\|A_h^{-1}r\|_\infty\le\|r\|_\infty/8$ for every mesh. [step 1.2, step 5.1, algebra] ∎
