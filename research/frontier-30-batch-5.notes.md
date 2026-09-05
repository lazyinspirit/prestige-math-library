# frontier-30 · Beta · batch-5 notes — `independence-borel-cantelli-and-zero-one-laws`

Run `frontier-30`, batch `5`, one A/B pair, category `probability`.
Author: Beta. Session date: Friday, September 4, 2026.
Design section: `research/plan-probability-track.md:370`.

Artifacts owned by this batch:
`research/frontier-30-batch-5.pages.json`,
`research/frontier-30-batch-5.coverage.json`,
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
- `research/frontier-30-dispatch/beta-batch-5.prompt.md`
- the seed manifest `research/frontier-30-batch-5.pages.json`
- the controlling PT-2 block in `research/plan-probability-track.md`
- the live spec entry in `research/plan-spec.json`

Per `AGENTS.md`, I checked the live controller from disk rather than trusting
historical resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the live controller as **run `frontier-23` at stage `5-author`** on
  the current disk state.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-30-batch-5.pages.json research/frontier-30-dispatch/beta-batch-5.prompt.md`
  showed only older autopilot history and no batch-local workflow override.

I treated that as context to record, not as something to repair. The dispatch
scope for this turn remains the three batch-5 artifacts above.

## 2. Design control, drift, and live seams

### Controlling design block

The controlling design is the single PT-2 block beginning at
`research/plan-probability-track.md:370`.

### Page-level drift handling

- `research/frontier-30-alpha-step0-drift.md` records PT-2 as `VERDICT: no-drift`.
- The live spec and the seed manifest agree on the page orders `288.099` and
  `288.1`, title, category, and the declared page-level prerequisite
  `probability-spaces-random-variables-and-expectation-examples`.
- The design's `Requires` prose also names MT-1's pi-lambda / monotone-class
  machinery, MT-2's first Borel-Cantelli lemma, and the published finite
  independence items as mathematical background.

Per the dispatch, I left the manifest `requires` field on the live spec value
and used the broader design list only for item-level dependencies and notes.

### Live-corpus seam adjustments

Three design entries would have duplicated already-published mathematics if
copied verbatim into the manifest:

- the design's item 15 is weaker than the already-published
  `cor-variance-adds-for-pairwise-independent-random-variables`, so the new
  page cites that stronger published corollary instead of reminting an
  independence-only copy;
- the design's B-page parity example is already published as
  `ex-pairwise-independent-events-not-mutually-independent`; and
- the design's B-page zero-covariance counterexample is already published as
  `cex-uncorrelated-random-variables-need-not-be-independent`.

I therefore omitted those three design entries from the scaffold and recorded
their source support as `already-published` coverage rows.

One more design B item is intentionally **not** in the manifest:

- `ex-infinitely-many-successes-in-independent-trials` is explicitly described
  in the design as an orientation example that needs PT-3's countable product
  construction and must not become a PT-2 dependency.

Because scaffold manifests do not carry forward-reference metadata and the batch
contract requires dependency closure, I harvested the underlying source material
as a deferred PT-3 seam rather than forcing a dishonest dependency-free item
onto the PT-2 examples page.

## 3. Scaffold shape and route choices

The scaffold now has:

- `independence-borel-cantelli-and-zero-one-laws` (A): **22 items**
- `independence-borel-cantelli-and-zero-one-laws-examples` (B): **6 items**

The A page is well below the 60-item split ceiling, so no split is needed.

### Main route

I kept the page in five layers:

1. general independence for event classes, sigma-algebras, and random elements
2. pi-system and grouping criteria
3. product-joint-law and expectation-factorization consequences
4. Borel-Cantelli, including the pairwise-independent frequency theorem
5. tail sigma-algebras and Kolmogorov's zero-one law

Important local choices:

- The independence notion is quantified only over finite subfamilies, matching
  the design's warning not to smuggle in infinite products of real numbers.
- The pairwise-independent frequency theorem follows the design's exact route:
  indicators, variance control, Chebyshev, least threshold-crossing
  subsequences, first Borel-Cantelli on the subsequence, then interpolation.
- The zero-one law uses the design's finite-initial-versus-tail split, together
  with an explicit monotone-class closure step from finite initial
  sigma-algebras to the sigma-algebra they generate.
- PT-3 still owns countable independent-coordinate constructions. PT-2 uses
  them only as deferred source seams, not as hidden prerequisites.

## 4. Sources actually read

Formal harvest sources currently recorded in the coverage file:

1. `https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf`  
   Rick Durrett, *Probability: Theory and Examples*, 5th ed.
2. `https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf`  
   S. R. S. Varadhan, *Probability Theory*, Chapter 1
3. `https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf`  
   S. R. S. Varadhan, *Probability Theory*, Chapter 3

Why this stack is enough:

- Durrett is the textbook backbone and directly supplies the page's
  independence, product-law, factorization, the pairwise-independent
  Borel-Cantelli theorem, and now the opening Section 2.3 limsup / infinitely
  often definition needed by `def-limsup-and-infinitely-often-event`.
- Varadhan Chapter 1 remains the independent measure/product-law support for
  the expectation-factorization route.
- Varadhan Chapter 3 remains the independent second treatment for independence
  of random variables, the tail sigma-field, and Kolmogorov's zero-one law.

### Source-repair decisions

- Norris `pm.pdf` (design URL `pmall.pdf`): on Saturday, September 5, 2026 I
  rechecked the live lecture index `https://www.statslab.cam.ac.uk/~jrn10/Lectures/`,
  the direct `pm.pdf` URL, the design URL `pmall.pdf`, and archive/search
  fallbacks. The PDF is still readable in the web reader, but the batch
  liveness gate still treats `statslab.cam.ac.uk` as dead because `curl` fails
  TLS issuer validation there, and I did not verify a validator-usable
  same-document mirror or complete archive copy. I therefore removed the
  Cambridge citation from the batch coverage rather than leave a dead
  reader-facing URL on disk.
