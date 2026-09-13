---
id: def-symplectic-normal-bundle-of-a-symplectic-submanifold
kind: definition
title: Symplectic normal bundle of a symplectic submanifold
status: draft
origin: pipeline
deps: ["def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds", "def-symplectic-orthogonal-complement"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definition 5.16 and Example 5.17(c), pp. 63--64
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

If $S$ is a symplectic submanifold of $(M,\omega)$, its **symplectic normal
bundle** is

$$N^\omega S=(TS)^\omega=\{v\in TM|_S:\omega(v,u)=0\text{ for every }u\in TS\}.$$

It is a smooth symplectic vector subbundle. Indeed, the kernel description has
constant rank, and fibrewise symplectic linear algebra gives
$TM|_S=TS\oplus (TS)^\omega$ with nondegenerate restriction on the second
summand. Projection identifies it with the quotient normal bundle
$TM|_S/TS$.
