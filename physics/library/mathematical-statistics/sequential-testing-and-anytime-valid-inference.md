---
page: sequential-testing-and-anytime-valid-inference
title: Sequential Validity and Ville's Inequality
status: published
items:
  - def-nonnegative-test-supermartingale
  - thm-villes-inequality
  - thm-mixture-of-null-supermartingales
  - def-anytime-valid-p-value-process
  - thm-anytime-validity
  - def-confidence-sequence
  - thm-confidence-sequence-by-test-inversion
examples: []
---

## Objective

Develop discrete-time, null-uniform validity for optional monitoring from
nonnegative test supermartingales. Starting from the filtration,
supermartingale, and bounded optional-sampling definitions, prove Ville's
inequality by stopping at the first crossing truncated at a deterministic
horizon and taking the increasing-event limit. Prove that a fixed
product-measurable mixture of null test supermartingales remains a test
supermartingale. Convert a test supermartingale into an anytime-valid
p-value process and invert a parameter-indexed family into a confidence
sequence. Every guarantee is under each law in the stated null family.
The page makes no continuous-time, adaptive-allocation, or bandit claim.
