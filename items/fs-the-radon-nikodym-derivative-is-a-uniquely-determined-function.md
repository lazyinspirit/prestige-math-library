---
id: fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function
kind: false-statement
title: "FALSE: the Radon-Nikodym derivative is a uniquely determined function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-radon-nikodym-derivative, cor-cantor-set-is-an-uncountable-lebesgue-null-set, cor-integral-over-a-null-set-vanishes]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, paragraph after 9.36"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

**False claim:** For $\nu\ll\mu$, the derivative $d\nu/d\mu$ is a uniquely determined pointwise function.

## Facts & Assumptions

**Given:** Countable choice, the zero measure, and the Cantor set $C$.

[L1] The Cantor set is Lebesgue null. ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]])

[L2] The integral over a null set vanishes. ([[cor-integral-over-a-null-set-vanishes]])

[L3] The Radon-Nikodym derivative is only an almost-everywhere equivalence class. ([[def-radon-nikodym-derivative]])

## Refutation

**Proof technique:** direct.

1.1 The functions $0$ and $\chi_C$ both integrate to $0$ over every measurable set by [L1] and [L2], so they both represent the Radon-Nikodym derivative of the zero measure with respect to Lebesgue measure. [L1, L2, given]

2.1 These two representing functions are not equal pointwise, while [L3] allows exactly this kind of null-set discrepancy. Hence pointwise uniqueness is false. [step 1.1, L3] ∎
