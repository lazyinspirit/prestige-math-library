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
    - title: "John K. Hunter, Measure Theory, Definition 3.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $(X,\mathcal{A})$ and $(Y,\mathcal{B})$ be measurable spaces
([[def-measurable-space]]). A function $f : X \to Y$ is **measurable** when

$$f^{-1}(B) \in \mathcal{A} \qquad \text{for every } B \in \mathcal{B}.$$

Equivalently, the family

$$\mathcal{C}_f := \{\, B \subseteq Y : f^{-1}(B) \in \mathcal{A} \,\}$$

is a sigma-algebra on $Y$ containing $\mathcal{B}$.
