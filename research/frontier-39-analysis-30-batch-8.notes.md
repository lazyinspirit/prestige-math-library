# Batch 8 construction handoff — frontier-39-analysis-30 (Muckenhoupt weights and weighted estimates)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design FR-12
(`research/plan-fourier-analysis-track.md` L889, read through L931): A page
`muckenhoupt-weights-and-weighted-estimates` (order 458.02613, fourier-analysis)
and its companion `muckenhoupt-weights-and-weighted-estimates-examples`
(458.02614). Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-8.pages.json`, the coverage record
`research/frontier-39-analysis-30-batch-8.coverage.json`, the empty cross-batch
dependency input `research/frontier-39-analysis-30-batch-8.cross-batch-dependencies.json`,
the 36 Step-1 readiness records, and this note. No published item, shared plan,
engine state, verdict, or other batch was edited.

The manifest holds **36 items: 31 on A, 5 on B**, far below the 100-item page
cap. The B page is exactly the design's five-row inventory. The A page keeps
every one of the design's thirteen named claims and adds eighteen local
prerequisites needed to prove them soundly (list below). All 36 Step-1 records
are `decision: ready, owner: false`, each with the examined dependency list;
`node tools/step1-decisions.mjs check --run frontier-39-analysis-30` reports no
batch-8 item needing work (the whole-run result is still open only because other
batches are mid-scaffold). Records are author-readiness records, not independent
mathematical approval; Step 3 review and the engine gate still apply.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist
(checked before construction), so the binding directions are the run's plan and
the design section, plus the Alpha drift verdict for this page: **no-drift**
(`research/frontier-39-analysis-30-alpha-step1-drift.md`, "muckenhoupt-weights-and-weighted-estimates":
preserve positivity a.e., the distinct A_1 definition, and the strict
1&nbsp;<&nbsp;p&nbsp;<&nbsp;&infin; bounds). The manifest preserves all three.

## Design, plan, and source conflicts (recorded as required)

1. **"Radon–Nikodym facts" versus the required page.** The plan declares
   `radon-measures-and-the-riesz-markov-kakutani-theorem` as the page
   prerequisite, and the design's prose says "measure-theory Radon–Nikodym
   facts". The manifest consumes the **regularity and density** facts of the
   required Radon page (`thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact`
   so that `w dx` is Radon for a weight, and
   `thm-c-c-is-dense-in-l-p-for-radon-measures` for the differentiation lemma
   and the Hilbert/Riesz extension), but it consumes **no** Radon–Nikodym
   density: every density-type step is instead handled by a doubling-weight
   reverse-Hölder lemma that avoids Lebesgue decomposition. The RN pair
   `the-radon-nikodym-theorem-and-lebesgue-decomposition` is therefore *not* an
   actual prerequisite of this page. Recorded; no supplier was changed.
2. **Design row numbering.** The FR-12 table carries duplicated/irregular row
   numbers (two "5" rows, two "11" rows, two "12" rows, no 9, 13, 14). All
   thirteen distinct claims are present, mapped by item ID, not by row number.
   The manifest's added rows are marked "Local prerequisite" or "(local
   addition)" in the readiness reasons.
3. **Weighted CZ statement and principal values.** The design's row states "a
   standard L²-bounded CZ operator is bounded on L^p(w)". In this library a
   general Calderón–Zygmund operator (off-support representation, annular and
   Hörmander conditions) need not possess a principal-value distribution
   (`def-calderon-zygmund-kernel-and-principal-value-operator`). The manifest
   therefore states the theorem for the maximal truncations `T*, T**` (which
   are always defined from the kernel) and adds an explicit clause: if the
   truncations converge a.e. on a dense subspace of `L^p(w)` (verified for the
   Hilbert and Riesz kernels by the published convergence corollary), then the
   operator itself inherits the bound. This is a convention-driven precision,
   not a weakening: the design's corollary for the FR-7 transforms is fully
   covered, and the A_1 weak-type endpoint `(7.4.16)` is included as well.
4. **Fragmenting the A_infinity characterisation (choice hygiene).** Design row
   10 (`thm-a-infinity-power-decay-characterisation`) is implemented as three
   items: the forward lemma `lem-a-infinity-weights-satisfy-power-decay`
   (Countable Choice only, and the only form consumed by the good-λ transfer),
   the converse `lem-power-decay-implies-a-p-membership` (Dependent Choice,
   through the doubling-weight differentiation lemma), and the synthesis
   theorem. This keeps the weighted CZ chain free of the converse's machinery
   and makes the choice use exact.
5. **B-page row 4 kept as recorded-not-proved.** `rem-a-doubling-weight-need-not-be-a-p`
   is `proved_here: false` with a bound `external_dependency` on Grafakos
   Examples 7.1.6–7.1.7. It is not a dependency target of any item.
6. **Sources.** The design's source line names Grafakos §§7.1–7.4, pp. 499–545,
   and Kinnunen chs. 4–5, pp. 65–111, with Tao's Math 247A notes 5 §1 as
   supplementary. All three were fetched and their full texts verified
   (`source-fetch-check --stamp`: 5/5 entries; Grafakos 647 PDF pages, Kinnunen
   112 PDF pages, Tao §1 pp. 1–6). Tao's note is cited in the coverage with two
   `out-of-scope` dispositions and backs no item. No source was dropped, so no
   `source_resolution` record is asserted.

## Local additions beyond the design's inventory

Each is a genuine prerequisite; none weakens or pads a design claim, and every
design claim is preserved verbatim in content.

- `def-weight-and-weighted-lp-space`, `def-axis-parallel-cube-averages-and-cube-maximal-functions` —
  fix the weight, w-measure, L^p(w), cube, average, and cube-maximal-function
  conventions the design uses without definition; `lem-ball-and-cube-maximal-functions-are-comparable`
  transfers the published ball maximal functions to the cube form of A_p.
- `lem-a-one-cube-average-and-maximal-function-forms-agree` — the cube-average/
  essential-infimum form of A_1, used by the reverse Hölder theorem and the
  nesting lemma; keeps the A_1 definition distinct from the p→1 substitution.
- `lem-a-p-weighted-average-comparison-and-density-to-mass` — Grafakos Prop.
  7.1.5(8)/Lemma 7.2.1 and Kinnunen Lemma 4.20/Remark 4.21: the (|E|/|Q|)^p
  density-to-mass step consumed by the doubling lemma, the distribution-decay
  iteration, and the necessity direction.
- `lem-maximal-dyadic-subcubes-of-a-cube-at-a-height` — the published maximal
  dyadic-cubes lemma applies to the R^n grid; the reverse-Hölder proof needs the
  subcube form inside a fixed cube, obtained by an affine normalization.
- `def-weighted-maximal-function-relative-to-a-doubling-weight`,
  `lem-weighted-maximal-function-is-weak-type-one-one` — the weighted maximal
  function and its weak (1,1)/strong (q,q) bounds for a doubling weight; this is
  the "covering" sufficiency route for the maximal characterisation (Grafakos
  Thm. 7.1.9(b); Kinnunen's self-improvement route is recorded as an alternative
  and is not consumed by the theorem's sufficiency).
- `lem-a-infinity-weights-satisfy-power-decay`, `lem-power-decay-weights-are-doubling`,
  `lem-differentiation-of-l-one-functions-for-a-doubling-weight`,
  `lem-reverse-holder-from-a-distribution-estimate`,
  `lem-power-decay-implies-a-p-membership` — the two halves of the A_infinity
  power-decay equivalence and the general doubling-measure reverse-Hölder lemma
  (Grafakos Cor. 7.2.4 / Kinnunen Lemma 4.36 and Thm. 4.34). The differentiation
  lemma replaces Kinnunen's appeal to differentiation for doubling measures by a
  proof from the weak (1,1) bound for M^v and the density of C_c, so the page
  needs no Axiom of Choice.
- `lem-maximal-dyadic-cubes-covering-a-proper-open-set`,
  `lem-annulus-far-field-estimates-for-the-maximal-function`,
  `lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite` — the
  decomposition, far-field, and well-definedness inputs of the unweighted and
  weighted good-λ estimates (Grafakos §7.4.2–7.4.3 and Lemma 7.4.5).

## Choice and axiom ledger

Every item states the assumption it uses. The page consumes **Countable Choice**
(dyadic maximal cubes, the fivefold Vitali lemma, differentiation of locally
integrable functions) and **Dependent Choice** in exactly the four items whose
proofs use `thm-c-c-is-dense-in-l-p-for-radon-measures`:
`lem-differentiation-of-l-one-functions-for-a-doubling-weight`,
`lem-reverse-holder-from-a-distribution-estimate`,
`lem-power-decay-implies-a-p-membership`, and
`cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp` (through the
density closure argument). No item uses `def-axiom-of-choice`; the avoided
route through `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`
(which carries AC) was replaced by the doubling-weight differentiation lemma.
No item is choice-free-and-incompatible with another, and no proof path reaches
`deferred-set-theory-beyond-choice`.

## Checks actually run (batch scope unless noted)

- `node tools/manifest-deps.mjs` (all 30 manifests): 164 item(s), 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  36 batch-8 items labeled; **zero** non-empty-inventory errors (levels computed
  and verified, no cycle); the whole-run exit 1 is entirely other batches' empty
  scaffold inventories.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`:
  104 scoped item(s), 0 errors, 0 warnings (my batch included; the count moves as
  other betas write their manifests).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-8.coverage.json --require-destination`:
  2 page(s), 76 harvested result(s), 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-8.coverage.json --stamp`:
  5/5 source entries fetch-verified (full-text stamps written); check mode 5/5 resolved.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30`: no
  batch-8 item in the work list; all 36 records closed.
- `node tools/drift-review-check.mjs --run frontier-39-analysis-30`: 30 pages
  reviewed, no blocked edges.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (whole-run).
- `node tools/extcheck.mjs`: exit 0 (whole-run).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  batch-8 input present and empty; **no cross-batch edge touches batch 8**. The
  gate form with `--require-reviewed` is still red run-wide because most other
  batches have not yet supplied their inputs; that is a run-level dependency, not
  a batch-8 blocker.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify`: reports the
  expected manifest-vs-plan item-count difference (the plan-spec page lists land
  at the Step-4 splice); informational at Step 1, not a Step-1 gate.

