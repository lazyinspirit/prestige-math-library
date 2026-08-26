---
id: thm-fishers-inequality-for-two-designs
kind: theorem
title: "Fisher's inequality: every $2$-$(v,k,\\lambda)$ design has at least $v$ blocks"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-incidence-matrix-identity-for-a-two-design,
       thm-counting-identities-for-a-two-design,
       def-incidence-matrix-of-a-two-design]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Jan. 29"
      url: "https://people.math.harvard.edu/~elkies/M155.09/jan29"
---

## Statement

Every $2$-$(v,k,\lambda)$ design has at least $v$ blocks.

## Facts & Assumptions

**Given:** A $2$-$(v,k,\lambda)$ design with incidence matrix $N$ and $b$ blocks.

[L1] The incidence identity is $NN^{\mathsf T}=(r-\lambda)I_v+\lambda J_v$ ([[thm-incidence-matrix-identity-for-a-two-design]]).

[L2] The counting identities give $r(k-1)=\lambda(v-1)$, with $2\le k<v$ and $\lambda\ge1$ ([[thm-counting-identities-for-a-two-design]]).

## Proof

**Proof technique:** direct.

1.1 From [L2] one gets $r-\lambda=\lambda(v-k)/(k-1)>0$, because $\lambda\ge1$ and $v>k$. [L2, algebra]

2.1 If $x\in\mathbb R^v$ is nonzero, then [L1] gives $x^{\mathsf T}NN^{\mathsf T}x=(r-\lambda)\sum_i x_i^2+\lambda(\sum_i x_i)^2>0$ by step 1.1. Therefore no nonzero vector satisfies $x^{\mathsf T}N=0$. [step 1.1, L1, algebra]

3.1 So the $v$ rows of $N$ are linearly independent in $\mathbb R^b$. A family of $v$ linearly independent vectors in $\mathbb R^b$ requires $v\le b$. [step 2.1, algebra] ∎

## Remarks

The positivity argument is over $\mathbb R$. The published false statement [[fs-fisher-inequality-holds-over-the-two-element-field]] records why the same proof does not survive over $\mathbb F_2$.
