# frontier-24 · Beta · batch notes — `signed-and-complex-measures-hahn-and-jordan` (step 1)

Run `frontier-24`, batch `4`, one A/B pair, category `measure-theory`.
Author: Beta. Session date: Saturday, August 29, 2026.
Design section read first: `research/plan-measure-theory-track.md` lines
2810-2890, covering the full MT-12 A/B block rather than only the first line
anchor inside it.

Artifacts owned by this batch:
`research/frontier-24-batch-4.pages.json`,
`research/frontier-24-batch-4.coverage.json`,
and this file.

---

## 1. Shape and split check

- `signed-and-complex-measures-hahn-and-jordan` (A): **28 items**.
- `signed-and-complex-measures-hahn-and-jordan-examples` (B): **15 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The A page follows the design's route literally: signed-measure conventions,
  positive/negative/null sets, the positive-set lemma, Hahn and Jordan
  decompositions, total variation, integration against signed/complex measures,
  the finite-total-variation normed-space package, completeness, and the real
  density case.
- The B page keeps the design's worked examples and its three main failure
  families close to the theorem chain: non-uniqueness of Hahn sets on null
  pieces, strict inequality `|nu(E)| < |nu|(E)`, and failure of finite
  partitions or finite additivity to control complex/signed variation.

## 2. Design-vs-spec drift that I did not settle

The design and the live spec disagree on prerequisites.

- The design names MT-8, MT-2, `series-and-nonnegative-tests`,
  `absolute-convergence-and-rearrangement`, and `rn-as-a-normed-space`.
- `research/plan-spec.json` gives this page only
  `["product-measures-and-the-fubini-tonelli-theorems-examples"]`.

Per dispatch I kept the manifest page-level `requires` at the spec value.

Important closure note: the predecessor page's live transitive closure already
reaches all of the design-named measure-theory pages, the real-series
rearrangement page, `rn-as-a-normed-space`, the sine/cosine and complex
exponential pages, and `field-extensions-and-the-complex-numbers`. So the
item-level dependency graph stays inside the current spec closure even though
the design spelled out several of those pages explicitly.

## 3. Source stack and what each source controls

I read three independent treatments:

- Richard F. Bass, *Real Analysis for Graduate Students*, Version 5.0:
  `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`
- John K. Hunter, *Measure Theory*:
  `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
- Sheldon Axler, *Measure, Integration & Real Analysis*:
  `https://measure.axler.net/MIRA.pdf`

Role split actually used:

- Bass is the controlling source for the extended-valued signed-measure
  convention, the strong null-set definition, the chapter-level Hahn/Jordan
  statements, and the signed-measure exercises on variation, extremal formulas,
  and the integral bound.
- Hunter is the controlling source for the positive-set lemma route and the
  exact "at most one infinite value" convention that the design flags as
  load-bearing. Hunter also supplies the density example in the sign-set form
  the design wants.
- Axler is the controlling source for the total-variation-as-a-measure proof,
  the Banach-space structure of finite-variation measures, and the complex
  density formula `|h dmu| = |h| dmu`.

The coverage harvest records the exact TOC and section/result locators that I
opened on Saturday, August 29, 2026.

## 4. Source and convention decisions

### Signed versus complex range conventions

- I kept the design's convention that a signed measure may take one infinite
  sign but not both, and that this is a real well-definedness constraint rather
  than style.
- I kept the design's convention that a complex measure is finite-valued by
  definition.
- Axler's Chapter 9 uses the word "real measure" only for finite-valued signed
  measures. I used Axler only for the finite-total-variation and complex parts
  of this page, not for the basic signed-measure definition.

### Null sets

- The page adopts the strong definition the design requires: `E` is null for a
  signed measure when every measurable subset of `E` has value `0`.
- I scaffolded the equivalence with `|nu|(E) = 0` as its own proposition so the
  Hahn uniqueness statement can honestly say "unique up to total-variation-null
  sets" without waiting for a later page.

### Total variation and simple functions

- I followed the design and defined total variation by **countable**
  measurable partitions from the start.
- The signed-case finite-partition collapse is proved on the A page from the
  Jordan decomposition.
- The complex failure of the finite-partition rule is kept for the B page as a
  separate counterexample, because the design explicitly warns that the
  literature often blurs the two cases.

