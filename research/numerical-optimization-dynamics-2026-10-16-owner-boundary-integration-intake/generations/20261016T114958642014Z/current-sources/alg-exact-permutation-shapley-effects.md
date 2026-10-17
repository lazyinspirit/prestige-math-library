---
id: alg-exact-permutation-shapley-effects
kind: algorithm
title: Exact finite-permutation Shapley effects
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-dependent-input-shapley-effects]
axiom_use: The finite enumeration is choice-free; only a conditional-expectation variance-game application inherits AC from the Shapley definition.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Eunhye Song, Barry L. Nelson, and Jeremy Staum, Shapley Effects for Global Sensitivity Analysis: Theory and Computation, §3.1"
      url: https://users.iems.northwestern.edu/~nelsonb/Publications/SongNelsonStaum.pdf
---

## Definition

**Input:** A finite player set $[d]$, an exact oracle for $v(S)$ at every
$S\subseteq[d]$, and a known $V>0$ satisfying $v(\varnothing)=0$ and
$v([d])=V$. In the sensitivity application, $v$ is the conditional-projection
variance game of [[def-dependent-input-shapley-effects]].

1. Initialize $A_i=0$ for every $i\in[d]$.
2. For each of the $d!$ permutations $\pi$, traverse its entries in order. Start
   with $S=\varnothing$. At entry $i$, add $v(S\cup\{i\})-v(S)$ to $A_i$ and
   replace $S$ by $S\cup\{i\}$.
3. Return $\phi_i=A_i/(d!V)$ for all $i$.

The domain excludes $V=0$ and unavailable coalition values; the procedure does
not approximate conditional expectations or their numerical errors.
