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
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - state-preparation-isometry-synthesis-and-limits
  - channels-kraus-choi-and-stinespring-representations
  - trace-distance-fidelity-and-information-limits
  - circuit-syntax-denotational-semantics-and-measurement
  - finite-probability-spaces-and-random-variables
  - approximate-universality-and-solovay-kitaev
  - measurements-povms-and-instruments
---

This page defines end-to-end channel and output contracts and proves product-state and tensor-channel error bounds, including final-measurement variation for arbitrary reference inputs. The finite hybrid argument proves the composed-channel bound using the current channel-norm interface. The page allocates precision and failure budgets, composes declared cost coordinates, and separates classical output, quantum-state output, input-access costs, and heralded success. Its vector sampling interface uses squared moduli for complex vectors; the ModFKV and Tang matrix algorithms specialize to real matrices. The ModFKV approximation is proved from exponential Gram concentration and a deterministic threshold-band argument. Tang's recommendation sampler uses a computable adaptive row-refinement rule, an explicit finite accepted branch, and a countable probability model for its almost-sure termination claim.
