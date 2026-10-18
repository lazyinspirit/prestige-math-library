---
id: lem-neumann-invertibility-for-finite-matrices
kind: lemma
title: "A finite matrix within unit distance of the identity is invertible"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Youcef Saad, Numerical Methods for Large Eigenvalue Problems, 2nd ed., §3.2.1"
      url: https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf
    - title: "Mark Embree, Matrix Theory course notes, Chapter 1"
      url: https://personal.math.vt.edu/embree/math5524/chapter1.pdf
---

## Statement

If $n\ge1$, $X\in\mathbb C^{n\times n}$, and $\|X\|_2<1$, then $I+X$ is invertible.

## Facts & Assumptions

**Given:** $n\ge1$, a complex matrix $X\in\mathbb C^{n\times n}$, and $q=\|X\|_2<1$.

[F1] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|YZ\|_2\le\|Y\|_2\|Z\|_2$ for compatible matrices.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|M\|_2=\max_{\|v\|_2=1}\|Mv\|_2$.

## Proof

1.1 By induction using [F1], $\|X^k\|_2\le q^k$ for every $k\ge0$. For $N\ge0$, set $S_N=\sum_{k=0}^N(-X)^k$. If $M>N$, the geometric sum bound gives $\|S_M-S_N\|_2\le\sum_{k=N+1}^M q^k\le q^{N+1}/(1-q)$, so $(S_N)$ is Cauchy. [given, F1, algebra]

2.1 For each entry, $|(S_M-S_N)_{ij}|\le\|(S_M-S_N)e_j\|_2\le\|S_M-S_N\|_2$ by [F2]; hence every entry converges to a finite limit. Let $S$ be the matrix of those limits. For any matrix $Y$ and unit vector $x$, put $c=\max_{ij}|Y_{ij}|$ and $a_j=|x_j|$. Then $|(Yx)_i|\le c\sum_j a_j$. The identity $n\sum_j a_j^2-(\sum_j a_j)^2=\sum_{j<k}(a_j-a_k)^2\ge0$ gives $\sum_j a_j\le\sqrt n$, so each coordinate of $Yx$ has magnitude at most $c\sqrt n$. Summing the $n$ coordinate squares gives $\|Yx\|_2\le nc$, and [F2] gives $\|Y\|_2\le n\max_{ij}|Y_{ij}|$. Entrywise convergence of $S_N$ to $S$ now implies $\|S_N-S\|_2\to0$. [step 1.1, F2, algebra]

3.1 Finite multiplication gives $(I+X)S_N=S_N(I+X)=I-(-X)^{N+1}$. By step 1.1, $\|X^{N+1}\|_2\le q^{N+1}\to0$. Submultiplicativity [F1] makes multiplication by $I+X$ continuous, so taking limits using step 2.1 yields $(I+X)S=S(I+X)=I$. Hence $S$ is a two-sided inverse. [step 1.1, step 2.1, F1, algebra] ∎
