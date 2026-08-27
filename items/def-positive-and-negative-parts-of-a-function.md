---
id: def-positive-and-negative-parts-of-a-function
kind: definition
title: "The positive and negative parts of a function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2E"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Let $f : X \to \overline{\mathbb{R}}$ with $\overline{\mathbb{R}}$ as in
[[def-extended-reals]]. Its **positive part** and **negative part** are

$$f^+ := \max\{f,0\},\qquad f^- := \max\{-f,0\}.$$

Pointwise, both functions take values in $[0,+\infty]$, and one has

$$f = f^+ - f^-,\qquad |f| = f^+ + f^-.$$

At each point at least one of $f^+$ and $f^-$ is zero.
