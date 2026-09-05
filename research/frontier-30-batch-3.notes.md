# frontier-30 · Beta · batch-3 notes — `differentiation-of-monotone-functions-and-the-vitali-covering-theorem`

Run `frontier-30`, batch `3`, one A/B pair, category `measure-theory`.
Author: Beta. Session date: Saturday, September 5, 2026.

Artifacts owned by this dispatch:

- `research/frontier-30-batch-3.pages.json`
- `research/frontier-30-batch-3.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or `research/plan-spec.json`.

## 1. Control files and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-30-dispatch/beta-batch-3.prompt.md`, the seed
manifest `research/frontier-30-batch-3.pages.json`, the run scope ledger
`research/frontier-30-scope-ledger.json`, the run step-0 note
`research/frontier-30-step0-notes.md`, the cited design block in
`research/plan-measure-theory-track.md`, the live page entries in
`research/plan-spec.json`, the drift note
`research/frontier-30-alpha-step0-drift.md`, the drift evidence entry in
`research/frontier-30-drift-evidence.json`, and the live controller state from
disk.

Per `AGENTS.md`, I checked the live controller from disk rather than trusting
historical resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the live controller as **run `frontier-23` at stage `5-author`** on
  Saturday, September 5, 2026.

That state was recorded only as context. The explicit frontier-30 batch prompt
and the no-workflow-edits rule fix this dispatch to the three batch-3 files
above.

## 2. Design control and drift

The controlling design block is `research/plan-measure-theory-track.md` starting
at line `3384`, the full `MT-18` section including its B-page paragraph and the
trap notes.

Design-vs-spec comparison on the current bytes:

- The order agrees: both the design prompt and `research/plan-spec.json` give
  `288.035` for the A page and `288.036` for the B page.
- The prerequisites do not textually agree. The design lists `MT-17`, `MT-13`,
  `MT-6`, `monotone-functions-and-discontinuities`,
  `bounded-variation-and-riemann-stieltjes`,
  `the-derivative-and-mean-value-theorems`, and
  `cantor-set-baire-and-measure-zero`. The seed manifest and
  `research/plan-spec.json` give only
  `the-maximal-function-and-lebesgue-differentiation-examples`.
- I did not adjudicate that conflict locally. The batch follows the spec as
  instructed, and the notes preserve the disagreement for the run-wide drift
  machinery.

The existing drift note already records that the current declared closure reaches
the whole design list, so no local prerequisite repair was needed in the batch
manifest.

## 3. Scaffold shape and route decisions

The scaffold now carries:

- A page `differentiation-of-monotone-functions-and-the-vitali-covering-theorem`:
  `26` items
- B page `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples`:
  `7` items

No split is needed. The A page stays well below the `60`-item hard ceiling.

### Main route choices

I kept the page in six layers:

1. Dini derivatives and the derivative-convention seam
2. the rising-sun lemma and the continuous monotone route
3. jump functions, continuous-plus-jump decomposition, and the general rising-sun route
4. the Vitali covering theorem and the fine-cover null-set characterisation
5. the measure route, derivative-integrability inequality, and the AC/jump/singular-continuous decomposition
6. BV, term-by-term differentiation, the route-comparison remark, and the six false statements

Key decisions:

- I kept **both** monotone-a.e.-differentiability theorems as separate landmark
  scaffold items, one via the rising-sun route and one via the
  Lebesgue-Stieltjes / differentiation-of-measures route, because the design
  treats the comparison of their choice costs as part of the page's mathematical
  point.
- I scaffolded the **continuous monotone** rising-sun theorem separately. Tao's
  open source proves the continuous case directly, while the general monotone
  case genuinely needs the jump-function reduction.
- I made the **mini-Vitali statement** the fine-cover null-set characterisation
  the design explicitly singled out, not Thomson's or BBT's larger auxiliary
  `L/L*` packaging.
- I kept the **jump-function** definition as its own item because the later
  decomposition theorem and three B-page examples cite it by name.
