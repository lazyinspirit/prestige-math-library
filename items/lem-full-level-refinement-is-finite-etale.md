---
id: lem-full-level-refinement-is-finite-etale
kind: lemma
title: Full-level refinement is finite étale
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-full-level-structures-form-a-finite-etale-cover
- lem-full-level-structure-rigidifies-elliptic-families
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, full-level modular curves; the finite refinement is constructed below.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is assumed by the finite-frame and rigidity suppliers.
---

## Statement

Assume AC. Let N≥3, let M be a positive multiple of N, and let B be a locally Noetherian `Z[1/M]`-scheme. Suppose Y_N/B is a locally Noetherian fine moduli scheme for elliptic curves with full level-N structure on locally Noetherian B-schemes, with universal family E_N. Then the full level-M functor is represented on locally Noetherian B-schemes by a finite étale surjective Y_M→Y_N, with its universal elliptic curve and frame. The transition forgets the extra level by multiplication `M/N` on M-torsion; for M=N it is the identity. For N|M|L these transition maps compose canonically. No compactification or Hecke correspondence is asserted.

## Facts & Assumptions

**Given:** AC, N|M, B, Y_N and its universal family as in the Statement.

[F1] Full level-M frames of a given elliptic curve over a locally Noetherian scheme form a finite étale scheme, functorially in base change. [[lem-full-level-structures-form-a-finite-etale-cover]]

[F2] A full level-N structure for N≥3 eliminates automorphisms over locally Noetherian bases. [[lem-full-level-structure-rigidifies-elliptic-families]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** clopen frame refinement and finite basis lifting.

1.1 Base change the universal E_N to Y_N and form its full level-M frame scheme by [F1]. For each of the two standard basis vectors impose the equality `[M/N]α_M(e_i)=α_N(e_i mod N)`. Both sides are sections of the finite étale group E_N[N], so their equality loci are open and closed. Their intersection Y_M is finite étale over Y_N. [F1, F3, given, construct, algebra]

2.1 At a geometric point, prime-power torsion is free of rank two. Every basis modulo N lifts to a basis modulo M: separately at each prime, lift the two columns modulo the larger prime power; an invertible determinant modulo the prime remains invertible, and the Chinese remainder theorem combines the finitely many prime-power choices. Thus every geometric fibre of Y_M is nonempty, so its finite étale map is surjective. Its fibres are the lifts of a basis and are acted on simply transitively by the kernel of `GL₂(Z/M)→GL₂(Z/N)`. If M=N, the only lift is the given frame, so the map is the identity. [F1, F3, step 1.1, given, algebra]

3.1 Pulling E_N and the universal M-frame back to Y_M gives a framed elliptic curve. Conversely, an M-framed curve over a locally Noetherian B-scheme gives an N-frame by multiplication M/N, hence by the fine property a unique map to Y_N; its M-frame then gives a unique lift to Y_M by step 1.1. These two procedures are inverse and functorial, and [F2] gives uniqueness of framed isomorphisms. For N|M|L the reductions satisfy `[L/N]=[M/N][L/M]`, so the representing transition maps compose by uniqueness. [F1, F2, F3, step 1.1, step 2.1, given, construct, algebra] ∎

## Source and authoring record

The result constructs only finite étale transitions on open fine modular curves. It does not construct compactifications, Hecke correspondences or cohomology transition maps.
