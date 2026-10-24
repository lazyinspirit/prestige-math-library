---
id: lem-an-odd-closed-walk-contains-an-odd-cycle
kind: lemma
title: "Every closed walk of odd length contains a cycle of odd length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-graph-walk-trail-path-and-cycle, def-finite-cardinality, thm-induction-principle]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Statement

Every closed walk of odd length in a graph contains, among its traversed edges,
a cycle of odd length.

## Facts & Assumptions

**Given:** A finite simple graph and its closed walks.

[F1] A simple graph has no loop, so an odd closed walk has length at least $3$; a closed walk of length $m\ge3$ whose vertices before the repeated endpoint are distinct is a cycle ([[def-graph-walk-trail-path-and-cycle]]).

[L1] Mathematical induction: a property true at $0$ and inherited from $m$ to $m+1$ holds for every natural $m$ ([[thm-induction-principle]]).

[F2] If a closed walk $(v_0,\ldots,v_r=v_0)$ has $v_i=v_j$ with $0\le i<j<r$, it splits into closed walks of lengths $j-i$ and $r-(j-i)$; when $r$ is odd, exactly one of these lengths is odd.

## Proof

**Proof technique:** induction.

1.1 Let $P(m)$ say that every odd closed walk of length at most $m$ contains an odd cycle. At $m=0$ there is no odd positive length at most $0$, so $P(0)$ holds vacuously. [base]

1.2 Fix $m$ and assume $P(m)$. Let $W=(v_0,\ldots,v_r=v_0)$ be an odd closed walk with $r\le m+1$. [ih, given]

2.1 If $r\le m$, the inductive hypothesis supplies an odd cycle in $W$. [step 1.2]

2.2 Suppose instead that $r=m+1$. If $v_0,\ldots,v_{r-1}$ are distinct, then $W$ is itself an odd cycle by [F1]. [step 1.2, F1]

2.3 If those vertices are not distinct, choose $0\le i<j<r$ with $v_i=v_j$. By [F2], $W$ splits into two shorter closed walks, and exactly one has odd length. Its length is at most $r-1=m$, so $P(m)$ supplies an odd cycle in that subwalk and hence in $W$. [step 1.2, F2, choose]

3.1 Steps 2.1, 2.2 and 2.3 cover every odd closed walk of length at most $m+1$, so $P(m+1)$ holds. [step 2.1, step 2.2, step 2.3]

4.1 By [L1], $P(m)$ holds for every natural $m$. Applying it at the length of any given odd closed walk yields an odd cycle contained in that walk. [step 1.1, step 3.1, L1, discharge-induction] ∎
