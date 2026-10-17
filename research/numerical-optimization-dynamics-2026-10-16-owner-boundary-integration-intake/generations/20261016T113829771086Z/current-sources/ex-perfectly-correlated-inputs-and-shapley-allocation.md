---
id: ex-perfectly-correlated-inputs-and-shapley-allocation
kind: example
title: Perfectly correlated inputs share a Shapley effect
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-dependent-input-shapley-effects, thm-shapley-effects-are-nonnegative-and-efficient, alg-exact-permutation-shapley-effects, def-moments-variance-and-covariance, def-axiom-of-choice, thm-conditional-expectation-is-the-l2-orthogonal-projection]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Eunhye Song, Barry L. Nelson, and Jeremy Staum, Shapley Effects for Global Sensitivity Analysis: Theory and Computation, §§2–3"
      url: https://users.iems.northwestern.edu/~nelsonb/Publications/SongNelsonStaum.pdf
---

## Example

Assume AC. Let $Z$ be symmetric on $\{-1,1\}$, set $X_1=X_2=Z$, and let
$Y=f(X_1,X_2)=Z$. Then $V=\operatorname{Var}(Y)=1$. The independent-input
Hoeffding decomposition is not applicable because $X_1$ and $X_2$ are
perfectly dependent. Under the Shapley convention of
[[def-dependent-input-shapley-effects]], both inputs receive effect $1/2$.

## Facts & Assumptions

**Given:** AC, symmetric $Z\in\{-1,1\}$, $X_1=X_2=Z$, and $Y=Z$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the conditional-expectation projection supplier.

[F1] [[def-dependent-input-shapley-effects]]: $v(S)=\operatorname{Var}(\mathbb E[Y\mid X_S])$ and each effect averages predecessor-set increments over permutations.

[F2] [[thm-shapley-effects-are-nonnegative-and-efficient]]: the finite permutation effects are nonnegative and sum to one.

[F3] [[alg-exact-permutation-shapley-effects]]: the procedure enumerates every permutation, adds each predecessor-set marginal to the corresponding accumulator, and returns the accumulators divided by $d!V$.

[F4] [[def-moments-variance-and-covariance]]: $\operatorname{Var}(Z)=\mathbb E[(Z-\mathbb EZ)^2]$.

[F5] [[thm-conditional-expectation-is-the-l2-orthogonal-projection]]: under AC, conditional expectation fixes variables measurable with respect to the conditioning sigma-algebra.

## Verification

**Given:** The model and conventions in the Example.

1.1 Symmetry gives $\mathbb EZ=0$ and $\mathbb EZ^2=1$, so $V=1$. Since $Y$ is measurable with respect to either $X_1$ or $X_2$, [F5] fixes its conditional expectation for either singleton, giving $v(\varnothing)=0$, $v(\{1\})=v(\{2\})=1$, and $v(\{1,2\})=1$. [A1, F1, F4, F5, given, algebra]

2.1 For permutation $(1,2)$, the increments are $1-0=1$ for input 1 and $1-1=0$ for input 2. For permutation $(2,1)$, they are $1$ for input 2 and $0$ for input 1. There are exactly these two permutations, so [F3] returns $\phi_1=\phi_2=(1+0)/(2V)=1/2$. [F1, F3, step 1.1, algebra]

3.1 Both effects are nonnegative and $\phi_1+\phi_2=1$, in agreement with [F2]. The allocation splits variance that either input fully reveals; it does not assert an independent-input Sobol decomposition. [F2, step 2.1] ∎

