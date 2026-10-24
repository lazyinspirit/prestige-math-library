---
id: fs-the-novikov-boone-theorem-proves-the-uniform-problem-only
kind: false-statement
title: "FALSE: the Novikov-Boone theorem proves only the uniform problem is unsolvable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-axiom-of-choice, thm-novikov-boone-undecidability-of-the-word-problem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (fs-the-novikov-boone-theorem-proves-the-uniform-problem-only). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. The Novikov-Boone theorem shows at most that the uniform word problem for
finite presentations is unsolvable.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the Novikov-Boone theorem.

[L1] Under the given Choice premise, the Novikov-Boone theorem supplies one fixed finite presentation with unsolvable word problem. ([[thm-novikov-boone-undecidability-of-the-word-problem]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], Novikov-Boone already produces one fixed finitely presented group whose word problem is unsolvable. [L1, given]

2.1 A theorem about one fixed finitely presented group is stronger than a statement that only the varying-presentation problem fails. So the theorem is not limited to the uniform problem. [step 1.1, algebra]

3.1 Therefore the statement is false. [step 2.1] ∎
