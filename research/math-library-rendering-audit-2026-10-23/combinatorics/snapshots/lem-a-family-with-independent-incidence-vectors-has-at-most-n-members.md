---
id: lem-a-family-with-independent-incidence-vectors-has-at-most-n-members
kind: lemma
title: "If the incidence vectors of $A_1,\\dots,A_m\\subseteq[n]$ are linearly independent over $F$ then $m\\le n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-incidence-vector-of-a-subset, def-set-family-and-its-incidence-matrix, def-linear-independence, def-dimension, lem-standard-basis-of-f-n, cor-independent-set-is-no-larger-than-a-finite-spanning-set, thm-dimension-of-a-linear-subspace, def-vector-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, Chapter 1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field and let $\mathcal{F}=(A_1,\dots,A_m)$ be a family of subsets
of $[n]$. If the incidence vectors $v_{A_1},\dots,v_{A_m}$ are linearly
independent in $F^n$, then $m\le n$.

## Facts & Assumptions

**Given:** a field $F$, a natural number $n$, and a family $\mathcal{F}=(A_1,\dots,A_m)$ of subsets of $[n]$ whose incidence vectors are linearly independent in $F^n$.

[F1] The standard basis of $F^n$ has $n$ vectors and spans $F^n$ ([[lem-standard-basis-of-f-n]]).

[F2] Every linearly independent subset of a vector space has size at most that of any finite spanning set ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[F3] Distinct subsets have distinct incidence vectors ([[def-incidence-vector-of-a-subset]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the space $F^n$ is spanned by a finite set of $n$ vectors. [F1]

2.1 The linearly independent set $\{v_{A_1},\dots,v_{A_m}\}$ therefore has at most $n$ elements by [F2]. [F2, step 1.1]

3.1 Since [F3] identifies distinct subsets with distinct incidence vectors, the family itself has at most $n$ members. [F3, step 2.1] ∎

## Remarks

- This is the master lemma for the direct incidence-vector bounds, including Oddtown and Fisher's inequality. Other bounds on the page use subspace counts, shifting, or polynomial-function spaces instead.
