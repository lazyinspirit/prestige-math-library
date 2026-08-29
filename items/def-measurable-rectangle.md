---
id: def-measurable-rectangle
kind: definition
title: "Measurable rectangles in a product of measurable spaces"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-measurable-space, def-cartesian-product]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Section 5.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Definition

Let $(X,\mathcal A)$ and $(Y,\mathcal B)$ be measurable spaces. A subset of
$X \times Y$ is a **measurable rectangle** if it has the form $A \times B$ with
$A \in \mathcal A$ and $B \in \mathcal B$.

The ambient sigma-algebras matter: the same set may be a measurable rectangle
for one pair $(\mathcal A,\mathcal B)$ and not for another.
