# Step 3a scope review — muckenhoupt-weights-and-weighted-estimates

- Run `frontier-39-analysis-30`, batch 8, role alpha, label
  `step3a-pair-muckenhoupt-weights-and-weighted-estimates-77b058e9757c190d`,
  covers `muckenhoupt-weights-and-weighted-estimates`.
- A page `muckenhoupt-weights-and-weighted-estimates` (order 458.02613,
  fourier-analysis, 31 items). B page
  `muckenhoupt-weights-and-weighted-estimates-examples` (order 458.02614,
  5 items). Companion pointers agree A↔B; the B page `requires` is the
  singleton A id; the A page `requires` is exactly
  `calderon-zygmund-decomposition-and-singular-integrals`,
  `the-lp-spaces-holder-minkowski-and-riesz-fischer`,
  `the-maximal-function-and-lebesgue-differentiation` and
  `radon-measures-and-the-riesz-markov-kakutani-theorem`, all four published
  (`library/fourier-analysis/calderon-zygmund-decomposition-and-singular-integrals.md`;
  the other three in `library/measure-theory/`, `status: published`).
- Decision: **sufficient** — scope review only; no proof-correctness judgment,
  no item approval, no owner record, no scaffold edit.

## Evidence read

- `research/frontier-39-analysis-30-batch-8.pages.json` (all 31 A + 5 B item
  statements, ids, kinds, `deps`, provenance), `…-batch-8.coverage.json`
  (both pages, 5 source entries, 76 harvested rows), `…-batch-8.notes.md`,
  `…-batch-8.cross-batch-dependencies.json` = `[]`, and the 36 Step-1
  readiness records `…-step1-<item>.json` (`decision: ready`, `owner: false`).
- Prose design: `research/plan-fourier-analysis-track.md` FR-12, heading at
  L891, A inventory L901–915, B inventory L921–925, hard obligations L927–932,
  source line L896–897; track table L42 (subject), L73 (orders and requires),
  L324 (source row); source crosswalk rows L1504 (G §7.1), L1505 (G §7.2),
  L1506 (G §7.4), L1530 (G §7.3), audit-added factorisations L1559; deliberate
  exclusion of G §§7.5.1–7.5.3 (factorisation/extrapolation) at L1582. Plan
  contract `research/plan-spec.json` A/B rows at L159370/L159385 (empty item
  arrays; `requires` as above).
- Run records: `research/frontier-39-analysis-30-scope-ledger.json` (pair
  present, batch 8), `…-drift-evidence.json` and
  `research/frontier-39-analysis-30-alpha-step1-drift.md` L115–124 (VERDICT:
  no-drift; preserve positivity a.e., the distinct A₁ definition and the
  strict 1<p<∞ bounds), `…-step1-owner-resolution.md` (no FR-12 item), the
  planning row (`…-planning-notes.md` L20). No
  `…-owner-authoring-direction.md` exists; no Step-3a owner receipt exists for
  this page.
- Reviewer re-reads: Grafakos §7.4 pp. 532–543 (Definitions 7.4.1–7.4.2,
  Theorems 7.4.3/7.4.6, final comment p. 543) and Kinnunen running headers
  (ch. 4 "MUCKENHOUPT WEIGHTS", ch. 5 "AP AND BMO") from the stamped PDFs.

## Scope against the prose design

All thirteen distinct designed A claims are present with the designed content:
`def-muckenhoupt-a-p-and-a-one-weights`, `lem-a-p-dual-weight-and-nesting-properties`,
`lem-a-p-weights-are-doubling`, `lem-a-p-distribution-decay-from-maximal-cubes`,
`thm-reverse-holder-self-improvement-for-a-p-weights`,
`cor-a-p-classes-are-open-in-the-exponent`,
`lem-weighted-maximal-weak-bound-for-a-one`,
`thm-hardy-littlewood-maximal-operator-characterises-a-p`,
`def-muckenhoupt-a-infinity-class`,
`thm-a-infinity-power-decay-characterisation`,
`lem-unweighted-good-lambda-local-estimate-for-maximal-truncations`,
`lem-weighted-good-lambda-inequality-for-maximal-truncations`,
`thm-calderon-zygmund-operators-are-bounded-on-weighted-lp`,
`cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp`,
`rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one`. All five
designed B rows are present: `ex-power-weight-a-p-range`,
`cex-power-weight-fails-at-both-a-p-endpoints`, `ex-a-one-power-weight-range`,
`rem-a-doubling-weight-need-not-be-a-p` and
`ex-weighted-norm-of-an-interval-indicator`. No designed claim is dropped and
no subject outside the design is absorbed.

