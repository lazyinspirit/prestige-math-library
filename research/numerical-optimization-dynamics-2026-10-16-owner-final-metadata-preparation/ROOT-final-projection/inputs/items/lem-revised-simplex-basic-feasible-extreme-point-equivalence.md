---
id: lem-revised-simplex-basic-feasible-extreme-point-equivalence
kind: lemma
title: "Basic feasible solutions, extreme points, and basis existence"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-revised-simplex-standard-form-linear-program
  - def-revised-simplex-basis-dictionary
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 2
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§2.2–2.6"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §§1.2–2.3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Statement

Let $A\in\mathbb R^{m\times n}$ have full row rank and let $P(A,b)$ be the feasible set of [[def-revised-simplex-standard-form-linear-program]]. For a feasible $x$, define its support by $S(x)=\{j:x_j>0\}$. A set $C$ is **convex** if $tu+(1-t)v\in C$ for all $u,v\in C$ and $0<t<1$. A point $x\in C$ is an **extreme point** if every representation $x=tu+(1-t)v$ with $u,v\in C$ and $0<t<1$ forces $u=v=x$. Then $x$ is an extreme point of $P(A,b)$ if and only if the columns $\{a_j:j\in S(x)\}$ are linearly independent. This is equivalent to $x$ being a basic feasible solution for [[def-revised-simplex-basis-dictionary]]. In particular, every nonempty $P(A,b)$ has a basic feasible solution. The statement includes $m=0$ using the empty-basis convention.

## Facts & Assumptions

**Given:** A full-row-rank matrix $A$, a vector $b$, and a feasible point $x\in P(A,b)$.

[F1] [[def-revised-simplex-standard-form-linear-program]]: Its feasible set is $P(A,b)=\{x\in\mathbb R^n:Ax=b,\ x_j\ge0\text{ for every }j\}$.

[F2] [[def-revised-simplex-basis-dictionary]]: The basic vector $x(B)$ is defined by $x_B(B)=A_B^{-1}b$ and $x_j(B)=0$ for $j\in N$; the basis is primal feasible, and $x(B)$ is a basic feasible solution, exactly when $A_B^{-1}b\ge0$.

## Proof


1.1 If the support columns indexed by $S(x)$ are dependent, choose a nonzero vector $d$ supported on $S(x)$ with $Ad=0$. Since each $x_j>0$ on this finite support, choose $\varepsilon>0$ smaller than $x_j/|d_j|$ for every nonzero $d_j$. Then $x+\varepsilon d$ and $x-\varepsilon d$ are distinct nonnegative solutions of $Az=b$, and their midpoint is $x$; hence $x$ is not extreme. [given, F1, choose, construct, algebra]

1.2 Suppose the support columns are independent and $x=tu+(1-t)v$ for feasible $u,v$ and $0<t<1$. For $j\notin S(x)$, nonnegativity and $x_j=0$ force $u_j=v_j=0$. Thus $u-v$ is supported on $S(x)$ and $A(u-v)=0$; independence forces $u=v$, and the convex-combination identity then gives $u=v=x$. This proves extremality under its stated definition. [given, F1, algebra]

2.1 If the support columns of a feasible point are dependent, take $d$ as in step 1.1 and choose its sign so some $d_j<0$. With $t=\min_{d_j<0}x_j/(-d_j)>0$, the point $x+td$ remains feasible, remains nonnegative, and has strictly fewer positive coordinates. Repeating this support reduction at most $n$ times gives a feasible point whose support columns are independent. [given, F1, step 1.1, choose, algebra]

3.1 Because $A$ has rank $m$, its columns span $\mathbb R^m$. Extend the independent support columns from step 2.1 to $m$ independent columns of $A$ by repeatedly taking the least-index column outside their current span; assigning zero to each added coordinate makes the reduced point the basic vector of that basis. It is therefore a basic feasible solution. When $m=0$, support reduction gives the zero vector and the empty list is the required basis. [F1, F2, step 2.1, choose, construct]

4.1 A basic feasible solution has support contained in an independent basis, so its support columns are independent and step 1.2 makes it extreme. Conversely, an extreme feasible point has independent support by step 1.1 and extends to a basis by step 3.1. Thus the three stated conditions are equivalent, and step 3.1 proves existence whenever $P(A,b)$ is nonempty. [F1, F2, step 1.1, step 1.2, step 3.1] ∎
