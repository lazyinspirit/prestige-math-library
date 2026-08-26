---
id: fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable
kind: false-statement
title: "FALSE: every continuous image of a Lebesgue measurable subset of $\\mathbb{R}$ is Lebesgue measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable]
aliases: []
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Every continuous image of a Lebesgue measurable subset of $\mathbb{R}$ is
Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] A continuous image of a Lebesgue measurable subset of $\mathbb{R}$ can be nonmeasurable ([[cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1] choose a measurable subset $E \subseteq \mathbb{R}$ and a continuous map $f:E \to \mathbb{R}$ whose image is not measurable. [L1]

2.1 This single witness $(E,f)$ refutes the universal claim. [step 1.1] ∎
