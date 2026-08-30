# frontier-25 · Beta · batch 4 scaffold notes

Owned pairs:

- `simply-connected-plane-domains` / `simply-connected-plane-domains-examples`
- `the-riemann-zeta-function` / `the-riemann-zeta-function-examples`

Artifacts written by this dispatch:
`research/frontier-25-batch-4.pages.json`,
`research/frontier-25-batch-4.coverage.json`,
and this file.

Session date: Sunday, August 30, 2026.

## Design against spec

Recorded here, not adjudicated here.

- For `simply-connected-plane-domains`, the design and the live spec agree on
  order `335/336`, title, and the declared prerequisite pages. The design's
  `CA-16` shorthand is the same page the spec names explicitly as
  `the-riemann-mapping-theorem`.

- For `the-riemann-zeta-function`, the design and the live spec disagree
  materially on prerequisites.
  The design block at `research/plan-complex-analysis-track.md:2850` names
  CA-21, CA-18, `primes-and-the-fundamental-theorem-of-arithmetic`,
  FA-23 `schwartz-space-and-the-plancherel-theorem`, and FA-25
  `tempered-distributions-and-the-fourier-transform`.
  The live `research/plan-spec.json` and batch manifest name only
  `the-gamma-function`, `mittag-leffler-and-runges-theorem`, and
  `primes-and-the-fundamental-theorem-of-arithmetic`.
  Per dispatch I kept the page-level `requires` from the spec and did not
  edit plan structure.

Important current-disk closure note for zeta:

- the two functional-analysis pages named by the design are present in
  `research/plan-spec.json` only as empty page-level placeholders
  (`items_count: 0`) and have no page files under `library/` on current disk;
  so they are not usable as published item suppliers in this scaffold.
- Because of that, the scaffold keeps the design's `thm-jacobi-theta-transformation`
  as a local theorem on the zeta page rather than pretending the missing FA
  pages are already available.
- This is not a design override. It is the honest way to keep the page
  dependency-closed while the drift unit decides the page-level prerequisite
  mismatch.

## Scaffold shape

- `simply-connected-plane-domains` (A): **16 items**
- `simply-connected-plane-domains-examples` (B): **12 items**
- `the-riemann-zeta-function` (A): **22 items**
- `the-riemann-zeta-function-examples` (B): **12 items**

Both A pages are well below the 60-item split threshold, so no split is owed.

## Source set actually read

### Simply connected plane domains

Recorded in the coverage ledger:

1. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.
   `https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
2. Elias M. Stein and Rami Shakarchi, *Complex Analysis*
   `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`
3. Jiri Lebl, *Guide to Cultivating Complex Analysis*
   `https://www.jirka.org/ca/ca.pdf`

Source repair note:

- The design names Looijenga for the topology side. The plan bibliography does
  give the exact Looijenga URL
  `https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf`, but this
  runner did not already carry a durable fetch receipt for that URL and I did
  not fabricate one.
- I therefore kept the simply-connected coverage ledger to the three sources I
  could actually align with reopened or durable-receipt-backed text in this
  runner.
- The topological side of the page is still source-grounded in the scaffold:
  the actual contractibility, lifting, and `pi_1(S^1)` inputs are carried by the
  already-published prerequisite pages the batch depends on.

### The Riemann zeta function

Recorded in the coverage ledger:

1. Elias M. Stein and Rami Shakarchi, *Complex Analysis*
   `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`
2. K. Chandrasekharan, *Lectures on the Riemann Zeta-Function*
   `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`
   with preserved provenance
   `original_url: https://mathweb.tifr.res.in/sites/default/files/publications/ln/tifr01.pdf`

Source repair note:

- The design names Romik plus Stein-Shakarchi.
- I replaced the Romik slot with Chandrasekharan because this repo already
  contains a durable fetch receipt for the exact TIFR monograph URL and the
  monograph covers the continuation / functional-equation / zero-structure route
  the page actually needs.
