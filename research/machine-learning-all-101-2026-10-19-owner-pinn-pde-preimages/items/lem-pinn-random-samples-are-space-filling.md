---
id: lem-pinn-random-samples-are-space-filling
kind: lemma
title: "Lower cell-mass bounds give a random fill-distance estimate"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measure
  - def-probability-measure
  - def-independent-random-elements
  - thm-finite-and-countable-subadditivity-of-measures
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix B, Lemma B.3 and its proof"
---

## Statement

Let $d\ge1$, $s>0$, and let $X\subset\mathbb R^d$ carry a probability measure $\mu$. Fix an integer $m\ge1$ and $c>0$, and put $\varepsilon=(c\sqrt m)^{-1/s}$. Suppose there is a finite measurable partition $X_1,\ldots,X_K$ of $X$ at this particular scale such that each cell lies in a cube of side $\varepsilon$ and $\mu(X_j)\ge c\varepsilon^s$. Let $Y_1,\ldots,Y_m$ be independent random points each with law $\mu$. Then with probability at least
$$1-\sqrt m\left(1-\frac1{\sqrt m}\right)^m$$
every point of $X$ lies within Euclidean distance $\sqrt d\,c^{-1/s}m^{-1/(2s)}$ of at least one sample point. For an interior space of dimension $d$, use $s=d$; for a boundary space of Hausdorff dimension $d-1>0$, use $s=d-1$ and its own cell-mass constant. If $d=1$ and every boundary point is available deterministically, the boundary fill distance is zero and no random boundary sample is needed.

## Statement references
[[def-probability-measure|probability measure]]

[[def-independent-random-elements|independent random elements]]

[Shin et al., Appendix B, Lemma B.3: probabilistic space-filling estimate](https://arxiv.org/pdf/2004.01806)

[Shin et al., Appendix B, proof of Lemma B.3](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The finite partition at the selected scale, its cell-mass lower bound, and $m$ independent samples with common law $\mu$.

[F1] A probability measure is finitely subadditive, so the probability of a finite union of missed-cell events is at most the sum of their probabilities ([[def-measure]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F2] Independent random elements with common law $\mu$ have product law on each finite tuple; hence the probability that all $m$ samples miss a cell of measure $p_j$ is $(1-p_j)^m$ ([[def-independent-random-elements]]).

[F3] Countable additivity, applied to the finite disjoint partition followed by empty sets, makes the cell measures sum to the measure of the whole space ([[def-measure]]).

## Proof

**Proof strategy:** coupon-collector union bound.

1.1 The cell measures sum to one by [F3], and each is at least $c\varepsilon^s=1/\sqrt m$. Therefore the number of cells is at most $\sqrt m$. [given, F3, algebra]

1.2 A fixed cell of mass $p_j\ge c\varepsilon^d=1/\sqrt m$ is missed by all $m$ independent samples with probability $(1-p_j)^m\le(1-1/\sqrt m)^m$ by [F2]. By [F1], the probability that at least one cell is missed is at most $\sqrt m(1-1/\sqrt m)^m$. [given, F1, F2, algebra]

2.1 On the complementary event, every cell contains a sample. Since each cell lies in a cube of side $\varepsilon$, any point of the cell is within the cube's Euclidean diameter $\sqrt d\varepsilon$ of a sample in that same cell. Substituting $\varepsilon=(c\sqrt m)^{-1/s}$ gives the stated fill radius and probability. [step 1.1, step 1.2, algebra] ∎

