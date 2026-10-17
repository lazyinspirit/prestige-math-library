---
id: thm-eckart-young-best-rank-k-approximation
kind: theorem
title: "The best rank-at-most-k approximation in operator norm is the rank-k truncation of a singular value decomposition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-singular-value-decomposition, thm-operator-norm-is-the-largest-singular-value, thm-rank-nullity, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $T:V\to W$ be a linear map between finite-dimensional real or complex inner
product spaces, let

$$Tv=\sum_{j=1}^r s_j\langle v,e_j\rangle f_j$$

be a singular value decomposition with $s_1\ge\cdots\ge s_r>0$, and fix an
integer $k$ with $0\le k<\dim V$. Define

$$T_kv:=\sum_{j=1}^{\min(k,r)} s_j\langle v,e_j\rangle f_j.$$

Then $\operatorname{rank}T_k\le k$, one has

$$\lVert T-T_k\rVert=s_{k+1}$$

with the convention $s_{k+1}=0$ when $k\ge r$, and every linear map
$A:V\to W$ with $\operatorname{rank}A\le k$ satisfies

$$\lVert T-A\rVert\ge s_{k+1}.$$

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ between finite-dimensional real or complex inner product spaces and the rank-$k$ truncation $T_k$ above.

[L1] Every linear map admits a singular value decomposition ([[thm-singular-value-decomposition]]).

[L2] The operator norm equals the largest singular value ([[thm-operator-norm-is-the-largest-singular-value]]).

[L3] Rank-nullity holds for linear maps with finite-dimensional domain ([[thm-rank-nullity]]).

[L4] A linear subspace of a finite-dimensional vector space cannot have larger dimension than the ambient space ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 The image of $T_k$ is contained in $\operatorname{span}(f_1,\dots,f_k)$, so $\operatorname{rank}T_k\le k$. When $k=0$, the defining sum for $T_k$ is empty and $T_k=0$; in general $(T-T_k)v=\sum_{j>k} s_j\langle v,e_j\rangle f_j$, which is again an SVD, so [L2] gives $\lVert T-T_k\rVert=s_{k+1}$, with value $0$ when $k\ge r$. [L1, L2, algebra]

1.2 Let $A:V\to W$ have rank at most $k$, and put $E:=\operatorname{span}(e_1,\dots,e_{k+1})$. If $A|_E$ were injective, then [L3] applied to $A|_E:E\to W$ would force $\dim \operatorname{im}(A|_E)=k+1$, but $\operatorname{im}(A|_E)\subseteq \operatorname{im}A$ and [L4] gives $\dim \operatorname{im}A\le k$, contradiction. Hence some unit vector $v\in E$ satisfies $Av=0$. [L3, L4, algebra]

2.1 Write that unit vector as $v=\sum_{j=1}^{k+1} c_je_j$. Then $\lVert Tv\rVert^2=\sum_{j=1}^{k+1}s_j^2|c_j|^2\ge s_{k+1}^2\sum_{j=1}^{k+1}|c_j|^2=s_{k+1}^2$. Because $Av=0$, one has $\lVert T-A\rVert\ge \lVert (T-A)v\rVert=\lVert Tv\rVert\ge s_{k+1}$. Combined with step 1.1, this proves that $T_k$ is a best rank-at-most-$k$ approximation in operator norm. [step 1.2, algebra] ∎
