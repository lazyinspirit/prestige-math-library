---
id: cex-pcp-allows-symbol-reordering-within-dominoes
kind: counterexample
title: "A domino family where matching fails unless one illegally permutes symbols inside a tile"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-pcp-allows-symbol-reordering-within-dominoes]
proof_strategy: direct
verification:
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

PCP permits one to reorder the symbols inside a chosen domino before
concatenating it.

## Facts & Assumptions

**Given:** The one-domino PCP instance $(ab,ba)$.

[L1] The companion false statement says PCP would allow internal symbol reordering, by [[fs-pcp-allows-symbol-reordering-within-dominoes]].

## Counterexample

**Proof technique:** direct.

1.1 Consider the one-domino instance $$ (ab,ba). $$ If internal permutation were allowed, the bottom word `ba` could be rearranged to `ab`, so one use of the domino would look like a match. [given]

2.1 In actual PCP, only whole dominoes may be concatenated. Using the unique tile $k\ge 1$ times gives top word $(ab)^k$ and bottom word $(ba)^k$, whose first symbols differ. So the instance has no legal match. [step 1.1]

3.1 Therefore this instance refutes the statement. It is exactly the concrete counterexample recorded abstractly in [L1]. [L1, step 2.1] ∎
