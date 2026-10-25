---
id: def-symplectic-vector-field
kind: definition
title: Symplectic vector field
status: published
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.2, pp. 105--106
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A smooth vector field $X$ on a symplectic manifold $(M,\omega)$ is
**symplectic** if

$$\mathcal L_X\omega=0.$$

Equivalently, wherever its local flow $\phi_t$ is defined, every time slice
preserves the form: $\phi_t^*\omega=\omega$. Completeness is not part of the
definition.
