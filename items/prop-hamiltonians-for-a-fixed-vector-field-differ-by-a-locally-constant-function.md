---
id: prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function
kind: proposition
title: Hamiltonians for a fixed vector field differ by a locally constant function
status: published
origin: pipeline
deps: ["def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.1, p. 106
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

If $H$ and $K$ are Hamiltonian functions for the same vector field on $M$,
then $H-K$ is locally constant, hence constant on each connected component.
Conversely, adding a locally constant function does not change the Hamiltonian
vector field.

## Facts & Assumptions

**Given:** Smooth functions $H,K$ and the Hamiltonian convention.

[F1] A Hamiltonian for $X$ satisfies $dH=\iota_X\omega$. [[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Proof

**Proof technique:** direct.

1.1 If both functions generate $X$, [F1] gives $d(H-K)=0$. In a connected coordinate ball, integration along line segments shows that a smooth function with zero differential is constant; hence $H-K$ is locally constant and therefore constant on each connected component. [F1, given]

2.1 Conversely, if $c$ is locally constant then $dc=0$, so $d(H+c)=dH$ and [F1] gives $X_{H+c}=X_H$. [F1, step 1.1] ∎
