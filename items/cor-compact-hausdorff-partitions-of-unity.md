---
id: cor-compact-hausdorff-partitions-of-unity
kind: corollary
title: "Under choice and dependent choice, every open cover of a compact Hausdorff space admits a finite subordinate partition of unity"
status: published
origin: session
deps: [prop-compact-spaces-are-paracompact, thm-subordinate-partitions-of-unity-exist, lem-locally-finite-sums-are-continuous, lem-locally-finite-unions-and-closures, def-compact-space, def-hausdorff-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a compact Hausdorff space admits a finite partition of unity subordinate to
that cover.

## Facts & Assumptions

**Given:** Choice, dependent choice, a compact Hausdorff space $X$, and an open cover $\mathcal U$.

[L1] A compact space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[L2] A paracompact Hausdorff space has a locally finite partition subordinate to each of its open covers ([[thm-subordinate-partitions-of-unity-exist]]).

[L3] A locally finite sum of continuous nonnegative functions is continuous ([[lem-locally-finite-sums-are-continuous]]).

[L4] Closure commutes with a locally finite union ([[lem-locally-finite-unions-and-closures]]).

[F1] Compactness gives a finite subcover ([[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Compactness gives a finite subcover $\mathcal U_0=\{U_1,\ldots,U_n\}$ of $\mathcal U$. [F1, choose]

2.1 By [L1] and [L2], apply the partition theorem to the finite cover $\mathcal U_0$ and take a locally finite partition $\{\varphi_s\}_{s\in S}$ subordinate to it. [L1, L2, step 1.1, choose]

3.1 Assign each $\varphi_s$ to the first $U_j$ containing its support, and set $h_j$ equal to the corresponding sum. By [L3] the $h_j$ are continuous; by [L4] their supports are contained in $U_j$; and $h_1+\cdots+h_n=1$. [L3, L4, step 2.1, construct]

4.1 Discarding the zero $h_j$ leaves a finite subordinate partition of unity. [step 3.1] ∎
