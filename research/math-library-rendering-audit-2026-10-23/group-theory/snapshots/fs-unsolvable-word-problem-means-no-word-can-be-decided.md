---
id: fs-unsolvable-word-problem-means-no-word-can-be-decided
kind: false-statement
title: "FALSE: an unsolvable word problem means no individual word can be decided"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-novikov-boone-undecidability-of-the-word-problem, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (fs-unsolvable-word-problem-means-no-word-can-be-decided). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

Assume AC. If a finitely presented group has unsolvable word problem, then no individual
word in that group can ever be proved trivial or nontrivial.

## Facts & Assumptions

**Given:** AC and a finitely presented group with unsolvable word problem.

[L1] Assuming AC, some finitely presented group has unsolvable word problem ([[thm-novikov-boone-undecidability-of-the-word-problem]], [[def-axiom-of-choice]]).

## Refutation

**Proof technique:** direct.

1.1 An unsolvable word problem means that no single algorithm decides triviality for all input words in that fixed group. [L1, given]

1.2 The empty word represents the identity in every group, and its triviality has a direct proof from the group axioms. In particular this individual word is decidable even in the group supplied by [L1]. [L1, given]

2.1 This explicit word refutes the assertion that no individual word can be proved trivial or nontrivial. [step 1.1, step 1.2] ∎
