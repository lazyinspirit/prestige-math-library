---
id: thm-interval-hermitian-ldl-inertia-certifier-soundness
kind: theorem
title: The interval block LDL certifier returns the exact inertia on success
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [alg-interval-hermitian-ldl-inertia-certifier, lem-hermitian-block-ldl-inertia-additivity, lem-hermitian-two-by-two-inertia-sign-test, lem-complex-hermitian-inertia-congruence, thm-outward-rounded-operations-are-isotone-and-dag-sound]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

If [[alg-interval-hermitian-ldl-inertia-certifier]] returns `certified-inertia` with $(n_+,n_-,n_0)$, every Hermitian matrix in its input family has exactly that inertia. A `pivot-inconclusive` return does not imply that any family member is singular.

## Facts & Assumptions

**Given:** A nonempty Hermitian family with conjugate-symmetric interval enclosure, one fixed permutation and block plan, and a `certified-inertia` return.

[F1] Outward interval DAG operations enclose exact sums, products, reciprocals and Schur updates ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] Each nonsingular Hermitian pivot block and its Schur complement contribute additively to inertia ([[lem-hermitian-block-ldl-inertia-additivity]]).

[F3] Nonsingular congruence, including a permutation congruence, preserves complex Hermitian inertia ([[lem-complex-hermitian-inertia-congruence]]).

[F4] On success the algorithm's scalar and two-by-two sign tests certify the indicated nonzero pivot signs for every member of the current family enclosure ([[alg-interval-hermitian-ldl-inertia-certifier]]).

[F5] For a two-by-two Hermitian pivot, a negative determinant gives inertia $(1,1,0)$; a positive determinant and trace sign give respectively $(2,0,0)$ or $(0,2,0)$ ([[lem-hermitian-two-by-two-inertia-sign-test]]).

## Proof

1.1 Induct over the pivot blocks. Initially the active interval matrix encloses each permuted family member. If this holds before a block, [F1] makes the outward inverse and update enclose that member's exact pivot inverse and Schur complement; [F4] ensures the pivot is nonsingular throughout the family. Hence the enclosure invariant holds at the next block. By [F3] the initial permutation has not changed any inertia. [given, F1, F3, F4, induction]

2.1 A certified one-by-one pivot has the sign of its real interval. By [F5], each accepted two-by-two pivot has exactly its reported inertia. Applying [F2] successively to each pivot and its Schur complement proves that the sum returned at completion is the inertia of every original family member. If a test is unresolved the algorithm returns no inertia claim, and failure alone supplies no singularity conclusion. [F2, F4, F5, step 1.1, algebra] ∎

