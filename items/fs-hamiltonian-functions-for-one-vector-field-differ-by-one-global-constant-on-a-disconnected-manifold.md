---
id: fs-hamiltonian-functions-for-one-vector-field-differ-by-one-global-constant-on-a-disconnected-manifold
kind: false-statement
title: Hamiltonian functions for one vector field differ by one global constant on a disconnected manifold
status: draft
origin: pipeline
deps: ["prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.1, p. 106
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

Hamiltonian functions for one vector field differ by one global constant even
when the manifold is disconnected.

## Facts & Assumptions

**Given:** The proposed claim.

[F1] Such Hamiltonians differ only by a locally constant function, which may
take different values on different components.
[[prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function]].

## Refutation

**Proof technique:** direct.

1.1 Let $M$ be the disjoint union of two copies of the standard symplectic plane. The zero function $H$ generates the zero vector field. Let $K$ equal zero on the first component and one on the second; then $dK=0$, so $K$ generates the same field. [F1, construct]

2.1 But $K-H$ takes both values zero and one and is not one global constant. It is locally constant exactly as [F1] predicts. [F1, step 1.1] ∎
