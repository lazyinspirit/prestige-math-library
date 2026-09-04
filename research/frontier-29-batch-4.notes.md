# frontier-29 · Beta · batch notes — `the-maximal-function-and-lebesgue-differentiation`

## 1. Scope, order, and owned artifacts

This batch owns the A/B pair
`the-maximal-function-and-lebesgue-differentiation` /
`the-maximal-function-and-lebesgue-differentiation-examples`
at orders `288.033` and `288.034`.

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated dispatch, the
MT-17 design block in `research/plan-measure-theory-track.md`, the live
`research/plan-spec.json` entry, the stage-0 drift report, the source-harvest
notes behind MT-17, and the already-published MT-11 / MT-13 / MT-15 /
topology items the design route actually uses.

Artifacts written by this dispatch:

- `research/frontier-29-batch-4.pages.json`
- `research/frontier-29-batch-4.coverage.json`
- this file

No plan structure, workflow state, published library content, or another
batch's artifact was edited. I did not create a `proof-contracts` file here;
that is a step-5 authoring artifact, not a scaffold artifact.

## 2. Design/spec drift

The order, page ids, category, and companion page agree between the design and
`research/plan-spec.json`.

The prerequisite list does **not** agree, and I kept the spec exactly as the
dispatch requires:

- the MT-17 design block names the closure
  `MT-14, MT-11, MT-4, MT-13, MT-15, the-topology-of-euclidean-space,
  compactness-in-metric-spaces`
- `research/plan-spec.json` and the generated batch manifest keep the single
  page-level prerequisite `the-duality-of-lp-and-lq-examples`

I recorded the mismatch here and left the manifest on the spec edge. That
matches the run-level drift ruling in
`research/frontier-29-alpha-step0-drift.md`, which marks MT-17 `no-drift`
because the spec edge's closure already reaches the pages the design lists.

## 3. Scaffold shape

The A page has **25 items**. The B page has **9 items**. The A page is well
below the 60-item split ceiling, so no split is proposed.

The A page breaks into six proof clusters:

- **Local Euclidean vocabulary.**
  Local integrability, positive finite measure of balls, the averaging
  operator, the centered and uncentered maximal functions, weak/strong type,
  Lebesgue points, density, and nicely shrinking families.

- **Covering and measurability.**
  The Vitali covering lemma with the finite and countable forms, continuity of
  ball averages, measurability of the centered maximal function, and
  pointwise comparability of the centered and uncentered operators.

- **Maximal estimates.**
  Weak type `(1,1)`, the `L^infinity` bound, the real-variable Marcinkiewicz
  interpolation theorem, the resulting `L^p` bound for `1 < p < infinity`, and
  the A-page counterexample to strong type `(1,1)`.

- **Interpolation.**
  The exact `thm-riesz-thorin-interpolation`, with its own strip argument and
  no dependency on the later published complex-analysis three-lines theorem.

- **Differentiation and density.**
  The continuous compactly supported case, the full Lebesgue differentiation
  theorem on `R^n`, the class-level Lebesgue-point theorem, the density theorem,
  and differentiation along nicely shrinking families.

- **Measure differentiation and the first FTC.**
  Differentiation of sigma-finite Borel measures finite on compact sets, and
  the `L^1` first fundamental theorem of calculus via one-sided shrinking
  intervals.

The B page keeps the concrete leaves the design asked for:

- the closed-form `M1_[0,1]`
- its explicit nonintegrability witness
- a unit-mass spike
- the class-level `1_Q` Lebesgue-set example
- an interval endpoint of density `1/2`
- a compact positive-measure set that still misses part of every interval
- Steinhaus re-proved from the density theorem
- the density-`1/2` false statement
- a locally integrable function whose averages diverge on a singleton null set

## 4. Design decisions preserved

### Measurability is a theorem

The page separates
`prop-ball-average-is-continuous-in-centre-and-radius` from
`thm-centered-hardy-littlewood-maximal-function-is-borel-measurable`, exactly
because the design identifies that openness proof as the only genuinely
topological step on the page.

### The centered and uncentered conventions stay visible

I did not collapse `M` and `M^*` into one definition. The manifest records
their pointwise comparison explicitly in
`prop-centered-and-uncentered-maximal-functions-are-comparable`, so later pages
can cite the correct convention without silent rewriting.

### The maximal inequality keeps an honest constant

`thm-hardy-littlewood-maximal-inequality-for-balls` is scaffolded with the
design's `5^n` constant and no optimality claim. Tao's `3^d` proof and his
`2^d` improvement are both harvested, but the scaffold does not pretend to be a
sharp-constant page.

### Strong type `(1,1)` fails on the A page