- I did **not** re-mint `def-bounded-variation-and-total-variation`,
  `thm-jordan-decomposition-for-bv-functions`, or the published Takagi theorem.
  The notes and coverage record them as already published.

### Cantor-function convention check

The design trap says the Cantor function's non-differentiability set is exactly
the Cantor set. Under this library's derivative convention that is the **finite**
derivative statement of `def-derivative`, and on that reading the trap is
consistent with the standard digit-flip argument:

- off the Cantor set the function is locally constant, so the derivative is `0`
- on the Cantor set the finite derivative fails

I therefore kept that claim inside the B-page Cantor witness and used it to back
the false statement that monotone nondifferentiability sets need not be
countable.

## 4. Sources actually read

I harvested five independent sources for the A page:

1. `https://real.mtak.hu/214055/1/math_005_208-221.pdf`
   Frigyes Riesz, *Sur l’existence de la dérivée des fonctions monotones et sur
   quelques problèmes qui s’y rattachent*.
2. `https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf`
   Terence Tao, *An Introduction to Measure Theory*.
3. `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`
   Richard F. Bass, *Real Analysis for Graduate Students*, Version `5.0`.
4. `https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf`
   A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, *Real Analysis*, 2nd ed.
5. `https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf`
   Brian S. Thomson, *Vitali Coverings and Lebesgue’s Differentiation Theorem*.

This source set satisfies the standing requirements on the current bytes:

- Tao, Bass, and BBT are independent textbook-level treatments with harvestable
  tables of contents.
- Riesz `1932` is the eligible primary treatment for the rising-sun route.
- Thomson `2003/04` is the direct open-paper backing for the fine/full-cover
  formalism and the equivalence with the usual Vitali statement.

### What each source is doing

- **Riesz `1932`** backs the rising-sun lemma and the original continuous
  monotone differentiation proof, including the exact endpoint caveat.
- **Tao §1.6** backs the Dini-derivative setup, the one-sided maximal
  inequality, and the clean modern rising-sun proof route.
- **Bass ch. 14** backs the measure route, the derivative-integrability
  inequality, and the BV consequence.
- **BBT ch. 7** backs the Banach-Zarecki seam and the measure/function
  identification used in the AC/jump/singular-continuous decomposition.
- **Thomson `2003/04`** backs the fine/full-cover vocabulary and the Vitali
  theorem in the exact cover-language needed for the `rem-mini-vitali...`
  discharge.

## 5. URL handling and fetch receipts

The local shell runner is DNS-restricted in this checkout, so I could not
honestly run a fresh local `source-fetch-check --stamp` body download against
the live URLs.

I therefore used the two repository-approved receipt paths:

- reused exact existing `fetch_verified` blocks already present on disk for
  Bass and BBT
- wrote manual web-open receipts for Riesz `1932`, Tao's direct PDF URL, and
  Thomson `2003/04`, each of which I opened and read in the web reader on
  Saturday, September 5, 2026

I did not keep any harvested source row for a URL I had not re-opened.

## 6. Known limits and authoring risks

- The scaffold deliberately uses the **direct file URL** for Tao because that is
  the URL actually opened and read in this dispatch. The repo's older exact-byte
  receipt is for the WordPress upload wrapper, not this direct file URL, so I
  recorded a manual web-open receipt instead of copying a mismatched byte stamp.
- The **jump-function** theorem and the **general rising-sun** theorem are the
  most delicate authoring items in this batch. Their current scaffold strategies
  are mathematically coherent, but Step 5 will need to keep the reduction from
  general monotone to continuous monotone explicit and honest.
- The **right-continuous representative** seam in the measure route is a real
  proof obligation, not a prose aside. Step 5 should state exactly where the
  representative changes the function and why a countable exceptional set does
  not affect the almost-everywhere claim.
- The page stops at the **integral inequality**
  `∫ F' <= F(b)-F(a)` and records the strict Cantor witness on the B page.
  The full absolutely continuous equality theorem belongs to `MT-19` and is not
  silently imported here.

