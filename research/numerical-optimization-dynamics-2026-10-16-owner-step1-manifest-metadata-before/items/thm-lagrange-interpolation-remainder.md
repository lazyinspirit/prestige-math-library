---
id: thm-lagrange-interpolation-remainder
kind: theorem
title: "Pointwise Lagrange interpolation remainder"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - lem-polynomial-highest-derivative
  - def-higher-derivatives-and-smoothness
  - lem-higher-order-rolle
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - def-canonical-natural
  - def-factorial-and-falling-factorial
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
  - thm-reals-field
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 3"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
---

## Statement

Let $n\in\mathbb N$, $n\ge0$, let $a<b$, let $x_0<\cdots<x_n$ lie in $[a,b]$, and let $f\in C^{n+1}([a,b],\mathbb R)$ with the convention of [[def-higher-derivatives-and-smoothness]]. Put $p=I_n f$ and $\omega_n(X)=\prod_{j=0}^n(X-x_j)$ as in [[def-cardinal-polynomial-interpolation]]. If $x=x_j$ for a node, then $f(x)-p(x)=0$. If $x\in[a,b]$ is not a node, there is
$$\xi\in\bigl(\min\{x,x_0\},\max\{x,x_n\}\bigr)$$
such that
$$f(x)-p(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!_{\mathbb R}}\,\omega_n(x),$$
where $(n+1)!_{\mathbb R}:=\prod_{j=1}^{n+1}j$, with each natural factor read as its canonical real image under [[def-canonical-natural]].

## Facts & Assumptions

**Given:** A natural $n\ge0$, a nondegenerate closed interval $[a,b]$, distinct nodes $x_0<\cdots<x_n$ in that interval, $f\in C^{n+1}([a,b],\mathbb R)$, and a query $x\in[a,b]$.

[F1] [[def-cardinal-polynomial-interpolation]]: $\omega_n(X)=\prod_{j=0}^n(X-x_j)$, $\ell_j(X)=\prod_{k\ne j}(X-x_k)/(x_j-x_k)$, and $I_n f=\sum_{j=0}^n f(x_j)\ell_j$.

[F2] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: $I_n f$ is a polynomial of degree at most $n$ and satisfies $I_n f(x_j)=f(x_j)$ at every node.

[F3] [[def-higher-derivatives-and-smoothness]]: $f\in C^{n+1}([a,b])$ means its derivatives through order $n+1$ exist on $[a,b]$ (one-sided at endpoints) and are continuous there.

[F4] [[lem-higher-order-rolle]]: if $m\in\mathbb N$, $m\ge1$, $z_0<\cdots<z_m$, $g$ is continuous on $[z_0,z_m]$, $m$-times differentiable on $(z_0,z_m)$, and $g(z_j)=0$ for all $j$, then $g^{(m)}(\eta)=0$ for some $\eta\in(z_0,z_m)$.

[F5] [[lem-polynomial-highest-derivative]]: if $q(X)=\sum_{k=0}^{m}a_kX^k$ has degree at most $m$, then $q^{(m)}(t)=a_m m!_{\mathbb R}$; the coefficient $a_m$ is zero when $\deg q<m$, and it is $1$ when $q$ is monic of degree $m$.

[F6] [[thm-algebra-of-derivatives]]: at a limit point of a common domain, sums and scalar multiples of differentiable functions are differentiable with the sum and scalar-multiple derivative rules; the hypotheses and conclusion also apply to their restrictions to intervals.

[F7] [[thm-algebra-of-continuous-functions]]: polynomial functions are continuous on their domain, and finite sums and scalar multiples of continuous functions are continuous.

[F8] [[lem-cardinal-basis-degree-and-values]]: $I_n f$ is a polynomial function of degree at most $n$, $\omega_n$ is monic of degree $n+1$, and $\omega_n(x)\ne0$ off the nodes.

[F9] [[def-factorial-and-falling-factorial]] and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: the real product $m!_{\mathbb R}=\prod_{j=1}^{m}j$ is the canonical real image of the nonzero natural factorial $m!$; thus it is nonzero, and [[thm-reals-field]] supplies its inverse.

## Proof

1.1 If $x=x_j$ for some node, [F2] gives $p(x)=f(x)$, so the error is zero. [given, F2, algebra]

1.2 Suppose $x$ is not a node. By [F8], $\omega_n(x)\ne0$, so set $c=(f(x)-p(x))/\omega_n(x)$ and define $g(t)=f(t)-p(t)-c\omega_n(t)$ on $[a,b]$. At every node $x_j$, [F2] gives $f(x_j)=p(x_j)$ and [F1] gives $\omega_n(x_j)=0$, so $g(x_j)=0$; by the choice of $c$, also $g(x)=0$. [given, F1, F2, F8, construct]

1.3 By [F8], $\omega_n$ is monic of degree $n+1$ and $p$ has degree at most $n$, so their coefficients at degree $n+1$ are respectively $1$ and $0$. Applying [F5] to these two polynomials gives $p^{(n+1)}(\xi)=0$ and $\omega_n^{(n+1)}(\xi)=(n+1)!_{\mathbb R}$. [F5, F8, algebra]

2.1 Sort the $n+2$ distinct points consisting of the nodes and $x$ as $z_0<\cdots<z_{n+1}$. The function $f$ is $C^{n+1}$ by [F3]; $p$ has degree at most $n$ and $\omega_n$ has degree $n+1$ by [F8]. Their iterated derivatives through order $n+1$ exist by [F5]. Repeated application of the sum and scalar-multiple rules [F6] shows that $g$ is $(n+1)$-times differentiable on $(z_0,z_{n+1})$. Also, $f$ is continuous by [F3], the polynomial functions $p$ and $\omega_n$ are continuous by [F7], and the finite linear combination defining $g$ is continuous on $[z_0,z_{n+1}]$ by [F7]. Apply [F4] with $m=n+1$ to the zeros from step 1.2. This yields $\xi\in(z_0,z_{n+1})$ with $g^{(n+1)}(\xi)=0$. [given, step 1.2, F3, F4, F5, F6, F7, F8, choose]

3.1 Differentiate the defining identity for $g$ $n+1$ times at $\xi$. Step 2.1 licenses these derivatives and [F6] preserves the linear combination, so $0=g^{(n+1)}(\xi)=f^{(n+1)}(\xi)-c(n+1)!_{\mathbb R}$. By [F9] the factorial factor is nonzero, so $c=f^{(n+1)}(\xi)/(n+1)!_{\mathbb R}$. [step 2.1, step 1.3, F6, F9, algebra]

4.1 Substituting the value of $c$ into its definition in step 1.2 gives the claimed remainder formula. Since $z_0=\min\{x,x_0\}$ and $z_{n+1}=\max\{x,x_n\}$, $\xi$ lies in the stated interval. [step 1.2, step 2.1, step 3.1, algebra] ∎
