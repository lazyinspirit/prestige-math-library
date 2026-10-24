---
id: thm-uniform-dirichlet-test-for-function-series
kind: theorem
title: "Uniform Dirichlet test: uniformly bounded partial sums times a uniformly decreasing null family give a uniformly convergent function series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
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

Let $X$ be a set and let $u_k,v_k:X\to\mathbb{R}$. Put
$A_n(x):=\sum_{k<n}u_k(x)$. Suppose:

- there is $M\ge0$ such that $|A_n(x)|\le M$ for every $n$ and $x$;
- $v_k(x)\ge0$ and $v_{k+1}(x)\le v_k(x)$ for every $k$ and $x$;
- $v_k\to0$ uniformly on $X$.

Then the function series $\sum u_kv_k$ converges uniformly on $X$.

## Facts & Assumptions

**Given:** Functions $u_k,v_k:X\to\mathbb{R}$ satisfying the three hypotheses in the Statement, with partial sums $A_n(x)=\sum_{k<n}u_k(x)$.

[L1] Abel summation by parts expresses a finite sum $\sum_{j<r}a_jb_j$ as $A_rb_{r-1}-\sum_{j<r-1}A_{j+1}(b_{j+1}-b_j)$, where $A_r=\sum_{j<r}a_j$ ([[lem-abel-summation-by-parts]]).

[L2] Finite sums split and telescope, preserve inequalities, and obey the triangle inequality after repeated use of $|s+t|\le|s|+|t|$ ([[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L3] A function series converges uniformly exactly when its tails are uniformly small ([[cor-uniform-cauchy-criterion-function-series]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$. Uniform convergence $v_k\to0$ gives $N$ such that $0\le v_k(x)<\varepsilon/(2M+1)$ for every $k\ge N$ and every $x\in X$. [given, choose]

1.2 Fix $n>m\ge N$ and $x\in X$, put $p:=m+1$, $q:=n$, and for $p\le r\le q$ put $B_r(x):=\sum_{k=p}^{r}u_k(x)=A_{r+1}(x)-A_p(x)$. [L2, construct]

2.1 For every $p\le r\le q$, the bound on the $A_j$ gives $|B_r(x)|\le |A_{r+1}(x)|+|A_p(x)|\le2M$. [step 1.2, L2]

2.2 Applying [L1] to the shifted finite list from $p$ through $q$ gives $\sum_{k=p}^{q}u_k(x)v_k(x)=B_q(x)v_q(x)+\sum_{k=p}^{q-1}B_k(x)\bigl(v_k(x)-v_{k+1}(x)\bigr)$. [step 1.2, L1, L2]

3.1 Since $v_k(x)-v_{k+1}(x)\ge0$, steps 2.1 and 2.2 with telescoping give $\left|\sum_{k=p}^{q}u_k(x)v_k(x)\right|\le2Mv_q(x)+2M\sum_{k=p}^{q-1}(v_k(x)-v_{k+1}(x))=2Mv_p(x)<\varepsilon$. [step 1.1, step 2.1, step 2.2, L2, algebra]

4.1 The estimate in step 3.1 holds for every $n>m\ge N$ and $x\in X$, so [L3] proves uniform convergence of $\sum u_kv_k$. [step 3.1, L3] ∎