## Unresolved findings, escalations, and published defects

- No mathematical escalation. The complete local closure fits the A page
  (31 of 100 items); no prerequisite belongs on another page, and no page split
  is required.
- No defective published prerequisite was found. Interfaces examined and used:
  the FR-8 CZ/maximal-truncation items, the MT-17 maximal/differentiation items,
  the MT-14 L^p items, the FR-7 Hilbert/Riesz items, the Radon-measure regularity
  and C_c-density items, and the choice ledger. One near-miss worth recording:
  `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`
  differentiates only with respect to Lebesgue measure and carries the Axiom of
  Choice; it is *not* used, and the page's differentiation need is met by the
  local doubling-weight lemma.
- The whole-run Step-1 gates remain red only on other batches' unfinished
  scaffolds (`step1-readiness`, `item-dependency-levels`, and
  `step1-dependency-ledger --require-reviewed`); no batch-8 artifact is missing.
- The A page's largest proof-route risks, to be checked at Step 3: the
  quantitative constants in the reverse Hölder theorem (gamma and C displayed),
  the ratio-2 form of the good-λ local estimate, and the maximal-truncation-only
  statement of the weighted CZ theorem. Each strategy names the source proof it
  follows (Grafakos Thm. 7.2.2, Thm. 7.4.3, Thm. 7.4.6) so the author can align
  constants exactly.

## Owner scope decision — Kinnunen chapter 5 (2026-10-05)

The Coifman–Rochberg theorem (Theorem 5.1), Jones factorization (Theorem 5.5),
the $A_2=\exp(\mathrm{BMO})$ representation (Theorem 5.7), and the BLO/BMO
characterizations (Definition 5.9 and Theorems 5.11, 5.16, 5.17 and 5.19) are
out of scope for FR-12, with no deferred destination. Current Batch-8 and
Batch-6 statements, proofs, dependency closures and page requirements show no
consumer. The BMO/H$^1$ page's approved scope and coverage use Kinnunen
chapter 3, and FR-12's planned A$_p$/A$_\infty$ maximal, self-improvement and
weighted Calderón–Zygmund chain is self-contained without these adjacent
weighted-BMO results. Adding all four would expand the approved page scope.
The source-coverage rows retain their mathematical descriptions and now record
the no-consumer/out-of-scope rationale with no destination. The related Remarks
5.3–5.4 remain out-of-scope orientation only.