The design explicitly wanted the nonintegrability phenomenon available to later
pages without crossing to a B page. I therefore put the general counterexample
`cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one` on the A
page and kept the specific `1_[0,1]` computation as a separate B-page witness.

### Marcinkiewicz and Riesz-Thorin are separate spine items

`thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity` is the
real-variable sublinear theorem the maximal operator actually needs.
`thm-riesz-thorin-interpolation` is scaffolded separately, with its own
finite-simple-function reduction and strip proof, because the design assigns the
exact linear theorem to MT-17 under seam ruling `R-6`.

### Lebesgue points are tracked at the class level

The design's `1_Q` example forces the page not to talk as if a single pointwise
representative were canonical. The definition item therefore names the
Lebesgue set of an `L^1_loc` class, and the theorem item records the
countable-union-over-rational-constants proof structure explicitly.

## 5. Source stack and URL discipline

I used four exact source URLs in the coverage artifact.

1. **Terence Tao, _An Introduction to Measure Theory_**
   `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`
   This is the explicit differentiation source for local integrability,
   continuous-function differentiation, the maximal inequality, the finite
   covering lemma, the density theorem, and the compact positive-measure
   interval-sharpness example.

2. **Gerald B. Folland, _Real Analysis_, 2nd ed.**
   `https://djvu.online/file/NPF4BEtSuqdFA`
   This is the core MT-17 backbone for continuity of ball averages,
   measurability of the maximal function, the maximal theorem, Lebesgue points,
   nicely shrinking families, differentiation of measures, and both
   interpolation theorems.

3. **Walter Rudin, _Real and Complex Analysis_, 3rd ed.**
   `https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf`
   This is the cleanest source in the current stack for the exact
   measure-differentiation and first-FTC phrasing the design wants:
   Chapter 7 states the maximal inequality, Lebesgue points, nicely shrinking
   sets, relative differentiation of measures, and the first FTC in one place.

4. **Hardy and Littlewood, _A maximal theorem with function-theoretic
   applications_ (1930)**
   `https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5446-11511_2006_Article_BF02547518.pdf`
   This is the eligible primary treatment I used. It does not control the page's
   proof route, but it directly records the historical `p > 1` strong-type
   theorem and the failure of the `p = 1` endpoint.

This satisfies the standing requirement with two independent textbook
treatments, a third textbook bridge for the finite-on-compact measure theorem,
and one eligible primary paper.

### Exact-URL verification and stamp reuse

On Tuesday, September 1, 2026, I re-opened the Tao, Folland, and
Hardy-Littlewood URLs through the web reader and checked the recorded ranges.

The Rudin row uses the exact archived URL, locator, and recovery metadata
already verified on the current bytes in `research/frontier-27-batch-3`; I kept
that exact recovered URL rather than reverting to the dead original host.

I reused exact `fetch_verified` stamps already present on disk for:

- Tao from `research/frontier-27-batch-3.coverage.json`
- Folland from `research/frontier-22-batch-5.coverage.json`
- Rudin from `research/frontier-27-batch-3.coverage.json`

The Hardy-Littlewood row has no inherited stamp in this repository, so its
status depends on the batch-local `source-fetch-check --stamp` run below.

### Source-specific choices worth recording

- **Tao Exercise 1.6.19** is harvested but marked `out-of-scope`. The page is
  not about optimizing the constant in the maximal inequality.

- **Tao Exercise 1.6.26(ii)** is also harvested but not scaffolded. The page
  keeps the compact positive-measure witness from part `(i)` and the
  density-half false statement, which already expose the intended sharpness seam.

- **Folland Theorem 3.22** is stated for regular signed or complex Borel
  measures. The live scaffold keeps the design's broader
  sigma-finite/Borel/finite-on-compact wording because Rudin Chapter 7 supports
  that exact envelope, and the notes record the source split instead of silently
  picking one convention.

- **Hardy-Littlewood Theorems 13 and 14** are harvested as historical primary
  context only. They are not the route this library will prove on MT-17, so they
  are explicitly marked `out-of-scope` rather than treated as hidden support.

## 6. Dependency rationale

- `lem-euclidean-balls-have-positive-finite-lebesgue-measure` is a genuine local
  bridge. The average operator and the density definition both need the
  denominator control, and no published item below MT-17 states it in this form.

- `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates` stays on MT-17,
  not MT-18. The page already needs it for the maximal inequality in `R^n`, and
  the design for MT-18 explicitly builds on MT-17 rather than reintroducing the
  ball-selection machinery there.

- `thm-riesz-thorin-interpolation` depends on MT-16 norm recovery and simple
  density, not on the later published `thm-hadamard-three-lines`. The latter
  lives on the complex-analysis page at order `314`, so making it a dependency
  here would violate both the order and the design's seam ruling.

