---
id: thm-the-kunneth-sequence-splits-nonnaturally
title: "The Kunneth sequence splits nonnaturally"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. For free abelian complexes with finite diagonals,
the Kunneth short exact sequence splits after choices, but no natural splitting
is claimed.

## Proof

**Given:** free abelian complexes satisfying the Kunneth hypotheses.

1.1 The Kunneth theorem for free abelian complexes in the cited source states that the natural short exact sequence is noncanonically split. Its proof chooses lifts in the free cycle-boundary presentations; it does not require the generally false assertion that each boundary subgroup is a direct summand of its chain group. [given]

2.1 Choosing those lifts gives a section of the Kunneth quotient, while the source theorem makes no natural choice of them. Thus a splitting exists, but no natural splitting is claimed. [step 1.1, construct] ∎
