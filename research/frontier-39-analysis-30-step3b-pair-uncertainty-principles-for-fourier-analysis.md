# Step 3b author — pair `uncertainty-principles-for-fourier-analysis`

- Run: `frontier-39-analysis-30`, dispatch label
  `step3b-pair-uncertainty-principles-for-fourier-analysis-3d3c4c99d9d353e3`
- A page: `uncertainty-principles-for-fourier-analysis` (batch 30, order
  510.06511, category `fourier-analysis`, 16 items)
- B page: `uncertainty-principles-for-fourier-analysis-examples` (batch 30,
  order 510.06512, 5 items)
- Role: alpha-high Step 3b author/auditor for this pair only. Own only this
  pair; preserve other pairs in shared batch files.
- Date opened: 2026-10-05.

## Owned IDs and entry obligations

Authoring order fixed by the dispatch (dependency level, then page order and
item id):

| # | Level | Item | Page | Status |
|---:|---:|---|---|---|
| 1 | 0 | `def-spatial-and-frequency-centres-and-variances` | A | done — accepted |
| 2 | 0 | `lem-compact-support-gives-an-entire-fourier-laplace-transform` | A | done — repaired (deps) |
| 3 | 0 | `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform` | A | done — repaired (statement + deps) |
| 4 | 0 | `lem-hardy-entire-growth-rigidity` | A | done — accepted |
| 5 | 0 | `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp` | A | done — repaired (statement + deps) |
| 6 | 0 | `lem-position-derivative-commutator-estimate` | A | done — repaired (deps) |
| 7 | 0 | `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero` | A | done — accepted |
| 8 | 0 | `thm-support-measure-uncertainty-inequality` | A | done — repaired (deps) |
| 9 | 1 | `cor-dimensional-heisenberg-uncertainty-inequality` | A | done — repaired (statement) |
| 10 | 1 | `lem-centering-by-translation-and-modulation-preserves-the-variance-product` | A | done — repaired (deps) |
| 11 | 1 | `thm-hardy-gaussian-uncertainty-principle` | A | done — repaired (deps) |
| 12 | 1 | `thm-qualitative-compact-support-uncertainty-principle` | A | done — repaired (deps) |
| 13 | 1 | `cex-finite-variance-is-not-the-same-as-compact-support` | B | done — repaired (deps) |
| 14 | 2 | `rem-heisenberg-uncertainty-is-owned-by-functional-analysis` | A | done — accepted |
| 15 | 2 | `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty` | A | done — accepted |
| 16 | 2 | `thm-finite-dft-support-product-uncertainty` | A | done — accepted (FR-18 suppliers reconciled) |
| 17 | 2 | `ex-gaussian-attains-heisenberg-equality` | B | done — repaired (deps) |
| 18 | 2 | `ex-hardy-critical-and-subcritical-gaussian-regimes` | B | done — repaired (statement + deps) |
| 19 | 3 | `rem-uncertainty-principles-measure-different-notions-of-localisation` | A | done — accepted |
| 20 | 3 | `ex-finite-dft-delta-and-constant-extremisers` | B | done — accepted (FR-18 suppliers reconciled) |
| 21 | 4 | `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` | B | done — accepted (FR-18 suppliers reconciled) |

Entry obligations:

1. Author all 21 items above and both pages
   (`library/fourier-analysis/uncertainty-principles-for-fourier-analysis.md`,
   `library/fourier-analysis/uncertainty-principles-for-fourier-analysis-examples.md`).
2. **Unfinished in-run suppliers (flagged at entry).** The FR-18 pair
   `finite-fourier-analysis-and-the-fast-fourier-transform` (batch 28) is
   scaffold-only: `def-unitary-discrete-fourier-transform-on-z-mod-n`,
   `def-counting-inner-product-on-complex-functions-on-z-mod-n`,
   `lem-orthogonality-of-characters-on-a-finite-cyclic-group`,
   `thm-finite-parseval-and-plancherel` have no item files on disk. Consumers
   here: `thm-finite-dft-support-product-uncertainty` (uses the unitary
   transform and finite Parseval), `ex-finite-dft-delta-and-constant-extremisers`
   (uses the transform evaluations and character orthogonality), and
   `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` (uses
   invertibility/nonzero-transform). These three items are authored to the
   batch-28 scaffold clauses and their Step 3b decisions stay escalated until
   the suppliers and the actual proof uses are reconciled (see cross-batch
   rows in `research/frontier-39-analysis-30-batch-30.cross-batch-dependencies.json`).
