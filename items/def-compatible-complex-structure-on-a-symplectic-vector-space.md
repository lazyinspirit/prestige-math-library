---
id: def-compatible-complex-structure-on-a-symplectic-vector-space
kind: definition
title: Compatible complex structure on a symplectic vector space
status: draft
origin: pipeline
deps: ["def-symplectic-vector-space"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definition 2.24 and the calculation following it, pp. 13--14
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $(V,\omega)$ be a symplectic vector space. A **complex structure** on $V$
is a real-linear endomorphism $J$ satisfying $J^2=-\operatorname{id}_V$. It is
**compatible with $\omega$** if

$$g_J(u,v):=\omega(u,Jv)$$

is a real inner product: it is symmetric and positive definite.

Compatibility implies $\omega(Ju,Jv)=\omega(u,v)$ and
$g_J(Ju,Jv)=g_J(u,v)$. Thus $J$ preserves both the symplectic form and its
associated metric. The definition includes the zero vector space.
