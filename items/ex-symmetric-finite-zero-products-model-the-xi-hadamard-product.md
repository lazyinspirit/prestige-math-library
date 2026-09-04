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
deps: [thm-hadamard-product-for-riemann-xi]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Example

Fix a complex number $\rho$ with $\rho\notin\mathbb R$ and consider the finite
product

$$P_\rho(s):=\left(1-\frac{s}{\rho}\right)\left(1-\frac{s}{\overline\rho}\right)\left(1-\frac{s}{1-\rho}\right)\left(1-\frac{s}{1-\overline\rho}\right).$$

Then $P_\rho$ has real coefficients and satisfies $P_\rho(1-s)=P_\rho(s)$.
This is the polynomial shadow of the full xi product.

## Facts & Assumptions

**Given:** The zero symmetries behind the xi Hadamard product.

[L1] The xi function has a genus-one canonical product over the nontrivial zeros of zeta ([[thm-hadamard-product-for-riemann-xi]]).

## Verification

**Proof technique:** direct.

1.1 The four listed roots of $P_\rho$, counted with multiplicity, are closed under complex conjugation and under $\alpha\mapsto1-\alpha$. Therefore the coefficients of $P_\rho$ are real, and replacing $s$ by $1-s$ permutes this root multiset. [L1, given, algebra]

2.1 A polynomial is determined by its roots together with the leading coefficient, and both remain unchanged in step 1.1. Hence $P_\rho(1-s)=P_\rho(s)$. This finite symmetric zero set is exactly the pattern that the full xi product repeats over all nontrivial zeros. [step 1.1, algebra] ∎
