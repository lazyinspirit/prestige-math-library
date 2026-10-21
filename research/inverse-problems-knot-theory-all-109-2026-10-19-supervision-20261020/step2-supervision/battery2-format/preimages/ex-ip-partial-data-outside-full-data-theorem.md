---
id: ex-ip-partial-data-outside-full-data-theorem
kind: example
title: "A partial-data configuration outside the full-data theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - cor-ip-euclidean-cta-conductivity-uniqueness
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Theorem 1.2, scope of the full-data Schrödinger uniqueness result."
---

## Example

Let $\Omega=B(0,1)\subset\mathbb R^3$ and let $\Gamma=\{x\in\partial\Omega:x_3>1/2\}$, a proper nonempty open boundary cap. A measurement protocol that knows only $\Lambda_\gamma f|_\Gamma$ for inputs $f\in C_c^\infty(\Gamma)$ is a partial-data protocol. It is outside the full-data conductivity uniqueness theorem, whose hypothesis is equality of the DN operators on every boundary input; this example asserts no nonuniqueness for the partial-data protocol.

## Example references

[[def-ip-conductivity-dirichlet-to-neumann-map|Full-data conductivity DN map]]

[[cor-ip-euclidean-cta-conductivity-uniqueness|Full-data conditional conductivity uniqueness]]

## Facts & Assumptions

**Given:** the unit ball, the open cap $\Gamma$, and the partial input/output restriction in the statement.

[F1] [[def-ip-conductivity-dirichlet-to-neumann-map]]: full-data equality is equality of the operators on all of $H^{1/2}(\partial\Omega)$.

[F2] [[cor-ip-euclidean-cta-conductivity-uniqueness]]: the full-data theorem's hypothesis is equality of the scalar DN maps on every boundary datum.

## Proof

**Given:** the data in the statement.

1.1 The set $\Gamma$ is nonempty because it contains the north pole and is open in the sphere because it is the inverse image of $(1/2,\infty)$ under the continuous coordinate $x\mapsto x_3$. It is proper because the south pole is not in it. A nonzero smooth bump supported in a small lower cap defines boundary data outside $C_c^\infty(\Gamma)$, so the allowed inputs form a proper subset of the full boundary-data space. [given, construct, algebra]

1.2 By [F1] and [F2], the full-data theorem requires the map on every $H^{1/2}(\partial\Omega)$ input and the corresponding full boundary output. The stated protocol restricts both input and output to $\Gamma$, so it does not satisfy that hypothesis. This classifies the configuration as outside the theorem's scope and asserts no uniqueness or nonuniqueness conclusion. [F1, F2, step 1.1] ∎

