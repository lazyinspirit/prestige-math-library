---
id: fs-the-oddtown-bound-can-be-improved-to-n-minus-one
kind: false-statement
title: "FALSE: an Oddtown family on $[n]$ has at most $n-1$ members"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-the-oddtown-bound-is-attained, thm-oddtown, lem-a-family-with-independent-incidence-vectors-has-at-most-n-members]
justified_by: []
aliases: []
landmark: false
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
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §1.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

**False claim:** every Oddtown family on $[n]$ has at most $n-1$ members.

## Facts & Assumptions

**Given:** the singleton family on $[n]$.

[L1] The singleton family is an Oddtown family of size exactly $n$ ([[cor-the-oddtown-bound-is-attained]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the family $\{\{0\},\dots,\{n-1\}\}$ is an Oddtown family with $n$ members. [L1]

2.1 Since $n$ is not at most $n-1$, the false claim fails for every $n\ge1$. [step 1.1] ∎
