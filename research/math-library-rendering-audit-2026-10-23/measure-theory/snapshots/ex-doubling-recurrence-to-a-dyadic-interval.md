---
id: ex-doubling-recurrence-to-a-dyadic-interval
kind: example
title: Recurrence to a dyadic interval under doubling
deps: ["thm-poincare-recurrence-for-finite-measure-preserving-systems", "prop-doubling-map-preserves-lebesgue-measure", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Theorem 2.11 and Example 2.4
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. For Lebesgue doubling and $E=[0,1/4)$, almost every $x\in E$ has $D^n x\in E$ for infinitely many positive integers $n$. The points of $E$ returning at time one form $[0,1/8)$, of measure $1/8$.

## Facts & Assumptions

[F1] Finite measure preservation implies infinitely many positive returns for almost every point of a measurable set. [[thm-poincare-recurrence-for-finite-measure-preserving-systems]].

[F2] Doubling preserves Lebesgue probability on the circle and its completion. [[prop-doubling-map-preserves-lebesgue-measure]].

## Verification

**Given:** Assume countable choice. For Lebesgue doubling and $E=[0,1/4)$, almost every $x\in E$ has $D^n x\in E$ for infinitely many positive integers $n$. The points of $E$ returning at time one form $[0,1/8)$, of measure $1/8$.

1.1 The set $E$ is Borel, with $\lambda(E)=1/4$, and [F2] gives a measure-preserving system of total mass one. Applying [F1] with exactly this $E$ proves the stated almost-everywhere infinitely-many-positive-returns conclusion. Countable choice enters through [F2]; the recurrence theorem itself needs no choice axiom. [F1, F2]

2.1 The two inverse branches give $D^{-1}E=[0,1/8)\cup[1/2,5/8)$. Intersecting with $E$ leaves $[0,1/8)$, whose measure is $1/8$. This is the first-return-one set because there is no smaller positive time. Return times need not all be one: $1/5\in E$ has successive images $2/5,4/5,3/5,1/5$, so its first positive return time is four. Zero is fixed and returns at every positive time. These calculations are compatible with recurrence; recurrence alone supplies no return-frequency value or every-point assertion. [1.1, F2] ∎

