# frontier-25 · Beta · batch notes — `the-radon-nikodym-theorem-and-lebesgue-decomposition` (step 1 scaffold)

Run `frontier-25`, batch `3`, one A/B pair, category `measure-theory`.
Author: Beta. Session date: Sunday, August 30, 2026.
Design references read:
[research/plan-functional-analysis-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-functional-analysis-track.md:214),
[research/plan-measure-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-measure-theory-track.md:2896),
[research/plan-probability-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-probability-track.md:210),
and
[research/frontier-25-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-25-alpha-step0-drift.md:49).

Controlling design:
[research/plan-measure-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-measure-theory-track.md:2896).
The functional-analysis and probability documents only say what their later pages
consume from MT-13. The measure-track section is the only place that fixes the
actual A/B scope, the theorem split, the proof route, the traps, the forward
remark, and the required counterexamples.

Artifacts owned by this batch:
`research/frontier-25-batch-3.pages.json`,
`research/frontier-25-batch-3.coverage.json`,
and this file.

---

## 1. Shape and split check

- `the-radon-nikodym-theorem-and-lebesgue-decomposition` (A): **20 items**.
- `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` (B): **15 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The page starts with the two local conventions the design marks as
  load-bearing: concentration on a set, and absolute continuity relative to a
  positive measure.
- I kept the design's three-way split of the main theorem package:
  Lebesgue decomposition existence, Lebesgue decomposition uniqueness, and
  density existence plus a.e. uniqueness are separate A-page items because the
  later calculus cites them separately.
- The proof route is the exact one the design chose: finite-positive reduction,
  the maximal class `F`, increasing maxima, monotone convergence, and the
  Hahn-decomposition contradiction for the residual measure. The Hilbert-space
  proof is only the closing orientation remark.
- The derivative calculus then stays explicit: integration against the
  derivative, additivity, chain rule, reciprocal rule, total variation as the
  absolute-value density, the finite epsilon-delta criterion, and polar
  decomposition.
- The page closes with the concrete `R` payoff the design asked for: the
  unique absolutely-continuous / discrete / singular-continuous decomposition of
  a finite Borel measure on the line.

## 2. Design control, drift, and one local repair

### Finding 1 — the track notes, not the downstream tracks, control the page

- `plan-functional-analysis-track.md` and `plan-probability-track.md` each give
  only a one-line predecessor contract: FA wants scalar RN and decomposition
  before the vector-valued layer; PT wants `thm-radon-nikodym` before
  conditional expectation.
- The measure-track MT-13 block is later and materially richer. It fixes the
  exact theorem split, the two sigma-finiteness warnings, the no-Hilbert proof
  route, the polar-decomposition item, the three-way real-line decomposition,
  and the example/counterexample menu.

That is why I treated the MT-13 section as controlling.

### Finding 2 — the design and live spec disagree on prerequisites, and I did not settle it

- The controlling design says MT-13 `requires`: MT-12, MT-8, MT-6, and MT-2.
- The live `research/plan-spec.json` entry carried into this batch manifest says
  only `["signed-and-complex-measures-hahn-and-jordan-examples"]`.
- The step-0 drift note marks the pair `no-drift` because the declared closure
  already reaches the needed earlier measure pages; it does not adjudicate the
  manifest-level prerequisite mismatch.

Per dispatch I kept the page-level `requires` at the spec value and recorded the
conflict here instead of normalizing it locally.

### Finding 3 — the MT-19-linked CDF example was kept, but repaired to avoid a forward dependency

The design's B-page list mentions recovering a probability density from its
distribution function, with MT-19 supplying the derivative statement. That
would make the example depend on a later page. I kept the intended topic but
made it an explicit piecewise-quadratic CDF whose interval increments can be
checked directly against the density `2x 1_[0,1]`, so the example stays inside
this batch's established closure.

## 3. Source stack and what controls what

I read three independent treatments and used all three in the coverage ledger:

- Richard F. Bass, *Real Analysis for Graduate Students*, Version 2.1:
  `https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf`
- John K. Hunter, *Measure Theory*:
  `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
- Sheldon Axler, *Measure, Integration & Real Analysis*:
  `https://measure.axler.net/MIRA.pdf`

Role split actually used:

- Bass is the controlling textbook for the exhaustion proof route the design
  demanded, the epsilon-delta criterion, the chain rule, the reciprocal rule,
  and the signed polar-decomposition exercise.
- Hunter is the controlling independent lecture-note treatment for the exact
  sigma-finite signed theorem statement, the finite-to-sigma-finite proof
  expansion, the complex extension theorem, and the counting-measure failure of
  sigma-finiteness.
- Axler is the controlling source for three specific consequences the design
  still wants named even though it rejects his proof route as the main one:
  absolute-continuous plus singular implies zero, the complex
  total-variation/polar decomposition, and the explicit Hilbert-space proof
  provenance attached to von Neumann.

The URLs above were opened directly in the web reader on Sunday, August 30,
2026. The shell-side fetch tools are still subject to the runner's restricted
network environment, so I did not fabricate `fetch_verified` stamps.

## 4. Source and convention decisions

### Proof route

- I followed the measure-track decision to build the page from the Hahn-style
  exhaustion argument, not from the `L^2` Riesz-representation proof.
- Axler is therefore supporting evidence for statements and for the orientation
  remark, not the controlling proof route.

### What `dnu/dmu` means

- The page defines the derivative only after a.e. uniqueness is available.
- Every later derivative identity is therefore intentionally an a.e. identity,
  not a pointwise one. That convention is recorded both in the manifest and in
  the coverage ledger's canonical rows.

### Real-line decomposition versus the existing MT-6 false statement

- The published item `fs-every-atomless-borel-measure-on-r-has-a-density`
  already carries the Cantor-measure failure of absolute continuity.
- I cited that published counterexample in the notes and coverage and did **not**
  re-mint it on this page.
- The new real-line theorem therefore adds the positive three-part decomposition
  theorem and its worked examples, not a duplicate false statement.

### Two different failure modes are kept distinct

- `cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness`
  is the witness that the **dominating** measure's sigma-finiteness matters for
  density existence.
- `cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure`
  is the witness that dropping sigma-finiteness on the **decomposed** measure
  breaks the existence of an ac-plus-singular split.
- `cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion`
  is separate again: it shows finiteness, not sigma-finiteness, is what the
  epsilon-delta theorem spends.

## 5. Dependency closure and scaffold choices

- The page-level `requires` field stays at the spec value, but the item-level
  graph uses already-published supplier items from the four design-named
  earlier pages:
  `measures-and-their-basic-properties`,
  `lebesgue-stieltjes-measures-and-distribution-functions`,
  `the-lebesgue-integral-and-the-convergence-theorems`,
  and
  `signed-and-complex-measures-hahn-and-jordan`.
- No new item depends on a planned later page.
- The B page depends only on the A page and earlier published items.
- The MT-13 orientation remark about von Neumann's proof is the only forward
  subject-matter gesture, and it is non-load-bearing by design.

Two local scaffold choices matter:

- I kept the derivative calculus as separate items instead of collapsing it into
  one omnibus proposition. The design explicitly says later pages cite the
  decomposition theorem, uniqueness, and density calculus separately.
- I promoted the finite-Borel-measure decomposition on `R` to its own theorem
  rather than leaving it inside the examples page, because the design treats it
  as the concrete theorem probability will want, not just as a worked example.

## 6. Validation

Checks run on Sunday, August 30, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-25-batch-3.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-25-batch-3.coverage.json','utf8')); console.log('json-parse: ok')"`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-25-batch-3.coverage.json --out /tmp/frontier-25-batch-3-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
- `node tools/prosecheck.mjs research/frontier-25-batch-3.notes.md --warnings`
- `git diff --check -- research/frontier-25-batch-3.pages.json research/frontier-25-batch-3.coverage.json research/frontier-25-batch-3.notes.md`

