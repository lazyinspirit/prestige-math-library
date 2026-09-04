# frontier-29 · Beta · batch-6 notes — `probability-spaces-random-variables-and-expectation`

Run `frontier-29`, batch `6`, one A/B pair, category `probability`.
Author: Beta. Session date: Tuesday, September 1, 2026.
Design section: `research/plan-probability-track.md:296`.

Artifacts owned by this batch:
`research/frontier-29-batch-6.pages.json`,
`research/frontier-29-batch-6.coverage.json`,
and this file.

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or `research/plan-spec.json`.

---

## 1. Control files and live run context

I read:

- `AGENTS.md` from the repository-root instructions in the user prompt
- `CLAUDE.md`
- `README.md`
- `SCHEMA.md`
- `research/frontier-29-beta-6.task.md`
- the seed manifest `research/frontier-29-batch-6.pages.json`
- the controlling PT-1 block in `research/plan-probability-track.md`
- the live spec entry in `research/plan-spec.json`

Per `AGENTS.md`, I checked the live controller from disk rather than trusting
historical resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the live controller as **run `frontier-23` at stage `5-author`** on
  the current disk state.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-29-batch-6.pages.json research/frontier-29-beta-6.task.md`
  showed only older autopilot history and no batch-local workflow override.

I treated that as context to record, not as something to repair. The dispatch
scope for this turn remains the three batch-6 artifacts above.

## 2. Design control, drift, and live seams

### Controlling design block

The controlling design is the single PT-1 block beginning at
`research/plan-probability-track.md:296`. The B-page subheading later in that
same block is part of the same design text, not a competing redesign.

### Design-vs-spec drift I did not settle

There is real prerequisite drift:

- the PT-1 design names the two finite-probability pages and the measure-track
  pages `sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties`,
  `lebesgue-stieltjes-measures-and-distribution-functions`,
  `measurable-functions-and-simple-approximation`,
  `the-lebesgue-integral-and-the-convergence-theorems`,
  `product-measures-and-the-fubini-tonelli-theorems`, and
  `the-lp-spaces-holder-minkowski-and-riesz-fischer`
- the live `plan-spec.json` entry and the seed manifest give the single
  declared page-level prerequisite
  `tempered-distributions-and-the-fourier-transform-examples`

Per dispatch instructions I did **not** adjudicate that locally. I kept the
spec `requires` field unchanged in the manifest and used the broader design list
only for item-level dependencies and notes.

No order drift is present: the task file, seed manifest, and `plan-spec.json`
all agree on orders `288.097` and `288.098`.

### Live-corpus seam adjustments

Two design-proposed claims are already published on current disk and therefore
must not be re-minted under new ids:

- the measure page already owns `def-probability-measure`, whose statement
  includes “probability space” and “events”
- the measure page already owns `thm-doob-dynkin-lemma`

So the scaffold does **not** create
`def-probability-space-and-event` or
`thm-doob-dynkin-factorization-for-real-random-variables`.
Their source support remains visible in the coverage file as
`already-published` rows, and the page starts with the first genuinely new
probability-page item after those seams.

## 3. Scaffold shape and route choices

The scaffold now has:

- `probability-spaces-random-variables-and-expectation` (A): **30 items**
- `probability-spaces-random-variables-and-expectation-examples` (B): **11 items**

The A page is well below the 60-item split ceiling, so no split is needed.

### Main route

I kept the page in four layers:

1. measure-to-probability specialization and the finite/full-power-set
   agreement bridge
2. random elements, laws, distribution functions, expectation, and the
   change-of-variables formula
3. moments, variance/covariance, Jensen, Markov, Chebyshev, Holder,
   Cauchy-Schwarz, Lyapunov, and the second-moment bound
4. the Le Gall affine `L^2` prediction endpoint

Important local choices:

- The finite/general seam is explicit. Rather than saying “the finite case is a
  special case” and moving on, the scaffold keeps the exact theorem proving
  that the published finite model is the same thing as a probability measure on
  a finite full power set, with zero-weight outcomes retained.
- The expectation block is written around the actual live measure ids:
  expectation is defined through the published nonnegative and `L^1` integrals,
  and the almost-everywhere invariance is carried by its own page-local lemma
  before any `L^1`-class reasoning is used.
- The inequality cluster stays as probability corollaries even though the
  analytic suppliers already exist on the measure page. That matches the design:
  PT-1 should expose the standard probability statements, while the notes record
  explicitly that they are specializations and not rival measure-theory pages.
- `thm-normal-equations-for-best-affine-l2-prediction` stays on the A page.
  It is the densest proof on the batch, but it is a real endpoint the design
  added on purpose rather than padding. Its one-variable specialization is kept
  as a separate corollary instead of being buried in prose.

## 4. Sources actually read

Formal harvest sources recorded in the coverage file:

1. `https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf`  
   Rick Durrett, *Probability: Theory and Examples*, 5th ed.
2. `https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf`  
   S. R. S. Varadhan, *Probability Theory*, Chapter 1 of the course notes.
3. `https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf`  
   J. R. Norris, *Probability and Measure*.
4. `https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf`  
   Jean-Francois Le Gall, *Integration, Probabilities and Stochastic Processes*.

Why this stack is enough:

- Durrett is the textbook / primary-treatment backbone for the PT-1
  probability-space, distribution, expectation, and inequality material.
- Varadhan is the independent course-note treatment for the transformation,
  product-space, and expectation viewpoint that the design wants at the start
  of the track.
- Norris independently backs the measurable-function, distribution-function,
  expectation-by-law, Jensen, and Holder route in a compact single-note set.
- Le Gall is the enrichment source that materially changes PT-1 on current
  bytes: Bertrand's paradox, the Doob-Dynkin seam check, and the affine
  `L^2` predictor all come from this source.

### Source-role split

- Durrett carries the main PT-1 textbook progression through expectation and
  inequalities.
- Varadhan gives the cleanest source-side transformation and pushforward
  framing; I used the direct chapter PDF rather than the landing page because
  the actual full text read for PT-1 is the chapter itself.
- Norris supplies the compact “new measures from old” and Jensen/Holder
  treatment that keeps the law-of-the-unconscious-statistician and probability
  inequalities independently backed.
- Le Gall supplies the new probability-page density beyond the older design:
  probability-space conventions, Bertrand, the generated-sigma-field/Doob-Dynkin
  seam, moments/variance, and linear regression.

## 5. URL discipline and fetch receipts

I re-opened all four exact recorded URLs in the web reader on Tuesday,
September 1, 2026 and used only those live URLs in the coverage file.

Runner-local shell networking is unavailable in this workspace:

- direct Node fetches in `source-fetch-check` fail with DNS errors
- `url-sweep` likewise cannot resolve the hosts from the shell

So I could not honestly create shell-side byte-count / hash receipts for these
fresh URLs. Following the in-repo precedent already used by other batches, the
coverage file records **manual `fetch_verified` receipts** with:

- the exact URL
- the verification date
- the document kind
- the page count visible in the web reader
- a note stating that the local runner DNS failure blocked a shell-side stamp

That keeps the coverage truthful: every recorded source URL was fetch-verified
through the web reader, and no harvest row is left attached to a URL I did not
re-open.

## 6. Known limits and authoring risks

- The page-level `requires` field stays on the live spec value, but the item
  graph now cites real published suppliers from the finite-probability and
  measure-theory pages. That mismatch is recorded here for the later drift/edge
  machinery; I did not settle it inside the batch.
- The two obvious duplicate claims were deliberately not scaffolded:
  `def-probability-measure` and `thm-doob-dynkin-lemma` are already on disk.
  Step 5 should cite them in summary prose where needed rather than quietly
  recreating them under new ids.
- `thm-normal-equations-for-best-affine-l2-prediction` is the proof-density
  high point of the page. The scaffold keeps the design's exact statement,
  including predictor uniqueness a.s. and possible coefficient nonuniqueness
  when the covariance matrix is singular.
- No split is needed, no B item is a dependency target, and no forward
  references are required.

## 7. Validator results

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-29-batch-6.pages.json','utf8')); console.log('pages-json: ok')"`
  Result: **pass** — `pages-json: ok`.

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-29-batch-6.coverage.json','utf8')); console.log('coverage-json: ok')"`
  Result: **pass** — `coverage-json: ok`.

