---
id: thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing
kind: theorem
title: "Uniqueness of a classical quasilinear solution before characteristic crossing"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-quasilinear-solution-lifts-to-characteristics, lem-characteristic-solution-satisfies-the-quasilinear-pde, def-characteristic-crossing-and-caustic-for-first-order-pde]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Statement

Let $u,v\in C^1$ solve the same quasilinear Cauchy problem.  On a connected
region where their common characteristic projection from the data is a
diffeomorphism, $u=v$.

## Facts & Assumptions

**Given:** Two $C^1$ solutions with identical data, and a connected region on which the common projection is a diffeomorphism.

## Proof

**Proof technique:** direct.

1.1 The lifting lemma sends the restrictions of both solutions along each data-labelled characteristic to the same augmented initial-value problem. [given, construct]

2.1 Uniqueness of that ODE gives equal lifted values $u(X(s,y))=v(X(s,y))$ on the strip. [step 1.1, given]

3.1 The diffeomorphic projection represents every point of the region as one $X(s,y)$, so step 2.1 gives $u=v$ there. [step 2.1, given] ∎
