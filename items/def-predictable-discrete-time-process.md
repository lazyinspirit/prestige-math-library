---
id: "def-predictable-discrete-time-process"
kind: "definition"
title: "Predictable discrete time process"
deps: ["def-filtration-and-filtered-probability-space", "def-random-element-and-real-random-variable"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Definition

On a discrete filtered probability space [[def-filtration-and-filtered-probability-space]], a real process $(H_n)_{n\ge1}$ is **predictable** if $H_n$ is $\mathcal F_{n-1}$-measurable for every $n\ge1$. Real means finite-valued, as in [[def-random-element-and-real-random-variable]]. There is no $H_0$ convention and predictability alone imposes neither integrability nor boundedness.

Since $\mathcal F_{n-1}\subseteq\mathcal F_n$, every Borel preimage of $H_n$ is also in $\mathcal F_n$. Thus predictability implies adaptedness at the positive times. This is a preimage inclusion, requiring no choice or conditional expectation.
