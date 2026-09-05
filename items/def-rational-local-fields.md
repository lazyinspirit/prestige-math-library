---
id: def-rational-local-fields
kind: definition
title: "The rational local fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-of-p-adic-numbers, thm-p-adic-completion-is-a-field]
justified_by: []
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

The **rational local fields** are the completions of $\mathbb Q$ at its places:

- $Q_\infty := \mathbb R$ at the archimedean place,
- $Q_p := \mathbb Q_p$ at the prime place $p$, where $\mathbb Q_p$ is the
  completion of [[def-field-of-p-adic-numbers]], equipped with its field
  structure by [[thm-p-adic-completion-is-a-field]].

When a statement is uniform in the place $v$, the notation $Q_v$ refers to one
of these fields.
