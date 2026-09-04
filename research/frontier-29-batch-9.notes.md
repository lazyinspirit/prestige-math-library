# frontier-29 · Beta · batch-9 notes — `the-riemann-zeta-function`

Run `frontier-29`, batch `9`, one A/B pair, category `complex-analysis`.
Author: Beta. Session date: Wednesday, September 2, 2026 AEST.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-29-batch-9.pages.json`
- `research/frontier-29-batch-9.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or `proof-contracts`.

---

## 1. Control files read

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-29-dispatch/beta-batch-9.prompt.md`, the seed manifest
`research/frontier-29-batch-9.pages.json`, the controlling design block
`research/plan-complex-analysis-track.md:2850-2994`, the live plan entry in
`research/plan-spec.json`, and the preserved zeta scaffold/coverage artifacts
from `frontier-25`.

I also re-opened the two recorded source URLs through the web reader on
Wednesday, September 2, 2026 before copying their durable fetch receipts into
this batch's coverage ledger.

## 2. Design against spec

There is no live design-vs-spec conflict to adjudicate locally for this batch.

- The design's shorthand prerequisites `CA-21` and `CA-18` are the same pages
  the live spec now names explicitly as `the-gamma-function` and
  `mittag-leffler-and-runges-theorem`.
- Both design and spec now also name
  `primes-and-the-fundamental-theorem-of-arithmetic`,
  `schwartz-space-and-the-plancherel-theorem`, and
  `tempered-distributions-and-the-fourier-transform`.
- Order, page ids, companion id, title, and category also agree on current
  disk: `345/346`, `the-riemann-zeta-function`,
  `the-riemann-zeta-function-examples`, and `complex-analysis`.

## 3. Live closure note for the theta route

The design's trap note is still live on current disk: the preferred
theta/Mellin proof of the functional equation points to the Fourier-theoretic
Poisson-summation interface on FA-23 and FA-25.

Current-disk state on Wednesday, September 2, 2026:

- `research/plan-spec.json` still shows
  `schwartz-space-and-the-plancherel-theorem` and
  `tempered-distributions-and-the-fourier-transform` with `items: []`.
- There are still no corresponding authored page files under `library/`.
- So those prerequisite pages exist only as page-level placeholders, not as
  usable item suppliers.

I therefore kept `thm-jacobi-theta-transformation` as a local scaffold item in
the manifest instead of pretending those missing FA items already exist on
disk. This keeps the batch dependency-closed at scaffold level while preserving
the design's chosen route and recording the real authoring risk explicitly.

## 4. Scaffold shape

- `the-riemann-zeta-function` (A): **22 items**
- `the-riemann-zeta-function-examples` (B): **12 items**

The A page stays well below the `60`-item split threshold, so no split is
proposed.

## 5. Source set actually recorded

I recorded two independent verified treatments:

1. Elias M. Stein and Rami Shakarchi, *Complex Analysis*
   `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`
2. K. Chandrasekharan, *Lectures on the Riemann Zeta-Function*
   `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`
   with preserved provenance
   `original_url: https://mathweb.tifr.res.in/sites/default/files/publications/ln/tifr01.pdf`

This satisfies the standing source rule:

- two independent treatments
- both of them are qualifying primary treatments (`textbook`, `monograph`)
- each source row records an exact HTTP(S) URL, a locator, the source's own
  section/result names over the range read, and a disposition for every
  harvested result

### Source repair against the design bibliography

The design names Romik plus Stein-Shakarchi. I kept Stein-Shakarchi and used
the already fetch-verified TIFR Chandrasekharan monograph in place of Romik for
this batch's recorded ledger.

Reason:

- the TIFR monograph is open access on a stable full-text PDF URL already
  carrying a durable fetch receipt in this repo
- it directly covers the continuation, theta relation, functional equation,
  zero-free line, xi growth/product, and Bernoulli-value formulas this page
  needs
- I did not switch the ledger onto an unstamped mirror just to match the design
  bibliography more literally

## 6. Conventions and route choices