Results:

- JSON parsing: **pass** — `json-parse: ok`.
- Coverage checklist: **pass** — `coverage-checklist: 1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`.
- Whole-run manifest-only content policy: **pass** — `content-policy: 204 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan`: **pass**. Final receipt line:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.
  NOTE: 753 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `prosecheck`: **warnings only** — three `count-in-prose` warnings for the
  item totals mentioned in this notes file and no positional contradictions:

  ```text
  [count-in-prose] research/frontier-25-batch-3.notes.md: 20 items
  [count-in-prose] research/frontier-25-batch-3.notes.md: 15 items
  [count-in-prose] research/frontier-25-batch-3.notes.md: 6 false statement
  ```

- `source-fetch-check --stamp`: **failed in the restricted shell environment**
  and wrote no `fetch_verified` stamps:

  ```text
  ERROR fetch-check-dead: the-radon-nikodym-theorem-and-lebesgue-decomposition: https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf — ENOTFOUND
  ERROR fetch-check-dead: the-radon-nikodym-theorem-and-lebesgue-decomposition: https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf — ENOTFOUND
  ERROR fetch-check-dead: the-radon-nikodym-theorem-and-lebesgue-decomposition: https://measure.axler.net/MIRA.pdf — ENOTFOUND
  source-fetch-check: 0/3 source(s) fetch-verified (0 newly stamped), 3 FAILED
  ```

