---
id: def-diagonal-club-intersection
kind: definition
title: "Diagonal intersection and union"
status: published
origin: pipeline
deps: ["def-club-subsets-of-ordinals"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Definition 5.8, p.41"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Definition 14.9, p.81"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Definition

For $(A_\xi)_{\xi<\kappa}$ with $A_\xi\subseteq\kappa$, define

$$\mathop{\triangle}_{\xi<\kappa} A_\xi=\{\alpha<\kappa:\forall\xi<\alpha\ (\alpha\in A_\xi)\},\qquad \mathop{\nabla}_{\xi<\kappa} A_\xi=\{\alpha<\kappa:\exists\xi<\alpha\ (\alpha\in A_\xi)\}.$$

These are the **diagonal intersection** and **diagonal union**. Complementation exchanges them, with each $A_\xi$ replaced by its complement. Zero always lies in the diagonal intersection and never in the diagonal union, by vacuity.
