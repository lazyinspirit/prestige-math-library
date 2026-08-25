---
id: cor-the-oddtown-bound-is-attained
kind: corollary
title: "The $n$ singletons form an Oddtown family, so the bound $m\\le n$ is attained for every $n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-oddtown, def-set-family-and-its-incidence-matrix, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §1.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

For every natural number $n$, the singleton family

$$\bigl(\{0\},\{1\},\dots,\{n-1\}\bigr)$$

is an Oddtown family on $[n]$. Hence the bound $m\le n$ of [[thm-oddtown]] is
sharp.

## Facts & Assumptions

**Given:** a natural number $n$.

[L1] Distinct subsets of $[n]$ whose sizes are odd and whose pairwise intersections have even size number at most $n$ ([[thm-oddtown]]).

## Proof

**Proof technique:** direct.

1.1 Each singleton has odd size $1$, and any two distinct singletons meet in the empty set, whose size is even. So the family satisfies the hypotheses of [L1]. [L1, given]

2.1 The family has exactly $n$ members, so it attains the bound of [L1]. [step 1.1] ∎

## Remarks

- This is the standard extremal example, and the companion page uses it to refute the false improvement $m\le n-1$.
