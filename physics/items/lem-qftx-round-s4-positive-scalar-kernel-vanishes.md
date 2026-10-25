---
id: lem-qftx-round-s4-positive-scalar-kernel-vanishes
kind: lemma
title: Positive scalar term eliminates the coupled Laplace kernel on round S4
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 4
deps:
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
dependency_roles:
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§5, printed p. 8: the coupled conformally invariant Laplace equation with positive scalar curvature on the round S4."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $E\to S^4$ be a finite-rank Hermitian vector bundle with a smooth unitary connection $\nabla$, where $S^4$ is the unit round sphere with no boundary. Let $c>0$ be a real constant. If a smooth section $s\in\Gamma(E)$ satisfies $(\nabla^*\nabla+cI)s=0$, where $\nabla^*$ is the formal adjoint for the round volume and Hermitian metric, then $s=0$.

## Statement references

[Donaldson, §5, printed p. 8](https://arxiv.org/pdf/2205.08639)

## Facts & Assumptions

**Given:** The compact boundaryless round sphere, the Hermitian bundle and unitary connection, a constant $c>0$, and a smooth section $s$ satisfying the stated equation.

[F1] The round $S^4$ and its metric are those fixed in the ADHM/twistor definitions. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[F2] The formal adjoint satisfies $\int_{S^4}\langle\nabla^*\nabla s,s\rangle\,d\mathrm{vol}=\int_{S^4}|\nabla s|^2\,d\mathrm{vol}$ on a compact manifold without boundary, by its defining integration-by-parts identity.

## Proof

1.1 Pair $(\nabla^*\nabla+cI)s=0$ with $s$ using the Hermitian metric and integrate over the compact boundaryless $S^4$ in [F1]. By [F2], the result is $0=\int_{S^4}|\nabla s|^2\,d\mathrm{vol}+c\int_{S^4}|s|^2\,d\mathrm{vol}$. Both terms are nonnegative and $c>0$, so $\int_{S^4}|s|^2\,d\mathrm{vol}=0$. [given, F1, F2, algebra]

2.1 The pointwise function $|s|^2$ is continuous and nonnegative. If it were positive at some point, it would be bounded below by a positive constant on a nonempty open neighborhood, which has positive Riemannian volume, contradicting the zero integral in step 1.1. Therefore $s=0$ everywhere. [given, step 1.1, algebra] ∎