### Notation and convention fixes recorded for authoring

- This page follows the design's convention
  `Lambda(s)=pi^(-s/2) Gamma(s/2) zeta(s)` and
  `xi(s)=1/2 s(s-1)Lambda(s)`.
- Stein-Shakarchi uses the symbol `xi` for what this page calls `Lambda`. The
  notes and coverage record that convention drift explicitly so authoring does
  not silently transfer meromorphic properties from `Lambda` to the entire
  function `xi`.
- Chandrasekharan's `xi` matches the page's `xi`, so that source is the clean
  carrier for the entire-function, order-one, and Hadamard-product material.
- Bernoulli numbers are normalized by
  `t/(e^t-1)=sum B_n t^n/n!` with `B_1=-1/2`.
- The eta identity is scaffolded as a representation theorem, not as the
  continuation proof, because the factor `1-2^(1-s)` has infinitely many zeros.

### A-page route

The A page follows the design's 22-item inventory:

1. Dirichlet-series convergence and the initial definition on `Re s > 1`
2. Euler product and zero-freeness on `Re s > 1`
3. the Euclid-agreement remark rather than a duplicate infinitude theorem
4. the right-half-plane continuation by the fractional-part integral formula
5. the eta representation theorem
6. theta, Mellin, the completed function, full meromorphic continuation, and
   both functional equations
7. xi, order one, the zero-free boundary line, the critical strip/trivial
   zeros, and the Hadamard product
8. Bernoulli numbers, integer special values, and the warning against reading
   analytic continuation as the original series

### B-page shape

The B page keeps the design's warning/examples mix, but with one duplicate
control repair:

- I did **not** remint the design's worked `zeta(2)=pi^2/6` witness.
  The repo already has published Basel examples
  `ex-sine-product-recovers-the-basel-sum`,
  `ex-zeta-two-from-tonelli-and-the-geometric-series`, and
  `ex-residue-evaluates-the-basel-sum`.
- Instead, the coverage records the sine-product Basel witness as
  `already-published`, and the local B page uses the non-duplicate example
  `ex-zeta-four-equals-pi-to-the-four-over-ninety` as its worked positive-even
  special-value instance.

The rest of the B page remains local to CA-22:

- Euler-product numerics at `s = 2`
- `zeta(0) = -1/2`
- the theta-Mellin split at `1`
- a trivial zero at `-2`
- a finite-zero-product model for the xi product
- the eta-series and harmonic-series counterexamples
- the four standard false statements about the defining series, `zeta(-1)`,
  entireness, and uniqueness from the functional equation alone

## 7. Known limits

- The design's preferred FA-23/FA-25 Poisson-summation seam is still not
  materialized on current disk as item-level suppliers. The scaffold records
  that honestly instead of erasing the theta route.
- The recorded source stack is Stein plus Chandrasekharan, not Stein plus
  Romik. That is a deliberate source-repair choice tied to live full-text
  verification, not an unnoticed bibliography swap.
- The Riemann hypothesis is recorded only as a deferred open-problem seam to
  `open-problems-and-research-frontier`; there is no existing published RH item
  on disk to reuse locally.

## 8. Validation

Commands run after writing the scaffold:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-9.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-9.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-9.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-9.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-9.coverage.json
node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-29-batch-9.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-29-batch-9-spliced-plan.json", JSON.stringify(plan, null, 2) + "\n");'
node tools/validate-plan.mjs /tmp/frontier-29-batch-9-spliced-plan.json
git diff --check -- research/frontier-29-batch-9.pages.json research/frontier-29-batch-9.coverage.json research/frontier-29-batch-9.notes.md
```

Validation results on Wednesday, September 2, 2026:

- JSON parse:
  `json-parse: ok`.
- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only`:
  `content-policy: 34 scoped item(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check`:
  `source-fetch-check: 2/2 source(s) fetch-verified`.
- temp-spliced `validate-plan`:
  exited `0`. Its final lines were:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 652 page(s) with item lists.
  NOTE: 641 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

  The long preceding output was the repository's standing run-wide
  `redundant-prereq` advisory stream outside this batch.
