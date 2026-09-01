# frontier-28 batch 2 notes - beta scaffold

Owned pairs:

- `rees-modules-artin-rees-and-hilbert-samuel-theory` / `rees-modules-artin-rees-and-hilbert-samuel-theory-examples`
- `flatness-and-faithful-flatness` / `flatness-and-faithful-flatness-examples`

Artifacts written in this dispatch:

- `research/frontier-28-batch-2.pages.json`
- `research/frontier-28-batch-2.coverage.json`
- this file

Session date: Tuesday, September 1, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-28-beta-batch.task.md`,
`research/frontier-28-beta-2.task.md`,
`research/plan-spec.json`,
[research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:981),
and the cross-track mention at
[research/plan-algebraic-geometry-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebraic-geometry-track.md:65).

### CA-11 -- `rees-modules-artin-rees-and-hilbert-samuel-theory`

The live spec and the design agree on:

- A/B page ids
- title
- order
- category

The prerequisite prose does not match literally:

- the design block describes the broader conceptual closure `CA-1--CA-5 and
  CA-10`, plus published polynomial-ring material;
- the live plan entry and generated batch task give the direct page edge only as
  `["krull-dimension-and-height-theorems-examples"]`.

I followed the live `research/plan-spec.json` page-level `requires` exactly and
recorded the broader design closure here rather than mutating the manifest.

### CA-12 -- `flatness-and-faithful-flatness`

I opened both matched design locations before scaffolding:

- [research/plan-algebraic-geometry-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebraic-geometry-track.md:65)
- [research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:1043)

Control decision:

- the algebraic-geometry track mention is not a scaffold block; it only records
  that later geometry pages cite this flatness supplier;
- the commutative-algebra track is the controlling scaffold source because it
  carries the full page inventory, route notes, and the later `R-1 ownership
  receipt` dated August 15, 2026.

Within that controlling design, the later `R-1` receipt controls over the older
stale rows where they conflict. I therefore did **not** re-mint claims already
published upstream in MOD-3:

- `def-flat-and-faithfully-flat-modules-and-ring-maps`
- `thm-flatness-criteria-by-injections-and-ideals`
- `prop-extension-of-scalars-preserves-flat-modules`
- `prop-transitivity-of-flatness-under-change-of-rings`

The live spec and the design agree on:

- A/B page ids
- title
- order
- category

The prerequisite prose again does not match literally:

- the design names the broader closure `CA-1--CA-3 and CA-11`, plus published
  tensor, localization, and exact-sequence material;
- the live plan entry and generated task give the direct page edge only as
  `["rees-modules-artin-rees-and-hilbert-samuel-theory-examples"]`.

I kept the manifest page-level `requires` at the live spec value and treated the
broader design closure as explanatory context only.

## Item census and split check

- A page `rees-modules-artin-rees-and-hilbert-samuel-theory`: `17` items
- B page `rees-modules-artin-rees-and-hilbert-samuel-theory-examples`: `7` items
- A page `flatness-and-faithful-flatness`: `15` items
- B page `flatness-and-faithful-flatness-examples`: `7` items

Both A pages are well below the `60`-item split ceiling, so no split is needed.

## Route choices

### CA-11

I kept the design's order and made the proof spine explicit:

1. graded objects and Hilbert series first;
2. associated graded and Rees constructions before any stabilization theorem;
3. Rees finiteness before Artin-Rees, and Artin-Rees before Krull
   intersection;
4. Hilbert-Samuel definitions and existence before the dimension comparison;
5. dimension and systems of parameters before additivity and the
   reduction-by-a-parameter theorem; and
6. positivity of multiplicity last, as a consequence rather than a definition.

Important choices:

- I kept `thm-krull-intersection-theorem` on this page, exactly as the design
  requires, instead of pushing it backward onto the earlier Noetherian page.
  The frontier-18 scope notes explicitly say that this run's route wants the
  graded/Rees machinery here.
- I did not add a separate filter-regular definition item. The reduction theorem
  is scaffolded in the explicit annihilator-correction form the design calls
  for, so the author can state the needed hypothesis inside the theorem rather
  than minting a free-standing vocabulary item this page does not otherwise use.
- I kept the associated-graded and Rees constructions distinct. Merging them
  would hide the exact filtration-to-graded transition that the later
  Hilbert-Samuel proof spends.

### CA-12

I followed the commutative-algebra design's later amendment rather than its
stale overlapping rows:

1. cite the published combined definition from MOD-3 instead of re-defining flat
   and faithfully flat modules or ring maps;
2. keep local closure results and the equational criterion on this page;
3. keep the idempotent-ideal quotient corollary here, because it is a genuine
   flatness interface not already published upstream;
4. replace the duplicated exactness-detection theorem by the nontrivial
   characterization `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres`;
5. keep faithfully flat descent, the Tor-free local criteria, finite-flat local
   freeness, the Noetherian projectivity corollary, and going down exactly on
   this page.

Important choices:

- I narrowed the old design bundle
  `thm-sums-summands-base-change-and-composition-of-flat-modules` to the
  genuinely new direct-sum/direct-summand statement. Base change and
  transitivity are already published on disk, so reminting them here would be an
  explicit duplicate claim.
- I dropped the stale local `ideal criterion` row because the published
  `thm-flatness-criteria-by-injections-and-ideals` already owns that theorem.
- I kept the local criteria in the Tor-free formulations that the design
  demands. The Stacks Tor form is harvested and explicitly marked
  `out-of-scope` rather than silently rewritten into a different theorem.

## Source set actually read

I reopened every recorded source URL in the web reader on Tuesday, September 1,
2026 before writing its harvest rows.

### CA-11

1. Allen Altman and Steven Kleiman, *A Term of Commutative Algebra*:
   `https://web.mit.edu/18.705/www/12Nts.pdf`
