---
id: def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
kind: definition
title: "Absolute logarithmic Weil height on projective space over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Cornell%2C%20Silverman%20-%20Arithmetic%20Geometry.pdf"
verification: {}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice. For a number field $K$ and $P\in\mathbb P^n(K)$, the absolute logarithmic Weil height is
$$
h(P)=\log H(P),
$$
where $H(P)$ is the absolute multiplicative height. Equivalently, if $N=[K:\mathbb Q]$, then $h(P)=N^{-1}\log H_K(P)$. It is independent of the projective coordinates used to represent $P$ and is nonnegative.

## Definition references

[[def-axiom-of-choice]]

[[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ and $P\in\mathbb P^n(K)$.

[A1] The Axiom of Choice is the premise required by the multiplicative-height definition. ([[def-axiom-of-choice]])

[F1] The absolute multiplicative height $H(P)$ is coordinate-independent and at least $1$. ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]])

## Proof

1.1 The logarithm is defined because [F1] gives $H(P)\ge1>0$, and applying it to $H(P)=H_K(P)^{1/[K:\mathbb Q]}$ gives the equivalent formula. [given, A1, F1, algebra]

1.2 Since $\log$ is increasing on positive reals and $H(P)\ge1$, $h(P)=\log H(P)\ge0$. If a different coordinate tuple represents $P$, [F1] leaves $H(P)$ unchanged, so its logarithm is unchanged as well. [given, A1, F1, step 1.1, algebra] ∎
