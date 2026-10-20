---
id: lem-negative-entropy-geometry-of-simplex
kind: lemma
title: Negative entropy on the simplex is strongly convex and has range log n
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-mirror-map-and-bregman-divergence
  - def-convex-subset-of-euclidean-space
  - thm-algebra-of-derivatives
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - cor-second-derivative-characterises-convexity
  - thm-finite-jensen-inequality-in-euclidean-space
  - lem-natural-logarithm-bounded-by-argument
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.4.2, negative-entropy geometry on the simplex, PDF pp. 103–105 (printed pp. 81–83); the book defers the diameter proof to an exercise."
    - title: "Peter Bartlett, Stat 260/CS 294-102: Learning in Sequential Decision Problems, mirror-descent lecture notes"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Slide 27, negative entropy and exponential weights; the strong-convexity and entropy-range claims are proved locally."
verification:
  precheck: n/a
---

## Statement

Let $n\ge2$. Coordinates in $\mathbb R^{n-1}$ use the library's function-space convention: for $v\in\mathbb R^{n-1}$ and $1\le i<n$, write $v_i:=v(i-1)$. Let

$$K_n:=\{q\in\mathbb R^{n-1}:q_i\ge0\text{ for all }1\le i<n,\ \sum_{i=1}^{n-1}q_i\le1\},$$

and for $q\in K_n$ put $p_i=q_i$ for $1\le i<n$ and $p_n=1-\sum_{i=1}^{n-1}q_i$. Define $R(q)=\sum_{i=1}^np_i\log p_i$, with $0\log0:=0$. In the independent coordinates $q_1,\ldots,q_{n-1}$, $R$ is continuous on $K_n$, is twice continuously differentiable on its interior, is $1$-strongly convex in the Euclidean norm, and satisfies

$$-\log n\le R(q)\le0.$$

The minimum $-\log n$ is attained at $p_i=1/n$ for every $i$, and the maximum $0$ is attained at each vertex of the simplex.

## Statement references

[[def-mirror-map-and-bregman-divergence]]: defines strong convexity by the displayed Euclidean quadratic inequality and defines the interior Hessian norms used by this regularizer.

[[def-convex-subset-of-euclidean-space]]: convexity means every segment between simplex points remains in the simplex.

## Facts & Assumptions

**Given:** An integer $n\ge2$ and the finite simplex $K_n$ with the coordinates and boundary convention in the Statement.

[F1] [[def-mirror-map-and-bregman-divergence]]: a regularizer is strongly convex with constant $m$ when $R((1-\lambda)x+\lambda y)\le(1-\lambda)R(x)+\lambda R(y)-\frac m2\lambda(1-\lambda)\|x-y\|_2^2$; its Hessian is the matrix of second partial derivatives.

[F2] [[thm-logarithm-derivative-and-integral]]: $(\log x)'=1/x$ for $x>0$.

[F3] [[thm-algebra-of-derivatives]]: the product and chain rules give the derivatives of $s\log s$.

[F4] [[thm-natural-logarithm-laws]]: $\log$ is continuous and strictly increasing, $\log1=0$, and $\log(1/x)=-\log x$ for $x>0$.

[F5] [[lem-natural-logarithm-bounded-by-argument]]: $0\le\log u\le u-1$ for $u\ge1$.

[F6] [[cor-second-derivative-characterises-convexity]]: on an open real interval, a twice-differentiable scalar function is convex if its second derivative is nonnegative everywhere.

[F7] [[thm-finite-jensen-inequality-in-euclidean-space]]: for a convex scalar function and finitely many points in its convex domain, its value at a convex combination is at most the same combination of its values.

[F8] [[def-convex-subset-of-euclidean-space]]: a set is convex when it contains every segment between its points; $K_n$ is convex because its nonnegativity and sum-at-most-one inequalities are preserved by convex combinations.

## Proof

1.1 For $0<x\le1$, set $u=x^{-1/2}\ge1$. Then $|x\log x|=2x\log u\le2x(u-1)\le2\sqrt{x}$ by [F4, F5], and $2\sqrt{x}\to0$ as $x\downarrow0$. Thus $s\mapsto s\log s$, defined to be $0$ at $s=0$, is continuous on $[0,1]$, and its finite sum $R$ is continuous on $K_n$. [given, F3, F4, F5, algebra]

1.2 On the interior, differentiation using [F2, F3] gives $\partial_iR=\log q_i-\log p_n$ and $\nabla^2R(q)=\operatorname{diag}(1/q_1,\ldots,1/q_{n-1})+\frac1{p_n}\mathbf1\mathbf1^\top$. Since $0<q_i\le1$ and $p_n>0$, $v^\top(\nabla^2R(q)-I)v=\sum_{i<n}(1/q_i-1)v_i^2+(\sum_{i<n}v_i)^2/p_n\ge0$. [given, F2, F3, algebra]

2.1 For interior $q,r$, [F8] keeps $(1-s)q+sr$ in $K_n$. The restriction $s\mapsto R((1-s)q+sr)-\frac12\|(1-s)q+sr\|_2^2$ has nonnegative second derivative on $0<s<1$ by step 1.2, hence is convex there by [F6]; continuity extends its convexity inequality to $s=0,1$. Expanding the squared norm yields the strong-convexity inequality with constant $1$ from the definition in [F1] for interior $q,r$. [given, step 1.2, F1, F6, F8, algebra]

2.2 Each $p_i\in[0,1]$ gives $p_i\log p_i\le0$, so $R(q)\le0$. The scalar function $\phi(s)=s\log s$, extended by $\phi(0)=0$, is continuous by step 1.1 and convex on $(0,1)$ because $\phi''(s)=1/s>0$; [F6] and continuity extend convexity to $[0,1]$. [given, F2, F3, F6, step 1.1, algebra]

3.1 Let $e$ be the uniform point of $K_n$. For arbitrary $q,r\in K_n$ and $0<\epsilon<1$, both $(1-\epsilon)q+\epsilon e$ and $(1-\epsilon)r+\epsilon e$ are interior. Apply step 2.1 to them and let $\epsilon\downarrow0$; step 1.1 gives continuity, so the same inequality in [F1] holds for all $q,r\in K_n$. [given, F1, step 1.1, step 2.1, algebra]

4.1 Apply [F7] to $p_1,\ldots,p_n$ with equal weights $1/n$. Since their average is $1/n$, it gives $R(q)/n\ge\phi(1/n)=-(\log n)/n$, so $R(q)\ge-\log n$. At the uniform point equality holds, while at a vertex the only nonzero summand is $1\log1=0$; these attain both endpoints. [given, F4, F7, F8, step 2.2, algebra] ∎

