---
id: cor-rank-equals-number-of-nonzero-singular-values
kind: corollary
title: "The rank of a linear map is the number of its nonzero singular values"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-singular-value-decomposition, thm-rank-nullity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $T:V\to W$ be a linear map between finite-dimensional real or complex inner
product spaces. Then $\operatorname{rank} T$ equals the number of positive
singular values of $T$.

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ between finite-dimensional real or complex inner product spaces, and an SVD $$Tv=\sum_{j=1}^r s_j\langle v,e_j\rangle f_j$$ with $s_1\ge\cdots\ge s_r>0=s_{r+1}=\cdots$.

[L1] Every linear map admits a singular value decomposition ([[thm-singular-value-decomposition]]).

[L2] Rank-nullity holds for linear maps with finite-dimensional domain ([[thm-rank-nullity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], one has $Tv=0$ exactly when $\langle v,e_j\rangle=0$ for $1\le j\le r$, so $\ker T=\operatorname{span}(e_{r+1},\dots,e_n)$ and therefore $\operatorname{nullity}T=n-r$. [L1, algebra]

2.1 By [L2], $\operatorname{rank}T+\operatorname{nullity}T=n$. Combining this with step 1.1 gives $\operatorname{rank}T=r$, the number of positive singular values. [L2, step 1.1] ∎