- `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` depends
  on MT-13's Lebesgue decomposition and Radon-Nikodym density items rather than
  restating measure decomposition locally. That keeps the MT-13/MT-17 interface
  explicit for MT-18's monotone-measure use.

- `thm-first-fundamental-theorem-of-calculus-for-l-one` depends on the
  shrinking-family differentiation theorem, not on a separate one-dimensional
  maximal-function leaf. This matches the design's intent that the FTC be one of
  the page's applications of differentiation machinery rather than a separate
  track.

## 7. Generated items and known limits

The design itself marks the closed-form maximal function of `1_[0,1]` as a
generated computation, and several nearby B-page leaves are of the same type:

- `ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r`
- `cex-the-unit-interval-indicator-has-nonintegrable-maximal-function`
- `ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set`
- `ex-an-interval-endpoint-is-not-a-density-point`
- `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set`
- `fs-there-is-a-measurable-set-with-density-one-half-in-every-interval`

Each of these is either a direct calculation or a direct corollary of the
A-page theorems; none introduces new upstream load.

One design example is **not** scaffolded verbatim: "the fat Cantor set's density
computed at a boundary point". The current published closure supplies the fat
Cantor construction, its positive measure, and its exact total measure, but it
does not make a boundary-density computation cheap enough to justify a dedicated
B-page leaf here. I replaced it with the source-backed Tao `Exercise 1.6.26(i)`
compact positive-measure sharpness witness and recorded that substitution
explicitly rather than fabricating a stronger example.

## 8. Validation log

Run from the repo root on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs research/frontier-29-batch-4.coverage.json --require-destination`
  passed: `1` page, `50` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed: `513` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  passed. The success line is `OK — declared page order is acyclic and
  consistent; no item-level cycles, forward...`; the remaining output is the
  standing repository-wide note that `643` planned pages still have no item
  list.
- `node tools/prosecheck.mjs research/frontier-29-batch-4.notes.md --warnings`
  passed with `0` errors and `5` heuristic `count-in-prose` warnings.
- `git diff --check -- research/frontier-29-batch-4.pages.json research/frontier-29-batch-4.coverage.json research/frontier-29-batch-4.notes.md`
  passed cleanly.

`source-fetch-check --stamp` is the only remaining blocker on this batch-local
bytes:

- The first primary-paper URL,
  `https://scispace.com/pdf/a-maximal-theorem-with-function-theoretic-applications-3djiqzhp7k.pdf`,
  opened in the web reader but failed shell fetch with `EAI_AGAIN`.
- I recovered an alternate live PDF for the same article at
  `https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5446-11511_2006_Article_BF02547518.pdf`,
  rewrote the coverage row to that URL, and preserved the replaced URL in
  `original_url`.
- The alternate URL also fails shell-side `source-fetch-check --stamp` with the
  same transport error:
  `ERROR fetch-check-dead: the-maximal-function-and-lebesgue-differentiation: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5446-11511_2006_Article_BF02547518.pdf — EAI_AGAIN`
  followed by
  `source-fetch-check: 3/4 source(s) fetch-verified (0 newly stamped), 1 FAILED`.

So the scaffold, coverage, manifest-content, plan-order, prose, and whitespace
gates are clean, while the remaining red is transport-only on the recovered
primary-paper host.

## Step-3 fix pass

On Wednesday, September 2, 2026, I re-read
`research/frontier-29-alpha-c-step3-scaffold-review.md` for batch `4`, the
MT-17 design block in `research/plan-measure-theory-track.md`, and the source
material named by the batch ledger before touching the scaffold files.

- **Finding ids in scope:** none. The Alpha review issues no `B4-` finding for
  this batch and states that no owned batch artifact required a mathematical or
  routing repair in Step 3; the MT-17 pair verdict remains `sufficient`.
