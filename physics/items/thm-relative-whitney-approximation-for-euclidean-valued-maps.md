---
id: thm-relative-whitney-approximation-for-euclidean-valued-maps
kind: theorem
title: "Relative Whitney approximation for Euclidean-valued maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, thm-whitney-approximation-for-euclidean-valued-maps, thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set, prop-smoothness-is-local-on-the-source, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized noncompact closed-set cutoff and inherited countable-choice repair; local checks only, no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.21, pp.136-137"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $F:M\to\mathbb R^k$ be continuous, let $A\subseteq M$ be closed, and suppose $F$ is smooth on an open neighbourhood of $A$. For every positive continuous error function $\varepsilon$ on $M$, there exists a smooth map $\widetilde F:M\to\mathbb R^k$ such that:

1. $\widetilde F=F$ on some open neighbourhood of $A$, and
2. $\|\widetilde F(p)-F(p)\|<\varepsilon(p)$ for all $p\in M$.

No compactness of $A$ or of a neighbourhood of $A$ is assumed.

## Facts & Assumptions

**Given:** Countable choice, a continuous map $F:M\to\mathbb R^k$, a closed set $A\subseteq M$, an open neighbourhood $U$ of $A$ on which $F$ is smooth, and a positive continuous error function $\varepsilon$.

[A1] Countable choice is assumed for the two existence results below; their countable coordinate, annular-cover and bump selections are explicitly licensed ([[def-countable-choice]]).

[L1] Under [A1], Euclidean Whitney approximation gives a smooth $Q:M\to\mathbb R^k$ with $\|Q-F\|<\varepsilon$ pointwise ([[thm-whitney-approximation-for-euclidean-valued-maps]]).

[L2] Under [A1], there is a smooth $\chi:M\to[0,1]$ equal to one on an open neighbourhood of $A$ and with $\operatorname{supp}(\chi)\subseteq U$ ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

[L3] A continuous map that is smooth on an open cover is smooth globally ([[prop-smoothness-is-local-on-the-source]]).

[L4] Finite sums and products of smooth scalar functions, and hence componentwise scalar-vector products, are smooth by iterated coordinate derivative rules ([[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 Use [L1] to obtain $Q$ and [L2] to obtain $\chi$. Let $W$ be an open neighbourhood of $A$ on which $\chi=1$. Define on all of $M$ $$\widetilde F=\chi F+(1-\chi)Q.$$ This is a continuous Euclidean-valued map, since $F,Q,\chi$ are continuous and the formula uses finite scalar sums and products. These are two applications of the explicitly assumed countable-choice existence results, not a compact-neighbourhood selection. [A1, L1, L2, given, construct]

2.1 On $U$, the formula for $\widetilde F$ is smooth by [L4], since $F|_U$, $Q|_U$ and $\chi|_U$ are smooth. On the open set $M\setminus\operatorname{supp}(\chi)$ it equals $Q$, hence is smooth. These two open sets cover $M$ because $\operatorname{supp}(\chi)\subseteq U$. Therefore [L3] proves that $\widetilde F$ is globally smooth; no differentiability of $F$ outside $U$ is used. [L2, L3, L4, step 1.1]

3.1 On $W$, $\chi=1$ and hence $\widetilde F=F$. At every $p\in M$, $$\|\widetilde F(p)-F(p)\|=(1-\chi(p))\|Q(p)-F(p)\|\le\|Q(p)-F(p)\|<\varepsilon(p).$$ The weak inequality before the final strict inequality includes the case $\chi(p)=1$. Thus both claims hold. The same construction includes empty $A$ (its neighbourhood can be empty), empty $M$, and noncompact closed $A$. [L1, L2, step 1.1, step 2.1, algebra] ∎