2. J. S. Milne, *A Primer of Commutative Algebra*:
   `https://www.jmilne.org/math/xnotes/CA.pdf`
3. Stacks Project, Sections 10.51, 10.56, 10.58, 10.59, 10.60, and 10.70:
   `https://stacks.math.columbia.edu/tag/00IJ`
   `https://stacks.math.columbia.edu/tag/00JL`
   `https://stacks.math.columbia.edu/tag/00JV`
   `https://stacks.math.columbia.edu/tag/00K4`
   `https://stacks.math.columbia.edu/tag/00KD`
   `https://stacks.math.columbia.edu/tag/052P`

How they are used:

- Altman-Kleiman is the primary lecture-note treatment for the CA-11 route as
  designed: Hilbert functions, Rees constructions, Artin-Rees, Krull
  intersection, and the Hilbert-Samuel dimension theorem.
- Milne is the independent full-note treatment for Artin-Rees and the
  dimension-theory interface.
- Stacks is the independent check for the graded, associated-graded, Rees, and
  Hilbert-Samuel definitions and for the dimension/additivity refinements.

### CA-12

1. Allen Altman and Steven Kleiman, *A Term of Commutative Algebra*:
   `https://web.mit.edu/18.705/www/12Nts.pdf`
2. J. S. Milne, *A Primer of Commutative Algebra*:
   `https://www.jmilne.org/math/xnotes/CA.pdf`
3. Stacks Project, Sections 10.39, 10.78, and 10.99:
   `https://stacks.math.columbia.edu/tag/00H9`
   `https://stacks.math.columbia.edu/tag/00NV`
   `https://stacks.math.columbia.edu/tag/00MD`

How they are used:

- Altman-Kleiman is the primary source for direct sums/summands, the
  faithfully-flat spectrum criteria, the idempotent quotient corollary, and the
  equational criterion route.
- Milne is the independent lecture-note treatment for faithful-flat
  characterisations and flat going down.