- Durrett: the design's printed pp. 67-75 read range stops before Theorem
  2.3.9, which the design itself needs for item 18. I therefore extended the
  verified read through Theorem 2.3.9 and recorded that explicitly in the
  locator. That same verified read also contains the opening Section 2.3
  paragraph on PDF pp. 74-75 defining `lim sup A_n`, `lim inf A_n`, and the
  `A_n i.o.` notation, so it cleanly replaces the orphaned support for
  `def-limsup-and-infinitely-often-event` without changing the item's claim
  constraint or destination.
- Varadhan: the design names the course landing page and contents sheet, but
  the mathematics actually read for PT-2 lives in the chapter PDFs. I cited
  those direct full-text URLs instead of the non-body landing page.

## 5. URL discipline and fetch receipts

I re-opened the three surviving recorded source URLs and the candidate Norris
recovery URLs in the web reader on Saturday, September 5, 2026.

- The repaired coverage now cites only URLs that are still recorded as live in
  the existing run liveness artifact, with the dead Cambridge citation removed.
- The surviving Durrett and Varadhan source rows already carried valid manual
  `fetch_verified` receipts, so `source-fetch-check --stamp` had nothing new to
  rewrite after the dead Cambridge row was removed.
- No current harvested result is attached to an unread or unverified URL.

## 6. Known limits and authoring risks

- The page-level `requires` field stays on the live spec value even though the
  design prose cites extra measure-theory background. The drift report already
  adjudicated that page-level question as `no-drift`; I did not reopen it here.
- The pairwise-independent frequency theorem now depends on two published
  finite-page seams: indicator/event independence equivalence and variance
  additivity for pairwise-independent finite families. Step 5 authoring must
  keep that seam explicit and not act as though PT-2 had authored those
  ingredients locally.
- The omitted duplicate examples are deliberate and should remain deliberate at
  authoring time. Summary prose may mention the already-published finite
  examples, but the batch must not mint second copies under new ids.
- The forward-oriented independent-trials example remains deferred to PT-3's
  product-space companion because that is where its missing countable-product
  witness will actually exist.

## 7. Validator results

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-30-batch-5.pages.json','utf8')); console.log('pages-json: ok')"`
- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-30-batch-5.coverage.json','utf8')); console.log('coverage-json: ok')"`
- `node tools/coverage-checklist.mjs research/frontier-30-batch-5.coverage.json --require-destination`
- `node tools/source-backing.mjs --coverage research/frontier-30-batch-5.coverage.json --liveness research/frontier-30-url-liveness.json`
- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-5.coverage.json --out /tmp/frontier-30-batch-5.url-liveness.json --recover --fail-on-dead`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-5.coverage.json --stamp`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-5.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `git diff --check -- research/frontier-30-batch-5.coverage.json research/frontier-30-batch-5.notes.md`

Results on the repaired batch bytes:

