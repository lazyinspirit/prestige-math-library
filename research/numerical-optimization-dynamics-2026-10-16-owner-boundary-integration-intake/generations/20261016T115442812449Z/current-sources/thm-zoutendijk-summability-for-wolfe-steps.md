---
id: thm-zoutendijk-summability-for-wolfe-steps
kind: theorem
title: "Wolfe steps imply the Zoutendijk summability condition"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-wolfe-and-strong-wolfe-conditions
  - lem-wolfe-step-lower-bound-from-the-descent-angle
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.2, Theorem 3.2 and complete proof, printed pp. 38–39 / PDF pp. 56–57."
---

## Statement

Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$ and
let $x_0\in D$. Define its initial sublevel set
$L_0:=\{x\in D:f(x)\le f(x_0)\}$, and suppose $f$ is bounded below on
$L_0$. Let $N\subseteq D$ contain every segment $x_k+[0,t_k]p_k$ in a
sequence $(x_k)_{k\ge0}\subset D$. Suppose there is $L>0$ such that
$$
\|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2\qquad(u,v\in N).
$$
For every $k\ge0$, assume $x_{k+1}=x_k+t_kp_k$, $p_k\ne0$ is a descent
direction at $x_k$, and $t_k>0$ is a Wolfe step for $f,x_k,p_k$ under
[[def-wolfe-and-strong-wolfe-conditions]]. Define
$$\cos\theta_k:=-\frac{\langle\nabla f(x_k),p_k\rangle}{\|\nabla f(x_k)\|_2\|p_k\|_2}.$$
Then
$$
\sum_{k=0}^{\infty}\cos^2\theta_k\,\|\nabla f(x_k)\|_2^2<\infty.
$$

## Facts & Assumptions

**Given:** $D,f,x_0,L_0,N,L,(x_k),(p_k),(t_k)$ and the hypotheses in the
Statement.

[F1] [[def-wolfe-and-strong-wolfe-conditions]]: a Wolfe step satisfies $f(x_k+t_kp_k)\le f(x_k)+c_1t_k\langle\nabla f(x_k),p_k\rangle$ and $\langle\nabla f(x_k+t_kp_k),p_k\rangle\ge c_2\langle\nabla f(x_k),p_k\rangle$, with $0<c_1<c_2<1/2$.

[F2] [[lem-wolfe-step-lower-bound-from-the-descent-angle]]: on a segment where $\nabla f$ is $L$-Lipschitz, a Wolfe step satisfies $t_k\ge\frac{1-c_2}{L}\frac{\cos\theta_k\|\nabla f(x_k)\|_2}{\|p_k\|_2}$.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 Put $g_k:=\nabla f(x_k)$. Since $g_k^Tp_k<0$ and $p_k\ne0$, $g_k\ne0$ and $0<\cos\theta_k\le1$. [given, algebra]

2.1 By [F2], $t_k\|p_k\|_2\ge\frac{1-c_2}{L}\cos\theta_k\|g_k\|_2$. Multiplying by $c_1\cos\theta_k\|g_k\|_2>0$ gives $c_1t_k(-g_k^Tp_k)=c_1t_k\cos\theta_k\|g_k\|_2\|p_k\|_2\ge\frac{c_1(1-c_2)}{L}\cos^2\theta_k\|g_k\|_2^2$. [given, F2, step 1.1, algebra]

3.1 The Armijo inequality in [F1] and step 2.1 give $f(x_k)-f(x_{k+1})\ge\frac{c_1(1-c_2)}{L}\cos^2\theta_k\|g_k\|_2^2$. Summing from $k=0$ to $m$ telescopes to $f(x_0)-f(x_{m+1})$; Armijo also gives $f(x_{k+1})\le f(x_k)$, so induction from $x_0\in L_0$ keeps every iterate in $L_0$. [given, F1, step 2.1, algebra, induction]

4.1 Let $m_f$ be a lower bound for $f$ on $L_0$. Step 3.1 gives $\frac{c_1(1-c_2)}{L}\sum_{k=0}^{m}\cos^2\theta_k\|g_k\|_2^2\le f(x_0)-f(x_{m+1})\le f(x_0)-m_f$. The partial sums are nondecreasing and bounded above independently of $m$; hence they converge to a finite limit. [given, step 3.1, algebra] ∎
