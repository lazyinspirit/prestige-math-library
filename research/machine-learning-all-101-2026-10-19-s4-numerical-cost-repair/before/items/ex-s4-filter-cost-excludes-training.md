---
id: ex-s4-filter-cost-excludes-training
kind: example
title: The filter-operation bound is not a training-cost bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [thm-s4-convolution-filter-complexity, alg-s4-state-space-recurrence-and-convolution]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, §3.3 and Appendix C.3"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Example

For fixed DPLR parameters and a supplied transformed output vector, the exact S4 filter bound counts evaluation of one length-$L$ kernel. The filter procedure does not compute parameter gradients or optimizer updates, so the count is not a bound for a complete training step. The exact arithmetic bound yields no conclusion about numerical conditioning, numerical accuracy, or long-context accuracy; the source-reported approximate-cost clause remains unresolved because its accuracy norm and conditioning hypotheses are not fixed.

## Example references

[[thm-s4-convolution-filter-complexity]]

[[alg-s4-state-space-recurrence-and-convolution]]

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” §3.3 and Appendix C.3](https://arxiv.org/pdf/2111.00396)

## Facts & Assumptions

**Given:** Fixed DPLR parameters, a supplied transformed output vector, and the exact and numerical cost status in the Example.

[F1] [[thm-s4-convolution-filter-complexity]]: the exact operation and working-space bounds count evaluation of the filter from supplied $\widetilde C_M$; the numerical accuracy clause remains unresolved.

[F2] [[alg-s4-state-space-recurrence-and-convolution]]: the filter procedure takes DPLR parameters and $\widetilde C_M$ and returns the first $L$ kernel coefficients after root evaluation and an inverse transform.

## Proof

1.1 The procedure in [F2] receives parameters and returns a kernel. By [F1], the proved exact operation and space bounds count that filter-evaluation procedure with $\widetilde C_M$ supplied. [given, F1, F2]

2.1 The procedure's input/output specification in [F2] contains no parameter-gradient computation or optimizer update. Therefore its operation count does not count a larger computation that additionally performs either operation, including a complete training step. [F2, step 1.1, algebra]

3.1 The exact bound counts arithmetic operations and working space only. It states no error norm, conditioning margin, or accuracy conclusion, and [F1] identifies the numerical-cost clause as unresolved. Thus neither numerical accuracy nor long-context accuracy follows from the proved exact bound. [F1, step 1.1, algebra] ∎
