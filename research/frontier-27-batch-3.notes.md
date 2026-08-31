# frontier-27 · Beta · batch notes — `density-separability-and-convolution-in-lp`

## 1. Scope, order, and owned artifacts

This batch owns the A/B pair
`density-separability-and-convolution-in-lp` /
`density-separability-and-convolution-in-lp-examples`
at orders `288.029` and `288.03`.

I read the MT-15 design block in
`research/plan-measure-theory-track.md` beginning at line `3097`, then checked
`research/plan-spec.json`, `SCHEMA.md`, `README.md`, and the already-published
measure-theory, topology, and smoothness items that the design route actually
needs.

Artifacts written by this dispatch:

- `research/frontier-27-batch-3.pages.json`
- `research/frontier-27-batch-3.coverage.json`
- this file

No plan structure, workflow state, published library content, or another
batch's artifact was edited.

## 2. Design/spec drift

For this page pair, the design and the spec agree on:

- page id
- title
- category
- companion page
- order `288.029`
- prerequisite page `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`

So there is **no design/spec drift to adjudicate** inside this batch.

There is one stale design label worth recording anyway: the design prose still
names the smoothness input as `higher-derivatives-and-smoothness`, but the
stage-0 drift review for `frontier-27` already confirmed that the live closure
reaches the needed smoothness vocabulary through the published current route. In
the manifest, that now lands on
`def-ck-and-multi-index-notation-in-several-variables`, not the later inverse-
function-page item `def-ck-euclidean-maps-and-diffeomorphisms`, so I kept the
spec unchanged and cited the earlier live smoothness item rather than
reifying the stale page label.

## 3. Scaffold shape

The A page has **35 items**. The B page has **12 items**. The A page is well
below the 60-item split ceiling, so no split is proposed.

The A page breaks into five proof clusters:

- **Density in finite and infinite essential-sup norms.**
  Simple-function density for `1 <= p < infinity`, the separate `L^infinity`
  simple-density statement, box-step density on `R^n`, the compact-open
  sandwich lemma, the explicit distance-function cutoff, `C_c(R^n)` density,
  and the exact `C_0(R^n)` closure theorem.

- **Separability.**
  The rational-box dense family on `R^n`, two local lemmas turning a countable
  generator into a countable algebra and then into measure approximation, the
  general sigma-finite/countably-generated separability theorem, and the
  `L^infinity[0,1]` nonseparability theorem.

- **Translation continuity.**
  First on `C_c(R^n)` by uniform continuity on compact support, then on all
  finite `L^p` by density.

- **Convolution and its well-definedness seam.**
  The Borel-representative measurability lemma, representative independence,
  `L^1` existence and norm bound, algebra laws, the support theorem, the
  explicit duality lemma, Minkowski's integral inequality, Young's inequality,
  and the `C_0` endpoint corollary for conjugate exponents.

- **Approximate identities and mollifiers.**
  The general `L^1` approximate-identity definition, the smooth-bump mollifier
  family, proof that mollifiers are approximate identities, smoothness of
  mollified convolutions, `L^p` convergence, compact-uniform convergence for
  continuous data, and finally `C_c^infinity(R^n)` density.

The B page keeps only the examples and refutations the design explicitly asked
for:

- the tent-function convolution
- mollifying `1_[0,1]` at two scales
- a concrete countable dense family in `L^2[0,1]`
- the `1`-separated initial-interval family in `L^infinity[0,1]`
- an `L^1 * L^2` Young example
- the Gaussian approximate identity
- the six intended false/counterexample leaves for `L^infinity` density,
  unrestricted separability, `L^infinity` translation, everywhere-defined
  convolution, `L^2 * L^2 subseteq L^2`, and arbitrary Lebesgue-representative
  measurability

## 4. Design decisions I preserved

### The `L^infinity` exceptions stay explicit

The design warns repeatedly that density, separability, and translation all
behave differently at `p = infinity`. I kept those statements separated:

- `thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum`
- `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn`
- `thm-l-infinity-of-unit-interval-is-not-separable`
- `fs-translation-is-continuous-in-l-infinity`

