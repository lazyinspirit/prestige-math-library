---
page: discrete-sequential-test-validity-and-ville-examples
title: Discrete test supermartingales and Ville — Examples
status: published
requires:
  - discrete-sequential-test-validity-and-ville
items: []
examples:
  - ex-independent-uniform-repeated-peeking-inflates-global-null-error
  - cex-test-supermartingale-supremum-threshold-need-not-be-attained
---

Two examples separate time-uniform validity from repeated fixed-look testing.
Independent uniform p-values tested repeatedly at an unadjusted level have
global-null rejection probability $1-(1-\alpha)^K$, which exceeds $\alpha$
when $K\ge2$. A second construction shows that the supremum of a valid
nonnegative test supermartingale can equal the threshold even when no finite
time reaches it; Ville's probability bound remains valid although the
supremum event and first-crossing event need not have equal probabilities.