3. Maintain `research/frontier-39-analysis-30-batch-30.pages.json` item
   metadata (deps/levels) unchanged unless a repair is genuinely required;
   register the two pages; add the batch proof-contract file; keep coverage
   intact; do not touch sibling batches.

## Checkpoint log

(updated after each item; see end of file for the final handoff record)

### Items 1–4 authored (2026-10-05)

- **1 `def-spatial-and-frequency-centres-and-variances`** (A, level 0) — written
  to the manifest statement; `## Definition` + `## Well-definedness` (Cauchy–
  Schwarz finiteness of both numerators; Plancherel for the nonzero
  normalisers). Checks: precheck n/a (no phase body), rendercheck OK,
  proof-layout 0 defects. Deps unchanged.
- **2 `lem-compact-support-gives-an-entire-fourier-laplace-transform`** (A,
  level 0) — proof by difference quotients and dominated convergence on the
  compact support; 6 steps, canonical numbering adopted from the precheck
  repair. Checks: precheck PASS, proof-layout 0 defects, rendercheck OK.
  **Dep repair:** added `thm-linearity-of-the-lebesgue-integral-on-l-one` and
  `thm-the-lebesgue-integral-respects-almost-everywhere-equality` (needed to
  identify the difference quotient with the integral of the quotient and to
  fix a representative). Manifest to be updated.
