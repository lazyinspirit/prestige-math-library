---
id: ex-indicator-functions-are-measurable
kind: example
title: "Indicator functions of measurable sets are measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-indicator-function-is-measurable-iff-its-set-is-measurable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Example

If $E$ is measurable, then its indicator $\mathbf{1}_E$ is measurable.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal{A})$ and a measurable set
$E \in \mathcal{A}$.

[L1] An indicator function is measurable exactly when its set is measurable.
([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

## Verification

**Proof technique:** direct.

1.1 The set $E$ is measurable by hypothesis. [given]

2.1 Therefore [L1] gives that $\mathbf{1}_E$ is measurable. [step 1.1, L1] ∎