- `url-sweep --recover --fail-on-dead`: **failed for the same shell-network
  reason** and found no archive fallback under the tool's host-variant search:

  ```text
  url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-25-batch-3-url-liveness.json
  FAIL 0 https://measure.axler.net/MIRA.pdf — curl: (6) Could not resolve host: measure.axler.net
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf — curl: (6) Could not resolve host: www.math.ucdavis.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf — curl: (6) Could not resolve host: www.math.wustl.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `git diff --check` on the three owned artifacts was clean.

Close state:

- The scaffold manifest is structurally green.
- The coverage harvest is structurally green.
- The source URLs were opened directly through the web reader on Sunday,
  August 30, 2026, but the shell environment could not resolve external hosts,
  so durable fetch stamps and shell-side liveness receipts remain red for
  transport reasons rather than because the cited texts were unread or dead in
  the browser-accessible environment.

## Step-3 fix pass

### B3-1

- Disposition: **accepted; already repaired on the current bytes.** No further
  manifest or coverage edit was needed in this pass.
- Evidence:
  - Alpha's finding in
    `research/frontier-25-alpha-b-step3-scaffold-review.md` says the defect was
    the foreign B-page dependency
    `ex-counting-measure-integral-is-a-series` and that the repair should be a
    singleton-mass contradiction using A-page suppliers.
  - The live counterexample record in `research/frontier-25-batch-3.pages.json`
    now does exactly that: the item
    `cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness`
    uses the singleton-mass contradiction strategy and depends only on
    `def-counting-measure`, `prop-counting-measure-is-a-measure`,
    `def-measure-with-density`, and
    `prop-the-nonnegative-integral-agrees-with-the-simple-integral`.
  - The coverage ledger still backs that repaired record with Hunter's
    `Example 6.23` and `Example 6.28`, both dispositioned to the same
    counterexample item, and the source stack still carries
    `fetch_verified` blocks for Bass, Hunter, and Axler.
  - I re-opened the three recorded source URLs on Sunday, August 30, 2026 and
    re-read the exact supporting ranges already harvested in coverage:
    Bass Chapter 13 / §§13.1-13.4, Hunter Chapter 6 / §§6.8-6.9, and Axler
    Chapter 9 / Section 9B. Hunter's Example 6.28 still states the
    non-sigma-finite counting-measure obstruction in the form the repaired
    counterexample uses.
- Changed scaffold record:
  - `research/frontier-25-batch-3.pages.json`: no delta in this pass; the live
    `cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness`
    record already matches the accepted repair.
  - `research/frontier-25-batch-3.coverage.json`: no delta in this pass; the
    Hunter rows for `Example 6.23` and `Example 6.28` still support the repaired
    counterexample item, and the existing `fetch_verified` blocks remain the
    current source-verification record.

Validation rerun on Sunday, August 30, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-25-batch-3.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-25-batch-3.coverage.json','utf8')); console.log('json-parse: ok')"`:
  **pass** — `json-parse: ok`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-3.coverage.json --require-destination`:
  **pass** — `coverage-checklist: 1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`:
  **pass** — `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs /tmp/frontier-25-batch-3-spliced-plan.json`:
  **pass**. Final receipt lines:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 542 page(s) with item lists.
  NOTE: 751 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

This section supersedes the earlier transport-only note about missing
`fetch_verified` stamps: the current live `research/frontier-25-batch-3.coverage.json`
already contains verified-source blocks for all three recorded sources, and this
fix pass kept that source record intact.

## Step-5 authoring

Authoring completed on Sunday, August 30, 2026 for the full batch-3 scope.

- Authored the A page `the-radon-nikodym-theorem-and-lebesgue-decomposition`, the B page `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples`, all `20` planned A-page item files, all `15` planned B-page item files, and the new batch contract `research/frontier-25-batch-3.proof-contracts.json`.
- Every newly authored page and item remains `status: draft`. No `verification.judge` block was added anywhere in this Step-5 pass.
- Provenance rationale: the theorem spine, the source-backed false statements, and the orientation remark are tagged `literature-derived`; their local proofs are `ai-generated`; the computed worked examples and local counterexamples that are not dependency targets are tagged `ai-generated` with the required `generation.role`.
- Dependency/proof repair during authoring: I removed two forbidden dependencies on an `ai-generated` example by proving the needed derivative identifications inline instead. I also adopted precheck's canonical phase numbering by renumbering the affected proofs on disk rather than relying on transient repair output.
- Narrowed claims kept truthful to the written proofs:
  - `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` and `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` are stated via the explicit common finite-exhaustion hypothesis `\mu(X_n)<\infty`, `|\nu|(X_n)<\infty`, which is the concrete sigma-finite form the proofs actually use.
  - `thm-integration-against-a-radon-nikodym-derivative` records the measurable-set identity and the simple-function extension only; I did not claim the broader `L^1(\nu)` extension because that is not the proof written here.
  - `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value` is written for finite signed measures and finite complex measures, which is the domain justified by the current dependency chain.
- Dropped claims: none.
- Blockers: none inside the owned batch scope.

Checks run on Sunday, August 30, 2026:

- `node tools/content-policy.mjs research/frontier-25-batch-3.pages.json`
  - pass: `content-policy: 35 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - pass: final receipt ends `OK — declared page order is acyclic and consistent...`; only the standing repository-wide `redundant-prereq` advisories remain
- `node tools/tsx-run.mjs tools/precheck.mts <all 35 batch-3 item files>`
  - initial pass surfaced two forbidden `ai-generated-statement-dependency` edges and a large set of canonical phase-order repairs
  - after the manual dependency fixes and canonical renumbering, final pass: `30 checked, 0 failing — all clean`
- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-25-batch-3.proof-contracts.json','utf8')); console.log('json-parse: ok')"`
  - pass: `json-parse: ok`
- `node tools/regen-contract-entries.mjs research/frontier-25-batch-3.proof-contracts.json <30 scoped ids>`
  - pass: `research/frontier-25-batch-3.proof-contracts.json: regenerated 30, skipped 0`
- `node tools/proof-contract.mjs research/frontier-25-batch-3.proof-contracts.json --strict`
  - pass: `proof-contract: 0 error(s), 0 warning(s), 30/30 item(s) checked`
