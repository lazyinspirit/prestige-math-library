---
id: ex-compositions-of-four-from-sequences
kind: example
title: "The compositions of $4$ from $\\operatorname{SEQ}_{\\ge 1}(\\operatorname{SEQ}_{\\ge 1}(\\mathcal{Z}))$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-compositions-have-generating-function-x-over-one-minus-two-x, cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The eight compositions of $4$ are

$$4,$$

$$3+1,\ 1+3,\ 2+2,$$

$$2+1+1,\ 1+2+1,\ 1+1+2,$$

$$1+1+1+1.$$

They split by number of parts as $1,3,3,1$.

## Facts & Assumptions

**Given:** Compositions are nonempty sequences of positive integers ([[cor-compositions-have-generating-function-x-over-one-minus-two-x]]).

[L1] The number of compositions of $n$ into exactly $k$ positive parts is $\binom{n-1}{k-1}$ ([[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]]).

## Verification

**Proof technique:** direct.

1.1 The displayed list contains every ordered positive-part sum of $4$: one with $1$ part, three with $2$ parts, three with $3$ parts, and one with $4$ parts. [given]

2.1 The part-counts match [L1]: $\binom{3}{0}=1$, $\binom{3}{1}=3$, $\binom{3}{2}=3$, and $\binom{3}{3}=1$. [step 1.1, L1, algebra] ∎