## 7. Validation

The following commands were run after writing the scaffold:

```bash
node tools/manifest-deps.mjs research/frontier-30-batch-*.pages.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node tools/coverage-checklist.mjs research/frontier-30-batch-3.coverage.json --require-destination
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-3.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
git diff --check -- research/frontier-30-batch-3.pages.json research/frontier-30-batch-3.coverage.json research/frontier-30-batch-3.notes.md
```

Results on Saturday, September 5, 2026:

- `node -e 'JSON.parse(...)'` on the two JSON artifacts: **pass**.
- `node tools/manifest-deps.mjs research/frontier-30-batch-*.pages.json`:
  **pass** — `manifest-deps: 670 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-3.pages.json`:
  **pass** — `33 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-30-batch-3.coverage.json --require-destination`:
  **pass** — `1` page, `39` harvested results, `0` errors, `0` warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-3.coverage.json`:
  **pass** — `5/5` sources fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  **pass** on the current unspliced plan, ending with `OK`; output still
  contains the repository's standing out-of-batch `redundant-prereq` advisories.
- `git diff --check -- ...`: **pass** — no whitespace or patch-shape defects.

## Step-5 authoring

Authoring completed on Friday, September 4, 2026 for the batch-owned files:

- A-page items:
  `def-four-dini-derivatives-at-a-point`,
  `thm-dini-derivatives-exist-are-ordered-and-detect-differentiability`,
  `rem-dini-derivatives-specialise-the-published-derivative`,
  `def-vitali-cover-and-fine-cover-on-the-line`,
  `thm-riesz-rising-sun-lemma`,
  `thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions`,
  `thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun`,
  `def-jump-function-of-an-increasing-function`,
  `thm-increasing-functions-split-uniquely-as-jump-plus-continuous`,
  `thm-jump-functions-have-derivative-zero-almost-everywhere`,
  `thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun`,
  `thm-vitali-covering-theorem-for-fine-covers-on-the-line`,
  `thm-mini-vitali-fine-cover-characterisation-of-null-sets`,
  `thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures`,
  `thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase`,
  `def-singular-function`,
  `thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous`,
  `thm-bv-functions-are-differentiable-almost-everywhere`,
  `thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions`,
  `rem-roydens-vitali-route-is-a-third-proof`,
  `fs-every-continuous-function-is-differentiable-almost-everywhere`,
  `fs-every-increasing-function-satisfies-newton-leibniz`,
  `fs-vitali-covering-theorem-holds-for-arbitrary-covers`,
  `fs-zero-derivative-almost-everywhere-implies-constancy`,
  `fs-bounded-variation-implies-absolute-continuity`,
  `fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points`
- B-page items:
  `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one`,
  `ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere`,
  `ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series`,
  `ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values`,
  `ex-jump-and-continuous-parts-of-x-plus-rational-jumps`,
  `cex-vitali-covering-theorem-needs-a-fine-cover`,
  `ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere`
- Page files:
  `library/measure-theory/differentiation-of-monotone-functions-and-the-vitali-covering-theorem.md`
  and
  `library/measure-theory/differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples.md`
- Proof-contract output:
  `research/frontier-30-batch-3.proof-contracts.json`

Provenance rationale on current bytes:

- The classical page spine items sourced directly from Riesz, Tao, Bass, BBT,
  and Thomson were tagged `literature-derived` for their statements and
  `ai-generated` for the local proofs.
- The page-level convention remarks were tagged `ai-altered` because they are
  library-specific explanatory seams built around source-backed mathematics
  already fixed in the surrounding theorem items.
- The explicitly minted local leaves that are not themselves reused as
  dependency targets were tagged `ai-generated` only where the schema permits
  it: the Dini-derivative computation example, the jump-plus-rational-jumps
  decomposition example, the Heaviside BV example, and the fine-cover
  counterexample.

Narrowed or dropped claims:

- None on current bytes. I kept both monotone-a.e.-differentiability routes,
  the concrete fine-cover Vitali theorem, the mini-Vitali null-set
  characterisation, the derivative-integral inequality, and the A/B page false
  statements that the scaffold called for.

Blockers:

- No batch-local authoring blocker remains.
- Diagnostic only: a full-repo `node tools/depcheck.mjs --quiet` run still
  reports pre-existing out-of-batch warnings and unrelated existing errors in
  legacy content outside this dispatch. I did not repair them because this
  batch is restricted to frontier-30 batch-3 authoring.

Checks actually run after authoring on current bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-3 item files...`
  — **pass**, `27 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-30-batch-3.pages.json`
  — **pass**, `33 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — **pass**, ending with `OK`; the output still includes the repository's
  standing out-of-batch `redundant-prereq` advisories.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-3.proof-contracts.json ...`
  — **pass**, `regenerated 27, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-30-batch-3.proof-contracts.json --strict`
  — **pass**, `0 error(s), 0 warning(s), 27/27 item(s) checked`.
