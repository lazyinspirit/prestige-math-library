---
id: fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence
kind: false-statement
title: "FALSE: the Catalan numbers satisfy a constant-coefficient linear recurrence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-catalan-generating-function-is-not-rational, thm-linear-recurrence-iff-rational-generating-function, thm-catalan-recurrence, def-catalan-generating-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Statement

**False claim:** the sequence $(C_n)_{n\ge0}$ of Catalan numbers satisfies a
linear recurrence with constant coefficients.

## Facts & Assumptions

**Given:** the Catalan numbers and their generating function.

[L1] A sequence over a field satisfies an eventual constant-coefficient linear recurrence exactly when its generating function is rational ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L2] The Catalan generating function is not rational ([[thm-the-catalan-generating-function-is-not-rational]]).

[L3] The Catalan numbers satisfy $C_{n+1}=\sum_{i=0}^{n}C_iC_{n-i}$ with $C_0=1$ ([[thm-catalan-recurrence]]).

## Refutation

**Proof technique:** direct.

1.1 If the false claim were true, [L1] would make the Catalan generating function rational. [L1, assume-contra]

2.1 That contradicts [L2]. [L2, step 1.1, discharge-contradiction]

3.1 The recurrence of [L3] does not rescue the false claim: it is a convolution recurrence, so the next term depends on products of earlier terms rather than on a fixed linear combination. [L3] ∎

## Remarks

- The tempting mistake is to see the word "recurrence" and forget to ask which kind. The Catalan sequence does have a recurrence, but not the rational-series kind.
