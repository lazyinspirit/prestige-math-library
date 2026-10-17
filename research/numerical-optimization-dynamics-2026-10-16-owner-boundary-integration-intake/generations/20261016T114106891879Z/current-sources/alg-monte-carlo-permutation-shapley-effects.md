---
id: alg-monte-carlo-permutation-shapley-effects
kind: algorithm
title: Monte Carlo permutation estimator for Shapley effects
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-dependent-input-shapley-effects]
axiom_use: Permutation sampling for a supplied finite game is choice-free; only a conditional-expectation variance-game application inherits AC from the Shapley definition.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Eunhye Song, Barry L. Nelson, and Jeremy Staum, Shapley Effects for Global Sensitivity Analysis: Theory and Computation, §4.1"
      url: https://users.iems.northwestern.edu/~nelsonb/Publications/SongNelsonStaum.pdf
---

## Definition

**Input:** A finite player set $[d]$, exact coalition values $v(S)$ with
$v(\varnothing)=0$, $v([d])=V>0$, and a declared integer sample size $n\ge2$.

1. Draw $n$ independent permutations $\pi_1,\ldots,\pi_n$, each uniformly
   from the $d!$ permutations of $[d]$.
2. For each row $r$ and each $i$, compute
   $\Delta_i^{(r)}=v(P_i^{\pi_r}\cup\{i\})-v(P_i^{\pi_r})$.
3. Return $\widehat\phi_i=(nV)^{-1}\sum_r\Delta_i^{(r)}$ and the standard-error
   covariance estimate $\widehat\Sigma_\Delta/(nV^2)$, where
   $\widehat\Sigma_\Delta=(n-1)^{-1}\sum_r(\Delta^{(r)}-\bar\Delta)
   (\Delta^{(r)}-\bar\Delta)^{\mathsf T}$.

The exact conditional-variance evaluation is an input oracle. This permutation
sampling procedure does not supply a conditional sampler or bound its numerical
error.
