---
id: fs-the-novikov-boone-theorem-proves-the-uniform-problem-only
kind: false-statement
title: "FALSE: the Novikov-Boone theorem proves only the uniform problem is unsolvable"
status: published
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
  audited: 2026-08-29
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

The Novikov-Boone theorem shows at most that the uniform word problem for
finite presentations is unsolvable.

## Facts & Assumptions

**Given:** The Novikov-Boone theorem.

[L1] Some finitely presented group has unsolvable word problem. ([[rem-novikov-boone-undecidability-of-the-word-problem]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], Novikov-Boone already produces one fixed finitely presented group whose word problem is unsolvable. [L1, given]

2.1 A theorem about one fixed finitely presented group is stronger than a statement that only the varying-presentation problem fails. So the theorem is not limited to the uniform problem. [step 1.1, algebra]

3.1 Therefore the statement is false. [step 2.1] ∎
