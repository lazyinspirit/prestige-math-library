---
dependency_level: 1
id: ex-dirichlet-bounded-denominator-approximation-to-sqrt-two
kind: example
title: "A bounded-denominator approximation to √2"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-dirichlet-rational-approximation-with-bounded-denominator
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Glyn Harman, Metric Number Theory, Chapter 2, Theorem 2.1"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Example

For $\alpha=\sqrt2$ and denominator bound $Q=3$, the reduced fraction $3/2$ satisfies $q=2\le3$ and $|\sqrt2-3/2|<1/6=1/(2\cdot3)$.

## Example references

[[thm-dirichlet-rational-approximation-with-bounded-denominator|Dirichlet approximation with a bounded denominator]]

[Harman, *Metric Number Theory*, Chapter 2, Theorem 2.1](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** $\alpha=\sqrt2$ and $Q=3$.

[F1] The claimed bound is $1/(qQ)$ for a coprime pair with $1\le q\le Q$. ([[thm-dirichlet-rational-approximation-with-bounded-denominator]])

## Verification

1.1 Since $(3/2)^2=9/4>2$, one has $\sqrt2<3/2$, and rationalizing gives $3/2-\sqrt2=(1/4)/(3/2+\sqrt2)=1/(6+4\sqrt2)<1/6$. [given, algebra]

2.1 The numerator and denominator are coprime, $2\le3$, and $1/6=1/(2\cdot3)$, so this pair verifies the stated bounded-denominator approximation. [given, F1, step 1.1] ∎
