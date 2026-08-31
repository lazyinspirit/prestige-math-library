---
id: prop-countable-unions-and-subsets-of-manifold-null-sets-are-null
kind: proposition
title: "Countable unions and subsets of manifold null sets are null"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-countable-chart-cover-detects-manifold-null-sets,
       def-null-and-content-zero-in-rn,
       def-countable-choice,
       thm-n-cross-n-countable,
       thm-geometric-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Every subset of a manifold null set is
null, and every countable union of manifold null sets is null.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, null subsets $E,E_1,E_2,\ldots$ of a smooth manifold $M$, and a subset $A\subseteq E$.

[L1] A countable chart cover detects manifold nullity ([[prop-a-countable-chart-cover-detects-manifold-null-sets]]).

[F1] In Euclidean space, subsets of null sets are null ([[def-null-and-content-zero-in-rn]]).

[A1] Countable Choice permits one null cover to be selected for each member of a sequence ([[def-countable-choice]]).

[L2] The set $\mathbb N\times\mathbb N$ is countable, and the geometric budgets $\varepsilon 2^{-m-1}$ sum to $\varepsilon$ ([[thm-n-cross-n-countable]], [[thm-geometric-series]]).

## Proof
**Proof technique:** direct.

1.1 Fix a countable smooth atlas detecting nullity as in [L1]. For each chart $(U_j,\varphi_j)$, the set $\varphi_j(A\cap U_j)$ is contained in the null set $\varphi_j(E\cap U_j)$, so [F1] makes it null. Thus $A$ is null. [F1, L1, given]

1.2 Fix a chart index $j$ and $\varepsilon>0$. For each $m\ge1$, nullity of $\varphi_j(E_m\cap U_j)$ supplies cube covers with total volume at most $\varepsilon2^{-m}$. By [A1], choose these covers simultaneously. By [L2], their doubly indexed union is a single countable cube cover, and its total volume is at most $\sum_{m\ge1}\varepsilon2^{-m}=\varepsilon$. Hence $\bigcup_{m\ge1}\varphi_j(E_m\cap U_j)$ is null. [A1, L2, given, choose, algebra]

2.1 Since $$ \varphi_j\Bigl(\Bigl(\bigcup_{m\ge 1}E_m\Bigr)\cap U_j\Bigr)=\bigcup_{m\ge 1}\varphi_j(E_m\cap U_j), $$ step 1.2 and [L1] show that $\bigcup_{m\ge1}E_m$ is null in $M$. [L1, step 1.2, algebra]

3.1 Therefore subsets and countable unions of manifold null sets are null. [step 1.1, step 2.1] ∎
