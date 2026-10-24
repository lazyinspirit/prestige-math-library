---
id: def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds
kind: definition
title: Isotropic, coisotropic, symplectic, and Lagrangian submanifolds
status: published
origin: pipeline
deps: ["def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces", "def-symplectic-form-and-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §§4.3 and 4.5, pp. 50--54
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $(M,\omega)$ be symplectic and let $i:S\hookrightarrow M$ be a smooth
embedded submanifold of constant dimension. It is **isotropic**,
**coisotropic**, **symplectic**, or **Lagrangian** when $T_pS$ has the
corresponding property from
[[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]] inside the
symplectic vector space $(T_pM,\omega_p)$ for every $p\in S$. Equivalently,
the symplectic case says $i^*\omega$ is nondegenerate, while the Lagrangian
case says $T_pS=(T_pS)^\omega$ at every point.