- This avoids citing a design-named source without a runner-verifiable receipt.

## Pair-specific scope and route decisions

### `simply-connected-plane-domains`

- The A page follows the design's 16-item inventory exactly.
- The page's new work is the bridge layer only:
  homotopy invariance of holomorphic line integrals,
  trivial `pi_1 =>` null homology,
  connected spherical complement `=>` null homology,
  the reverse complement implication,
  the harmonic-conjugate bridge,
  and the contractibility / `pi_1` bridge.
- The primitive / zero-period / holomorphic logarithm / holomorphic root
  equivalences are not re-minted as new theorem statements; they stay cited
  inside `rem-analytic-equivalences-from-global-cauchy-theory` and the grand
  theorem itself, exactly as the design requires.
- The B page keeps the design's core witnesses:
  disc, plane, slit plane, convex and star-shaped domains on the positive side,
  and punctured plane / annulus / punctured disc on the negative side.
- I added one explicit simply-connected-but-not-star-shaped witness,
  `ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped`,
  because the design explicitly wants the `star-shaped` weakening separated and
  the simpler slit-plane witness only refutes convexity.

### `the-riemann-zeta-function`

- The A page follows the design's 22-item inventory exactly.
- The page keeps the design's mandatory functional equation, completed function,
  xi-function, zero-free line, critical strip, Hadamard product, and Bernoulli
  special-values package.
- Because the designated FA-23 / FA-25 suppliers are not on current disk as
  usable item pages, the theta transformation remains scaffolded as a local
  theorem rather than as an external dependency. This is the key authoring-risk
  item for the pair.
- The B page keeps the design's core examples and warnings:
  a short Euler-product approximation at `s=2`,
  `zeta(2)`,
  `zeta(0)`,
  the theta split at `1`,
  a trivial zero,
  the xi-product model,
  the eta-series continuation witness,
  the `s=1` harmonic-series divergence,
  and the four common false statements about the defining series, `zeta(-1)`,
  entireness, and uniqueness from the functional equation alone.

## Known limits and step-5 risks

- The simply-connected page's topology supplier in the design is repaired, not
  matched verbatim: the notes above explain why Looijenga is not in the actual
  coverage ledger.
- The zeta page's theta transformation is the main structural risk.
  If authoring cannot close it from the current closure, the proper repair is a
  drift-approved prerequisite adjustment or a deliberate local proof package,
  not a silent drop of the functional equation.
- The zeta source ledger uses a more open-access-friendly stack than the design.
  That is intentional and recorded, not an unnoticed source substitution.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-4.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
```

## Validation results

- `node -e "JSON.parse(...pages...); JSON.parse(...coverage...)"`:
  `json-parse: ok`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-4.coverage.json`
  passed on Sunday, August 30, 2026:
  `coverage-checklist: 2 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  passed on Sunday, August 30, 2026:
  `content-policy: 324 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`
  passed on Sunday, August 30, 2026:
  `source-fetch-check: 5/5 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Sunday, August 30, 2026. The final line was:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.
  ```

  The long preceding output was the repository's standing run-wide
  `redundant-prereq` advisory stream outside this batch.
- `node tools/prosecheck.mjs research/frontier-25-batch-4.notes.md --warnings`
  reported `0` errors and four heuristic `count-in-prose` warnings at the four
  item-count lines.
- `git diff --check -- research/frontier-25-batch-4.pages.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-4.notes.md`
  was clean.

## Step-3 fix pass

Stable review input used on Sunday, August 30, 2026:

- `research/frontier-25-alpha-a-step3-scaffold-review.md` is the authoritative
  Step-3 review for batch `4`.
- The review's batch-4 direct coverage repairs are already present on current
  bytes in `research/frontier-25-batch-4.coverage.json`: the canonical carrier
  set now includes the seven CA-17 bridge items
  `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains`,
  `lem-null-homology-implies-connected-spherical-complement`,
  `thm-null-homology-is-equivalent-to-global-harmonic-conjugates`,
  `lem-null-homology-gives-the-plane-or-disc-alternative`,
  `lem-the-plane-or-disc-alternative-gives-contractibility`,
  `lem-contractibility-implies-trivial-fundamental-group`,
  `rem-choice-strength-of-the-grand-equivalence`,
  together with the five CA-22 carrier items
  `rem-agreement-with-the-existing-infinitude-of-primes`,
  `def-jacobi-theta-function`,
  `def-completed-riemann-zeta-function`,
  `def-riemann-xi-function`, and
  `def-bernoulli-numbers-by-their-generating-function`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-4.coverage.json --require-destination`
  now confirms the repaired ledger with
  `coverage-checklist: 2 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`.