- `git diff --check`:
  clean.
- `node tools/prosecheck.mjs research/frontier-29-batch-9.notes.md --warnings`:
  `0` errors, with four heuristic `count-in-prose` warnings at the item-count
  and validator-count lines.

## Step-3 fix pass

- `CA-22 review verdict` — `applied as no-op`.
  Evidence: `research/frontier-29-alpha-f-step3-scaffold-review.md` records
  `the-riemann-zeta-function` as `sufficient` and cites the already-present
  local theta-seam note plus the explicit Romik-to-Chandrasekharan source
  repair; both recorded source URLs were re-opened on this pass and still
  resolve as live PDFs.
  Changed scaffold record: none. `research/frontier-29-batch-9.pages.json`
  and `research/frontier-29-batch-9.coverage.json` already match the reviewed
  carrier.
- `99bbe5d5aeb0edd359fb691a274ea559505a3ce8f55a2adeb2bbc0c455c4daf9`
  — `stands`.
  Evidence: the Stein-Shakarchi `Proposition 2.7` row still defers the
  boundary-growth package to
  `classical-zero-free-region-and-the-prime-number-theorem`, matching the
  Alpha-f scope decision and the CA-22 design boundary.
  Changed scaffold record: none. Retained the existing deferred source row in
  `research/frontier-29-batch-9.coverage.json`.
- `cad1b5e9c75425aec5aa6dff5ab50f5f18182bc4225ac0eb2200a4684ac5218b`
  — `stands`.
  Evidence: the Chandrasekharan `Theorem 4(v)` row still defers the
  logarithmic-derivative formula to
  `classical-zero-free-region-and-the-prime-number-theorem`, again matching
  the Alpha-f scope decision and the CA-22 endpoint.
  Changed scaffold record: none. Retained the existing deferred source row in
  `research/frontier-29-batch-9.coverage.json`.
- `3b20a7d04012ad9130c048b1d4b66fa28378dec18e07a6fe557868a164452503`
  — `pushback upheld as owner-decision`.
  Evidence: the canonical Riemann-hypothesis seam still defers to
  `open-problems-and-research-frontier`, and the published destination page
  still has no RH remark to reuse. Adding one would modify published content
  outside this batch.
  Changed scaffold record: none. Retained the existing deferred canonical row
  in `research/frontier-29-batch-9.coverage.json`.

## Step-5 authoring

Authored on Wednesday, September 2, 2026 AEST:

- A-page items:
  `lem-riemann-zeta-dirichlet-series-converges-locally-uniformly`,
  `def-riemann-zeta-function`,
  `thm-euler-product-for-riemann-zeta`,
  `cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one`,
  `rem-agreement-with-the-existing-infinitude-of-primes`,
  `thm-riemann-zeta-continuation-to-the-right-half-plane`,
  `thm-dirichlet-eta-representation`,
  `def-jacobi-theta-function`,
  `thm-jacobi-theta-transformation`,
  `thm-theta-mellin-representation-of-completed-zeta`,
  `def-completed-riemann-zeta-function`,
  `thm-riemann-zeta-meromorphic-continuation`,
  `thm-completed-riemann-zeta-functional-equation`,
  `thm-riemann-zeta-functional-equation`,
  `def-riemann-xi-function`,
  `thm-riemann-xi-is-entire-of-order-one`,
  `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane`,
  `thm-trivial-zeros-and-critical-strip`,
  `thm-hadamard-product-for-riemann-xi`,
  `def-bernoulli-numbers-by-their-generating-function`,
  `thm-special-values-of-riemann-zeta-at-integers`,
  `rem-dirichlet-series-continuation-and-regularized-sums`
