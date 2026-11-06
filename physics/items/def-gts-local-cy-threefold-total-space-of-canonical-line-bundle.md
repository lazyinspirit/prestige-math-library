---
id: def-gts-local-cy-threefold-total-space-of-canonical-line-bundle
kind: definition
title: Local Calabi–Yau threefold from a canonical line bundle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tom Bridgeland, Fabrizio Del Monte, and Luca Giovenzana, Invariant Stability Conditions on Certain Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/2412.08531v1
      locator: abstract and §1.1, the local $\omega_{\mathbb P^1\times\mathbb P^1}$ model
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $S$ be a nonempty smooth projective complex surface and define its canonical line bundle by $K_S=\det(\Omega^1_S)=\bigwedge^2\Omega^1_S$. For a holomorphic line bundle $L\to S$, its total space $\operatorname{Tot}(L)$ is the complex manifold obtained by gluing the local products $U\times\mathbb C$ using the transition functions of $L$. Set $X=\operatorname{Tot}(K_S)$, with projection $\pi:X\to S$. Then $X$ is a smooth complex threefold and its canonical bundle satisfies $K_X\cong\mathcal O_X$. If $S=\mathbb P^1\times\mathbb P^1$, this is the noncompact local Calabi–Yau threefold denoted $\omega_{\mathbb P^1\times\mathbb P^1}$; it is not a compact Calabi–Yau threefold.

## Definition references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

## Facts & Assumptions

**Given:** A nonempty smooth projective complex surface $S$, its holomorphic cotangent bundle $\Omega^1_S$, and $X=\operatorname{Tot}(K_S)$ with projection $\pi$.

[F1] [[def-complex-manifolds-and-holomorphic-vector-bundles]]: a complex manifold of dimension $m$ carries holomorphic charts with holomorphic transition maps.

[F2] [[def-complex-manifolds-and-holomorphic-vector-bundles]]: a holomorphic vector bundle is locally trivial with holomorphic transition matrices.

## Proof

**Proof technique:** direct local bundle calculation.

1.1 On every holomorphic trivializing open set $U\subset S$, the total space is $U\times\mathbb C$. The differential of the projection has kernel equal to the vertical tangent line, canonically identified with the pullback $\pi^*K_S$. The base tangent map is surjective in these product charts, so the local exact sequences glue to $0\to\pi^*K_S\to T_X\to\pi^*T_S\to0$. The same charts show that $X$ is a smooth complex manifold of dimension $2+1=3$. [given, F1, F2, construct]

2.1 Taking determinants in this exact sequence gives $\det T_X\cong\pi^*(K_S\otimes\det T_S)$. Since $\det T_S=K_S^{-1}$ by the definition of $K_S$, $\det T_X\cong\mathcal O_X$; dualizing yields $K_X=\det\Omega_X^1\cong\mathcal O_X$. [given, step 1.1, algebra]

3.1 For $S=\mathbb P^1\times\mathbb P^1$, every fiber of $\pi$ is isomorphic to $\mathbb C$ and is closed in $X$. If $X$ were compact, that closed fiber would be compact, contradicting noncompactness of $\mathbb C$. Thus this local threefold is noncompact. [given, step 1.1, algebra] ∎
