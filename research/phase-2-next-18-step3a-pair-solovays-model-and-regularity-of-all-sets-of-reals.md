# Step 3a scope review — Solovay's model and regularity of all sets of reals

Run: `phase-2-next-18`  
A page: `solovays-model-and-regularity-of-all-sets-of-reals`  
B page: `solovays-model-and-regularity-of-all-sets-of-reals-examples`

## Decision

**Insufficient.** The pair has a substantial and well-sourced treatment of
Solovay's `HOD(S)` model, but it omits the promised `L(R)` variant. This is a
focused enrichment issue; no pair merger is recommended.

## Blocking scope omission

The controlling SET-24 prose requires the hereditarily ordinal-sequence-
definable model *versus* `L(R)` and targets every positive and negative clause
of `rem-solovay-model`. That published target says that `L(R)` in the same
collapse extension is the other standard inner model and satisfies the same
ZF+DC and LM/BP/PSP conclusions. The current 21-item A manifest defines only
`M=HOD(S)` and proves ZF, DC, regularity and the negative consequences only for
`M`. Its sole treatment of `L(R)` and `HOD(R)` is the sentence that `M` is not
definitionally identified with them. It contains no definition or comparison
result for `L(R)`, no verification of DC there, and no theorem transferring
LM/BP/PSP and the named consequences to it. The final relative-consistency
theorem establishes existence of a target model but does not close this
specific second-model promise.

Coverage overstates this seam. Its Unger row marks “`HOD(S)`, `L(R)`, and
`HOD(R)` as distinct model choices” included at the `HOD(S)` definition, while
the definition only refuses an equality. [Unger's complete two-page
note](https://www.math.toronto.edu/sunger/solovay-model.pdf) says
that `L(R)` and `HOD(R)` are alternative choices and that regularity adapts,
but warns that DC is harder; its only separate DC proof is Claim 6 for
`HOD(R)`, not a complete `L(R)` argument. [Solovay's original
paper](https://people.math.ethz.ch/~fdalio/ZKmodel.pdf), Theorem 1 and Part III
§§1.1–2.13, gives the complete regularity and DC argument for the
hereditarily ordinal-sequence-definable model, not the omitted comparison.

Owner action: enrich the A page with the exact `L(R)` construction/relationship
in the collapse extension and an adequately sourced theorem proving its ZF+DC
and LM/BP/PSP conclusions (with the named negative consequences inherited or
restated). Refresh coverage with a complete authoritative locator for the
`L(R)` DC argument. A concrete B-page comparison of `HOD(S)`, `HOD(R)` and
`L(R)` would be useful but is not itself the blocking requirement. The owner
must record `proceed` after applying the resulting scope.

## Scope otherwise covered

- The A inventory adequately covers the inaccessible Lévy collapse,
  localization, absorption and homogeneity, the precise `HOD(S)` definition,
  ZF and ambient omega-sequence closure, internal DC, Borel-code absoluteness,
  random/Cohen generic largeness, and LM/BP/PSP.
- It also covers the designed finite-dimensional Euclidean transfer, absence
  of Vitali and Bernstein sets and Hamel bases, continuity of additive maps,
  failure of AC, the Banach--Tarski obstruction, and a separate formal
  relative-consistency reduction retaining the inaccessible antecedent.
- The seven B items include the required Solovay factorization and worked
  Borel/perfect-tree/coding examples, the four classical pathologies, the
  volume contradiction, and the inaccessible-direction correction.
- Solovay's almost-everywhere Borel uniformization theorem, capacity remarks,
  and the broader complete-separable-metric-measure extension are not SET-24
  promises and have no owned consumer; their exclusion does not cause this
  decision.

## Records and checks

I compared the live pair manifest and coverage with SET-24, the B-companion
contract, `rem-solovay-model`, current plan and scope ledger, planning and batch
notes, drift report, dependency records and current run state. No Step-3a owner
receipt exists. I read Solovay's theorem statement and complete relevant Part I
§§3–4 and Part III §§1.1–2.13 arguments, and the complete Unger note. The
declared page edge to same-run SET-20 remains an open ordering/methodological
edge but is not an item-level proof dependency and creates no merger need.

Current mechanical checks pass: `manifest-deps` (46 items, 0 errors), whole-run
manifest `content-policy` (533 items, 0 errors/warnings), batch-8
`coverage-checklist` (59 harvested results, 0 errors/warnings),
`source-fetch-check` (5/5 verified and resolved), and `validate-plan` (success).
Those checks do not supply the omitted `L(R)` result.

This is a scope decision only. No scaffold, item approval, or owner record was
written.
