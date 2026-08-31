# frontier-26 · Beta · batch notes — `the-lp-spaces-holder-minkowski-and-riesz-fischer` (step 1 scaffold)

Run `frontier-26`, batch `3`, one A/B pair, category `measure-theory`.
Author: Beta. Session date: Sunday, August 30, 2026.
Design references read:
[research/plan-complex-analysis-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-complex-analysis-track.md:160),
[research/plan-functional-analysis-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-functional-analysis-track.md:215),
[research/plan-measure-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-measure-theory-track.md:2993),
and
[research/frontier-26-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-26-alpha-step0-drift.md:49).

Controlling design:
[research/plan-measure-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-measure-theory-track.md:2993).
The complex-analysis row is only a downstream consumer note and the
functional-analysis row is only a predecessor contract. MT-14 is the only design
section that fixes the actual local scope: quotient-first conventions, the three
agreement seams, the Riesz-Fischer route, the inclusion ledger, the restricted
`0 < p < 1` block, the exact B-page witness menu, and the Banach-space wording
trap.

Artifacts owned by this batch:
`research/frontier-26-batch-3.pages.json`,
`research/frontier-26-batch-3.coverage.json`,
and this file.

---

## 1. Shape and split check

- `the-lp-spaces-holder-minkowski-and-riesz-fischer` (A): **33 items**.
- `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` (B): **19 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The page starts with the quotient-first definitions the design marks as
  non-negotiable: conjugate exponents, the essential supremum, the measurable
  function spaces, the null subspace, and the quotient definition of `L^p`.
- I kept the inequality spine separate: Holder, its equality case, generalized
  Holder, the `L^2` Cauchy-Schwarz corollary, Minkowski, and Minkowski's
  equality case. That matches the design's insistence that the endpoint Holder
  cases be treated honestly and that the equality cases not be buried.
- The three agreement seams the design says MT-14 owes are explicit A-page
  remarks: counting measure gives `ell^p`, finite counting measure recovers the
  published `R^n` `p`-norms, and the finite Holder/Minkowski/Cauchy-Schwarz
  statements are recorded as agreement rather than silently replaced.
- The space block then proves exactly what the design says later pages consume:
  vector-space structure, the null-subspace/seminorm kernel identification, the
  descended norm on the quotient, Riesz-Fischer completeness with the
  almost-everywhere subsequence clause, convergence in measure, the finite- and
  counting-measure inclusion laws, Lyapunov interpolation, the `p -> infinity`
  norm limit, and the `L^2` parallelogram law.
- The `0 < p < 1` range is held to the design's three-item cap: the functional is
  not a norm, the quotient carries a complete translation-invariant metric, and
  nonnegative functions satisfy the reverse inequality.
- The B page keeps the design's example family, but it avoids silent duplication
  of already-published claims. The power-family table, finite counting-space
  computation, essential-supremum witness, explicit `p -> infinity` limit, and
  `p = 1/2` failure witness are new. The typewriter phenomenon is carried by a
  new remark and false statement that cite the already-published typewriter
  items instead of cloning them.

## 2. Design control, drift, and one honest narrowing

The generated task requires that design-vs-spec disagreements be recorded here
and that `research/plan-spec.json` win locally if any appear.

### Finding 1 — the design scope and the spec prerequisite disagree in form, so the spec wins locally

- The live plan spec gives the A page the direct page prerequisite
  `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples`.
- The controlling MT-14 design section instead lists the finer-grained support
  it expects to be available in the closure: MT-8, MT-10, MT-2,
  `rn-as-a-normed-space`, `the-logarithm-and-general-powers`, `convexity`, and
  `metric-spaces`.
- I did **not** replace the spec's page-level `requires` entry. Per the batch
  contract, the spec wins locally. I realized the design's finer prerequisite
  ledger through item-level dependencies and recorded the mismatch here.
