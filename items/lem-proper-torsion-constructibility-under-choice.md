---
id: lem-proper-torsion-constructibility-under-choice
kind: lemma
title: Proper torsion constructibility under the axiom of choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-proper-torsion-relative-constructibility-reduction
- lem-proper-torsion-base-change-under-choice
- lem-generic-constructibility-for-smooth-proper-curve-torsion-cohomology
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: SGA 4, Exposé XIV, Section 1
    url: https://grothendiecksga.com/read/sga4/en/XIV-1.html
    locator: Section 1 scope; the proof applies the separately reconstructed exact AC-scoped suppliers.
dependency_level: 16
proof_strategy: direct
axiom_use: AC is explicit and inherited from the named suppliers.
---

## Statement

Assume the Axiom of Choice. Let f:X→S be a proper morphism of Noetherian schemes and let F be a finite constructible étale Z/n-module sheaf for n≥1. Then each higher direct image R^q f_*F is finite constructible for q≥0.

## Facts & Assumptions

**Given:** AC, f, n and the finite constructible sheaf F in the Statement.

[F1] The conditional proper relative-constructibility reduction requires canonical proper torsion exchange and generic constructibility for prime constants on smooth proper relative curves. [[lem-proper-torsion-relative-constructibility-reduction]]

[F2] Canonical proper torsion exchange holds under AC for every proper Noetherian map and arbitrary base change. [[lem-proper-torsion-base-change-under-choice]]

[F3] The stated generic curve constructibility holds under AC. [[lem-generic-constructibility-for-smooth-proper-curve-torsion-cohomology]]

[F4] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** instantiate the actual conditional reduction.

1.1 Both geometric hypotheses in [F1] hold: proper torsion exchange by [F2], and the generic prime-coefficient curve result by [F3], at the same explicit AC scope [F4]. [F1, F2, F3, F4, given]

2.1 Apply [F1] to f and F with these supplied premises. This gives finite constructibility of every R^q f_*F. The zero sheaf, n=1 and empty schemes are included by the reduction. This does not assert the unqualified original proper-base-change item. [F1, F4, step 1.1, given, algebra] ∎

## Source and authoring record

This local AC-scoped corollary applies the separately bound supplier statements. No unqualified theorem or independent review is asserted.