### B4-1

- Disposition: **explicit pushback; insufficiency preserved.** I did not alter
  the manifest to invent unavailable FA-23/FA-25 suppliers, and I did not
  silently replace the design's mandatory theta/Mellin route with a new local
  proof package inside this fix pass.
- Evidence:
  - `research/frontier-25-alpha-step0-drift.md` still marks
    `the-riemann-zeta-function` as `drift-rescoped` and says the proper repair
    is to build `schwartz-space-and-the-plancherel-theorem` (order `288.091`)
    and `tempered-distributions-and-the-fourier-transform` (order `288.095`)
    instead.
  - `research/plan-complex-analysis-track.md:2955-2957` still says the
    functional-equation proof closes by citing FA-23's Gaussian transform plus
    FA-25's Fourier-invariant Dirac comb and that this route "may not be
    dropped."
  - The live `research/plan-spec.json` entries for
    `schwartz-space-and-the-plancherel-theorem` and
    `tempered-distributions-and-the-fourier-transform` still have `items: []`,
    so current disk does not supply authored item-level carriers for the
    missing Poisson-summation interface.
  - The live batch manifest still scaffolds
    `thm-jacobi-theta-transformation` with only
    `def-jacobi-theta-function` and `thm-gaussian-integral` in its `deps`,
    which confirms that the missing FA supplier has not been honestly closed in
    batch `4`.
  - `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`
    still returns `source-fetch-check: 5/5 source(s) fetch-verified`, so this
    pushback is about route closure, not a dead-source artifact.
- Changed scaffold record:
  - `research/frontier-25-batch-4.pages.json`: no delta in this pass; the
    current manifest is preserved as the honest statement of the unresolved
    CA-22 routing defect.
  - `research/frontier-25-batch-4.coverage.json`: no delta in this pass; the
    Alpha-added carrier rows are already present and the source ledger remains
    fetch-verified.
  - `research/frontier-25-batch-4.notes.md`: appended this Step-3 fix-pass
    record.

Validation rerun on Sunday, August 30, 2026:

- `node -e "const fs=require('fs'); JSON.parse(fs.readFileSync('research/frontier-25-batch-4.pages.json','utf8')); JSON.parse(fs.readFileSync('research/frontier-25-batch-4.coverage.json','utf8')); console.log('json-parse: ok')"`:
  **pass** — `json-parse: ok`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-4.coverage.json --require-destination`:
  **pass** — `coverage-checklist: 2 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`:
  **pass** — `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`:
  **pass** — `source-fetch-check: 5/5 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  **pass**. Final receipt lines:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.
  NOTE: 753 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```
- `node tools/prosecheck.mjs research/frontier-25-batch-4.notes.md --warnings`:
  **pass with warnings** — `0` errors, `10` heuristic `count-in-prose`
  warnings, and final receipt `OK — no positional claim contradicts the spec.`
- `git diff --check -- research/frontier-25-batch-4.pages.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-4.notes.md`:
  **pass** — clean.

## Scaffold-fix round

This section records batch-`4` closure work for
`the-riemann-zeta-function`. On the live bytes re-read for this dispatch,
`research/frontier-25-scaffold-closure.json` carries one batch-`4`
`missing[]` row; the second entry below is retained as the earlier local B-page
repair history, not as a current closure-file row.

- `B4-closure-1` — `explicit pushback reaffirmed; no batch-local route repair`
  - Disposition: the closure finding remains open on current bytes.
  - Evidence: on Sunday, August 30, 2026, I re-read
    `research/frontier-25-alpha-step0-drift.md`, the live CA-22 design at
    `research/plan-complex-analysis-track.md:2955-2957`, and the current
    fetch-verified Stein-Shakarchi PDF at
    `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`
    over the recorded locator `Ch. 6 §2` and `§2.1`. Stein-Shakarchi still
    states in `§2.1` that the theta transformation comes from Poisson
    summation out of the earlier Fourier chapter, while the design still says
    the preferred closure route is FA-23's Gaussian transform plus FA-25's
    Fourier-invariant Dirac comb and that this route may not be dropped. The
    live `research/plan-spec.json` entries for
    `schwartz-space-and-the-plancherel-theorem` and
    `tempered-distributions-and-the-fourier-transform` still have `items: []`,
    and the live batch manifest still gives
    `thm-jacobi-theta-transformation` only
    `def-jacobi-theta-function` and `thm-gaussian-integral` in its `deps`.
  - Change: none in `research/frontier-25-batch-4.pages.json` or
    `research/frontier-25-batch-4.coverage.json`. This notes file now records
    the Poisson-interface defect as a scoped pushback after direct design and
    source re-read, not as a closed repair.

- `B4-history-2` — `historical local repair already applied`
  - Disposition: repaired on current bytes.
  - Evidence: on Sunday, August 30, 2026, I re-read the CA-22 B-page design at
    `research/plan-complex-analysis-track.md:2948-2950`, which still names
    "the harmonic series as the s=1 divergence" as the intended witness, and I
    reopened the two recorded zeta sources at their harvest locators:
    Stein-Shakarchi `Ch. 6 §2` / `§2.1` and Chandrasekharan's zeta opening at
    `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`.
    Both sources still define the Dirichlet series only on `Re s > 1` / `σ >
    1`; the foreign published B-page item `ex-harmonic-series-diverges` was a
    convenience dependency, not a design-mandated supplier. The recheck
    `validate-plan` failure was therefore local to the companion-page edge, not
    to the existence of the `s=1` counterexample itself.
  - Change: I removed the forbidden foreign examples-page dependency
    `ex-harmonic-series-diverges` from
    `cex-the-harmonic-series-shows-the-defining-series-diverges-at-one` in
    `research/frontier-25-batch-4.pages.json`, so the counterexample is now
    scaffolded as a self-contained harmonic-series verification on the zeta B
    page. I also added the canonical coverage carrier
    `At s=1 the defining Dirichlet series becomes the harmonic series and so
    does not define zeta there` to
    `research/frontier-25-batch-4.coverage.json`, naming that exact B-page
    item. This supersedes the earlier stale notes claim that batch `4`
    validated cleanly without a splice-sensitive plan check.

- Source verification for this scaffold-fix round:
  I re-opened the two recorded zeta-source HTTP(S) URLs on Sunday, August 30,
  2026 and confirmed that no URL recovery, `original_url` rewrite, or
  mathematical re-source is needed on the current bytes. The existing
  `fetch_verified` blocks in `research/frontier-25-batch-4.coverage.json`
  remain the current verification record.

- Validator rerun for this scaffold-fix round:
  `node tools/coverage-checklist.mjs research/frontier-25-batch-4.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs /private/tmp/frontier-25-batch-4-only-spliced-plan.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved ids
  among the 544 page(s) with item lists.` The long preceding output is the
  standing repository-wide `redundant-prereq` advisory stream outside batch
  `4`.

- Additional check on the edited bytes:
  `node tools/prosecheck.mjs research/frontier-25-batch-4.notes.md --warnings`
  -> `0` errors, `12` heuristic `count-in-prose` warnings, and final receipt
  `OK — no positional claim contradicts the spec.`
  `git diff --check -- research/frontier-25-batch-4.pages.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-4.notes.md`
  -> clean.

## Scaffold-fix round

- `B4-closure-1` — `explicit pushback reaffirmed; live closure still has one batch-4 finding`
  - Disposition: the only live batch-`4` closure finding on current bytes is
    still open, and the batch-local response remains pushback rather than a
    fabricated route repair.
  - Evidence: on Sunday, August 30, 2026, I re-read the live closure file
    `research/frontier-25-scaffold-closure.json`, the Step-0 drift receipt at
    `research/frontier-25-alpha-step0-drift.md:17-19`, the CA-22 design at
    `research/plan-complex-analysis-track.md:2955-2957`, and the current zeta
    source URLs already recorded in
    `research/frontier-25-batch-4.coverage.json`: Stein-Shakarchi,
    `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`,
    at `Ch. 6 §2` and `§2.1`, and Chandrasekharan,
    `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`,
    over the continuation / functional-equation discussion. The live closure
    file still lists only the FA-23/FA-25 Poisson-summation interface, the
    live `research/plan-spec.json` still has no authored item list for
    `schwartz-space-and-the-plancherel-theorem` or
    `tempered-distributions-and-the-fourier-transform`, and the live batch
    manifest still gives `thm-jacobi-theta-transformation` only
    `def-jacobi-theta-function` and `thm-gaussian-integral` in its `deps`.
  - Change: no delta in `research/frontier-25-batch-4.pages.json` or
    `research/frontier-25-batch-4.coverage.json`; the current manifest and
    coverage remain the honest record of the unresolved CA-22 routing defect.
    This appended round supersedes the earlier stale notes phrasing that
    implied two live batch-`4` closure rows.

- Validator rerun on Sunday, August 30, 2026:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-4.coverage.json`
  -> `coverage-checklist: 2 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved ids
  among the 540 page(s) with item lists.` The long preceding output is the
  standing repository-wide `redundant-prereq` advisory stream outside batch
  `4`.