### `L^1` notation

- The design writes `mathcal L^1`, but the published library already uses
  `L^1(mu)` in `def-l-one-of-a-measure`. I kept the library convention and
  define `L^1(nu) := L^1(|nu|)` in that notation to avoid introducing a second
  name for the same object.

## 5. A-page scaffold decisions

### Local bridge items I added on purpose

Two bridges are genuinely needed because the published measure pages stop just
short of them while this page's design needs them:

- `thm-l-one-functions-admit-dominated-complex-simple-approximations`
  gives the `L^1` simple-approximation theorem needed to define integration
  against a signed or complex measure without importing Radon-Nikodym early.
- `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation`
  is the complex-density analogue that makes the exact design example
  `dnu = e^{ix} d lambda` cheap and honest.

Both are page-local machinery, not enrichment padding.

### Hahn and Jordan proof route

- The positive-set lemma is its own item, exactly as the design requires.
- Hahn decomposition then uses that lemma, not a different proof spine, so the
  difficult step stays visible to later readers and auditors.
- Jordan decomposition is built from Hahn sets, and the page keeps the
  uniqueness clause explicit because the design wants that uniqueness to license
  the definite article in "the positive part" and "the negative part".

### Continuity and completeness

- The continuity-from-below/above theorem is placed **after** Jordan
  decomposition. That keeps its proof honest: the clean route is to apply the
  published positive-measure continuity theorems to `nu-plus` and `nu-minus`
  and subtract.
- Completeness of the finite-total-variation space follows Axler's direct
  Cauchy-on-each-set argument. I did not route it through any later functional
  analysis page or through Riesz representation.

## 6. B-page scaffold decisions

### Design anomaly repaired

The design's atomic `mathbb Z` example named weights `(-1)^k 2^{-k}` on all of
`mathbb Z`. That is not absolutely summable over negative integers and would not
define a finite-total-variation signed measure. I repaired the example to the
honest finite-variation version

`nu({k}) = (-1)^k 2^{-|k|}` on `mathbb Z`,

which keeps the intended alternating atomic phenomenon while making
`||nu|| = 3` a real finite computation.

### Why there are two complex examples

- `ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi` keeps the
  exact unimodular-density example the design named.
- `cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure`
  is a separate atomic witness because the design's A-page theorem needs the
  **finite-vs-countable supremum gap**, not merely a smooth density whose finite
  partitions fail to attain the supremum.

### False-statement choices

- I kept the three design-critical false statements:
  both infinities for a signed measure, absolute value versus total variation,
  and uniqueness from agreement on a generating pi-system.
- I also kept the two finite-partition / finite-additivity failures, because
  they are the clean B-page witnesses for the A-page variation conventions.

## 7. Dependency closure notes

- All direct external dependencies land on already-published pages inside the
  predecessor page's transitive closure.
- No item depends on a published B-page item.
- Same-page dependencies are strictly backward on both the A and B pages.
- The B page depends only on the A page and earlier items on itself.

The trig and complex-exponential examples are legal under the current spec
closure: the predecessor page already reaches
`sine-cosine-and-the-definition-of-pi`,
`the-complex-exponential-and-eulers-formula`, and
`field-extensions-and-the-complex-numbers`.

## 8. Validation

Checks run on Saturday, August 29, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-24-batch-4.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-24-batch-4.coverage.json','utf8')); console.log('json-parse: ok')"`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-4.coverage.json --require-destination`
- `node tools/content-policy.mjs research/frontier-24-batch-*.pages.json --manifest-only`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-4.coverage.json --stamp`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-4.coverage.json`
- `node tools/url-sweep.mjs --coverage research/frontier-24-batch-4.coverage.json --out /tmp/frontier-24-batch-4-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
- `node tools/prosecheck.mjs research/frontier-24-batch-4.notes.md --warnings`

Results:

- JSON parsing: **pass** — `json-parse: ok`.
- Coverage checklist: **pass** — `coverage-checklist: 1 page(s), 60 harvested result(s), 0 error(s), 0 warning(s)`.
- Whole-run manifest-only content policy: **pass** — `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`.
- Live `validate-plan`: **pass**. Final receipt line:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.
  ```

  The printed diagnostics before that were the repository's standing
  `redundant-prereq` notes outside batch 4.

