---
id: lem-finite-surjections-have-effective-etale-set-section-descent
kind: lemma
title: Étale set stalks and finite-surjection descent
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-etale-locally-standard-etale
- thm-etale-morphisms-open-and-quasi-finite
- thm-equivalent-elementary-forms-of-hensels-property
- lem-spectrum-compactness-open-cover-to-unit-ideal
- def-small-etale-site-of-a-scheme
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 09ZF
    url: https://stacks.math.columbia.edu/tag/09ZF
    locator: Source-backed local reconstruction; source parts and actual reading limits are recorded in native146-helper-carriers-v1/author-source-map.json. No external theorem is imported.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is explicit; it is used for the cited étale chart, openness and geometric-point arguments.
---

## Statement

Assume the Axiom of Choice. Let f:T'→T be a finite morphism and G a sheaf of sets on the small étale site of T'. At any geometric point x of T, the stalk `(f_*G)_x` is canonically the product of the stalks `G_y` over the finitely many geometric points y of the geometric fibre of f above x. If f is also surjective, every étale set sheaf F on T is the equalizer of the two maps from `f_* f^(-1)F` to the pushforward of its pullback to `T'×_T T'`. In particular sections descend by this actual pair equalizer.

## Facts & Assumptions

**Given:** AC, a finite morphism f, the specified geometric point and set sheaves in the Statement.

[F1] AC is assumed. [[def-axiom-of-choice]]

[F2] Under AC every étale morphism is locally standard étale, and standard étale charts are étale. [[thm-etale-locally-standard-etale]]

[F3] Étale morphisms are open under AC. [[thm-etale-morphisms-open-and-quasi-finite]]

[F4] For a henselian local ring, simple roots lift uniquely and idempotents of finite algebras lift uniquely from the closed fibre. [[thm-equivalent-elementary-forms-of-hensels-property]]

[F5] Under AC a principal open cover of a spectrum gives a finite unit-ideal equation. [[lem-spectrum-compactness-open-cover-to-unit-ideal]]

[F6] The small étale site and its set sheaves have their stated definitions. [[def-small-etale-site-of-a-scheme]]

## Proof

**Proof technique:** finite-presentation descent, strict henselian stalks and the set equalizer.

1.1 We first establish the required degree-zero set calculation. Let a qcqs scheme Z be an affine-transition filtered inverse limit of qcqs Z_i, and let G_i be a set sheaf on Z_i. The qc étale objects of finite presentation and their maps descend to a finite stage: on finite affine covers, [F2] gives standard étale charts, described by one monic polynomial, one localization and a finite inverse equation for its derivative. Their finitely many coefficients and equations descend. Finite affine overlaps and gluing isomorphisms are specified by finitely many algebra maps, principal localizations and equations, so these also descend after increasing the stage. The same argument descends a finite diagram of such objects and maps. [F1, F2, F6, given, construct, algebra]

2.1 A finite étale covering on that basis descends as a covering. Its finitely many open images cover by [F3]; on finite affine refinements [F5] turns this into finitely many unit-ideal equations, which descend after increasing the stage. Conversely the pullback of a stage covering is a covering. Every covering of a qc basis object admits a finite subcover: refine by the standard affine charts, use their open images and quasi-compactness. [F1, F2, F3, F5, step 1.1, given, construct, algebra]

3.1 On an object descended from a stage define a candidate set to be the filtered colimit of the later-stage G_i values. The sheaf condition for a finite cover is a finite product/equalizer diagram of sets, and filtered colimits commute with finite products and equalizers. By step 2.1 the candidate is already a sheaf on the qc étale basis and has the universal property of inverse-image sheafification. Thus sections and equalities of the pulled-back set sheaf on a qcqs object have finite-stage witnesses. This is a direct set calculation and does not infer it from abelian cohomology. [F1, F2, F3, F5, F6, step 2.1, given, construct, algebra]

4.1 Let S be the strict henselization of T at x. The étale-neighbourhood colimit and step 3.1 identify the stalk of f_*G with sections of the pulled-back sheaf on the finite S-scheme T'_S. A finite algebra over a strictly henselian local ring splits into finitely many local factors: [F4] lifts the idempotents of its finite closed-fibre algebra, and each local factor is henselian by applying the same finite-algebra criterion to its finite algebras. Its residue field is a finite purely inseparable extension of the separably closed residue field and hence is separably closed. For any set sheaf on the small étale site of such a strictly henselian local scheme, global sections equal the closed geometric stalk: each representative neighbourhood has a section by its standard étale chart [F2] and the simple-root lift [F4]; pulling representatives back along sections proves both surjectivity and injectivity. The finite disjoint union therefore gives the claimed product formula. [F1, F2, F4, F6, step 3.1, given, construct, algebra]

5.1 If f is surjective, the geometric fibre is a nonempty finite set J. On a geometric stalk the two arrows in the asserted diagram become the two coordinate maps `S^J ⇒ S^(J×J)`, where S is the stalk of F. Their equalizer is the diagonal copy of S because J is nonempty. Étale geometric stalks detect isomorphisms under AC: local lift and equality witnesses at every geometric point form étale covers, and the sheaf axiom glues them. Therefore the canonical map from F to the displayed equalizer is an isomorphism, proving descent of sections. [F1, F2, F3, F6, step 4.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locator documents the construction; no external theorem is imported. Completion and readiness are tracked in the run’s item record.
