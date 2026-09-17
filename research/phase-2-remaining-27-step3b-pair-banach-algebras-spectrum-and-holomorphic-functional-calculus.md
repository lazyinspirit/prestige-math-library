# Step 3b report — pair `banach-algebras-spectrum-and-holomorphic-functional-calculus`

- Run: `phase-2-remaining-27`, batch 4. Role: alpha-high, this pair only.
- A page: `banach-algebras-spectrum-and-holomorphic-functional-calculus` (31 items).
- B page: `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` (9 items).
- Artifacts written: 40 item files, two library pages, the batch proof contract
  `research/phase-2-remaining-27-batch-4.proof-contracts.json` (my 40 items only;
  the sibling pair's rows are untouched and the file preserves room for them),
  the refreshed Step 3a scope receipt, 40 Step 3b item receipts, and this report.

## Decision

**Pair complete.** All 40 scaffolded items are fully authored, all checks below
are green for this pair, and every item carries a current `accept` decision with
confidence 1. Nothing is escalated: no unmet prerequisite, no irrecoverable
source uncertainty, no required cross-group change.

## Scaffold audit and repairs

The Step 3a review had recorded `sufficient` and flagged one authoring
obligation. Both were handled, and the manifest received only the repairs the
mathematics required:

| Repair | Reason |
|---|---|
| `thm-holomorphic-spectral-mapping` statement extended by the composition law `g(f(a)) = (g∘f)(a)` | The coverage assigns the composition clause of Shirbisheh Theorem 2.5.5 inline. Both complete sources prove it after spectral mapping (B&S Theorem 5.25(v), printed pp. 228 and 230–232; Shirbisheh pp. 49–50), and the proof needs the spectral inclusion proved there, so the host moved from the homomorphism item to the spectral-mapping item. |
| Titles de-jargonised: `lem-submultiplicative-root-limit` → "Submultiplicative root limit"; `lem-admissible-cycle-around-a-compact-plane-set` → "Admissible cycle around a compact plane set" | Scaffold artifacts, IDs unchanged. |
| Dependencies added for `thm-invertible-group…`, `lem-resolvent-identity`, `thm-resolvent-is-banach-valued-holomorphic`, `thm-spectrum-is-nonempty-compact-and-norm-bounded`, `thm-polynomial-spectral-mapping`, `lem-banach-valued-cauchy-integral-vanishes`, `thm-holomorphic-spectral-mapping`, `thm-riesz-spectral-projection-properties`, `cor-atkinson-in-calkin-algebra-language` | Facts genuinely cite these suppliers; the strict contract gate requires every cited source to be declared. |
| One unused dependency removed (`cor-contour-integrals-homologous-cycles` from the contour-independence lemma; `thm-choice-implies-dependent-implies-countable-choice` from the five-parts lemma and the Atkinson corollary) | The proofs do not use them; the last two were load-bearing forward references on the spine/in deps, which the forward-reference gate forbids. |
| `forward_refs` declared on the ten A-page items whose Remarks link forward to the B companion | Orientation-only links to the examples page, per SCHEMA §3. |

No item was dropped, reclassified, or given a scope exemption. The refreshed
Step 3a receipt (`research/phase-2-remaining-27-step3a-review-…json`, written with
`record-scope`, decision `sufficient`) covers the current scope hash.

## Authoring notes (where the mathematics actually needed work)

- **Spectrum nonemptiness (item 8) and the radius formula (item 12)** are the
  full-AC items. Nonemptiness scalarises the resolvent with bounded functionals,
  applies Liouville, and separates the vector `R(0,a) ≠ 0` from zero by
  Hahn–Banach. The radius formula resolves `h(z) = (1-za)^{-1}` as a holomorphic
  `A`-valued map on the disc `|z| < 1/r(a)`, identifies the Taylor coefficients
  `φ(a^n)` by the Cauchy formula on a small circle with the monomial integrals,
  estimates them on the circle of radius `1/R`, and finishes with the
  submultiplicative root-limit lemma in both directions.
- **Complexification (item 13)** carries the full rotation-supremum norm
  computation, the same-norm extension of real operators, and the bounded
  canonical comparison between compatible models (norms at most 2), with
  isometry only in the equal-norm case — exactly the qualification the coverage
  requires from Exercise 5.4.
- **Admissible cycles (item 19)** are constructed locally: a compact grid union
  of cells inside `U`, the boundary cycle after cancelling internal edges, a
  cell-level index computation (argument increment inside a cell, Goursat
  outside), continuity/local constancy to extend the index to the whole cell
  union, and a nested pair obtained by placing a second grid union inside the
  index-one region of the first. This is the amendment-required local proof; no
  source is cited for existence.
- **The calculus (items 20–23)** is built only after contour/germ independence:
  the unit and coordinate laws are computed from the Neumann expansion and the
  monomial integrals; multiplicativity uses the nested pair, the resolvent
  identity, the scalar Cauchy formula, the vanishing of the second Cauchy
  integral by the homology form of Cauchy's theorem, and the two-dimensional
  mesh estimate for the iterated integral; spectral mapping factors
  `f(z) - f(λ)` through the filled difference quotient; composition is the
  B&S (5.34) computation with an outer cycle around the compact image `f(K)`.
- **The choice ledger is explicit** in every statement and contract: full AC for
  items 8, 9, 12, 15, 18, 20–25, and the Calkin/Atkinson pair; Countable Choice
  for the Calkin quotient, the approximate point spectrum and the boundary
  theorem; Dependent Choice only for the bounded-inverse step in the five-parts
  lemma. Choice-free arguments (Neumann series, openness of invertibles,
  polynomial spectral mapping, contour integrals, the grid construction) stay
  choice-free.

## Checks actually run (all on the current bytes)

| Check | Command | Result |
|---|---|---|
| Explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts items/<all 40>` | 29 proof-bearing items checked, 0 failing |
| Rendering | `node tools/rendercheck.mjs` | exit 0 (the only warnings this pair ever produced were 25 multi-line `$$` displays, all joined before this run) |
| Dependency check | `node tools/depcheck.mjs` | exit 0; one warning (`cited-not-in-deps` for the unit convention) fixed |
| Forward references | `node tools/fwdcheck.mjs --quiet` | 0 findings for this pair |
| External references | `node tools/extcheck.mjs` | 0 findings for this pair |
| Content policy (item mode) | `node tools/content-policy.mjs research/phase-2-remaining-27-batch-4.pages.json` | 0 errors for this pair (the 51 remaining errors are the sibling pair's unauthored items) |
| Manifest dependencies | `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-4.pages.json` | 91 items, 0 errors |
| Coverage checklist | `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-4.coverage.json --require-destination` | 2 pages, 102 rows, 0 errors |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (pre-splice state; 481 planned pages still have empty item lists) |
| Manifest integrity | `node tools/manifest-integrity.mjs --run phase-2-remaining-27` | 54/54 pages, no scope drift |
| Strict proof contract | `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-4.proof-contracts.json --strict` | 40/40 items, 0 errors, 0 warnings |
| Contract merge | `node tools/merge-proof-contracts.mjs --level phase-2-remaining-27 …` | merged 745 items over 12 batch files, no duplicate/out-of-scope error |
| Boundary audit | `node tools/boundary-audit.mjs … --fail-on-template --fail-on-contradicted` | 320 rows, 0 template clusters, 0 contradicted rows |
| Citation fidelity | `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | 181 citations, every quote found, no widening candidates |
| Finite smoke / risk report | `node tools/finite-smoke.mjs`, `node tools/risk-report.mjs` | 0 errors, 40 items routed; the merged file keeps finite-smoke live |
| Gate liveness | `node tools/gate-liveness.mjs --run phase-2-remaining-27 --contracts … --min-checks 1` | all four checks live |
| Step 3 decisions | `node tools/step3-decisions.mjs check --run … --phase final` | 0 work rows for this pair (40/40 accepted) |
| Auditor-created items | `node tools/step3-auditor-items.mjs certify --run …` | 18 items certified (none from this pair: all 40 are baseline scaffold items) |

No `--owner` flag, judge stamp, audit stamp or review decision was created. The
failure of `frontier-dependency-ledger refresh --require-reviewed` on this run is
caused by other batches' `open` rows; the five batch-4 rows (one page edge to
batch 3, four item edges to batch 2) are `verified` and unchanged by this
dispatch.

