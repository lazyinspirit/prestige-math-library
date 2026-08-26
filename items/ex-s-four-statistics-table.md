---
id: ex-s-four-statistics-table
kind: example
title: "The permutations of $S_4$ tabulated by inversions, descents, major index and excedances"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-q-factorial-counts-permutations-by-inversions, thm-descents-and-excedances-are-equidistributed, cor-major-index-generating-function-is-q-factorial]
justified_by: []
aliases: []
landmark: false
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
  references: []
pipeline_run: null
---

## Example

For $S_4$, the four statistics take the following values.

| permutation | inv | des | maj | exc |
|---|---:|---:|---:|---:|
| 0 1 2 3 | 0 | 0 | 0 | 0 |
| 0 1 3 2 | 1 | 1 | 3 | 1 |
| 0 2 1 3 | 1 | 1 | 2 | 1 |
| 0 2 3 1 | 2 | 1 | 3 | 2 |
| 0 3 1 2 | 2 | 1 | 2 | 1 |
| 0 3 2 1 | 3 | 2 | 5 | 1 |
| 1 0 2 3 | 1 | 1 | 1 | 1 |
| 1 0 3 2 | 2 | 2 | 4 | 2 |
| 1 2 0 3 | 2 | 1 | 2 | 2 |
| 1 2 3 0 | 3 | 1 | 3 | 3 |
| 1 3 0 2 | 3 | 1 | 2 | 2 |
| 1 3 2 0 | 4 | 2 | 5 | 2 |
| 2 0 1 3 | 2 | 1 | 1 | 1 |
| 2 0 3 1 | 3 | 2 | 4 | 2 |
| 2 1 0 3 | 3 | 2 | 3 | 1 |
| 2 1 3 0 | 4 | 2 | 4 | 2 |
| 2 3 0 1 | 4 | 1 | 2 | 2 |
| 2 3 1 0 | 5 | 2 | 5 | 2 |
| 3 0 1 2 | 3 | 1 | 1 | 1 |
| 3 0 2 1 | 4 | 2 | 4 | 1 |
| 3 1 0 2 | 4 | 2 | 3 | 1 |
| 3 1 2 0 | 5 | 2 | 4 | 1 |
| 3 2 0 1 | 5 | 2 | 3 | 2 |
| 3 2 1 0 | 6 | 3 | 6 | 2 |

## Facts & Assumptions

**Given:** The inversion generating function, the major-index generating function, and the equidistribution of descents and excedances on $S_4$ ([[thm-q-factorial-counts-permutations-by-inversions]], [[cor-major-index-generating-function-is-q-factorial]], [[thm-descents-and-excedances-are-equidistributed]]).

## Verification

**Proof technique:** direct.

1.1 The table is an exhaustive enumeration of the $24$ one-line permutations of $S_4$, with each statistic computed directly from its definition. [given]

2.1 Reading off the distributions from the table gives $1+3q+5q^2+6q^3+5q^4+3q^5+q^6$ for inversions, the same polynomial for the major index, and $(1,11,11,1)$ for both descents and excedances. This matches the three cited theorems. [step 1.1, given] ∎
