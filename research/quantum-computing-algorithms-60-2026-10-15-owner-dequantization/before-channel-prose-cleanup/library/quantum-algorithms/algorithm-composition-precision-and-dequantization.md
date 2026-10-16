---
page: algorithm-composition-precision-and-dequantization
title: Algorithm Composition, Precision Budgets, and Dequantization
status: draft
items:
  - def-qa-34-threshold-band-svd-target
  - thm-qa-34-best-frobenius-rank-k-approximation
  - thm-qa-34-product-state-error-bound
  - def-qa-34-end-to-end-error-contract
  - thm-qa-34-channel-hybrid-bound
  - thm-qa-34-tensor-error-bound
  - alg-qa-34-error-budget-allocation
  - def-qa-34-output-and-cost-types
  - def-qa-34-heralded-verification-contract
  - def-qa-34-l2-sample-query-access
  - thm-qa-34-classical-output-writing-lower-bound
  - alg-qa-34-modfkv-low-rank-description
  - alg-qa-34-rejection-sampler-linear-combination
  - lem-qa-34-modfkv-sampling-gram-bound
  - lem-qa-34-normalized-vector-distribution-tv-bound
  - prop-qa-34-sample-inner-product-estimator
  - thm-qa-34-adaptive-failure-union-bound
  - thm-qa-34-error-budget-allocation-correctness
  - thm-qa-34-linear-combination-sampler-correct-and-cost
  - lem-qa-34-exponential-gram-concentration
  - lem-qa-34-two-sketch-threshold-band-bound
  - thm-qa-34-modfkv-low-rank-approximation
  - thm-qa-34-tang-recommendation-sampler
  - rem-qa-34-dequantization-scope
examples: []
---

This page defines end-to-end channel and output contracts and proves the product-state and tensor-channel error bounds. The finite hybrid argument is written but escalated because its channel-norm supplier still records unresolved QC01–QC02 prerequisites. The page allocates precision and failure budgets and separates classical output, quantum-state output, input-access costs, and heralded success. The ModFKV approximation is proved from exponential Gram concentration and a deterministic threshold-band argument. Tang's recommendation sampler uses its exact ℓ2 sample/query model, a computable adaptive row-refinement rule, and an explicit accepted branch with a composed failure budget.
