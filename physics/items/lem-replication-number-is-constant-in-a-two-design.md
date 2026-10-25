---
id: lem-replication-number-is-constant-in-a-two-design
kind: lemma
title: "Every point of a $2$-design lies in the same number of blocks"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-design]
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

Let $(P,\mathcal B)$ be a $2$-$(v,k,\lambda)$ design. Then there is a natural
number $r$ such that every point of $P$ lies in exactly $r$ blocks.

## Facts & Assumptions

**Given:** A $2$-$(v,k,\lambda)$ design $(P,\mathcal B)$.

[L1] Every block has exactly $k$ points, with $2\le k<v$ and $\lambda\ge1$ ([[def-two-design]]).

[L2] Every two-element subset of $P$ lies in exactly $\lambda$ blocks ([[def-two-design]]).

## Proof

**Proof technique:** direct.

1.1 Fix a point $p\in P$, and let $r_p$ be the number of blocks containing $p$. Count the ordered pairs $(q,B)$ with $q\in P\setminus\{p\}$ and $\{p,q\}\subseteq B$. [given, choose]

2.1 Counting by blocks through $p$, each such block contributes $k-1$ choices of $q$, so the number of pairs is $r_p(k-1)$. [step 1.1, L1, algebra]

2.2 Counting by the second point, each $q\in P\setminus\{p\}$ contributes exactly $\lambda$ blocks, so the number of pairs is $\lambda(v-1)$. [step 1.1, L2, algebra]

3.1 Therefore $r_p(k-1)=\lambda(v-1)$, so $r_p=\lambda(v-1)/(k-1)$ depends only on $v$, $k$, and $\lambda$, not on $p$. Thus every point lies in the same number $r$ of blocks. [step 2.1, step 2.2, algebra] ∎
