---
id: def-atom-and-continuity-point-of-a-law
kind: definition
title: "Atoms and continuity points of a law"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cumulative-distribution-function-of-a-random-variable, def-atom-of-a-measure-on-r]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Section 2.3"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Definition

Let $X$ be a real random variable with law $\mathbb P_X$ and cumulative
distribution function $F_X$.

- A point $x\in\mathbb R$ is an **atom of the law of $X$** when it is an atom of
  the Borel measure $\mathbb P_X$, equivalently when
  $$\mathbb P_X(\{x\})>0.$$
- A point $x\in\mathbb R$ is a **continuity point of the law of $X$** when
  $F_X$ is continuous at $x$.

The atom language belongs to the measure [[def-atom-of-a-measure-on-r]], while
the continuity-point language belongs to the distribution function
[[def-cumulative-distribution-function-of-a-random-variable]].