- Stacks supplies the exact published overlap checks, the Tor-free local
  criteria, and the finite-flat local/projective results in the exact forms
  this page keeps.

## URL verification and source handling

All recorded source URLs were reopened successfully in the web reader on
Tuesday, September 1, 2026. None needed URL recovery, archive substitution, or
`original_url` provenance handling in this batch.

The runner's shell network is restricted, so I recorded manual
`fetch_verified` blocks of the same accepted form already used elsewhere in this
repository:

- `at`
- `kind`
- `verified_via: "web-open"`
- `pages` for PDFs
- a short note that the URL was opened in the web reader and that the receipt is
  manual because the shell-side fetcher is network-restricted

The coverage ledger remains A-page scoped, matching the current scaffold-stage
contract for this repository. The B-page examples are scaffolded in
`research/frontier-28-batch-2.pages.json` and named as deferred destinations in
the A-page harvest where appropriate.

## Validation checklist

I am running the scaffold-stage checks relevant to this batch:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-2.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-28-batch-2.coverage.json --out /tmp/frontier-28-batch-2-url-liveness.json --recover --fail-on-dead
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-28-batch-2-spliced-plan.json
git diff --check
```

The temporary spliced plan will replace the four live `frontier-28` batch-2
page entries inside `research/plan-spec.json` with the scaffolded entries from
`research/frontier-28-batch-2.pages.json`, so `validate-plan` checks the actual
proposed batch rather than the still-empty run plan.

## Validation results

- `node -e "JSON.parse(...pages.json); JSON.parse(...coverage.json)"`
  passed on Tuesday, September 1, 2026: `json-parse: ok`.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-2.coverage.json`
  passed on Tuesday, September 1, 2026: `2 page(s), 69 harvested result(s),
  0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  passed on Tuesday, September 1, 2026: `168 scoped item(s), 0 error(s),
  0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json --stamp`
  passed on Tuesday, September 1, 2026: `13/13 source(s) fetch-verified
  (0 newly stamped)`.
  This pass consumed the manual `web-open` receipts already written into the
  coverage file, so it is a gate pass on the current durable receipts, not a
  claim that the shell re-fetched every body successfully.

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json`
  passed on Tuesday, September 1, 2026: `13/13 source(s) fetch-verified`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on Tuesday, September 1, 2026. The output still includes the
  repository's standing out-of-batch `redundant-prereq` advisories, but it ends
  with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.
  ```

- `node tools/validate-plan.mjs /tmp/frontier-28-batch-2-spliced-plan.json`
  passed on Tuesday, September 1, 2026. It ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 626 page(s) with item lists.
  ```

- `git diff --check -- research/frontier-28-batch-2.pages.json research/frontier-28-batch-2.coverage.json research/frontier-28-batch-2.notes.md`
  passed on Tuesday, September 1, 2026 with no whitespace or patch-format
  defects.

### URL liveness blocker

`node tools/url-sweep.mjs --coverage research/frontier-28-batch-2.coverage.json --out /tmp/frontier-28-batch-2-url-liveness.json --recover --fail-on-dead`
did not yield a usable result in this runner on Tuesday, September 1, 2026:

- the first invocation produced no output and had to be interrupted manually;
- a second invocation wrapped as
  `timeout 90s node tools/url-sweep.mjs ... --out /tmp/frontier-28-batch-2-url-liveness.json --recover --fail-on-dead`
  exited `124` after the outer timeout;
- no `/tmp/frontier-28-batch-2-url-liveness.json` file was written.

This is therefore a shell-side liveness blocker in the current environment, not
evidence of a dead recorded source. Every recorded URL was already reopened in
the web reader on Tuesday, September 1, 2026, and no source-specific recovery
or re-sourcing was needed on the citations themselves.

## Step-3 fix pass

Date: Tuesday, September 1, 2026.

- Stable review file checked:
  `research/frontier-28-alpha-a-step3-scaffold-review.md`.