- `source-fetch-check --stamp`: **runner-local DNS failure on all three sources**.
  Exact output:

  ```text
  ERROR fetch-check-dead: signed-and-complex-measures-hahn-and-jordan: https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf — ENOTFOUND
  ERROR fetch-check-dead: signed-and-complex-measures-hahn-and-jordan: https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf — ENOTFOUND
  ERROR fetch-check-dead: signed-and-complex-measures-hahn-and-jordan: https://measure.axler.net/MIRA.pdf — ENOTFOUND
  source-fetch-check: 0/3 source(s) fetch-verified (0 newly stamped), 3 FAILED
  ```

- Manual fetch receipts were then written from the actual web-opened PDFs read
  on Saturday, August 29, 2026. Those durable entries record `kind: pdf` and
  the observed page counts `480`, `93`, and `426` for Bass, Hunter, and Axler.
  The no-network gate then passed:

  ```text
  source-fetch-check: 3/3 source(s) fetch-verified
  ```

- `url-sweep`: **runner-local DNS failure on all three hosts**. Exact output:

  ```text
  url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-24-batch-4-url-liveness.json
  FAIL 0 https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf — curl: (6) Could not resolve host: draft-r-bass-scholar.media.uconn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://measure.axler.net/MIRA.pdf — curl: (6) Could not resolve host: measure.axler.net
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf — curl: (6) Could not resolve host: www.math.ucdavis.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

  I did **not** re-source on that basis. The same three current URLs were
  opened successfully through the web reader on Saturday, August 29, 2026 at
  the locators recorded in the coverage file, so the shell result is
  transport-local evidence, not evidence that the mathematical sources are
  dead or changed.

- `prosecheck`: **pass with heuristic warnings only** —

  ```text
  [count-in-prose] research/frontier-24-batch-4.notes.md: 28 items
  [count-in-prose] research/frontier-24-batch-4.notes.md: 15 items

  1 file(s) checked. 0 error(s), 2 warning(s).
    count-in-prose: 2

  OK — no positional claim contradicts the spec.
  ```

## 9. Expected scrutiny points

- The `L^1` approximation bridge and the complex-density bridge are the two new
  A-page lemmas/propositions that Alpha is most likely to audit for scope
  creep. I kept both because the page otherwise cannot define integration
  against complex measures honestly before the next Radon-Nikodym page.
- The repaired `mathbb Z` atomic example is a deliberate correction of a
  nonsummable design weight, not an expansion of scope.
- The complex finite-vs-countable partition counterexample is separate from the
  `e^{ix} d lambda` example for mathematical reasons, not because the examples
  page was padded.

## 10. Orchestrator fetch resolution

On Saturday, August 29, 2026, the network-enabled orchestrator ran
`source-fetch-check --stamp --force`, replacing all three manual receipts with
fresh mechanical content hashes: `3/3 source(s) fetch-verified (3 newly
stamped)`. It also reran `url-sweep --recover --fail-on-dead --timeout-ms 4000`,
which reported `3/3 live` with zero failures or suspects. The batch-4
transport-local blocker is resolved.

## Step-3 fix pass

- `research/frontier-24-alpha-c-step3-scaffold-review.md` assigns no finding
  id to batch `4`. The only explicit group-`c` finding is `C5-1`, which belongs
  to batch `5` and is therefore out of scope for this dispatch.
- Disposition: no batch-`4` scaffold defect to apply or push back on; the
  batch remains as reviewed in the `sufficient` verdict for
  `signed-and-complex-measures-hahn-and-jordan` in
  `research/frontier-24-alpha-c-step3-verdicts.json`.
- Evidence: `node tools/coverage-checklist.mjs research/frontier-24-batch-4.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 60 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` diagnostics
  outside batch `4`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-4.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`.
- Evidence: on Saturday, August 29, 2026, the recorded source URLs still opened
  live in the web reader as PDFs with page counts `480` (Bass), `93` (Hunter),
  and `426` (Axler), matching the coverage harvest's current source rows.
- Changed scaffold record: `research/frontier-24-batch-4.pages.json` unchanged;
  `research/frontier-24-batch-4.coverage.json` unchanged;
  `research/frontier-24-batch-4.notes.md` appended with this Step-3 fix-pass
  record.

## Step-5 authoring

