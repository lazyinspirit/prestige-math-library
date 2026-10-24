---
id: fs-ergodicity-forces-every-orbit-dense
kind: false-statement
title: 'False: every orbit of an ergodic system is dense'
deps: ["thm-doubling-map-is-ergodic-for-lebesgue-measure", "def-circle-rotation-and-doubling-map", "def-countable-choice"]
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
    - title: Sarig Proposition 1.5, fixed-point specialization
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assuming countable choice, an ergodic probability-preserving continuous map need not have every orbit dense. Lebesgue doubling on the circle is ergodic, but the forward orbit of zero is the singleton $\{0\}$.

## Facts & Assumptions

[F1] Doubling is ergodic for Lebesgue probability. [[thm-doubling-map-is-ergodic-for-lebesgue-measure]].

[F2] The circle is represented by $[0,1)$, with doubling and the circle metric. [[def-circle-rotation-and-doubling-map]].

## Refutation

**Given:** Assuming countable choice, an ergodic probability-preserving continuous map need not have every orbit dense. Lebesgue doubling on the circle is ergodic, but the forward orbit of zero is the singleton $\{0\}$.

1.1 The map of [F2] satisfies $D(0)=0$, so induction gives $D^n(0)=0$ for every $n\ge0$. Its orbit is exactly $\{0\}$. The circle ball of radius $1/8$ centered at $1/2$ is a nonempty open set disjoint from this orbit, since $d(0,1/2)=1/2$. Thus the orbit is not dense. [F2]

2.1 Nevertheless [F1] proves that doubling is ergodic for Lebesgue probability, so the displayed orbit refutes the every-point assertion. The countable-choice assumption is needed for that measure-theoretic supplier; the fixed-orbit and open-ball calculations in step 1.1 are choice-free. [1.1, F1] ∎

