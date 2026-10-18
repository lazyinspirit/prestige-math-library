---
id: lem-it-nearest-center-quantizer-is-borel-and-finite-distortion
kind: lemma
title: The finite nearest-center quantizer is Borel with finite distortion
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-squared-error-quantizer
justified_by: []
aliases: []
axiom_use: No choice principle is used.
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 115–119, nearest-neighbor cells and their distortion.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.2.1, printed pp. 65–66, nearest representation points for squared-error distortion.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §III, printed pp. 2341–2342, encoder cells, codebook and mean-squared distortion.
---

## Statement

Let $X\subseteq\mathbb R^d$ be Borel, let $\mu$ be a Borel probability measure on $X$ with finite second moment, and let $c_1,\ldots,c_k\in\mathbb R^d$ satisfy the hypotheses of [[def-it-finite-squared-error-quantizer]]. The least-index nearest-center rule defines a Borel quantizer on $X$, and its distortion is finite. Coincident centers and empty cells are allowed.

## Facts & Assumptions

**Given:** Integers $d,k\ge1$, a Borel subset $X\subseteq\mathbb R^d$, a Borel probability measure $\mu$ on $X$ with finite second moment, and finite centers $c_1,\ldots,c_k$.

[F1] [[def-it-finite-squared-error-quantizer]]: the nearest-center cell $C_i(c)$ is the Borel domain $X$ intersected with strict inequalities against lower indices and non-strict inequalities against higher indices; distortion is the integral of squared Euclidean error.

## Proof

1.1 For fixed $i,j$, the difference $\|x-c_i\|_2^2-\|x-c_j\|_2^2$ is a continuous polynomial in the coordinates of $x$. Therefore its strict-negative set is open and its nonpositive set is closed; the finite intersections defining each $C_i(c)$ in [F1] are Borel. [given, F1, algebra]

2.1 The finite list of distances has a minimum at each $x\in X$, and the least minimizing index is unique. The tie inequalities in [F1] therefore make the cells a disjoint partition of $X$; the inverse image of each singleton index is relatively Borel by step 1.1, so the finite-valued index map is Borel. [given, F1, step 1.1, construct]

3.1 For each coordinate, $(x_\ell-c_{i,\ell})^2\le2x_\ell^2+2c_{i,\ell}^2$, since $-2x_\ell c_{i,\ell}\le x_\ell^2+c_{i,\ell}^2$. Summing coordinates and integrating over the partition gives $D_\mu(Q_c;c)\le2\int\|x\|_2^2\,d\mu(x)+2\max_{1\le i\le k}\|c_i\|_2^2<\infty$, so the distortion is well-defined and finite. [given, step 2.1, algebra] ∎