## Scaffold-fix round

- `B4-closure-1` — `pushback reaffirmed after direct source and design reread`
  - Disposition: still open on live bytes; no honest batch-local route repair
    is available in the authorized batch-`4` files.
  - Evidence: on Sunday, August 30, 2026, I re-read the live closure row in
    `research/frontier-25-scaffold-closure.json`, the drift receipt at
    `research/frontier-25-alpha-step0-drift.md:17-19`, and the CA-22 design at
    `research/plan-complex-analysis-track.md:2955-2957`. I also re-opened the
    two zeta URLs already recorded in
    `research/frontier-25-batch-4.coverage.json`: Stein-Shakarchi,
    `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`,
    at `Ch. 6 §2` and `§2.1`, which explicitly sends the theta identity back
    to the Chapter 4 Poisson-summation result; and Chandrasekharan,
    `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`, at
    Lecture 12 §7 `The Theta Relation`, which derives the same identity by
    applying Poisson's formula to the Gaussian. On current disk,
    `research/plan-spec.json` still gives `items: []` for
    `schwartz-space-and-the-plancherel-theorem` and
    `tempered-distributions-and-the-fourier-transform`, while
    `thm-jacobi-theta-transformation` in
    `research/frontier-25-batch-4.pages.json` still depends only on
    `def-jacobi-theta-function` and `thm-gaussian-integral`.
  - Change: no delta in `research/frontier-25-batch-4.pages.json` or
    `research/frontier-25-batch-4.coverage.json`; this notes entry records the
    fetch-verified reread and preserves the manifest and coverage as the honest
    statement of the unresolved FA-23/FA-25 supplier gap.

