---
page: confidence-sets-pivots-and-test-inversion
title: "Confidence Sets and Inversion"
status: published
items:
  - def-confidence-set-and-coverage
  - def-pivot
  - thm-pivot-inversion-exact-coverage
  - thm-test-inversion-coverage
examples: []
---

This page defines confidence-set procedures through measurable membership
events and repeated-sampling coverage. It then treats two general constructions:
inverting point-null acceptance regions and inverting a parameter-free pivot
over a calibrated measurable set. The coverage arguments are event identities,
so they do not require a topology or sigma-algebra on the parameter set.

Exact interval coverage requires exact probability calibration of the actual
acceptance interval. For discrete pivots, quantile endpoints can place atoms
inside the acceptance set and give conservative coverage. A randomized test
must include its auxiliary randomization in the observation before its
acceptance event can be inverted. The exact normal t interval applies the
Gaussian pivot and t-quantile suppliers from the preceding
Gaussian-decomposition page. Its carrier records their hypotheses and
restricts the experiment to the common full-measure set where the sample
standard deviation is positive.
