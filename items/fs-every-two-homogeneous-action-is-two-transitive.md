---
id: fs-every-two-homogeneous-action-is-two-transitive
kind: false-statement
title: "FALSE: every 2-homogeneous action is 2-transitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-two-homogeneous-need-not-be-two-transitive]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "P. J. Cameron, Permutation Groups, Chapter 2"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/pgbook/"
pipeline_run: null
---

## Statement

Every $2$-homogeneous action is $2$-transitive.

## Facts & Assumptions

**Given:** The square-affine action of $G$ on $\mathbb F_7$ from [[cex-two-homogeneous-need-not-be-two-transitive]].

[L1] That action is $2$-homogeneous but not $2$-transitive ([[cex-two-homogeneous-need-not-be-two-transitive]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the square-affine action satisfies the hypothesis of the statement and fails its conclusion. [L1]

2.1 Therefore the statement is false. [step 1.1] ∎
