---
id: cex-vitali-covering-theorem-needs-a-fine-cover
kind: counterexample
title: "The fine-cover hypothesis in the Vitali covering theorem is load-bearing"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-interval, def-vitali-cover-and-fine-cover-on-the-line, fs-vitali-covering-theorem-holds-for-arbitrary-covers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references: []
---

## Statement refuted

Every interval cover of a bounded set admits a countable disjoint subfamily that
covers the set up to a null remainder.

## Facts & Assumptions

**Given:** The statement above.

[A1] We use the non-fine cover by left and right nested intervals.

## Counterexample

**Proof technique:** direct.

1.1 Consider the family $\mathcal V := \{[0,t] : 0<t<1\} \cup \{[t,1] : 0<t<1\}$. It covers $[0,1]$, but it is not a fine cover at any interior point. [given]

2.1 Exactly as in [[fs-vitali-covering-theorem-holds-for-arbitrary-covers]], any disjoint subfamily of $\mathcal V$ has at most one left interval and at most one right interval, hence leaves a nonempty open gap. So this cover has no disjoint subfamily with null uncovered remainder. [step 1.1]

3.1 Therefore the fine-cover hypothesis is genuinely necessary. [step 1.1, step 2.1] ∎