- `pages-json`: **pass** — `pages-json: ok`.
- `coverage-json`: **pass** — `coverage-json: ok`.
- `coverage-checklist`: **pass** — `coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s), 0 warning(s)`.
- `source-backing`: **pass** — `source-backing: 13 authored result(s) across 1 file(s), every one still backed by an openable source` against the existing run liveness artifact `research/frontier-30-url-liveness.json`.
- `url-sweep`: **fail in this workspace** — `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-30-batch-5.url-liveness.json`, with each failure reported as `curl: (6) Could not resolve host` for `sites.math.duke.edu` or `math.nyu.edu`. This is an environment-level DNS blocker in the shell liveness runner, not a content defect in the repaired coverage rows: all three surviving source URLs were reopened successfully in the web reader on Saturday, September 5, 2026.
- `source-fetch-check --stamp`: **pass** — `source-fetch-check: 3/3 source(s) fetch-verified (0 newly stamped)`.
- `content-policy --manifest-only`: **pass** — `content-policy: 28 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan`: **pass** — the command ended with `OK`; the printed diagnostics were the repository's standing run-wide `redundant-prereq` advisories rather than a batch-5 plan defect.
- `git diff --check`: **pass**.

## 8. Reharvest ledger

- Dead source: `https://www.statslab.cam.ac.uk/~jrn10/Lectures/pm.pdf` with
  design provenance `https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf`.
- Recovery/search: rechecked the Norris lecture index, the direct `pm.pdf`
  URL, the design URL `pmall.pdf`, and archive/search fallbacks on Saturday,
  September 5, 2026. I did not verify a validator-usable same-document mirror
  or a complete archive copy.
- Replacement: moved the orphaned definition support to Durrett, Section 2.3's
  opening limsup / liminf paragraph on PDF pp. 74-75, which explicitly carries
  the infinitely-often notation the manifest item needs.
- Affected result: `1.13 Borel-Cantelli lemmas` now supports
  `def-limsup-and-infinitely-often-event` via the Durrett source row instead of
  the removed Cambridge row.
