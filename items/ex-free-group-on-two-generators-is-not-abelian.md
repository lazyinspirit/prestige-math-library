---
id: ex-free-group-on-two-generators-is-not-abelian
kind: example
title: "A free group whose basis contains two distinct elements is not abelian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-normal-form-for-the-word-quotient-model, thm-word-quotient-model-is-free, thm-free-groups-unique-up-to-unique-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
pipeline_run: null
---

## Example

If a free basis contains distinct elements $x$ and $y$, then the free group is
not abelian.

## Facts & Assumptions

**Given:** A set $X$ with distinct elements $x,y\in X$, and a free group on $X$.

[L1] Every class in $W(X)/{\sim}$ contains exactly one reduced word ([[thm-normal-form-for-the-word-quotient-model]]).

[L2] Free groups on the same set are uniquely isomorphic compatibly with their generators ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

## Verification

**Proof technique:** direct.

1.1 The words $xy$ and $yx$ are reduced, and they are literally different because $x\neq y$. [L1, given]

2.1 Uniqueness in [L1] makes their word classes different, so $[x][y]\neq[y][x]$ in the word-quotient free group. [L1, step 1.1]

3.1 By [L2], every free group on $X$ is isomorphic to that model by an isomorphism fixing the generators, so the two chosen basis elements do not commute and the group is not abelian. [L2, step 2.1] ∎

