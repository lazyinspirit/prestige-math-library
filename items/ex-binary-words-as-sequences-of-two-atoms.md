---
id: ex-binary-words-as-sequences-of-two-atoms
kind: example
title: "Binary words of length at most three from $\\operatorname{SEQ}(2\\mathcal{Z})$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-binary-words-have-generating-function-one-over-one-minus-two-x]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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

The class $\operatorname{SEQ}(2\mathcal{Z})$ gives binary words. Up to length
$3$ the words are

$$\epsilon,$$

$$0,\ 1,$$

$$00,\ 01,\ 10,\ 11,$$

$$000,\ 001,\ 010,\ 011,\ 100,\ 101,\ 110,\ 111.$$

So the initial coefficient sequence is $1,2,4,8$.

## Facts & Assumptions

**Given:** The binary-word generating function $\operatorname{OGF}(\mathcal{B}) = 1/(1-2x)$ ([[cor-binary-words-have-generating-function-one-over-one-minus-two-x]]).

## Verification

**Proof technique:** direct.

1.1 The displayed list has $1$ word of length $0$, $2$ of length $1$, $4$ of length $2$, and $8$ of length $3$. [given]

2.1 Expanding $1/(1-2x)$ as $1+2x+4x^2+8x^3+\cdots$ gives the same initial coefficients, so the explicit list matches the theorem. [step 1.1] ∎
