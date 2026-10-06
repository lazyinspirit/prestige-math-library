# Step 3a scope review — `bmo-john-nirenberg-and-h1-duality`

- Run `frontier-39-analysis-30`; role alpha; label
  `step3a-pair-bmo-john-nirenberg-and-h1-duality-97df92a48fdffd81`.
- Pair: A `bmo-john-nirenberg-and-h1-duality` (order 458.02609) / B
  `bmo-john-nirenberg-and-h1-duality-examples` (order 458.02610), batch 6,
  category `fourier-analysis`. A has 20 scaffolded items, B has 5.
- Decision: **sufficient**. All 14 designed A items and all 5 designed B items
  of the FR-10 design are present; the six extra A items are necessary local
  prerequisites, each traced to a designed consumer; source coverage is
  complete and re-verified; the full transitive prerequisite closure resolves
  with no missing node and no undeclared page edge. No omission, no merger, no
  enrichment is required. No unmet prerequisite was found.
- No prior reviewer or owner scope receipt existed for this page; no scaffold,
  item, page, coverage or owner record was edited by this review.

## Design comparison (A and B, item-for-item)

Controlling design: section FR-10 of `research/plan-fourier-analysis-track.md`
(L804–846; per-pair row at L40). Drift: `no-drift` for this pair
(`research/frontier-39-analysis-30-alpha-step1-drift.md`).

A page — designed items minted: `def-bmo-seminorm-and-quotient-by-constants`,
`lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically`,
`lem-john-nirenberg-stopping-cubes-have-geometric-decay`,
`thm-john-nirenberg-exponential-inequality`,
`cor-bmo-lp-oscillation-norms-are-equivalent`,
`cor-linfinity-embeds-continuously-into-bmo`,
`lem-bmo-functions-pair-uniformly-with-hone-atoms`,
`thm-bmo-defines-a-bounded-functional-on-hone`,
`lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone`,
`lem-hone-functional-has-compatible-local-ltwo-representatives`,
`lem-the-dual-representative-has-uniform-bmo-oscillation`,
`thm-real-hone-bmo-duality`,
`thm-calderon-zygmund-operators-map-linfinity-to-bmo`,
`cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo`. Design row 6
(`cor-linfinity-embeds-properly-into-bmo`) is minted as
`cor-linfinity-embeds-continuously-into-bmo` with strictness carried by the B
leaf `ex-logarithm-is-in-bmo-but-not-linfinity`; this follows the design's own
rationale column ("strict witness appears on B") and the standing rule that
an A item may not depend on a B item. The pair therefore still delivers the
strictness claim the design promised. Six further A items are local
prerequisites with a named designed consumer: `lem-range-truncations-preserve-bmo-seminorm`
(Banach–Alaoglu step of `thm-bmo-defines-a-bounded-functional-on-hone`),
`lem-ltwo-atoms-have-uniform-hone-quasinorm` and
`lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone`
(converse Riesz step), `lem-linfinity-bmo-functions-dualise-hone-boundedly`
and `lem-finite-atomic-sums-are-dense-in-hone` (canonical map), and
`lem-bmo-classes-are-determined-by-their-atom-pairings` (injectivity),
plus `lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators`
(verification of the published FR-8 contract for the final corollary). Every
designed hard obligation is visible in the statements: zero-seminorm case
interpreted as a.e. constancy, dual taken modulo constants, pairings first
defined on finite atomic sums, no global Lebesgue pairing, and the L∞
extension of a singular integral stated as a BMO class.

B page — all five designed leaves present and correctly typed:
`ex-logarithm-is-in-bmo-but-not-linfinity`,
`ex-bmo-seminorm-is-unchanged-by-adding-a-constant`,
`cex-bmo-functions-need-not-be-globally-integrable`,
`ex-john-nirenberg-tail-integration`, and
`rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` (`proved_here: false`, with
the required `external_dependency`: source URL, exact statement, local attempt,
necessity). No B-page item is a dependency target anywhere in the run.

## Source coverage

- `research/frontier-39-analysis-30-batch-6.coverage.json`, re-checked
  2026-10-05: `coverage-checklist` → 2 page(s), 51 harvested results, 0 error(s),
  0 warning(s); `source-fetch-check` → 11/11 fetch-verified, 11/11 resolved
  (0 documented drops).
- I re-fetched all eight documents (11 source rows) on 2026-10-05. All 11 rows
  are byte- and sha256_16-identical to their `fetch_verified` stamps: Williams
  736 373 B/`05c372…`; Kinnunen 1 885 449 B/`3e77f0…`; Tao 287 706 B/`0c200b…`;
  UW lectures 18/20/21/22 `97051e…`/`de6795…`/`d925e2…`/`42f2b8…`; Mei
  103 005 B/`30e5de…`.
- Load-bearing results re-read in the fetched texts: Williams Theorem 7.5
  (John–Nirenberg, PDF p. 30) and Theorem 7.40 ((H¹)* = BMO, injectivity and
  norm bounds, PDF p. 47); Kinnunen Theorem 3.15 (PDF p. 46), Theorem 3.28
  (PDF p. 56) and Theorem 3.6(1) with the 3/2 truncation constants (PDF p. 42);
  Tao's BMO definition modulo constants (PDF p. 11), Proposition 3.4
  (p. 11–12), Proposition 3.5 (p. 13) and Corollary 3.6 (p. 14); Mei's
  published abstract, which matches the recorded formula
  `‖φ‖_BMO ≍ ‖φ‖_{BMO_D} + ‖φ(·−2δπ)‖_{BMO_D}` verbatim (numdam, C. R. Acad.
  Sci. Paris 336 (2003); arXiv:math/0304417).