- The drift note at
  [research/frontier-26-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-26-alpha-step0-drift.md:49)
  already says those deeper prerequisites are in closure through the RN examples
  page, so there was no batch-local edge repair to apply.

### Finding 2 — one design sentence needed its standard hypothesis stated explicitly

- The MT-14 prose says `||f||_p -> ||f||_infinity` as `p -> infinity` whenever
  `f in L^r` for some finite `r`.
- Read literally, that is too loose: the standard argument needs `f` to be
  essentially bounded as well, and the design itself flags this as a theorem that
  should be handled honestly rather than by slogan.
- I therefore kept the intended comparison result but scaffolded the theorem as
  `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions`.
  That preserves the intended page content while keeping the claim source-backed
  and mathematically correct.

## 3. Source stack and support

Only the A page carries the harvest ledger; the B page is the leaf companion of
examples, counterexamples, and false statements.

### Source list

- Sheldon Axler, *Measure, Integration & Real Analysis*:
  `https://measure.axler.net/MIRA.pdf`
- John K. Hunter, *Measure Theory*:
  `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
- Richard L. Wheeden and Antoni Zygmund, *Measure and Integral: An Introduction
  to Real Analysis*:
  `https://djvu.online/file/u1gYJemR8hzMe`

This satisfies the standing source rule with two independent treatments and more
than one eligible primary source: Axler and Wheeden-Zygmund are textbooks, and
Hunter is an independent full lecture-note treatment with a harvestable table of
contents.

### Why these three

- Axler was the best direct quotient-first source I could read end-to-end in the
  browser-accessible environment. It cleanly supports the distinction between
  calligraphic `L^p` and quotient `L^p`, the descended norm, the normed-space
  statement, the subsequence corollary, and the Banach-space wording seam.
- Hunter is in the MT-14 source ledger and prints **Theorem 7.10
  (Riesz-Fischer theorem)** on the completeness result itself, which is exactly
  the naming the page needs.
- Wheeden-Zygmund is also in the MT-14 source ledger and is the source I used
  for the finite-measure inclusion law, the explicit `ell^p` section, and the
  `0 < p < 1` metric block.

### Source-backed scaffold decisions

- The quotient-first convention is supported directly by Axler's split between
  `L^p` functions and quotient classes, so the page does not flirt with a
  function-first fiction and patch it later.
- Hunter's `7.4` block and Corollary `7.11` support the exact completeness item
  and the subsequence by-product the design says downstream pages actually use.
- Wheeden-Zygmund's Chapter `8` makes the `0 < p < 1` block recoverable without
  widening the page into density and duality.
- Hunter `7.3` density and Wheeden-Zygmund's later sequence-space separability
  statements are recorded as `deferred` to `density-separability-and-convolution-in-lp`,
  not silently absorbed into MT-14.
- Wheeden-Zygmund's later theorem numbered `8.30` uses the name
  "Riesz-Fischer" for an orthonormal-system theorem rather than `L^p`
  completeness. I recorded that as an out-of-scope naming trap in the harvest so
  the page does not accidentally cite the wrong theorem under the right name.

## 4. Item-level choices and dependency rationale

- The page has one forward-looking remark only:
  `rem-lp-completeness-and-the-banach-property`. It is orientation-only, matching
  the MT-14 trap note, and the proof-bearing completeness theorem remains
  `thm-riesz-fischer-completeness-of-l-p`.
- I did **not** create a new copy of the typewriter example or of the already
  published `L^1` false statement. Instead the B page adds
  `rem-the-published-typewriter-sequence-shows-why-riesz-fischer-only-promises-a-subsequence`
  and
  `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere`,
  both of which cite the existing published typewriter items as witnesses.
- The B-page witness for "`||.||_p` is a norm on calligraphic `L^p`" is a nonzero
  function supported on a null set. That is the cleanest way to expose the
  kernel/separation defect without restating the same false statement in a second
  guise.
