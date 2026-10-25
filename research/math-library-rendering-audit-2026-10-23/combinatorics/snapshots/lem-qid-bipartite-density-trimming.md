---
id: lem-qid-bipartite-density-trimming
kind: lemma
title: "Qid bipartite density trimming"
status: published
origin: pipeline
deps: [thm-double-counting, cor-the-averaging-principle, def-qid-restricted-blockade-with-empty-blocks]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: 4.1
proof_strategy: direct
---

## Statement

Let $A,B$ be disjoint finite vertex sets and $c\geq0$. If $e_G(A,B)\leq c|A||B|$, then some $A^{\prime}\subseteq A$ with $|A^{\prime}|\geq|A|/2$ has $|N_G(v)\cap B|\leq2c|B|$ for every $v\in A^{\prime}$. Empty sets are permitted. This is a bound from $A^{\prime}$ into $B$.

## Facts & Assumptions

**Given:** Disjoint finite $A,B$, $c\geq0$, and $e_G(A,B)\leq c|A||B|$.

[F1] For a finite incidence relation, summing row sizes counts all incidences; empty index sets are permitted. ([[thm-double-counting]]).

## Proof

1.1 Let $d(v)=|N_G(v)\cap B|$. Counting the finite relation of adjacent pairs by its $A$ fibres gives $\sum_{v\in A}d(v)=e_G(A,B)$, including empty sets by [F1]. If $A$ or $B$ is empty, take $A^{\prime}=A$. If $c=0$, the sum of nonnegative integer degrees is zero, so every degree is zero and again take $A^{\prime}=A$. [F1, given]

2.1 Otherwise $c|B|>0$. Let $D=\{v\in A:d(v)>2c|B|\}$. If $D$ is nonempty, $2c|B||D|<\sum_{v\in D}d(v)\leq c|A||B|$, hence $|D|<|A|/2$. If $D$ is empty the same required conclusion $|D|\leq|A|/2$ holds. Thus $A^{\prime}=A\setminus D$ has at least half the vertices and every degree in it is at most $2c|B|$. [step 1.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 4.1.
