---
id: fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members
kind: false-statement
title: "FALSE: a family on $[n]$ of VC dimension at most $d$ has at most $n^{d}$ members"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sauer-shelah, cor-sauer-shelah-polynomial-bound, def-shattering-and-vc-dimension, def-binomial-coefficient, def-nat-power]
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
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

**False claim:** a family on $[n]$ of VC dimension at most $d$ has at most $n^d$
members.

## Facts & Assumptions

**Given:** the family $\{\varnothing,\{0\}\}$ on $[1]$.

[L1] Sauer-Shelah gives the exact bound $1+1=2$ at $n=1$, $d=1$ ([[thm-sauer-shelah]]).

## Refutation

**Proof technique:** direct.

1.1 The family $\{\varnothing,\{0\}\}$ has VC dimension $1$: it shatters $\{0\}$ and nothing larger. [given]

2.1 It has two members, while $n^d=1^1=1$. So the false claim already fails at $n=1$, $d=1$. [L1, step 1.1] ∎

## Remarks

- The true polynomial estimate on the page is $(n+1)^d$, not $n^d$.