- The finite-measure and counting-measure inclusion laws are separate theorems,
  exactly because the design warns that they point in opposite directions and are
  frequently misquoted as one global inclusion.
- The counting-space `R^n` dictionary is kept as an example plus agreement
  remarks, not as a second construction of the finite-dimensional `p`-norms. That
  preserves the published `def-p-norms-on-rn` interface instead of re-minting it.

## 5. Validation

Checks run on Sunday, August 30, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-26-batch-3.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-26-batch-3.coverage.json','utf8')); console.log('json-parse: ok')"`
- `node tools/coverage-checklist.mjs research/frontier-26-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-26-batch-3.coverage.json --out /tmp/frontier-26-batch-3-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
- `node tools/prosecheck.mjs research/frontier-26-batch-3.notes.md --warnings`
- `git diff --check -- research/frontier-26-batch-3.pages.json research/frontier-26-batch-3.coverage.json research/frontier-26-batch-3.notes.md`

Results:

- JSON parsing: **pass** — `json-parse: ok`.
- Coverage checklist: **pass** — `coverage-checklist: 1 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)`.
- Whole-run manifest-only content policy: **pass** — `content-policy: 221 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan`: **pass**. Final receipt line:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.
  NOTE: 727 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `prosecheck`: **warnings only** — the remaining warnings are all
  `count-in-prose` warnings caused by the item totals and validator receipt
  numbers recorded in this file. It reported **no positional contradictions**
  against the live plan spec.

- `source-fetch-check --stamp`: **failed in the restricted shell environment**
  and wrote no `fetch_verified` stamps:

  ```text
  ERROR fetch-check-dead: the-lp-spaces-holder-minkowski-and-riesz-fischer: https://measure.axler.net/MIRA.pdf — ENOTFOUND
  ERROR fetch-check-dead: the-lp-spaces-holder-minkowski-and-riesz-fischer: https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf — ENOTFOUND
  ERROR fetch-check-dead: the-lp-spaces-holder-minkowski-and-riesz-fischer: https://djvu.online/file/u1gYJemR8hzMe — ENOTFOUND
  source-fetch-check: 0/3 source(s) fetch-verified (0 newly stamped), 3 FAILED
  ```

- `url-sweep --recover --fail-on-dead`: **failed for the same shell-network
  reason** and found no archive fallback under the tool's host-variant search:

  ```text
  url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-26-batch-3-url-liveness.json
  FAIL 0 https://djvu.online/file/u1gYJemR8hzMe — curl: (6) Could not resolve host: djvu.online
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://measure.axler.net/MIRA.pdf — curl: (6) Could not resolve host: measure.axler.net
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf — curl: (6) Could not resolve host: www.math.ucdavis.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

Close state:

- The scaffold manifest is structurally green.
- The coverage harvest is structurally green.
- The shell cannot resolve the external source hosts, so durable fetch stamps and
  shell-side liveness receipts remain red for transport reasons. The cited source
  texts were nevertheless opened and read through the web reader during this
  scaffold pass, so I kept the verified URLs and did **not** fabricate
  `fetch_verified` stamps or replace sources merely to satisfy a shell-DNS
  failure.

## Step-3 fix pass

