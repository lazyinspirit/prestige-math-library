---
id: lem-proper-torsion-base-change-under-choice
kind: lemma
title: Proper torsion base change under the axiom of choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-proper-torsion-base-change-reduces-to-projective-line-acyclicity
- lem-proper-torsion-degree-zero-exchange
- lem-injective-torsion-sheaves-on-projective-line-have-acyclic-closed-fibre
- lem-proper-curve-torsion-cohomology-finite-and-field-invariant
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Proper base change
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Section 59.91, proper torsion base-change scope; the local proof applies the separately reconstructed exact AC-scoped suppliers.
dependency_level: 13
proof_strategy: direct
axiom_use: AC is explicit and inherited from the four named suppliers.
---

## Statement

Assume the Axiom of Choice. Let f:X→S be proper with S Noetherian, let g:T→S be arbitrary, and form the Cartesian base-change square. For every torsion abelian étale sheaf F on X the canonical comparison `g^* R^q f_*F → R^q (f_T)_* h^*F` is an isomorphism for every q≥0. The derived comparison is also an isomorphism for bounded-below complexes with torsion cohomology. No Noetherian hypothesis on T and no invertibility hypothesis on torsion orders are imposed.

## Facts & Assumptions

**Given:** AC, the proper map, base change and torsion coefficient or complex in the Statement.

[F1] The conditional Noetherian Chow and projective-line reduction needs degree-zero exchange only for torsion sheaves, projective-line acyclicity for injective prime-coefficient sheaves, and proper-curve field invariance. [[lem-proper-torsion-base-change-reduces-to-projective-line-acyclicity]]

[F2] Degree-zero proper exchange for all torsion sheaves holds with arbitrary base change. [[lem-proper-torsion-degree-zero-exchange]]

[F3] The injective prime-coefficient projective-line closed-fibre acyclicity holds over every henselian local base. [[lem-injective-torsion-sheaves-on-projective-line-have-acyclic-closed-fibre]]

[F4] Proper-curve torsion cohomology is invariant under extensions of separably closed fields. [[lem-proper-curve-torsion-cohomology-finite-and-field-invariant]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** instantiate the actual conditional reduction.

1.1 The torsion degree-zero hypothesis of [F1] is [F2]. Its projective-line closed-fibre acyclicity hypothesis is [F3], and its proper-curve field-invariance hypothesis is [F4]. All three apply under the same explicit AC hypothesis [F5]. [F1, F2, F3, F4, F5, given]

2.1 Apply [F1] with those three supplied premises. Its conclusion is the canonical proper torsion comparison in every degree and the bounded-below torsion-complex comparison, including arbitrary base change. The empty-scheme and zero-coefficient cases are covered by the same statement. No unqualified theorem is inferred. [F1, F5, step 1.1, given, algebra] ∎

## Source and authoring record

This local AC-scoped corollary applies the bound supplier statements. The original unqualified proper-base-change item remains separate and held until its own choice-free prerequisites are supplied.