- `node tools/coverage-checklist.mjs research/frontier-29-batch-6.coverage.json --require-destination`
  Result: **pass** — `coverage-checklist: 1 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  Result: **pass** — `content-policy: 513 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass** — the validator ended with `OK`, and the printed diagnostics
  were the repository's standing run-wide `redundant-prereq` advisories rather
  than a batch-6 plan defect.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-6.coverage.json`
  Result: **pass** — `source-fetch-check: 4/4 source(s) fetch-verified`.

- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-6.coverage.json --out /tmp/frontier-29-batch-6-url-liveness.json --recover --fail-on-dead --timeout-ms 3000 --concurrency 1`
  Result: **environment blocker, not a source-specific dead-link pattern** —
  `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect`.
  Every failure was `curl: (6) Could not resolve host` on the exact recorded
  URLs:
  `https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf`,
  `https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf`,
  `https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf`,
  and
  `https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf`.
  The sweep wrote `/tmp/frontier-29-batch-6-url-liveness.json`.
  Because the same URLs were re-opened successfully in the web reader earlier
  in this batch, this is a runner-local DNS failure, not evidence that the
  cited documents are unavailable.

- `git diff --check -- research/frontier-29-batch-6.pages.json research/frontier-29-batch-6.coverage.json research/frontier-29-batch-6.notes.md`
  Result: **pass**.

