---
id: ex-some-turing-reductions-are-not-truth-table-reductions
kind: example
title: "A Turing reduction without a truth table"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-some-turing-reductions-are-not-truth-table-reductions, def-truth-table-reduction]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 5.13"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Example

Set $X=0'$. The non-domination argument guarantees at least one set
$Y\le_TX$ which has no everywhere-total oracle functional computing it from
$X$. This is an existence example: a Turing computation may need an
oracle-dependent amount of information before it knows its answer.

## Facts & Assumptions

**Given:** $X=0'$.

## Verification

**Proof technique:** direct.

1.1 [[thm-some-turing-reductions-are-not-truth-table-reductions]] supplies a set $Y$ such that $Y\le_TX$ and $Y\not\le_{tt}X$. [given]

2.1 By [[def-truth-table-reduction]], that failure says no functional computing $Y$ from $X$ is total on every possible oracle. [step 1.1] ∎