- `git diff --check -- ...batch-3 authored files...`
  — **pass**.

Whole-run manifest policy status:

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  at the scaffold-pass snapshot **failed**, but the failing
  `batch-dependency-missing` errors were out of batch in the frontier-30
  batch-16 Lie-theory scaffold. The Step-3 fix-pass rerun recorded below now
  passes on current bytes.

Step-3-specific caveat on `validate-plan`:

- this is the standard **current unspliced plan** check against
  `research/plan-spec.json`
- it can confirm that the live plan remains consistent on current bytes
- it does **not** classify the new batch-3 item ids until Step 4 splices this
  manifest into the run plan

## 8. Step-3 scaffold pass

- Authored the full batch-3 scaffold in `research/frontier-30-batch-3.pages.json`.
- Added the required A-page harvest to
  `research/frontier-30-batch-3.coverage.json`, with independent treatments,
  exact locators, explicit dispositions, and fetch receipts on every source.
- Recorded design/spec drift, route choices, source handling, and validation
  caveats in this notes file.

## Step-3 fix pass

Finding id: `foreign-b-page-dep-ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values`

Disposition: accepted and retained on current bytes. I did not push back on the
group-`c` review finding in
`research/frontier-30-alpha-c-step3-scaffold-review.md`: the foreign
example-page dependency was a real closure defect and the current scaffold is
better without it.

Evidence: the review identified an illegal dependency from
`ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values`
to the published B-page item
`cor-x-sine-of-one-over-x-is-not-differentiable-at-zero`. On current bytes, the
example's `deps` array contains only
`def-four-dini-derivatives-at-a-point`,
`def-pi-via-first-positive-cosine-zero`,
`thm-quarter-turn-values-and-shift-formulas`, and
`thm-sine-cosine-zero-sets-and-fundamental-period`; a direct manifest scan found
`0` remaining references to
`cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` in
`research/frontier-30-batch-3.pages.json`. I also re-opened all five recorded
coverage URLs in the web reader on Saturday, September 5, 2026 while checking
that no coverage rewrite was needed for this fix pass.

Changed scaffold record: `research/frontier-30-batch-3.pages.json`, B-page item
`ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values`,
`deps`.

Validation rerun on Saturday, September 5, 2026:

- `node tools/coverage-checklist.mjs research/frontier-30-batch-3.coverage.json --require-destination`
  **pass** — `coverage-checklist: 1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  **pass** — `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-3.pages.json`
  **pass** — `content-policy: 33 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  **pass** on the current unspliced plan, ending in the standard `OK` line;
  the output still carries only the repository's standing
  `redundant-prereq` advisories.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-3.coverage.json`
  **pass** — `source-fetch-check: 5/5 source(s) fetch-verified`.
- `git diff --check -- research/frontier-30-batch-3.pages.json research/frontier-30-batch-3.coverage.json research/frontier-30-batch-3.notes.md`
  **pass** — no whitespace or patch-shape defects.
