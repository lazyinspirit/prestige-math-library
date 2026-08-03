---
id: lem-sunflower-maximal-disjoint-subfamily
kind: lemma
title: "A maximal pairwise disjoint subfamily either supplies a sunflower or gives a small transversal for the whole uniform family"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sunflower, def-finite-cardinality, thm-subset-of-a-finite-set, thm-sum-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sunflower (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sunflower_(mathematics)"
pipeline_run: null
---

## Statement

Let $k\ge1$, let $\mathcal F$ be a finite family of distinct $k$-element sets,
and let $r\ge2$. If $\mathcal G\subseteq\mathcal F$ is maximal among pairwise disjoint
subfamilies, then either $|\mathcal G|\ge r$, in which case $\mathcal F$
contains an $r$-petal sunflower with empty core, or

$$X:=\bigcup_{G\in\mathcal G}G$$

meets every member of $\mathcal F$ and has cardinality at most $k(r-1)$.

## Facts & Assumptions

**Given:** A natural $k\ge1$, a finite family $\mathcal F$ of distinct $k$-sets, a natural $r\ge2$, and a maximal pairwise disjoint subfamily $\mathcal G$.

[F1] Pairwise disjoint distinct sets form a sunflower with empty core ([[def-sunflower]]).

[F2] Subsets of finite sets are finite, and a finite disjoint union has cardinality equal to the sum of the cardinalities of its members ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]], [[thm-sum-rule]]).

## Proof

**Proof technique:** direct.

1.1 If $|\mathcal G|\ge r$, any $r$ members of $\mathcal G$ are pairwise disjoint and therefore form an $r$-petal sunflower with empty core. [given, F1]

1.2 Suppose $|\mathcal G|\le r-1$ and put $X=\bigcup_{G\in\mathcal G}G$. Since the members of $\mathcal G$ are disjoint $k$-sets, $|X|=k|\mathcal G|\le k(r-1)$. [given, F2]

2.1 Every $F\in\mathcal F$ meets $X$. Otherwise $F$ would be disjoint from every $G\in\mathcal G$, so $\mathcal G\cup\{F\}$ would be a larger pairwise disjoint subfamily, contradicting maximality. [step 1.2, given]

3.1 Thus the first case gives an empty-core sunflower, while the second gives a transversal $X$ of size at most $k(r-1)$ meeting every member of $\mathcal F$. [step 1.1, step 1.2, step 2.1] ∎
