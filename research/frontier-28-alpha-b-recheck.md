# frontier-28 · Alpha group `b` · Step 3 recheck

I re-read the authoritative Step-3 task, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `CLAUDE.md`, the current group-`b` scaffold review, each
assigned batch's `## Step-3 fix pass` notes, the live batch manifests and
coverage files, and the current `research/plan-spec.json`.

Checks run on Tuesday, September 1, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group b`
  - `scope-decisions: b: 13 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-28 --group b`
  - `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-28-batch-1.coverage.json research/frontier-28-batch-7.coverage.json research/frontier-28-batch-10.coverage.json --require-destination`
  - `coverage-checklist: 4 page(s), 145 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-1.pages.json research/frontier-28-batch-7.pages.json research/frontier-28-batch-10.pages.json`
  - `content-policy: 163 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-1.coverage.json research/frontier-28-batch-7.coverage.json research/frontier-28-batch-10.coverage.json`
  - `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - terminal note: `NOTE: 671 planned page(s) carry no item list yet ...`
  - terminal status: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`

No newly pending scope row appeared after the refresh, so no scope-decision
resolution was required in this pass.

## Finding dispositions

1. Finding `197015618faf02f31af92454f03ea976eb6eca158146af1c5f5af57c39bc3ec4`
   on `small-cancellation-and-dehn-algorithms`: closed as sufficient.
   The accepted routing repair is present on current disk. The batch-1 fix-pass
   notes still point the Löh continuation to
   `hyperbolic-spaces-and-hyperbolic-groups`, and the live coverage row still
   carries that exact deferred destination. The current plan continues to home
   the later bridge on GT-12, so no further scaffold edit is owed.

2. Finding `2c9de93b0f00e9ab0ea871651c9a4a582ee03bde652af93a70a7a69cd7852dbe`
   on `small-cancellation-and-dehn-algorithms`: closed as sufficient.
   The Touikan `Theorem 3.5.12` pushback still matches the live page boundary.
   GT-8 still ends at the torsion theorem and torsion-free corollary, and the
   current batch-1 manifest still has no retained infinitude item or downstream
   dependency that would pull this weaker consequence back into scope.

3. Finding `c50ed693e868b6a9166853dd39ded81eed1da62e8c078877c03c3385f3d688ce`
   on `inverse-systems-profinite-groups-and-completion`: closed as sufficient.
   Lenstra Section 3 remains an honest out-of-scope omission. The live GT-16
   route still covers inverse limits, completion, residual finiteness, and
   subgroup separability, with no complements, Schur-Zassenhaus, or Frattini
   item on the retained page.

4. Finding `4273fdf3d8827b8f3a698ac7d871bc30b797173e778d8a8f3dbba852214559cf`
   on `inverse-systems-profinite-groups-and-completion`: closed as sufficient.
   Stover `Theorem 1.8` is still outside the retained route. The live page
   continues to keep only the non-load-bearing Malcev remark rather than a
   lattice-level residual-finiteness application.

5. Finding `abf3776d16f615a5c4f947382922a326eb0f5b20c98d1ad1c0484f8a71098c80`
   on `inverse-systems-profinite-groups-and-completion`: closed as sufficient
   for Step 3 with unresolved owner scope.
   The stronger Ribes-Zalesskii subgroup-product theorem is still source-backed
   and still lacks an exact committed later home on current disk. The current
   coverage row and scope-decision row both correctly preserve this as
   `owner-decision`, so no batch-local repair is licensed here.

6. Batch `7` (`braided-and-symmetric-monoidal-categories`): no batch-local
   Step-3 finding id was assigned, and the no-change pushback still verifies on
   current bytes. The current scope rows continue to support the out-of-scope
   EGNO and Mac Lane exclusions plus the deferred Muger routing to
   `duality-and-rigidity-in-monoidal-categories`.

7. Batch `10` (`whitney-embedding-tubular-neighbourhoods-and-approximation`):
   no batch-local Step-3 finding id was assigned, and the no-change pushback
   still verifies on current bytes. The current scope rows continue to support
   the Lee and Whitney exclusions, while Gualtieri `Corollary 3.30` remains a
   valid `owner-decision` because current disk still names later
   cobordism/intersection pages but no exact committed home for that corollary.

## Pair verdicts

- `small-cancellation-and-dehn-algorithms`: `sufficient`
  - current manifest size: `26` A-page items, `7` B-page items
- `inverse-systems-profinite-groups-and-completion`: `sufficient`
  - current manifest size: `33` A-page items, `7` B-page items
- `braided-and-symmetric-monoidal-categories`: `sufficient`
  - current manifest size: `29` A-page items, `7` B-page items
- `whitney-embedding-tubular-neighbourhoods-and-approximation`: `sufficient`
  - current manifest size: `44` A-page items, `10` B-page items

`research/frontier-28-alpha-b-step3-verdicts.json` already matches these
verified current-byte outcomes, so no JSON content change was required.
