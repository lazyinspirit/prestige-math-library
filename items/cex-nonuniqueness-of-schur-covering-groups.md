---
id: cex-nonuniqueness-of-schur-covering-groups
kind: counterexample
title: "Nonuniqueness of Schur covers"
status: published
origin: pipeline
deps: [def-schur-covering-group-of-a-finite-group, thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square, def-axiom-of-choice, def-supplied-projective-resolution-datum]
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
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement refuted

Every finite group has a unique Schur covering group up to isomorphism.

## Counterexample

Assume the Axiom of Choice and supplied projective-resolution data for group
homology. The groups $D_8$ and $Q_8$ are nonisomorphic Schur covers of
$C_2\times C_2$.

**Given:** The stated choice and resolution hypotheses. Both $D_8$ and
$Q_8$ have central commutator subgroup of order two and quotient
$C_2\times C_2$.

1.1 The exterior-square calculation gives $M(C_2\times C_2)\cong C_2$, so both are Schur covers. [given]

2.1 $D_8$ has five involutions while $Q_8$ has one, hence they are not isomorphic. [step 1.1, algebra] ∎