## Potentially defective published items (for the owner / ledger)

1. **`lem-grid-cycle-for-runge-approximation`, step 2.1** (published). Its
   argument asserts that "the four-edge continuous argument of `ζ-p` makes one
   positive turn when `p ∈ int Q`". The assertion is true, but as written it is
   a geometric sketch: the monotone variation of the argument along each side
   and the sector-sum `2π` are not proved. **Suspicion, not a confirmed
   defect**; the conclusion I need for this pair was re-proved locally in
   `lem-admissible-cycle-around-a-compact-plane-set` step 1.1, so the pair does
   not depend on that sketch. Confidence: moderate. Suggested repair:
   incorporate the perpendicular-foot/sector argument (or an equivalent)
   into the lemma.
2. **`def-approximate-unit-and-proper-c-star-morphism` and the FA-18 inventory**
   are not this pair's suppliers; they are listed here only because the sibling
   batch file still holds their rows. No finding.
3. No other published item read for this pair (61 distinct suppliers) was found
   defective; all hypotheses used were checked against the current statements,
   and the two source monographs back every statement of the pair through the
   coverage rows, which are unchanged and still fetch-verified
   (B&S sha256-16 `8ffd5f868b480006`, Shirbisheh `50372d5215737bfe`).

## Obligations carried to Step 4 / Step 5 (no unresolved mathematics)

