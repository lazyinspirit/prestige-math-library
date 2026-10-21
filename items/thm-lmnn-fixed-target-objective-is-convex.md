---
id: thm-lmnn-fixed-target-objective-is-convex
kind: theorem
title: "The fixed-target LMNN objective is convex"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-lmnn-fixed-target-objective
  - def-finite-sum
  - def-trace-of-a-square-matrix
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-convex-subset-of-euclidean-space
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
    - title: "Aurélien Bellet, Amaury Habrard, and Marc Sebban, A Survey on Metric Learning for Feature Vectors and Structured Data, arXiv:1306.6709v4 (2014)"
      url: "https://arxiv.org/pdf/1306.6709"
aliases: []
landmark: false
proof_strategy: direct
---

## Statement

Let $d,n,C$ be positive integers, let $(x_i,y_i)_{i=1}^{n}$ be a finite sample with $x_i\in\mathbb R^d$ and $y_i\in\{1,\ldots,C\}$, let each fixed target set satisfy $N_i\subseteq\{j\ne i:y_j=y_i\}$, and let $\mu\in[0,1]$. For symmetric $M\in\mathbb R^{d\times d}$ write $q_M(x,x')=(x-x')^TM(x-x')$ and define

$$F_\mu(M)=(1-\mu)\sum_{i=1}^{n}\sum_{j\in N_i}q_M(x_i,x_j)+\mu\sum_{i=1}^{n}\sum_{j\in N_i}\sum_{\substack{1\le l\le n\\y_l\ne y_i}}[1+q_M(x_i,x_j)-q_M(x_i,x_l)]_+,$$

where $[z]_+=\max\{z,0\}$. Then $F_\mu$ is convex on the real vector space of symmetric matrices. The feasible set $\mathbb S_+^d=\{M=M^T:v^TMv\ge0\text{ for all }v\in\mathbb R^d\}$ is convex, so minimizing $F_\mu$ over $\mathbb S_+^d$ is a convex optimization problem.

## Statement references

[[def-lmnn-fixed-target-objective|Fixed targets, pull/push loss, and the positive-part convention]]

[[def-finite-sum|Finite-sum convention]]

[[def-trace-of-a-square-matrix|Trace as a sum of diagonal entries]]

[[def-convex-and-strictly-convex-functions-on-euclidean-sets|Definition of a convex function]]

[[def-convex-subset-of-euclidean-space|Definition of a convex set]]

[Weinberger and Saul, §3.4, printed pp. 220–221](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

[Bellet, Habrard, and Sebban, §3.2, printed pp. 12–13](https://arxiv.org/pdf/1306.6709)

## Facts & Assumptions

**Given:** The finite sample, fixed target sets, and parameter $\mu\in[0,1]$ in the Statement.

[F1] For fixed $a,b\in\mathbb R^d$, $q_M(a,b)=\operatorname{tr}(M(a-b)(a-b)^T)$, so it is affine-linear in the entries of $M$ ([[def-lmnn-fixed-target-objective]], [[def-trace-of-a-square-matrix]]).

[F2] A real-valued function on a convex set is convex when its value at every convex combination is at most the same convex combination of its values ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

[F3] A subset of a real vector space is convex when it contains every convex combination of any two of its points ([[def-convex-subset-of-euclidean-space]]).

## Proof

1.1 For each fixed pair $(i,j)$, let $C_{ij}=(x_i-x_j)(x_i-x_j)^T$. By [F1], $q_M(x_i,x_j)=\operatorname{tr}(MC_{ij})$ is linear in $M$, so every pull term is affine-linear. Each margin expression $h_{ijl}(M)=1+\operatorname{tr}(M(C_{ij}-C_{il}))$ is also affine-linear. [F1, given, algebra]

2.1 For any affine-linear $h$ and $0\le t\le1$, $h(tM+(1-t)N)=t h(M)+(1-t)h(N)$. The number $t[h(M)]_++(1-t)[h(N)]_+$ is at least $0$ and at least $t h(M)+(1-t)h(N)$, hence it is at least their maximum $[h(tM+(1-t)N)]_+$. Thus each hinge term is convex by [F2]. [F2, step 1.1, algebra]

3.1 Finite sums of affine-linear functions and convex hinge functions are convex, and the coefficients $1-\mu$ and $\mu$ are nonnegative because $\mu\in[0,1]$. Applying the convexity inequality term by term proves $F_\mu$ is convex on all symmetric matrices, including the endpoint cases $\mu=0$ and $\mu=1$. [given, step 1.1, step 2.1, F2, algebra]

4.1 If $M,N\in\mathbb S_+^d$ and $0\le t\le1$, then $tM+(1-t)N$ is symmetric and for every $v$, $v^T(tM+(1-t)N)v=t\,v^TMv+(1-t)\,v^TNv\ge0$. Hence $\mathbb S_+^d$ is convex by [F3]. Restricting the already convex function $F_\mu$ to this convex feasible set yields a convex optimization problem. [F3, given, algebra] ∎
