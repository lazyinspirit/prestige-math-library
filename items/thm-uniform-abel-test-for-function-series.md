---
id: thm-uniform-abel-test-for-function-series
kind: theorem
title: "Uniform Abel test: a uniformly convergent function series times a uniformly bounded pointwise monotone family gives a uniformly convergent product series"
status: published
origin: session
deps: [cor-uniform-cauchy-criterion-function-series, lem-abel-summation-by-parts, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Alberta Math 317, Infinite Series of Functions"
      url: "https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $u_k,v_k:X\to\mathbb{R}$. Suppose $\sum u_k$
converges uniformly on $X$, there is $M\ge0$ with $|v_k(x)|\le M$ for every
$k,x$, and for each fixed $x$ the real sequence $(v_k(x))$ is monotone. Its
direction may depend on $x$. Then $\sum u_kv_k$ converges uniformly on $X$.

## Facts & Assumptions

**Given:** Functions $u_k,v_k:X\to\mathbb{R}$ satisfying the hypotheses in the Statement.

[L1] Uniform convergence of $\sum u_k$ is equivalent to uniformly small tails ([[cor-uniform-cauchy-criterion-function-series]]).

[L2] For real sequences $(a_j),(b_j)$ and $A_n:=\sum_{j<n}a_j$, Abel summation by parts says that, for every $n\ge1$, $\sum_{j<n}a_jb_j=A_nb_{n-1}-\sum_{j<n-1}A_{j+1}(b_{j+1}-b_j)$ ([[lem-abel-summation-by-parts]]).

[L3] Finite sums split and telescope, and repeated triangle inequalities bound the absolute value of a finite sum by the sum of the absolute values ([[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ and put $\eta:=\varepsilon/(3M+1)>0$. By [L1] choose $N$ such that $\left|\sum_{k=m+1}^{n}u_k(x)\right|<\eta$ for every $n>m\ge N$ and every $x\in X$. [L1, choose]

1.2 For every $x\in X$ and naturals $p\le q$, monotonicity makes all successive differences $v_k(x)-v_{k+1}(x)$ have one sign, so $\sum_{k=p}^{q-1}|v_k(x)-v_{k+1}(x)|=|v_p(x)-v_q(x)|\le2M$. [given, L3, algebra]

2.1 Fix $n>m\ge N$ and $x\in X$, put $p:=m+1$, $q:=n$, and define $B_r(x):=\sum_{k=p}^{r}u_k(x)$ for $p\le r\le q$. Then $|B_r(x)|<\eta$ for every such $r$. [step 1.1, construct]

3.1 For $0\le j\le q-p$ put $a_j:=u_{p+j}(x)$ and $b_j:=v_{p+j}(x)$. Their partial sums satisfy $A_{j+1}=B_{p+j}(x)$, so [L2] with $n=q-p+1$ gives $\sum_{k=p}^{q}u_k(x)v_k(x)=B_q(x)v_q(x)+\sum_{k=p}^{q-1}B_k(x)\bigl(v_k(x)-v_{k+1}(x)\bigr)$. [step 2.1, L2, L3]

4.1 By steps 2.1, 3.1, and 1.2, $\left|\sum_{k=p}^{q}u_k(x)v_k(x)\right|\le\eta|v_q(x)|+\eta\sum_{k=p}^{q-1}|v_k(x)-v_{k+1}(x)|\le3M\eta<\varepsilon$. [step 2.1, step 3.1, step 1.2, L3, algebra]

5.1 The estimate is uniform in $x$ and holds for every $n>m\ge N$, so [L1] proves uniform convergence of $\sum u_kv_k$. [step 4.1, L1] ∎
