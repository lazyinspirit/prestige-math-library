---
id: ex-relative-versus-absolute-height-exponents
kind: example
title: "Relative and absolute height threshold conversion"
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
    - title: "Stephen H. Schanuel, Heights in Number Fields"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
verification: {}
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. Let $K$ be a number field of degree $N=[K:\mathbb Q]$, let $P\in\mathbb P^n(K)$, and let $B\ge1$. If $H_K(P)$ is the relative multiplicative height and $H(P)$ is the absolute multiplicative height, then
$$
H(P)\le B\quad\Longleftrightarrow\quad H_K(P)\le B^N.
$$
Equivalently, $h(P)\le\log B$ if and only if $\log H_K(P)\le N\log B$.

## Example references

[[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]

## Facts & Assumptions

**Given:** AC; a number field $K$ of degree $N$; a projective point $P$; and $B\ge1$.

[A1] AC is the premise required by the absolute-height definition. ([[def-axiom-of-choice]])

[F1] $H(P)=H_K(P)^{1/N}$ with $N>0$. ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]])

## Verification

1.1 Since $N>0$, raising both sides of $H(P)\le B$ to the positive power $N$ preserves the inequality. By [F1], this gives the equivalent inequality $H_K(P)\le B^N$. [given, A1, F1, algebra]

1.2 As $B\ge1>0$, taking logarithms preserves order; the logarithmic inequality is exactly $N^{-1}\log H_K(P)\le\log B$, equivalently $\log H_K(P)\le N\log B$. [given, A1, F1, step 1.1, algebra] ∎
