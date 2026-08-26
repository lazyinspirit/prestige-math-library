---
id: thm-counting-identities-for-a-two-design
kind: theorem
title: "A $2$-design satisfies $bk=vr$ and $r(k-1)=\\lambda(v-1)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-design, lem-replication-number-is-constant-in-a-two-design]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Jan. 29"
      url: "https://people.math.harvard.edu/~elkies/M155.09/jan29"
---

## Statement

Let $(P,\mathcal B)$ be a $2$-$(v,k,\lambda)$ design. Let $b:=|\mathcal B|$, and
let $r$ be the common number of blocks through a point. Then
$$bk=vr,\qquad r(k-1)=\lambda(v-1).$$

## Facts & Assumptions

**Given:** A $2$-$(v,k,\lambda)$ design $(P,\mathcal B)$.

[L1] Every point of the design lies in the same number $r$ of blocks ([[lem-replication-number-is-constant-in-a-two-design]]).

[L2] Every block has exactly $k$ points and every two-element subset of $P$ lies in exactly $\lambda$ blocks ([[def-two-design]]).

## Proof

**Proof technique:** direct.

1.1 Let $b:=|\mathcal B|$, and let $r$ be the common number of blocks through a point from [L1]. [L1, choose]

2.1 Count the incident pairs $(p,B)$ with $p\in B$. Each block contributes $k$ such pairs, so the total is $bk$; each of the $v$ points contributes $r$ such pairs, so the total is also $vr$. Hence $bk=vr$. [step 1.1, L2, algebra]

3.1 Fix a point $p\in P$ and count the ordered pairs $(q,B)$ with $q\in P\setminus\{p\}$ and $\{p,q\}\subseteq B$. By [L2], each of the $r$ blocks through $p$ contributes $k-1$ choices of $q$, while each of the $v-1$ other points contributes exactly $\lambda$ blocks. Therefore $r(k-1)=\lambda(v-1)$. [step 1.1, L2, algebra] ∎
