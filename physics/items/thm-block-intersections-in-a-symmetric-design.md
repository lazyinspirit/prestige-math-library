---
id: thm-block-intersections-in-a-symmetric-design
kind: theorem
title: "In a symmetric $2$-design, distinct blocks meet in exactly $\\lambda$ points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-symmetric-design,
       thm-counting-identities-for-a-two-design,
       thm-incidence-matrix-identity-for-a-two-design,
       def-incidence-matrix-of-a-two-design]
proof_strategy: direct
verification:
  audited: 2026-08-26
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

Let $(P,\mathcal B)$ be a symmetric $2$-$(v,k,\lambda)$ design. Then every two
distinct blocks of $\mathcal B$ meet in exactly $\lambda$ points.

## Facts & Assumptions

**Given:** A symmetric $2$-$(v,k,\lambda)$ design with incidence matrix $N$.

[L1] The counting identities are $bk=vr$ and $r(k-1)=\lambda(v-1)$ ([[thm-counting-identities-for-a-two-design]]).

[L2] The incidence identity is $NN^{\mathsf T}=(r-\lambda)I_v+\lambda J_v$ ([[thm-incidence-matrix-identity-for-a-two-design]]).

## Proof

**Proof technique:** direct.

1.1 Symmetry gives $b=v$, so the first identity in [L1] yields $r=k$. [L1, algebra]

2.1 Using step 1.1 in the second identity of [L1], one gets $k(k-1)=\lambda(v-1)$, so $k-\lambda=k(v-k)/(v-1)>0$ because $k<v$. [step 1.1, L1, algebra]

3.1 If $x^{\mathsf T}N=0$, then $x^{\mathsf T}NN^{\mathsf T}x=0$, but [L2] and step 2.1 give $x^{\mathsf T}NN^{\mathsf T}x=(k-\lambda)\sum_i x_i^2+\lambda(\sum_i x_i)^2$, which is positive for every nonzero $x$. Hence $N$ is invertible. [step 2.1, L2, algebra]

4.1 Every row and every column of $N$ has sum $k$: rows because each point lies in $r=k$ blocks by step 1.1, and columns because every block has size $k$. Therefore $NJ_v=J_vN=kJ_v$, so step 3.1 gives $N^{-1}J_vN=J_v$. [step 1.1, step 3.1, L1, algebra]

5.1 Multiplying the identity of [L2] on the left by $N^{-1}$ and on the right by $N$ gives $N^{\mathsf T}N=(k-\lambda)I_v+\lambda J_v$. [step 1.1, step 4.1, L2, algebra]

6.1 The $(B,C)$ entry of $N^{\mathsf T}N$ counts the points in $B\cap C$, so step 5.1 shows that every off-diagonal entry is $\lambda$. Thus distinct blocks meet in exactly $\lambda$ points. [step 5.1, algebra] ∎
