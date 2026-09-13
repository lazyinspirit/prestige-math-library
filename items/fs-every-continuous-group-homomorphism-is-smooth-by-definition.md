---
id: fs-every-continuous-group-homomorphism-is-smooth-by-definition
kind: false-statement
title: Every continuous group homomorphism is smooth by definition
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-group-homomorphism-isomorphism-and-automorphism]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I, discussion following Proposition 1.84
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Section 2.1, printed page 21
---

## Statement refuted

Every continuous group homomorphism between Lie groups is smooth **by
definition**.

## Facts & Assumptions

**Given:** The library definition of a Lie-group homomorphism.

[F1] A Lie-group homomorphism is required to be both a group homomorphism and a
smooth map. [[def-lie-group-homomorphism-isomorphism-and-automorphism]].

## Refutation

**Proof technique:** direct comparison of hypotheses.

1.1 By [F1], smoothness is an explicit defining hypothesis. Continuity alone is not the same syntactic condition and the definition contains no implication from continuity to smoothness. [F1]

2.1 The automatic-smoothness assertion for continuous homomorphisms is a substantive theorem requiring proof; it cannot be obtained merely by unpacking [F1]. Therefore the qualification “by definition” is false even though the separate theorem is true. [F1, step 1.1]

3.1 This is a claim about logical provenance, so dimensions zero and one do not alter it. Lie groups are nonempty; no metric, degeneracy, interval, endpoint, choice, example witness, or biconditional occurs. [F1, step 1.1, step 2.1] ∎
