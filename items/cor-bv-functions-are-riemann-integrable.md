---
id: cor-bv-functions-are-riemann-integrable
kind: corollary
title: "Every bounded-variation function on a compact interval is Riemann integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-jordan-decomposition-for-bv-functions,
       thm-monotone-implies-integrable, thm-linearity-of-the-integral,
       def-darboux-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Every real-valued function of bounded variation on a compact interval $[a,b]$
is Darboux, equivalently Riemann, integrable.

## Facts & Assumptions

**Given:** A bounded-variation function $f:[a,b]\to\mathbb R$.

[L1] Jordan decomposition writes $f=f(a)+P_f-N_f$ with $P_f,N_f$ nondecreasing ([[thm-jordan-decomposition-for-bv-functions]]).

[L2] A monotone real function on a compact interval is integrable ([[thm-monotone-implies-integrable]]).

[L3] Linear combinations of integrable functions are integrable and their integrals combine linearly ([[thm-linearity-of-the-integral]]).

[L4] Darboux integrability is the proper integral notion on $[a,b]$ ([[def-darboux-integral]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $P_f$ and $N_f$ are nondecreasing; by [L2] both are integrable, and the constant function $f(a)$ is integrable. [L1, L2, L4]

2.1 Linearity applied to $f=f(a)+P_f-N_f$ makes $f$ integrable. The singleton interval follows from the zero-integral convention. [step 1.1, L1, L3, L4] ∎