- Finding id: none assigned in the alpha review's batch-2 direct-repair row for
  the missing carrier of
  `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`.
  Disposition: accepted as already repaired on current bytes; no pushback.
  Evidence: the alpha review's `Direct repairs applied` section names that exact
  missing-carrier defect for batch `2`, and the current
  `research/frontier-28-batch-2.coverage.json` canonical ledger for
  `rees-modules-artin-rees-and-hilbert-samuel-theory` now includes the direct
  carrier row
  `The filtration induced on a submodule from the ambient ideal-adic filtration is equivalent to the submodule's intrinsic ideal-adic filtration.`
  with item
  `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`.

- Source verification evidence in this pass:
  reopened all current batch-2 source URLs in the web reader on Tuesday,
  September 1, 2026:
  `https://web.mit.edu/18.705/www/12Nts.pdf`,
  `https://www.jmilne.org/math/xnotes/CA.pdf`,
  `https://stacks.math.columbia.edu/tag/00JL`,
  `https://stacks.math.columbia.edu/tag/00JV`,
  `https://stacks.math.columbia.edu/tag/00K4`,
  `https://stacks.math.columbia.edu/tag/00KD`,
  `https://stacks.math.columbia.edu/tag/052P`,
  `https://stacks.math.columbia.edu/tag/00IJ`,
  `https://stacks.math.columbia.edu/tag/00H9`,
  `https://stacks.math.columbia.edu/tag/00MD`, and
  `https://stacks.math.columbia.edu/tag/00NV`.
  All eleven live URLs resolved successfully, covering the thirteen source rows
  recorded in `research/frontier-28-batch-2.coverage.json`, so no URL recovery,
  archive substitution, harvest rewrite, or `original_url` preservation was
  needed in this pass.

- Validator results on current bytes:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-2.coverage.json`
  -> `coverage-checklist: 2 page(s), 70 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json`
  -> `source-fetch-check: 13/13 source(s) fetch-verified`.
  `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, with only the standing repo-wide `redundant-prereq`
  advisories, ending with `OK — declared page order is acyclic and consistent;
  no item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the 622 page(s) with item lists.`
  `node tools/validate-plan.mjs /tmp/frontier-28-batch-2-overlay-plan.json`
  -> exit `0`, again with only the standing repo-wide `redundant-prereq`
  advisories, ending with `OK — declared page order is acyclic and consistent;
  no item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the 626 page(s) with item lists.`
  `git diff --check -- research/frontier-28-batch-2.pages.json research/frontier-28-batch-2.coverage.json research/frontier-28-batch-2.notes.md`
  -> exit `0`.

- Changed scaffold record:
  no change to `research/frontier-28-batch-2.pages.json`;
  refreshed all thirteen `fetch_verified.at` receipts in
  `research/frontier-28-batch-2.coverage.json` to
  `2026-09-01T03:41:31Z` after the live web-reader recheck;
  appended this Step-3 fix-pass receipt in
  `research/frontier-28-batch-2.notes.md`.

## Step-5 authoring

Date: Tuesday, September 1, 2026.

- Authored pages:
  `library/commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory.md`,
  `library/commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory-examples.md`,
  `library/commutative-algebra/flatness-and-faithful-flatness.md`,
  and `library/commutative-algebra/flatness-and-faithful-flatness-examples.md`.

