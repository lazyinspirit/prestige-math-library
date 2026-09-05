# frontier-30 · Alpha group `a` · Step 3 scaffold recheck

Date checked: Saturday, September 5, 2026.

Scope owned by this dispatch: batches `1`, `16`, and `17`, covering:

- `brauer-characters-and-decomposition-matrices`
- `second-cohomology-and-abelian-kernel-extensions`
- `harish-chandra-isomorphism-casimir-and-central-characters`
- `artin-induction-and-rational-characters`

I re-checked the current disk state against:

- `research/frontier-30-alpha-a-step3-scaffold-review.md`
- `research/frontier-30-batch-1.notes.md`, `research/frontier-30-batch-16.notes.md`, and `research/frontier-30-batch-17.notes.md`, including each `## Step-3 fix pass`
- `research/frontier-30-batch-1.pages.json`, `research/frontier-30-batch-16.pages.json`, and `research/frontier-30-batch-17.pages.json`
- `research/frontier-30-batch-1.coverage.json`, `research/frontier-30-batch-16.coverage.json`, and `research/frontier-30-batch-17.coverage.json`
- `research/plan-representation-theory-lie-track.md`
- `research/plan-representation-theory-groups-track.md`
- the live `research/plan-spec.json`
- `research/frontier-30-alpha-a-scope-decisions.json`

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group a`
  Result before resolution: `scope-decisions: a: 8 decline(s), 1 pending`.
- Resolved the one new pending row (`Definition 5.2` from the archived Sakellaridis source URL) in `research/frontier-30-alpha-a-scope-decisions.json`.
- `node tools/scope-decisions.mjs check --run frontier-30 --group a`
  Result after resolution: `scope-decisions: 8 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-30-batch-1.coverage.json --require-destination`
  Result: `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-30-batch-16.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 73 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-30-batch-17.coverage.json`
  Result: `coverage-checklist: 1 page(s), 29 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-1.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-16.coverage.json`
  Result: `source-fetch-check: 6/6 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-17.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/manifest-deps.mjs research/frontier-30-batch-1.pages.json research/frontier-30-batch-16.pages.json research/frontier-30-batch-17.pages.json`
  Result: `manifest-deps: 129 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-1.pages.json research/frontier-30-batch-16.pages.json research/frontier-30-batch-17.pages.json`
  Result: `content-policy: 129 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: pass, ending in `OK`; only the standing repository-wide `redundant-prereq` advisories remain.

## Scope receipt

The refreshed scope ledger is now current on disk. The only new pending row was
batch `16`'s `Definition 5.2` deferment, because the current coverage source
URL is the archived Sakellaridis PDF rather than the live JHU URL used by the
older exact-carry receipt. The deferment still stands: batch `16` still routes
that universal Verma-module definition to RL-2
`verma-modules-and-shapovalov-forms`, and the current RL-2 design still
explicitly owns `def-verma-module` and
`thm-universal-property-of-verma-modules`.

Batch `1` still has no scope-decision rows.

Batch `16` still has six current rows: two exact later-page deferments
(`Definition 5.2` to RL-2 and the `U_chi` paragraph to RL-10) and four
non-blocking `owner-decision` exclusions (`Corollaries 14.3`, `14.4`, `14.5`,
and Kleshchev `Example 2.3.4(ii)`).

Batch `17` still has two current rows, both non-blocking on current bytes:
Kay Yang `Theorem 6` remains an honest owner-level scope exclusion, and the
Magma Schur-index definition text still deferment-routes exactly to RG-3
`schur-indices-and-fields-of-definition`.

## Dispositions

### Finding: `brauer-characters-and-decomposition-matrices`

Disposition: `sufficient`.

Evidence:

- the current manifest row
  `fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible` now
  depends only on the local A-page items
  `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups` and
  `def-decomposition-numbers-and-decomposition-matrix`
- the current manifest row
  `ex-decomposition-matrix-of-s-three-in-characteristic-two` now depends only
  on local scaffold items plus `ex-p-regular-classes-of-s-three`
- batch-1 coverage still passes with `44` harvested results and `4/4`
  fetch-verified sources
- no current scope row or plan-level failure blocks this page

Changed scaffold record: none.

### Finding: `second-cohomology-and-abelian-kernel-extensions`

Disposition: `sufficient`.

Evidence:

- the current batch-1 notes still keep the degree-two comparison theorem and
  the five-term exact-sequence interpretation as local page obligations rather
  than hiding them behind unauthored upstream pages
- batch `1` still has no current scope-decision rows, matching the Step-3
  review's no-finding outcome for this page
- batch-1 coverage still passes with `44` harvested results and `4/4`
  fetch-verified sources
- the focused manifest, policy, and plan checks show no current dependency,
  unresolved-id, or forbidden B-page defect on this page

Changed scaffold record: none.

### Finding: `harish-chandra-isomorphism-casimir-and-central-characters`

Disposition: `sufficient`.

Evidence:

- batch-16 coverage still passes with `73` harvested results and `6/6`
  fetch-verified sources
- the current manifest still keeps RL-1 dependency-closed with its local
  supplier chain, and the focused manifest/policy checks report no error
- the six current scope rows still match the live plan and notes: `Definition 5.2`
  still has the exact later home RL-2, the `U_chi` paragraph still has the exact
  later home RL-10, and the remaining four rows are still honest owner-level
  exclusions rather than hidden prerequisites
- no current plan validation failure remains on this page

Changed scaffold record: none.

### Finding: `artin-induction-and-rational-characters`

Disposition: `sufficient`.

Evidence:

- the current manifest row
  `lem-cyclic-generator-class-functions-by-moebius-inversion` no longer
  depends on `cor-classical-mobius-inversion`; its live dependencies are now
  only `def-generated-subgroup` and
  `thm-frobenius-formula-for-induced-characters`
- the current batch-17 notes record that scaffold-fix closure as the
  page-local finding
  `artin-induction-and-rational-characters:cor-classical-mobius-inversion-closure`
- batch-17 coverage still passes with `29` harvested results and `4/4`
  fetch-verified sources
- the focused manifest, policy, and live-plan checks now show no current
  undeclared-prereq, forbidden B-page, or unresolved-id defect on this page
- the two batch-17 scope rows still stand on current bytes and remain
  non-blocking boundary choices

Changed scaffold record: none.

## Verdict file

`research/frontier-30-alpha-a-step3-verdicts.json` now matches the verified
current bytes:

- `brauer-characters-and-decomposition-matrices` -> `sufficient`
- `second-cohomology-and-abelian-kernel-extensions` -> `sufficient`
- `harish-chandra-isomorphism-casimir-and-central-characters` -> `sufficient`
- `artin-induction-and-rational-characters` -> `sufficient`
