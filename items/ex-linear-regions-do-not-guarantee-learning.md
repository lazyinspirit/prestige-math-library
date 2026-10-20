---
id: ex-linear-regions-do-not-guarantee-learning
kind: example
title: "Many linear regions give no training or generalization guarantee"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-relu-network, lem-hyperplane-arrangement-region-count, thm-relu-linear-region-upper-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, §1 and Theorem 1"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf"
      locator: "§1, region count as an expressivity proxy; Theorem 1, affine arrangement count."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Example

Choose a one-hidden-layer ReLU network with input dimension $2$, hidden width $10$, and hidden preactivation hyperplanes in general position. Its hidden activation pattern has $56$ full-dimensional regions. If every output weight and the output bias are set to zero, the represented function is identically zero; on the regression distribution with $X$ uniform on $[0,1]^2$ and target $Y=1$, its squared prediction risk is exactly $1$.

## Example references

[Serra et al., §1 and Theorem 1: region count as an expressivity proxy](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The one-hidden-layer network, the uniform input distribution, and the constant target in the example.

[F1] Ten hyperplanes in general position in dimension $2$ induce $\sum_{j=0}^2\binom{10}{j}$ full-dimensional regions ([[lem-hyperplane-arrangement-region-count]]).

[F2] The network output is an affine unit applied to input coordinates and hidden-unit values ([[def-relu-network]]).

## Verification

1.1 By [F1], the activation cells number $\binom{10}{0}+\binom{10}{1}+\binom{10}{2}=1+10+45=56$. [given, F1, algebra]

2.1 Set all coefficients into the affine output unit and its bias to zero. By [F2], the prediction is then $0$ at every input. Since $Y=1$ surely, $(0-Y)^2=1$ surely, so the expected squared risk is $1$ despite the $56$ activation cells. [given, F2, algebra] ∎
