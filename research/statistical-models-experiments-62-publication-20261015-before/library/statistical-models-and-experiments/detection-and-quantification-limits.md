---
page: detection-and-quantification-limits
title: Detection and quantification limits
status: draft
items:
  - def-critical-detection-and-quantification-levels
  - lem-standard-normal-cdf-quantiles-and-symmetry
  - lem-normal-location-scale-mean-and-variance
  - thm-known-normal-blank-detection-and-quantification-limits
examples: []
---

## Objective

This page separates the blank decision threshold $L_C$, the concentration
$L_D$ meeting a specified false-negative target, and the concentration $L_Q$
meeting a declared precision criterion. The exact normal formulas are proved
for the known-blank, equal-variance model, with the normal quantile and
location-scale moments established locally.

## Scope and limitations

The formulas depend on the response law and calibration convention. An
estimated blank changes the variance used for the calculation; concentration-
dependent variance can change or eliminate a finite detection or
quantification limit. The page makes no universal claim for estimated-blank,
heteroscedastic, discrete, or empirically unvalidated procedures. A report
that a value lies below a limit is a censored observation and requires its
measurement likelihood.
