---
page: linear-multistep-methods-and-dahlquist-equivalence
title: "Linear multistep methods and Dahlquist equivalence"
status: draft
items:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-variable-step-adams-lagrange-weights
  - lem-linear-multistep-order-conditions-from-taylor
  - lem-companion-powers-bounded-under-root-condition
  - lem-variable-step-bdf2-interpolation-and-local-defect
  - alg-adams-pece-one-correction
  - thm-dahlquist-equivalence-for-linear-multistep-methods
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - lem-variable-step-bdf2-increment-ratio-recurrence
  - thm-variable-step-bdf2-order-two-under-ratio-bound
examples: []
---

This page defines constant-step linear multistep formulas, their characteristic polynomials, local residual, order, consistency, and the root condition. It proves the repeated-root companion-power bound and the full Dahlquist equivalence, including the separate roles of consistency and zero-stability. It also derives variable-step BDF2 from quadratic interpolation and proves a second-order convergence result under explicit upper and lower adjacent-ratio bounds, accurate starting values, a Lipschitz tube, and a unique selected implicit branch. Variable-step Adams weights are defined from interpolation at the actual nodes, and PECE is specified as a finite predictor-evaluate-correct-evaluate procedure. The PECE procedure carries no inherited convergence or stability assertion.
