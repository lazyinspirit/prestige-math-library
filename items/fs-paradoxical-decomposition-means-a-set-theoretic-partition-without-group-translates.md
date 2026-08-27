---
id: fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates
kind: false-statement
title: "FALSE: a paradoxical decomposition is just an abstract partition without prescribed translates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-paradoxical-decomposition-of-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

A paradoxical decomposition is nothing more than a set-theoretic partition of a
group.

## Facts & Assumptions

**Given:** The false claim above.

[L1] A paradoxical decomposition includes specified translating group elements
and translated copies covering the whole group ([[def-paradoxical-decomposition-of-a-group]]).

## Refutation

**Proof technique:** direct.

1.1 Partition $(\mathbb Z,+)$ into the even integers and the odd integers. This is an ordinary set-theoretic partition. [given, construct]

2.1 By [L1], a paradoxical decomposition needs finitely many specified translates whose images each cover the whole group again. The even/odd partition by itself carries no such data, so it is not a paradoxical decomposition. Thus the statement is false. [L1, step 1.1] ∎
