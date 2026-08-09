# Wave 8 A3 orchestrator decision receipt

Decision completed: 2026-08-09

Status: **A3 complete; all three A4 batches authorized with the overrides
below.** I verified the three split manifests, 139 unique ledger rows, 116
proof contracts, all findings registers, all eight page files, every proposed
item, and the relevant dependency clauses from disk. Fresh GPT 5.6 Sol `xhigh`
readers independently reproduced the contract failures, repair semantics, and
source checks. No item or library page is changed by this receipt.

Scope integrity is exact: the three batches contain 40 + 67 + 32 distinct ids,
with exactly one ledger row per id and contracts for all 34 + 58 + 24
proof-bearing items. The honest baseline strict results are:

- absolute convergence: 34/34, three errors, zero warnings;
- Cantor/continuity: 58/58, 13 errors, zero warnings;
- topology: 24/24, zero errors and zero warnings.

The 16 exceptions are entirely accounted for below. A4 must regenerate the
affected contracts from final text and reach 116/116 with zero errors and zero
warnings. Unused-Fact cleanup is delegated item/citation work; no item id is
being deleted, renamed, or reordered.

## Real analysis — absolute convergence

1. `thm-infinite-product-criterion` Remark — **APPROVE**. Under the library's
   tail-based product definition, claim 3 remains true for `0 <= p_k <= 1`.
   Finitely many unit terms are passed by starting after the last zero factor;
   infinitely many make the series diverge and leave a zero in every tail.
   Apply the proposed replacement explaining that the strict form only avoids
   this split.
2. `cex-cauchy-product-of-convergent-series-diverges` — **APPROVE WITH
   OVERRIDE**. Remove unused Facts L2 and L5; remove the now-unused
   `lem-of-abs-value` dependency; retain `thm-am-gm` and
   `thm-of-square-roots` because the Remark must cite them directly. There are
   no existing contract rows to delete: regenerate the item contract after the
   Facts are removed. Do not fabricate numbered-step uses.
3. `rem-sums-proved-to-exist-but-not-evaluated` — **APPROVE** the narrow
   replacement “A standard proof expands `log(1+x)`; that route belongs with
   the logarithm, later in the reading order.” The universal “every known
   proof” claim is unsupported.
4. `library/real-analysis/absolute-convergence-and-rearrangement.md` —
   **APPROVE** the equally narrow page-prose correction: replace “the
   refinement ... genuinely needs the logarithm” with “the refinement usually
   proved with logarithms is deferred.” The unsupported necessity claim is a
   mathematical-method assertion; this edit does not authorize a wholesale
   rewrite of the eleven-paragraph summary.

### Provenance

**APPROVE 26 rows as submitted and 14 with mandatory overrides.** Preserve all
`origin` fields; none of the 40 files has legacy `authorship`.

- Rows 3, 4 and 6 (`lem-abel-summation-by-parts`, `thm-dirichlet-test`,
  `thm-abel-test`): replace the Hunter/UCI evidence with
  `https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf`,
  whose summation-by-parts, Dirichlet-test and Abel-test clauses state the
  submitted results.
- Row 9 (`thm-riemann-series-theorem`): add
  `https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf`, Theorem
  4.9.4, which explicitly supports prescribed extended-real liminf/limsup;
  remove the false claim that Hunter/UCI do so.
- Row 13 (`thm-mertens`): add
  `https://math.jhu.edu/~bernstein/math405F2019/realanal.pdf`, Theorem 2.6.5,
  for the one-absolutely-convergent-factor form.
- Rows 16, 17, 20, 26, 38 and 39: remove the stale UW sign-in URL. Use
  `https://ejwingler.people.ysu.edu/TBB-Real.pdf` for the nonzero-tail
  convention, positive-product criterion, necessity/nonsufficiency, and
  telescoping-product example as applicable. Add
  `https://people.math.binghamton.edu/dikran/478/Ch6.pdf` to rows 17, 20 and 39
  for the logarithmic comparison, square-sum criterion, and signed
  square-root witness. Correct each rationale to the exact supported role; YSU
  already permits finitely many initial zero factors, so row 16 must not call
  that a local delta.
- Row 19 (`rem-rearrangement-in-higher-dimensions`): replace biography URLs
  presented as paper links with the actual records
  `https://www.numdam.org/item/NAM_1905_4_5__506_1/` and
  `https://www.degruyterbrill.com/document/doi/10.1515/crll.1913.143.128/html`;
  correct the rationale to the historical higher-dimensional question and the
  local reading-order synthesis.
- Row 23: add the live Colorado counterexample source already used by row 35,
  `https://www.math.colostate.edu/~adams/teaching/math171spr2010/Hw4Sol.pdf`.
- Row 35: change `literature-derived` / `exact-source` to `ai-altered` /
  `semantic-source`. Colorado uses the same witness but proves only the weaker
  `|c_n| >= 1`; the local item sharpens it to `2(n+1)/(n+2) >= 1`.

Rows 38 and 39 must likewise describe semantic support rather than claim that
YSU contains their exact local witnesses. No stale UW URL may be copied into an
item source list.

## Real analysis — Cantor sets and continuity

