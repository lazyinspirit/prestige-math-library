---
id: def-compatible-almost-kahler-metric
kind: definition
title: Compatible almost-Kähler metric
status: published
origin: pipeline
deps: ["def-compatible-complex-structure-on-a-symplectic-vector-space"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definitions 3.31--3.32 and Remark 3.33, pp. 42--43
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $(M,\omega)$ be symplectic and let $J$ be an $\omega$-compatible smooth
almost-complex structure. The Riemannian metric

$$g_J(X,Y)=\omega(X,JY)$$

is the **compatible almost-Kähler metric**, and $(M,\omega,J,g_J)$ is an
**almost-Kähler manifold**. No integrability of $J$ is included in this term.

Once any two of $\omega$, $J$, and $g_J$ are fixed subject to compatibility,
the displayed identity determines the third.
