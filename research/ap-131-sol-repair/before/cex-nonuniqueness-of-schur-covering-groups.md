---
id: cex-nonuniqueness-of-schur-covering-groups
kind: counterexample
title: "Nonuniqueness of Schur covers"
status: published
origin: pipeline
deps: [def-schur-covering-group-of-a-finite-group, thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Y. Bazlov and A. Berenstein, Cocycle twists and extensions of braided doubles, Sections 2.2–2.3"
      url: https://pages.uoregon.edu/arkadiy/cocycle.pdf
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized statement/refutation alignment repair; complete target and direct supplier texts read; targeted precheck/rendercheck. Not an independent judgment or whole-closure certification."
    delegated_by: owner
---

## Statement refuted

Every finite group has a unique Schur covering group up to isomorphism.

## Counterexample

The groups $D_8$ and $Q_8$ are nonisomorphic Schur covers of $C_2\times C_2$.

**Given:** Both $D_8$ and $Q_8$ have central commutator subgroup of order two and quotient $C_2\times C_2$.

1.1 The exterior-square calculation gives $M(C_2\times C_2)\cong C_2$, so both are Schur covers. [given]

2.1 $D_8$ has five involutions while $Q_8$ has one, hence they are not isomorphic. [step 1.1, algebra] ∎
