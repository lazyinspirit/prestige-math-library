---
id: ex-rationals-are-borel-but-not-g-delta
kind: example
title: "The rationals are Borel and F-sigma but neither open nor closed nor G-delta"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-sigma-g-delta, cor-q-is-meager-and-not-g-delta, def-borel-sigma-algebra, lem-q-and-irrationals-dense-r]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Definition 1.4.16"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Example

The canonical copy $\mathbb Q_{\mathbb R}$ of the rationals in $\mathbb R$ is
$F_\sigma$ and Borel, but it is neither open nor closed nor $G_\delta$.

## Facts & Assumptions

**Given:** The canonical subset $\mathbb Q_{\mathbb R}\subseteq\mathbb R$.

[L1] The set $\mathbb Q_{\mathbb R}$ is $F_\sigma$ and is not $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]]).

[L2] Both $\mathbb Q_{\mathbb R}$ and its complement are dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

[L3] $F_\sigma$ means a countable union of closed sets ([[def-f-sigma-g-delta]]), and the Borel sigma-algebra contains every closed set and is closed under countable unions ([[def-borel-sigma-algebra]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L3], $\mathbb Q_{\mathbb R}$ is a countable union of closed Borel sets and is therefore Borel and $F_\sigma$. [L1, L3]

1.2 Density of the complement in [L2] prevents $\mathbb Q_{\mathbb R}$ from containing a nonempty open interval, so it is not open; density of $\mathbb Q_{\mathbb R}$ and its being a proper subset prevent it from being closed. [L2]

2.1 The final claim, that $\mathbb Q_{\mathbb R}$ is not $G_\delta$, is exactly the third conclusion of [L1]. [L1] ∎
