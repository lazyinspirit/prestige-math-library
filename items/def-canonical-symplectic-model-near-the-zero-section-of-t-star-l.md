---
id: def-canonical-symplectic-model-near-the-zero-section-of-t-star-l
kind: definition
title: Canonical symplectic model near the zero section of $T^*L$
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-the-canonical-cotangent-two-form-is-symplectic"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Lemma 5.13 and Theorem 5.14, pp. 62--63
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. The **canonical symplectic model near a
Lagrangian manifold $L$** is any open neighbourhood of the zero section
$0_L\subset T^*L$, equipped with

$$\omega_{\mathrm{can}}=-d\lambda=\sum_i dq^i\wedge dp_i.$$

The zero section is Lagrangian. The word *canonical* refers to the cotangent
form and the zero-section embedding, not to a unique identification of a
neighbourhood in some other symplectic manifold with this model.
