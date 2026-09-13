---
id: def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces
kind: definition
title: Isotropic, coisotropic, symplectic, and Lagrangian subspaces
status: draft
origin: pipeline
deps: ["def-symplectic-orthogonal-complement"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §2.2, Definitions 2.7 and 2.19, pp. 8 and 11
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $W$ be a subspace of a symplectic vector space $(V,\omega)$, with
[[def-symplectic-orthogonal-complement|symplectic orthogonal]] $W^\omega$.
Then $W$ is

- **isotropic** when $W\subseteq W^\omega$, equivalently $\omega|_{W\times W}=0$;
- **coisotropic** when $W^\omega\subseteq W$;
- **symplectic** when $\omega|_{W\times W}$ is nondegenerate, equivalently
  $W\cap W^\omega=0$; and
- **Lagrangian** when $W=W^\omega$.

The zero subspace is isotropic (and Lagrangian only when $V=0$), while $V$ is
coisotropic and symplectic.
