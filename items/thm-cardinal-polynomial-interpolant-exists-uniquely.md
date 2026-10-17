---
id: thm-cardinal-polynomial-interpolant-exists-uniquely
kind: theorem
title: "Existence and uniqueness of the cardinal-polynomial interpolant"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - lem-finite-coefficient-vector-has-polynomial-representative
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - lem-finite-sum-laws
  - thm-reals-field
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 1"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
---

## Statement

Let $n\in\mathbb N$, $n\ge0$, let $x_0<\cdots<x_n$ be distinct real nodes, and let $y_0,\ldots,y_n\in\mathbb R$. Then $I_n y$ from [[def-cardinal-polynomial-interpolation]] is the unique real polynomial of degree at most $n$ satisfying $p(x_i)=y_i$ for every $i=0,\ldots,n$.

## Facts & Assumptions

**Given:** A natural number $n\ge0$, distinct real nodes $x_0<\cdots<x_n$, and real data $y_0,\ldots,y_n$.

[F1] [[def-cardinal-polynomial-interpolation]]: $\ell_j(X)=\prod_{k\ne j}(X-x_k)/(x_j-x_k)$ and $I_n y=\sum_{j=0}^n y_j\ell_j$.

[F2] [[lem-cardinal-basis-degree-and-values]]: $I_n y$ is the evaluation of a formal polynomial of degree at most $n$, and $\ell_j(x_i)=1$ for $i=j$ and $0$ otherwise.

[F3] [[lem-finite-coefficient-vector-has-polynomial-representative]]: a coefficient vector through index $n$ represents a formal polynomial of degree at most $n$, whose representative is zero exactly when all coefficients vanish.

[F4] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero real polynomial of degree $d$ has at most $d$ distinct real roots.

[F5] [[lem-finite-sum-laws]] and [[thm-reals-field]]: coefficientwise subtraction distributes over the finite evaluation sums, so the vector $(a_k-b_k)$ evaluates to $p-q$.

## Proof

1.1 By [F2], choose a formal polynomial $P$ of degree at most $n$ (allowing the zero polynomial) whose evaluation $p(t):=P(t)$ equals the function $I_n y(t)$ for every real $t$. At node $x_i$, [F1, F2] give $P(x_i)=p(x_i)=\sum_{j=0}^ny_j\ell_j(x_i)=y_i$. Thus the formal polynomial $P$ is an interpolant. [given, F1, F2, choose, algebra]

2.1 Let $Q$ be any formal polynomial of degree at most $n$ (allowing zero) with $Q(x_i)=y_i$, and denote its evaluation by $q(t):=Q(t)$. Extend the actual coefficient lists of $P$ and $Q$ by zeros through index $n$ (using all-zero vectors for zero polynomials), obtaining vectors $(a_k)$ and $(b_k)$; these describe their evaluations $p$ and $q$, not padded formal objects. The vector $c_k=a_k-b_k$ defines by [F3] a formal polynomial $r$ of degree at most $n$; [F5] gives $r(t)=p(t)-q(t)$ for every real $t$. Since $p$ and $q$ agree at all nodes by step 1.1 and the choice of $q$, $r$ has the $n+1$ distinct roots $x_0,\ldots,x_n$. If $r$ were nonzero, [F4] would give at most $\deg r\le n$ roots, a contradiction. Hence $r$ is the zero formal polynomial; by [F3], every $a_k-b_k=0$. The canonical coefficient lists of $P$ and $Q$ are therefore identical (or both objects are zero), so $P=Q$, and consequently $p=q$ as evaluation functions. [given, F3, F4, F5, step 1.1, algebra]

3.1 This proves that the interpolant from step 1.1 is the unique formal polynomial of degree at most $n$ satisfying the node values. [step 1.1, step 2.1] ∎
