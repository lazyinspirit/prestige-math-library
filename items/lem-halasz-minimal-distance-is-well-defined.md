---
dependency_level: 3
id: lem-halasz-minimal-distance-is-well-defined
kind: lemma
title: "Halász minimal pretentious distance is attained"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-pretentious-distance-to-an-archimedean-twist
  - thm-extreme-value-r
  - thm-heine-borel-characterisation-r
  - thm-complex-exponential-is-entire-with-derivative-itself
proof_strategy: direct
aliases: []
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
---

## Statement

For a 1-bounded multiplicative function $f$, real $x\ge3$, and real $T\ge1$,
the function $t\mapsto D(f,n^{it};x)^2$ is continuous on $[-T,T]$ and attains
its nonnegative minimum there.

## Statement references

[[def-halasz-minimal-pretentious-distance]]

[[thm-extreme-value-r]]

[J. Lebl, *Basic Analysis I*, §3.3](https://www.jirka.org/ra/)

## Facts & Assumptions

**Given:** A 1-bounded multiplicative function $f$, real $x\ge3$, and real $T\ge1$.

[F1] The function $D(f,n^{it};x)^2$ is the finite sum $\sum_{p\le x}(1-\operatorname{Re}(f(p)\exp(-it\log p)))/p$ ([[def-pretentious-distance-to-an-archimedean-twist]]).

[F2] The complex exponential is entire, and therefore continuous on $\mathbb C$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F3] A continuous real-valued function on a nonempty compact subset of $\mathbb R$ attains its least value ([[thm-extreme-value-r]]).

[F4] Every closed and bounded interval in $\mathbb R$ is compact ([[thm-heine-borel-characterisation-r]]).

## Proof

1.1 For each prime $p\le x$, the map $t\mapsto\exp(-it\log p)$ is continuous by [F2]; multiplication by the fixed $f(p)$, taking the real part, and finite summation preserve continuity. Thus the function in the statement is continuous on $[-T,T]$ by [F1]. [given, F1, F2, algebra]

2.1 The interval $[-T,T]$ is nonempty because $T\ge1$, and it is compact by [F4]. Apply [F3] to obtain an attained minimum. Each summand in [F1] is nonnegative, so the minimum is nonnegative as well. [given, F1, F3, F4, step 1.1, algebra] ∎

## Proof references

[[def-pretentious-distance-to-an-archimedean-twist]]

[[thm-complex-exponential-is-entire-with-derivative-itself]]

[[thm-extreme-value-r]]

[[thm-heine-borel-characterisation-r]]
