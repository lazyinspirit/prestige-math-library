---
id: def-description-machine-and-plain-kolmogorov-complexity
kind: definition
title: "Description machines and plain Kolmogorov complexity"
status: published
origin: session
deps: [def-computable-and-partial-computable-function, def-computation-alphabet-and-word-convention]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, Around Kolmogorov Complexity, §2"
      url: "https://arxiv.org/pdf/1504.04955"
---

## Definition

A **description machine** is a partial computable function $M:\{0,1\}^*\rightharpoonup\{0,1\}^*$ ([[def-computable-and-partial-computable-function]]). For a finite binary string $x$, its plain complexity relative to $M$ is $C_M(x)=\min\{|p|:M(p)=x\}$, with value $\infty$ if no such $p$ exists. Finite strings and their lengths use [[def-computation-alphabet-and-word-convention]].