Two id/kind bookkeeping differences against the plan document, neither a scope
change and neither referenced by any other artifact (checked across all run
manifests, plan-spec and library items): the designed
`lem-unweighted-good-lambda-covering-for-maximal-truncations` (plan L911,
L1559) is the manifest's
`lem-unweighted-good-lambda-local-estimate-for-maximal-truncations` (same
kind, same local estimate), and the crosswalk's stale
`cex-a-doubling-weight-need-not-be-a-p` (L1504) is the design table's
`rem-a-doubling-weight-need-not-be-a-p` (`proved_here: false`, exact source
construction retained), which the manifest follows, correctly.

The 18 local additions beyond the design inventory are all genuine
prerequisites of designed claims: the weight/w-measure/Lᵖ(w) and cube-average
conventions (Grafakos and Kinnunen use them without definition);
ball–cube comparability; the cube-average/essential-infimum form of A₁;
density-to-mass; the affine-normalised maximal-dyadic-subcube lemma; the
weighted maximal function and its weak (1,1)/strong (q,q) bounds; the A_∞
converse chain (`lem-power-decay-weights-are-doubling`,
`lem-differentiation-of-l-one-functions-for-a-doubling-weight`,
`lem-reverse-holder-from-a-distribution-estimate`,
`lem-power-decay-implies-a-p-membership`; the differentiation lemma replaces
Kinnunen's differentiation-for-doubling-measures appeal with the weak (1,1)
bound and C_c-density, avoiding the AC-carrying published differentiation
theorem); and the good-λ machinery (maximal dyadic
cubes covering an open set, annulus far-field estimates, kernel-tail
finiteness). None of these weakens or pads a designed claim; the A page totals
31 items, well below the page cap.

