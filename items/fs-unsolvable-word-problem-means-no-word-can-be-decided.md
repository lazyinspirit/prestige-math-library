---
id: fs-unsolvable-word-problem-means-no-word-can-be-decided
kind: false-statement
title: "FALSE: an unsolvable word problem means no individual word can be decided"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-novikov-boone-undecidability-of-the-word-problem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

If a finitely presented group has unsolvable word problem, then no individual
word in that group can ever be proved trivial or nontrivial.

## Facts & Assumptions

**Given:** A finitely presented group with unsolvable word problem.

[L1] Some finitely presented group has unsolvable word problem. ([[rem-novikov-boone-undecidability-of-the-word-problem]])

## Refutation

**Proof technique:** direct.

1.1 An unsolvable word problem means that no single algorithm decides triviality for all input words in that fixed group. [L1, given]

2.1 That does not prevent a particular word from being settled by an ad hoc calculation, a special normal form, or a direct proof. So failure of one uniform algorithm is not the claim that every individual instance is forever inaccessible. [step 1.1, algebra]

3.1 Therefore the statement is false. [step 2.1] ∎
