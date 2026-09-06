---
id: ex-euler-characteristic-of-a-tensor-product-complex
title: "Euler characteristic of a tensor-product complex"
kind: example
status: draft
origin: pipeline
deps: ["prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For $C=(0\to\mathbb Z^2\to\mathbb Z^3\to0)$ and $D=(0\to\mathbb Z\to\mathbb Z^4\to0)$ with zero differentials, $\chi(C\otimes D)=\chi(C)\chi(D)$.

## Verification

**Given:** the displayed finite free complexes with zero differentials.

1.1 Their Euler characteristics are $3-2=1$ and $4-1=3$. [given]

2.1 Expanding the finite total complex gives the product of the two alternating rank sums, hence $\chi(C\otimes D)=3=1\cdot3$. [step 1.1, algebra] ∎
