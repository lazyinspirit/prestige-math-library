---
id: fs-pcp-allows-symbol-reordering-within-dominoes
kind: false-statement
title: "FALSE: PCP permits reordering symbols inside a domino"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-post-correspondence-problem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

In a PCP match, one may reorder the symbols inside a chosen domino before
concatenating it.

## Facts & Assumptions

**Given:** The one-domino PCP instance $$ (ab,ba). $$

[L1] A PCP match must satisfy equality of the literal top and bottom concatenations of the chosen domino sequence, by [[def-post-correspondence-problem]].

## Refutation

**Proof technique:** direct.

1.1 If one were allowed to reorder symbols inside the domino, the unique tile could be changed from $(ab,ba)$ to $(ab,ab)$ by swapping the bottom symbols, and then a one-tile sequence would look like a match. [given]

2.1 In actual PCP, [L1] forbids that operation. The only nonempty sequences use the same domino some number $k\ge 1$ of times, yielding top word $(ab)^k$ and bottom word $(ba)^k$. Their first symbols are always different, so these words are never equal. [L1, step 1.1]

3.1 Therefore the claimed permission is false: PCP concatenates whole dominoes in the chosen order and does not allow symbol reordering within a tile. [step 2.1] ∎