The design's row-11 shorthand "a standard L²-bounded CZ operator is bounded on
Lᵖ(w)" is realised in the form the sources actually prove and the library's
conventions support: the theorem bounds the maximal truncations T*, T** and
adds the explicit conditional clause that if truncations converge a.e. on a
dense subspace of Lᵖ(w) the limit satisfies the same bound; the Hilbert and Riesz
concrete transforms are then unconditional via the published convergence
corollary. This matches Grafakos §7.4 exactly (Theorem 7.4.3 and 7.4.6 are
stated for T^(∗); the closing comment on p. 543 extends the estimate to T only
when T is pointwise controlled by T^(∗), "the case for the Hilbert transform,
the Riesz transforms, and other classical singular integral operators"), and
the published library definition deliberately does not assume existence of a
principal-value distribution or any truncation limit
(`def-calderon-zygmund-kernel-and-principal-value-operator`). The coverage
record's note that G Theorem 7.4.7 (necessity) is not claimed is respected.
This is a source-faithful precision, not a scope weakening.

## Source coverage

Declared sources (design L896–897): Grafakos §§7.1–7.4, pp. 499–545; Kinnunen
chs. 4–5, pp. 65–111; Tao note 5 §1 supplementary. Fetch stamps in the
coverage record: Grafakos 5,349,812 B / 647 pp, sha256_16
`38c219d3c9013a85` — reproduced byte-identically at review time; Kinnunen
1,885,449 B / 112 pp, sha256_16 `3e77f01971ffab23` — reproduced exactly on a
second fetch (an earlier fetch returned the same byte length with a different
hash, i.e. this URL's bytes are regenerated per request, so the hash is not a
stable identity check here; page count and ch. 4/5 running headers confirm the
document); Tao 249,082 B / 24 pp. Tao backs no item (two `out-of-scope` rows).

A heading-by-heading sweep of the declared read ranges finds every numbered
result disposed. Grafakos §7.1–§7.4: 7.1.1–7.1.11, 7.2.1–7.2.8, 7.3.1–7.3.4,
7.4.1–7.4.7 all receive an `included`/`inline`/`already-published`/`out-of-scope`
row; the out-of-scope ones are 7.1.8 (further A₁ example), 7.1.10 (the 24ⁿ
overlap lemma, superseded by the published fivefold-Vitali route recorded in
Remark 7.1.11), exercises, 7.2.7 (A₁ factorisation), 7.3.1–7.3.2 (logarithmic
A_∞ characteristic, superseded by the union definition and the equivalent
power-decay/reverse-Hölder forms), 7.4.7 (Riesz-transform necessity), each with
a concrete reason. Kinnunen ch. 4 items are mapped to the A/B items
(Definition 4.23, Example 4.17, Remarks 4.16, Lemma 4.20/Remark 4.21,
Theorems 4.25/4.29/4.31/4.34, Lemma 4.36), with Theorem 4.19 (lattice closure)
disposed out-of-scope for stated reasons. The deliberately unbuilt G §7.5
factorisation/extrapolation layer is a plan-level decision (L1582), not a
pair omission.

**Owner scope decision (2026-10-05).** The four Kinnunen ch. 5 groups —
Coifman–Rochberg (Thm 5.1), Jones factorisation (Thm 5.5), $A_2=\exp(\mathrm{BMO})$
(Thm 5.7), and the BLO/BMO characterisations (Def. 5.9, Thms. 5.11/5.16/5.17/5.19)
— are out of scope for FR-12 with no deferred destination. Inspection of current
Batch-8 and Batch-6 statements, proofs, dependencies and page requirements
found no consumer; FR-12's plan inventory uses $A_p$, the union form of
$A_\infty$, reverse-Hölder/power-decay, and good-$\lambda$ estimates, while
FR-10's current source coverage is Kinnunen ch. 3 §§3.1–3.5 and its BMO/$H^1$
inventory contains none of these results. The broad ch. 4–5 source read is
evidence coverage, not a commitment to add every adjacent weighted-BMO result;
adding all four would expand the approved FR-12/FR-10 scope. The related
Remarks 5.3–5.4 remain out-of-scope orientation only and have no destination.

## Prerequisites (no unmet prerequisite found)

All 243 dependency references of the 36 items resolve: 62 distinct published
items (`status: published`, all page-file prerequisites published) plus 101
references to items of this same pair, zero unresolved. The batch-8
cross-batch input is `[]` and the resolution scan finds no edge from this pair
to any other page or batch, so nothing here depends on a sibling pair still
under construction. The interfaces consumed were checked against their
published statements and are compatible: the maximal-truncation theorem's
hypotheses (pointwise size A₁, Hölder A₂′, cancellation A₃, principal-value
distribution W, L² bound B, off-support representation) are exactly the "as in
the published maximal-truncation theorem" setup the A page's local good-λ and
weighted CZ items cite; `thm-c-c-is-dense-in-l-p-for-radon-measures` gives
C_c-density for Radon measures under Dependent Choice, matching the four
DC-declared items (and `cor-principal-value-truncations-converge-almost-everywhere`
supplies the dense-subspace a.e. convergence, explicitly for Hilbert and Riesz
kernels, that the corollary needs); the regularity, fivefold-Vitali,
Marcinkiewicz and Lᵖ items match their uses. No confirmed or suspected
prerequisite gap was found, and no potentially defective published
prerequisite surfaced in this review.

## Checks run at review time (2026-10-05)

- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-8.coverage.json --require-destination`
  → 2 pages, 76 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-8.pages.json`
  → 36 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → 899 items across 60 pages, exit 0.
- Dependency-resolution scan over the pair's manifests → 0 unresolved of 243
  references; source stamps verified/refetched as recorded above.

## Decision

**Sufficient**: the pair's 31 A items and 5 B items cover the designed
definitions, results and examples of FR-12 with source-faithful scope, every
design claim preserved, all prerequisites published or local, and no unmet
prerequisite. The K ch. 5 deferral-destination observation is recorded for the
owner but is not an omission of this pair's approved scope.