- Validator rerun on Sunday, August 30, 2026:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-4.coverage.json`
  -> `coverage-checklist: 2 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved ids
  among the 540 page(s) with item lists.` The long preceding output is the
  standing repository-wide `redundant-prereq` advisory stream outside batch
  `4`.

- Additional check on Sunday, August 30, 2026:
  `node tools/prosecheck.mjs research/frontier-25-batch-4.notes.md --warnings`
  -> `0` errors, `14` heuristic `count-in-prose` warnings, and final receipt
  `OK — no positional claim contradicts the spec.`
  `git diff --check -- research/frontier-25-batch-4.pages.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-4.notes.md`
  -> clean.

## Scaffold-fix round

- `B4-closure-1` — `coverage repair applied; manifest pushback preserved`
  - Disposition: the live batch-`4` closure finding is still open at the
    manifest level, but the zeta harvest now records the exact Poisson /
    Gaussian / theta source interface that the finding names.
  - Evidence: on Sunday, August 30, 2026, I re-read
    `research/frontier-25-scaffold-closure.json`,
    `research/frontier-25-alpha-step0-drift.md:17-19`, and
    `research/plan-complex-analysis-track.md:2955-2957`. I also re-opened the
    fetch-verified zeta sources:
    Stein-Shakarchi at
    `https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf`,
    `Ch. 6 §2` and `§2.1`;
    Chandrasekharan at
    `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`,
    Lecture 11 §5 `Poisson's Formula` and Lecture 12 §7 `The Theta Relation`.
    Those fetch-verified readings support the same route the closure finding
    names: Poisson summation, the Gaussian transform used there, and then the
    theta reciprocity carried by `thm-jacobi-theta-transformation`. As a
    corroborating scout, I also re-opened Sutherland's MIT 18.785 Lecture 16
    at `https://math.mit.edu/classes/18.785/2015fa/LectureNotes16.pdf`,
    `§16.1` and `§16.1.1`, but I did not retain that URL in coverage because
    the current runner could not stamp either it or a same-text mirror through
    `source-fetch-check`. On current disk, `research/plan-spec.json` still
    gives `items: []` for
    `schwartz-space-and-the-plancherel-theorem` and
    `tempered-distributions-and-the-fourier-transform`, while
    `thm-jacobi-theta-transformation` in
    `research/frontier-25-batch-4.pages.json` still depends only on
    `def-jacobi-theta-function` and `thm-gaussian-integral`.
  - Change: `research/frontier-25-batch-4.coverage.json` now adds the exact
    Poisson / theta source trail for `thm-jacobi-theta-transformation` on the
    existing fetch-verified sources, including explicit Chandrasekharan theta
    rows and a tighter monograph locator.
    `research/frontier-25-batch-4.pages.json` remains unchanged because the
    designated FA-23 / FA-25 supplier pages are still absent on current disk,
    so inventing those carriers here would be dishonest.

