---
id: cor-punctured-rn-homotopy-equivalent-to-the-sphere
kind: corollary
title: "For $n\\ge1$, the punctured Euclidean space $\\mathbb{R}^n\\setminus\\{0\\}$ is homotopy equivalent to $S^{n-1}$"
status: published
origin: session
deps: [thm-punctured-rn-deformation-retracts-onto-the-sphere, thm-a-deformation-retract-is-a-homotopy-equivalence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

For every $n\ge1$, the punctured Euclidean space $\mathbb R^n\setminus\{0\}$ and the unit sphere $S^{n-1}$ have the same homotopy type.

## Facts & Assumptions

**Given:** A natural $n\ge1$.

[L1] The unit sphere is a deformation retract of $\mathbb R^n\setminus\{0\}$ ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

[L2] The inclusion of a deformation retract is a homotopy equivalence ([[thm-a-deformation-retract-is-a-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $S^{n-1}$ is a deformation retract of $\mathbb R^n\setminus\{0\}$. [L1]

2.1 By [L2], its inclusion is a homotopy equivalence, so the two spaces have the same homotopy type. [step 1.1, L2] ∎
