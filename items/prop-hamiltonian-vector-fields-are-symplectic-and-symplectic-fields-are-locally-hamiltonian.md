---
id: prop-hamiltonian-vector-fields-are-symplectic-and-symplectic-fields-are-locally-hamiltonian
kind: proposition
title: Hamiltonian vector fields are symplectic and symplectic fields are locally Hamiltonian
status: draft
origin: pipeline
deps: ["prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed", "thm-poincare-lemma-for-star-shaped-domains"]
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

## Statement

Every Hamiltonian vector field is symplectic. Conversely, every symplectic
vector field is Hamiltonian on a sufficiently small neighbourhood of each
point.

## Facts & Assumptions

**Given:** A vector field $X$ on a symplectic manifold.

[F1] $X$ is symplectic exactly when $\iota_X\omega$ is closed.
[[prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed]].

[F2] On a star-shaped open subset of Euclidean space, every closed $C^1$
coefficient field is the gradient of a potential.
[[thm-poincare-lemma-for-star-shaped-domains]].

## Proof

**Proof technique:** direct.

1.1 If $X=X_H$, then $\iota_X\omega=dH$ is exact and therefore closed; [F1] makes $X$ symplectic. [F1, given]

2.1 If $X$ is symplectic, [F1] makes $\iota_X\omega$ closed. Around any point restrict to a coordinate ball that is star-shaped in coordinates. The coefficient vector of this smooth one-form satisfies the symmetric-partial equations for a closed field, so [F2] supplies $H$ there with $dH=\iota_X\omega$. Thus $X=X_H$ locally. [F1, F2, given, algebra] ∎
