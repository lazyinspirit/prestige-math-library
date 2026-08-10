# Wave 12 A3 orchestrator decision receipt

Decision completed: 2026-08-09

Status: **A3 complete; A4 authorized with one CP-1 amendment.** This is an
orchestrator ruling, not an Alpha or Beta reading receipt. No item, page,
shared artifact, or earlier-wave file is changed here.

I read the governing instructions, A0 inventory, four-page manifest, both
A-page summaries, all 61 durable provenance rows, the findings register, all
48 proof contracts as needed for the two proposal families, and the complete
on-disk text of every CP-1/CP-2 item and cited source clause. The baseline is
HEAD `442f831c94882899c1dc5559b36599b0f78a99c8`. The shared worktree was already
dirty (`research/audit/RESUME.md` modified and concurrent wave artifacts
untracked); I did not alter or normalize any of it.

Scope integrity is exact: four pages / two A/B pairs / 61 distinct items; 61
unique ledger rows; 48/48 proof-bearing items contracted; 398 numbered steps,
681 Fact-citation entries, and 384 boundary dispositions. The pre-repair strict
result is exactly 48/48 checked, 15 errors, zero warnings: 13 honest empty-use
errors in CP-1 and two undeclared-dependency errors in CP-2.

## Provenance decisions

**APPROVE all 61 rows exactly as submitted.** The final distribution is:

- statements: 60 `ai-altered` / `semantic-source`, and one positively
  determined `ai-generated` / `none`;
- proofs: 48 `ai-generated`, 13 `not-applicable`;
- `established-knowledge`: zero; no Alpha URL waiver is needed.

The sole generated Statement is `rem-rn-conventions-and-scope`. It is a
site-specific synthesis of this page's dimension, notation, and reading-order
choices, not an unsourced fallback. The other 60 claims are recoverable
restatements, specializations, merged standard consequences, or standard
counterexample families rather than positively novel inventions. Their local
proofs remain independently `ai-generated` where supplied.

I independently reopened all 11 distinct ledger URLs. The Berkeley/UCI notes
support finite-dimensional norms, norm equivalence, and the coordinate model;
Lebl supports vector-valued limits, derivatives, integrals, and the mean-value
inequality; Banakh and Oertel--Paat--Weismantel support the
Levy--Steinitz/Steinitz statements, including the stronger arbitrary-norm
dimension bound; Princeton gives the parallelogram-law obstruction for the
one-norm; Harvard gives the exact `xy/(x^2+y^2)` witness; Lebl/Trench support
the uniform-convergence theorem and counterexample families; Alberta states
the uniform M/Dirichlet/Abel tests; and Trench plus the Dini convention source
support Dini's theorem and its four hypothesis failures. The recorded
zero-based indexing, rational-exponent, named-metric, and library-local
dependency conventions are presentation changes, so semantic rather than
exact evidence is correct. No provenance override or additional URL is
required.

All 61 scoped items carry `origin`; A4 must preserve every one. None carries
legacy `authorship`, so D5 removes nothing. If A4 applies the material decisions
below in the same pass, the expected impact split is **53 pure retags / 8
material items**, not 61 pure retags.

## CP-1 decision: approve eight Fact deletions, with one hidden-use amendment

The eight Facts are not inputs to any numbered proof step. Deleting unused
Facts and their edges is a delegated class-(b) repair, not an item/id or
reading-order deletion. I approve deletion of all eight Fact paragraphs and
removal of all **13 direct links from the Facts**.

One finding must be amended. In `cor-bolzano-weierstrass-in-rn`, the first
Remark actually says

> `sqrt((s-t)^2) = |s-t| by [L8]`.

Thus L8 is unused by the proof contract but not unused by the item. Deleting it
without repairing the Remark would leave a dangling label and would discard
the support for the isometry calculation. A4 must delete L8 but replace the
Remark's `by [L8]` with direct citations to `thm-of-square-roots` and
`lem-of-abs-value`. Those two dependencies stay declared.

The exact dispositions are:

| Item / Fact | A3 decision | Direct-link and `deps` disposition |
|---|---|---|
| `thm-cauchy-schwarz-and-the-euclidean-norm` L7 | Delete. | Remove both Fact links; keep `thm-minkowski-finite` because the Remark cites it directly; remove `lem-triangle-inequality-finite` from `deps`. |
| `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` L13 | Delete. | Remove its only link and remove `lem-metric-reverse-triangle` from `deps`. |
| `cor-bolzano-weierstrass-in-rn` L7 | Delete. | Remove the Fact link; keep `thm-componentwise-convergence-and-completeness`, directly cited in the Remarks. |
| `cor-bolzano-weierstrass-in-rn` L8 | Delete with the Remark repair above. | Remove two links from the Fact, add the same two direct links at the Remark's actual use, and keep `thm-of-square-roots` plus `lem-of-abs-value` in `deps`. |
| `cor-vector-valued-ftc-and-lipschitz-bound` L7 | Delete. | Remove both Fact links; keep `thm-additivity-over-subintervals` and `def-oriented-integral`, both directly cited in the Remarks. |
| `cex-the-one-norm-comes-from-no-inner-product` L6 | Delete. | Remove both Fact links; keep `thm-all-norms-on-rn-are-equivalent`, directly cited in the Remarks; remove `def-equivalent-norms` from `deps`. |
| `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space` L5 | Delete. | Remove the Fact link; keep `thm-absolute-convergence-in-rn`, directly cited in the Remarks. |
| `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension` L7 | Delete. | Remove both Fact links; keep `thm-convergence-iff-limsup-equals-liminf`, directly cited in the Remarks; remove `def-integer-power` from `deps`. |