I did **not** fold any of those endpoint failures into a theorem whose title
looks like it covers all `p`.

### The Euclidean `C_c`-density route stays elementary

The design explicitly says this page does **not** need the published general
`thm-urysohn-lemma` as a load-bearing input for density on `R^n`. I therefore
added the explicit Euclidean cutoff lemma
`lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff`
and made `thm-c-c-rn-is-dense-in-l-p-of-rn` depend on that lemma plus a local
compact/open sandwich lemma.

This keeps the page on the designed route:
`distance-function cutoff + regularity on R^n`,
not
`general normal-space separation theorem + imported topology machinery`.

### The general separability theorem states the exact hypothesis

The published remark `rem-lp-separability` already records the correct theorem:
sigma-finite measure plus countably generated sigma-algebra. I preserved that
exact statement in
`thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable`.

I did **not** let the page drift to the false slogan "`L^p` is separable for
all finite `p` on every measure space". The B page carries the explicit
uncountable-counting-measure refutation instead.

### The Borel-representative seam is a real theorem cluster

The design's warning about convolution is not decorative. The page now makes the
representative issue explicit in two A-page items:

- `lem-borel-representatives-make-the-convolution-integrand-borel-measurable`
- `lem-convolution-is-independent-of-the-chosen-borel-representatives`

That keeps the well-definedness work visible and prevents the library from
quietly writing `f(x-y)` for an `L^1` class without first fixing a valid
representative convention.

### Minkowski's integral inequality avoids MT-16 by construction

The design explicitly forbids a circular proof through later duality. I kept the
elementary duality half as its own lemma,
`lem-elementary-duality-formula-for-nonnegative-l-p-functions`,
with the explicit norming vector, and then routed
`thm-minkowski-integral-inequality` through that lemma plus Tonelli.

So the scaffold does **not** cite Hahn-Banach or `the-duality-of-lp-and-lq`.

### No new bump lemma is minted

The design says the published `ex-smooth-compactly-supported-bump` is enough.
I therefore kept the A-page mollifier definition and the approximate-identity
proposition conditional on a unit-mass smooth bump instead of inventing a
second bump existence item. The published example remains the motivating
existence witness for the page and its companion examples, but it is no longer
used as a foreign B-page dependency inside the A-page manifest.

## 5. Source stack and URL discipline

I used four exact source URLs in the coverage artifact.

1. **John K. Hunter, _Measure Theory_**
   `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
   This is the clean lecture-note source for simple-function density and the
   explicit dual norming-vector proof in Proposition `7.13`.

2. **Walter Rudin, _Real and Complex Analysis_, 3rd ed.**
   `https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf`
   This is the controlling textbook treatment for the `C_c` / `C_0` density
   route and for the Borel-representative opening of the `L^1` convolution
   theorem.

3. **Richard L. Wheeden and Antoni Zygmund, _Measure and Integral: An
   Introduction to Real Analysis_**
   `https://djvu.online/file/u1gYJemR8hzMe`
   This is the broadest single textbook backing for the later MT-15 arc:
   separability, continuity in `L^p`, Young's convolution inequality,
   approximate identities, and `C_0^infinity` density.

4. **Terence Tao, _An Introduction to Measure Theory_**
   `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`
   This is the bridge source already deferred into MT-15 by earlier batches:
   translation continuity in `L^1` and the approximations-to-the-identity
   exercise in the product-measure section.

This satisfies the standing requirement with more than one eligible primary
treatment: Rudin and Wheeden-Zygmund are textbooks, Hunter is a full
lecture-note set with a harvestable table of contents, and Tao is the exact
bridge source earlier batches already routed here.

### Exact-URL verification and stamp reuse

On Monday, August 31, 2026, I re-opened all four exact URLs through the web
reader and checked the specific ranges recorded in the coverage ledger.

The shell runner is network-restricted, so I reused exact `fetch_verified`
stamps already recorded elsewhere in `research/` for these exact URLs:

- Hunter from `research/frontier-26-batch-3.coverage.json`
- Tao from `research/frontier-19-batch-7.coverage.json`
- Rudin from `research/frontier-24-batch-5.coverage.json`
- Wheeden-Zygmund from `research/frontier-26-batch-3.coverage.json`

I copied only exact-URL stamps, not analogues from different mirrors.

### Source-specific disposition choices worth flagging

- **Hunter Proposition 7.13, `p = 1` endpoint paragraph** is marked
  `deferred` to `the-duality-of-lp-and-lq`. This page spends only the
  explicit `1 < p < infinity` norming-vector argument; MT-16 owns the endpoint
  duality ledger.

- **Wheeden-Zygmund Theorem (8.18)** is marked `inline`, not `included`, on the
  `L^infinity[0,1]` nonseparability item. Their theorem is the sequence-space
  `l^infinity` statement, while the scaffold keeps the page's own theorem on the
  function-space witness `1_[0,t]`.

- **Tao Exercise 1.6.27(iv)** is marked `deferred` to `owner-decision`.
  Convergence at Lebesgue points is stronger than the page's required `L^p` and
  compact-uniform convergence package, and no current later page id in this run
  cleanly absorbs that exact statement.

## 6. Dependency rationale

The manifest's page-level prerequisite remains exactly the spec's
`the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.

The stage-0 drift note for `frontier-27` already confirmed that this prerequisite
closure contains the design's named upstream mathematics: MT-4, MT-10, MT-11,
the Euclidean topology page, Urysohn/Tietze, the countability page, and the
needed smoothness vocabulary.

Key item-level choices:

- The general separability theorem is preceded by two local lemmas because the
  current library does **not** already have a published countable-generator to
  countable-algebra approximation theorem in exactly the form MT-15 needs.

- The `C_c(R^n)` density proof is split into the sandwich lemma and the explicit
  cutoff lemma because those are the real intermediate steps; writing one large
  theorem would hide the exact place where Euclidean geometry replaces abstract
  normal-space separation.

- The convolution well-definedness cluster is split before the `L^1` theorem.
  Without those two lemmas, the A page would silently assume the very Borel
  representative fact the design says is easy to miss.

- `thm-young-convolution-inequality` and
  `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity`
  are separate because the norm inequality and the `C_0` endpoint are not the
  same statement.

- The `C_c^infinity` density theorem comes last, after both the mollifier
  regularity theorem and the approximate-identity convergence theorem, because
  both are genuinely needed.

Known limits:

- The general separability theorem is a library-local extension of the standard
  countable-algebra proof pattern. The external sources here give the Euclidean
  and sequence-space faces directly; the batch notes record that gap honestly
  instead of pretending one of the harvested headings stated the theorem in
  exactly the library's final form.

- The page does **not** claim convergence of approximate identities at every
  Lebesgue point. Tao's stronger good-kernel exercise is recorded, but the live
  page scope stops at `L^p` convergence and compact-uniform convergence for
  continuous functions.

- The page does **not** build a general `C_c(X)` density theorem for arbitrary
  locally compact Hausdorff spaces. That belongs with the later Radon/Riesz
  representation page, not here.

## 7. Expected validator targets

For this scaffold pass, the in-scope gate set is:

- `node tools/coverage-checklist.mjs research/frontier-27-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-27-batch-3.coverage.json --out /tmp/frontier-27-batch-3-url-liveness.json --recover --fail-on-dead`
- `node tools/prosecheck.mjs research/frontier-27-batch-3.notes.md --warnings`
- `git diff --check -- research/frontier-27-batch-3.pages.json research/frontier-27-batch-3.coverage.json research/frontier-27-batch-3.notes.md`

I append the actual results below after running them.

## 8. Validation results

Commands run on Monday, August 31, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-27-batch-3.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-27-batch-3.coverage.json','utf8')); console.log('json-parse: ok')"`
- `node tools/coverage-checklist.mjs research/frontier-27-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-27-batch-3.coverage.json --out /tmp/frontier-27-batch-3-url-liveness.json --recover --fail-on-dead`
- `node tools/prosecheck.mjs research/frontier-27-batch-3.notes.md --warnings`
- `git diff --check -- research/frontier-27-batch-3.pages.json research/frontier-27-batch-3.coverage.json research/frontier-27-batch-3.notes.md`

