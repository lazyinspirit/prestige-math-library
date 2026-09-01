# frontier-28 · Alpha group `a` · Step 3 recheck

I re-read the authoritative Step-3 task, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `CLAUDE.md`, the current group-`a` scaffold review, each
assigned batch's `## Step-3 fix pass` notes, the live batch manifests and
coverage files, and the current `research/plan-spec.json`.

Checks run on Tuesday, September 1, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group a`
  - `scope-decisions: a: 15 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-28 --group a`
  - `scope-decisions: 15 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-2.coverage.json`
  - `coverage-checklist: 2 page(s), 70 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-3.coverage.json`
  - `coverage-checklist: 1 page(s), 83 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-8.coverage.json`
  - `coverage-checklist: 1 page(s), 72 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-2.pages.json research/frontier-28-batch-3.pages.json research/frontier-28-batch-8.pages.json`
  - `content-policy: 134 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json`
  - `source-fetch-check: 13/13 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-3.coverage.json`
  - `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-8.coverage.json`
  - `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - terminal note: `NOTE: 671 planned page(s) carry no item list yet ...`
  - terminal status: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`

No newly pending scope row appeared after the refresh, so no scope-decision
resolution was required in this pass.

## Finding dispositions

1. Batch `2`, finding on `rees-modules-artin-rees-and-hilbert-samuel-theory`:
   closed as sufficient.
   The accepted repair is present on current disk. The live canonical coverage
   row now includes
   `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`, and the five
   retained scope rows for this page still match the current plan boundary:
   `Example 10.58.9` still lands on
   `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` at order
   `111.022`, while the four out-of-scope rows remain outside the current
   Rees/Artin-Rees/Hilbert-Samuel route.

2. Batch `2`, no batch-local repair finding on
   `flatness-and-faithful-flatness`: closed as sufficient.
   The no-change pushback still verifies on current bytes. The live manifest
   keeps the Tor-free local and faithful-flatness criteria the design requires,
   `ex-faithfully-flat-principal-open-cover` still sits on
   `flatness-and-faithful-flatness-examples` at order `111.024`, and the two
   retained out-of-scope rows remain correctly outside the page's Noetherian,
   non-Tor boundary.

3. Batch `3`, finding on `inverse-limits-and-noetherian-completion`: closed as
   sufficient.
   The accepted dependency repair is present on current disk. The live manifest
   now gives `thm-completion-is-exact-on-finite-modules` the CA-11 inputs
   `thm-artin-rees-lemma` and
   `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`,
   `thm-faithful-flatness-of-jacobson-adic-completion` the CA-12 input
   `thm-faithfully-flat-ring-map-characterisations`,
   `thm-finite-modules-over-complete-noetherian-rings-are-complete` the CA-11
   input `thm-krull-intersection-theorem`, and
   `thm-completion-preserves-dimension-and-hilbert-samuel-data` the batch-2
   Hilbert-Samuel inputs. The six retained scope rows also stay exact on the
   current plan: Artin-Rees still defers back to CA-11, the finite
   closed-fibre local completion result still defers to
   `henselian-rings-and-equicharacteristic-cohen-structure` at order
   `111.027`, regularity preservation still defers to
   `regular-local-rings-and-homological-dimension` at order `111.035`, and the
   `\varprojlim^1`, formal-power-series, and principality rows remain outside
   the retained route.

4. Batch `8`, finding on `projective-and-injective-resolutions`: closed as
   sufficient.
   The accepted repairs are present on current disk. All fifteen named A-page
   items added in the scaffold review now have direct coverage carriers, the
   Grothendieck support block precedes
   `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`
   on the live manifest, and the one retained scope row still has an exact
   later home: `Lemma 10.109.3` remains deferred to
   `yoneda-extensions-and-homological-dimension` at order `365.053`, outside
   HA-5's current resolutions/comparison/horseshoe/Grothendieck scope.

## Pair verdicts

- `rees-modules-artin-rees-and-hilbert-samuel-theory`: `sufficient`
  - current manifest size: `17` A-page items, `7` B-page items
- `flatness-and-faithful-flatness`: `sufficient`
  - current manifest size: `15` A-page items, `7` B-page items
- `inverse-limits-and-noetherian-completion`: `sufficient`
  - current manifest size: `21` A-page items, `7` B-page items
- `projective-and-injective-resolutions`: `sufficient`
  - current manifest size: `51` A-page items, `9` B-page items

`research/frontier-28-alpha-a-step3-verdicts.json` already matches these
verified current-byte outcomes, so no JSON content change was required.