- **3 `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`** (A,
  level 0, local addition) — **scaffold repair:** the scaffold statement did
  not declare choice, but the sharp growth bound
  $|F(z)|\le Ca^{-n/2}e^{\pi|\operatorname{Im}z|^2/a}$ requires the Gaussian
  Lebesgue integral $\int e^{-\pi b|x|^2}dx=b^{-n/2}$, whose library route
  (`lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`,
  translation via `cor-c-one-change-of-variables-for-l-one-functions`) carries
  countable choice. The statement now begins "Assume countable choice"; deps
  repaired to `cor-c-one-change-of-variables-for-l-one-functions`,
  `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`,
  `lem-exponential-dominates-one-plus-x`, `thm-integral-triangle-inequality`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`,
  `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, and
  `def-countable-choice`; dropped `thm-gaussian-integral`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces` (not used; the
  published Gaussian identity does the work). 7 steps; precheck PASS,
  proof-layout 0 defects, rendercheck OK. Statement change ⇒ Step 3a scope
  receipt must be refreshed before item decisions are recorded.
- **4 `lem-hardy-entire-growth-rigidity`** (A, level 0) — Tao's sector
  Phragmén–Lindelöf proof, written out with both sectors (anchors the real
  axis and the negative real axis) and the $z\mapsto-z$ reflection for the
  lower half-plane; 7 steps; precheck PASS, proof-layout 0 defects, rendercheck
  OK. Deps unchanged from manifest. Source passages read this session: Tao's
  blog §1 (complex-variable proof) and the batch-30 coverage locators; the
  sector bounds and the $\tan\theta>\pi/(2a\delta)$ choice re-derived.

### Items 5–13 authored (2026-10-05)

- **5 `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`** (A,
  level 0) — statement repaired in two places: added the missing "Let $n\ge1$"
  (the Gaussian needs an ambient $\mathbb R^n$) and dropped the forward
  wikilink to item 11 (an earlier item must not be justified by a later one);
  the claim is unchanged. Deps: manifest's four plus
  `thm-exponential-is-strictly-increasing` (monotonicity of the exponential
  used for both bounds). 3 steps; precheck PASS, proof-layout 0 defects.
- **6 `lem-position-derivative-commutator-estimate`** (A, level 0) — slice-wise
  integration by parts plus completed-product Fubini; 3 steps; precheck PASS,
  proof-layout 0 defects. **Dep repair:** dropped the scaffold's
  `thm-product-rule` (that id is the finite-cardinality product rule, not the
  calculus rule) and `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`;
  added `def-directional-and-partial-derivatives`, `thm-algebra-of-derivatives`,
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
  `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`,
  `thm-tonelli-and-fubini-for-completed-product-measures` (the library's
  standard slicing route for $\lambda_n$).
- **7 `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero`** (A,
  level 0, local addition) — two-stage induction on the one-variable identity
  theorem; 6 steps, `proof_strategy: induction` with `[base]`, `[ih]`,
  `[discharge-induction]`; precheck PASS, proof-layout 0 defects. Deps
  unchanged.
- **8 `thm-support-measure-uncertainty-inequality`** (A, level 0) — Hölder on
  $E$ plus Plancherel and the $L^1$–Plancherel agreement; 3 steps; precheck
  PASS, proof-layout 0 defects. **Dep repair:** added `thm-riemann-lebesgue`
  (continuity asserted in the statement) and
  `thm-the-lebesgue-integral-respects-almost-everywhere-equality`.
- **9 `cor-dimensional-heisenberg-uncertainty-inequality`** (A, level 1) —
  coordinate inequality + Fourier differentiation + finite-tuple
  Cauchy–Schwarz; 3 steps; precheck PASS, proof-layout 0 defects. Statement
  repair: the final sentence no longer wikilinks the B-page-only published
  Heisenberg theorem (claim preserved, same wording otherwise).
- **10 `lem-centering-by-translation-and-modulation-preserves-the-variance-product`**
  (A, level 1) — spatial and frequency substitutions plus the transform laws;
  4 steps; precheck PASS, proof-layout 0 defects. **Deps:** manifest's eight plus
  `thm-l-one-l-two-agreement-of-fourier-transform` and
  `thm-the-lebesgue-integral-respects-almost-everywhere-equality`.
- **11 `thm-hardy-gaussian-uncertainty-principle`** (A, level 1) — the full
  Hardy theorem by induction on $n$: entire continuation, one-variable rigidity
  on slices, the separate-holomorphy vanishing lemma for the supercritical case
  and for the difference in the critical case, then uniqueness and the Gaussian
  transform to read off $f$; 8 steps, `proof_strategy: induction`; precheck
  PASS, proof-layout 0 defects. Deps: manifest's eight minus
  `prop-order-and-scalar-rules-for-the-nonnegative-integral` (not used).
- **12 `thm-qualitative-compact-support-uncertainty-principle`** (A, level 1) —
  entire continuation + nonempty open complement + real-box vanishing + $L^1$
  uniqueness; 5 steps; precheck PASS, proof-layout 0 defects. Deps: manifest's
  five plus `thm-heine-borel-rn` (compact subsets are closed, used to make the
  complement open).
- **13 `cex-finite-variance-is-not-the-same-as-compact-support`** (B, level 1)
  — the Gaussian has finite moments and zero means but is strictly positive
  together with its transform; 3 steps; precheck PASS, proof-layout 0 defects,
  content-policy clean for this item. Deps: manifest's five plus
  `cor-c-one-change-of-variables-for-l-one-functions` (reflection/oddness).

**Open obligations so far.** (a) The three FR-18 consumers (items 16, 20, 21)
are still to be authored against the batch-28 scaffold and their decisions will
be escalated. (b) Manifest statement/deps repairs for items 2, 3, 5, 6, 8, 9,
10, 11, 12, 13 must be applied together with the two pages, the batch proof
contracts, and a refreshed Step 3a scope receipt (item 3's statement gained the
countable-choice hypothesis). (c) The batch-30 notes' choice ledger must be
corrected for `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`
(AC$_\omega$ now declared; it was listed choice-free).

### Items 14–21 authored (2026-10-05, later session)

- **14 `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`** (A, level
  2) — remark recording ownership, hypothesis class (Schwartz, countable
  choice) and equality family of the published FA-23 Heisenberg theorem, with
  the local lemmas and corollary named as the page's route;
  `forward_refs: [ex-gaussian-attains-heisenberg-equality]`, closed by the
  companion page. 3 paragraphs; precheck n/a (no proof steps), rendercheck OK.
- **15 `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`**
  (A, level 2) — remark isolating the complex-analysis cost (sector estimate
  for the auxiliary $h_M$, Liouville, entire continuation) and the exact
  balance $ab=1$, and stating that no real-variable argument is substituted for
  the critical case. Precheck n/a, rendercheck OK.
- **16 `thm-finite-dft-support-product-uncertainty`** (A, level 2) — support
  product $|\operatorname{supp}f|\cdot|\operatorname{supp}\mathcal F_Nf|\ge N$
  for the unitary transform, by support nonemptiness (Parseval), the pointwise
  Cauchy–Schwarz bound and summation; $N=1$ treated as the equality case. 3
  steps; precheck PASS, proof-layout 0 defects.
- **17 `ex-gaussian-attains-heisenberg-equality`** (B, level 2) — Gaussian
  norms, zero means, $V_x=n/(4\pi a)$, $V_\xi=na/(4\pi)$, product
  $(n/4\pi)^2$; equality in the summed Heisenberg inequality and realisation of
  FA-23's family; 3 steps; precheck PASS.
- **18 `ex-hardy-critical-and-subcritical-gaussian-regimes`** (B, level 2) —
  **statement repaired**: independent $a,b>0$ (the scaffold's $b:=1/a$ made
  the "supercritical" regime empty) and the Gaussian obstruction in the
  supercritical range made explicit; three regimes tabulated against items 11
  and 5; 4 steps; precheck PASS.
- **19 `rem-uncertainty-principles-measure-different-notions-of-localisation`**
  (A, level 3) — remark comparing the variance, support-measure and
  Gaussian-decay principles, naming the separating example;
  `forward_refs: [cex-finite-variance-is-not-the-same-as-compact-support]`,
  closed by the companion page. Precheck n/a, rendercheck OK.
- **20 `ex-finite-dft-delta-and-constant-extremisers`** (B, level 3) — direct
  evaluations $\mathcal F_N\delta_0=N^{-1/2}\mathbf 1$,
  $\mathcal F_N\mathbf 1=N^{1/2}\delta_0$, both extreme supports and the $N=1$
  coincidence; 3 steps; precheck PASS.
- **21 `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one`**
  (B, level 4) — impossibility for $N>1$ from the product bound, attainment at
  $N=1$ by the delta, and the conclusion that the hypothesis $N>1$ is
  essential; 3 steps; precheck PASS.

**Pages.** Both pages written:
`library/fourier-analysis/uncertainty-principles-for-fourier-analysis.md`
(16 A items, reading order by dependency level) and
`…-uncertainty-principles-for-fourier-analysis-examples.md` (5 B leaves).
`fwdcheck` no longer reports the two forward-dangling rows: both declared
forward references resolve to the B page (order 510.06512, strictly later).

## Verification, checks and decisions (handoff record, 2026-10-05)

**Completed IDs (21/21).** All items in the table above; both pages; the batch
manifest; the batch proof contracts; the cross-batch input; the batch-30 notes
choice-ledger correction.

**Checks actually run (all on the current bytes):**

- `node tools/tsx-run.mjs tools/precheck.mts <21 item paths>` — 17 proof-bearing
  items PASS, 4 definition/remark items n/a; 0 failing.
- `node tools/rendercheck.mjs <21 items + 2 pages>` — OK, all math spans parse
  under KaTeX and both page frontmatters parse.
- `node tools/proof-layout.mjs <21 item paths>` — single batched run, 0
  defects.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-30.proof-contracts.json --strict`
  — 21/21 items, 0 errors, 0 warnings (133 citations, 75 step mappings, 168
  boundary rows).
