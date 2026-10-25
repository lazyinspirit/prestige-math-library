---
page: subgaussian-mixture-confidence-sequences-examples
title: Sub-Gaussian mixture confidence sequences — Examples
status: published
items: []
examples:
  - cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence
  - ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence
---

## Examples

Independent Gaussian increments satisfy the conditional mgf bound, including
when the supplied proxy is larger than their variance. By contrast, repeating
one Rademacher draw at every time leaves each marginal centered and
sub-Gaussian but makes the running mean constant. The displayed interval
radius tends to zero, so the resulting intervals eventually exclude the
true mean on every outcome.