Results:

- JSON parsing: **pass** - `json-parse: ok`.
- `coverage-checklist`: **pass** -
  `coverage-checklist: 1 page(s), 45 harvested result(s), 0 error(s), 0 warning(s)`.
- whole-run `content-policy --manifest-only`: **pass** -
  `content-policy: 382 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan`: **pass with run-wide warnings only**. Final receipt line:

  ```text
  OK - declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.
  ```

  The printed warnings are the repository's standing run-wide
  `redundant-prereq` notices on unrelated pages, not a batch-3 defect.

- `source-fetch-check --stamp`: **pass** -
  `source-fetch-check: 4/4 source(s) fetch-verified (0 newly stamped)`.

- `prosecheck`: **warnings only** - three heuristic `count-in-prose` warnings
  on the item totals and the phrase "two lemmas"; no positional contradiction
  against the live spec.

- `git diff --check`: **pass**.

- `url-sweep`: **failed mechanically inside this runner**:

  ```text
  url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-27-batch-3-url-liveness.json
  FAIL 0 https://djvu.online/file/u1gYJemR8hzMe -- curl: (6) Could not resolve host: djvu.online
    no archived snapshot under any host variant -- re-sourcing is justified here
  FAIL 0 https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf -- curl: (6) Could not resolve host: perso.telecom-paristech.fr
    no archived snapshot under any host variant -- re-sourcing is justified here
  FAIL 0 https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf -- curl: (6) Could not resolve host: terrytao.wordpress.com
    no archived snapshot under any host variant -- re-sourcing is justified here
  FAIL 0 https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf -- curl: (6) Could not resolve host: www.math.ucdavis.edu
    no archived snapshot under any host variant -- re-sourcing is justified here
  ```

Current blocker:

- Structurally, the scaffold and coverage ledger are clean on current bytes.
- The exact source URLs were re-opened through the web reader on Monday,
  August 31, 2026, and the recorded ranges still load there.
- The only failing validator is the shell-local liveness sweep, which cannot
  resolve any of the four exact hosts from this restricted runner.
- I therefore left the exact source records unchanged and recorded the failure
  honestly instead of silently replacing verified exact documents with different
  source URLs just to satisfy a shell transport gate.

## Step-3 fix pass

Run on Monday, August 31, 2026, against Alpha group `a`'s stable review file
`research/frontier-27-alpha-a-step3-scaffold-review.md`.

- Finding id: none issued in the stable review file for the batch-3
  coverage-carrier repair paragraph.
  Disposition: accepted as already applied on current bytes; no further
  coverage edit needed in this pass.
  Evidence: the stable review says
  `research/frontier-27-batch-3.coverage.json` had omitted direct carriers for
  `14` current A-page items. A current manifest-to-coverage audit on Monday,
  August 31, 2026 finds `missing: []` for all `35` A-page items on
  `density-separability-and-convolution-in-lp`, and the exact `14` ids named
  in the review now all have live canonical carriers in
  `research/frontier-27-batch-3.coverage.json`:
  `def-translation-of-a-function-on-rn`,
  `def-c-c-and-c-c-infinity-on-rn`,
  `def-convolution-of-two-functions-on-rn`,
  `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes`,
  `thm-box-step-functions-are-dense-in-l-p-of-rn`,
  `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess`,
  `lem-countable-generators-yield-countable-set-algebras`,
  `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra`,
  `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p`,
  `prop-l-one-convolution-is-bilinear-commutative-and-associative`,
  `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`,
  `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity`,
  `prop-mollifier-families-are-l-one-approximate-identities`, and
  `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`.
  Changed scaffold record: no additional edit in this pass;
  `research/frontier-27-batch-3.coverage.json` already carries the repaired
  canonical section on the current bytes.

