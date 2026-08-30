---
id: ex-an-exact-short-sequence-as-an-acyclic-three-term-complex
kind: example
title: "An exact short sequence as an acyclic three-term complex"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees,
       thm-modules-over-a-ring-form-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra, §2.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Example

The short exact sequence
$$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$$
becomes an acyclic three-term chain complex when placed in degrees $2$, $1$,
and $0$.

## Facts & Assumptions

**Given:** The short exact sequence $$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0.$$

[L1] $\mathbf{Ab}$ is an abelian category ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] An exact sequence is a chain complex, and its exactness agrees with the earlier exact-sequence notion ([[prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees]]).

## Verification

**Proof technique:** direct.

1.1 The displayed sequence is exact in $\mathbf{Ab}$: multiplication by $2$ is injective, the quotient map onto $\mathbb Z/2\mathbb Z$ is surjective, and its kernel is the even subgroup. [L1, given, algebra]

2.1 By [L2], placing this exact sequence in consecutive degrees gives a chain complex that is exact at every nonzero term. Hence its homology vanishes in every degree, so it is acyclic. [L2, step 1.1] ∎
