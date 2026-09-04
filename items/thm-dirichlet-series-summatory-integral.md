---
id: thm-dirichlet-series-summatory-integral
kind: theorem
title: "Dirichlet series from arithmetic functions admit the Abel-summation integral formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-series, lem-abel-summation-for-complex-series]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard Tomczak, Analytic Number Theory, Theorem 3.5"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 1"
      url: "https://kskedlaya.org/ant/part-1-1.html"
pipeline_run: null
---

## Statement

Let $\theta\in\mathbb R$, let $(a_n)_{n\ge1}$ be complex coefficients, and put
$A(x):=\sum_{1\le n\le x} a_n$. If $A(x)=O(x^\theta)$, then for every $s$
with $\Re s > \theta$,

$$\sum_{n \ge 1} a_n n^{-s} = s \int_1^\infty A(x)x^{-s-1}\,dx.$$

For every integer $N\ge1$ one has the endpoint formula

$$\sum_{1\le n \le N} a_n n^{-s} = A(N)N^{-s} + s\int_1^N A(x)x^{-s-1}\,dx.$$

## Facts & Assumptions

**Given:** A real number $\theta$, complex coefficients $(a_n)_{n\ge1}$, their
summatory function $A(x)=\sum_{1\le n\le x}a_n$, and a complex number $s$ with
$\Re s > \theta$.

[L1] Abel summation for complex coefficients expresses finite weighted sums
through their partial sums ([[lem-abel-summation-for-complex-series]]).

[L2] The growth bound means $|A(x)| \le Cx^\theta$ for large $x$.

## Proof

**Proof technique:** direct.

1.1 Fix an integer $N\ge1$. Extend the coefficients by $a_0:=0$, set $b_0:=0$, and put $b_n:=n^{-s}$ for $1\le n\le N$. The partial sums $S_n:=\sum_{k=0}^n a_k$ in [L1] then satisfy $S_0=0$ and $S_n=A(n)$ for $1\le n\le N$. Applying the tail identity in [L1] with $p=1$ and $q=N$ gives $$\sum_{n=1}^N a_n n^{-s} = A(N)N^{-s} + \sum_{n=1}^{N-1} A(n)\bigl(n^{-s}-(n+1)^{-s}\bigr).$$ Since $$n^{-s}-(n+1)^{-s} = s\int_n^{n+1} x^{-s-1}\,dx,$$ the finite sum is exactly $s\int_1^N A(x)x^{-s-1}\,dx$, because $A(x)$ is constant on each interval $[n,n+1)$. [L1, given, algebra]

2.1 By [L2], there are $C>0$ and $x_0\ge1$ such that, for $x\ge x_0$, $$|A(x)x^{-s-1}|\le Cx^{\theta-\Re s-1}.$$ The exponent is strictly less than $-1$, so the integral over $[x_0,\infty)$ converges absolutely. On $[1,x_0]$, the function $A$ is a bounded step function and $x^{-s-1}$ is continuous, so the integral there also exists. For all sufficiently large $N$, the boundary term satisfies $$|A(N)N^{-s}|\le CN^{\theta-\Re s}\longrightarrow0.$$ Letting $N\to\infty$ in step 1.1 therefore proves that the Dirichlet-series partial sums converge to the stated improper integral. [L2, step 1.1, algebra] ∎
