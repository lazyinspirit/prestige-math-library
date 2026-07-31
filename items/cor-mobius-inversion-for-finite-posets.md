---
id: cor-mobius-inversion-for-finite-posets
kind: corollary
title: "Both forms of Möbius inversion hold on every finite poset"
status: published
origin: session
deps: [thm-mobius-inversion-for-lower-finite-posets, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Statement

If the ground set of a poset $P$ is finite, then $P$ is both lower-finite and upper-finite. Consequently both forms of [[thm-mobius-inversion-for-lower-finite-posets]] hold for functions from $P$ into any commutative ring.

## Facts & Assumptions

**Given:** A poset $P$ with finite ground set.

[L1] Every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[L2] Lower-finite and upper-finite Möbius inversion hold under their respective hypotheses ([[thm-mobius-inversion-for-lower-finite-posets]]).

## Proof

**Proof technique:** direct.

1.1 For each $y\in P$, the principal ideal $P_{\le y}$ is a subset of $P$, hence finite by [L1]; thus $P$ is lower-finite. [L1]

1.2 For each $x\in P$, the principal filter $P_{\ge x}$ is a subset of $P$, hence finite by [L1]; thus $P$ is upper-finite. [L1]

2.1 Applying the two separate parts of [L2] proves both inversion formulas on $P$. [step 1.1, step 1.2, L2] ∎