- Validator rerun on Sunday, August 30, 2026:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-4.coverage.json`
  -> `coverage-checklist: 2 page(s), 67 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved ids
  among the 540 page(s) with item lists.` The final note on this run is that
  `753` planned pages still have no item list yet.
  `node tools/prosecheck.mjs research/frontier-25-batch-4.notes.md --warnings`

## Step-5 authoring

Sunday, August 30, 2026.

Authored page files:

- `library/complex-analysis/simply-connected-plane-domains.md`
- `library/complex-analysis/simply-connected-plane-domains-examples.md`

Authored A-page items:

- `thm-homotopy-invariance-of-holomorphic-line-integrals`
- `cor-cauchy-theorem-for-null-homotopic-loops`
- `thm-winding-number-equals-circle-degree`
- `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains`
- `lem-connected-spherical-complement-implies-null-homology`
- `lem-null-homology-implies-connected-spherical-complement`
- `rem-analytic-equivalences-from-global-cauchy-theory`
- `thm-null-homology-is-equivalent-to-global-harmonic-conjugates`
- `lem-null-homology-gives-the-plane-or-disc-alternative`
- `lem-the-plane-or-disc-alternative-gives-contractibility`
- `lem-contractibility-implies-trivial-fundamental-group`
- `thm-grand-equivalence-for-simply-connected-plane-domains`
- `rem-simply-connected-convention-for-plane-domains`
- `cor-spherical-complement-characterization-of-plane-simple-connectivity`
- `cor-winding-number-classifies-loops-in-the-punctured-plane`
- `rem-choice-strength-of-the-grand-equivalence`

Authored B-page items:

- `ex-the-unit-disc-satisfies-all-grand-equivalence-clauses`
- `ex-the-complex-plane-satisfies-all-grand-equivalence-clauses`
- `ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm`
- `ex-every-convex-plane-domain-is-simply-connected`
- `ex-every-star-shaped-plane-domain-is-simply-connected`
- `ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped`
- `cex-the-punctured-plane-separates-c-complement-from-spherical-complement`
- `cex-a-round-annulus-is-connected-but-not-simply-connected`
- `cex-the-punctured-disc-is-connected-but-not-simply-connected`
- `fs-connected-complement-in-c-implies-simple-connectivity`
- `fs-simply-connected-plane-domains-are-convex`
- `fs-simply-connected-plane-domains-are-star-shaped`

Proof-contract artifact authored:

- `research/frontier-25-batch-4.proof-contracts.json`

Provenance and route rationale:

- The bridge theorems and lemmas are tagged `ai-altered` or `ai-generated` at the statement/proof level according to whether the page is assembling a standard literature route or supplying a local connective proof.
- The analytic sources stay within the batch coverage stack: Ahlfors, Stein-Shakarchi, and Lebl. The contractibility and fundamental-group bridge uses the already-published topology supplier stack rather than inventing a new external pair.
- The proof-contract citations were regenerated from the final on-disk facts blocks and numbered proof steps after precheck stabilization, so the contract evidence matches the actual authored prose.

Narrowed or repaired claims:

- `lem-null-homology-gives-the-plane-or-disc-alternative` carries an explicit `Assume the Axiom of Choice.` hypothesis, and `thm-grand-equivalence-for-simply-connected-plane-domains` carries the same global hypothesis. This is a deliberate narrowing needed to avoid widening the cited statement of `thm-riemann-mapping-theorem`, whose current published supplier is choice-bearing.
- `thm-null-homology-is-equivalent-to-global-harmonic-conjugates` was repaired away from the forbidden B-page dependency on `ex-log-modulus-is-harmonic-on-the-punctured-plane`; the harmonicity of `z \mapsto \log|z-p|` is now established inline from direct derivatives instead of leaning on an examples-page carrier.
- No planned item was dropped.

Blockers:

- No live batch-4 blocker remains for the simply-connected pair on current bytes.
- The geometric core of `lem-null-homology-implies-connected-spherical-complement` is the Jordan-neighborhood enclosure argument recorded in the proof; I did not open a further blocker because the authored item, page files, and strict proof-contract now close under the current batch scope and validators.

Checks run on Sunday, August 30, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <25 proof-bearing batch items>` -> pass, `25 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs <28 batch items + 2 page files>` -> pass, `30 file(s)` clean.
- `node tools/content-policy.mjs research/frontier-25-batch-4.pages.json` -> pass, `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.`
- `node tools/proof-contract.mjs research/frontier-25-batch-4.proof-contracts.json --strict` -> pass, `0 error(s), 0 warning(s), 25/25 item(s) checked`.
- `git diff --check -- items library/complex-analysis research/frontier-25-batch-4.proof-contracts.json research/frontier-25-batch-4.notes.md` -> clean.
  -> `0` errors, `16` heuristic `count-in-prose` warnings, and final receipt
  `OK — no positional claim contradicts the spec.`
  `git diff --check -- research/frontier-25-batch-4.pages.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-4.notes.md`
  -> clean.
