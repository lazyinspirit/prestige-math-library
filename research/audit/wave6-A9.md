# Wave 6 — A9 scope-denial re-grep and published-claim decay sweep

Orchestrator decision receipt. `AUDIT-WORKFLOW.md` §A9 requires every repaired
file to be re-read for scope-denial prose and for claims that were true when
written but have been falsified by later published levels. This pass did not
invoke either judge lane.

## Scope

The exact surface was the 13 ids in
`research/audit/wave6-rejudge-targets.json`: five mathematical repairs from A4
and eight source corrections from A6. Every item was read in full, not sampled.
Their six published home pages were also read in full so an item correction
could not leave contradictory page prose behind:

- `real-analysis/formal-laurent-series-field`
- `real-analysis/limsup-and-subsequential-limits-examples`
- `topology/homotopy-and-homotopy-equivalence`
- `topology/homotopy-and-homotopy-equivalence-examples`
- `topology/hausdorff-via-the-diagonal`
- `topology/hausdorff-via-the-diagonal-examples`

## Re-grep dispositions

The scope-denial grep found candidate prose in seven repaired items and two home
pages. All candidates were checked against the current corpus:

- `thm-laurent-ordered-field`: “neither” is part of ordered-field trichotomy;
  the Remark correctly denies that the constant copy of `R` is cofinal in the
  Laurent field and supplies `t` as the counterexample.
- `thm-laurent-cauchy-complete`: the proof correctly says bounded-below support
  does not follow merely from pointwise eventual values, then proves it from the
  `k = 0` threshold. The final Remark correctly denies least-upper-bound
  completeness and the unrestricted nested-interval property, with direct
  links to the established counterresults.
- `cor-laurent-nested-intervals`: the denial is exact. The corollary proves only
  the shrinking form, while `cex-laurent-nested-intervals-empty` on the same
  page refutes the unrestricted form. Its warning that real-constant lengths
  `2/(n+1)` do not shrink in the order of the Laurent field follows from the
  cited infinitesimal comparison.
- `cex-zero-times-infinity-indeterminate`: “does not determine” is the false
  claim being refuted; the displayed witnesses still give distinct products.
- `fs-a-function-with-closed-graph-is-continuous`: “neither hypothesis” is
  accurate for the false unrestricted implication. The witness already has a
  Hausdorff codomain, so the missing hypothesis in the closed-graph-to-
  continuity direction is compactness.
- `cex-a-closed-graph-without-continuity`: the denial of relevance to the
  functional-analytic closed graph theorem is accurate: no item on that page
  supplies linearity or the Banach-space hypotheses.
- `library/real-analysis/formal-laurent-series-field.md`: each negative claim
  remains current. The earlier rational-function example establishes only
  non-Archimedeanness; later completeness-equivalence pages reuse the Laurent
  witness and do not retroactively provide an earlier one.
- `library/topology/hausdorff-via-the-diagonal.md`: “neither direction selects
  anything” describes the displayed diagonal proof and is not a library-scope
  claim.

The remaining repaired items and home pages contained no scope-denial
candidate. The two examples pages are frontmatter-only item lists and therefore
have no summary prose capable of decaying.

## Required personal audits

The combined judge/touch history escalated four items. I re-read each item and
the cited hinge rather than accepting the A8 disposition by report:

| item | personal disposition |
|---|---|
| `thm-laurent-cauchy-complete` | **sound; no edit.** The consecutive-index inequality extends to `a <= b` by induction on the additive gap supplied by `def-nat-order`; no predecessor lemma is required. Terra identified a compressed step, not an invalid inference. |
| `cex-zero-times-infinity-indeterminate` | **sound; no edit.** Step 2.2 proves the eventual-threshold definition of divergence to `+infinity`. Calling this extended convergence is an immediate definitional bridge; moreover the constant product limits `1` and `2` already refute determinacy, so the phrase is not load-bearing. |
| `cor-convex-subsets-of-rn-are-contractible` | **sound; no edit.** The Statement begins with `n >= 1`, so that standing hypothesis governs the Facts block and the application of the straight-line theorem. The local fact's shortened wording does not strengthen the corollary. |
| `lem-straight-line-homotopies-are-continuous` | **sound; no edit.** The Statement proves the only non-algebraic obligation, continuity into `C`; substituting `t = 0,1` gives the endpoints in one line. The title's use of “homotopy” is accurate and downstream items state those endpoint equalities explicitly. |

Dropping any of these four would remove a load-bearing completeness result, the
standard indeterminate-product counterexample, or the straight-line homotopy
spine. Because no fatal defect was found, no deletion, repair, recertification,
or second rejudge is licensed.

## Outcome

- Published-claim decay: **none found**.
- Scope-denial defects: **none found**.
- A9 edits to `items/` or `library/`: **none**.
- Rejudge calls at A9: **zero**.
- Decision: **A9 complete; advance to A10**.