- B-page items:
  `ex-euler-product-numerically-approximates-zeta-at-two`,
  `ex-zeta-four-equals-pi-to-the-four-over-ninety`,
  `ex-zeta-zero-equals-minus-one-half`,
  `ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms`,
  `ex-zeta-minus-two-vanishes-by-the-sine-factor`,
  `ex-symmetric-finite-zero-products-model-the-xi-hadamard-product`,
  `cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges`,
  `cex-the-harmonic-series-shows-the-defining-series-diverges-at-one`,
  `fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one`,
  `fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on`,
  `fs-riemann-zeta-is-entire`,
  `fs-the-functional-equation-alone-characterizes-zeta`
- Page files:
  `library/complex-analysis/the-riemann-zeta-function.md`
  and
  `library/complex-analysis/the-riemann-zeta-function-examples.md`
- Proof-contract report:
  `research/frontier-29-batch-9.proof-contracts.json`

All authored page and item files remain `status: draft`. No published content,
plan structure, workflow state, or another batch artifact was edited.

### Provenance rationale

- Standard named definitions and theorems taken directly from the recorded
  Stein-Shakarchi / Chandrasekharan source stack were tagged
  `provenance.statement: literature-derived`.
- The two remarks, the four `fs-` guardrails, and the two counterexample
  slogans were tagged `statement: ai-altered`, because their exact wording is a
  faithful library-specific restatement rather than a source theorem title.
- Worked examples that are not used as dependency targets were tagged
  `statement: ai-generated` with `generation.role: example`.
- The two counterexamples were intentionally **not** left `ai-generated`,
  because `fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one`
  depends on them and generated statements may not serve as dependency targets
  under the in-flight content policy.
- Definition and remark items use `proof: not-applicable`; every proof-bearing
  item uses `proof: ai-generated`.

### Clarified claims

- `thm-jacobi-theta-transformation` keeps the live Fourier/Poisson seam
  explicit in a local `[A1]` assumption, exactly as the scaffold notes already
  recorded. I did not silently pretend that the unpublished FA supplier pages
  had become on-disk item suppliers.
- `thm-completed-riemann-zeta-functional-equation` states the symmetric
  split-at-`1` formula explicitly so later xi and example items can cite the
  actual continuation formula rather than a hidden proof-only derivation.
- `thm-hadamard-product-for-riemann-xi` makes the exclusion of `0`, `1`, and
  the trivial zeros explicit before identifying xi's zero set with the
  nontrivial zeros of zeta.
- No planned item id was dropped, renamed, or rehomed.

### Validator results

- `node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/frontier-29-batch-9-item-paths.txt)`
  initially reported phase-shape failures on 18 proof-bearing items. These were
  all canonical formatting issues: numbered proof rows had multiline display
  math that detached the trailing tags, one proof needed the checker's repaired
  step stratification, and one contradiction tag was orphaned. I applied those
  repairs and reran the check.
- `node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/frontier-29-batch-9-item-paths.txt)`
  after repair:
  `27 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-29-batch-9.proof-contracts.json --strict`
  initially found five exact-contract mismatches:
  one unused fact row, two omitted backward-step inputs, one decimal numeral
  parsed as a step token, and one remark citation whose source section was not
  yet headed as `## Remark`. I repaired the item text, regenerated the
  contract, and reran the gate.
- `node tools/proof-contract.mjs research/frontier-29-batch-9.proof-contracts.json --strict`
  after repair:
  `proof-contract: 0 error(s), 0 warning(s), 27/27 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-29-batch-9.pages.json`
  ->
  `content-policy: 34 scoped item(s), 0 error(s), 0 warning(s)`.
- temp-spliced `validate-plan` on `/tmp/frontier-29-batch-9-spliced-plan.json`
  ended with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 698
  page(s) with item lists.
  NOTE: 595 planned page(s) carry no item list yet (marked * above).
  ```

  The long preceding output was the repository's standing `redundant-prereq`
  advisory stream outside this batch.
- `git diff --check -- [authored batch-9 files]`
  returned no output.

### Blockers

None at validator close. The one live seam remains the same one already
recorded at scaffold stage: the theta transformation proof truthfully carries a
local Fourier/Poisson assumption because the planned FA supplier pages are
still empty placeholders on current disk.