Count reconciliation is mandatory:

- Fact paragraphs deleted: **8**;
- direct links removed from Facts: **13**;
- direct links relocated into the Bolzano--Weierstrass Remark: **2**;
- net direct-link reduction from CP-1: **11**;
- CP-1 frontmatter dependency removals actually licensed by final text: **4**;
- CP-1 dependencies preserved after deletion: **9**.

The findings' stated six frontmatter removals counted
`thm-of-square-roots` and `lem-of-abs-value` as having no other use; the disk
text disproves that premise. They must not be removed. The requested
seven-removal proposal surface is fully decided as six proposed CP-1
frontmatter removals plus CP-2's imprecise `def-complete-ordered-field` direct
link: approve the four CP-1 removals above and the CP-2 link removal below;
reject the other two frontmatter removals and relocate their links. There are
not seven declared-dependency removals available on disk, and A4 must not
manufacture them to satisfy a headline count.

## CP-2 decision: approve the p-norm order repair exactly

In `lem-p-norms-are-norms-and-induce-the-published-metrics`, L7 is genuinely
used by steps 2.3 and 2.4. `lem-of-sign-rules` supports multiplication by a
nonnegative scalar after the equality case is split off. `def-ordered-field`
states that the library's relation is a total order and therefore licenses
transitivity. `def-complete-ordered-field` adds the least-upper-bound property,
which is irrelevant and does not supply the cited transitivity claim.

**APPROVE** this exact replacement:

> Order arithmetic: multiplying an inequality by a nonnegative real preserves
> it (`lem-of-sign-rules` in its strict form, together with the case of equality
> settled by totality), and `<=` is transitive (`def-ordered-field`).

A4 must remove the direct `def-complete-ordered-field` link, retain the direct
`def-ordered-field` link, add `def-ordered-field` to `deps`, and not add
`def-complete-ordered-field`. The latter was never in `deps`, so this proposal
removes one direct citation but no declared dependency. Across CP-1 and CP-2,
the net declared-dependency change is therefore **four removals and one
addition**.

## Exact A4 authorization and required validation

The eight material ids are:

1. `thm-cauchy-schwarz-and-the-euclidean-norm`
2. `lem-p-norms-are-norms-and-induce-the-published-metrics`
3. `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
4. `cor-bolzano-weierstrass-in-rn`
5. `cor-vector-valued-ftc-and-lipschitz-bound`
6. `cex-the-one-norm-comes-from-no-inner-product`
7. `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space`
8. `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension`

Before editing, A4 must take the required touch snapshots. Remove the stale
judge/audited state from the seven items that carry it and the stale
`verification.verified` state from `cor-bolzano-weierstrass-in-rn`; then reflow
and rerun precheck for all eight. Regenerate all eight affected proof contracts
from final text. The expected contract inventory is 48 contracts, 398 steps,
**667** Fact-citation entries (681 minus the 13 CP-1 entries and the one CP-2
entry), and 384 boundary dispositions. Required strict result: **48/48 checked,
zero errors, zero warnings**. Do not invent step uses for deleted Facts.

The long `rn-as-a-normed-space` summary and the stale corpus-state sentence in
`rem-rn-conventions-and-scope` remain recorded debt. They are not part of CP-1
or CP-2 and are not authorized for A4. In particular, the generated Remark has
seven immediate direct consumers on disk and must receive the normal final-text
`genrisk` disposition at A6; its obsolete statement that no linear-map
definition exists prevents an unqualified `verified-generated` disposition
until that prose debt is repaired or narrowed.

## Mandatory Wave 12 to Wave 11 final-text barrier

All **29** relationships below were checked only against the current Wave 11
text. A6 must reopen every edge after Wave 11 repairs freeze; none may be
treated as final now:

| Wave 12 source | Wave 11 target |
|---|---|
| `def-vector-valued-derivative-and-integral` | `def-oriented-integral` |
| `def-vector-valued-derivative-and-integral` | `thm-linearity-of-the-integral` |
| `def-vector-valued-derivative-and-integral` | `lem-integrability-on-a-subinterval` |
| `def-vector-valued-derivative-and-integral` | `thm-additivity-over-subintervals` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `thm-linearity-of-the-integral` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `thm-monotonicity-of-the-integral` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `cor-integrability-of-absolute-values-products-and-lattice-operations` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `thm-composition-with-a-continuous-function` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `def-oriented-integral` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `thm-ftc-second-part` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `cor-primitives-of-a-continuous-function` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `def-oriented-integral` |
| `cor-vector-valued-ftc-and-lipschitz-bound` | `thm-additivity-over-subintervals` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `cor-primitives-of-a-continuous-function` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `thm-monotonicity-of-the-integral` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `thm-linearity-of-the-integral` |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | `def-oriented-integral` |
| `lem-uniform-integral-error-bound` | `thm-linearity-of-the-integral` |
| `lem-uniform-integral-error-bound` | `thm-monotonicity-of-the-integral` |
| `lem-uniform-integral-error-bound` | `def-oriented-integral` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `thm-ftc-first-part` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `thm-ftc-second-part` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `lem-integrability-on-a-subinterval` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `def-oriented-integral` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `thm-additivity-over-subintervals` |
| `thm-uniform-derivative-limit-on-a-closed-interval` | `def-the-integral-function` |
| `cex-shrinking-rectangles-have-integral-one` | `lem-changing-a-function-at-finitely-many-points` |
| `cex-shrinking-rectangles-have-integral-one` | `thm-additivity-over-subintervals` |
| `cex-shrinking-rectangles-have-integral-one` | `def-oriented-integral` |

No proposal remains unadjudicated. A3 writes only this receipt.
