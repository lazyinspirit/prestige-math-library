---
id: thm-smooth-function-root-isolation-soundness
kind: theorem
title: Soundness and finite termination of smooth-function root isolation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-smooth-function-root-isolation
  - thm-scalar-interval-newton-exclusion-and-inclusion
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§6.2 and 13.1"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Statement

For valid interval range and derivative enclosures on every queried box, each finite run of [[alg-smooth-function-root-isolation]] terminates. Every excluded box contains no root, every certified box contains exactly one root, and every root in the initial interval belongs to a certified box or an unresolved box. A strict interval-Newton inclusion places its root in the interior of the scalar call's box. If the scalar procedure certifies after contraction to an exact singleton, the smooth isolator records the original processed interval, whose root may be at an endpoint. An inconclusive status, including a width or box-budget stop, gives no all-roots conclusion.

## Facts & Assumptions

**Given:** A $C^1$ function on an open interval, a compact dyadic initial interval, valid range and derivative enclosures, a positive minimum width, and a finite box budget.

[F1] The isolator processes a finite queue, calls the scalar interval Newton procedure, bisects unresolved boxes, and returns every queued box as unresolved when the budget is exhausted ([[alg-smooth-function-root-isolation]]).

[F2] A scalar interval Newton "root-free" status excludes roots, and a "unique-root" status contains exactly one root ([[thm-scalar-interval-newton-exclusion-and-inclusion]]).

## Proof

1.1 Initially the queue contains the initial interval. Each processed box is either certified root-free, certified to contain one root, recorded unresolved at the width threshold, or replaced by its two closed halves. Those halves cover their parent, so by induction every root not already certified remains in a queued or unresolved interval. [given, F1, F2, induction]

1.2 Each processing removes one queued box and adds at most two; after at most $B$ processed boxes the queue is finite with at most $B+1$ entries. The algorithm then records the entire remainder as unresolved, so it terminates for every finite budget. [F1, algebra]

2.1 By [F2], no root lies in an excluded box and each certified box has exactly one root. The queue-coverage invariant from step 1.1 places every other root in an unresolved box. Strict-inclusion certificates put their roots in the interiors of the scalar call's boxes; if the scalar procedure certifies after contraction to a singleton, the recorded smooth box is the original processed interval and can contain the root at an endpoint. Therefore unresolved output blocks any claim that all roots have been isolated; it is not evidence of absence. [step 1.1, step 1.2, F2] ∎

