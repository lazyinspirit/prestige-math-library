---
page: finite-group-permutation-inference
title: "Exact permutation tests and random-permutation Monte Carlo"
status: published
items:
  - def-measurable-finite-group-permutation-setup
  - def-measurable-finite-group-orbit-pvalues
  - alg-random-permutation-monte-carlo-pvalue
  - thm-finite-group-permutation-validity
  - thm-random-permutation-monte-carlo-validity
examples: []
---

This page treats permutation inference when a finite group acts measurably on
the data space and every null law is invariant under that action. The data
space need not be finite, and the action need not be free: group elements are
counted with multiplicity. The full-orbit inclusive upper-tail rank is
superuniform, while independent uniform randomization within its tied score
block gives an exactly uniform null p-value.

For Monte Carlo computation, the page distinguishes two designs. With
replacement, it draws transformations IID uniformly from the group; without
replacement, it selects a uniform subset of nonidentity transformations.
Both designs adjoin the observed identity and divide the inclusive count by
$B+1$. Their validity proofs are separate and retain ties. Assignment
randomization under a Fisher sharp null has a different probability law and is
treated only in the companion examples; no weak-null or non-invariance
validity is inferred.