- `B3-1` — applied as a coverage-local repair; no manifest pushback.
  Disposition: accepted. The alpha finding was that sixteen current A-page items
  lacked exact coverage carriers, not that the MT-14 scaffold had the wrong
  scope, order, or dependencies.
  Evidence: the post-patch manifest-to-coverage audit now returns `a_items: 33`,
  `covered: 33`, `missing: []`. The repair assigns exact Hunter/Axler/Wheeden-Zygmund
  carriers to the previously uncovered local definitions and source-backed
  theorem fragments, and extends the canonical list for the dictionary/agreement
  seams and the small source-synthesis bridges the design explicitly wants.
  URL verification: on Monday, August 31, 2026, I re-opened the recorded source
  URLs in the web reader and kept them unchanged:
  `https://measure.axler.net/MIRA.pdf`,
  `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`, and
  `https://djvu.online/file/u1gYJemR8hzMe`.
  Changed scaffold record: [research/frontier-26-batch-3.coverage.json](/Users/ianx/Projects/prestige-math-library/research/frontier-26-batch-3.coverage.json)
  only. New exact source rows now carry
  `def-conjugate-exponents`,
  `def-essential-supremum-with-respect-to-a-measure`,
  `def-null-subspace-of-almost-everywhere-zero-functions`,
  `thm-equality-case-in-holder-inequality`,
  `prop-essential-supremum-is-attained-as-the-least-essential-bound`,
  `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one`,
  `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class`,
  `cor-l-p-convergence-implies-convergence-in-measure`,
  `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions`,
  and
  `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one`.
  The expanded canonical list now carries
  `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities`,
  `thm-equality-case-in-minkowski-inequality`,
  `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem`,
  `thm-lyapunov-interpolation-inequality-for-l-p-norms`,
  `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm`,
  and
  `thm-parallelogram-law-in-l-two`.
  The manifest in [research/frontier-26-batch-3.pages.json](/Users/ianx/Projects/prestige-math-library/research/frontier-26-batch-3.pages.json)
  stands unchanged because the finding was carrier-local rather than structural.
  Validators: `coverage-checklist` now reports `1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`;
  whole-run manifest-only `content-policy` reports `441 scoped item(s), 0 error(s), 0 warning(s)`;
  `validate-plan` finishes with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.`;
  `prosecheck` remains warnings-only with `0 error(s), 6 warning(s)` and `OK — no positional claim contradicts the spec.`;
  `git diff --check` is clean.

## Step-5 authoring

Authoring date: Sunday, August 30, 2026.

Authored ids:

- Proof-row repairs for `thm-holder-inequality-for-integrals`,
  `thm-equality-case-in-holder-inequality`,
  `prop-essential-supremum-is-attained-as-the-least-essential-bound`,
  `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one`,
  `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class`,
  `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`,
  `thm-riesz-fischer-completeness-of-l-p`,
  `thm-minkowski-inequality-for-integrals`,
  `thm-ell-p-includes-into-ell-r-for-p-less-r`,
  `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric`,
  and `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership`.
- Source-section repair for `rem-ell-p-is-l-p-of-counting-measure` so batch-local
  fact contracts can quote the remark from a real `## Remark` section.
- New contract artifact `research/frontier-26-batch-3.proof-contracts.json`
  covering all 39 proof-bearing batch items.

Provenance rationale:

- I preserved every existing batch-local `provenance` tag. The Step-5 edits were
  proof-shape repairs, citation-synchronization repairs, and one remark-heading
  repair for a cited batch-local source section; they did not convert any
  literature-derived statement into an AI-generated one or change any claim's
  ownership story.
- The new contract file is evidence only. It mirrors the authored proofs on disk
  and does not alter any mathematical claim, dependency, or publication state.

Narrowed or dropped claims:

- None. The only mathematical tightening is that the example
  `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership`
  now explicitly cites the comparison-test fact in the divergence subcases it
  already used.

Blockers:

- None inside the owned batch scope.

Checks run on the Step-5 bytes:

- `node tools/tsx-run.mjs tools/precheck.mts <all 52 batch-3 items>`: pass,
  `39 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-26-batch-3.pages.json`:
  pass, `52 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass, final status
  `OK` with only the standing repository-wide `redundant-prereq` advisories.
- `node tools/proof-contract.mjs research/frontier-26-batch-3.proof-contracts.json --strict`:
  pass, `0 error(s), 2 warning(s), 39/39 item(s) checked`. The two warnings are
  advisory `shotgun-bracket` notices on
  `thm-equality-case-in-minkowski-inequality` and
  `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric`;
  no contract row is missing.
