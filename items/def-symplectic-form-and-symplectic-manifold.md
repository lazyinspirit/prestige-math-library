---
id: def-symplectic-form-and-symplectic-manifold
kind: definition
title: Symplectic form and symplectic manifold
status: published
origin: pipeline
deps: ["def-symplectic-vector-space"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §3.1, Definition 3.1, p. 31
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A **symplectic form** on a smooth manifold $M$ is a smooth two-form $\omega$
such that

1. $d\omega=0$, and
2. $(T_pM,\omega_p)$ is a [[def-symplectic-vector-space|symplectic vector
   space]] for every $p\in M$.

The pair $(M,\omega)$ is a **symplectic manifold**. Thus both closedness and
pointwise nondegeneracy are required. A zero-dimensional manifold with its
zero two-form satisfies the definition.