## Step-3 fix pass

Fix pass run on Tuesday, September 1, 2026 (Australia/Sydney local time)
against the current batch-6 scaffold bytes and the stable review in
`research/frontier-29-alpha-c-step3-scaffold-review.md`.

- Finding ids: none issued for batch `6` in the group-`c` Step-3 review.
- Disposition: accepted as a no-op fix pass; I did not alter the batch-6
  manifest or coverage harvest.
- Evidence: the review records all six PT-1 decline rows as `stands`, states
  that no owned batch artifact required a mathematical or routing repair in
  Step 3, and marks
  `probability-spaces-random-variables-and-expectation` as `sufficient`.
- Changed scaffold record: `research/frontier-29-batch-6.notes.md` only.
  `research/frontier-29-batch-6.pages.json` and
  `research/frontier-29-batch-6.coverage.json` were rechecked unchanged, and
  the four recorded source URLs were re-opened successfully in the web reader,
  so no URL recovery, locator rewrite, harvest re-source, or disposition
  change was required.

Current validator evidence on the Step-3 fix-pass bytes:

## Step-5 authoring

Authoring completed on Tuesday, September 1, 2026 for the owned PT-1 pair:

- A page `probability-spaces-random-variables-and-expectation`
- B page `probability-spaces-random-variables-and-expectation-examples`

Batch-authored page files:

- `library/probability/probability-spaces-random-variables-and-expectation.md`
- `library/probability/probability-spaces-random-variables-and-expectation-examples.md`

Batch-authored item ids:

- A page: `lem-probability-measure-basic-identities`,
  `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`,
  `rem-finite-probability-space-definition-agreement`,
  `def-random-element-and-real-random-variable`,
  `lem-finite-random-variables-are-measurable`,
  `def-law-or-distribution-of-a-random-element`,
  `lem-law-of-a-random-element-is-a-probability-measure`,
  `lem-laws-commute-with-measurable-maps`,
  `def-cumulative-distribution-function-of-a-random-variable`,
  `thm-probability-law-and-distribution-function-correspondence`,
  `def-atom-and-continuity-point-of-a-law`,
  `def-expectation-of-a-nonnegative-or-integrable-random-variable`,
  `lem-expectation-is-independent-of-the-ae-representative`,
  `thm-change-of-variables-for-expectation`,
  `cor-expectation-agrees-with-the-finite-weighted-sum`,
  `cor-expectation-of-an-indicator-is-probability`,
  `cor-layer-cake-formulas-for-random-variables`,
  `cor-expectation-linearity-monotonicity-and-modulus-bound`,
  `def-moments-variance-and-covariance`,
  `lem-variance-and-covariance-identities-for-random-variables`,
  `thm-jensen-inequality-for-expectation`,
  `cor-markov-inequality-for-random-variables`,
  `cor-chebyshev-inequality-for-random-variables`,
  `cor-holder-inequality-for-random-variables`,
  `cor-cauchy-schwarz-for-random-variables`,
  `cor-lyapunov-moment-inequality-on-a-probability-space`,
  `cor-second-moment-positive-probability-bound`,
  `rem-general-inequalities-restrict-to-the-published-finite-ones`,
  `thm-normal-equations-for-best-affine-l2-prediction`,
  `cor-best-affine-predictor-from-one-random-variable`
