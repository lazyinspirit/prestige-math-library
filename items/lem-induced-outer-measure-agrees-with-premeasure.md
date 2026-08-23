---
id: lem-induced-outer-measure-agrees-with-premeasure
kind: lemma
title: "The induced outer measure agrees with the premeasure on the source algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-premeasure-on-an-algebra, def-outer-measure-induced-by-a-premeasure, lem-disjointification-of-an-algebra-cover]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Proposition 1.13(a)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

For every $A\in\mathcal A_0$, the outer measure induced by a premeasure satisfies $\mu^*(A)=\mu_0(A)$.

## Facts & Assumptions

**Given:** A premeasure $\mu_0$ on an algebra $\mathcal A_0$ and its induced outer measure $\mu^*$.

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. ([[def-premeasure-on-an-algebra]])

[L1] Every countable algebra cover of an algebra set disjointifies inside that set into algebra members subordinate to the original cover. ([[lem-disjointification-of-an-algebra-cover]])

[F2] The set function induced by $\mu_0$ assigns $E\subseteq X$ the infimum of $\sum_k\mu_0(A_k)$ over all countable algebra covers $E\subseteq\bigcup_kA_k$. ([[def-outer-measure-induced-by-a-premeasure]])

## Proof

**Proof technique:** direct.

1.1 The sequence $(A,\varnothing,\varnothing,\ldots)$ covers $A$ at cost $\mu_0(A)$, so $\mu^*(A)\le\mu_0(A)$. [F2, construct]

1.2 For any algebra cover $(A_k)$ of $A$, [L1] gives disjoint $B_k\subseteq A_k$ with union $A$; [F1] gives $\mu_0(A)=\sum_k\mu_0(B_k)$, and finite additivity applied to $A_k=B_k\sqcup(A_k\setminus B_k)$ gives $\mu_0(B_k)\le\mu_0(A_k)$, hence $\mu_0(A)\le\sum_k\mu_0(A_k)$. [F1, L1, algebra]

2.1 Since step 1.2 bounds every covering cost below by $\mu_0(A)$, [F2] gives $\mu_0(A)\le\mu^*(A)$; combining this with step 1.1 proves equality, including infinite values without subtraction. [step 1.1, step 1.2, F2, algebra] ∎

## Remarks

No choice principle is used here. Steps 1.1, 1.2 and 2.1 read the defining infimum of [[def-outer-measure-induced-by-a-premeasure]], disjointify one given cover, and apply countable additivity of the premeasure; none of them selects a cover for each index. The name *outer measure* is the one that [[cor-premeasure-induced-set-function-is-an-outer-measure]] earns for the induced set function under countable choice, and the identity proved here holds for the set function whether or not that hypothesis is in force.
