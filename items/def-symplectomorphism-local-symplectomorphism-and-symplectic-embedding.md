---
id: def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding
kind: definition
title: Symplectomorphisms, local symplectomorphisms, and symplectic embeddings
status: published
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold", "def-pullback-of-a-differential-form"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, Definition 7.1, p. 42
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $(M,\omega_M)$ and $(N,\omega_N)$ be
[[def-symplectic-form-and-symplectic-manifold|symplectic manifolds]]. A smooth
map $F:M\to N$ satisfying $F^*\omega_N=\omega_M$, with pullback as in
[[def-pullback-of-a-differential-form]], is

- a **symplectomorphism** if $F$ is a diffeomorphism;
- a **local symplectomorphism** if $F$ is a local diffeomorphism; and
- a **symplectic embedding** if $F$ is a smooth embedding.

The pullback equality is literal; none of the three terms means merely volume
preservation.
