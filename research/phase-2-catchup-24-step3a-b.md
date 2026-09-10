# Step 3a scope review — group b

Run: `phase-2-catchup-24`  
Batch: 2  
Reviewed pair: `sequential-uniform-boundedness-with-countable-choice` / `sequential-uniform-boundedness-with-countable-choice-examples`

## Decision

`sufficient`.

The current manifest contains exactly the scope commissioned by
`research/plan-functional-analysis-track.md` §§14.1 and 14.3:

- A: `lem-two-signs-detect-an-operator-increment` and
  `thm-sequential-uniform-boundedness-under-countable-choice`;
- B: `ex-sequential-uniform-boundedness-for-coordinate-partial-sums` and
  `cex-sequential-uniform-boundedness-needs-a-complete-domain`.

No new definition is needed: the pair deliberately reuses the existing Banach-space,
bounded-operator, operator-norm, and countable-choice interfaces. The two A results
give the complete conceptual content of the narrowly titled subject: the elementary
two-sign estimate and the pointwise-bounded-sequence theorem over ZF plus
`AC_omega`, with Banach domain and merely normed codomain. The B page supplies both
a standard positive model (`c_0` coordinate projections) and the essential boundary
case (`c_00`, where failure of domain completeness permits pointwise boundedness with
unbounded operator norms).

This pair has a specific library role rather than a general Banach--Steinhaus survey.
It supplies `thm-weakly-convergent-sequences-are-norm-bounded` at the intended
countable-choice cost; the relative Hahn--Banach pair separately supplies the bidual
isometry. The later locally convex and weak-topology pages are consumers. The A page's
declared requirements are exactly
`dual-spaces-adjoint-operators-and-annihilators` and
`norming-and-separation-under-hahn-banach`; the B page is a proper leaf requiring only
its A companion. The current cross-batch dependency record is `[]`. There is no
current Step-3a owner decision for this A page.

## Source and coverage assessment

The complete relevant argument in Alan Sokal's five-page paper, *A really simple
elementary proof of the uniform boundedness theorem* (theorem, lemma, equations
(1)--(2), proof and Remarks 1--7, pp. 1--3,
<https://arxiv.org/pdf/1005.1585>), supports the two-sign engine and the
`4^n`/`3^-n` gliding-hump construction. MIT 18.102's complete notes, Definition 14
through Theorem 16 and the `c_0` exercise (printed pp. 4--5), and Theorem 36 with its
complete proof (printed p. 16,
<https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf>), independently
confirm the Banach-domain/normed-codomain sequence statement and the coordinatewise
completeness model. The coverage record also reads Teschl §4.1 through Corollary 4.4
as a standard Baire comparison.

As an additional impartial check, Fellhauer, *On the relation of three theorems of
analysis to the axiom of choice*, §3.2, Theorem 3.2.1 and its complete proof (printed
pp. 11--13, <https://math.hawaii.edu/home/jla/258-968-1-PB.pdf>), proves the stronger
arbitrary-family uniform boundedness principle from countable choice by first
selecting a countable operator sequence and then using the same deterministic-sign
construction. That stronger result is a legitimate future enrichment opportunity,
but it is not an omission from this explicitly sequential pair or from the consumer
interface that motivated it. Exact lower-bound/equivalence claims for the choice
strength are likewise not part of the commissioned subject.

All 18 harvested/canonical rows have dispositions. The eight exclusions concern the
unused moving-ball lemma, Ball's plank strengthening, Baire/category variants,
nonnormable-space extensions, or bibliography/history. Their current decisions all
stand; none is needed to state the planned sequence theorem or illustrate its domain
completeness boundary. Thus the 6/18 low-yield warning is explained coverage, not a
scope omission. No pair merger or enrichment is required.

## Checks and boundary

- `coverage-checklist --require-destination`: 18 results, 0 errors, one reviewed
  low-yield warning.
- `scope-decisions check --group b`: 8 current declines, 0 errors.
- manifest-only content policy: 4 scoped items, 0 errors or warnings.
- whole-run manifest dependency check: 735 items, 0 errors.

This is a scope decision only. It does not approve proofs, dependency correctness, or
publication. Next action: record the Step-3a `sufficient` receipt for the A page; no
owner action is required unless the scope later changes.