- All 17 out-of-scope dispositions carry result-specific reasons and the three
  deferrals name their in-run destinations (FR-9 for the maximal/Riesz forms
  and the atomic decomposition; FR-11 for the square-function form of H¹).
  Kinnunen's cited range is `pp. 34–64` in the design while the harvest reads
  `pp. 34–56`; the unused remainder (completeness of BMO, local exponential
  integrability) is disposed out-of-scope with reasons, and no item consumes
  it — recorded, not a scope gap.
- Note (evidence hygiene, not a defect): 10 of the 25 items have no coverage row
  naming them; their source support is carried by the broader rows for
  Williams Thm 7.5/7.40, Kinnunen Thm 3.15/3.28 and the FR-9 cross-batch rows.
  Sibling batches show the same pattern (4–10 such items), and the checklist
  passes with 0 errors.

## Prerequisites and intended role

- Full transitive dependency closure of the 25 items: 1 608 ids, **0 missing**.
  1 566 resolve to published items, 17 to the in-run FR-9 scaffold
  (`real-hardy-spaces-maximal-functions-and-atoms`, batch 5), and the rest to
  the pair itself. All direct published suppliers are `status: published`.
- A-page `requires` resolve: `calderon-zygmund-decomposition-and-singular-integrals`,
  `the-baire-principles-of-functional-analysis`,
  `orthonormal-bases-parseval-and-fourier-series` (published) and
  `real-hardy-spaces-maximal-functions-and-atoms` (in-run FR-9). B requires
  its A page. No consumer anywhere in the run depends on a B item.
- Every page edge induced by the items' direct dependencies lies inside the
  transitive closure of the A page's declared `requires` in `plan-spec.json`
  (checked mechanically; e.g. the Riesz-representation, Banach–Alaoglu,
  ultrafilter, `L^p` and measure-theory suppliers are all reached). So the
  manifest satisfies validate-plan rule 15 (`undeclared-prereq`) in advance.
- The FR-9 scaffold statements checked do supply the p=1 interfaces the batch-6
  cross-batch records claim: `def-hp-atom-with-moment-order` gives cube
  support, `|a| ≤ |Q|^{-1}` and zero mean at p=1;
  `thm-atomic-characterisation-of-real-hp` and
  `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` supply the
  ℓ¹ representation with H¹ convergence; the grand-maximal definition and
  maximal-characterisation theorem supply the M_N equivalence used by the
  L²-atom bound. These are scaffold-level at this stage; Step 3b must re-verify
  the uses once FR-9 is authored (monitoring point, not an unmet prerequisite).
- Intended role confirmed from the published corpus: the Hilbert–Riesz page and
  `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`
  explicitly defer the L∞ → BMO endpoint and BMO itself to "the later BMO page
  of this track"; this pair is that page, and it closes the endpoint through
  `thm-calderon-zygmund-operators-map-linfinity-to-bmo` and
  `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo`. Downstream, batch 7
  (Littlewood–Paley) consumes `def-bmo-seminorm-and-quotient-by-constants`,
  `thm-real-hone-bmo-duality` and the B-page logarithm example in its endpoint
  remark; all exist.
- Unmet prerequisites: **none**. No prerequisite required by the pair is absent
  from both the published library and the current scaffold, so no scaffold
  addition is recommended.

## Observations (no scope action)

- O1. The pair's own extra items and the FR-9/FR-11 deferrals keep the page
  inside the design; no promised topic (sharp maximal functions, good-λ,
  dyadic duality, T(1)) is claimed on this pair, each with a recorded reason.
- O2. `cor-linfinity-embeds-continuously-into-bmo` references the companion's
  unbounded BMO function in prose only; this is not a dependency and does not
  violate the A/B leaf rule.
- O3. The Mei remark is a recorded external result ("not proved here"); its
  statement matches the published abstract, and no item consumes it.

## Method

Design, manifests, coverage, batch notes, cross-batch records, plan-spec and
scope ledger read directly; dependency closure walked with the repository
loader used by `tools/step3-decisions.mjs` (published items parsed from
frontmatter, run items from the batch manifests, plan items from
`plan-spec.json`); page-edge closure checked against `plan-spec.json`;
coverage and fetch tools re-run; sources re-fetched and text-checked with
`pypdf`. Report: this file. Receipt:
`tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30 --page
bmo-john-nirenberg-and-h1-duality --decision sufficient`.


## Owner-directed scope addendum — Tao Exercise Q4 (2026-10-05)

The original sufficient review covered the then-current 20 A / 5 B inventory. After the Batch-7 group-d audit found that its deferred TaoA Exercise Q4 had no realized destination item, the owner directed that the claim be preserved by a compact FR-10 B-page enrichment. The design, batch-6 manifest, B-page, coverage and proof contract now include `ex-lacunary-exponential-sums-belong-to-bmo` (one new B leaf, no new pair). The exact statement and current scope hash require owner recertification; this addendum is not a Step-3 scope receipt.