- Finding id: none issued in the stable review file for the batch-3
  manifest/notes dependency-repair paragraph.
  Disposition: accepted as already applied on current bytes; no further
  manifest edit needed in this pass.
  Evidence: a current dependency audit over
  `research/frontier-27-batch-3.pages.json` finds `0` foreign `-examples`
  dependencies anywhere in batch `3`, no remaining use of
  `def-ck-euclidean-maps-and-diffeomorphisms`, and
  `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` now depends only
  on `def-c-c-and-c-c-infinity-on-rn` and
  `def-l-one-approximate-identity-on-rn`. This matches the stable review's two
  concrete repairs: the smoothness route stays inside the already reached
  closure, and the A-page mollifier definition no longer spends the foreign
  B-page item `ex-smooth-compactly-supported-bump`.
  Changed scaffold record: no additional edit in this pass;
  `research/frontier-27-batch-3.pages.json` and the explanatory notes in
  sections `2`, `4`, and `6` already reflect the repaired route.

- Finding `a2fbe72bf7589ef070b8ee68abddb5fa8b5e1bc9153b9346ebe2bd35bdf3b546`
  (`Exercise 1.6.27(iv), convergence at Lebesgue points`).
  Disposition: explicit pushback preserved as `owner-decision`; no scope
  expansion in this batch.
  Evidence: the current coverage row still defers Tao's stronger
  Lebesgue-point convergence statement, the controlling MT-15 design block in
  `research/plan-measure-theory-track.md` still stops at `L^p` convergence and
  compact-uniform convergence for continuous data, and the current
  `research/plan-spec.json` still has no exact later page id that cleanly
  absorbs this stronger statement. I re-opened the exact Tao URL through the
  web reader on Monday, August 31, 2026 and re-read `Exercise 1.6.27
  (Approximations to the identity)`, including the stronger convergence clause,
  before keeping the deferment.
  Changed scaffold record: no edit in this pass; the existing deferment in
  `research/frontier-27-batch-3.coverage.json` stands.