- Authored A-page definitions:
  `def-signed-measure`,
  `def-positive-negative-and-null-sets-for-a-signed-measure`,
  `def-complex-measure`,
  `def-total-variation-of-a-signed-or-complex-measure`,
  `def-mutually-singular-measures`,
  `def-complex-simple-function`,
  `def-simple-integral-against-a-signed-or-complex-measure`,
  `def-integration-against-a-signed-or-complex-measure`,
  `def-the-space-of-finite-total-variation-signed-measures`.
- Authored A-page proof-bearing items:
  `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures`,
  `prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation`,
  `lem-finite-signed-measure-sets-have-only-finite-subset-values`,
  `prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity`,
  `lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass`,
  `thm-hahn-decomposition-for-signed-measures`,
  `thm-jordan-decomposition-for-signed-measures`,
  `thm-continuity-from-below-and-above-for-signed-measures`,
  `prop-jordan-parts-and-total-variation-formulas-for-signed-measures`,
  `thm-total-variation-of-a-complex-measure-is-finite`,
  `thm-total-variation-is-a-measure`,
  `prop-simple-integrals-are-bounded-by-total-variation`,
  `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals`,
  `thm-l-one-functions-admit-dominated-complex-simple-approximations`,
  `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`,
  `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation`,
  `thm-finite-total-variation-signed-measures-form-a-real-normed-space`,
  `thm-finite-total-variation-signed-measures-are-complete`,
  `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data`.
- Authored B-page examples, counterexamples, and false statements:
  `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition`,
  `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions`,
  `ex-an-atomic-signed-measure-on-z-has-total-variation-three`,
  `ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form`,
  `ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi`,
  `cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure`,
  `cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition`,
  `cex-total-variation-can-exceed-the-absolute-value-of-the-set-value`,
  `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation`,
  `fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity`,
  `fs-a-hahn-decomposition-is-unique`,
  `fs-total-variation-always-equals-the-absolute-value-of-the-set-value`,
  `fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure`,
  `fs-finite-values-and-finite-additivity-force-finite-total-variation`,
  `fs-finite-partitions-always-suffice-for-complex-total-variation`.
- Authored page files:
  `library/measure-theory/signed-and-complex-measures-hahn-and-jordan.md`,
  `library/measure-theory/signed-and-complex-measures-hahn-and-jordan-examples.md`.
- Authored contract artifact:
  `research/frontier-24-batch-4.proof-contracts.json` with `34` proof-bearing
  scope ids.

Provenance rationale actually used:

- Core signed-measure, Hahn/Jordan, total-variation, and density theorems were
  tagged `literature-derived` when they track the cited source statements
  directly, or `ai-altered` when the local statement bundled two source seams
  into one item or adapted the source statement to the library's exact
  conventions.
- Computed examples and counterexamples on this B page were tagged
  `ai-generated` with the required `generation.role`, and none of them is used
  as a dependency target.
- False statements were kept non-generated at statement level, per schema, and
  were written as local refutations of the exact missing-hypothesis failures the
  design called out.

Canonical proof-format repair actually applied:

- After the first full `precheck`, every proof-bearing item was mathematically
  present but many steps carried their justification bracket at the end of the
  step block instead of on the step's opening line. I normalized those proof
  rows into the checker's canonical phase format and then hand-rewrote the one
  remaining positive-set lemma proof block so the final stored step order
  passed without auto-repair.

Narrowed or dropped claims:

- No scaffolded item id was dropped.
- No A-page theorem was materially narrowed.
- The complex finite-vs-countable counterexample was written in the honest form
  that the countable-partition formulation is stronger because the finite
  partitions do not attain the countable value for the `e^{ix} d\lambda`
  example; I did not claim a separate proof of a strict global finite-supremum
  gap beyond what the written argument establishes.

Blockers:

- None at author close.

Checks rerun on the authored batch on Saturday, August 29, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-4 proof-bearing items...`
  -> `34 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-24-batch-4.pages.json`
  -> `content-policy: 43 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — declared page order is acyclic and consistent; no item-level cycles, forward ...`
  and the standing repository note about pages that still carry no item list
  outside this batch
- `node tools/proof-contract.mjs research/frontier-24-batch-4.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 34/34 item(s) checked`
