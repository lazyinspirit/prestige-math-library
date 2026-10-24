---
id: lem-oracle-computation-has-a-finite-query-witness
kind: lemma
title: "An oracle computation has a finite query witness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-relative-computability-and-enumerability]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §4.4"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

If an oracle machine $M^X(x)$ halts, there is a finite set $F$ of queries
such that every oracle $Y$ agreeing with $X$ on $F$ gives the same halting run
and output on $x$.

## Facts & Assumptions

**Given:** a halting run of $M^X$ on $x$.

## Proof

**Proof technique:** direct.

1.1 The run has finitely many steps, hence performs only finitely many query instructions. Let $F$ be the set of numbers queried in that run. [given, construct]

2.1 If $Y$ agrees with $X$ on $F$, induction over those finitely many transitions gives the same state, tapes, query answers, and next transition at every step. Thus the run halts with the same output. [step 1.1, induction] ∎
