# Step 3a reader report — batch 13

Run: hopf-hecke-unfinished-15-2026-10-15

## Scope and opened inventory

I checked the batch 13 manifest, coverage record, cross-batch dependency record, author notes, and proof contracts as evidence. The run status reported the run active, with Step 3a read at 0/15 results and no task running. The assigned carriers were already modified or newly added in the shared worktree before this review; I made no changes to them.

Assigned pages opened:

- A page: library/hopf-hecke-algebras/cyclotomic-hecke-quotients-and-ariki-koike-pbw.md
- B page: library/hopf-hecke-algebras/cyclotomic-hecke-quotients-and-ariki-koike-pbw-examples.md

Assigned items opened in dependency order:

- lem-hh-rank-one-cyclotomic-quotient-monic-basis
- ex-hh-ariki-koike-level-one-is-finite-type-a
- ex-hh-ariki-koike-rank-two-level-two-pbw
- ex-hh-ariki-koike-rank-one-level-two-quotient
- ex-hh-ariki-koike-colliding-content-specialization

For the assigned item proofs and A-page summary, I opened the multiplicative cyclotomic definition; the cyclotomic Jucys–Murphy, straightening, multipartition/content, generic seminormal, colored RSK, and Ariki–Koike basis results; the generic type-A Hecke definition and standard-basis theorem; and the current-run batch 12 finite type-A basis lemma. I also opened the ring, free-presentation, and base-change results used at these interfaces; the RSK theorem and its insertion, recording, reverse-deletion, and inverse suppliers; the relevant batch 12 affine presentation, divided-difference, operator, and affine PBW items; and the five pages named in the two assigned pages’ requires fields.

## Mathematical review

- The rank-one lemma correctly identifies the field specialization with the Laurent quotient by the monic cyclotomic polynomial. Its unit constant term supplies a polynomial inverse for X, monic division gives the stated basis, and translation at a repeated unit root gives a nonzero nilpotent for every level at least two. No characteristic restriction is missing.
- The level-one example’s map is surjective because the cyclotomic relation sets X1 equal to the unit u and the affine recursion expresses every Xj and its inverse in the finite-generator subalgebra. The finite type-A and Ariki–Koike bases then give injectivity. This includes rank one and Q equal to 1.
- The rank-two, level-two example enumerates the four exponent pairs and the two elements of S2 correctly. The displayed reductions follow from the defining relations, and the proved universal PBW theorem applies over the stated Laurent ring.
- The rank-one, level-two example’s quadratic and inverse formulas hold for arbitrary unit roots, including coincident roots. The monic-basis lemma gives the claimed two-element basis.
- The collision example has distinct generic contents because u1 and u2 are algebraically independent. The specialization Q to 2 and u1,u2 to 1 is a valid map to Q; it gives a nonzero square-zero element and makes the displayed interpolation denominator zero. The example does not claim a specialized projector or semisimplicity.
- The A-page summary accurately distinguishes the initial cyclotomic relation from transported affine relations, integral spanning from generic independence, and generic splitness from arbitrary specializations. Its rank-one claims and normalization caveat agree with the opened items. The B-page summary accurately describes the four examples and makes no unsupported semisimplicity claim.

For source checking, I consulted Neaime, Geodesic Normal Forms and Hecke Algebras for the Complex Reflection Groups G(de,e,n), §6, Theorem 6.1 and representative reduction passages (arXiv:1810.12053v1, PDF pp. 31–35). The theorem gives a cyclotomic normal-word basis route, but its coefficients and presentation differ, so it does not replace the local proof. I consulted Hu–Mathas, Seminormal Forms and Cyclotomic Quiver Hecke Algebras of Type A, §3.2, especially Definitions 3.9–3.11 and the braid-coefficient verification (arXiv:1304.0906v3, PDF pp. 14–17); the batch 13 multiplicative formulas are verified locally in their own normalization. Mathas, Cyclotomic Quiver Hecke Algebras of Type A, §1.1 (arXiv:1310.2142, PDF pp. 3–4), distinguishes the original Ariki–Koike presentation from the degenerate presentation and states the conversion under the invertibility condition on v minus v inverse. This supports the assigned items’ warning against using that conversion at the singular value.

## Uneditable defect

The batch 13 proof contract for ex-hh-ariki-koike-level-one-is-finite-type-a, at research/hopf-hecke-unfinished-15-2026-10-15-batch-13.proof-contracts.json#/contracts/ex-hh-ariki-koike-level-one-is-finite-type-a/boundaries/2/reason, says that for n = 1 both bases contain only T1 = 1. There is no generator T1 when n = 1: the finite type-A algebra then has no generators, and the sole basis element is the identity reduced-word element. The assigned item’s step 2.1 states the basis claim correctly. This is a nonfatal false statement in the contract evidence; I was not authorized to edit the contract.

## Page verdicts and remaining status

- A page: no mathematical defect found in the reviewed summary. Its declared type-A affine prerequisite page is still draft in this run, so page-level prerequisite closure remains pending that page’s own review.
- B page: no mathematical defect found in the reviewed summary. It remains draft with its assigned A-page prerequisite.

No item or page prose was edited. Consequently, no reflow, precheck, or proof-layout command was run. No mathematical blocker was found for the batch 13 items. The draft page-level dependency above remains a workflow closure dependency, not a defect finding.

At handoff, autopilot status reports the run PAUSED and still lists batch 13 as missing reader dispatch coverage, although the requested report and findings files are present. I did not alter controller state or create a dispatch receipt; stage progression remains an engine/owner action.

## Coverage limitation

I reviewed the assigned carriers and the direct mathematical suppliers needed for their claims, including the relevant proofs and interfaces. I did not recursively re-audit unrelated transitive suppliers of the established ring, generic Coxeter, and RSK results. The finite type-A basis interface was also cross-checked against the locally proved generic type-A standard-basis theorem and the explicit parameter change.
