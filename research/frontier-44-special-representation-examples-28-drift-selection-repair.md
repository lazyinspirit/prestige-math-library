# Step 1 planned-inventory selection repair

The held `1-drift` plan gate rejected `roots-and-rational-powers` with
`Empty frontier page` before examining page declarations. The planning writer
(`tools/plan-manifests.mjs`, `writeManifests`) deliberately clears item arrays
for selected A/B pages; scaffold writers fill them afterwards. Both shared
readers added for current-run plan overlays incorrectly required populated
arrays at this earlier boundary.

Repair: `frontierGateScope` and `readRunManifestPages` accept an explicit
`allowEmptyItems` option, defaulting to false. Only `validate-plan.mjs` opts in,
along with its existing permission to validate planned items before item files
exist. Missing/non-array inventories remain invalid. Nonempty manifests,
valid unique page identities/categories, A/B kind and numeric order remain
required; selected pages must occur uniquely in the canonical plan and any
explicit page selector must exactly equal the manifest page set. Populated
inventories retain item identity, dependency, ownership and closure checks.
The wrapper already allowed an empty item set specifically for `validate-plan`
and required a populated set for every mathematical item validator; it needed
no change.

Review: inspected planning creation, current-run overlay and native stage
callers. Plan gates run at drift, drift application, scaffold, splice and later
content/closeout boundaries. At every boundary this is a page-plan validation
contract, not inventory completion evidence. Scaffold artifact readiness still
rejects each empty page (`scaffoldArtifacts`), later item batteries reject an
empty run inventory, and shared reader/scoped liveness defaults remain strict.
No stage-table change, mathematical item, page, manifest, proof contract,
certification, published supplier interface or runtime state was modified.
There are no affected mathematical consumers or mathematical evidence refresh
obligations from this mechanical selector correction.

Focused verification (all successful):

- `node --test tools/validate-plan-frontier.test.mjs tools/frontier-gate-scope.test.mjs`
  — 29 tests, including native planned-empty page validation, empty-page
  missing/cyclic prerequisites, malformed and missing inventories, duplicate or
  absent page identities, selector mismatch, strict defaults, seven native item
  gate empty-scope rejections, and existing populated inventory/supplier tests.
- `node tools/tsx-run.mjs --test tools/autopilot/test/frontier-validator-scope.test.mts`
  — 5 tests, covering actual stage wrapper selections and fail-closed scope.
- `node --test tools/gate-liveness-frontier.test.mjs`
  — 3 tests, including strict inventory rejection with `--allow-missing`.

The assigned reviewer made the repair, inspected its diff and corrected the
regression expectation that had required rejecting legitimate planned pages.
Code/test paths were clean before these edits; all changes on those paths are
this repair. The orchestrator owns the stable full `1-drift` gate pass, commit
and ordinary engine retry. This note does not claim those actions occurred.
