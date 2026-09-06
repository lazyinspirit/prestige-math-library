---
id: cex-nonuniqueness-of-schur-covering-groups
kind: counterexample
title: "Nonuniqueness of Schur covers"
status: published
origin: pipeline
deps: [def-schur-covering-group-of-a-finite-group, thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

D8 and Q8 are nonisomorphic Schur covers of C2×C2.

## Counterexample

**Given:** Both $D_8$ and $Q_8$ have central commutator subgroup of order two and quotient $C_2\times C_2$.

1.1 The exterior-square calculation gives $M(C_2\times C_2)\cong C_2$, so both are Schur covers. [given]

2.1 $D_8$ has five involutions while $Q_8$ has one, hence they are not isomorphic. [step 1.1, algebra] ∎
