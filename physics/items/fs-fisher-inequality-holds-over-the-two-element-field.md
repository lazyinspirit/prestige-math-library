---
id: fs-fisher-inequality-holds-over-the-two-element-field
kind: false-statement
title: "FALSE: distinct nonempty $A_1,\\dots,A_m\\subseteq[n]$ whose pairwise intersections all have the same parity satisfy $m\\le n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonuniform-fisher-inequality, lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent, thm-eventown, def-standard-bilinear-form-on-a-coordinate-space]
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
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §§2.3.2, 4.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

**False claim:** if distinct nonempty subsets of $[n]$ have pairwise intersections
all of the same parity, then there are at most $n$ of them.

## Facts & Assumptions

**Given:** the seven nonempty unions of the three pairs $\{0,1\}$, $\{2,3\}$ and $\{4,5\}$.

[L1] An Eventown family consists of distinct sets whose own sizes and pairwise intersection sizes are even ([[thm-eventown]]).

## Refutation

**Proof technique:** direct.

1.1 Each chosen set and each pairwise intersection is a union of some of the three disjoint pairs, hence has even size. Thus the family satisfies the Eventown conditions of [L1], and all pairwise intersections have the same parity. [given, L1]

2.1 The family has $2^3-1=7$ distinct nonempty members on $n=6$ points. Since $7>6$, it satisfies every hypothesis of the false claim and violates its conclusion. [step 1.1, given] ∎

## Remarks

- The broken step is the real-positivity argument in Fisher's proof. Over $\mathbb{F}_2$ there is no ordered notion of sum of squares.
