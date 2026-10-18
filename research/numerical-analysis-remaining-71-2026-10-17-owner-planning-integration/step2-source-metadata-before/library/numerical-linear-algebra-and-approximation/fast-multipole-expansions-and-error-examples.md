---
page: fast-multipole-expansions-and-error-examples
title: Fast multipole expansions and error — Examples
status: draft
items: []
examples:
  - ex-fmm-two-separated-charge-clusters
  - ex-fmm-near-far-potential-and-force-error
  - ex-fmm-clustered-points-require-depth-sensitive-work
---

[[ex-fmm-two-separated-charge-clusters]] checks an order-one M2L polynomial and both certified 2D tails for two separated charges. [[ex-fmm-near-far-potential-and-force-error]] adds a same-leaf near charge and verifies that direct near evaluation contributes no truncation error. [[ex-fmm-clustered-points-require-depth-sensitive-work]] fixes two points and increases their separation depth to show why tree size and traversal counts must appear in the work hypotheses.
