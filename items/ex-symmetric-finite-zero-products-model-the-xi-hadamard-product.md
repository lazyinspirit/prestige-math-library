---
id: ex-symmetric-finite-zero-products-model-the-xi-hadamard-product
kind: example
title: "Symmetric finite zero products model the genus-one product for xi"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, thm-hadamard-product-for-riemann-xi, thm-trivial-zeros-and-critical-strip]
proof_strategy: direct
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Fix a complex number $\rho$ with $\rho\notin\mathbb R$ and consider the finite
product

$$P_\rho(s):=\left(1-\frac{s}{\rho}\right)\left(1-\frac{s}{\overline\rho}\right)\left(1-\frac{s}{1-\rho}\right)\left(1-\frac{s}{1-\overline\rho}\right).$$

Then $P_\rho$ has real coefficients and satisfies $P_\rho(1-s)=P_\rho(s)$.
Under countable choice, this is the polynomial shadow of the full xi product.

## Facts & Assumptions

**Given:** An arbitrary nonreal $\rho$. Countable choice is used only for the comparison with the xi Hadamard product.

[L1] Under countable choice, the xi function has a genus-one canonical product over the nontrivial zeros of zeta; those zeros are closed under conjugation and reflection in $1/2$ ([[thm-hadamard-product-for-riemann-xi]], [[thm-trivial-zeros-and-critical-strip]]).

## Verification

**Proof technique:** direct.

1.1 The four listed roots of $P_\rho$, counted with multiplicity, are closed under complex conjugation and under $\alpha\mapsto1-\alpha$. Therefore the coefficients of $P_\rho$ are real, and replacing $s$ by $1-s$ permutes this root multiset. [given, algebra]

2.1 A polynomial is determined by its roots together with the leading coefficient, and both remain unchanged in step 1.1. Hence $P_\rho(1-s)=P_\rho(s)$. Under countable choice, [L1] supplies the full xi product over nontrivial zeros; its conjugation and reflection symmetries repeat this finite root pattern. [step 1.1, L1, algebra] ∎
