# frontier-24 · Alpha group `a` · Step 3 recheck

Group `a` owns batches `1`, `2`, and `7` in
`research/frontier-24-alpha-groups.json`: CA-7
`noether-normalisation-and-nullstellensatz`, RT-4
`induced-representations-and-frobenius-reciprocity`, and MA-11
`the-diagram-lemmas-in-an-abelian-category`.

I re-read the governing task files on Saturday, August 29, 2026, then verified
the live bytes in:

- `research/frontier-24-alpha-a-step3-scaffold-review.md`
- `research/frontier-24-batch-1.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-2.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-7.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-1.pages.json`
- `research/frontier-24-batch-2.pages.json`
- `research/frontier-24-batch-7.pages.json`
- `research/frontier-24-batch-1.coverage.json`
- `research/frontier-24-batch-2.coverage.json`
- `research/frontier-24-batch-7.coverage.json`
- `research/plan-spec.json`
- `research/frontier-24-alpha-a-scope-decisions.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-24 --group a`
  - result: `scope-decisions: a: 5 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-24 --group a`
  - result: `scope-decisions: 5 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-1.coverage.json --require-destination`
  - result: `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-2.coverage.json --require-destination`
  - result: `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-7.coverage.json --require-destination`
  - result: `coverage-checklist: 1 page(s), 62 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  - result: `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-1.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-2.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-7.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`

No newly pending scope row appeared after refresh, so no additional
scope-decision resolution was required.

## Batch 1 dispositions

### Coverage repair for omitted CA-7 carriers — sufficient

- Disposition: **closed**.
- Evidence: the live manifest still declares
  `lem-zariski-lemma-one-variable-localisation-not-finite`,
  `lem-vanishing-ideal-is-radical`,
  `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical`, and
  `cor-affine-radical-ideal-point-separation`, and the current coverage file
  now carries canonical `included` rows for all four exact ids.
- Plan/route check: the current plan entry still places
  `noether-normalisation-and-nullstellensatz` immediately after
  `integral-extensions-and-going-up-examples`, and nothing in the manifest,
  coverage, or plan suggests a different CA-7 route than the one Alpha
  certified in the scaffold review.

### `99d92749ffe85d9df3ce90de120d855ccba3e3ebb880b8326b19956b29442afb` — sufficient

- Disposition: **pushback stands**.
- Evidence: `research/frontier-24-alpha-a-scope-decisions.json` still records
  Milne Theorem `9.5` as `out-of-scope`, and the current manifest still closes
  the opening transcendence-degree route with the exchange and tower-additivity
  consequences rather than with a separate page-level carrier for the stronger
  finite-cardinality theorem.

### `b8693950064e6abd20c8b98a2ee0035047b01939506add6f2b6a867eb863ff09` — sufficient

- Disposition: **pushback stands**.
- Evidence: `research/frontier-24-alpha-a-scope-decisions.json` still records
  Altman-Kleiman Corollary `(15.6)` as `out-of-scope`, and the current plan
  still places `krull-dimension-and-height-theorems` later in the
  commutative-algebra track, which matches the recorded rationale that the
  maximal-ideal generator-count bound belongs to that later height/regularity
  interface rather than to the live CA-7 page.

## Batch 2 dispositions

### Coverage repair for omitted RT-4 definitions — sufficient

- Disposition: **closed**.
- Evidence: the live manifest still declares
  `def-induced-character-of-a-complex-representation` and
  `def-conjugate-representation-and-conjugate-character`, and the current
  coverage file now carries canonical `included` rows for both exact ids.
- Plan/route check: the current plan entry still places
  `induced-representations-and-frobenius-reciprocity` after
  `free-modules-and-exact-sequences`; there is no manifest, coverage, or plan
  drift requiring any further RT-4 scaffold change.

### `c230610388761e175c23ee1e18e975204688e0fe42dba9387eff70f0817d8855` — sufficient

- Disposition: **pushback stands**.
- Evidence: `research/frontier-24-alpha-a-scope-decisions.json` still records
  Webb Example `4.3.6` as `out-of-scope`, and the current scaffold still
  carries two worked `S_3` inductions plus the reciprocity check. No current
  A-page item or B-page witness requires the excluded third induction example.

## Batch 7 dispositions

### `a563e62d36bd30d97e587a87f9982e63429fdd10738b998d7e17d06c15616ef2` — sufficient

- Disposition: **pushback stands**.
- Evidence: the current coverage file still records Mac Lane Exercise `7` as
  `out-of-scope`, and the current manifest still keeps the page on the diagram
  lemmas themselves, their duality closure, exact-functor transport, and the
  scoped B-page examples/counterexamples rather than on the separate category
  `Ses(A)`.

### `b6d11a86483d6dfd8defc47414987752f4ef3e28c5bf2570b3800c35809ab559` — sufficient

- Disposition: **pushback stands**.
- Evidence: the current coverage file still records Weibel Proposition
  `1.3.4` as `deferred` to `long-exact-sequences-in-homology`, and the current
  plan still places that later page after
  `the-diagram-lemmas-in-an-abelian-category`. The live MA-11 scaffold still
  owns only the categorical naturality of the snake connecting morphism, not
  the homology long-exact-sequence naturality theorem.

## Verdicts

- `noether-normalisation-and-nullstellensatz`: **sufficient**
- `induced-representations-and-frobenius-reciprocity`: **sufficient**
- `the-diagram-lemmas-in-an-abelian-category`: **sufficient**

The current `research/frontier-24-alpha-a-step3-verdicts.json` already matches
these verified outcomes, so no verdict-byte change was required in this
recheck pass.