- `node tools/tsx-run.mjs tools/author-check.mts frontier-39-analysis-30 30` —
  `ok: true` (precheck, rendercheck, content-policy-items, proof-contract all
  green; artifact `research/frontier-39-analysis-30-author-check-30.json`).
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` — no missing
  quotes; no widening candidates.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` —
  no contradicted and no templated rows (168 rows, 89 not-applicable, all
  item-specific).
- `node tools/finite-smoke.mjs` — 0 errors; `node tools/risk-report.mjs` —
  routing only, 0 errors.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-30.pages.json`
  — 21 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-30.pages.json`
  — 21 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — no finding for this pair (three findings are in other, still-open pairs).
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase final`
  — no open row among this pair's 21 items; 12 `repaired` + 9 `accept`
  decisions recorded with confidence 1 and examined dependency lists.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — refreshed; all 8 of this pair's cross-batch rows are `verified` with the
  exact supplier clause and consuming step named.
- `node tools/depcheck.mjs`, `node tools/fwdcheck.mjs --quiet` — no finding
  attributed to this pair (both exit nonzero on other pairs' published debt,
  reproduced without this pair's files).

**Added suppliers.** None. The two local additions (`lem-gaussian-decay-…`,
`lem-separately-holomorphic-…`) were already in the pre-author scaffold
inventory; no new IDs were created, so no auditor certification is needed.

**Published concerns (for the owner/reconciler, not repaired here).**

1. `thm-heisenberg-uncertainty-inequality` is published only on the B page
   `schwartz-space-and-the-plancherel-theorem-examples` (functional analysis),
   so the design's declared A-page supplier edge cannot be a `deps` edge
   (depcheck `b-leaf-content`). The pair works around this correctly
   (`cor-dimensional-heisenberg-…` proves the summed bound; the remark records
   ownership), but the design's stated prerequisite is unmet as written.
   Confidence: high (confirmed by depcheck and the page listing). Remedy: move
   the theorem to the FA A page (owner decision), or amend the design row.
2. The batch-30 design rows 52–55 misattribute support-measure/finite-DFT
   content to Sheagren. The Step 3a scope review re-read the sources and
   recorded the correct sourcing as Laugesen ch. 24 for the support-measure
   theorem and Tao §1 / Taylor §11 for the finite-DFT items (the batch-30
   manifest cites those for items 8, 16 and 20). Plan-prose repair, recorded for
   Step 4; the scope review already flagged it, and the item-level source rows
   were not changed by this authoring pass.

**Open obligations.** None within the authored pair. The three FR-18 consumers
(16, 20, 21) were authored against the batch-28 scaffold and are now
**reconciled**: the four suppliers are authored on disk with matching clauses
and all three item decisions are recorded as `accept`, so no escalation
remains. Any later edit to those suppliers, or to this pair's items, invalidates
the corresponding receipts and must be re-recorded. Independent mathematical
audit (Steps 5–8) has not yet happened; the decisions above assert authoring
completeness and gate cleanliness, not independent verification.

One **run-wide** obligation is visible but not this pair's to close:
`node tools/scope-decisions.mjs check --run frontier-39-analysis-30` reports
394 pending coverage-decline decisions across all 60 pages, of which 32 (group
`i`) belong to this pair's two pages — e.g.
`11c086ae3b47…` (Laugesen Prop. 24.1(a)), `19baffd6a66e…` (Cowling–Price
L²-Hardy), `39f3a8be1028…` (Benedicks), `fbccfe3fabee…` (Tao's prime-order
refinement). No `*-alpha-…-scope-decisions.json` file exists for this run yet;
the 32 rows are legitimate declines already confirmed by the Step 3a scope
review (out-of-scope or deferred to other Fourier/functional-analysis pages)
and are recorded in the batch-30 coverage and in
`research/frontier-39-analysis-30-step3a-review-uncertainty-principles-for-fourier-analysis.json`.
The receipts Alpha / the engine's `scope-decisions` repair owns the recording;
this pair does not own the group-scoped file and did not create it. Likewise
`splice-verify` currently fails run-wide because Step 4 has not yet spliced the
item lists into `research/plan-spec.json`; that gate is excluded from the
engine's Step 3b battery.
