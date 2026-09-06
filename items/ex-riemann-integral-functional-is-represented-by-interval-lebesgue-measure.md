---
id: ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure
kind: example
title: "The Riemann integral functional is represented by Lebesgue measure on an interval"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures, thm-lebesgue-measure-is-a-radon-measure-on-rn, lem-compactly-supported-riemann-integral-is-well-defined, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
proof_strategy: direct
verification:
  audited: 2026-09-07
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

Assume the Axiom of Countable Choice. Let $a<b$ and define
$L:C([a,b])\to\mathbb R$ by the Riemann integral
$L(f)=\int_a^bf(x)\,dx$. Then $L$ is positive and its RMK representing measure is Lebesgue measure restricted to $[a,b]$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; continuous functions on $[a,b]$
are Riemann and Lebesgue integrable with equal integrals.

## Verification

**Proof technique:** direct.

1.1 Linearity of the Riemann integral makes $L$ linear, and $f\ge0$ implies $L(f)\ge0$. Since $[a,b]$ is compact, $C_c([a,b])=C([a,b])$. [given]

1.2 Under the stated choice hypothesis, Lebesgue measure is regular on [given]
$\mathbb R$; its restriction to the closed subspace $[a,b]$ is finite and
Radon. For every $f\in C([a,b])$, equality of the Riemann and Lebesgue
integrals gives
$L(f)=\int_{[a,b]}f\,d(\lambda|_{[a,b]})$. The RMK uniqueness theorem now
identifies this measure as the representing measure. [given] ∎
