---
page: resampling-algorithms-and-sampling-units
title: "Resampling schemes and the sampling-unit contract"
status: draft
items:
  - def-resampling-sampling-unit-contract
  - def-empirical-measure
  - lem-uniform-law-on-finite-subset-families
  - lem-empirical-measure-is-a-probability-measure
  - alg-delete-d-jackknife-replicates
  - alg-uniform-subsampling-without-replacement
  - alg-n-out-of-n-bootstrap-from-empirical-law
  - thm-bootstrap-draws-are-conditionally-iid-empirical-law
examples: []
---

## Objective

This page defines the empirical law, size-$n$ bootstrap, delete-$d$ replicates, subsampling without replacement, and the sampling-unit contract. It proves only the finite probability facts that make these procedures well-defined, including that the empirical law is a probability measure and the bootstrap draws are conditionally IID from it. No procedure here is asserted valid for a particular estimand or sampling design. Variance scaling for jackknife replicates is a separate statistic with an explicit target.

## Development

Start with the resampling unit, which is the indivisible random or design unit selected together. The empirical measure [[def-empirical-measure]] assigns mass $1/n$ to each observed index; [[lem-empirical-measure-is-a-probability-measure]] proves it is a probability measure, including when observed values repeat. [[alg-n-out-of-n-bootstrap-from-empirical-law]] then samples indices independently with replacement, and [[thm-bootstrap-draws-are-conditionally-iid-empirical-law]] proves the exact conditional law.

For any finite index set, [[lem-uniform-law-on-finite-subset-families]] proves the equal-weight subset law, including the endpoints. The delete-$d$ algorithm [[alg-delete-d-jackknife-replicates]] returns all complement-statistic replicates and their uniform average without a variance multiplier. [[alg-uniform-subsampling-without-replacement]] selects a uniformly chosen $b$-subset and applies the declared statistic at that subsample size.

The conditional bootstrap law is not a Bayesian posterior. A design-randomization law is the actual law over assignments declared by the experiment; its relationship to the bootstrap law is illustrated on the examples page. Any exact or asymptotic validity claim needs a separate result matched to the data-generating or assignment design.
