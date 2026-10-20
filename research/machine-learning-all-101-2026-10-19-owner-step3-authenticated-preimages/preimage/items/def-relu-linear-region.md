---
id: def-relu-linear-region
kind: definition
title: "Connected activation-pattern regions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-relu-network]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, §2"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf"
      locator: "§2, definition of activation-pattern regions and zero-inactive convention."
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.2"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.2, ReLU activation patterns and affine cells."
---

## Definition

Consider a layered ReLU network with positive integer input dimension $n_0$ and positive integer hidden widths $n_1,\ldots,n_L$. For a binary pattern $s=(s_i^\ell)$, set $s_i^\ell=1$ exactly when the corresponding preactivation is strictly positive, and set $s_i^\ell=0$ when it is nonpositive, so a unit with zero output is inactive. Its activation-pattern cell is the set of inputs inducing that pattern. Once a pattern is fixed, every preactivation is affine in the input and the pattern constraints are affine half-space conditions; hence each cell is convex and connected when nonempty. A connected activation-pattern region is a nonempty activation-pattern cell with nonempty interior in $\mathbb R^{n_0}$. On each such region the hidden pattern is fixed and the network is affine. Zero preactivations are assigned to the inactive side, including a preactivation that vanishes identically on a cell; zero sets are not removed from the input space. Distinct full-dimensional patterns are counted separately even when they give the same affine formula.

## Definition references

[[def-relu-network|ReLU feedforward networks and complexity conventions]]

[Serra et al., §2: activation-pattern regions and zero-inactive convention](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf)

[Sullivan, §5.2: ReLU activation cells](https://mjt.cs.illinois.edu/dlt/index.html)
