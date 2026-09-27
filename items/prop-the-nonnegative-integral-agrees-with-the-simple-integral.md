---
id: prop-the-nonnegative-integral-agrees-with-the-simple-integral
kind: proposition
title: "The nonnegative integral agrees with the simple integral on simple functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, lem-well-definedness-of-the-simple-integral, prop-basic-properties-of-the-nonnegative-simple-integral]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (prop-the-nonnegative-integral-agrees-with-the-simple-integral). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

If $s$ is a nonnegative simple measurable function, then its nonnegative
Lebesgue integral equals its simple integral:
$$\int s\,d\mu=\int_{\mathrm{simple}} s\,d\mu.$$

## Facts & Assumptions

**Given:** A nonnegative simple measurable function $s$.

[L1] The nonnegative integral is the supremum of the simple integrals of all simple minorants $0\le u\le s$ ([[def-nonnegative-lebesgue-integral]]).

[L2] The simple integral is monotone on nonnegative simple functions ([[prop-basic-properties-of-the-nonnegative-simple-integral]]).

[L3] The simple integral itself is well defined on every nonnegative simple function ([[def-integral-of-a-nonnegative-simple-function]], [[lem-well-definedness-of-the-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 The function $s$ is one of its own admissible simple minorants, so [L1]
gives $$\int s\,d\mu\ge\int_{\mathrm{simple}} s\,d\mu.$$ [given, L1, L3]

1.2 If $u$ is any admissible simple minorant of $s$, then $u\le s$, so [L2]
gives $$\int_{\mathrm{simple}} u\,d\mu\le\int_{\mathrm{simple}} s\,d\mu.$$ Taking the supremum over all such $u$ in [L1] yields the reverse inequality. [L1, L2, L3]

2.1 The two inequalities from steps 1.1 and 1.2 give equality of the nonnegative and simple integrals on $s$. [step 1.1, step 1.2] ∎