- Changed claim constraint: none.

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-c-step3-scaffold-review.md` on Saturday,
September 5, 2026, together with the PT-2 design block at
`research/plan-probability-track.md:370-431`, the current batch-5 `pages` and
`coverage` files, and the current batch-5 rows in
`research/frontier-30-alpha-c-scope-decisions.json`.

- Finding ids for batch `5`: none recorded.
- Disposition: explicit no-op. I did not invent a scaffold repair because the
  PT-2 pair is marked `sufficient` in the alpha review, and that review's only
  concrete `Local repair` is the batch-3 foreign B-page dependency, not a
  batch-5 defect.
- Evidence: `research/frontier-30-alpha-c-step3-scaffold-review.md` marks
  `independence-borel-cantelli-and-zero-one-laws` as `sufficient` and states
  that "The only concrete Step-3 defect was the repaired foreign B-page
  dependency above"; the cited repair is to
  `research/frontier-30-batch-3.pages.json`.
- Evidence: the six batch-5 scope-decision rows in
  `research/frontier-30-alpha-c-scope-decisions.json` still resolve as
  `stands` on the current bytes: Durrett `2.1.4 Constructing Independent Random
  Variables` to PT-3, Durrett `Theorem 2.3.2` and `Theorem 2.3.4` to PT-4,
  Durrett `2.1.3 Sums of Independent Random Variables` and Varadhan formula
  `(3.2)` to PT-8, and Durrett `Theorem 2.3.8` to PT-6.
- Evidence: `node tools/coverage-checklist.mjs research/frontier-30-batch-5.coverage.json --require-destination`

## Step-5 authoring

Authoring completed on Saturday, September 5, 2026.

Authored page files:

- `library/probability/independence-borel-cantelli-and-zero-one-laws.md`
- `library/probability/independence-borel-cantelli-and-zero-one-laws-examples.md`

Authored item ids:

- A page: `def-independent-families-of-event-classes`, `def-independent-sigma-algebras-and-events`, `def-pairwise-independence`, `lem-independent-families-pass-to-subfamilies`, `lem-independent-events-remain-independent-under-complements`, `thm-pi-system-criterion-for-independent-sigma-algebras`, `thm-grouping-independent-sigma-algebras`, `def-independent-random-elements`, `thm-rectangle-criterion-for-independent-random-elements`, `cor-finite-random-variable-independence-agreement`, `lem-measurable-functions-preserve-independence`, `thm-independent-random-elements-have-product-joint-law`, `thm-factorization-of-expectations-for-independent-variables`, `cor-covariance-vanishes-under-independence`, `def-limsup-and-infinitely-often-event`, `cor-first-borel-cantelli-lemma-for-events`, `thm-pairwise-independent-borel-cantelli-frequency-law`, `cor-second-borel-cantelli-lemma-under-pairwise-independence`, `def-tail-sigma-algebra-of-a-sequence`, `lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra`, `thm-kolmogorov-zero-one-law`, `cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event`
- B page: `ex-independent-events-that-are-not-disjoint`, `ex-functions-of-disjoint-independent-coordinate-blocks`, `ex-borel-cantelli-eventually-no-large-deviations`, `ex-zero-one-law-for-convergence-of-a-random-series`, `cex-divergent-probability-sum-without-independence`, `cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs`

Provenance rationale actually used on disk:

- The independence, product-law, Borel-Cantelli, and zero-one-law spine is tagged `provenance.statement: literature-derived`. Those claims are standard source-backed material from the Durrett and Varadhan reads already recorded in `research/frontier-30-batch-5.coverage.json`.
- Their local proofs and verifications are tagged `provenance.proof: ai-generated`, because the proof text written here is fresh batch-local wording rather than a copied source proof.
- The six B-page witness items are tagged `provenance.statement: ai-generated`, `provenance.proof: ai-generated`, each with the required legal `generation.role` (`example` or `counterexample`). None of those generated statements is a dependency target.

Narrowed or dropped claims:

- No planned item id was dropped.
- I kept `thm-factorization-of-expectations-for-independent-variables` at real-valued measurable factors, with the signed case stated under per-factor integrability. That is the exact scope needed for `cor-covariance-vanishes-under-independence`, preserves the design's absolute-integrability checkpoint, and avoids claiming an unnecessary complex-valued extension in this batch.

Canonical precheck repair actually applied:

- The first focused precheck run failed on 21 of the 22 proof-bearing items with `untagged-steps`.
- I adopted the canonical repair the checker expects: every numbered proof or verification row was flattened to one physical paragraph line, and 7 items also adopted the checker's preferred phase numbering (`thm-pi-system-criterion-for-independent-sigma-algebras`, `cor-finite-random-variable-independence-agreement`, `thm-independent-random-elements-have-product-joint-law`, `thm-factorization-of-expectations-for-independent-variables`, `thm-pairwise-independent-borel-cantelli-frequency-law`, `thm-kolmogorov-zero-one-law`, `cex-divergent-probability-sum-without-independence`).
- No mathematical claim changed in that repair pass; it was proof-row shape and phase-order normalization only.

Validators run on the final authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-independent-families-pass-to-subfamilies.md ... items/cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs.md`
  - Result: `22 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Result: `OK`, with only the repository's standing `redundant-prereq` advisories
- `node tools/content-policy.mjs research/frontier-30-batch-5.pages.json`
  - Result: `content-policy: 28 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-5.proof-contracts.json ...`
  - Result: `research/frontier-30-batch-5.proof-contracts.json: regenerated 22, skipped 0`
- `node tools/proof-contract.mjs research/frontier-30-batch-5.proof-contracts.json --strict`
  - Result: `proof-contract: 0 error(s), 0 warning(s), 22/22 item(s) checked`
- `git diff --check -- items/... library/probability/independence-borel-cantelli-and-zero-one-laws*.md research/frontier-30-batch-5.proof-contracts.json`
  - Result: pass

Blockers:

- None inside the assigned batch scope after the canonical precheck repair and contract regeneration.
  returned `coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s),
  0 warning(s)`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  returned `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-5.coverage.json`
  returned `source-fetch-check: 3/3 source(s) fetch-verified`.
- Evidence: `node tools/validate-plan.mjs research/plan-spec.json` exited `0`
  and ended with `OK`; its printed diagnostics were only the standing
  repository-wide `redundant-prereq` advisories, with no batch-5 closure,
  cycle, forward-reference, B-page dependency, unresolved-id, or item-cap
  defect.
- Evidence: on Saturday, September 5, 2026 I re-opened the three recorded
  batch-5 source URLs in the web reader: Durrett's
  `https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf`, Varadhan Chapter 1
  at `https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf`, and Varadhan
  Chapter 3 at `https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf`.
- Changed scaffold record: no change to
  `research/frontier-30-batch-5.pages.json`.
- Changed scaffold record: no change to
  `research/frontier-30-batch-5.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-5.notes.md`.
