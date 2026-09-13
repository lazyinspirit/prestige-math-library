---
id: def-liouville-vector-field-on-an-exact-symplectic-manifold
kind: definition
title: Liouville vector field on an exact symplectic manifold
status: draft
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold", "thm-cartans-magic-formula"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, exact cotangent form, and Lecture 18, Hamiltonian conventions
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $(M,\omega)$ be exact with a specified primitive
$\omega=-d\lambda$. The **Liouville vector field associated with $\lambda$**
is the unique vector field $Z$ satisfying

$$\iota_Z\omega=-\lambda.$$

Cartan's formula gives
$\mathcal L_Z\omega=d(-\lambda)+\iota_Zd\omega=-d\lambda=\omega$.
Thus its local flow expands the symplectic form. The field depends on the
chosen primitive $\lambda$.
