# frontier-30 — Alpha group `a` Step 3 scaffold review

Scope: batches `1`, `16`, and `17`, covering
`brauer-characters-and-decomposition-matrices`,
`second-cohomology-and-abelian-kernel-extensions`,
`harish-chandra-isomorphism-casimir-and-central-characters`, and
`artin-induction-and-rational-characters`.

I read each owned batch manifest, coverage file, notes file, the controlling
design sections in `research/plan-group-theory-track.md`,
`research/plan-representation-theory-lie-track.md`, and
`research/plan-representation-theory-groups-track.md`, the current
`research/plan-spec.json`, and the run-level drift receipt
`research/frontier-30-alpha-step0-drift.md`. I then refreshed
`research/frontier-30-alpha-a-scope-decisions.json`, resolved all eight pending
rows with current evidence, and checked the resulting receipt.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `brauer-characters-and-decomposition-matrices` | 1 | sufficient | The GT-19 manifest still matches the controlling design item-for-item, the live closure already covers the design prerequisites recorded in Step 0, and the current coverage/source stack is sufficient for authoring. |
| `second-cohomology-and-abelian-kernel-extensions` | 1 | sufficient | The GT-22 scaffold keeps the degree-two comparison and five-term obligations explicit on the page instead of hiding them behind unbuilt HA pages, while the current manifest, coverage, and notes still give an authorable low-degree route with no unresolved dependency or source-liveness defect. |
| `harish-chandra-isomorphism-casimir-and-central-characters` | 16 | sufficient | The RL-1 repair closes the missing DG/RL item interfaces locally inside the page, keeps all six deferred rows non-load-bearing, and now has a fetch-verified six-source stack plus clean manifest and coverage checks. |
| `artin-induction-and-rational-characters` | 17 | sufficient | The Step-0 drift-applied prerequisite set is now present in the live plan, the RG-1 route still matches the design's theorem spine and scope boundary, and the current source stack is sufficient for authoring without stealing RG-2 or RG-3. |

No batch-local scaffold repair was needed on the current bytes. The owned A
pages are already authorable.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-30 --group a` produced
eight current decline rows for this group. I resolved three as `stands` and
five as `owner-decision`.

`stands`:

- Sakellaridis `Definition 5.2` still has an exact later home on RL-2
  `verma-modules-and-shapovalov-forms`.
- Etingof's `U_chi` definition paragraph still has an exact later home on RL-10
  `primitive-ideals-and-duflo-theorem`, whose current design explicitly owns
  central reductions.
- The Magma Schur-index definition block still has an exact later home on RG-3
  `schur-indices-and-fields-of-definition`.

`owner-decision`:

- Etingof `Corollaries 14.3`, `14.4`, and `14.5` are all Harish-Chandra-bimodule
  statements. The current later RL pages give a plausible neighborhood
  (`primitive-ideals-and-duflo-theorem`) but no exact later page on current disk
  explicitly owns those bimodule results.
- Kleshchev `Example 2.3.4(ii)` is a plausible later affine/Kac-Moody example,
  but the current RL-13 design owns loop extensions and affine root data rather
  than this exact Casimir example.
- Kay Yang `Theorem 6` belongs somewhere between RG-1 and RG-2 in subject
  matter, but no exact later page on the current plan currently isolates the
  regular-character decomposition into inductions of nontrivial linear
  characters of cyclic subgroups.

Those five owner-level rows do not block the current A pages. RL-1 still stops
before Harish-Chandra bimodules, affine Kac-Moody Casimir calculations, and
maximal-quotient theory; RG-1 still stops before cyclic-linear or
elementary-subgroup induction refinements.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group a`
  Result: `scope-decisions: a: 8 decline(s), 8 pending`.
- `node tools/scope-decisions.mjs check --run frontier-30 --group a`
  Result after resolution: `scope-decisions: 8 current decline(s), 0 error(s)`.
- `node tools/manifest-deps.mjs research/frontier-30-batch-1.pages.json research/frontier-30-batch-16.pages.json research/frontier-30-batch-17.pages.json`
  Result: `manifest-deps: 129 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-1.pages.json research/frontier-30-batch-16.pages.json research/frontier-30-batch-17.pages.json`
  Result: `content-policy: 129 scoped item(s), 0 error(s), 0 warning(s)`.
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
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: pass; ends with `OK`, with only the standing repository-wide
  `redundant-prereq` advisories and the standard note that many planned pages
  still have no item list.
- JSON parse of `research/frontier-30-alpha-a-scope-decisions.json` and
  `research/frontier-30-alpha-a-step3-verdicts.json`
  Result: `json-parse: ok`.
- `git diff --check -- research/frontier-30-alpha-a-scope-decisions.json research/frontier-30-alpha-a-step3-scaffold-review.md research/frontier-30-alpha-a-step3-verdicts.json`
  Result: clean.
