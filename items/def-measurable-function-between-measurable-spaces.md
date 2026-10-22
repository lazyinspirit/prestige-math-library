---
id: def-measurable-function-between-measurable-spaces
kind: definition
title: "A measurable function between measurable spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measurable-space]
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-measurable-function-between-measurable-spaces.json
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory (2011), Section 3.1, Definition 3.1, p. 33"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $(X,\mathcal{A})$ and $(Y,\mathcal{B})$ be measurable spaces
(Measurable spaces and measurable sets). A function $f : X \to Y$ is **measurable** when

$$f^{-1}(B) \in \mathcal{A} \qquad \text{for every } B \in \mathcal{B}.$$

Equivalently, the family

$$\mathcal{C}_f := \{\, B \subseteq Y : f^{-1}(B) \in \mathcal{A} \,\}$$

is a sigma-algebra on $Y$ containing $\mathcal{B}$.

## Definition references

[[def-measurable-space]]

