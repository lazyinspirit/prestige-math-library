---
id: fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition
title: "The universal coefficient theorem does not always give a natural direct-sum decomposition"
kind: false-statement
status: draft
origin: pipeline
deps: ["thm-the-homology-universal-coefficient-sequence-splits-nonnaturally", "cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally"]
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

The assertion that the natural UCT short exact sequence has a natural direct-sum decomposition is false.

## Refutation

**Given:** the natural UCT exact sequence and its nonnatural splitting construction.

1.1 UCT supplies a natural short exact sequence, while a section can be constructed only after auxiliary choices. The cited counterexample uses a specific free complex, coefficient group $\mathbb Z/2$, and a chain automorphism acting trivially on the two outer UCT terms but nontrivially on every possible section. [given]

2.1 By [[cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally]], naturality for that automorphism would force $(1,t+1)=(1,t)$ in $(\mathbb Z/2)^2$, which is impossible. Therefore no alternative natural choice of section can exist in general, and the asserted natural direct-sum decomposition is false. [step 1.1, contradiction] ∎