1. `thm-continuous-image-of-a-compact-set-r` — **APPROVE** the source-exact
   empty-subfamily form of L3 and an explicit `K = emptyset` proof branch before
   the current nonempty finite-subcover argument.
2. `cex-dense-set-of-measure-zero` Remark — **APPROVE**. The shrinking
   rational-cover intervals need not meet pairwise; density follows because
   their union contains the rationals.
3. `cor-q-is-meager-and-not-g-delta` — **APPROVE** deletion of unused L8 and
   removal of now-unused `thm-open-set-algebra-r`.
4. `ex-cantor-set-in-ternary` — **APPROVE** deletion of unused L3. Remove
   `def-interval`, but retain `def-cantor-set` for its direct Remark link.
5. `cex-irrationals-are-not-f-sigma` — **APPROVE** deletion of unused L3,
   direct Remark citation to `thm-baire-category-r`, removal of
   `def-nowhere-dense-meager`, and retention of `thm-baire-category-r`.
   **Also approve** the missed class-(a) correction: replace the reversed
   “both are uncountable or countable respectively” sentence with “Both are
   dense; the rationals are countable and the irrationals are uncountable.”
6. `thm-composition-of-continuous-functions` — **APPROVE** deletion of unused
   L4. Remove only `def-limit-point-r`; retain
   `thm-composition-of-function-limits`, `fs-naive-composition-of-limits`, and
   `def-function-limit`, which are directly cited elsewhere.
7. `fs-evt-holds-on-every-bounded-domain` — **APPROVE** deletion of unused L6
   and the direct Heine--Borel Remark rewrite. Remove
   `def-open-and-closed-in-r` and `def-open-cover-r`; retain
   `thm-heine-borel-characterisation-r`.
8. `thm-sequential-criterion-for-continuity` — **APPROVE** removal of
   `rem-heine-criterion-choice-cost` from L4 only. Retain its direct prose link
   and dependency; the remaining Fact is licensed by the sequential limit
   criterion and countable choice.
9. `thm-compact-null-is-content-zero` — **APPROVE** a source-exact compactness
   Fact with the empty-subfamily alternative and an explicit `K = emptyset`
   branch before the existing finite-list proof.
10. `lem-nondegenerate-interval-is-not-null` — **APPROVE** the same exact
    compactness Fact split. Step 1.1 already derives `a < b`, hence nonemptiness,
    before the finite-subcover step; no proof branch is needed.
11. `library/real-analysis/continuity-ivt-evt-and-uniform-continuity.md` —
    **APPROVE** a narrow correction of “compactness is exactly the hypothesis
    those results need.” Say instead that the closing counterexamples establish
    the need for compactness in the EVT and uniform-continuity conclusions;
    IVT rests on the interval/connectedness hypothesis. Do not rewrite the
    whole summary.

### Provenance

**APPROVE all 67 component retags with these overrides.** The findings' claim
that there is no class-(c) work is rejected: every scoped untagged item must
receive its ledger determination. Preserve all `origin` fields; none has legacy
`authorship`.

- `fs-q-is-g-delta`: change `literature-derived` / `exact-source` to
  `ai-altered` / `semantic-source`; Zakon states the negation being proved, not
  the displayed false claim.
- In that row, `cor-q-is-meager-and-not-g-delta`, and
  `cex-irrationals-are-not-f-sigma`, replace the stale `/Book%3A...` Zakon URL
  with
  `https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps`.
- Replace the unverified Brubaker PDF in rows 5, 6, 7, 22 and 33 with the live
  interval-measure source
  `https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf`, and adjust
  rationales to its countable-cover/compact finite-subcover argument.
- Replace the dead Pieloch fixed-point URL in
  `thm-one-dimensional-fixed-point` with
  `https://kconrad.math.uconn.edu/blurbs/analysis/contraction.pdf`, whose
  introduction gives the exact arbitrary-closed-interval theorem and IVT proof.

All other rows are approved as submitted.

## Topology — paracompactness

1. `lem-paracompact-hausdorff-cover-shrinking` — **APPROVE**. Add
   `lem-regularity-via-closed-neighbourhoods`; split L1 into regularity and new
   L3 for implication (a) to (b), and cite L1/L3 at step 1.1. The current
   regularity theorem alone does not state the closed-neighbourhood clause.
2. `cex-paracompactness-is-not-productive` — **APPROVE** the proposed nine
   true-source dependencies and replacement proof. The primary Statement of
   `fs-paracompactness-is-productive` is the false universal, so it cannot
   license the true Sorgenfrey-plane counterexample Fact.

**APPROVE all 32 provenance retags with mandatory corrections.** Preserve all
32 `origin` fields. Delete only legacy `authorship` if present (none is). Correct
the `lem-paracompact-hausdorff-is-regular` rationale: the cited
`topology_262.pdf` is from California State University Northridge (CSUN), not
the University of Chicago. The live AMS Ornstein volume landing page is
acceptable; do not substitute its direct article PDF, which returns 403.

## A4 boundary

The owning Betas may apply only these approved repairs, retags and source
corrections. The overlong A-page shapes remain recorded as nonfatal prose debt.
Wave 9 and Wave 10 must later reconcile their measured 65 and 86 relationships
into final Wave 8 text before their A6/freeze boundaries.