- B page: `ex-countable-probability-space-with-geometric-weights`,
  `ex-uniform-random-variable-on-zero-one`,
  `ex-exponential-random-variable-from-its-tail`,
  `ex-discrete-continuous-and-mixed-distribution-functions`,
  `ex-expectation-under-a-measurable-transformation`,
  `ex-jensen-for-logarithm-and-exponential`,
  `ex-markov-and-chebyshev-sharpness`,
  `cex-a-random-variable-need-not-have-a-finite-expectation`,
  `cex-a-distribution-function-need-not-have-a-density`,
  `cex-equality-almost-surely-is-not-pointwise-equality`,
  `ex-bertrand-chord-paradox-is-a-model-specification-problem`

Proof-contract artifact authored:

- `research/frontier-29-batch-6.proof-contracts.json`

Provenance rationale:

- The A-page definitions, lemmas, theorems, and corollaries are source-backed by
  the four batch coverage texts and are tagged `literature-derived` or
  `ai-altered` according to whether the on-disk statement/proof is a direct
  source transcription or a library-specific specialization/assembly.
- The examples and counterexamples are mostly `ai-generated` with the required
  `generation.role`, because they are fresh witness constructions built inside
  the batch's sourced scope rather than copied source statements.
- `ex-bertrand-chord-paradox-is-a-model-specification-problem` is
  `literature-derived`, because the three-model comparison is an explicit
  source-carried example in Le Gall.

Narrowed or adjusted claims:

- `lem-expectation-is-independent-of-the-ae-representative` was narrowed to the
  integrable real/complex case. The full nonnegative extended-value version is
  true, but I did not claim it here without adding the extra truncation and
  monotone-convergence machinery needed to prove it honestly in the local item.
- `thm-probability-law-and-distribution-function-correspondence` states the
  Countable Choice hypothesis explicitly because the cited
  Lebesgue-Stieltjes supplier theorem on current disk carries that hypothesis,
  and I did not widen that dependency.

Dropped claims:

- none

Blockers:

- none

Checks actually run on the authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-6 items...`
  Result: pass after the canonical one-line/renumber repair implied by the
  normative precheck output; rerun finished `33 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-29-batch-6.pages.json`
  Result: `41 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK`, with only the repository's standing `redundant-prereq`
  advisories outside this batch.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-6.proof-contracts.json ...`
  Result: regenerated the batch contract entries from the authored facts/steps.
- `node tools/proof-contract.mjs research/frontier-29-batch-6.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 33/33 item(s) checked`.
- `git diff --check -- items/ library/probability/ research/frontier-29-batch-6.proof-contracts.json research/frontier-29-batch-6.notes.md`
  Result: pass.

- `node tools/coverage-checklist.mjs research/frontier-29-batch-6.coverage.json --require-destination`
  passed: `coverage-checklist: 1 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed: `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-6.coverage.json`
  passed: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` and ended in `OK`; it again emitted only the repository's
  standing out-of-batch `redundant-prereq` advisories, with no batch-6
  closure, cycle, forward-reference, B-page dependency, unresolved-id, or
  item-cap defect.
- `git diff --check -- research/frontier-29-batch-6.pages.json research/frontier-29-batch-6.coverage.json research/frontier-29-batch-6.notes.md`
  passed with no whitespace errors.