- **Disposition:** no scaffold change.
- **Evidence:** `rg -n 'B4-' research/frontier-29-alpha-c-step3-scaffold-review.md`
  returns no hits, while the MT-17 section records only five scope-decision
  `stands` rows, not repair findings. I re-read the recorded Tao and Folland
  source ranges backing the retained route: Tao §1.6 at Theorem 1.6.19-20 and
  Exercises 1.6.15-1.6.16, and Folland §§3.4, 6.4, 6.5 at Lemma 3.16,
  Theorems 3.17, 3.18, 3.20, 3.21, 3.22, 6.27, and 6.28. The current batch
  ledger also now closes its URL gate:
  `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-4.coverage.json`
  returns `source-fetch-check: 4/4 source(s) fetch-verified`, so the archived
  Hardy-Littlewood URL on current disk supersedes the historical `3/4`
  transport-only note in §8 above. Required validators on the current bytes:
  `node tools/coverage-checklist.mjs research/frontier-29-batch-4.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`;
  `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the standing repository-wide `redundant-prereq`
  advisories and the standard note that `643` planned pages still have no item
  list.
- **Changed scaffold record:** none. `research/frontier-29-batch-4.pages.json`
  and `research/frontier-29-batch-4.coverage.json` are unchanged in this fix
  pass.

## Owner Step-4 intervention

- `B4-LEAF-1` — **applied after the mechanical splice gate**
  `validate-plan` correctly rejected
  `ex-a-positive-measure-compact-set-can-miss-part-of-every-interval` because
  its scaffold reused the published B-page example
  `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure`, while B pages
  must remain leaves. The construction is now stated directly: enumerate the
  rationals, remove intervals with geometrically summable lengths, and take the
  complement in `[0,1]`. Its dependencies are the A-page ingredients already
  used by the published construction, together with Heine--Borel. The same
  repair was applied to the spliced `research/plan-spec.json` record.

## Step-5 authoring

Authored on Tuesday, September 1, 2026.

Authored ids on the A page `the-maximal-function-and-lebesgue-differentiation`:

- `def-locally-integrable-function-on-r-n`
- `lem-euclidean-balls-have-positive-finite-lebesgue-measure`
- `def-ball-average-operator-on-r-n`
- `def-centered-and-uncentered-hardy-littlewood-maximal-functions`
- `def-sublinear-operator-weak-and-strong-type-p-q`
- `def-lebesgue-point-and-lebesgue-set`
- `def-density-of-a-measurable-set-at-a-point`
- `def-family-shrinking-nicely-to-a-point`
- `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates`
- `prop-ball-average-is-continuous-in-centre-and-radius`
- `thm-centered-hardy-littlewood-maximal-function-is-borel-measurable`
- `prop-centered-and-uncentered-maximal-functions-are-comparable`
- `thm-hardy-littlewood-maximal-inequality-for-balls`
- `prop-hardy-littlewood-maximal-function-is-l-infinity-bounded`
- `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity`
- `cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded`
- `thm-riesz-thorin-interpolation`
- `lem-continuous-compactly-supported-functions-differentiate-by-ball-averages`
- `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`
- `thm-almost-every-point-is-a-lebesgue-point`
- `thm-lebesgue-density-theorem`
- `thm-differentiation-along-families-shrinking-nicely`
- `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`
- `thm-first-fundamental-theorem-of-calculus-for-l-one`
- `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one`

Authored ids on the B page `the-maximal-function-and-lebesgue-differentiation-examples`:

- `ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r`
- `cex-the-unit-interval-indicator-has-nonintegrable-maximal-function`
- `ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set`
- `ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r`
- `ex-an-interval-endpoint-is-not-a-density-point`
- `ex-a-positive-measure-compact-set-can-miss-part-of-every-interval`
- `ex-steinhaus-follows-from-the-density-theorem`
- `fs-there-is-a-measurable-set-with-density-one-half-in-every-interval`
- `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set`

Page files authored:

- `library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md`
- `library/measure-theory/the-maximal-function-and-lebesgue-differentiation-examples.md`

Proof-contract artifact authored:

- `research/frontier-29-batch-4.proof-contracts.json`

Provenance rationale:

- The definitional and spine theorem items are tagged `literature-derived` at the statement level and `ai-generated` for the proof where the proof was written locally from the MT-17 source stack.
- The class-level `1_Q` example, the endpoint-density example, the compact positive-measure sharpness witness, and the strong-type `(1,1)` failure are tagged `literature-derived` because the claims are classical and source-backed in the harvested MT-17 material.
- The spike example, the Steinhaus-from-density example, and the singleton null-set divergence example are tagged `ai-generated` at the statement level with the schema-required `generation` role because they are batch-local worked examples rather than harvested theorem statements.
- All authored items and both authored pages remain `status: draft`. No `verification.judge`, `verified`, or `audited` record was added to the draft items.

Narrowed or dropped claims:

- None at Step 5. The authored item/page set matches the batch-4 scaffold.
- The only design-side substitution remains the already-scaffolded replacement of the omitted fat-Cantor boundary-density computation by the Tao `Exercise 1.6.26(i)` compact positive-measure witness.

Blockers:

- None.

Validator receipts on the current bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-4 item files...` -> `27 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-29-batch-4.pages.json` -> `content-policy: 34 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> `OK`, with only the standing repository-wide `redundant-prereq` advisories
- `node tools/proof-contract.mjs research/frontier-29-batch-4.proof-contracts.json --strict` -> `proof-contract: 0 error(s), 0 warning(s), 27/27 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-29-batch-4.proof-contracts.json --items-dir items --fail-on-missing-quote` -> every recorded quote found; no widening candidates
