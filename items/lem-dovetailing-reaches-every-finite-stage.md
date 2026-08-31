---
id: lem-dovetailing-reaches-every-finite-stage
kind: lemma
title: "A dovetailing schedule reaches every finite simulation stage"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dovetailing-schedule]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
---

## Statement

In the stage-sum dovetailing schedule of [[def-dovetailing-schedule]], every
pair $(i,t)\in\mathbb N^2$ appears at the finite global stage $i+t$. In
particular, every fixed finite simulation prefix of every fixed task is
eventually reached.

## Facts & Assumptions

**Given:** The stage-sum dovetailing schedule $S_0,S_1,S_2,\dots$.

[L1] By [[def-dovetailing-schedule]], $S_s$ consists exactly of the pairs $(i,t)$ with $i+t=s$.

## Proof

**Proof technique:** direct.

1.1 Fix $(i,t)\in\mathbb N^2$ and set $s:=i+t$. Then the defining condition for $S_s$ is satisfied, so [L1] gives $(i,t)\in S_s$. [L1, given]

2.1 Therefore the task with index $i$ is run through its local time $t$ by the finite global stage $s=i+t$. This is exactly the claimed fairness property. [step 1.1] ∎
