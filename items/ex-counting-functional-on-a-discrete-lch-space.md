---
id: ex-counting-functional-on-a-discrete-lch-space
kind: example
title: "Counting measure represents finite-support summation on a discrete LCH space"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-positive-functional-is-integration-against-its-representing-measure, def-counting-measure, prop-counting-measure-is-a-measure, def-nonnegative-lebesgue-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Example

If $X$ is discrete, every $f\in C_c(X)$ has finite support and
$L(f)=\sum_{x\in X}f(x)$ is represented by counting measure.

## Facts & Assumptions

**Given:** $X$ has the discrete topology.

## Verification

**Proof technique:** direct.

1.1 Compact subsets of a discrete space are finite, so $C_c(X)$ consists exactly of finite-support functions. The sum defining $L$ is therefore finite; it is linear and positive. [given]

2.1 For counting measure $\#$, integration of a finite-support function is its finite sum, so $L(f)=\int f\,d\#$. Counting measure is Radon on a discrete space: compact sets are finite and every set is open and is the union of its finite subsets. Its total mass may be infinite when $X$ is infinite. [given] ∎
