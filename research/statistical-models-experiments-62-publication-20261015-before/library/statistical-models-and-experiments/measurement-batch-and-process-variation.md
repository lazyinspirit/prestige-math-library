---
page: measurement-batch-and-process-variation
title: "Batch and measurement-process variation"
status: draft
items:
  - def-batch-and-measurement-process-variation
  - thm-nested-batch-repeatability-covariance-and-mean-variance
examples: []
---

This page defines fixed process-condition, nested batch/day, and repeat indices,
then distinguishes repeatability within stated short-term conditions,
reproducibility across named conditions, and stability over a declared time
interval. Under the finite-moment nested model with mutually independent batch
and repeat effects, it proves the shared-batch covariance and replicate-mean
variance formulas without Gaussianity. The batch-effect specification
depends on the model and inferential target: sampling from a named population
is one design-based interpretation, while a random-effects distribution may
also serve as a working model for selected batches that are not a probability
sample. That choice alone does not justify design-based extrapolation; if the
batches are the full target and no distributional model is intended, treat
their offsets as fixed. Crossed operator and day effects require a different
model. Operators named and held fixed by design are fixed conditions.
Generalizing over sampled operators
requires a separately specified operator effect, classified as fixed or random
from the target and sampling design; $\sigma_B^2$ describes only the nested
$j$ factor and does not identify a separate operator variance, even when $j$
labels a day–operator combination. Pooling calibration curves requires an
explicit common-curve or equivalence model. These identities do not establish
that a proposed model or calibration describes an actual measurement process.
