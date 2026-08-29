---
id: prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold
kind: proposition
title: "In the spectral norm, numerical rank counts the singular values above the declared threshold"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-numerical-rank-relative-to-a-norm-scale-and-tolerance, thm-eckart-young-best-rank-k-approximation, cor-rank-equals-number-of-nonzero-singular-values, thm-operator-norm-is-the-largest-singular-value]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Nearness Problems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html"
---



## Statement

Let $m,n\in\mathbb{N}$ with $m\ge 1$ and $n\ge 1$, let
$A\in M_{m\times n}(\mathbb{R})$ with singular values
$\sigma_1\ge\cdots\ge\sigma_{\min(m,n)}\ge 0$, let $\tau\ge 0$, and let
$\lVert\cdot\rVert_2$ be the spectral norm. Then

$$\operatorname{rank}_{\tau}(A)=\#\Bigl\{\,j\in\{1,\dots,\min(m,n)\}\;:\;\sigma_j>\tau\,\Bigr\},$$

where $\operatorname{rank}_{\tau}(A)$ is the numerical rank of
[[def-numerical-rank-relative-to-a-norm-scale-and-tolerance]]. Consequently, if
two tolerances $\tau<\tau'$ have a singular value $\sigma_j$ with
$\tau<\sigma_j\le\tau'$, then $\operatorname{rank}_{\tau}(A)>\operatorname{rank}_{\tau'}(A)$:
moving the threshold past a singular value changes the numerical rank.

## Facts & Assumptions

**Given:** Natural numbers $m,n\ge 1$, a matrix $A\in M_{m\times n}(\mathbb{R})$ with singular values $\sigma_1\ge\cdots\ge\sigma_{\min(m,n)}\ge 0$, and a tolerance $\tau\ge 0$.

[L1] Numerical rank: $\operatorname{rank}_{\tau}(A)=\min\{\operatorname{rank}B:\lVert A-B\rVert_2\le\tau\}$ ([[def-numerical-rank-relative-to-a-norm-scale-and-tolerance]]).

[L2] Eckart–Young: for $0\le k<\dim\mathbb{R}^{n}=n$, the least spectral-norm distance from $A$ to the matrices of rank at most $k$ is $\sigma_{k+1}$, with the convention $\sigma_{k+1}=0$ when $k$ exceeds the number of positive singular values ([[thm-eckart-young-best-rank-k-approximation]]).

[L3] The rank of a matrix is the number of its positive singular values ([[cor-rank-equals-number-of-nonzero-singular-values]]).

## Proof

**Proof technique:** direct.

1.1 For $k\ge\min(m,n)$ the matrix $A$ itself has rank at most $\min(m,n)\le k$ by [L3], so the distance to rank at most $k$ is $0$; with the convention of [L2] this agrees with $\sigma_{k+1}=0$. For $0\le k<\min(m,n)\le n$, [L2] gives the distance $\sigma_{k+1}$. Hence for every $k\ge 0$, $\min\{\lVert A-B\rVert_2:\operatorname{rank}B\le k\}=\sigma_{k+1}$. [L2, L3, algebra]

1.2 Let $q:=\#\{j\in\{1,\dots,\min(m,n)\}:\sigma_j>\tau\}$. If $q<\min(m,n)$ then $\sigma_{q+1}\le\tau$ while $\sigma_q>\tau$; if $q=\min(m,n)$ then all singular values exceed $\tau$ and $\sigma_{\min(m,n)+1}:=0\le\tau$. In both cases $\min\{k\ge 0:\sigma_{k+1}\le\tau\}=q$, because every $k<q$ has $\sigma_{k+1}\ge\sigma_q>\tau$. [algebra]

2.1 By step 1.1, there exists a matrix $B$ with $\operatorname{rank}B\le k$ and $\lVert A-B\rVert_2\le\tau$ exactly when $\sigma_{k+1}\le\tau$. Therefore [L1] gives $\operatorname{rank}_{\tau}(A)=\min\{k\ge 0:\sigma_{k+1}\le\tau\}$. [step 1.1, L1, algebra]

3.1 Steps 2.1 and 1.2 give $\operatorname{rank}_{\tau}(A)=q$, which is the displayed formula. [step 2.1, step 1.2]

4.1 If $\tau<\sigma_j\le\tau'$ then $j$ is counted at tolerance $\tau$ but not at tolerance $\tau'$, and no larger index is counted at $\tau'$; hence $\operatorname{rank}_{\tau}(A)>\operatorname{rank}_{\tau'}(A)$, the stated consequence. [step 3.1, algebra]

5.1 Step 3.1 proves the formula and step 4.1 the consequence. [step 3.1, step 4.1] ∎
