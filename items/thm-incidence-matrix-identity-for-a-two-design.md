---
id: thm-incidence-matrix-identity-for-a-two-design
kind: theorem
title: "For a $2$-design, $NN^{\\mathsf T}=(r-\\lambda)I+\\lambda J$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-design, def-incidence-matrix-of-a-two-design, thm-counting-identities-for-a-two-design]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Jan. 29"
      url: "https://people.math.harvard.edu/~elkies/M155.09/jan29"
---

## Statement

Let $(P,\mathcal B)$ be a $2$-$(v,k,\lambda)$ design, let $N$ be its
point-block incidence matrix, let $r$ be the common number of blocks through a
point, let $I_v$ be the $v\times v$ identity matrix, and let $J_v$ be the
$v\times v$ all-ones matrix. Then
$$NN^{\mathsf T}=(r-\lambda)I_v+\lambda J_v.$$

## Facts & Assumptions

**Given:** A $2$-$(v,k,\lambda)$ design $(P,\mathcal B)$ and its incidence matrix $N$.

[L1] Every point lies in exactly $r$ blocks ([[thm-counting-identities-for-a-two-design]]).

[L2] Every two distinct points lie together in exactly $\lambda$ blocks ([[def-two-design]]).

## Proof

**Proof technique:** direct.

1.1 The $(p,p)$ entry of $NN^{\mathsf T}$ counts the blocks containing $p$, so every diagonal entry is $r$ by [L1]. [L1, algebra]

1.2 If $p\ne q$, then the $(p,q)$ entry of $NN^{\mathsf T}$ counts the blocks containing both $p$ and $q$, so every off-diagonal entry is $\lambda$ by [L2]. [L2, algebra]

2.1 The matrix on the right has diagonal entries $(r-\lambda)+\lambda=r$ and off-diagonal entries $\lambda$, so steps 1.1 and 1.2 identify it with $NN^{\mathsf T}$. [step 1.1, step 1.2, algebra] ∎
