---
id: ex-affine-finite-field-reconstruction
kind: example
title: Finite-field affine reconstruction in a basic hyperbolic case
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-affine-hyperbolic-curve-type
  - def-finite-field-and-its-order
  - def-tame-fundamental-group-of-affine-curve
  - lem-projective-line-curve-and-divisor-basics
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: Akio Tamagawa, The Grothendieck conjecture for affine curves, Theorem 0.5 and §4.3
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614
---

## Example

Assume the Axiom of Choice. Let $k=\mathbb F_q$ be any finite field and let $U=\mathbb P^1_k\setminus\{0,1,\infty\}$. The map $t\mapsto1-t$ is a $k$-automorphism of $U$, hence induces an isomorphism of its tame fundamental group, defined up to inner conjugacy by the chosen geometric basepoint. This verifies the forward construction from a curve isomorphism to a tame-group isomorphism in this case; it does not establish that every such group isomorphism comes from a unique curve isomorphism.

## Example references

[Tamagawa, the finite-field reconstruction theorem and tame group, Theorem 0.5 and §4.3](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614)

[[def-affine-hyperbolic-curve-type]]

[[def-tame-fundamental-group-of-affine-curve]]

[[lem-projective-line-curve-and-divisor-basics]]
## Facts & Assumptions

**Given:** A finite field $k$, the punctured projective line $U$, and the functorial tame fundamental group.

[F1] The projective line is smooth, proper, geometrically integral and has genus zero; the type of a compactification pair is $(g,r)$ and hyperbolic means $2g-2+r>0$. Thus these three distinct deleted geometric points give type $(0,3)$ and $2g-2+r=1>0$. [[lem-projective-line-curve-and-divisor-basics]] [[def-affine-hyperbolic-curve-type]]

[F2] An isomorphism of compactification pairs induces an equivalence of the Galois categories of finite étale covers tame along the boundary and hence induces a tame fundamental-group isomorphism up to inner conjugacy. [[def-tame-fundamental-group-of-affine-curve]]

## Verification

1.1 The projective linear map $[T:Z]\mapsto[Z-T:Z]$ is represented by a matrix of determinant $-1$, which is nonzero in every characteristic. Its affine-coordinate formula is $\tau(t)=1-t$ and $\tau^2(t)=t$. It exchanges $0$ and $1$ and fixes $\infty$, so it restricts to a $k$-automorphism of $U$. The type calculation in [F1] confirms that $U$ is hyperbolic. [F1, given, algebra]

2.1 Pullback by $\tau$ and pullback by its inverse $\tau$ are inverse equivalences on finite étale covers of $U$. Since $\tau$ permutes the three boundary points, these equivalences preserve tame ramification. By [F2] they induce inverse continuous isomorphisms of the tame fundamental group up to inner conjugacy. [F2, step 1.1, construct] ∎