1. **Coverage host change.** The coverage row "Shirbisheh Theorem 2.5.5
   composition rule" is disposed `inline` against
   `thm-holomorphic-functional-calculus-homomorphism`; the proof now lives in
   `thm-holomorphic-spectral-mapping` (the item whose machinery it needs) and is
   stated in both the item and the manifest. If Step 4 or 5 insists on the
   coverage host, the serial reconciler should update the row's `item` field
   rather than move the proof, because the statement's placement is forced by
   the source order.
2. **Boundary worksheets.** The 40 boundary worksheets are parameterised by the
   subject of each item; every axis that is genuinely exercised carries a
   step-anchored evidence string, and the remaining axes carry the
   item-specific reason that the axis does not arise. Step 4/5 readers should
   treat them as authored dispositions, not as a fixed template.
3. **No plan-spec splice was attempted** and no shared plan or prose file was
   edited; the two page files are new and expect the Step 4 splice to attach the
   31/9 item lists to plan orders 288.079/288.080.
4. **Cross-batch rows:** unchanged; no new cross-batch edge was introduced by
   this dispatch.

## Handoff

Completed IDs: all 31 A-page items and all 9 B-page items listed in
`research/phase-2-remaining-27-batch-4.pages.json` (pair
`banach-algebras-spectrum-and-holomorphic-functional-calculus`). Local suppliers
added: none beyond the scaffold (the three amendment helpers
`lem-submultiplicative-root-limit`,
`lem-admissible-cycle-around-a-compact-plane-set` and
`lem-canonical-banach-complexification-of-a-real-banach-space` were already
scaffolded and are now fully authored). Published concerns: item (1) above.
Open obligations: items (1)–(4) above, all bookkeeping.

## Per-item checkpoint (post-compaction record)

All forty entries below are: item file written at `items/<id>.md`, precheck
clean, facts linked only to declared suppliers, contract entry present in
`research/phase-2-remaining-27-batch-4.proof-contracts.json`, and a current
`accept` receipt at `research/phase-2-remaining-27-step3b-review-<id>.json`.

A page: `def-unital-banach-algebra`, `def-invertible-element-and-general-linear-group-of-a-banach-algebra`,
`lem-neumann-series`, `thm-invertible-group-is-open-and-inversion-is-continuous`,
`def-spectrum-and-resolvent-set-in-a-banach-algebra`, `lem-resolvent-identity`,
`thm-resolvent-is-banach-valued-holomorphic`, `thm-spectrum-is-nonempty-compact-and-norm-bounded`,
`def-spectral-radius`, `thm-polynomial-spectral-mapping`, `lem-submultiplicative-root-limit`,
`thm-spectral-radius-formula`, `lem-canonical-banach-complexification-of-a-real-banach-space`,
`def-complexification-and-spectrum-of-a-real-operator`, `thm-gelfand-mazur`,
`def-banach-algebra-valued-contour-integral`, `lem-contour-integral-commutes-with-bounded-linear-maps`,
`lem-banach-valued-cauchy-integral-vanishes`, `lem-admissible-cycle-around-a-compact-plane-set`,
`def-holomorphic-functional-calculus`, `lem-holomorphic-functional-calculus-is-contour-independent`,
`thm-holomorphic-functional-calculus-homomorphism`, `thm-holomorphic-spectral-mapping`,
`def-riesz-spectral-projection`, `thm-riesz-spectral-projection-properties`, `def-calkin-algebra`,
`cor-atkinson-in-calkin-algebra-language`, `def-point-continuous-and-residual-spectrum`,
`def-approximate-point-and-compression-spectrum`, `lem-relations-among-the-five-spectral-parts`,
`thm-boundary-of-spectrum-lies-in-approximate-point-spectrum`.

B page: `ex-continuous-functions-form-a-commutative-banach-algebra`,
`ex-bounded-operators-form-a-noncommutative-banach-algebra`, `ex-spectrum-in-a-finite-dimensional-matrix-algebra`,
`ex-spectrum-of-a-multiplication-operator`, `ex-spectrum-of-the-unilateral-shift`,
`cex-norm-need-not-equal-spectral-radius`, `cex-spectrum-can-shrink-in-a-larger-banach-algebra`,
`ex-unitization-of-a-nonunital-banach-algebra`, `ex-riesz-projection-for-a-matrix-with-separated-spectrum`.

Next action if this file is re-read after a compaction: no authoring remains for
this pair; verify the current bytes still match the receipts with
`node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final`,
and route only the four bookkeeping obligations above.
