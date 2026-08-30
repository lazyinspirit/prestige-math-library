---
id: fs-the-pentagon-follows-from-the-triangle
kind: false-statement
title: "FALSE: the pentagon axiom follows from the triangle axiom"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-pentagon-and-the-triangle-are-independent]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1, Exercise 6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

**False claim:** the pentagon axiom follows from the triangle axiom.

## Facts & Assumptions

**Given:** The independence theorem for the two axioms.

[L1] There exists a monoidal-structure witness satisfying the triangle axiom while failing the pentagon axiom ([[thm-the-pentagon-and-the-triangle-are-independent]]).

## Refutation

**Proof technique:** direct.

1.1 If the pentagon followed from the triangle, every structure satisfying the triangle would also satisfy the pentagon. [given]

1.2 But [L1] supplies a witness satisfying the triangle and failing the pentagon. [L1]

2.1 Therefore the claim is false. [step 1.1, step 1.2] ∎
