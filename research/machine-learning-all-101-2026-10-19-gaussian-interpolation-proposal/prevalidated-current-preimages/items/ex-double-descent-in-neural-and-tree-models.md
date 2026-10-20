---
id: ex-double-descent-in-neural-and-tree-models
kind: example
title: Reported double-descent experiments for neural networks and tree ensembles
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Belkin, Hsu, Ma, and Mandal, Reconciling modern machine learning practice and the bias-variance trade-off"
      url: "https://arxiv.org/pdf/1812.11118"
      locator: "Figures 2, 4, and 5; Sections 2 and 3; Appendix C."
---

## Example

Belkin, Hsu, Ma, and Mandal report empirical double-descent curves for random
Fourier features on a $10^4$-example, ten-class MNIST subset, with interpolation
at $10^4$ features; for a fully connected two-layer neural network on
$4\cdot10^3$ examples of dimension $784$ and ten classes, with the observed
interpolation threshold near $nK$ parameters; and for random forests on a
$10^4$-example MNIST subset, with model complexity indexed jointly by maximum
tree leaves and number of trees. These are finite experimental observations;
they do not assert a universal risk curve or a theorem about arbitrary neural
networks, trees, or ensembles.

## Example references

[Belkin, Hsu, Ma, and Mandal, Figures 2, 4, and 5](https://arxiv.org/pdf/1812.11118)

## Facts & Assumptions

**Given:** The reported empirical plots and experiment descriptions in the
source cited in Example references.

[F1] Figure 2 describes the random-Fourier-feature MNIST experiment and its
interpolation threshold; Figure 4 describes the two-layer neural-network
experiment; Figure 5 describes the random-forest experiment. The paper labels
these as empirical evidence, not a universal theorem.

## Verification

1.1 The Figure 2 description gives $n=10^4$, ten classes, and the threshold
$N=n=10^4$; these are the random-feature quantities stated in the Example.
[given, F1]

1.2 The Figure 4 description gives $n=4\cdot10^3$, input dimension $784$,
ten outputs, and threshold observed at $nK$ parameters. The Figure 5
description gives $n=10^4$ and indexes forest complexity by maximum leaves and
tree count. [given, F1]

2.1 The source reports experiments for those specified datasets and model
families, so the Example is an empirical report with those qualifications; it
does not claim a theorem for models beyond the experiments. [given, F1] ∎