- Current validator and source-verification evidence.
  Disposition: recorded.
  Evidence: I re-opened the four exact recorded source URLs through the web
  reader on Monday, August 31, 2026 and re-read the recorded ranges:
  Hunter Chapter `7` (`7.3` Density and `7.5` Duality, including `Theorem 7.8`
  and `Proposition 7.13`), Rudin Chapter `3` and Chapter `8` (the `C_c` /
  `C_0` density route and the opening of `Theorem 8.14`), Wheeden-Zygmund
  Chapter `8` and Chapter `9` (including `(8.15)`, `(9.1)`, and `(9.8)`), and
  Tao `Exercise 1.6.27`. On the current bytes:
  `node tools/coverage-checklist.mjs research/frontier-27-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`;
  `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  -> `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-3.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`;
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, ending with `OK`, with only the standing repo-wide
  `redundant-prereq` advisories; and
  `node tools/prosecheck.mjs research/frontier-27-batch-3.notes.md --warnings`
  -> `0` errors, `7` heuristic `count-in-prose` warnings only.
  Changed scaffold record: this notes section only.

## Step-5 authoring

Authored files on Monday, August 31, 2026:

- `library/measure-theory/density-separability-and-convolution-in-lp.md`
- `library/measure-theory/density-separability-and-convolution-in-lp-examples.md`
- `research/frontier-27-batch-3.proof-contracts.json`

Authored A-page item ids:

- `def-translation-of-a-function-on-rn`, `def-c-c-and-c-c-infinity-on-rn`,
  `def-c-zero-on-rn`, `def-convolution-of-two-functions-on-rn`,
  `def-l-one-approximate-identity-on-rn`,
  `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`,
  `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p`,
  `thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum`,
  `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes`,
  `thm-box-step-functions-are-dense-in-l-p-of-rn`,
  `lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff`,
  `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess`,
  `thm-c-c-rn-is-dense-in-l-p-of-rn`,
  `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn`,
  `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`,
  `lem-countable-generators-yield-countable-set-algebras`,
  `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra`,
  `thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable`,
  `thm-l-infinity-of-unit-interval-is-not-separable`,
  `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p`,
  `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`,
  `lem-borel-representatives-make-the-convolution-integrand-borel-measurable`,
  `lem-convolution-is-independent-of-the-chosen-borel-representatives`,
  `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound`,
  `prop-l-one-convolution-is-bilinear-commutative-and-associative`,
  `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`,
  `lem-elementary-duality-formula-for-nonnegative-l-p-functions`,
  `thm-minkowski-integral-inequality`,
  `thm-young-convolution-inequality`,
  `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity`,
  `prop-mollifier-families-are-l-one-approximate-identities`,
  `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`,
  `thm-l-one-approximate-identities-converge-in-l-p`,
  `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions`,
  `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`

Authored B-page item ids:

- `ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function`,
  `ex-mollifying-the-unit-interval-indicator-at-two-scales`,
  `ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval`,
  `ex-initial-interval-indicators-are-one-separated-in-l-infinity`,
  `ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function`,
  `ex-the-gaussian-family-is-an-l-one-approximate-identity`,
  `fs-c-c-of-rn-is-dense-in-l-infinity-of-rn`,
  `fs-l-p-of-every-measure-space-is-separable-for-finite-p`,
  `fs-translation-is-continuous-in-l-infinity`,
  `fs-l-one-convolution-is-defined-at-every-point`,
  `cex-two-l-two-functions-can-have-convolution-outside-l-two`,
  `fs-convolution-is-measurable-for-every-lebesgue-representative`

Proof-contract artifact:

- `research/frontier-27-batch-3.proof-contracts.json` now covers the `41`
  proof-bearing batch-3 items, regenerated from the final on-disk Facts blocks
  and numbered proof steps after the canonical precheck repair.

Provenance rationale:

- The batch's definition, lemma, theorem, proposition, and corollary statements
  are source-backed and recorded as `literature-derived`; their local proof text
  is recorded as `ai-altered`.
- The companion-page examples, counterexample, and false statements are recorded
  as `ai-altered`, because the witness packaging and local computations are
  tailored to the library's exact route even when the underlying phenomenon is
  standard.
- No batch-3 item is recorded-not-proved. No `verification.judge` blocks were
  added to these in-flight draft files.

Narrowed or dropped claims:

- No batch-3 item id was dropped or rehomed.
- `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity`
  was narrowed on disk from the raw conjugate-endpoint slogan to the true range
  `1 < p < infinity`; the endpoint `p = 1`, `q = infinity` would make
  convolution with a bounded function need not vanish at infinity.
- `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions`
  was narrowed on disk to bounded continuous functions, which is the honest
  hypothesis under the batch's general `L^1` approximate-identity definition.
- `fs-convolution-is-measurable-for-every-lebesgue-representative` was retargeted
  from the design prose's unsound subtraction-map specialization to the weaker
  but actually false claim that the Borel-representative discipline is wholly
  unnecessary. The Euclidean subtraction map itself preserves Lebesgue
  measurability of Lebesgue measurable representatives, so the original
  specialization would have been a fabricated counterexample.
- `cex-two-l-two-functions-can-have-convolution-outside-l-two` uses the honest
  tail-decay witness $f=g=(1+|x|)^{-3/4}$, because the design prose's local
  singularity sketch $|x|^{-1/2}\mathbf{1}_{[-1,1]}$ is not an $L^2$ function.

Checks run after authoring on current bytes:

- `node tools/tsx-run.mjs tools/precheck.mts <41 proof-bearing batch-3 items>`
  -> `41 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-27-batch-3.pages.json`
  -> `content-policy: 47 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, trailing `OK`, with only the repository's standing unrelated
  `redundant-prereq` advisories
- `node tools/proof-contract.mjs research/frontier-27-batch-3.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 41/41 item(s) checked`
- `git diff --check -- items library/measure-theory research/frontier-27-batch-3.proof-contracts.json research/frontier-27-batch-3.notes.md`
  -> clean

Blockers:

- No Step-5 blocker remains on the current batch-3 bytes.