- Authored CA-11 / CA-11B item ids:
  `def-graded-ring-and-graded-module`,
  `def-hilbert-function-and-hilbert-series`,
  `thm-hilbert-serre-theorem`,
  `def-associated-graded-ring-and-module`,
  `def-rees-algebra-and-rees-module`,
  `lem-rees-module-finiteness-and-stable-filtrations`,
  `thm-artin-rees-lemma`,
  `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`,
  `thm-krull-intersection-theorem`,
  `def-hilbert-samuel-function-and-polynomial`,
  `thm-existence-of-hilbert-samuel-polynomial`,
  `def-hilbert-samuel-multiplicity`,
  `thm-hilbert-samuel-dimension-theorem`,
  `thm-dimension-and-parameters-for-modules`,
  `thm-additivity-of-hilbert-samuel-multiplicity`,
  `thm-multiplicity-under-reduction-by-a-parameter`,
  `cor-parameter-ideal-multiplicity-positive`,
  `ex-hilbert-series-of-a-polynomial-ring`,
  `ex-associated-graded-of-a-local-ring`,
  `ex-artin-rees-intersection`,
  `ex-krull-intersection-in-a-local-domain`,
  `ex-hilbert-samuel-polynomial-of-a-dvr`,
  `ex-hilbert-samuel-multiplicity-of-a-plane-curve`,
  `ex-hilbert-samuel-finite-length-case`.

- Authored CA-12 / CA-12B item ids:
  `thm-direct-sums-and-direct-summands-preserve-flatness`,
  `thm-localisations-are-flat`,
  `thm-flatness-is-local`,
  `thm-equational-criterion-for-flatness`,
  `cor-flat-quotients-and-idempotent-ideals`,
  `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres`,
  `thm-faithfully-flat-ring-map-characterisations`,
  `cor-faithfully-flat-ring-maps-are-injective`,
  `thm-faithfully-flat-descent-of-flatness`,
  `cor-faithfully-flat-descent-of-finite-generation`,
  `thm-local-criterion-for-flatness-ideal-form`,
  `thm-local-criterion-for-flatness-closed-fibre-form`,
  `thm-finite-flat-modules-over-local-rings-are-free`,
  `cor-finite-flat-noetherian-modules-are-projective`,
  `thm-flat-going-down`,
  `ex-polynomial-algebras-are-faithfully-flat`,
  `ex-localisations-not-faithfully-flat`,
  `ex-fraction-field-flat-not-projective`,
  `ex-flat-idempotent-quotient`,
  `ex-nonflat-quotient-module`,
  `ex-faithfully-flat-principal-open-cover`,
  `ex-finite-flat-module-over-a-local-ring`.

- Wrote `research/frontier-28-batch-2.proof-contracts.json` for the 40
  proof-bearing batch-2 items.

- Provenance rationale kept truthful:
  CA-11 and CA-12 theorem statements stay literature-derived unless the written
  statement is explicitly narrowed on disk; proofs are mostly `ai-altered`
  because the source treatments were decomposed into the library phase format
  and, on the flatness page, rewritten to avoid future Tor dependencies.
  Example statements remain literature-derived and their local computations are
  written as `ai-altered` proofs where the source only gave the worked idea.

- Narrowed or qualified claims kept deliberately:
  `thm-finite-flat-modules-over-local-rings-are-free` is stated honestly on the
  current bytes only in the Noetherian local case, and the page summary says so.
  `cor-flat-quotients-and-idempotent-ideals` keeps the standard finitely
  generated idempotent-ideal equivalence, but its proof text marks the global
  idempotent-generator direction as the classical patching step rather than
  pretending that a longer local-to-global argument was expanded here.
  The choice-boundary remarks were left explicit on
  `thm-krull-intersection-theorem`,
  `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres`,
  `thm-faithfully-flat-ring-map-characterisations`,
  and `thm-flat-going-down`.

- Dropped claims: none.

- Blockers: none for Step 5 authoring.

- Checks actually run on the authored bytes:
  `node tools/tsx-run.mjs tools/precheck.mts <40 batch proof-bearing items>`
  failed initially on phase-format issues; I applied the canonical precheck
  repairs and reran; final result: `40 checked, 0 failing — all clean`.
  `node tools/content-policy.mjs research/frontier-28-batch-2.pages.json`
  -> `content-policy: 46 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, with only the standing repository-wide `redundant-prereq`
  advisories.
  `node tools/proof-contract.mjs research/frontier-28-batch-2.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 40/40 item(s) checked`.
